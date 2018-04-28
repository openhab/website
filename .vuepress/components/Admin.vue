<template>
  
</template>

<script>
import CMS from "netlify-cms"
import "netlify-cms/dist/cms.css"
import netlifyIdentityWidget from "netlify-identity-widget"

export default {
  created () {
    window.netlifyIdentityWidget = netlifyIdentityWidget
    netlifyIdentityWidget.init()
  }
}
</script>
