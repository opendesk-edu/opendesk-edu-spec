# Contributing to openDesk Edu Specs

## Quick Start

1. Fork the repository
2. Create a feature branch: `git checkout -b my-change`
3. Make your changes following the spec template
4. Open a Pull Request against `master`

## Spec File Structure

Every spec lives under `specs/` and follows this structure:

```
specs/<category>/<service>/index.md
```

Categories: `services/`, `platform/`, `auth/`, `integrations/`, `methodology/`, `automation/`

## Spec Template

Every service spec MUST include these sections (in order):

```markdown
<!--
SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
SPDX-License-Identifier: Apache-2.0
-->

# <Service Name>

## Purpose
(What the service does in one paragraph)

## Scope
- ✅ **In scope**: ...
- ❌ **Out of scope**: ...

## Non-Goals
(What this spec explicitly does NOT cover)

## Requirements
### Requirement: <name>
(Declarative requirement)

#### Scenario: <name>
- GIVEN <precondition>
- WHEN <action>
- THEN <expected result>

## Security Context
| Component | RunAsUser | Capabilities | Seccomp |
|-----------|-----------|--------------|---------|

## API Contracts
- [<Contract Name>](../../integrations/api-contracts/#<anchor>) — <purpose>

## Depends On
(Infrastructure and services this depends on)

## Integrates With
(Services and specs this connects to)

## SLO
**Tier**: Critical | Standard | Low
(Metrics, alerts, capacity)

## Disaster Recovery
(Backup strategy, recovery order, failure scenarios)

## Known Quirks
(Operational gotchas, non-obvious behaviors)
```

## Formatting Rules

- **SPDX header**: Required on every `.md` file (first 5 lines)
- **Headings**: Use `##` for sections, `###` for requirements, `####` for scenarios
- **Scenarios**: Every requirement MUST have at least one `#### Scenario:` with GIVEN/WHEN/THEN
- **Cross-references**: Use relative links (`../services/nextcloud/`, `../../integrations/api-contracts/`)
- **Tables**: Use GitHub Flavored Markdown tables
- **Line endings**: LF (no CRLF)
- **Trailing whitespace**: Trimmed
- **Final newline**: Every file ends with a newline

## Cross-References

When linking to other specs:
- Same category: `../service-name/`
- Other category: `../../platform/security/`
- Contracts: `../../integrations/api-contracts/#contract-<anchor>`
- Registry: `../../_registry/interconnection-matrix/`

## Naming

- Service directories: lowercase, hyphen-separated (`dovecot-postfix`, `self-service-password`)
- Spec files: always `index.md` (not `spec.md`)
- Anchors: lowercase, hyphen-separated (`#contract-keycloak-oidc-token-endpoint`)

## Review Process

All PRs are checked by CI:
1. **SPDX headers**: Every `.md` file must have a valid SPDX header
2. **Cross-references**: All relative links must resolve to existing files
3. **Sidebar validity**: Every sidebar entry must point to an existing `index.md`
4. **Contract anchors**: All contract links must match headers in `api-contracts`
5. **Metadata**: `METADATA.yml` spec count must match actual file count
6. **Docusaurus build**: Must pass `npm run build` without errors
