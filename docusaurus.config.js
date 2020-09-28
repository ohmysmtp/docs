module.exports = {
  title: 'OhMySMTP Documentation',
  tagline: 'Transactional email made easy',
  url: 'https://docs.ohmysmtp.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'OhMySMTP', // Usually your GitHub org/user name.
  projectName: 'OhMySMTP.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'OhMySMTP',
      logo: {
        alt: 'OhMySMTP Logo',
        src: 'img/logo.png',
        target: '_top'
      },
      items: [
        {
          to: 'https://blog.ohmysmtp.com',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/',
          activeBasePath: 'overview',
          label: 'Overview',
          position: 'right',
        },
        {
          to: 'reference/overview',
          activeBasePath: 'reference',
          label: 'API Reference',
          position: 'right',
        },
        {
          to: 'integrations/rails',
          activeBasePath: 'integrations',
          label: 'Integrations',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Privacy',
              href: 'https://ohmysmtp.com/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://ohmysmtp.com/terms',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OhMySMTP.com`,
    },
    prism: {
      additionalLanguages: ['ruby'],
    },    
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ohmysmtp/docs/edit/master/',
          homePageId: 'overview/introduction',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
