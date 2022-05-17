// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TBD | Developers',
  titleDelimiter: '-',
  tagline: 'Open Source ⁃ Decentralization ⁃ Community',
  url: 'https://tbd.website',
  baseUrl: '/',
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
        { 'image': 'https://tbd.website/img/social-share.png' },
        { 'title': 'Open Source - Decentralization - Community' },
        { 'twitter:domain': 'https://tbd.website' },
        { 'twitter:url': 'https://tbd.website/' },
        { 'twitter:image': 'https://tbd.website/img/social-share.png' },
        { 'twitter:site': '@tbd54566975' },
        { 'name': 'twitter:card', 'content': 'summary_large_image' },
        { 'name': 'twitter:title', 'content': 'TBD | Developers' },
        { 'name': 'twitter:description', 'content': 'Focused on building decentralized platforms, protocols, and tools that empower every individual to own their data and participate in the global economy.' },
        { 'name': 'twitter:image', 'content': 'https://tbd.website/img/logos/tbd_logo.png' },




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
            href: 'https://tbd.website',
            label: 'TBD Home',
            position: 'right'
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
