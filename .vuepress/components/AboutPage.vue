<template>
  <div>
    <div class="page-header">
      <img draggable="false" class="header-pattern" src="/pattern.png" alt="" />
      <h1 class="page-title">
        {{$page.frontmatter.title}}
      </h1>
    </div>
    <div class="page-content">
      <div class="content">
        <Content></Content>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="stylus">
@keyframes headerSlideIn
  0%
    transform translateX(-10px)
    opacity 0
  40%
    transform translateX(0)
    opacity 1
.page-header
  background #ff6600
  position absolute
  top 3.6rem
  left 0
  right 0
  margin-bottom 4rem
  height 130px
  padding-top 80px
  overflow hidden
  .header-pattern
    opacity 0.15
    width 100vw
    // height 100vh
    position absolute
    top 0
    object-fit cover
    user-select none
  .page-title
    animation 1s ease-out 0s 1 headerSlideIn
    font-family 'Open Sans', sans-serif;
    font-weight 300
    font-size 40px
    color white
    text-shadow 0px 0px 10px #999
    margin 25px
  @media (max-width: 419px)
    .page-title
      font-size 30px
    
.page-content
  margin-top calc(3.6rem + 150px)
  min-height 80vh
</style>

<script>
import Footer from './Footer.vue'

export default {
  name: 'AboutPage',
  components: {
    Footer
  },
  data () {
    return {

    }
  }
}
</script>
