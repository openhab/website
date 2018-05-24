<template>
  <div>
    <h2>Places</h2>
    <div>
      <div class="iconset-icons">
        <div class="iconset-icon" v-for="icon in existingIcons(categories.places).sort()">
          <img :src="iconFile(icon)" />
          <caption>{{icon}}</caption>
        </div>
      </div>
    </div>
    <h2>Things</h2>
    <div class="iconset-icons">
        <div class="iconset-icon" v-for="icon in existingIcons(categories.things).sort()">
          <img :src="iconFile(icon)" :title="iconTooltip(icon)" />
          <caption>{{icon}}</caption>
        </div>
    </div>
    <h2>Channels</h2>
    <div v-for="subcategory in channelSubcategories">
      <h3>{{subcategory}}</h3>
      <div class="iconset-icons">
        <div class="iconset-icon" v-for="icon in existingIcons(categories.channels[subcategory]).sort()">
          <img :src="iconFile(icon)" :title="iconTooltip(icon)" />
          <caption>{{icon}}</caption>
        </div>
      </div>
    </div>
    <h2>Other Icons</h2>
    <div class="iconset-icons">
      <div class="iconset-icon" v-for="icon in icons_without_category.sort()">
        <img :src="`/iconsets/classic/${icon}`" :title="iconTooltip(icon.replace('.png', ''))" />
        <caption>{{icon.replace('.png', '')}}</caption>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.iconset-icons
  display flex
  flex-direction row
  flex-wrap wrap
  .iconset-icon
    width 96px
    height 96px
    padding-left 20px
    display flex
    align-items center
    align-content center
    flex-direction column
    font-size 10pt
    img
      height 64px
      width 64px
      object-fit contain
</style>

<script>

let allicons

export default {
  props: ['icons'],
  data () {
    return {
      allicons: null,
      categories: null,
      channelSubcategories: null
    }
  },
  created () {
    allicons = this.icons.split(',')
    this.categories = this.$page.frontmatter.categories
    this.channelSubcategories = Object.keys(this.categories.channels)
  },
  methods: {
    existingIcons (category) {
      return (category.filter(i => allicons.indexOf(i + '.png') >= 0))
    },
    iconFile (icon) {
      return `/iconsets/classic/${icon}.png`
    },
    iconTooltip (icon) {
      return (allicons.filter(i => i.indexOf(icon + '.png') === 0 || i.indexOf(icon + '-') === 0)).map(i => i.replace('.png', '')).join(' ')
    }
  },
  computed: {
    icons_without_category () {
      return allicons.filter(i => 
        i.indexOf('-') < 0 &&
        this.categories.places.indexOf(i.replace('.png', '')) < 0 &&
        this.categories.things.indexOf(i.replace('.png', '')) < 0 &&
        Object.values(this.categories.channels).every(c => c.indexOf(i.replace('.png', '')) < 0)
      )
    }
  }
}
</script>
