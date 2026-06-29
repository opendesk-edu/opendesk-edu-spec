import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenSpec | openDesk Edu',
  tagline: 'Complete specification framework for the openDesk Edu ecosystem',
  favicon: 'img/favicon.ico',

  url: 'https://openspec.opendesk-edu.org',
  baseUrl: '/',

  organizationName: 'opendesk-edu',
  projectName: 'openspec',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/opendesk-edu/opendesk-edu/tree/main/openspec/specs/',
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/opendesk-edu/opendesk-edu/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'OpenSpec',
      logo: {
        alt: 'openDesk Edu Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'servicesSidebar',
          position: 'left',
          label: 'Services',
        },
        {
          href: 'https://landscape.opendesk-edu.org',
          label: '🌄 Landscape',
          position: 'right',
        },
        {
          href: 'https://opendesk-edu.org',
          label: 'opendesk-edu.org',
          position: 'right',
        },
        {
          href: 'https://github.com/opendesk-edu/opendesk-edu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/intro'},
            {label: 'Methodology', to: '/methodology'},
            {label: 'Glossary', to: '/glossary'},
          ],
        },
        {
          title: 'Services',
          items: [
            {label: 'Nextcloud', to: '/services/nextcloud'},
            {label: 'OpenCloud', to: '/services/opencloud'},
            {label: 'Element', to: '/services/element'},
            {label: 'View All →', href: 'https://github.com/opendesk-edu/opendesk-edu/tree/main/openspec/specs/docs/services'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'opendesk-edu.org', href: 'https://opendesk-edu.org'},
            {label: 'Landscape', href: 'https://landscape.opendesk-edu.org'},
            {label: 'GitHub', href: 'https://github.com/opendesk-edu'},
            {label: 'Codeberg', href: 'https://codeberg.org/opendesk-edu'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub Repository', href: 'https://github.com/opendesk-edu/opendesk-edu'},
            {label: 'OpenSpec Source', href: 'https://github.com/opendesk-edu/opendesk-edu/tree/main/openspec'},
            {label: 'Self-Improvement Agent', href: 'https://github.com/opendesk-edu/opendesk-edu/tree/main/.gitlab/self-improvement'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} openDesk Edu Contributors. Licensed under Apache-2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'docker'],
    },
    algolia: {
      appId: 'placeholder',
      apiKey: 'placeholder',
      indexName: 'opendesk-edu-openspec',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
