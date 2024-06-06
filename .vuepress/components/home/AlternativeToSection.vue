<template>
  <section class="alternativeto-banner">
    <div class="text">
      openHAB is the
      <a target="_blank" href="https://alternativeto.net/tag/home-automation/?sort=likes">Best home automation app</a>
      according to crowdsourced software recommendations on
    </div>
    <a class="alternativeto-button" target="_blank" href="https://alternativeto.net/software/openhab/about/">
      <img src="./images/alternativeTo.png" />
    </a>
  </section>
</template>

<style lang="stylus">
.alternativeto-banner
  background linear-gradient(#2C4961, #7091A7) 
  font-size 1rem
  padding 2rem
  color white
  text-align center
  display flex
  justify-content center
  align-items center
  .text
    line-height 1.7rem
    a
      white-space nowrap
      background #3C84B4
      color #f4f8fa
      padding 4px
      &:hover
        color white
  @media (max-width 768px)
    &
      flex-direction column
</style>
