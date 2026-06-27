#!/bin/bash
# SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
# SPDX-License-Identifier: Apache-2.0
# Import script to sync OpenSpec files from the main repository
# This script copies the spec markdown files from opendesk-edu repository
# and transforms them for Docusaurus

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="${SCRIPT_DIR}/docs"
SERVICES_DIR="${SCRIPT_DIR}/docs/services"
OPENDESK_REPO="${OPENDESK_REPO:-/home/weissto_local/git/opendesk_git/opendesk-edu}"
OPENDESC_SPEC_DIR="${OPENDESK_REPO}/openspec/specs"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=== Importing OpenSpec Files ===${NC}"
echo ""

# Check if opendesk-edu repository exists
if [ ! -d "$OPENDESC_SPEC_DIR" ]; then
    echo -e "${RED}ERROR: opendesk-edu repository not found at $OPENDESK_REPO${NC}"
    echo "Set OPENDESK_REPO environment variable to the correct path"
    exit 1
fi

echo -e "${YELLOW}Source: $OPENDESC_SPEC_DIR${NC}"
echo -e "${YELLOW}Target: $DOCS_DIR${NC}"
echo ""

# Create directories
mkdir -p "$SERVICES_DIR"
mkdir -p "$DOCS_DIR/platform"
mkdir -p "$DOCS_DIR/integrations"
mkdir -p "$DOCS_DIR/registry"
mkdir -p "$DOCS_DIR/community"

# Function to import a file
import_file() {
    local source="$1"
    local target="$2"

    if [ ! -f "$source" ]; then
        echo "  Skipping (not found): $source"
        return
    fi

    # Add Docusaurus frontmatter if not present
    if ! head -1 "$source" | grep -q "^---$"; then
        # Extract title from first heading
        local title=$(grep -m 1 "^# " "$source" | sed 's/^# //' | sed 's/[[:space:]]*$//')

        # Create frontmatter
        {
            echo "---"
            echo "title: \"$title\""
            echo "---"
            echo ""
            cat "$source"
        } > "$target"
    else
        cp "$source" "$target"
    fi

    echo "  ✓ Imported: $target"
}

# Import service specifications
echo -e "${GREEN}Importing service specifications...${NC}"
for service_dir in "$OPENDESC_SPEC_DIR"/services/*/; do
    if [ -d "$service_dir" ]; then
        service_name=$(basename "$service_dir")
        spec_file="$service_dir/spec.md"
        target_file="$SERVICES_DIR/${service_name}.md"

        if [ -f "$spec_file" ]; then
            import_file "$spec_file" "$target_file"
        fi
    fi
done
echo ""

# Import platform specifications
echo -e "${GREEN}Importing platform specifications...${NC}"
for spec_file in "$OPENDESC_SPEC_DIR"/platform/*/spec.md; do
    if [ -f "$spec_file" ]; then
        platform_name=$(basename "$(dirname "$spec_file")")
        target_file="$DOCS_DIR/platform/${platform_name}.md"
        import_file "$spec_file" "$target_file"
    fi
done
echo ""

# Import integration specifications
echo -e "${GREEN}Importing integration specifications...${NC}"
for spec_file in "$OPENDESC_SPEC_DIR"/integrations/*/spec.md; do
    if [ -f "$spec_file" ]; then
        integration_name=$(basename "$(dirname "$spec_file")")
        target_file="$DOCS_DIR/integrations/${integration_name}.md"
        import_file "$spec_file" "$target_file"
    fi
done
echo ""

# Import registry documents
echo -e "${GREEN}Importing registry documents...${NC}"
for spec_file in "$OPENDESC_SPEC_DIR"/_registry/*/spec.md; do
    if [ -f "$spec_file" ]; then
        registry_name=$(basename "$(dirname "$spec_file")")
        target_file="$DOCS_DIR/registry/${registry_name}.md"
        import_file "$spec_file" "$target_file"
    fi
done
echo ""

# Import METHODOLOGY and METADATA
echo -e "${GREEN}Importing metadata files...${NC}"
import_file "$OPENDESC_SPEC_DIR/METHODOLOGY.md" "$DOCS_DIR/methodology.md"
import_file "$OPENDESC_SPEC_DIR/METADATA.yml" "$DOCS_DIR/metadata.yml"
echo ""

echo -e "${GREEN}=== Import Complete ===${NC}"
echo ""
echo "Imported files:"
echo "  - Service specs: $(ls -1 $SERVICES_DIR | wc -l)"
echo "  - Platform specs: $(ls -1 $DOCS_DIR/platform | wc -l)"
echo "  - Integration specs: $(ls -1 $DOCS_DIR/integrations | wc -l)"
echo "  - Registry docs: $(ls -1 $DOCS_DIR/registry | wc -l)"
echo ""
echo "Next steps:"
echo "  1. Review imported files"
echo "  2. Run 'npm run start' to preview"
echo "  3. Run 'npm run build' to build static site"
echo "  4. Deploy to openspec.opendesk-edu.org"
