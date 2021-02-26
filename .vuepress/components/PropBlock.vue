<template>
  <div class="prop-container">
    <h4 class="prop-header" :id="name">
      <a :href="'#' + name" class="header-anchor">#</a>
      <code class="prop-name">{{name}}</code>
      <span>{{label}}<span class="required" v-if="required" title="Required">*</span></span>
      <Badge :type="type.toLowerCase()" :text="type" />
      <Badge v-if="context" type="context" :text="context" />
    </h4>
    <slot />
  </div>
</template>

<style lang="stylus">
h4.prop-header
  margin-top -3.5rem
  padding-top 4.6rem
  margin-bottom 0
  font-size 17px
  border-bottom 1px solid #77777733
  padding-bottom 5px
  .prop-name
    background #777
    color white
    vertical-align text-bottom
  .required
    color red
    margin-left 0.3rem
  .badge
    font-size 12px
    margin-bottom 1px
    float right
    background-color rgb(127,127,127)
    vertical-align bottom !important
    &.boolean
      background-color rgb(24,127,127)
    &.text
      background-color rgb(24,127,24)
    &.integer
      background-color rgb(127,24,127)
    &.decimal
      background-color rgb(24,127,127)
    &.context
      color rgb(127,127,127,0.6)
      background-color transparent
</style>

<script>
export default {
  props: ['name', 'type', 'required', 'label', 'context']
}
</script>
