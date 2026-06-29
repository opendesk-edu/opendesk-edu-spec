---
title: Keycloak
sidebar_position: 1
description: OIDC/SAML identity provider for the openDesk Edu ecosystem.
---

# Keycloak

&lt;!--
SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
SPDX-License-Identifier: Apache-2.0
-->

## Overview

Keycloak is the central identity provider (IdP) for the openDesk Edu ecosystem.
It provides OIDC and SAML 2.0 authentication, issuing JWT access tokens to all
OIDC client services. Keycloak is deployed as part of the Nubus identity and
access management platform.

## Deployment

- **Namespace**: `opendesk`
- **Realm**: `opendesk` (single realm for all services)
- **Database**: PostgreSQL (RWO PVC: `keycloak-postgres-0`)
- **Authentication Flows**: OIDC authorization code flow, SAML Web SSO
- **Admin Console**: `/admin` path on the Keycloak host

## Authentication Flow

1. User visits a service (e.g., Nextcloud) without an active session.
2. Service redirects to Keycloak `/auth` endpoint with OIDC parameters.
3. Keycloak authenticates user (password, MFA, or SAML IdP redirect).
4. Keycloak issues JWT access token and ID token.
5. Service validates token using Keycloak's JWKS endpoint.
6. Service establishes local session for the user.

## OIDC Clients

All OIDC clients are registered in the `opendesk` realm. Each service
has its own client ID and secret.

| Client ID | Service | Flow |
|-----------|---------|------|
| `nextcloud` | Nextcloud | Authorization code |
| `opencloud` | OpenCloud | Authorization code |
| `openproject` | OpenProject | Authorization code |
| `ilias` | ILIAS | Authorization code |
| `moodle` | Moodle | Authorization code |
| `sogo` | SOGo | Authorization code |
| `planka` | Planka | Authorization code |
| `element` | Element | Authorization code |
| `etherpad` | Etherpad | Authorization code |
| `zammad` | Zammad | Authorization code |
| `limesurvey` | LimeSurvey | Authorization code |
| `cryptpad` | CryptPad | Authorization code |
| `drawio` | Draw.io | Authorization code |
| `excalidraw` | Excalidraw | Authorization code |
| `notes` | Notes | Authorization code |

## SAML Providers

Keycloak acts as a SAML IdP for services that do not support OIDC:

- **OX App Suite** — SAML 2.0 Web SSO
- **XWiki** — SAML 2.0 Web SSO
- **TYPO3** — SAML 2.0 Web SSO

## User Directory Integration

Keycloak is backed by OpenLDAP for user, group, and role management.

- **User Federation**: LDAP provider synchronized with OpenLDAP
- **Group Sync**: LDAP groups mapped to Keycloak roles
- **Attribute Mapping**: `mail`, `givenName`, `sn`, `preferred_username` mapped from LDAP

## Secrets

- **Admin password**: Stored in `keycloak-secret` K8s secret
- **Database credentials**: Stored in `keycloak-postgres-secret`

## Known Issues

- **PostgreSQL backup**: RWO PVC `keycloak-postgres-0` is backed up via
  native `pg_dump` (not via k8up main schedule). See the [backup spec](../platform/backup).
- **Session expiry**: Default OIDC session timeout is 30 minutes; refresh
  tokens expire after 8 hours.
