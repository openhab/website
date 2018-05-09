<template>
  <div class="home-icon-container">
    <!-- doesn't work with webpack, bummer
     <img v-for="image in ['light', 'temperature', 'shutters',
    'lock', 'key', 'homecinema', 'wifi', 'tv', 'washingmachine', 'car']"
    class="home-icon" :src="`./images/icons/${image}.png`" /> -->
    <img class="home-icon" :class="{ current: current === 0 }" src="./images/icons/light.png" />
    <img class="home-icon" :class="{ current: current === 1 }" src="./images/icons/temperature.png" />
    <img class="home-icon" :class="{ current: current === 2 }" src="./images/icons/shutters.png" />
    <img class="home-icon" :class="{ current: current === 3 }" src="./images/icons/camera.png" />
    <img class="home-icon" :class="{ current: current === 4 }" src="./images/icons/lock.png" />
    <img class="home-icon" :class="{ current: current === 5 }" src="./images/icons/key.png" />
    <img class="home-icon" :class="{ current: current === 6 }" src="./images/icons/homecinema.png" />
    <img class="home-icon" :class="{ current: current === 7 }" src="./images/icons/wifi.png" />
    <img class="home-icon" :class="{ current: current === 8 }" src="./images/icons/tv.png" />
    <img class="home-icon" :class="{ current: current === 9 }" src="./images/icons/washingmachine.png" />
    <img class="home-icon" :class="{ current: current === 10 }" src="./images/icons/car.png" />
    <img class="home-icon frame" src="./images/icons/empty.png" />
  </div>
</template>

<style lang="stylus">
.home-icon-container
  width 150px
  height 150px
  margin auto
  transform translateX(-50%)
.home-icon
  position absolute
  width 150px
  height 150px
  opacity 0
  &.frame
    opacity 1
  &.current
    opacity 1
    transition all 1s

</style>

<script>
let interval

export default {
  data () {
    return {
      current: 0
    }
  },
  mounted () {
    window.setInterval(() => {
      this.current += 1
      if (this.current === 11) this.current = 0
    }, 5000)
  },
  beforeDestroy () {
    if (interval && typeof window !== 'undefined') {
      window.clearInterval(interval)
    }
  }
}
</script>