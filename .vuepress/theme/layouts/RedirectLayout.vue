<template>
  <div></div>
</template>

<script>
export default {
  mounted () {
    window.location.href = this.$page.frontmatter.redirect_to
  }
}
</script>
