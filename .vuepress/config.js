const AddonsActions = require('./addons-actions.js')
const AddonsBindings = require('./addons-bindings.js')
const AddonsIntegrations = require('./addons-integrations.js')
const AddonsPersistence = require('./addons-persistence.js')
const AddonsTransformations = require('./addons-transformations.js')
const AddonsVoice = require('./addons-voice.js')

const fs = require ('fs-extra')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const HighlightDsl = require('./highlight-dsl')
const HighlightRules = require('./highlight-rules')

const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'openHAB',
  description: 'openHAB - a vendor and technology agnostic open source automation software for your home',
  dest: 'vuepress',
  host: 'localhost',
  base,
  ga: 'UA-47717934-1',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'shortcut icon', href: `/favicon.ico` }],
    ['link', { rel: 'apple-touch-icon', href: `/apple-icon.png` }],
    ['link', { rel: 'stylesheet', href: `//fonts.googleapis.com/css?family=Open+Sans:300,400` }],
    ['script', { src: `https://identity.netlify.com/v1/netlify-identity-widget.js` }]
  ],
  markdown: {
    config: (md) => {
      md.options.linkify = true
      const highlight = md.options.highlight
      md.options.highlight = (str, lang) => {
        /* Simple heuristics to detect rules & other openHAB DSL code snippets and override the language */
        if (str.match(/\b(?:Color|Contact|Dimmer|Group|Number|Player|Rollershutter|Switch|Location|Frame|Default|Text|Group|Selection|Setpoint|Slider|Colorpicker|Chart|Webview|Mapview|Image|Video|Item|Thing|Bridge|Time|Type|Sitemap|sitemap)\b/)) {
          lang = 'dsl'
        }
        if (str.match(/\b(?:String|DateTime)\b/) && lang !== 'java' && lang !== 'xml') {
          lang = 'dsl'
        }
        if (str.match(/\brule\b/) && str.match(/\bwhen\b/) && str.match(/\bthen\b/) && str.match(/\bend\b/) ||
          str.match(/received update/) || str.match(/changed.*(?:from|to)/) || str.match(/Channel.*triggered/) ||
          str.match(/\bval\b/) || str.match(/\bvar\b/) /* <-- dangerous! */) {
          lang = 'rules'
        }
        if (lang === 'shell' || lang === 'sh' || lang === 'shell_session') lang = 'bash'
        if (lang === 'conf') lang = 'dsl'
        if (lang === 'JSON') lang = 'json'
        // if (lang === 'xtend' || lang === 'text' || !lang) {
        //   console.log('Cannot determine language of code: ' + lang)
        //   console.log(str)
        // }

        if (!Prism.languages.dsl || !Prism.languages.rules) {
          Prism.languages.dsl = HighlightDsl
          Prism.languages.rules = HighlightRules
        }

        return highlight(str, lang)
      }
    }
  },
  configureWebpack: (config, isServer) => {
    // Remove once VuePress 0.9 is out (includes https://github.com/vuejs/vuepress/pull/405)
    // const temp = path.join(config.resolve.alias['@temp'], 'override.styl')
    // const source = path.join(config.resolve.alias['@source'], '.vuepress', 'override.styl')
    // fs.copySync(source, temp)
    config.plugins.push(new CopyWebpackPlugin([
      { from: '.vuepress/_redirects', to: '.'}
    ]))
  },
  serviceWorker: false,
  themeConfig: {
    logo: `/openhab-logo.png`,
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
                text: 'Privacy',
                link: '/privacy'
              },
              {
                text: 'myopenHAB',
                link: 'https://www.myopenhab.org/'
              },
              // {
              //   text: 'Press',
              //   link: '/about/press'
              // },
              // {
              //   text: 'Academia',
              //   link: '/about/education'
              // },
              // {
              //   text: 'Logos',
              //   link: '/about/logos'
              // }
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
            ['tutorial/persistence', 'Persistence']
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
            'configuration/iconsets/classic/',
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
            ['ecosystem/alexa/', 'Amazon Alexa'],
            ['ecosystem/google-assistant/', 'Google Assistant'],
            ['../addons/integrations/homekit/', 'Apple HomeKit'],
            ['ecosystem/ifttt/', 'IFTTT'],
            ['ecosystem/mycroft/', 'Mycroft.AI'],
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
