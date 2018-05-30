<template>
  <div>

    <jumbotron />

    <div class="after-jumbotron">

      <div class="placeholder"></div>

      <alert-banner-section v-if="$page.frontmatter.alert" />

      <why-section />

      <openhabian-section />

      <cloud-section />

      <vs-code-section />

      <featured-addons />

      <open-source-section />

      <community-section />

      <events-section />

      <tweets-section />

      <alternative-to-section />

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
    opacity 0.5
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

@keyframes headerAppear
  0%
    opacity 0
  80%
    opacity 0
  100%
    opacity 1

header.headroom--pinned
  animation 0.5s ease-out 0s 1 headerSlideDown
  transform translateY(0%)
header.headroom--unpinned
  // animation 0.5s ease-out 0s 1 headerSlideUp
  transform translateY(-100%)
header.headroom--top
  opacity 1
  transition all 0.5s
  background transparent
  color white
  border-bottom none
  box-shadow none
  .logo
    opacity 0
  .nav-dropdown
    color black
  .nav-links > .nav-item:last-child
    svg
        color white
  .dropdown-title .arrow
      border-top 6px solid #fff

header.homepage:not(.headroom)
  opacity 0
  background transparent
  color white
  border-bottom none
  box-shadow none
  .logo
    opacity 0
  .nav-dropdown
    color black
  .nav-links > .nav-item:last-child
    svg
        color white
  .dropdown-title .arrow
      border-top 6px solid #fff

header.homepage.headroom
  animation 1s ease-out 0s 1 headerAppear
  opacity 1

.after-jumbotron
  .placeholder
    height calc(90vh - 3.6rem)
    min-height calc(600px - 3.6rem)

</style>

<script>
import Footer from './Footer.vue'

import Jumbotron from'./home/Jumbotron.vue'
import AlertBannerSection from './home/AlertBannerSection.vue'
import WhySection from './home/WhySection.vue'
import CloudSection from './home/CloudSection.vue'
import VsCodeSection from './home/VsCodeSection.vue'
import FeaturedAddons from './home/FeaturedAddons.vue'
import OpenhabianSection from './home/OpenhabianSection.vue'
import OpenSourceSection from './home/OpenSourceSection.vue'
import CommunitySection from './home/CommunitySection.vue'
import EventsSection from './home/EventsSection.vue'
import AlternativeToSection from './home/AlternativeToSection.vue'
import TweetsSection from './home/TweetsSection.vue'

let hr = null

export default {
  name: 'HomePage',
  components: {
    Jumbotron,
    AlertBannerSection,
    WhySection,
    CloudSection,
    VsCodeSection,
    FeaturedAddons,
    OpenhabianSection,
    OpenSourceSection,
    CommunitySection,
    EventsSection,
    TweetsSection,
    AlternativeToSection,
    Footer,
    // TwitterTimeline
  },
  mounted () {
    if (this.$sr) {
      const sr = this.$sr
      sr.reveal('.feature', { scale: 1.0 }, 200)
      sr.reveal('.slide', { scale: 1.0 })
      sr.reveal('.slide-slow', { scale: 1.0, duration: 1000, delay: 500 })
      sr.reveal('.slide-seq', { scale: 1.0, duration: 1000 }, 300)
      sr.reveal('.slide-seq2', { scale: 1.0, duration: 1000 }, 300)
      sr.reveal('.slide-seq3', { origin: 'left', distance: '10px', scale: 1.0, duration: 1000 }, 600)
      sr.reveal('.slide-seq4', { scale: 1.0, viewFactor: 0.0 }, 200)
      sr.reveal('.alert', { origin: 'left', distance: '40px', duration: 1200, scale: 1.0 })
    }
    const header = document.getElementsByTagName("header")[0]
    if (this.Headroom) {
      hr = new this.Headroom(header)
      hr.init()
      setTimeout(() => {
        header.classList.remove('homepage')
      }, 1500)
    }
  },
  beforeDestroy () {
    if (hr) {
      hr.destroy()
    }
  }
}
</script>
