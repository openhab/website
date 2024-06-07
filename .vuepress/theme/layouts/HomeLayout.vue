<template>
  <ParentLayout>
    <template #page-top>
      <div class="home-header">

        <jumbotron />

        <div class="after-jumbotron">

          <div class="placeholder"></div>

        </div>
      </div>
    </template>
    <template #page-bottom>
      <Footer />
      <ConsentBanner />
    </template>
  </ParentLayout>
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

.homepage header.headroom:not(.headroom--not-top)
  animation 1s ease-out 0s 1 headerAppear
  opacity 1

.after-jumbotron
  .placeholder
    height calc(760px - 1.8rem)

.home-header + .theme-default-content
  padding 0 !important

</style>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Footer from '@theme/components/Footer.vue'
import Vue from 'vue'

import Jumbotron from'../../components/home/Jumbotron.vue'
import AlertBannerSection from '../../components/home/AlertBannerSection.vue'
import WhySection from '../../components/home/WhySection.vue'
import CloudSection from '../../components/home/CloudSection.vue'
import VsCodeSection from '../../components/home/VsCodeSection.vue'
import FeaturedAddons from '../../components/home/FeaturedAddons.vue'
import OpenhabianSection from '../../components/home/OpenhabianSection.vue'
import OpenSourceSection from '../../components/home/OpenSourceSection.vue'
import CommunitySection from '../../components/home/CommunitySection.vue'
import EventsSection from '../../components/home/EventsSection.vue'
import AlternativeToSection from '../../components/home/AlternativeToSection.vue'

let hr = null

export default {
  name: 'HomePage',
  components: {
    ParentLayout,
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
    AlternativeToSection,
    Footer,
    // TwitterTimeline
  },
  mounted () {
    const header = document.getElementsByTagName("header")[0]
    if (this.Headroom) {
      hr = new this.Headroom(header)
      hr.init()
      setTimeout(() => {
        header.classList.add('ready')
        header.classList.remove('homepage')
      }, 1500)
    }

    if (this.$route.hash && this.$route.hash.indexOf('token') > 0) {
      window.location = 'https://www.openhab.org/admin/' + this.$route.hash
    }
  },
  beforeDestroy () {
    if (hr) {
      hr.destroy()
    }
  },
}
</script>
