<template>
  <div class="addon-search">
    <input type="text" class="filter" v-model="filter" :placeholder="`Search ${addons.length} add-ons & ${things.length} things`" />
    <div style="text-align: right; margin-right: 10%"><small><input id="showObsoleteAddons" type="checkbox" v-model="showObsoleteAddons" /><label for="showObsoleteAddons">Show legacy add-ons</label></small></div>
    
    <em v-if="results">
      {{resultsText}}
    </em>
    <em v-else-if="filter.length > 0 && filter.length < 3">
      Please type 3 characters or more...
    </em>
    <div v-else>
      <!-- <p><em>Use the search box to look for one of openHAB's {{addons.length}} add-ons and {{things.length}} supported Things!</em></p> -->
      <div v-for="(addontype, typeid) of $page.frontmatter.initial_gallery">
        <h3 class="addon-type" :id="typeid">
          <a :href="'#' + typeid" aria-hidden="true" class="header-anchor">#</a>
          {{addontype.title}}
        </h3>
        <p>{{addontype.description}}</p>
        <ul class="display-mode-toggle" v-if="!addontype.all">
          <li><button :disabled="showAllAddons.indexOf(typeid) < 0" @click="switchDisplayMode(typeid, false)">Featured</button></li>
          <li><button :disabled="showAllAddons.indexOf(typeid) >= 0" @click="switchDisplayMode(typeid, true)">All</button></li>
        </ul>
        <transition-group name="addons" class="addons" tag="ul">
          <li v-for="addon of galleryAddons[typeid]" class="addon" :key="addon.path">
            <router-link :to="addon.path">
              <div class="version" v-if="addon.frontmatter.since === '1x'"><span class="v1">v1</span></div>
              <div class="main">
                <img v-if="addon.frontmatter.logo" :src="addon.frontmatter.logo.replace('images/addons/', '/logos/')" :title="addon.frontmatter.label" :alt="addon.frontmatter.label" />
                <strong v-else><img src="/openhab-logo-square.png" width="60"><br />{{addon.frontmatter.label}}</strong>
              </div>
              <div class="type">{{addon.frontmatter.type}}</div>
            </router-link>
          </li>
        </transition-group>
      </div>
    </div>
    <transition name="results">
      <div v-if="results">
        <!-- <h2>Add-ons</h2> -->
        <transition-group name="addons" v-if="results.addons.length > 0" class="addons" tag="ul">
          <li v-for="addon of results.addons" class="addon" :key="addon.path">
            <router-link :to="addon.path">
              <div class="version" v-if="addon.frontmatter.since === '1x'"><span class="v1">v1</span></div>
              <div class="main">
                <img v-if="addon.frontmatter.logo" :src="addon.frontmatter.logo.replace('images/addons/', '/logos/')" :title="addon.frontmatter.label" :alt="addon.frontmatter.label" />
                <strong v-else><img src="/openhab-logo-square.png" width="60"><br />{{addon.frontmatter.label}}</strong>
              </div>
              <div class="type">{{addon.frontmatter.type}}</div>
            </router-link>
          </li>
        </transition-group>
        <em v-else>
          No Add-on matching your query was found.
        </em>

        <h2 v-if="results.things.length > 0">Things</h2>
        <transition-group name="things" v-if="results.things.length > 0" class="things">
          <li v-for="thing of results.things" class="thing" :key="thing.id">
            <strong>
              <router-link v-if="thing.bindingId === 'zwave'" :to="'./bindings/zwave/thing.html?thingTypeUID=' + thing.id.replace('zwave:', '')">{{thing.label}}</router-link>
              <span v-else>{{thing.label}}</span>
            </strong>
            handled by the <router-link :to="'bindings/' + thing.bindingId + '/'">{{thing.bindingId}}</router-link> binding
          </li>
        </transition-group>
        <em v-else>
          No Thing matching your query was found.
        </em>
      </div>
    </transition>
  </div>
</template>

<style lang="stylus">
.filter
  width 90%
  font-size 1.1rem
  padding 0.8rem
  padding-left 2rem
  border 1px solid #ccc
  border-radius 2rem
  background #fff url(./images/search.svg) .7rem 1rem no-repeat
  outline none
  
  &:focus, &:active
    border-color #ff6600
    outline-color #ff6600
h3.addon-type
  font-family 'Open Sans', sans-serif
  font-weight normal
  font-size 1.5rem
  margin-top -3.1rem
  padding-top 4.6rem
  margin-bottom 0
.display-mode-toggle
  list-style-type none
  padding .5rem
  display flex
  flex-direction row
  justify-content center
  button
    width 7rem
    background #fff
    border 1px solid #ff6600
    color #ff6600
    font-family 'Open Sans', sans-serif
    font-weight 300
    font-size 14px
    padding 4px
    cursor pointer
    &[disabled]
      background #ff6600
      color #fff
      cursor not-allowed

.addon-search
  em
    display block
    padding-top 0.5rem
.results-enter-active, .results-leave-active
  transition all 0.5s
.results-enter, .results-leave-to
  opacity 0
  transform: translateY(30px);
// .addons-enter-active, .addons-leave-active
//   transition all 0.5s
.addons-leave-active
  position absolute
  opacity 0
  transition all 0s !important
.addons-enter
  opacity 0
  transform: translateY(30px);
  transition all 0.5s
.addons-move
  transition all 1s
.things-enter-active
  transition all 0.5s
.things-leave-to
  transition all 0s
  opacity 0
.things-enter, .things-leave-to
  opacity 0
  transform: translateX(30px);
.addons
  list-style-type none
  display flex
  flex-wrap wrap
  padding-left 0
  .addon
    transition all 1s
    width 190px
    height 190px
    margin 4px
    border 1px solid #eee
    display flex
    box-shadow 2px 2px 5px rgba(0,0,0,.1)
    &:hover
      transition all 0.6s
      border 1px solid #ff6600
      box-shadow 2px 2px 5px rgba(0,0,0,.25)
    a
      width 190px
      height 190px
      padding 4px
      text-align center
      display flex
      flex-direction column
      // justify-content center
      color black
      &:hover
        text-decoration none
        color #ff6600
        
      .version
        font-size 7pt
        text-align right
        color white
        .v1
          padding 3px
          border-radius 3px
          background-color #f2c037
      
      .main
        flex-grow 1
        display flex
        strong
          margin auto
          font-size 14pt
        img
          margin auto
          max-width 182px
          max-height 140px
          object-fit contain
      
      .type
        font-weight normal
        font-size 10pt
        margin 4px

@media (max-width 479px)
  .addon
    width 140px !important
    height 140px !important
    a
      width 140px !important
      height 140px !important
      strong
        font-size 10pt !important
        line-height 1.4 !important
      img
        max-width 132px !important
        max-height 100px !important
      .type
        font-size 9pt !important

</style>

<script>
import Things from './things/things.json'

export default {
  data () {
    return {
      filter: '',
      things: [],
      showAllAddons: [],
      showObsoleteAddons: false
    }
  },
  mounted () {
    this.addons = this.$site.pages.filter(page => page.path.indexOf('/addons/') === 0 && page.frontmatter.id)
    this.things = Things
  },
  methods: {
    getGalleryAddons (type) {
      if (!this.addons.length) return []
      if (this.showAllAddons[type]) {
        return this.addons.filter(p => p.frontmatter && p.frontmatter.type === type)
      } else {
        return this.$page.frontmatter.initial_gallery[type].featured
                  .map(id => this.addons.find(p => (p.frontmatter && p.frontmatter.id == id && p.frontmatter.type === type)))
                  .filter(p => typeof p !== 'undefined')
      }
    },
    switchDisplayMode (type, showAll) {
      if (showAll) {
        this.showAllAddons.push(type)
      } else {
        this.showAllAddons.splice(this.showAllAddons.indexOf(type), 1)
      }
    }
  },
  computed: {
    addons () {
      let all_addons = this.$site.pages.filter(page => page.path.indexOf('/addons/') === 0 && page.frontmatter.id)
      return (this.showObsoleteAddons) ? all_addons : all_addons.filter(page => !page.frontmatter.obsolete)
    },
    galleryAddons () {
      let results = {}
      for (let type in this.$page.frontmatter.initial_gallery) {
        if (!this.addons.length) return []
        if (this.showAllAddons.indexOf(type) >= 0) {
          results[type] = this.addons.filter(p => p.frontmatter && p.frontmatter.type === type)
        } else {
          results[type] = this.$page.frontmatter.initial_gallery[type].featured
                    .map(id => this.addons.find(p => (p.frontmatter && p.frontmatter.id == id && p.frontmatter.type === type)))
                    .filter(p => typeof p !== 'undefined')
        }
      }
      return results
    },
    resultsText () {
      let found = []
      if (!this.results.addons.length && !this.results.things.length) return "Nothing found"
      if (this.results.addons.length) {
        found.push(this.results.addons.length.toString() + (this.results.addons.length === 1 ? " add-on" : " add-ons"))
      }
      if (this.results.things.length) {
        found.push(this.results.things.length.toString() + (this.results.things.length === 1 ? " thing" : " things"))
      }
      return found.join(" and ") + " found"
    },
    results () {
      if (!this.filter) return null
      if (this.filter.length < 3) return null
      return {
        addons: this.addons.filter(p => (p.frontmatter &&
                                          (p.frontmatter.label && p.frontmatter.label.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0) ||
                                          (p.frontmatter.description && p.frontmatter.description.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0) ||
                                          (p.frontmatter.id && p.frontmatter.id.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0))),
        things: this.things.filter(t => t.label.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
                                        // t.description.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
                                        t.bindingId.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0)
      }
    }
  }
}
</script>
