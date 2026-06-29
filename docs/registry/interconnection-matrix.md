---
title: Service Interconnection Matrix
sidebar_position: 1
description: Maps runtime dependencies, data flows, and shared infrastructure between services.
---

# Service Interconnection Matrix

&lt;!--
SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
SPDX-License-Identifier: Apache-2.0
-->

Maps runtime dependencies, data flows, and shared infrastructure between services.
A cell contains the relationship type; empty means no direct interaction.

## Legend

- **AUTH** — Uses service for authentication
- **DATA** — Reads/writes data to/from service
- **TOKEN** — Obtains auth token via silent login (Intercom)
- **DELEGATE** — Delegates functionality to service
- **MAIL** — Sends/receives mail through service
- **IMAP** — Reads mail via IMAP protocol
- **LDAP** — Reads/writes LDAP directory entries
- **SHARED** — Shares infrastructure dependency (DB, cache, storage)

## Matrix

| | KC | NC | OC | OX | SG | EL | NB | OP | XW | IL | MD | BB | EP | BS | PK | ZM | LS | SP | CP | DI | EX | T3 | NT | JT | DP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Keycloak** | — | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | AUTH | — | — | — | AUTH | AUTH | AUTH | — |
| **Nextcloud** | | — | DATA | DATA | DATA | DATA | PORTAL | DATA | NEWS | DATA | | | | | | | | | FILE | | | | |
| **OpenCloud** | | | — | DATA | DATA | | PORTAL | | | | | | | | | | | | | | | | |
| **OX AppSuite** | | | | — | DELEGATE | | PORTAL | DATA | NEWS | | | | | | | | | | | | | | | MAIL | |
| **SOGo** | | | | | — | | PORTAL | | | | | | | | | | | LDAP | | | | | | | IMAP\|MAIL | |
| **Element** | | | | | | — | TOKEN | | | | | | | | | | | | | | | | | UVS |
| **Nubus** | | | | | | | — | | | | | | | | | | | | | | | | | |
| **OpenProject** | | DATA | | | | | | — | | | | | | | | | | | | | | | |
| **XWiki** | | NEWS | | | | | | | — | | | | | | | | LDAP | | | | | | |
| **ILIAS** | | | | | | | PORTAL | | | — | | | | | | | | | | | | | | |
| **Moodle** | | | | | | | PORTAL | | | | — | | | | | | | | | | | | | |
| **BBB** | | | | | | | PORTAL | | | | | — | | | | | | | | | | | |
| **Etherpad** | | | | | | | PORTAL | | | | | | — | | | | | | | | | | |
| **BookStack** | | | | | | | PORTAL | | | | | | | — | | | | | | | | | |
| **Planka** | | | | | | | PORTAL | | | | | | | | — | | | | | | | | |
| **Zammad** | | | | | | MAIL | PORTAL | | | | | | | | | — | | | | | | | | | | MAIL | MAIL |
| **LimeSurvey** | | | | | | | PORTAL | | | | | | | | | | — | LDAP | | | | | | | | | | |
| **SSP** | | | | | | | | | | | | | | | | | | LDAP | — | | | | |
| **Collabora** | | DELEGATE | WOPI | | | | | | WOPI | | | | | | | | | | | — | | | |
| **CryptPad** | | | | | | | PORTAL | | | | | | | | | | | | | | — | | |
| **Draw.io** | | | | | | | PORTAL | | | | | | | | | | | | | | | — | |
| **Excalidraw** | | | | | | | PORTAL | | | | | | | | | | | | | | | | — | |
| **TYPO3** | | | | | | | PORTAL | | | | | | | | | | | | | | | | — | |
| **Notes** | | | | | | | PORTAL | | | | | | | | | | | | | | | | | — | |
| **Jitsi** | | | | | | | PORTAL | | | | | | | | | | | | | | | | | | — |
| **Dovecot/Postfix** | | | MAIL | MAIL | MAIL | MAIL | | | | | | | | | | | | | | | | | | | | — |

## Abbreviations

| Abbr | Service | Abbr | Service | Abbr | Service |
|------|---------|------|---------|------|---------|
| KC | Keycloak | NC | Nextcloud | OC | OpenCloud |
| OX | OX AppSuite | SG | SOGo | EL | Element |
| NB | Nubus | OP | OpenProject | XW | XWiki |
| IL | ILIAS | MD | Moodle | BB | BigBlueButton |
| EP | Etherpad | BS | BookStack | PK | Planka |
| ZM | Zammad | LS | LimeSurvey | SP | Self-Service Password |
| CP | CryptPad | DI | Draw.io | EX | Excalidraw |
| T3 | TYPO3 | NT | Notes | JT | Jitsi |
| DP | Dovecot/Postfix | | | | |

## Key Observations

- **Keycloak** is the central authentication hub, providing AUTH to 21 services.
- **Nubus** provides the Portal (PORTAL) integration point for 15 services.
- **Collabora** acts as a document editing delegate for Nextcloud (WOPI/DELEGATE),
  XWiki (WOPI), and OpenProject (DATA).
- **SOGo** and **Dovecot/Postfix** share the mail infrastructure (IMAP, MAIL).
- **Zammad** receives mail from Dovecot/Postfix and sends via OX AppSuite.
- **LDAP** dependencies concentrate on SOGo, XWiki, LimeSurvey, and SSP.

## See Also

- [Component Registry](./index) — deployment order and metadata
- [Cross-Service Workflows](../integrations/cross-service-workflows)
- [Implementation Reference](./implementation-reference)
