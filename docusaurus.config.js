// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TBD | Developers',
  titleDelimiter: '-',
  tagline: 'Open Source ⁃ Decentralization ⁃ Community',
  url: 'https://tbd54566975.github.io/',
  baseUrl: '/developer-site/',
  staticDirectories: ['static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/tbd_logo.svg',
  organizationName: 'TBD54566975', // Usually your GitHub org/user name.
  projectName: 'developer-site', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TBD | Developers',
        logo: {
          alt: 'TBD Logo',
          src: 'img/logos/tbd_logo.svg',
        },
        items: [
          {
            to: '/projects',
            position: 'left',
            label: 'Projects',
          },
          {
            to: '/careers',
            position: 'left',
            label: 'Careers',
          },
          {
            to: '/media',
            position: 'left',
            label: 'Media',
          },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/TBD54566975',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     // {
          //     //   label: 'Discord',
          //     //   href: 'https://discordapp.com/invite/docusaurus',
          //     // },
          //     {
          //       href: 'https://github.com/TBD54566975',
          //       label: 'GitHub',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/TBD54566975',
          //     },
          //   ],
          // },
          // {
          //   title: 'Credits',
          //   items: [
          //     // {
          //     //   label: 'Blog',
          //     //   to: '/blog',
          //     // },
          //     {
          //       label: 'Jane Kelly from Flaticon',
          //       href: 'https://www.flaticon.com/authors/jane-kelly',
          //     },
          //     {
          //       label: 'Maxim Basinski from Flaticon',
          //       href: 'https://www.flaticon.com/authors/maxim-basinski-premium',
          //     },
          //     {
          //       label: 'Darius Dan from Flaticon',
          //       href: 'https://www.flaticon.com/authors/darius-dan',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Block, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
