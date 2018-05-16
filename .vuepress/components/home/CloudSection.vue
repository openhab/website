<template>
  <div class="cloud-section">
    <div class="cloud-text">
      <div class="cloud-left">
        <h2 class="slide">No Cloud Required...</h2>
        <p class="slide">
          openHAB runs on your hardware, doesn't require any cloud service to work, keeps your data privately at home and talks directly to your local devices whenever possible.
          At the core of our <router-link to="/about/who-we-are.html">philosophy</router-link> is that you always remain in control.
        </p>
      </div>
      <div class="cloud-right">
        <h2 class="slide">...but Cloud-Aware</h2>
        <p class="slide">
          Integrations are available for the most popular cloud-based smart home platforms, including Google Assistant, Amazon Alexa, Apple HomeKit and IFTTT.
          Use the openHAB Cloud connector with the free <a target="_blank" href="https://www.myopenhab.org/">myopenhab.org</a> service or host your own.
        </p>
      </div>
    </div>
    <ClientOnly>
      <div class="cloud-bkg">
        <div class="cloud-left-bkg">
          <img class="cloud-left-bkg-img" src="./images/lock-bkg.png" />
        </div>
        <div class="cloud-right-bkg">
          <img class="cloud-right-bkg-img" src="./images/cloud-bkg.png" />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style lang="stylus">
.cloud-section
  background-color #f2f2f2
  width 100%
  height auto
  // height 480px
  overflow hidden
  display flex
  flex-direction column
  .cloud-text
    // height 160px
    height auto
    width 100%
    display flex
    text-align center
    .cloud-left
      width 50%
      // height 160px
      // position absolute
      left 0
    .cloud-right
      // position absolute
      right 0
      width 50%
      // height 160px
    h2
      width 100%
      font-size 2rem
      font-family 'Open Sans', sans-serif
      font-weight 300
      color #5599ff
    p
      font-family 'Open Sans', sans-serif
      padding 0 2rem

    
  .cloud-bkg
    height 28vw
    width 100%
    overflow hidden
    .cloud-left-bkg
      position absolute
      left 0
      width 50%
      height 100%
      overflow hidden
      img
        // width 100%
        max-height 28vw
        // height 320px
    .cloud-right-bkg
      position absolute
      right 0
      width 50%
      height 100%
      overflow hidden
      img
        float right
        // width 100%
        max-height 28vw
        // height 320px
@media (max-width: 719px)
  .cloud-section
    height auto
    .cloud-text
      height auto
      flex-direction column
      .cloud-left
        position relative
        width 100%
      .cloud-right
        position relative
        width 100%
    .cloud-bkg
      height 100px
      .cloud-left-bkg
        height 100px !important
        img
          width 180px
          height 100px !important
      .cloud-right-bkg
        height 100px
        img
          width 180px
          height 100px !important

</style>
