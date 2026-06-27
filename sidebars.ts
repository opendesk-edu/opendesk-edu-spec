import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    'methodology',
    'quickstart',
    {
      type: 'category',
      label: 'Platform Specifications',
      collapsed: false,
      items: [
        'platform/backup',
        'platform/monitoring',
        'platform/security',
        'platform/operations',
        'platform/disaster-recovery',
        'platform/performance',
        'platform/secret-derivation',
        'platform/upgrade-migration',
      ],
    },
    {
      type: 'category',
      label: 'Integration Specifications',
      collapsed: true,
      items: [
        'integrations/api-contracts',
        'integrations/cross-service-workflows',
        'integrations/intercom',
        'integrations/lti',
        'integrations/file-store',
        'integrations/provisioning',
      ],
    },
    {
      type: 'category',
      label: 'Registry',
      collapsed: true,
      items: [
        'registry/interconnection-matrix',
        'registry/test-coverage-gaps',
        'registry/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      collapsed: true,
      items: [
        'community/contributing',
        'community/governance',
        'community/roadmap',
      ],
    },
  ],
  servicesSidebar: [
    {
      type: 'category',
      label: '🎓 Learning Management',
      collapsed: false,
      items: [
        'services/ilias',
        'services/moodle',
        'services/bigbluebutton',
        'services/jitsi',
        'services/xwiki',
      ],
    },
    {
      type: 'category',
      label: '🔐 Identity & Access',
      collapsed: true,
      items: [
        'services/keycloak',
        'services/nubus',
        'services/self-service-password',
      ],
    },
    {
      type: 'category',
      label: '📚 Content & Collaboration',
      collapsed: true,
      items: [
        'services/nextcloud',
        'services/opencloud',
        'services/collabora',
        'services/etherpad',
        'services/cryptpad',
        'services/notes',
        'services/drawio',
        'services/excalidraw',
        'services/bookstack',
        'services/typo3',
      ],
    },
    {
      type: 'category',
      label: '📊 Project Management',
      collapsed: true,
      items: [
        'services/openproject',
        'services/planka',
      ],
    },
    {
      type: 'category',
      label: '📧 Communication',
      collapsed: true,
      items: [
        'services/ox-appsuite',
        'services/sogo',
        'services/dovecot-postfix',
        'services/element',
        'services/zammad',
        'services/limesurvey',
      ],
    },
  ],
};

export default sidebars;
