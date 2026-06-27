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

  onBrokenLinks: 'throw',
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
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
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
            {label: 'Getting Started', to: '/docs/intro'},
            {label: 'Methodology', to: '/docs/methodology'},
            {label: 'Glossary', to: '/docs/glossary'},
          ],
        },
        {
          title: 'Services',
          items: [
            {label: 'All Services', to: '/services/'},
            {label: 'Identity & Access', to: '/services/category/identity-access'},
            {label: 'Learning Management', to: '/services/category/learning-management'},
            {label: 'Communication', to: '/services/category/communication'},
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
    docs: {
      sidebar: {
        hideScrollbar: false,
        autoCollapseCategories: true,
      },
    },
    blog: {
      showReadingTime: true,
      showAuthor: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
