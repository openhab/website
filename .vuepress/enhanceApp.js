export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    if (window) {
      import('vue-tweet-embed/timeline').then(module => {
        Vue.component('twitter-timeline', module.default)
      })
    }
  }
