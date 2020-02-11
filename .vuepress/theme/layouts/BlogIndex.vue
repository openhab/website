<template>
  <ParentLayout>
    <template #page-top>
      <div class="blogindex-header">
        <img draggable="false" class="header-pattern" src="/pattern.png" alt="" />
        <h1 class="page-title">
          {{$page.frontmatter.title}}
        </h1>
        <h2 class="page-description">
          {{$page.frontmatter.description}}
        </h2>
      </div>
    </template>
    <template #page-bottom>
      <Footer />
    </template>
  </ParentLayout>
</template>

<style lang="stylus" scoped>
@keyframes headerSlideIn
  0%
    transform translateY(30px)
    opacity 0
  40%
    transform translateY(0)
    opacity 1
@keyframes headerSlideIn2
  0%
    transform translateY(30px)
    opacity 0
  40%
    transform translateY(30px)
    opacity 0
  100%
    transform translateY(0)
    opacity 1
.blogindex-header
  background $headerColor
  position absolute
  top 3.6rem
  left 0
  right 0
  margin-bottom 4rem
  height 320px
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
    animation 1.5s ease-out 0s 1 headerSlideIn
    font-family 'Open Sans', sans-serif;
    font-weight 300
    font-size 40px
    color white
    text-shadow 0px 0px 10px #999
    margin-top 100px
    margin-left 100px
  .page-description
    animation 1.5s ease-out 0s 1 headerSlideIn2
    font-family 'Open Sans', sans-serif;
    font-weight 300
    font-size 22px
    color white
    text-shadow 0px 0px 10px #999
    border none
    margin-left 100px
    margin-top 20px

@media (max-width: 719px)
  .blogindex-header
    height 200px
    .page-title
        font-size 30px
        margin-top 30px
        margin-left 30px
    .page-description
        font-size 18px
        margin 30px
  .posts-list
    margin-top calc(3.6rem + 200px)
    .post
      .post-cover
        height 200px !important

</style>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  name: 'BlogIndex',
  components: {
    ParentLayout,
    Footer
  }
}
</script>
