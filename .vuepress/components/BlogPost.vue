<template>
  <div>
    <div class="post-header" :style="{background: 'url(' + $page.frontmatter.previewimage + ') no-repeat center'}">
      <!-- <div class="post-cover" /> -->
      <!-- <img draggable="false" class="post-cover" :src="$page.frontmatter.previewimage" alt="" /> -->
      <div class="post-cover">
        <h1 class="post-title">
          {{$page.frontmatter.title}}
        </h1>
      </div>
    </div>
    <div class="blog-body-content">
      <div class="page-author"><strong>{{$page.frontmatter.author}}</strong> posted on <span style="white-space: nowrap">{{new Date($page.frontmatter.date).toLocaleDateString('en-gb', dateOptions)}}</span></div>
      <div class="content">
        <Content></Content>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="stylus">
@keyframes postTitleSlideIn
  0%
    transform translateY(20px)
    opacity 0
  40%
    transform translateX(0)
    opacity 1
.post-header
  background #ff6600
  position absolute
  top 0
  left 0
  right 0
  margin-bottom 4rem
  height calc(400px + 3.6rem)
  overflow hidden
  text-align center
  background-size cover !important
  .post-cover
    // height 100vh
    background-color #ff6600aa
    position absolute
    left 0
    top 3.6rem
    bottom 0
    right 0
    height 400px
    display flex
    .post-title
      margin auto
      animation 1s ease-out 0s 1 postTitleSlideIn
      font-family 'Open Sans', sans-serif;
      font-weight 300
      font-size 40px
      color white
      padding 64px 24px
      text-shadow 0px 0px 10px #999
      // width calc(100vw - 20px)
      text-align center
    @media (max-width: 419px)
      .post-title
        font-size 30px
    // @media (max-width: 419px)
    //   .post-title
    //     padding 104px 0

.blog-body-content
  margin-top calc(400px + 3.6rem) !important
  min-height 80vh
  .page-author
    font-size 14px
    font-family 'Open Sans', sans-serif;
    font-weight 300
    line-height 42px
    margin-top -2rem
    margin-bottom -3rem
    text-align center

  /* For migrated posts (images and captions) */
  .img-responsive
    display block
    margin auto
  small
    display block
    text-align center
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

<script>
import Vue from 'vue'

export default {
  mounted () {
    const Tweet = require('vue-tweet-embed/tweet').default
    Vue.component('tweet', Tweet)
  }
}
</script>
