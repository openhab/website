<template>
  <div>
    <div class="jumbotron">
      <img draggable="false" class="jumbotron-pattern" src="/pattern.png" alt="">
      <div class="hero-image"></div>
      <div class="hero-content">
        <h1 class="hero">Empowering the smart home</h1>
        <h2 class="lead">openHAB - a vendor and technology agnostic open source automation software for your home</h2>
        <router-link to="guides/overview/" class="action-button">Get started →</router-link>
        <a class="demo-button" target="_blank" href="http://demo.openhab.org:8080">Demo →</a>
      </div>
    </div>
    <div style="margin-top: 76vh">
      <div class="section2">
        <h2>Why openHAB?</h2>
        <div class="features">
          <div ref="feature1" class="feature">
            <h3>Integrate Everything</h3>
            <p>With its pluggable architecture openHAB supports more than <router-link to="addons/">200 different technologies and systems</router-link> and thousands of devices!</p>
          </div>
          <div ref="feature2" class="feature">
            <h3>Automate with Ease</h3>
            <p>Powerful and flexible <router-link to="guides/tutorial/rules.html">rules</router-link>, time and event-based triggers, scripts, notifications and voice control</p>
          </div>
          <div ref="feature3" class="feature">
            <h3>Runs Everywhere</h3>
            <p>
              Run your server on
              <router-link to="guides/installation/linux.html">Linux</router-link>,
              <router-link to="guides/installation/macosx.html">macOS</router-link>,
              <router-link to="guides/installation/windows.html">Windows</router-link>,
              <router-link to="guides/installation/rasppi.html">Raspberry Pi</router-link>,
              <router-link to="guides/installation/pine.html">PINE64</router-link>,
              <router-link to="guides/installation/docker.html">Docker</router-link>,
              <router-link to="guides/installation/synology.html">Synology</router-link>...
              Access it with apps for the web, iOS, Android and others.</p>
          </div>
        </div>
      </div>
      <ClientOnly>
        <div style="height: 40vh; background: transparent">
          <parallax fixed>
            <img src="/vscode.png" alt="coding rules">
          </parallax>
        </div>
      </ClientOnly>
      <div class="section3">
        <h2>More than 1000 supported things!</h2>
        <div class="logos">
          <router-link :to="addon.path" v-for="addon in featuredAddons" :key="addon.path" class="logo-container">
            <img :src="addon.frontmatter.logo.replace('images/addons/', '/logos/')" class="featured-logo" />
          </router-link>
        </div>
      </div>
    </div>
    <footer class="footer">
      <h2 class="slide">Footer links, social media etc.</h2>
    </footer>
  </div>
</template>

<script>
import parallax from 'vue-parallaxy'
let hr = null

export default {
  name: 'HomePage',
  components: {
    parallax
  },
  data () {
    return {
    }
  },
  computed: {
    featuredAddons () {
      return this.$site.pages.filter(p => p.frontmatter && p.frontmatter.logo && p.frontmatter.since === '2x')
    }
  },
  mounted () {
    const vm = this
    import('scrollreveal').then(ScrollReveal => {
      const sr = new ScrollReveal.default()
      sr.reveal('.feature', { scale: 1.0 }, 200)
      sr.reveal('.featured-logo', { })
      sr.reveal('.slide', { scale: 1.0 })
    })
    import('headroom.js').then(Headroom => {
      const header = document.getElementsByTagName("header")[0]
      hr = new Headroom.default(header)
      hr.init()
    })
  },
  beforeDestroy () {
    if (hr) {
      hr.destroy()
    }
  }
}
</script>

<style lang="stylus">
@keyframes slideIn1
  0%
    transform translateY(10px)
    opacity 0
  40%
    transform translateY(0)
    opacity 1
@keyframes slideIn2
  0%
    transform translateY(10px)
    opacity 0
  40%
    transform translateY(10px)
    opacity 0
  70%
    transform translateY(0)
    opacity 1
@keyframes slideIn3
  0%
    transform translateY(10px)
    opacity 0
  70%
    transform translateY(10px)
    opacity 0
  100%
    transform translateY(0)
    opacity 1
@keyframes fadeIn4
  0%
    // transform translateY(10px)
    opacity 0
  70%
    // transform translateY(10px)
    opacity 0
  100%
    // transform translateY(0)
    opacity 0.3
@keyframes headerSlideDown
  0%
    transform translateY(-100%)
  100%
    transform translateY(0%)
@keyframes headerSlideUp
  0%
    transform translateY(0%)
  100%
    transform translateY(-100%)

header.headroom--pinned
  animation 0.5s ease-out 0s 1 headerSlideDown
  transform translateY(0%)
header.headroom--unpinned
  animation 0.5s ease-out 0s 1 headerSlideUp
  transform translateY(-100%)
header.headroom--top
  transition all 0.5s
  background transparent
  color white
  border-bottom none
  .nav-dropdown
    color black

.vscode
  position relative
  min-height 21.875rem
  scroll-behavior smooth
  overflow: hidden
  z-index: -1
  height 40vh !important
  width 100%


.jumbotron
  background #ff6600
  position absolute
  top 0
  left 0
  right 0
  // max-height 700px
  height 90vh
  display flex
  justify-content center
  align-items center
  .jumbotron-pattern
    opacity 0.15
    width calc(100vw - 20px)
    // height 100vh
    position absolute
    object-fit cover
    user-select none
  .hero-content
    margin 90px 30px
    z-index 1
    max-width 960px
    h1.hero
      animation 1.5s ease-out 0s 1 slideIn1
      color white
      font-family 'Open Sans', sans-serif;
      font-weight normal
      font-size 60px
      text-shadow 0px 0px 10px #aaa
      // padding-top 10vh
    h2.lead
      animation 1.5s ease-out 0s 1 slideIn2
      color white
      border none
      font-family 'Open Sans', sans-serif;
      font-weight normal
      font-size 1.125em
      text-shadow 0px 0px 10px #333
    .action-button
      animation 1.5s ease-out 0s 1 slideIn3
      margin-top 4rem
      display inline-block
      font-size 1.2rem
      color #fff
      background-color #ff6600
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border 1px solid #fff
      &:hover
        background-color lighten(#ff6600, 20%)
    .demo-button
      animation 2s ease-out 0s 1 slideIn3
      margin-top 4rem
      margin-left 0.5em
      display inline-block
      font-size 1.2rem
      color #fff
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border 1px solid #fff
      // border-bottom 1px solid darken(#ff6600, 10%)
  .hero-image
    animation 2.5s ease-out 0s 1 fadeIn4
    background url(/hero.png) bottom 0 left 50%/contain no-repeat
    background-repeat none 
    width 95%
    height 700px
    position absolute
    top calc(100% - 700px)
    opacity 0.3

.section2
  font-family 'Open Sans', sans-serif
  background white
  padding-top 5rem
  h2
    text-align center
    font-family 'Open Sans', sans-serif
    font-weight normal
    font-size 2.5em
  .features
    padding 1.2rem 5rem
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content strech
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h3
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten(black, 10%)
    p
      color lighten(black, 25%)
  @media (max-width: 768px)
    .features
      flex-direction column
      padding 1.2rem 0.5rem
    .feature
      max-width 100%
      padding 0 2.5rem
.section3
  background white
  display flex
  flex-direction column
  h2
    padding-top 4rem
    text-align center
    font-family 'Open Sans', sans-serif
    font-weight normal
    font-size 2.5em
  .logos
    padding 0 5rem
    display flex
    flex-wrap wrap
    justify-content center
    .logo-container
      width 200px
      height 220px
      padding 10px
      display flex
      .featured-logo
        margin auto
        max-height 200px
        max-width 200px


.footer
  background #eee
  padding 2.5rem
  border-top 1px solid $borderColor
  text-align center
  color lighten(black, 25%)

</style>