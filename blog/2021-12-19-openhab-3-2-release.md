---
layout: BlogPost
category: blog
title: openHAB 3.2 Release
author: Dan Cunningham and others
date: '2021-12-20T12:00:00-08:00'
previewimage: /uploads/2021-winter-snow.png
tags:
  - news
excerpt: >-
  Our winter release of openHAB 3.2 is out! This latest version contains many
  new add-ons, enhanced voice features, automation improvements and more!
---
Our winter release of openHAB 3.2 is out! This latest version contains many new add-ons, enhanced voice features, automation improvements and more!

## Rule Engine Enhancements

Dan Cunningham, openHAB Maintainer

In the very early days of openHAB, the rules “DSL” was the only standard for writing custom rules.  This Java-like scripting language is based on Xtend and is still used widely today due to its stability and powerful built-in functionality.  Over time however,  the underlying rule infrastructure has matured allowing additional engines to coexist to provide a true polyglot scripting environment.  openHAB 3.2 ships with multiple rules engines including [JRuby](https://www.openhab.org/addons/automation/jrubyscripting/), [Jython](https://www.openhab.org/addons/automation/jythonscripting/), [Groovy](https://www.openhab.org/addons/automation/groovyscripting/), and a ES6 2021 compatible Javascript environment, [JS Scripting](https://www.openhab.org/addons/automation/jsscripting/). 

![Multiple rule engines in UI](/uploads/2021-12-20-rule-engines.png)

### Javascript Rule Engine

In openHAB 3.2 we are proud to announce a greatly enhanced version of the GraalVM based JavaScript engine, [JS Scripting](https://www.openhab.org/addons/automation/jsscripting/),  which brings the same ease of use and powerful built-in library of the Rules DSL, but in a modern ES6 environment that will be familiar to power users and novices alike.  The enhanced JS Scripting add-on brings together several existing projects into a single, easy to use automation environment.  

Included in this add-on by default is the new [openhab-js](https://github.com/openhab/openhab-js) JavaScript library, a fairly high-level ES6 library that provides convenient access to common openHAB functionality including items, things, actions, caches, time functionality, logging and more.  As this library is included in all scripts by default, writing rules is as simple as

```javascript
items.getItem("KitchenLight").sendCommand("ON");
```

No imports, using require or calling out to Java native types needed!  Even better, the openHAB 3 UI includes support for the [openhab-js](https://github.com/openhab/openhab-js) API and offers hinting and autocomplete when editing scripts.

![UI rules editor](/uploads/2021-12-20-rules-editor.gif)

This behavior is configurable, and users can opt to disable automatic imports into scripts for full control of their scripting environment.  Users can continue to use custom built libraries as well as NPM modules through the use of CommonJS Require.  Best of all, [openhab-js](https://github.com/openhab/openhab-js) is published as an NPM library, [openhab](https://www.npmjs.com/package/openhab) and can be updated and or modified by users independently of the add-on shipped version by running “npm -i openhab” inside the user’s JS automation configuration folder. 

The JS Scripting binding also now includes standard built in global features that users coming from modern JavaScript environments expect to have.  This includes full support of [console logging](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) to the main openHAB log (including debug, trace, info, etc.), timer support with “[setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)” and “[setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)” , and importing personal or NPM published packages with “require”.  For example, logging in rules is as easy as:

```javascript
console.log("Kitchen Light State", items.getItem("KitchenLight").state);
```

Finally, in previous openHAB versions, installing the JS Scripting binding meant the legacy default Javascript engine (Nashorn) could not be used.  In practice the two engines had issues coexisting, especially when it comes to UI based rules.  In 3.2 JS Scripting will use its own directory for files in “conf/automation/js, including user provided libraries.  The UI will now show both scripting engines when selecting an action, allowing the user to continue to use the legacy JavaScript engine, or migrate to this new ES6 based version at their convenience.  

Thank you to Jonathan Gilbert (aka jpg0), who contributed both the JSScripting add-on as well as the openhab-js library. 

## Marketplace

Yannick to put awesome content here!

## openHAB Skill for Amazon Alexa

Jeremy Setton, maintainer of the [openHAB Skill for Amazon Alexa](https://www.openhab.org/docs/ecosystem/alexa/):

A complete rework of the openHAB skill for Amazon Alexa has been released. It introduces a new device-centric metadata syntax in line with the other voice assistant integrations, and simplifies the configuration of basic functionalities while staying backward compatible to ease the transition.

The new metadata syntax acts as a new layer on top of the previous API capability-centric syntax, giving the ability to create new custom pre-configured capabilities that aren’t supported natively by the Alexa Smart Home API yet.

The new skill includes new capabilities for camera, door/window covering, fan, networking and vacuum devices and updates for security panel and thermostat devices.

Additionally, a much improved Main UI integration supporting the new metadata syntax is included in openHAB 3.2. It provides a much better visibility across group endpoints, and tailors the configuration based on item properties and metadata parameters.

The [latest documentation provides](https://www.openhab.org/docs/ecosystem/alexa/) all the necessary information and examples to take advantage of the new syntax.

## Localizing Add-ons

Christoph Weitkamp, openHAB Maintainer

Previous versions of openHAB have focused on localizing the openHAB Main UI as well as configuration settings in the core. In this release we have focused on setting up an easy to use translation toolbox for openHAB Add-ons. Our new i18n-tool allows developers to create the default files containing English terms in their familiar Maven environment (just run `mvn i18n:generate-default-translations` in the bundle folder). Once added to GitHub those files will be uploaded automatically to [Crowdin](https://crowdin.com/project/openhab-addons) - a collaboration platform to support multilingual translations. This will allow everyone in our community to translate into their language of choice without requiring any development skills. Completed translations are synced back to our repository periodically. If your language is missing, please help and visit [Crowdin](https://crowdin.com/project/openhab-addons)!

<table>
  <tr>
   <td>openHAB Core
   </td>
   <td><img src="https://badges.crowdin.net/openhab-core/localized.svg"/>
   </td>
  </tr>
  <tr>
   <td>openHAB - Addons 
   </td>
   <td><img src="https://badges.crowdin.net/openhab-addons/localized.svg"/>
   </td>
  </tr>
  <tr>
   <td>openHAB Main UI
   </td>
   <td><img src="https://badges.crowdin.net/openhab-webui/localized.svg"/>
   </td>
  </tr>
</table>
