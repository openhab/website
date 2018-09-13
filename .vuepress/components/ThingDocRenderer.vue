<template>
  <div class="rendered" v-html="rendered" />
</template>

<style lang="stylus">
.rendered > h1:first-child
    font-family 'Open Sans', sans-serif
    font-weight 400
</style>

<script>
export default {
  data () {
    return {
      rendered: 'Please wait...'
    }
  },
  mounted () {
    let MarkdownIt = require('markdown-it')
    let md = new MarkdownIt()
    let baseUrl = 'https://raw.githubusercontent.com/openhab/openhab-docs/final/_addons_bindings/zwave'

    let url
    if (this.$route.query.thingTypeUID) {
      let thingUIDParts = this.$route.query.thingTypeUID.split('_')
      let manufacturer = thingUIDParts.shift()
      let model = thingUIDParts.map((part, idx) => idx > 0 ? parseInt(part) : part).join('_')

      url = `${baseUrl}/doc/${manufacturer}/${model}.md`
    } else {
      let manufacturer = this.$route.query.manufacturer
      let file = this.$route.query.file.replace('.html', '.md')
      url = `${baseUrl}/doc/${manufacturer}/${file}`
    }

    fetch(url).then((resp) => {
      if (resp.status >= 300) {
        this.rendered = `Cannot render ${url}: ${resp.statusText}`
      } else {
        let source = resp.text().then((text) => {
          text = text.replace(/---[\s\S]*?.*%}/gm, '')
          this.rendered = md.render(text)
        })
      }
    }).catch ((e) => {
      this.rendered = `Cannot render ${url}: ${e}`
    })
  }
}
</script>
