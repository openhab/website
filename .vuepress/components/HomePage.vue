<template>
  <div>

    <jumbotron />

    <div style="margin-top: 76vh">

      <why-section />

      <openhabian-section />

      <cloud-section />

      <vs-code-section />

      <featured-addons />

      <open-source-section />

      <community-section />

      <tweets-section />

    </div>
    <Footer />
  </div>
</template>

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

</style>

<script>
import Footer from './Footer.vue'

import Jumbotron from'./home/Jumbotron.vue'
import WhySection from './home/WhySection.vue'
import CloudSection from './home/CloudSection.vue'
import VsCodeSection from './home/VsCodeSection.vue'
import FeaturedAddons from './home/FeaturedAddons.vue'
import OpenhabianSection from './home/OpenhabianSection.vue'
import OpenSourceSection from './home/OpenSourceSection.vue'
import CommunitySection from './home/CommunitySection.vue'
import TweetsSection from './home/TweetsSection.vue'

let hr = null

export default {
  name: 'HomePage',
  components: {
    Jumbotron,
    WhySection,
    CloudSection,
    VsCodeSection,
    FeaturedAddons,
    OpenhabianSection,
    OpenSourceSection,
    CommunitySection,
    TweetsSection,
    Footer,
    // TwitterTimeline
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
      sr.reveal('.slide-seq3', { origin: 'left', distance: '10px', scale: 1.0, duration: 1000 }, 600)
      sr.reveal('.cloud-left-bkg-img', { origin: 'left', scale: 1.0, distance: '120px', duration: 1000 })
      sr.reveal('.cloud-right-bkg-img', { origin: 'right', scale: 1.0, distance: '120px', duration: 1000 })
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