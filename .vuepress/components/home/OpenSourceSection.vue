<template>
  <div class="section-opensource">
    <div class="left">
      <div class="eclipse-logos">
        <a target="_blank" href="https://eclipse.org/smarthome"><img class="esh-logo" src="./images/esh-logo.png" /></a>
        <a target="_blank" href="https://iot.eclipse.org"><img class="iot-logo" src="./images/iot-logo.png" /></a>
      </div>
    </div>
    <div class="right">
      <h2><span class="slide-seq3">100% Open Source.</span><br />
      <span class="slide-seq3 reliable">100% Reliable.</span></h2>
      <p class="slide">openHAB is built upon Eclipse SmartHome™, an industry-grade IoT framework for the household backed by the Eclipse Foundation.<br />
        It is actively maintained, absolutely vendor-neutral and will never lock you in.</p>
    </div>
  </div>
</template>

<style lang="stylus">
.section-opensource
  background-color #01324D
  color white
  display flex
  flex-direction row
  text-align left
  font-family 'Open Sans', sans-serif
  .left
    width 40%
    text-align center
    display flex
    flex-direction row
    .eclipse-logos
      margin auto
      display flex
      flex-direction column
      align-self center
      align-items center
      .esh-logo
        width 300px
        object-fit contain
        margin 1rem
      .iot-logo
        width 60px
        height 60px
        object-fit contain
        margin 1rem
      
  .right
    width 60%
    h2
      padding 1rem
      font-size 2.5em
      font-weight 300
      border none
      margin-bottom 0
      span
        white-space nowrap
        &.reliable
          font-weight 400
    p
      padding 1rem
      padding-bottom 2rem

  @media (max-width: 768px)
    &
      flex-direction column
    .left
      width 100%
    .right
      width 100%
      h2
        text-align center
        font-size 2em
      p
        text-align center
</style>
