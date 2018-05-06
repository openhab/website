<template>
  <div class="vscode-section">
    <div style="position: relative; height: 380px; background: transparent; width: 100%; overflow: hidden;">
      <ClientOnly>
        <parallax fixed>
          <img src="/vscode.png" alt="coding rules">
        </parallax>
      </ClientOnly>
      <div class="vscode-text">
        <h2 class="slide">Friendly,<br />comfortable<br />configuration<br />editing.</h2>
        <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=openhab.openhab" class="get-extension-button slide">Get the VS Code Extension →</a>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.vscode
  position relative
  min-height 21.875rem
  scroll-behavior smooth
  overflow: hidden
  z-index: -1
  height 380px !important
  width 100%

.vscode-section
  color white
  display flex
  font-family 'Open Sans', sans-serif
  font-weight normal
  overflow hidden
  text-align right
  z-index -1
  .vscode-text
    position absolute
    top calc(50%)
    transform translateY(-50%)
    text-align center
    right 0
    z-index 12
    align-content center
    padding 5rem
    background-color rgba(0, 0, 0, 0.3)
    h2
      font-size 2.5em
      font-weight 300
      border none
      margin-top 0
      text-shadow 0px 0px 10px #666
    p
      margin 1rem
    .get-extension-button
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
  
  @media (max-width: 768px)
    .Masthead
      .Masthead__image
        background-color black
      .Masthead__image > img
        opacity 0.6
    .vscode-text
      left 0
      background transparent
      padding 0
</style>

<script>
import parallax from 'vue-parallaxy'

export default {
  components: {
    parallax
  }  
}
</script>
