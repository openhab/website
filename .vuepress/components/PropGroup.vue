<template>
  <div class="prop-group">
    <!-- <h3 class="prop-group-header" :id="'prop-group-' + name">
      <a :href="'#prop-group-' + name" class="header-anchor">#</a>
      {{label}}
    </h3> -->
    <slot />
  </div>
</template>

<style lang="stylus">
h3.prop-group-header
  margin-top -3.5rem
  padding-top 4.6rem
</style>

<script>
export default {
  props: ['name', 'label']
}
</script>
