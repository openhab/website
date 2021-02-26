<template>
  <div>
    <h5>Options:</h5>
    <dl class="prop-options">
      <slot />
    </dl>
  </div>
</template>

<style lang="stylus">
dl.prop-options
  border-radius 0px 0px 5px 5px
  padding-left 5px
  margin-bottom 15px
  font-size 14px
  columns 1
  column-gap 0px
  div
    margin-bottom 0.3rem
    display block
    break-inside avoid
    dt
      padding-left 5px
      margin 0px
      display inline-block
      break-after avoid
    dd
      break-after avoid
      // display inline
      // margin-inline-start 5px
@media (min-width: 900px)
  dl.prop-options
    columns 2
    column-gap 60px
@media (min-width: 1200px)
  dl.prop-options
    columns 3
    column-gap 80px
</style>

<script>
export default {

}
</script>
