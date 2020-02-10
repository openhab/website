<template>
  <ParentLayout>
    <template #page-top>
      <div class="post-header" :style="{background: 'url(' + $page.frontmatter.previewimage + ') no-repeat center'}">
        <!-- <div class="post-cover" /> -->
        <!-- <img draggable="false" class="post-cover" :src="$page.frontmatter.previewimage" alt="" /> -->
        <div class="post-cover">
          <h1 class="post-title">
            {{$page.frontmatter.title}}
          </h1>
        </div>
      </div>
      <div class="blog-body-header">
        <div class="page-author"><strong>{{$page.frontmatter.author}}</strong> posted on <span style="white-space: nowrap">{{new Date($page.frontmatter.date).toLocaleDateString('en-gb', dateOptions)}}</span></div>
      </div>
    </template>
    <template #page-bottom>
      <Footer />
    </template>
  </ParentLayout>
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
  background $headerColor
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

.blog-body-header
  margin-top calc(400px + 3.6rem + 10vh) !important
  .page-author
    font-size 14px
    font-family 'Open Sans', sans-serif;
    font-weight 300
    line-height 42px
    margin-top -2rem
    margin-bottom -3rem
    text-align center

  /* For migrated posts (images and captions) */
  & + .img-responsive
    display block
    margin auto
  & + small
    display block
    text-align center
</style>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Footer from '@theme/components/Footer.vue'
import Vue from 'vue'

export default {
  name: 'AboutPage',
  components: {
    ParentLayout,
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
  },
  mounted () {
    const Tweet = require('vue-tweet-embed/tweet').default
    Vue.component('tweet', Tweet)
  }
}
</script>
