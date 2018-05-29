<template>
  <div>
    <div class="page-header">
      <img draggable="false" class="header-pattern" src="/pattern.png" alt="" />
      <h1 class="page-title">
        {{$page.frontmatter.title}}
      </h1>
      <h2 class="page-description">
        {{$page.frontmatter.description}}
      </h2>
    </div>
    <div class="posts-list page-content">
      <div class="content">
        <!-- <Content></Content> -->
        <ul class="posts">
          <li v-for="post in posts" class="post">
            <router-link :to="post.path" class="post-link">
              <div class="post-cover" :style="{background: 'url(' + post.frontmatter.previewimage + ') no-repeat center'}">
              </div>
              <h3 class="post-title">{{post.frontmatter.title}}</h3>
              <div class="post-author"><strong>{{post.frontmatter.author}}</strong> posted on <span style="white-space: nowrap">{{new Date(post.frontmatter.date).toLocaleDateString('en-gb', dateOptions)}}</span></div>
              <div class="post-excerpt">

                {{removeMarkdown(post.frontmatter.excerpt || post.excerpt)}}

              </div>
              <div class="read-more">
                <div class="read-more-button">Read more ➜</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
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
.page-header
  background #ff6600
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
.page-content
  margin-top calc(3.6rem + 320px)
  min-height 80vh

.posts
  width calc(100% - 1.5rem)
  padding 0
  .post
    list-style none
    width 100%
    .post-link
      border 1px solid #ccc
      border-radius 8px
      width 100%
      display flex
      flex-direction column
      color black
      margin-top 40px
      padding 10px
      &:hover
        text-decoration none !important
      .post-cover
        height 250px
        background-size cover !important
      .post-title
        font-size 32px
        font-family 'Open Sans', sans-serif;
        font-weight 400
        line-height 42px
      .post-author
        font-size 14px
        font-family 'Open Sans', sans-serif;
        font-weight 300
        // line-height 42px
        margin-top -1.2rem
        margin-bottom 1.2rem
      .post-excerpt
        font-weight normal
        // font-size 20px
        // line-height 40px
        // font-family 'Open Sans', sans-serif;
        // font-weight 300
      .read-more
        margin-top 2rem
        font-family 'Open Sans', sans-serif
        font-weight bold
        font-size 1.2rem
        color #ff6600
        width auto
        display flex
        flex-direction row
        .read-more-button
          padding 0.8rem 1.6rem
          border 1px solid #ff6600
          border-radius 4px
          box-sizing border-box
          &:hover, &:focus
            color white
            background-color #ff6600


      

@media (max-width: 719px)
  .page-header
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

</style>

<script>
import Footer from './Footer.vue'
import BlogPostExcerpt from './BlogPostExcerpt.vue'
import ScrollReveal from './scrollreveal'

export default {
  name: 'AboutPage',
  components: {
    Footer,
    BlogPostExcerpt
  },
  data () {
    return {
      dateOptions: {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
  },
  methods: {
    removeMarkdown (markdown) {
      if (markdown)
        return markdown.replace(/\[([\w /.-]+)\]\(([\w:/.-]+)\)/g, '$1').trim()
    }
  },
  computed: {
    posts () {
      return this.$site.pages.filter((p) => {
        return p.frontmatter.layout === 'BlogPost'
      }).sort((p1, p2) => {
        return new Date(p2.frontmatter.date) - new Date(p1.frontmatter.date)
      })
    }
  },
  mounted () {
    if (this.$sr) {
      this.$sr.reveal('.post', { scale: 1.0 })
    }
  }  
}
</script>
