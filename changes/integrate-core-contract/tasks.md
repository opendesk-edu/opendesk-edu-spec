<!--
SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
SPDX-License-Identifier: Apache-2.0
-->

# Integrate openDesk Core Contract Manifest into Service Specs — Tasks

## Wave 1: Tooling (no spec changes)
1. Add `ajv` and `js-yaml` as devDependencies to root `package.json`
2. Create `scripts/validate-contracts.sh`:
   - Extract YAML blocks from `## Integration Contract` sections
   - Convert YAML → JSON via `js-yaml`
   - Validate against `opendesk_core.schema.json` via `ajv`
   - Exit non-zero on validation failure, list per-service PASS/FAIL
3. Create `scripts/generate-metadata.sh`:
   - Parse all contract YAML blocks
   - Generate `METADATA.yml` table from structured data
   - Enrich `_registry/index.md` service table with contract fields
4. Add `"validate:contracts"` and `"generate:metadata"` scripts to `package.json`
5. Add `validate` stage to `.gitlab-ci.yml`

## Wave 2: Add contract manifests (batch — Critical + High tier)
6. Add `## Integration Contract` YAML blocks to all Critical-tier specs:
   - nubus, nextcloud, opencloud, ilias, moodle, bigbluebutton
7. Add `## Integration Contract` YAML blocks to all High-tier specs:
   - xwiki, collabora, element, ox-appsuite, sogo, zammad, jitsi, openproject, dovecot-postfix
8. Run `npm run validate:contracts` — fix any schema violations

## Wave 3: Add contract manifests (Medium + Low tier)
9. Add `## Integration Contract` YAML blocks to Medium + Low tier specs:
   - bookstack, cryptpad, notes, etherpad, planka, limesurvey, self-service-password, typo3
10. Run `npm run validate:contracts` — fix any schema violations

## Wave 4: Registry updates
11. Update `specs/_registry/index.md` — add contract manifest reference per service
12. Update `specs/_registry/implementation-reference.md` — add contract file path per service
13. Run `npm run generate:metadata` — verify generated `METADATA.yml` matches existing content

## Wave 5: Verify
14. Run full CI pipeline: `npm run validate:contracts && npm run build`
15. Verify no Docusaurus build errors from new markdown sections
16. Cross-check: for 3 random services, verify contract YAML matches the narrative spec content
17. Archive this change proposal to `archive/` once all acceptance criteria met
