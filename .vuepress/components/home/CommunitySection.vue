<template>
<div class="community">
  <h2 class="slide">Ready to join the community?</h2>
  <p class="slide">The vibrant openHAB community contributes examples and tutorials on a daily basis and is happy to help you!</p>
  <div class="community-stats">
    <div class="community-stat slide-seq2">
      <div class="count">{{communityTopics}}</div>
      <div class="subtext">discussions</div>
    </div>
    <div class="community-stat slide-seq2">
      <div class="count">{{communityPosts}}</div>
      <div class="subtext">posts</div>
    </div>
    <div class="community-stat slide-seq2">
      <div class="count">{{communityMembers}}</div>
      <div class="subtext">members</div>
    </div>
  </div>
  <div class="join">
    <a target="_blank" href="https://community.openhab.org" class="join-us-button slide-slow">Join Us →</a>
  </div>
</div>
</template>

<style lang="stylus">

.community
  background-color #ddd
  display flex
  flex-direction column
  text-align center
  font-family 'Open Sans', sans-serif
  h2
    font-size 2.5em
    font-weight 400
    border none
    margin-bottom 0
  p
    color #555
  .community-stats
    display flex
    flex-direction row
    align-items center
    align-self center
    font-weight bold
    @media (max-width: 768px)
      &
        flex-direction column
  
    .community-stat
      padding 1rem 2rem
      .count
        font-size 24pt
  .join-us-button
    margin 2rem
    display inline-block
    font-size 1rem
    color #ff6600
    padding 0.8rem 1.6rem
    border-radius 4px
    font-weight bold
    transition background-color .1s ease
    box-sizing border-box
    border 2px solid #ff6600
    &:hover
      background-color #ff6600
      color white

</style>

<script>
export default {
  data () {
    return {
      communityMembers: '22000+',
      communityTopics: '23000+',
      communityPosts: '240000+'
    }
  },
  mounted () {
    // note: this won't work in dev mode (CORS only allowed on the production URL)
    let url = 'https://community.openhab.org/about.json'
    fetch(url).then((resp) => {
      resp.json().then((json) => {
        if (json.about.stats) {
          this.communityMembers = json.about.stats.user_count
          this.communityTopics = json.about.stats.topic_count
          this.communityPosts = json.about.stats.post_count
        }
      });
    }).catch ((err) => {
      console.log('Failed fetching real-time stats from community.openhab.org - check above for CORS error messages')
    })
  }
}
</script>

