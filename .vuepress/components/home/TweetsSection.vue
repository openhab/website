<template>
  <div class="tweets">
    <h2 class="slide">Follow us on Twitter</h2>
    <ClientOnly>
      <div class="timeline">
        <twitter-timeline :id="'openhab'" :source-type="'profile'" :options="{ linkColor: '#FF6600', tweetLimit: '10', dnt: true }" />
      </div>
    </ClientOnly>
  </div>
</template>

<style lang="stylus">

.tweets
  max-height 70vh
  display flex
  align-items center
  flex-direction column
  background-color #1b95e0
  // padding-top 4rem
  h2
    font-size 2.5em
    font-weight 300
    border none
    color white
  
  .timeline
    max-height 70vh
    overflow auto
    width 50%
    min-width 320px

</style>

<script>

import Vue from 'vue'

export default {
  mounted () {
    const TwitterTimeline = require('vue-tweet-embed/timeline').default
    Vue.component('twitter-timeline', TwitterTimeline)
  }
}
</script>


