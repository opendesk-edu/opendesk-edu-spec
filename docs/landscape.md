---
title: 🌄 Interactive Landscape
sidebar_position: 2
description: Interactive visual map of the 25 openDesk Edu services with search, filtering, and statistics.
---

# 🌄 Interactive Landscape

Explore the complete openDesk Edu ecosystem through our interactive landscape visualization. Browse, search, and filter all 25 integrated services.

<div style={{
  position: 'relative',
  paddingBottom: '75%',
  height: 0,
  marginTop: '2rem',
  marginBottom: '2rem',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  border: '2px solid #06ffa5'
}}>
  <iframe
    src="https://landscape.opendesk-edu.org"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0
    }}
    title="openDesk Edu Landscape - Interactive Service Map"
    loading="lazy"
  />
</div>

## About the Landscape

The [openDesk Edu Landscape](https://landscape.opendesk-edu.org) is an interactive visualization of the complete ecosystem, inspired by the [CNCF Landscape](https://landscape.cncf.io).

### Features

- 🔍 **Powerful Search** - Find services by name, description, or tags
- 🎯 **Tier Filtering** - Filter by Critical, High, Standard, or Low tier
- 📊 **Statistics Dashboard** - License distribution, tier breakdown
- 🔗 **Direct Links** - Click any service to visit its website
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

### Service Categories

The services are organized into 5 main categories:

1. **🎓 Learning Management** - ILIAS, Moodle, BigBlueButton, Jitsi, XWiki
2. **🔐 Identity & Access** - Keycloak, Nubus, Self-Service Password
3. **📚 Content & Collaboration** - Nextcloud, OpenCloud, Collabora, Etherpad, CryptPad, Notes, Draw.io, Excalidraw, BookStack, TYPO3
4. **📊 Project Management** - OpenProject, Planka
5. **📧 Communication** - OX App Suite, SOGo, Dovecot-Postfix, Element, Zammad, LimeSurvey

### Open the Full Landscape

For the best experience, open the landscape in a new tab:

<div style={{textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
  <a
    href="https://landscape.opendesk-edu.org"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      padding: '12px 32px',
      background: '#06ffa5',
      color: '#0a0e27',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '1.1rem'
    }}
  >
    🌄 Open Full Landscape →
  </a>
</div>

## Integration with Specifications

The landscape provides a visual overview, while this OpenSpec provides detailed technical specifications. Use them together:

1. **Start with the Landscape** - Get a high-level understanding of the ecosystem
2. **Dive into Specs** - Read detailed specifications for specific services
3. **Understand Integration** - Review how services work together
4. **Check SLOs/DR** - Verify operational requirements

## Contributing to the Landscape

The landscape data is stored in YAML format and easy to update:

- **Data file**: `data/services.yaml` in the [landscape repository](https://github.com/opendesk-edu/landscape.opendesk-edu.org)
- **Contributing guide**: [README on GitHub](https://github.com/opendesk-edu/landscape.opendesk-edu.org/blob/main/README.md)

## Technical Details

The landscape is:
- **100% Open Source** - Apache-2.0 licensed
- **No Build Process** - Pure HTML/CSS/JavaScript
- **Self-Hosted** - Deployed on your own infrastructure
- **Community-Driven** - Easy to contribute via Pull Requests

**Source code**: [github.com/opendesk-edu/landscape.opendesk-edu.org](https://github.com/opendesk-edu/landscape.opendesk-edu.org)
