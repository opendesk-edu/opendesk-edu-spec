<!--
SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
SPDX-License-Identifier: Apache-2.0
-->

# Integrate openDesk Core Contract Manifest into Service Specs — Delta Specs

## ADDED

### Per-service contract manifests (23 services)

Each `specs/services/*/spec.md` gains an `## Integration Contract` section containing a fenced YAML block conforming to `opendesk_core.schema.json`. Services to receive contracts:

**Critical tier:** nubus, nextcloud, opencloud, ilias, moodle, bigbluebutton
**High tier:** xwiki, collabora, element, ox-appsuite, sogo, zammad, jitsi, openproject, dovecot-postfix
**Medium tier:** bookstack, cryptpad, notes
**Low tier:** etherpad, planka, limesurvey, self-service-password, typo3

### CI validation tooling

- `scripts/validate-contracts.sh` — Extracts contract YAML blocks from spec markdown, converts to JSON, validates against `opendesk_core.schema.json` via `ajv`
- `package.json` devDependency: `ajv` (JSON Schema validator)

## MODIFIED

- `specs/services/*/spec.md` (23 files) — Add `## Integration Contract` section after header, before narrative content
- `specs/_registry/index.md` — Add contract manifest reference per service row
- `specs/_registry/implementation-reference.md` — Add contract manifest file path column
- `METADATA.yml` — Add header note: "Auto-generated from service contract manifests. Source: `scripts/generate-metadata.sh`"

## REMOVED

- (none — existing metadata tables preserved until generation pipeline is verified)

## Data Flow

```
opendesk_core.schema.json (upstream, referenced)
         |
         v
specs/services/*/spec.md (## Integration Contract YAML blocks)
         |
    +----+----+
    v         v
  CI          scripts/generate-metadata.sh
  (ajv)      |
  validates  v
  contracts   METADATA.yml (auto-generated)
             _registry/index.md (enriched)
```
