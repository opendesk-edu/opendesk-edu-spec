<!--
SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
SPDX-License-Identifier: Apache-2.0
-->

# Integrate openDesk Core Contract Manifest into Service Specs

## Status: PROPOSED

**Date proposed:** 2026-06-30
**Phase:** PLAN

## Motivation

The openDesk core platform defines an App-Integrationsvertrag (`opendesk_core.schema.json`) that specifies what every integrated service must declare: identity/SSO configuration, portal registration, routing, persistence, and observability. This contract data currently exists in the spec repo but is scattered across `METADATA.yml`, `_registry/index.md`, and individual spec markdown sections in inconsistent formats.

This creates three problems:

1. **No traceability** — there is no machine-readable link between a spec and the contract it must satisfy
2. **No validation** — when openDesk core updates the contract (e.g., adds a required field), specs silently drift
3. **Duplication** — the same data (auth protocol, database engine, storage type) is maintained manually in 3+ places

Adding a structured "Integration Contract" block to each service spec aligns documentation with the platform contract, enables CI validation, and consolidates scattered metadata into a single source of truth per service.

## Delta Specs

### ADDED

- **Integration Contract block** to each service spec that integrates with openDesk core (22 services)
  - Fenced YAML code block matching `opendesk_core.schema.json` structure
  - Section placed after the spec header, before narrative content
- **`scripts/validate-contracts.sh`** — CI script that extracts YAML contract blocks from specs and validates them against `opendesk_core.schema.json` using `ajv`
- **Contract manifest reference** in `_registry/index.md` linking each service to its contract block

### MODIFIED

- **`METADATA.yml`** — mark as "auto-generated from contract manifests" and add generation script reference
- **`_registry/index.md`** — add column or section linking to per-service contract data
- **`_registry/implementation-reference.md`** — add contract manifest file path per service

### REMOVED

- (none — existing metadata tables remain until migration is verified)

## Scope: Which Services Get a Contract

Services that integrate with the openDesk core platform (have auth, routing, and/or persistence requirements):

| Service | Has Auth | Has Routing | Has Persistence | Contract? |
|---------|----------|-------------|-----------------|-----------|
| nubus | OIDC (IdP) | yes | PostgreSQL, Redis | yes |
| nextcloud | SAML 2.0 | yes | MariaDB, S3, Redis | yes |
| opencloud | OIDC | yes | MariaDB, CephFS, S3, Redis | yes |
| ox-appsuite | SAML 2.0 | yes | MySQL, RWX PVC | yes |
| sogo | OIDC | yes | PostgreSQL, Memcached | yes |
| element | OIDC | yes | PostgreSQL, S3, Redis | yes |
| jitsi | OIDC + Matrix UVS | yes | — | yes |
| bigbluebutton | SAML 2.0 | yes | PostgreSQL, RWX PVC, Redis | yes |
| openproject | SAML 2.0 | yes | PostgreSQL, S3 | yes |
| xwiki | OIDC + LDAP | yes | PostgreSQL/MariaDB | yes |
| collabora | None (WOPI) | yes | — | yes |
| cryptpad | None (Nextcloud) | yes | — | yes |
| notes | OIDC | yes | PostgreSQL, S3, Redis | yes |
| ilias | SAML | yes | MariaDB Galera, S3 | yes |
| moodle | SAML (Shibboleth SP) | yes | MariaDB, CephFS RWX | yes |
| etherpad | OIDC | yes | PostgreSQL | yes |
| bookstack | SAML | yes | MariaDB | yes |
| planka | OIDC | yes | PostgreSQL, RWO PVC | yes |
| zammad | SAML | yes | PostgreSQL, RWO PVC, Redis | yes |
| limesurvey | LDAP | yes | MariaDB | yes |
| self-service-password | LDAP | yes | — | yes |
| typo3 | OIDC | yes | MariaDB | yes |
| dovecot-postfix | KeycloakLDAP | yes | PostgreSQL/MariaDB, RWO | yes |

**Excluded (no platform integration):**

| Service | Reason |
|---------|--------|
| drawio | Stateless, no auth, no routing |
| excalidraw | Stateless, no auth, no routing |

## Contract Block Format

Each service spec gains a new section after its header:

````markdown
## Integration Contract

```yaml
# Validates against: https://opendesk.eu/schema/core/2.x/app-integration.schema.json
app:
  name: nextcloud
  appVersion: "30.0.5"
  coreContract: "2.1.0"
identity:
  sso:
    protocol: saml
    clientId: nextcloud
    clientType: confidential
    redirectUris:
      - "https://nextcloud.example.com/auth/callback"
    scopes:
      - openid
      - profile
      - email
  provisioning:
    scim: false
portal:
  displayName: Nextcloud
  entryUrl: /nextcloud/
  category: kollaboration
routing:
  hostname: nextcloud.opendesk-edu.org
  path: /
  servicePort: 8080
  tls: true
persistence:
  datastores:
    - mariadb
    - s3
    - redis
observability:
  healthPath: /status.php
  metricsPath: /metrics
  logFormat: json
```
````

## Validation Approach

```
scripts/validate-contracts.sh
  └── For each specs/services/*/spec.md
        ├── Extract YAML block between "## Integration Contract" and next "##" heading
        ├── Convert YAML → JSON (js-yaml)
        ├── Validate JSON against opendesk_core.schema.json (ajv)
        └── Report: PASS/FAIL with field-level errors
```

## Affected Specs

- All 23 service specs under `specs/services/`
- `specs/_registry/index.md`
- `specs/_registry/implementation-reference.md`

## Acceptance Criteria

1. Every platform-integrated service spec contains an `## Integration Contract` section with a valid YAML block
2. `scripts/validate-contracts.sh` passes on all 23 contract blocks
3. CI pipeline includes contract validation stage
4. `METADATA.yml` can be regenerated from contract blocks (generation script provided)
5. No regression in existing spec content

## Risks

- **Drift** — contract blocks may diverge from narrative spec content over time. Mitigation: CI validation catches structural drift; narrative drift requires manual review.
- **Schema versioning** — openDesk core may update `opendesk_core.schema.json`. Mitigation: pin `coreContract` version per service, allow multiple schema versions in validator.
- **Maintenance burden** — 23 files to update when the schema changes. Mitigation: this is the point — visibility into what needs updating, rather than silent drift.
