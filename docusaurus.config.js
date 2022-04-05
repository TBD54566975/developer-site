// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const META_LOGO_URL = 'https://tbd54566975.github.io/developer-site/img/logos/tbd_logo.png';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TBD | Developers',
  titleDelimiter: '-',
  tagline: 'Open Source ⁃ Decentralization ⁃ Community',
  url: 'https://tbd54566975.github.io',
  baseUrl: '/developer-site/',
  staticDirectories: ['static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/tbd_logo.svg',
  organizationName: 'TBD54566975', // Usually your GitHub org/user name.
  projectName: 'developer-site', // Usually your repo name.
  trailingSlash: false,
  scripts: [
    'https://kit.fontawesome.com/e737e32cd7.js'
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
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
      metadata: [
        { 'image': META_LOGO_URL },
        { 'name': 'TBD | Developers' },
        { 'title': 'Open Source - Decentralization - Community' },
        { 'twitter:card': 'summary' },
        { 'twitter:image': META_LOGO_URL },
        { 'twitter:site': '@tbd54566975' },




      ],
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
          {
            href: 'https://github.com/tbd54566975',
            label: ' ',
            position: 'right',
            className: "fa-brands fa-github fa-xl custom-icon"
          },
          {
            label: ' ',
            href: 'https://twitter.com/TBD54566975',
            position: 'right',
            className: "fa-brands fa-twitter fa-xl custom-icon"
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Block, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
