<template>
  <div class="events-section" v-show="events.length > 0">
    <div class="events-container">
      <ClientOnly>
        <parallax :speed-factor="0.15">
          <img src="./images/shd.jpg" alt="event">
        </parallax>
      </ClientOnly>
      <div class="events-text">
        <h2 class="slide-seq4">Let's Meet Up!</h2>
        <!-- <p class="slide-seq">
          Regular events are organized around the year, and openHAB enthusiasts gathered at EclipseCon Europe in October 2017 for a successful Smart Home Day, with more to come!
        </p> -->
        <div class="upcoming-events" v-show="events.length > 0">
          <h3 class="slide-seq4">Next event{{events.length > 1 ? 's' : ''}}</h3>

          <!-- <ClientOnly> -->
            <ul class="event-list slide-seq4">
              <li v-for="page in events" class="event">
                <div class="calendar"><calendar-icon :date="page.frontmatter.date" :end-date="page.frontmatter.end_date"></calendar-icon></div>
                <!-- <a :href="page.frontmatter.link" target="_blank" class="event-link"><img class="event-image" :src="page.frontmatter.event_image" /></a> -->
                <div class="event-info">
                  <a :href="page.frontmatter.link" target="_blank"><h3 class="event-title">{{page.frontmatter.title}}</h3></a>
                  <div class="event-location">{{page.frontmatter.location}}</div>
                  <!-- <p>{{page.frontmatter.abstract}}</p> -->
                </div>
              </li>
            </ul>
          <!-- </ClientOnly> -->
        </div>
        
        <router-link to="about/events.html" class="see-all-events-button slide-seq4">See All Events →</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.events-section
  // min-height 90vh
  background black
  color white
  display flex
  font-family 'Open Sans', sans-serif
  font-weight normal
  overflow hidden
  .events-container
    position relative
    // min-height 90vh
    width 100%
    overflow: hidden
  .Masthead
    width 100%
    z-index 10 !important
    // height 300px !important
    .Masthead__image
      // height 300px !important
  .events-text
    position absolute
    top calc(50%)
    transform translateY(-50%)
    text-align center
    left 0
    right 60%
    z-index 12
    align-content center
    padding 5rem
    margin-top 3rem
    height 100%
    min-width 30%
    background-color rgba(0, 0, 0, 0.3)
    h2
      font-size 2.5em
      font-weight 300
      border none
      margin-top 0
      text-shadow 0px 0px 10px #666
    .upcoming-events
      .event-list
        padding-left 0
        list-style none
        .event
          display flex
          flex-wrap nowrap
          margin-bottom 2rem
          .event-link
            display flex
            height 8rem
            width 10rem
          .event-image
            max-height 8em
            max-width 8em
            margin-left 1rem
            margin-right 1rem
            object-fit contain
          .event-info
            text-align left
            margin-left 1rem
            .event-title
              margin-bottom 0
              font-family 'Open Sans', sans-serif
            .event-location
              font-family 'Open Sans', sans-serif
              font-weight bold
    .see-all-events-button
      // margin-top calc(20vh - 1.3rem)
      display inline-block
      font-size 1rem
      color #fff
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      background-color rgba(0, 0, 0, .3)
      border 1px solid #fff
      &:hover
        background-color #fff
        color black

  @media (max-width 719px)
    .event
      flex-wrap wrap

  
  @media (max-width: 767px)
    .Masthead
      .Masthead__image
        background-color black
      .Masthead__image > img
        opacity 0.6
    .calendar
      transform scale(0.8)
    .events-text
      right 0
      width 100%
      background transparent
      padding 0
  @media (max-width: 479px)
    .calendar
      transform scale(0.6)
    .event
      margin-bottom 0 !important
    .events-text
      font-size 0.8rem
      right 0
      width 100%
      background transparent
      padding 0
      h3
        font-size 1.4em

@media (min-width: 1024px)
  .events-section
    height 85vh
    .Masthead__image
      height 85vh !important
</style>


<script>
import parallax from 'vue-parallaxy'

export default {
  components: {
    parallax
  },
  data () {
    return {
      events: []
    }
  },
  mounted () {
    this.events = this.$site.pages.filter((p) => new Date(p.frontmatter.date) > new Date() && p.frontmatter.layout === 'Event')
      .sort((e1,e2) => new Date(e1.frontmatter.date) > new Date(e2.frontmatter.date))
      .slice(0, 2)
  }
}
</script>
