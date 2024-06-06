<template>
  <div class="home-icon-container">
    <img class="home-icon runs-everywhere" :class="{ current: current === 0 }" src="/os/tux.svg" />
    <img class="home-icon runs-everywhere" :class="{ current: current === 1 }" src="/os/apple.svg" />
    <img class="home-icon runs-everywhere" :class="{ current: current === 2 }" src="/os/win10.svg" />
    <img class="home-icon runs-everywhere" :class="{ current: current === 3 }" src="/os/raspberry-pi.svg" />
    <img class="home-icon runs-everywhere" :class="{ current: current === 4 }" src="/os/docker.svg" />
    <img class="home-icon frame" src="./images/icons/empty.png" />
  </div>
</template>

<style lang="stylus">
.home-icon-container
  width 150px
  height 150px
  margin auto
  transform translateX(-50%)
.home-icon.runs-everywhere
  position absolute
  width 70px
  height 70px
  left 115px
  top 60px
  opacity 0
  &.frame
    opacity 1
  &.current
    opacity 1
    transition all 1s
    transform translateY(0)

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
      if (this.current === 5) this.current = 0
    }, 8000)
  },
  beforeDestroy () {
    if (interval && typeof window !== 'undefined') {
      window.clearInterval(interval)
    }
  }
}
</script>
