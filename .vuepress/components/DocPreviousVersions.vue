<template>
  <div class="page-versions">
    <ul class="version-switcher">
      <li><a :href="siteUrl('Stable')" class="version-button" :class="{ current: currentVersion === 'Stable' }">Stable <small v-if="currentVersion === 'Stable' || currentVersion === 'Latest'">({{stableVersion}})</small></a></li>
      <li><a :href="siteUrl('Latest')" class="version-button" :class="{ current: currentVersion === 'Latest' }">Latest <small v-if="currentVersion === 'Stable' || currentVersion === 'Latest'">({{latestVersion}})</small></a></li>
    </ul>
    <div class="archived-versions" v-if="previousVersions && previousVersions.length">
      <div class="dropdown-wrapper" :class="{ archiveDropdownOpen }">
        <a class="dropdown-title" @click="archiveDropdownOpen = !archiveDropdownOpen">
          <span class="title">Archived</span>
          <span class="arrow down"></span>
        </a>
        <ul class="nav-dropdown" v-show="archiveDropdownOpen">
          <li v-for="version in previousVersions" :key="version.version" class="dropdown-item">
            <a :href="siteUrl(version)">{{version.version}}</a>
          </li>
        </ul>
      </div>
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

.archived-versions
  white-space nowrap
  font-size 9pt
  height 14px
  user-select none
  display flex
  flex-direction row
  justify-content center
  .dropdown-wrapper
    height 1.8rem !important

  .dropdown-title
    display block
    font-size 13px
    font-weight normal
    color black
    cursor pointer
    &:hover
      text-decoration none !important
  .nav-dropdown
    box-sizing border-box
    overflow-y auto
    top 100%
    right 0
    background-color #fff
    padding 10px 0
    text-align left
    white-space nowrap
    margin 0
    position relative
    top 0
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
  .archived-versions
    .nav-dropdown
      a
        color #a6a6a6 !important
</style>

<script>
export default {
  data () {
    return {
      currentVersion: null,
      stableVersion: null,
      latestVersion: null,
      previousVersions: [],
      archiveDropdownOpen: false
    }
  },
  methods: {
    siteUrl (version) {
      if (version === this.currentVersion) return null
      let url = this.$page.path.split('/')[1]
      if (version === 'Stable') {
        url = 'https://www.openhab.org/' + url
      } else if (version === 'Latest') {
        url = 'https://next.openhab.org/' + url
      } else if (version.website) {
        url = version.website + url
      }
      return url
    }
  },
  created () {
    this.currentVersion = this.$site.themeConfig.docsVersion
    const downloadPage = this.$site.pages.find((p) => p.path === '/download/')
    this.stableVersion = downloadPage.frontmatter.currentVersion
    this.latestVersion = downloadPage.frontmatter.currentSnapshotVersion.replace('-SNAPSHOT', '')
    this.previousVersions = downloadPage.frontmatter.previousVersions
  }
}
</script>
