<template>
  <div class="openhabian-section">
    <div class="openhabian-container">
    <ClientOnly>
      <img v-parallax="-0.2" class="openhabian-background" src="./images/pi_case.jpg" alt="raspberry pi">
    </ClientOnly>
      <div class="openhabian-text">
        <h2 class="slide-seq">Set up your own openHAB system in just a few steps</h2>
        <p class="slide-seq">
          Try the provided hassle-free "openHABian" image for the Raspberry Pi and other devices.
          Flash an SD card, boot, and enjoy your up-to-date openHAB setup with conveniently pre-configured system settings and software.
        </p>
        <router-link to="docs/installation/openhabian.html" class="learn-how-button slide-seq">Learn How ➜</router-link>
      </div>
    </div>
  </div>
</template>


<style lang="stylus">
.openhabian-section
  height 400px
  background black
  color white
  z-index 1
  display flex
  font-family 'Open Sans', sans-serif
  font-weight normal
  overflow hidden
  .openhabian-background
    position absolute
    object-fit cover
    object-position center
    margin-top -20%
    width 50%
    height 120%
  .openhabian-container
    position relative
    height 90vh
    width 100%
    overflow: hidden
  .openhabian-text
    position absolute
    width 50%
    left 50%
    top 0
    text-align center
    z-index 12
    h2
      margin 2rem
      font-size 2.5em
      font-weight 300
      border none
      text-shadow 2px 2px 8px #777
    p
      margin 1rem
      text-shadow 2px 2px 10px #333
    .learn-how-button
      display inline-block
      font-size 1rem
      color #fff
      padding 0.8rem 1.6rem
      border-radius 4px
      background-color rgba(0, 0, 0, 0.3)
      transition background-color .1s ease
      box-sizing border-box
      border 1px solid #fff
      &:hover
        text-decoration none
        background-color #fff
        color black
     
  @media (min-width: 481px) and (max-width: 1024px)
    &
      height 400px
    .openhabian-background
      width 100%
      margin-top -30%
      height 150%
      opacity 0.7
    .openhabian-container
      width 100%
      height 550px
    .openhabian-text
      width 100%
      left 0

  @media (max-width: 480px)
    &
      height 550px
    .openhabian-background
      width 100%
      margin-top -40%
      height 150%
      opacity 0.7
    .openhabian-container
      width 100%
      height 550px
    .openhabian-text
      width 100%
      left 0
 

</style>

<script>
import parallax from 'vue-parallaxy'

export default {
  components: {
    parallax
  }  
}
</script>
