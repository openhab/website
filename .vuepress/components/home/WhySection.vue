<template>
    <div class="section2">
    <h2>Why openHAB?</h2>
    <div class="features">
        <div ref="feature1" class="feature">
          <ClientOnly>
            <integrate-everything-icon />
          </ClientOnly>
          <h3>Integrate Everything</h3>
          <p>
            With its <router-link to="docs/#a-deeper-dive-openhab-structure-for-advanced-users">pluggable architecture</router-link>
            openHAB supports more than <router-link to="addons/">400 different technologies and systems</router-link> and thousands of devices!
          </p>
        </div>
        <div ref="feature2" class="feature">
          <ClientOnly>
            <rotating-gears-icon />
          </ClientOnly>
          <div class="home-icon-container">
            <img src="./images/icons/empty.png" class="home-icon current" />
          </div>
          <h3>Automate with Ease</h3>
          <p>
            Use a powerful and flexible engine to design
            <router-link to="docs/concepts/rules.html#what-are-rules">rules</router-link>,
            with time and event-based
            <router-link to="docs/concepts/rules.html#triggers">triggers</router-link>,
            <router-link to="docs/concepts/rules.html#scripts">scripts</router-link>,
            <router-link to="docs/configuration/actions.html">actions</router-link>,
            <router-link to="docs/configuration/actions.html#cloud-notification-actions">notifications</router-link>
            and
            <router-link to="docs/concepts/audio.html">voice control</router-link>.
          </p>
        </div>
        <div ref="feature3" class="feature">
          <ClientOnly>
            <runs-everywhere-icon />
          </ClientOnly>
          <h3>Runs Everywhere</h3>
          <p>
            Run your server on
            <router-link to="docs/installation/linux.html">Linux</router-link>,
            <router-link to="docs/installation/macos.html">macOS</router-link>,
            <router-link to="docs/installation/windows.html">Windows</router-link>,
            <router-link to="docs/installation/openhabian.html">Raspberry Pi</router-link>,
            <router-link to="docs/installation/docker.html">Docker</router-link>,
            <router-link to="docs/installation/synology.html">Synology</router-link>...
            Access it with apps for the web,
            <router-link to="docs/apps/ios.html">iOS</router-link>,
            <router-link to="docs/apps/android.html">Android</router-link> and others.
          </p>
        </div>
    </div>
    </div>

</template>

<style lang="stylus">
.section2
  font-family 'Open Sans', sans-serif
  background white
  text-align center
  h2
    margin 2rem 0
    text-align center
    font-family 'Open Sans', sans-serif
    font-weight normal
    font-size 2.5em
  .features
    margin 2rem
    margin-top 1.5rem
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
      margin 0
      color lighten(black, 25%)
  @media (max-width: 768px)
    .features
      flex-direction column
    .feature
      margin-top 1rem
      max-width 100%

</style>

<script>
import IntegrateEverythingIcon from './IntegrateEverythingIcon.vue'
import RotatingGearsIcon from './RotatingGearsIcon.vue'
import RunsEverywhereIcon from './RunsEverywhereIcon.vue'

export default {
  components: {
    IntegrateEverythingIcon,
    RotatingGearsIcon,
    RunsEverywhereIcon
  }
}
</script>
