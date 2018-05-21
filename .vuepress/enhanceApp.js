export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    if (typeof window !== 'undefined') {
      const Headroom = require('headroom.js')
      Vue.prototype.Headroom = Headroom

      const ScrollReveal = require('scrollreveal')
      Vue.prototype.$sr = new ScrollReveal()

      router.onReady(() => {
        if (typeof window.ga !== 'undefined') {
          ga('set', 'anonymizeIp', true);
          window.gaOptout = function () {
            const GA_ID = 'UA-47717934-1'
            const disableStr = 'ga-disable-' + GA_ID
            document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'
            alert('Google Analytics disabled')
          }
        }
      })
    }
  }
