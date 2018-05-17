const AddonsActions = require('./addons-actions.js')
const AddonsBindings = require('./addons-bindings.js')
const AddonsIntegrations = require('./addons-integrations.js')
const AddonsPersistence = require('./addons-persistence.js')
const AddonsTransformations = require('./addons-transformations.js')
const AddonsVoice = require('./addons-voice.js')

const fs = require ('fs-extra')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'openHAB',
  description: 'openHAB - a vendor and technology agnostic open source automation software for your home',
  dest: 'vuepress',
  host: 'localhost',
  base,
  head: [
    ['link', { rel: 'icon', href: `/openhab-logo-square.png` }],
    ['link', { rel: 'stylesheet', href: `//fonts.googleapis.com/css?family=Open+Sans:300,400` }],
    ['script', { src: `https://identity.netlify.com/v1/netlify-identity-widget.js` }]
//    ['script', { src: `//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/cookieconsent.min.js` }]
  ],
  configureWebpack: (config, isServer) => {
    const temp = path.join(config.resolve.alias['@temp'], 'override.styl')
    const source = path.join(config.resolve.alias['@source'], '.vuepress', 'override.styl')
    fs.copySync(source, temp)
    config.plugins.push(new CopyWebpackPlugin([
      { from: '.vuepress/_overrides', to: '.'}
    ]))
  },
  serviceWorker: false,
  themeConfig: {
    logo: `/openhab-logo-top.png`,
    // repo: 'openhab',
    editLinks: false,
    docsDir: 'docs',
    nav: [
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Download',
        link: '/download/',
      },
      {
        text: 'Documentation',
        link: '/docs/',
      },
      {
        text: 'Add-ons',
        link: '/addons/'
      },
      {
        text: 'Community',
        link: '/community/',
      },
      {
        text: 'About',
        items: [
          {
            text: 'Get Involved',
            items: [
              {
                text: 'Who We Are',
                link: '/about/who-we-are',
              },
              {
                text: 'Contribute',
                link: '/about/contributing'
              },
              {
                text: 'Events',
                link: '/about/events'
              },
            ]
          },
          {
            text: 'Support openHAB',
            items: [
              {
                text: 'Foundation',
                link: 'https://openhabfoundation.org/'
              },
              {
                text: 'Donate',
                link: '/about/donate'
              }
            ]
          },
          {
            text: 'Resources',
            items: [
              {
                text: 'Showcase/How-tos',
                link: '/about/showcase'
              },
              {
                text: 'Press',
                link: '/about/press'
              },
              {
                text: 'Academia',
                link: '/about/education'
              },
              {
                text: 'Logos',
                link: '/about/logos'
              }
            ]
          }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/openhab',
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Welcome to openHAB',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Concepts',
          collapsable: false,
          children: [
            ['concepts/', 'Concepts Overview'],
            'concepts/things',
            'concepts/items',
            'concepts/discovery',
            'concepts/audio',
          ]
        },
        {
          title: 'Installation Guide',
          collapsable: false,
          children: [
            'installation/',
            ['installation/linux', 'Linux'],
            ['installation/windows', 'Windows'],
            ['installation/macosx', 'macOS'],
            'installation/openhabian',
            'installation/rasppi',
            'installation/pine',
            'installation/docker',
            'installation/synology',
            'installation/qnap',
            ['installation/security', 'Security']
          ]
        },
        {
          title: 'New User Tutorial',
          collapsable: false,
          children: [
            ['tutorial/', 'Tutorial Overview'],
            'tutorial/1sttimesetup',
            'tutorial/uis',
            'tutorial/configuration',
            'tutorial/sitemap',
            'tutorial/rules',
            'tutorial/logs',
            'tutorial/persistence'
          ]
        },
        {
          title: 'Configuration Guide',
          collapsable: false,
          children: [
            ['configuration/', 'Configuration Overview'],
            'configuration/things',
            'configuration/items',
            'configuration/sitemaps',
            'configuration/persistence',
            'configuration/rules-dsl',
            'configuration/transformations',
            'configuration/actions',
            'configuration/jsr223',
            'configuration/services',
            'configuration/multimedia',
            ['configuration/migration/', 'Migration from 1.x']
          ]
        },
        {
          title: 'Interfaces and Ecosystem',
          collapsable: false,
          children: [
            'configuration/packages',
            'configuration/editors',
            'configuration/homebuilder',
            ['configuration/paperui', 'Paper UI'],
            ['configuration/ui/habmin/', 'HABmin'],
            'configuration/habpanel',
            ['configuration/ui/basic/', 'Basic UI'],
            ['configuration/ui/classic/', 'Classic UI'],
            'configuration/rules-ng',
            'configuration/eclipseiotmarket',
            ['configuration/restdocs', 'REST API'],
            'apps/android',
            'apps/ios',
            'apps/windows',
          ]
        },
        {
          title: 'Administration Guide',
          collapsable: false,
          children: [
            'administration/',
            'administration/console',
            'administration/runtime',
            'administration/bundles',
            'administration/logging',
            'administration/jsondb',
          ]
        },
        {
          title: 'Developer Guide',
          collapsable: false,
          children: [
            ['developer/', 'Development Overview'],
            'developer/contributing/contributing',
            'developer/prerequisites/osgi',
            'developer/prerequisites/osgids',
            'developer/prerequisites/configadmin',
            'developer/prerequisites/osgitasks',
            'developer/prerequisites/eventadmin',
            'developer/prerequisites/tycho',
            'developer/prerequisites/equinox',
            'developer/prerequisites/targetplatform',
            'developer/development/ide',
            'developer/development/guidelines',
            'developer/development/conventions',
            'developer/development/bindings',
            'developer/development/logging',
            'developer/development/evolution',
            'developer/development/compatibilitylayer',
          ]
        },
      ],
      '/addons/': [
        {
          title: 'Bindings',
          collapsible: false,
          children: AddonsBindings.sort((a,b) => a[1].localeCompare(b[1]))
        },
        {
          title: 'System Integrations',
          collapsible: false,
          children: AddonsIntegrations.sort((a,b) => a[1].localeCompare(b[1]))
        },
        {
          title: 'Actions',
          collapsible: false,
          children: AddonsActions.sort((a,b) => a[1].localeCompare(b[1]))
        },
        {
          title: 'Data Persistence',
          collapsible: false,
          children: AddonsPersistence.sort((a,b) => a[1].localeCompare(b[1]))
        },
        {
          title: 'Data Transformation',
          collapsible: false,
          children: AddonsTransformations.sort((a,b) => a[1].localeCompare(b[1]))
        },
        {
          title: 'Voice',
          collapsible: false,
          children: AddonsVoice.sort((a,b) => a[1].localeCompare(b[1]))
        }
      ]
    }
  }
}
