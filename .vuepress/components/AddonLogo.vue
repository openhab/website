<template>
  <img :src="$page.frontmatter.logo.replace('images/addons/', $site.base + 'logos/')" class="addon-logo" />
</template>

<style lang="stylus">
@media (min-width: 720px)
  .addon-logo
    float right
    margin-left 4rem
.addon-logo
  margin-top -3rem
  width 200px
  height 200px
  object-fit contain
  padding 5px
</style>
