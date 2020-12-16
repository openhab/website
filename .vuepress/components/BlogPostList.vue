<template>
  <div class="posts-list page-content">
    <div class="content">
      <!-- <Content></Content> -->
      <ul class="posts">
        <li v-for="post in posts" class="post">
          <router-link :to="post.path">
            <div class="post-frame">
              <div class="post-cover" :style="{background: 'url(' + post.frontmatter.previewimage + ') no-repeat center'}">
              </div>
              <h3 class="post-title">{{post.frontmatter.title}}</h3>
              <div class="post-author"><strong>{{post.frontmatter.author}}</strong> posted on <span style="white-space: nowrap">{{new Date(post.frontmatter.date).toLocaleDateString('en-gb', dateOptions)}}</span></div>
              <div class="post-excerpt">

                <div v-html="post.excerpt || post.frontmatter.excerpt"></div>

              </div>
              <div class="read-more">
                <div class="read-more-button">Read more ➜</div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.posts-list
  margin-top calc(3.6rem + 320px + 20vh) !important
  min-height 80vh

.posts
  width calc(100% - 1.5rem)
  padding 0
  .post
    list-style none
    width 100%
    a:hover
      text-decoration none !important
    .post-frame
      border 1px solid #ccc
      border-radius 8px
      width 100%
      display flex
      flex-direction column
      color black
      margin-top 40px
      padding 10px
      .post-cover
        height 450px
        background-size cover !important
      .post-title
        &:hover
          text-decoration none !important
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
          font-weight bold
          &:hover, &:focus
            color white
            background-color #ff6600
            text-decoration none

@media (max-width: 719px)
  .posts-list
    margin-top calc(3.6rem + 200px)
    .post
      .post-cover
        height 200px !important

</style>

<script>
export default {
  data () {
    return {
      dateOptions: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
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
