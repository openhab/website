export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    if (typeof window !== 'undefined') {
      Vue.component('twitter-timeline', require('vue-tweet-embed/timeline').default)
      
      // import('vue-tweet-embed/timeline').then(module => {
      //   Vue.component('twitter-timeline', module.default)
      // })
      const ScrollReveal = require('scrollreveal')
      Vue.prototype.$sr = new ScrollReveal()

      const Headroom = require('headroom.js')
      Vue.prototype.Headroom = Headroom
    }
  }
