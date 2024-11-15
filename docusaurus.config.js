// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Get Buildng",
  tagline: "Preparing people for the jobs of the future",
  url: "https://getcoding-ca.github.io",
  baseUrl: "/handbook/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/fav.png",
  organizationName: "getcoding-ca", // Usually your GitHub org/user name.
  projectName: "handbook", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/getcoding-ca/handbook/edit/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Get Building",
        logo: {
          alt: "Get Building Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/getcoding-ca/handbook",
            label: "Contribute on GitHub",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Get Building",
            items: [
              {
                label: "Slack",
                href: "https://getcodingcommunity.slack.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/getcoding-ca",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/school/get-coding/",
              },
              {
                label: "Twitter",
                href: "https://www.twitter.com/getCodingCA",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/getcodingca",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/getcoding/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Get Building Training Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
