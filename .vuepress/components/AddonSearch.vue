<template>
  <div>
    <input type="text" class="filter" v-model="filter" placeholder="Search for an add-on or a thing" />
    <em v-if="results">
      {{resultsText}}
    </em>
    <em v-else-if="filter.length > 0 && filter.length < 3">
      Please type 3 characters or more...
    </em>
    <em v-else>
      Use the search box to look for one of openHAB's {{addons.length}} add-ons and {{things.length}} supported Things!
    </em>
    <transition name="results">
      <div v-if="results">
        <!-- <h2>Add-ons</h2> -->
        <transition-group name="addons" v-if="results.addons.length > 0" class="addons" tag="ul">
          <li v-for="addon of results.addons" class="addon" :key="addon.path">
            <router-link :to="addon.path">
              <div class="version"><span :class="'v' + addon.frontmatter.since.replace('x', '')">{{'v' + addon.frontmatter.since.replace('x', '')}}</span></div>
              <div class="main">
                <img v-if="addon.frontmatter.logo" :src="addon.frontmatter.logo.replace('images/addons/', '/logos/')" :title="addon.frontmatter.label" :alt="addon.frontmatter.label" />
                <strong v-else>{{addon.frontmatter.label}}</strong>
              </div>
              <div class="type">{{addon.frontmatter.type}}</div>
            </router-link>
          </li>
        </transition-group>
        <em v-else>
          No Add-on matching your query was found.
        </em>

        <h2>Things</h2>
        <transition-group name="things" v-if="results.things.length > 0" class="things">
          <li v-for="thing of results.things" class="thing" :key="thing.id">
            <strong>{{thing.label}}</strong> handled by the <router-link :to="'bindings/' + thing.bindingId + '/'">{{thing.bindingId}}</router-link> binding
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
  width 100%
  font-size 18pt
  padding 6px

.results-enter-active, .results-leave-active
  transition all 0.5s
.results-enter, .results-leave-to
  opacity 0
  transform: translateY(30px);
.addons-enter-active, .addons-leave-active
  transition all 0.5s
.addons-enter, .addons-leave-to
  opacity 0
  transform: translateY(30px);
.things-enter-active, .things-leave-active
  transition all 0.5s
.things-enter, .things-leave-to
  opacity 0
  transform: translateX(30px);
.addons
  list-style-type none
  display flex
  flex-wrap wrap
  .addon
    width 200px
    height 200px
    margin 4px
    border 1px solid #eee
    display flex
    &:hover
      border 1px solid #ff6600
    a
      width 200px
      height 200px
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
          background-color #777
        .v2
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
          max-width 192px
          max-height 150px
      
      .type
        font-weight normal
        font-size 10pt
        margin 4px

</style>

<script>
import Things from './things/things.json'

export default {
  data () {
    return {
      filter: '',
      things: [],
      addons: []
    }
  },
  mounted () {
    this.addons = this.$site.pages.filter(page => page.path.indexOf('/addons') === 0)
    this.things = Things
  },
  computed: {
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
                                          (p.frontmatter.id && p.frontmatter.id.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0))),
        things: this.things.filter(t => t.label.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
                                        // t.description.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
                                        t.bindingId.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0)
      }
    }
  }
}
</script>
