<template>
  <img :src="$page.frontmatter.logo.replace('images/addons/', $site.base + 'logos/')" class="addon-logo" />
</template>

<style lang="stylus">
@media (min-width: 720px)
  .addon-logo
    float right
    margin-left 4rem
.addon-logo
  max-width 250px !important
  max-height 250px !important
</style>
