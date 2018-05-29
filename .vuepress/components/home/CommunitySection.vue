<template>
<div class="community">
  <!-- SVGs in this section from materialdesignicons.com

  Copyright (c) 2014, Austin Andrews (http://materialdesignicons.com/),
  with Reserved Font Name Material Design Icons.
  Copyright (c) 2014, Google (http://www.google.com/design/)
  uses the license at https://github.com/google/material-design-icons/blob/master/LICENSE

  This Font Software is licensed under the SIL Open Font License, Version 1.1.
  This license is found at https://github.com/Templarian/MaterialDesign/blob/master/LICENSE,
  and is also available with a FAQ at: http://scripts.sil.org/OFL
  -->
  <h2 class="slide">
    <svg style="width:72px;height:72px" viewBox="0 0 24 24">
      <path fill="#2c3e50" d="M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19L9.17,17.66C7.76,17.66 7.76,17.66 7.05,16.95C6.34,16.24 6.34,16.24 6.34,14.83L2.81,14.12M5.64,16.95L7.05,18.36L4.39,21.03H2.97V19.61L5.64,16.95M4.22,15.54L5.46,15.71L3,18.16V16.74L4.22,15.54M8.29,18.54L8.46,19.78L7.26,21H5.84L8.29,18.54M13,9.5A1.5,1.5 0 0,0 11.5,11A1.5,1.5 0 0,0 13,12.5A1.5,1.5 0 0,0 14.5,11A1.5,1.5 0 0,0 13,9.5Z" />
    </svg>
    <br />
    Ready to join the community?</h2>
  <p class="slide">The vibrant openHAB community contributes examples and tutorials on a daily basis and is happy to help you!</p>
  <div class="community-stats">
    <div class="community-stat slide-seq2">
      <div class="community-stat-icon">
        <svg style="width:36px;height:36px" viewBox="0 0 24 24">
            <path fill="#2c3e50" d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
        </svg>
      </div>
      <div class="count">{{communityTopics}}</div>
      <div class="subtext">discussions</div>
    </div>
    <div class="community-stat slide-seq2">
      <div class="community-stat-icon">
        <svg style="width:36px;height:36px" viewBox="0 0 24 24">
            <path fill="#2c3e50" d="M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
        </svg>
      </div>
      <div class="count">{{communityPosts}}</div>
      <div class="subtext">posts</div>
    </div>
    <div class="community-stat slide-seq2">
      <div class="community-stat-icon">
        <svg style="width:36px;height:36px" viewBox="0 0 24 24">
            <path fill="#2c3e50" d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" />
        </svg>
      </div>
      <div class="count">{{communityMembers}}</div>
      <div class="subtext">members</div>
    </div>
  </div>
  <div class="join">
    <router-link to="about/showcase.html" class="join-us-button slide-slow">Showcase ➜</router-link>
    <a target="_blank" href="https://community.openhab.org" class="join-us-button slide-slow">Join Us ➜</a>
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

