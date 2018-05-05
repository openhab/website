<template>
  <div>
    <div class="jumbotron">
      <img draggable="false" class="jumbotron-pattern" src="/pattern.png" alt="">
      <div class="hero-image"></div>
      <div class="hero-content">
        <img src="/logo-white.png" class="white-logo" />
        <h1 class="hero">empowering the smart home</h1>
        <h2 class="lead">a vendor and technology agnostic open source automation software for your home</h2>
        <router-link to="docs/" class="action-button">Get Started →</router-link>
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
            <p>Powerful and flexible <router-link to="docs/tutorial/rules.html">rules</router-link>, time and event-based triggers, scripts, notifications and voice control</p>
          </div>
          <div ref="feature3" class="feature">
            <h3>Runs Everywhere</h3>
            <p>
              Run your server on
              <router-link to="docs/installation/linux.html">Linux</router-link>,
              <router-link to="docs/installation/macosx.html">macOS</router-link>,
              <router-link to="docs/installation/windows.html">Windows</router-link>,
              <router-link to="docs/installation/rasppi.html">Raspberry Pi</router-link>,
              <router-link to="docs/installation/pine.html">PINE64</router-link>,
              <router-link to="docs/installation/docker.html">Docker</router-link>,
              <router-link to="docs/installation/synology.html">Synology</router-link>...
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

      <div class="section4">
        <div style="position: relative; height: 70vh; width: 100%; overflow: hidden;">
          <ClientOnly>
            <parallax :speed-factor="0.15">
              <img src="./images/rpi.jpg" alt="raspberry pi">
            </parallax>
          </ClientOnly>
          <div class="openhabian-text">
            <h2 class="slide-seq">Build your openHAB appliance in less than an hour</h2>
            <p class="slide-seq">
              Try openHABian, the official openHAB distribution: write the system image on a SD card, boot your Raspberry Pi or PINE64 on it,
              and enjoy a pre-installed, production-ready openHAB server with added features like Grafana and InfluxDB!
            </p>
            <router-link to="docs/installation/openhabian.html" class="learn-how-button slide-seq">Learn How →</router-link>
          </div>
        </div>
      </div>

      <open-source-section />

      <div class="community">
        <h2 class="slide">Ready to join the community?</h2>
        <p class="slide">The vibrant openHAB community contributes examples and tutorials on a daily basis and is happy to help you!</p>
        <div class="community-stats">
          <div class="community-stat slide-seq2">
            <div class="count">{{communityTopics}}</div>
            <div class="subtext">discussions</div>
          </div>
          <div class="community-stat slide-seq2">
            <div class="count">{{communityPosts}}</div>
            <div class="subtext">posts</div>
          </div>
          <div class="community-stat slide-seq2">
            <div class="count">{{communityUsers}}</div>
            <div class="subtext">users</div>
          </div>
        </div>
        <div class="join">
          <a target="_blank" href="https://community.openhab.org" class="join-us-button slide-slow">Join Us →</a>
        </div>
      </div>
      <div class="tweets">
        <h2 class="slide">Follow us on Twitter</h2>
        <ClientOnly>
          <div class="timeline">
            <twitter-timeline :id="'openhab'" :source-type="'profile'" :options="{ linkColor: '#FF6600', tweetLimit: '10' }" />
          </div>
        </ClientOnly>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
// import ScrollReveal from './scrollreveal'

import parallax from 'vue-parallaxy'
// import TwitterTimeline from 'vue-tweet-embed/timeline'

import OpenSourceSection from './home/OpenSourceSection.vue'

let hr = null

export default {
  name: 'HomePage',
  components: {
    parallax,
    Footer,
    OpenSourceSection
    // TwitterTimeline
  },
  data () {
    return {
      communityUsers: '22000+',
      communityTopics: '23000+',
      communityPosts: '240000+'
    }
  },
  computed: {
    featuredAddons () {
      return this.$site.pages.filter(p => p.frontmatter && p.frontmatter.logo && p.frontmatter.since === '2x')
    }
  },
  mounted () {
    const vm = this
    if (this.$sr) {
      const sr = this.$sr
      sr.reveal('.feature', { scale: 1.0 }, 200)
      sr.reveal('.featured-logo', { })
      sr.reveal('.slide', { scale: 1.0 })
      sr.reveal('.slide-slow', { scale: 1.0, duration: 1000, delay: 500 })
      sr.reveal('.slide-seq', { scale: 1.0, duration: 1000 }, 300)
      sr.reveal('.slide-seq2', { scale: 1.0, duration: 1000 }, 300)
      sr.reveal('.slide-seq3', { scale: 1.0, duration: 1000 }, 800)
    }
    const header = document.getElementsByTagName("header")[0]
    // const Headroom = require('headroom.js')
    if (this.Headroom) {
      hr = new this.Headroom(header)
      hr.init()
    }
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
  // animation 0.5s ease-out 0s 1 headerSlideUp
  transform translateY(-100%)
header.headroom--top
  transition all 0.5s
  background transparent
  color white
  border-bottom none
  box-shadow none
  .logo
    opacity 0
  .nav-dropdown
    color black
  .nav-links
    .nav-item:last-child, .nav-item:nth-last-child(2)
      &:after
        filter: invert(100%) brightness(200%)

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
  min-height 600px
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
    img.white-logo
      filter drop-shadow(0 0 10px #666)
    h1.hero
      animation 1.5s ease-out 0s 1 slideIn1
      color white
      font-family 'Open Sans', sans-serif;
      font-weight 300
      font-size 60px
      text-shadow 0px 0px 10px #666
      // padding-top 10vh
    @media (max-width: 419px)
      h1.hero
        font-size 40px
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
      font-size 1rem
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
      font-size 1rem
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
      width 180px
      height 200px
      padding 10px
      display flex
      .featured-logo
        margin auto
        max-height 120px
        max-width 120px
        object-fit contain
    @media (max-width: 768px)
      &
        padding 0
      .logo-container
        width 90px
        height 100px
        padding 10px
        .featured-logo
          max-height 90px
          max-width 90px
.section4
  height 70vh
  background black
  color white
  display flex
  font-family 'Open Sans', sans-serif
  font-weight normal
  overflow hidden
  .Masthead
    width 100%
    z-index 10 !important
    // height 300px !important
    .Masthead__image
      // height 300px !important
  .openhabian-text
    position absolute
    width 100%
    top 0
    text-align center
    z-index 12
    h2
      font-size 2.5em
      font-weight 300
      border none
    p
      margin 1rem
    .learn-how-button
      display inline-block
      font-size 1rem
      color #fff
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border 1px solid #fff
      &:hover
        background-color #fff
        color black
      
  @media (max-width: 768px)
    &
      height 500px
    .Masthead
      height 500px !important
      .Masthead__image > img
        opacity 0.6
  
.tweets
  max-height 70vh
  display flex
  align-items center
  flex-direction column
  background-color #1b95e0
  // padding-top 4rem
  h2
    font-size 2.5em
    font-weight 300
    border none
    color white
  
  .timeline
    max-height 70vh
    overflow auto
    width 50%
    min-width 320px

.community
  background-color #ddd
  display flex
  flex-direction column
  text-align center
  font-family 'Open Sans', sans-serif
  h2
    font-size 2.5em
    font-weight 400
    border none
    margin-bottom 0
  p
    color #555
  .community-stats
    display flex
    flex-direction row
    align-items center
    align-self center
    font-weight bold
    @media (max-width: 768px)
      &
        flex-direction column
  
    .community-stat
      padding 1rem 2rem
      .count
        font-size 24pt
  .join-us-button
    margin 2rem
    display inline-block
    font-size 1rem
    color #ff6600
    padding 0.8rem 1.6rem
    border-radius 4px
    font-weight bold
    transition background-color .1s ease
    box-sizing border-box
    border 2px solid #ff6600
    &:hover
      background-color #ff6600
      color white
</style>