<template>
  <div class="section-opensource">
    <div class="left">
      <ClientOnly>
        <div class="logos">
          <a target="_blank" href="https://www.openhabfoundation.org/"><img class="foundation-logo" src="./images/foundation-logo-dark.svg" /></a>
        </div>
      </ClientOnly>
    </div>
    <div class="right">
      <h2>
        <div class="slide-seq3">100% Open Source.</div>
        <div class="slide-seq3 reliable">100% Reliable.</div>
      </h2>
      <p class="slide">openHAB is developed in <a target="_blank" href="https://www.java.com/">Java™</a> and built on top of
        <a target="_blank" href="https://karaf.apache.org/">Apache Karaf™</a>, an industry-grade <a target="_blank" href="https://www.osgi.org/">OSGi®</a> runtime.<br>
        openHAB and its development are supported by the <a target="_blank" href="https://www.openhabfoundation.org/">openHAB Foundation</a>, a registered non-profit organisation.<br>
        Without having a company behind openHAB, it will always stay absolutely vendor-neutral and never lock you in.
      </p>
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
    .logos
      margin auto
      display flex
      flex-direction column
      align-self center
      align-items center
      .foundation-logo
        width 300px
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
      div
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
