---
sidebar: false
layout: AboutPage
title: Events
---

If you are organizing an event around openHAB, please let us know in the [Events category](https://community.openhab.org/c/organisation/events) of the community forum. We will work with you to add it on this page.

---

<!-- TODO: list component and event page layout -->

<ul>
  <li v-for="page in $site.pages.filter((p) => p.frontmatter.layout === 'Event')">
    <div><strong>{{new Date(page.frontmatter.date).toLocaleDateString('en-gb', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</strong></div>
    <router-link :to="page.path"><strong>{{page.frontmatter.title}}</strong></router-link><br />
    <div>{{page.frontmatter.location}}</div>
  </li>
</ul>