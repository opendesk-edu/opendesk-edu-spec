#!/bin/bash
# SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
# SPDX-License-Identifier: Apache-2.0
# Deployment script for openspec.opendesk-edu.org
#
# This script:
# 1. Builds the Docusaurus site
# 2. Copies build output to hugo-chemie-lernen-org static directory
# 3. Sets proper permissions
# 4. Updates Traefik configuration
# 5. Verifies deployment

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
BUILD_DIR="${PROJECT_DIR}/build"
HUGO_REPO="/opt/git/hugo-chemie-lernen-org"
OPENDESC_TARGET="${HUGO_REPO}/myhugoapp/static/openspec"
HUGO_CONTAINER="hugo-chemie-lernen-org"
TRAEFIK_CONF="/opt/git/docker-traefik/dynamic_conf/openspec-opendesk-edu.yml"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}=== openspec.opendesk-edu.org Deployment ===${NC}"
echo ""

# Check if node_modules exists
if [ ! -d "${PROJECT_DIR}/node_modules" ]; then
    echo -e "${YELLOW}→ Installing dependencies...${NC}"
    cd "${PROJECT_DIR}"
    npm install
fi

# Build the site
echo -e "${YELLOW}→ Building Docusaurus site...${NC}"
cd "${PROJECT_DIR}"
npm run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}ERROR: Build failed, build/ directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Check if hugo repo exists
if [ ! -d "$HUGO_REPO" ]; then
    echo -e "${YELLOW}⚠ Hugo repository not found, skipping deployment${NC}"
    echo "  Build is available at: $BUILD_DIR"
    exit 0
fi

# Copy build to hugo static directory
echo -e "${YELLOW}→ Copying build to hugo static directory...${NC}"

if [ -d "$OPENDESC_TARGET" ]; then
    rm -rf "$OPENDESC_TARGET"
fi

mkdir -p "$OPENDESC_TARGET"
cp -r "$BUILD_DIR"/* "$OPENDESC_TARGET/"

# Set permissions
chmod -R 755 "$OPENDESC_TARGET"
chown -R $(id -u):$(id -g) "$OPENDESC_TARGET"

echo -e "${GREEN}✓ Files copied to $OPENDESC_TARGET${NC}"
echo ""

# Deploy to running container
echo -e "${YELLOW}→ Deploying to hugo container...${NC}"
if docker ps --format "{{.Names}}" 2>/dev/null | grep -q "^$HUGO_CONTAINER$"; then
    docker cp "$OPENDESC_TARGET/." "$HUGO_CONTAINER:/usr/share/nginx/html/openspec/" 2>/dev/null
    docker exec "$HUGO_CONTAINER" chmod -R 755 /usr/share/nginx/html/openspec/ 2>/dev/null
    echo -e "${GREEN}✓ Files deployed to container${NC}"
else
    echo -e "${YELLOW}⚠ Container not running${NC}"
fi
echo ""

# Update Traefik configuration
echo -e "${YELLOW}→ Updating Traefik configuration...${NC}"
HUGO_IP=$(docker inspect hugo-chemie-lernen-org --format "{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}" 2>/dev/null | head -1)

if [ -z "$HUGO_IP" ]; then
    HUGO_IP="172.22.0.3"
fi

cat > "$TRAEFIK_CONF" <<EOF
http:
  routers:
    openspec-opendesk-edu:
      entryPoints:
        - websecure
      rule: Host(\`openspec.opendesk-edu.org\`)
      service: openspec-opendesk-edu
      middlewares:
        - openspec-add-prefix
      tls:
        certResolver: mytlschallenge
    openspec-opendesk-edu-http:
      entryPoints:
        - web
      rule: Host(\`openspec.opendesk-edu.org\`)
      service: openspec-opendesk-edu
      middlewares:
        - redirect-to-https

  services:
    openspec-opendesk-edu:
      loadBalancer:
        servers:
          - url: http://$HUGO_IP:80
        passHostHeader: true

  middlewares:
    redirect-to-https:
      redirectScheme:
        scheme: https
        permanent: true
    openspec-add-prefix:
      addPrefix:
        prefix: /openspec
EOF

echo -e "${GREEN}✓ Traefik configuration updated${NC}"
echo ""

# Wait for Traefik to reload
sleep 5

# Verify deployment
echo -e "${YELLOW}→ Verifying deployment...${NC}"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://openspec.opendesk-edu.org/" 2>/dev/null || echo "000")

if [ "$HTTP_STATUS" = "200" ]; then
    echo -e "${GREEN}✓ HTTPS endpoint returns 200 OK${NC}"
else
    echo -e "${YELLOW}⚠ HTTPS endpoint returned: $HTTP_STATUS (may need more time)${NC}"
fi

echo ""
echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo ""
echo "🌄 openspec.opendesk-edu.org should be live!"
echo ""
echo "Verify at: https://openspec.opendesk-edu.org"
