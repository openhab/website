<template>
  <div class="openhabian-section">
    <div class="openhabian-container">
      <ClientOnly>
        <parallax :speed-factor="0.15">
          <img src="./images/rpi.jpg" alt="raspberry pi">
        </parallax>
      </ClientOnly>
      <div class="openhabian-text">
        <h2 class="slide-seq">Build your openHAB appliance in less than an hour</h2>
        <p class="slide-seq">
          Try openHABian, the official openHAB operating system for Raspberry Pi or PINE A64: write the image on a SD card, boot,
          and enjoy an up-to-date production-ready openHAB server with conveniently pre-configured software such as Samba, Mosquitto, Grafana and InfluxDB!
        </p>
        <router-link to="docs/installation/openhabian.html" class="learn-how-button slide-seq">Learn How →</router-link>
      </div>
    </div>
  </div>
</template>


<style lang="stylus">
.openhabian-section
  height 70vh
  background black
  color white
  display flex
  font-family 'Open Sans', sans-serif
  font-weight normal
  overflow hidden
  .openhabian-container
    position relative
    height 70vh
    width 100%
    overflow: hidden
  .Masthead
    width 100%
    z-index 10 !important
    // height 300px !important
    .Masthead__image
      // height 300px !important
  .openhabian-text
    position absolute
    width 100%
    top 0
    text-align center
    z-index 12
    h2
      font-size 2.5em
      font-weight 300
      border none
    p
      margin 1rem
    .learn-how-button
      display inline-block
      font-size 1rem
      color #fff
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border 1px solid #fff
      &:hover
        background-color #fff
        color black
      
  @media (max-width: 768px)
    &
      height 550px
    .openhabian-container
      height 550px
    .Masthead
      height 550px !important
      .Masthead__image > img
        opacity 0.6

</style>

<script>
import parallax from 'vue-parallaxy'

export default {
  components: {
    parallax
  }  
}
</script>
