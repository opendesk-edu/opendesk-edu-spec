---
title: Registry Glossary
sidebar_position: 3
description: Standardized terminology used across the openDesk Edu OpenSpec.
---

# Registry Glossary

&lt;!--
SPDX-FileCopyrightText: 2026 openDesk Edu Contributors
SPDX-License-Identifier: Apache-2.0
-->

## Core Platform Components

| Term | Definition |
|------|------------|
| **Nubus** | Identity and access management platform (Univention GmbH) comprising OpenLDAP, Keycloak, Portal, UMC, UMS REST API. |
| **Keycloak** | OIDC/SAML identity provider, issues JWT access tokens to all OIDC clients. Realm: `opendesk`. |
| **OpenLDAP** | User directory service (LDAP bind), organizational unit structure: `ou=users`, `ou=groups`. |
| **Portal** | Single-sign-on web page showing application tiles, navigates to services via Intercom silent login. |
| **Intercom Service** | Cross-app token relay backend enabling silent login (OAuth2 → SAML SP) between OIDC and SAML-only services. |
| **UMC (Univention Management Console)** | Admin interface for directory management. |
| **UMS REST API** | Machine provisioning API at `/univention/udm` for OX Connector and CMS systems. |

## Services

| Term | Definition |
|------|------------|
| **BigBlueButton (BBB)** | Virtual classroom and web conferencing system. |
| **BookStack** | Wiki and documentation platform. |
| **Collabora Online** | Online document editing (WOPI-compatible). |
| **CryptPad** | End-to-end encrypted collaboration suite. |
| **Dovecot/Postfix** | Mail transfer agent and IMAP/POP3 server. |
| **Draw.io** | Diagramming and flowchart tool. |
| **Element** | Matrix-based secure chat client. |
| **Etherpad** | Real-time collaborative text editor. |
| **Excalidraw** | Virtual whiteboard for collaborative sketching. |
| **ILIAS** | Learning management system (LMS). |
| **Jitsi Meet** | Video conferencing and screen sharing. |
| **LimeSurvey** | Survey and questionnaire platform. |
| **Moodle** | Learning management system (LMS). |
| **Nextcloud** | File sync, share, and collaboration platform. |
| **Notes** | Note-taking application (Joplin-based). |
| **OpenCloud** | File sync and share platform (OCM-compatible). |
| **OpenProject** | Project management and collaboration. |
| **OX App Suite** | Groupware (mail, calendar, contacts, tasks). |
| **Planka** | Kanban project management board. |
| **Self-Service Password (SSP)** | LDAP password self-service portal. |
| **SOGo** | Groupware (mail, calendar, contacts). |
| **TYPO3** | Enterprise content management system (CMS). |
| **XWiki** | Advanced wiki platform. |
| **Zammad** | Ticketing and customer support system. |

## Technology Concepts

| Term | Definition |
|------|------------|
| **OIDC** | OpenID Connect — authentication layer on top of OAuth 2.0. |
| **SAML** | Security Assertion Markup Language — XML-based SSO protocol. |
| **LDAP** | Lightweight Directory Access Protocol — user directory. |
| **WOPI** | Web Application Open Platform Interface — document editing protocol. |
| **LTI** | Learning Tools Interoperability — LMS integration standard. |
| **RWO** | ReadWriteOnce — Kubernetes PVC access mode (single node). |
| **RWX** | ReadWriteMany — Kubernetes PVC access mode (multiple nodes). |
| **CSI** | Container Storage Interface — storage plugin standard. |
| **k8up** | Kubernetes backup operator (restic-based). |

## Platform Concepts

| Term | Definition |
|------|------------|
| **Deployment Wave** | Grouped deployment order where services in the same wave deploy in parallel. |
| **Helmfile** | Declarative Helm chart deployment orchestration tool. |
| **Intercom** | Cross-service token relay for silent SSO login. |
| **OpenSpec** | The specification framework documented on this site. |
| **SPDX** | Software Package Data Exchange — license compliance standard. |
| **REUSE** | Free Software Foundation Europe specification for license compliance. |

## See Also

- [Platform Glossary](../platform/glossary) — detailed platform terminology
- [Component Registry](../registry) — service metadata and deployment ordering
