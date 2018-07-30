---
title: "Add-ons"
initial_gallery:
  binding:
    title: "Bindings"
    description: "Bindings integrate physical hardware, external systems and web services in openHAB."
    featured: ["astro", "bluetooth", "hue", "knx", "kodi", "mqtt", "nest", "mihome", "rfxcom", "sonos", "tradfri", "yahooweather", "zigbee", "zwave"]
  io:
    title: "System Integrations"
    description: "System integrations expose openHAB to external systems."
    featured: ["dropbox", "gcal", "homekit", "openhabcloud"]
  action:
    title: "Actions"
    description: "Actions are predefined methods for openHAB rules and scripts."
    featured: ["mqtt", "pushbullet", "telegram", "twitter", "xbmc", "xmpp"]
  persistence:
    title: "Data Persistence"
    description: "Persistence services allow openHAB to store time series data for history-based actions or statistics."
    featured: ["rrd4j", "influxdb", "jdbc", "mysql", "mongodb"]
  transform:
    title: "Data Transformation"
    description: "Transformations are used to translate between technical and human-readable values for items."
    featured: ["exec", "javascript", "map", "xpath"]
  voice:
    title: "Voice"
    description: "These add-ons provide voice enabling features, such as text-to-speech, speech-to-text etc."
    featured: ["mactts", "marytts", "picotts", "voicerss"]
    all: true
meta:
  - name: og:title
    content: openHAB Add-ons
  - name: og:description
    content: a vendor and technology agnostic open source automation software for your home
---

<h1 class="welcome">Add-on Reference</h1>

<style>
h1.welcome {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 36pt;
}
</style>

All add-ons for openHAB 2 are part of the distribution.
This includes all new 2.0 bindings as well as all 1.x add-ons that were reported to be compatible.
Add-ons can be easily installed through the Paper UI (menu entry "Add-ons").

<AddonSearch />
