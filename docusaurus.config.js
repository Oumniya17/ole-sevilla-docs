// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Olé Sevilla',

  tagline: 'The Cultural AI Experience',

  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-domain.com',

  baseUrl: '/',

  organizationName: 'ole-sevilla',

  projectName: 'ole-sevilla-docs',

  onBrokenLinks: 'throw',

  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  /*
  =====================================================
  MERMAID
  =====================================================
  */

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  /*
  =====================================================
  PRESETS
  =====================================================
  */

  presets: [
    [
      'classic',
      ({
        docs: {

          sidebarPath: './sidebars.js',

          routeBasePath: '/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  /*
  =====================================================
  THEME CONFIG
  =====================================================
  */

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      image: 'img/ole-sevilla-preview.png',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      /*
      =====================================================
      NAVBAR
      =====================================================
      */

navbar: {

  title: '',

  logo: {

    alt: 'Olé Sevilla',

    src: 'img/logo.png',
  },

items: [

  {
    label: 'Olé Sevilla',
    to: '/intro',
    position: 'left',
  },

  {
    label: 'System Architecture',
    to: '/arquitectura',
    position: 'left',
  },

  {
    label: 'Design System',
    to: '/decisiones-diseno',
    position: 'left',
  },

  {
    label: 'Frontend',
    to: '/frontend',
    position: 'left',
  },

  {
    label: 'Backend System',
    to: '/backend',
    position: 'left',
  },

  {
    label: 'Local Development',
    to: '/instalacion-local',
    position: 'left',
  },

  {
    label: 'Cloud Deployment',
    to: '/despliegue',
    position: 'left',
  },

  {
    label: 'GitHub & Version Control',
    to: '/github',
    position: 'left',
  },

  {
    label: 'User Experience Flow',
    to: '/tutorial-uso',
    position: 'left',
  },
],
},

/*
==================================================
FOOTER FINAL PREMIUM 2026
==================================================
*/

footer: {

  style: 'dark',

  links: [

    /*
    ==================================================
    BRAND LOGO
    ==================================================
    */

    {
      title: ' ',

      items: [

        {
          html: `
            <div class="footer-brand">

              <img
                src="/img/logo.png"
                alt="Olé Sevilla"
                class="footer-logo"
              />

            </div>
          `,
        },
      ],
    },

    /*
    ==================================================
    PROYECTO
    ==================================================
    */

    {
      title: 'PROYECTO',

      items: [

        {
          label: 'Arquitectura',
          to: '/arquitectura',
        },

        {
          label: 'Frontend',
          to: '/frontend',
        },

        {
          label: 'Backend',
          to: '/backend',
        },

        {
          label: 'Tutorial',
          to: '/tutorial-uso',
        },

        {
          label: 'Diseño',
          to: '/decisiones-diseno',
        },
      ],
    },

    /*
    ==================================================
    TECNOLOGÍAS
    ==================================================
    */

    {
      title: 'TECNOLOGÍAS',

      items: [

        {
          label: 'React',
          href: 'https://react.dev/',
        },

        {
          label: 'Node.js',
          href: 'https://nodejs.org/',
        },

        {
          label: 'MongoDB',
          href: 'https://mongodb.com/',
        },

        {
          label: 'TensorFlow.js',
          href: 'https://tensorflow.org/',
        },

        {
          label: 'Docusaurus',
          href: 'https://docusaurus.io/',
        },

        {
          label: 'Vite',
          href: 'https://vitejs.dev/',
        },
      ],
    },

    /*
    ==================================================
    REPOSITORIO
    ==================================================
    */

    {
      title: 'REPOSITORIO',

      items: [

        {
          label: 'GitHub',
          href: 'https://github.com/',
        },

        {
          label: 'Deployment',
          to: '/despliegue',
        },

        {
          label: 'Instalación',
          to: '/instalacion-local',
        },

        {
          label: 'UX Flow',
          to: '/tutorial-uso',
        },
      ],
    },
  ],

  copyright:
    `© ${new Date().getFullYear()} Olé Sevilla — Designed for immersive cultural experiences.`,
},

      /*
      =====================================================
      CODE THEME
      =====================================================
      */

      prism: {

        theme: prismThemes.github,

        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
