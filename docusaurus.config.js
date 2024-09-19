// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NativeFlow",
  tagline:
    "Utility style-objects for React Native, to seamlessly switch from Tailwind on web to NativeFlow on app, no extra setup required, import and use!",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://nativeflow.js.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nativeflowteam", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  deploymentBranch: "gh-pages", // The branch where GitHub Pages will deploy
  trailingSlash: false, // Set to false to avoid trailing slashes in URLs

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/nativeflowteam/documentation/blob/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/nativeflowteam/documentation/blob/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/theme.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      metadata: [
        {
          name: "keywords",
          content:
            "react native, react native expo, react native paper, react native cli, react native tutorial, react native stylesheet, react native navigation, react native app, react native animations, react native android, react native alternatives, react native action sheet, animated react native, android studio react native, react native box shadow, react native border, react native button style, react native button style, react native background image, box shadow react native, background image react native, best react native ui library, border react native, react native config, react native docs, react native elements, react native expo tutorial, react native elevation, expo vs react native, expo go react native, react native flex, react native frameworks, react native fs, flex react native, github react native, react native flow, nativeflow, nativeflowcss, nativeflow css, native flow, justifycontent react native, javascript reactjs, mern stack, reactjs tutorial, react and redux, reduxs, react with redux, css grid css, react js redux, react js with redux, react redux js, reactjs native, redux for react, progressive web app, react component library, pwa app, storybooks, next js template, git tutorial for beginners, documentation maker, pwa progressive web app, table in react, component library react, react js table, react js charts, chart in react js, mern stack project, reactjs charts, charts for react, react site, chart react js, react js component library, reactjs component library, react js graph, graphs in react, react for website, carousel react js, react native play video, css layout grid, react js carousel, carousel for react, carousel in react js, carousel reactjs, chart js in react, chart reactjs, charts with react, create nextapp, css grid display, css minification, d3 data driven documents, daisy ui, datepicker in react, documentation node js, dropzone react js, formvalidation js, generate json from json schema, generate json from schema, git tutor, html form with javascript validation, html minification, javascript minification, javascript minified, js minification, json generate schema, json generator from schema, json schema for json schema, json schema from json, json schema generator from json, json to json schema generator, json to pretty, json to schema generator, json with schema, leaflet js react, minification html, module node js, next authjs, nuclear music app, play video in react native, react calendar picker, react date pickers, react date selector, react daterange, react js and redux, react js chart js, react js date picker, react js grid layout, react js tooltip, react native and redux, react native with redux, react what is redux, reactjs carousel, reactjs graph, reactjs redux toolkit, reactjs tooltip, reactjsorg, redux and react native, redux js tutorial, redux on react native, redux sagas, redux with react js, saga redux",
        },
        {
          name: "og:image",
          content:
            "https://mathdebate09.github.io/dummy-img-cdn/assets/nativeflow/meta.png",
        },
        { name: "og:type", content: "website" },
        { name: "og:image:type", content: "image/png" },
        { name: "og:image:width", content: "256" },
        { name: "og:image:height", content: "256" },
        {
          name: "twitter:image",
          content:
            "https://mathdebate09.github.io/dummy-img-cdn/assets/nativeflow/twitter.png",
        },
        {
          name: "twitter:card",
          content:
            "https://mathdebate09.github.io/dummy-img-cdn/assets/nativeflow/twitter.png",
        },
      ],
      navbar: {
        title: "NativeFlow",
        logo: {
          alt: "logo",
          src: "img/favicon.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/nativeflowteam/nativeflowcss",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Tutorials",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "NpmJs",
                href: "https://www.npmjs.com/package/nativeflowcss",
              },
              {
                label: "X",
                href: "https://x.com/jayowiee",
              },
              {
                label: "Discord",
                href: "https://discord.gg/KcKTtuqV3Y",
              },
            ],
          },
          {
            title: "Donations",
            items: [
              {
                label: "Ko-Fi",
                href: "https://ko-fi.com/mathdebate09",
              },
              {
                label: "PayPal",
                href: "https://www.paypal.com/paypalme/jayowiee",
              },
              {
                label: "Patreon",
                href: "https://www.patreon.com/mathdebate09",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "Contribute",
                href: "https://github.com/nativeflowteam/documentation",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NativeFlowTeam Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "JS9CS35WNO",

        // Public API key: it is safe to commit it
        apiKey: "ed51f308fbb2a7eca6a0158b552b8084",

        indexName: "nativeflow-js",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
      },
    }),
};

export default config;
