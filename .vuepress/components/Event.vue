<template>
  <div>
    <div class="event-page-header">
      <img draggable="false" class="header-pattern" src="/pattern.png" alt="" />
      <h1 class="page-title">
        {{$page.frontmatter.title}}
      </h1>
    </div>
    <div class="event-content">
      <div class="content">
        <div style="font-size: 1.2rem; margin-bottom: 3rem;"><router-link to="/about/events.html">« Events</router-link></div>
        <img :src="$page.frontmatter.previewimage" />
        <dl class="event-details">
          <dt>Date</dt>
          <dd>{{new Date($page.frontmatter.date).toLocaleDateString('en-gb', dateOptions)}}</dd>
          <dt>Location</dt>
          <dd>{{$page.frontmatter.location}}</dd>
        </dl>
        <hr />
        <Content></Content>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="stylus">
@keyframes eventHeaderSlideIn
  0%
    transform translateX(-10px)
    opacity 0
  40%
    transform translateX(0)
    opacity 1
.event-page-header
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
    animation 1s ease-out 0s 1 eventHeaderSlideIn
    font-family 'Open Sans', sans-serif;
    font-weight 300
    font-size 40px
    color white
    text-shadow 0px 0px 10px #999
    margin 25px
  @media (max-width: 419px)
    .page-title
      font-size 30px
    
.event-content
  margin-top calc(3.6rem + 150px)
  min-height 80vh
  .event-details
    dt
      font-weight bold
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
      dateOptions: {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
  },
  computed: {
    previewimage () {
      return this.$page.frontmatter.previewimage
    }
  }
}
</script>
