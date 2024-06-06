<template>
  <div class="featured-addons-section">
    <h2>More than 3000 supported things!</h2>
    <ClientOnly>
      <div class="logos">
        <router-link :to="addon.path" v-for="addon in featuredAddons" :key="addon.path" class="logo-container">
          <img :src="addon.frontmatter.logo.replace('images/addons/', '/logos/')" class="featured-logo" />
        </router-link>
      </div>
    </ClientOnly>
    <div class="addons-button-container">
      <router-link to="/addons/" class="all-addons-button slide">Browse All Add-ons ➜</router-link>
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
    font-family 'Open Sans', sans-serif
    font-size 1rem
    font-weight bold
    color #ff6600
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border 2px solid #ff6600
    &:hover
      text-decoration none !important
      background-color #ff6600
      color white

</style>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      ready: false
    }
  },
  computed: {
    featuredAddons () {
      return this.$site.pages.filter(p => p.frontmatter && p.frontmatter.logo && p.frontmatter.type === 'binding')
    }
  },
  mounted () {
    this.ready = true
    if (this.$sr) {
      Vue.nextTick(() => {
        this.$sr.reveal('.featured-logo', { })
      })
    }
  }
}
</script>
