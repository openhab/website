<template>
  <div class="featured-addons-section">
    <h2>More than 1000 supported things!</h2>
    <div class="logos">
      <router-link :to="addon.path" v-for="addon in featuredAddons" :key="addon.path" class="logo-container">
        <img :src="addon.frontmatter.logo.replace('images/addons/', '/logos/')" class="featured-logo" />
      </router-link>
    </div>
    <div class="addons-button-container">
      <router-link to="addons" class="all-addons-button slide">See All Add-ons →</router-link>
    </div>
  </div>  
</template>

<style lang="stylus">
.featured-addons-section
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
  .addons-button-container
    padding 2rem
    text-align center
  .all-addons-button
    display inline-block
    font-size 1rem
    color #ff6600
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border 1px solid #ff6600
    &:hover
      background-color #ff6600
      color white

</style>

<script>
export default {
  computed: {
    featuredAddons () {
      return this.$site.pages.filter(p => p.frontmatter && p.frontmatter.logo && p.frontmatter.since === '2x')
    }
  }
}
</script>
