<template>
  <div class="page-versions">
    <ul class="version-switcher">
      <li><a :href="siteUrl('Stable')" class="version-button" :class="{ current: currentVersion === 'Stable' }">Stable</a></li>
      <li><a :href="siteUrl('Latest')" class="version-button" :class="{ current: currentVersion === 'Latest' }">Latest</a></li>
    </ul>
    <div class="other-versions">
      <a :href="siteUrl('v2')" @click="switchVersion('2.x')">v2.5</a>
    </div>
  </div>
</template>

<style lang="stylus">
.page-versions
  margin-top 1rem
.version-switcher
  list-style-type none
  padding .5rem
  display flex
  flex-direction row
  justify-content center
  .version-button
    width 6.5rem
    border 1px solid #2c3e50
    color #2c3e50
    background transparent
    font-family 'Open Sans', sans-serif
    font-weight 300
    font-size 14px
    padding 4px
    cursor pointer
    text-align center
    &.current
      background #2c3e50
      color #fff
      cursor not-allowed
.other-versions
  text-align center
  font-size 12px
  margin-top 0.2rem
  a
    color #2c3e50 !important

@media (prefers-color-scheme: dark)
  .version-switcher
    .version-button
      border 1px solid #a6a6a6 !important
      color #a6a6a6 !important
      &.current
        background #a6a6a6 !important
        color #fff !important
  .other-versions
    a
      color #a6a6a6 !important
</style>

<script>
export default {
  data () {
    return {
      currentVersion: null
    }
  },
  methods: {
    siteUrl (version) {
      if (version === this.currentVersion) return null
      let url = (this.$page.path.indexOf('/addons') === 0) ? this.$page.path.substring(1) : this.$page.path.split('/')[1]
      if (version === 'Stable') {
        url = 'https://www.openhab.org/' + url
      } else if (version === 'Latest') {
        url = 'https://next.openhab.org/' + url
      } else if (version === 'v2') {
        url = 'https://v2.openhab.org/' + url
      }
      return url
    }
  },
  mounted () {
    this.currentVersion = this.$site.themeConfig.docsVersion
  }
}
</script>
