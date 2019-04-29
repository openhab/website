---
sidebar: false
layout: AboutPage
title: Events
meta:
  - name: og:title
    content: openHAB Events
  - name: og:description
    content: a vendor and technology agnostic open source automation software for your home
---

If you are organizing an event around openHAB, please let us know in the [Events category](https://community.openhab.org/c/organisation/events) of the community forum. We will work with you to add it on this page.


<div class="events-block">
  <h2>Upcoming events</h2>

  <ul class="event-list">
    <li v-for="page in $site.pages.filter((p) => p.frontmatter.layout === 'Event' &&
                (p.frontmatter.end_date) ? new Date(p.frontmatter.end_date) >= new Date() : new Date(p.frontmatter.date) >= new Date())
            .sort((e1,e2) => new Date(e1.frontmatter.date) - new Date(e2.frontmatter.date))" class="event">
      <div class="calendar"><calendar-icon :date="page.frontmatter.date" :end-date="page.frontmatter.end_date"></calendar-icon></div>
      <a :href="page.frontmatter.link" target="_blank" class="event-link"><img class="event-image" :src="page.frontmatter.event_image || '/openhab-logo.png'" /></a>
      <div class="event-info">
        <a :href="page.frontmatter.link" target="_blank"><h3 class="event-title">{{page.frontmatter.title}}</h3></a>
        <div class="event-location">{{page.frontmatter.location}}</div>
        <p v-html="page.excerpt || page.frontmatter.abstract"></p>
      </div>
    </li>
  </ul>
</div>


<div class="events-block">
  <h2>Past events</h2>

  <div v-for="year in Array(new Date().getFullYear()+1-2018).fill(0).map((e,i)=>i+2018).reverse()">
    <h3>{{year}}</h3>
    <ul class="event-list">
      <li v-for="page in $site.pages.filter((p) => p.frontmatter.layout === 'Event' && new Date(p.frontmatter.date).getFullYear() === year &&
                  ((p.frontmatter.end_date) ? new Date(p.frontmatter.end_date) < new Date() : new Date(p.frontmatter.date) < new Date()))
              .sort((e1,e2) => new Date(e2.frontmatter.date) - new Date(e1.frontmatter.date))" class="event">
        <div class="calendar"><calendar-icon :date="page.frontmatter.date" :end-date="page.frontmatter.end_date"></calendar-icon></div>
        <a :href="page.frontmatter.link" target="_blank" class="event-link"><img class="event-image" :src="page.frontmatter.event_image || '/openhab-logo.png'" /></a>
        <div class="event-info">
          <a :href="page.frontmatter.link" target="_blank"><h3 class="event-title">{{page.frontmatter.title}}</h3></a>
          <div class="event-location">{{page.frontmatter.location}}</div>
          <p v-html="page.excerpt || page.frontmatter.abstract"></p>
        </div>
      </li>
    </ul>
  </div>
</div>

<style lang="stylus">
.event-list
  list-style none
  .event
    clear both
    display flex
    margin-bottom 2rem
    .event-link
      display flex
      height 8rem
      width 128px
      margin-right 2rem
    .event-image
      max-height 8em
      max-width 8em
      margin-left 1rem
      margin-right 1rem
      object-fit contain
    .event-info
      margin-left 1rem
      .event-title
        margin-bottom 0
        font-family 'Open Sans', sans-serif
      .event-location
        font-family 'Open Sans', sans-serif
        font-weight bold

@media (max-width 719px)
  .event
    flex-wrap wrap

</style>
