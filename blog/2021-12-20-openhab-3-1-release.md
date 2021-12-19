---
layout: BlogPost
category: blog
title: openHAB 3.2 Release
author: Kai Kreuzer
date: '2021-12-20T00:00:00+01:00'
previewimage: /uploads/2021-06_summer.jpg
tags:
  - news
excerpt: >-
  Our winter release openHAB 3.2 is out! It improves many details over 3.1 and again comes with a huge list of new add-ons.
---
Our winter release openHAB 3.2 is out! It improves many details over 3.1 and again comes with a huge list of new add-ons.

<!-- more -->

INTRO PLACEHOLDER

## Rule Engine Enhancements 

In the very early days of openHAB, the rules “DSL” was the only standard for writing custom rules.  This Java-like scripting language is based on Xtend and is still used widely today due to its stability and powerful built-in functionality.  Over time however,  the underlying rule infrastructure has matured allowing additional engines to coexist to provide a true polyglot scripting environment.  OpenHAB 3.2 ships with multiple rules engines including [Jruby](https://next.openhab.org/addons/automation/jruby/), [Jython](https://www.openhab.org/addons/automation/jythonscripting/), [Groovy](https://www.openhab.org/addons/automation/groovyscripting/), and a ES6 2021 compatible Javascript environment, [JS Scripting](https://www.openhab.org/addons/automation/jsscripting/). 

<p align="center"><img src="/uploads/2021-12-20-openhab-rule-engines.png"/></p>

### Javascript Rule Engine 

In openHAB 3.2 we are proud to announce a greatly enhanced version of the GraalVM based JavaScript engine, [JS Scripting](https://www.openhab.org/addons/automation/jsscripting/),  which brings the same ease of use and powerful built-in library of the Rules DSL, but in a modern ES6 environment that will be familiar to power users and novices alike.  The enhanced JS Scripting add-on brings together several existing projects into a single, easy to use automation environment.  

Included in this add-on by default is the new [openhab-js](https://github.com/openhab/openhab-js) JavaScript library, a fairly high-level ES6 library that provides convenient access to common openHAB functionality including items, things, actions, caches, time functionality, logging and more.  As this library is included in all scripts by default, writing rules is as simple as

```javascript
items.getItem("KitchenLight").sendCommand("ON");
```

No imports, using require or calling out to Java native types needed!  Even better, the openHAB 3 UI includes support for the [openhab-js](https://github.com/openhab/openhab-js) API and offers hinting and autocomplete when editing scripts.

<p align="center"><img src="/uploads/2021-12-20-openhab-rule-editor.gif"/></p>

This behavior is configurable, and users can opt to disable automatic imports into scripts for full control of their scripting environment.  Users can continue to use custom built libraries as well as NPM modules through the use of CommonJS Require.  Best of all, [openhab-js](https://github.com/openhab/openhab-js) is published as an NPM library, [openhab](https://www.npmjs.com/package/openhab) and can be updated and or modified by users independently of the add-on shipped version by running “npm -i openhab” inside the user’s JS automation configuration folder. 

The JS Scripting binding also now includes standard built in global features that users coming from modern JavaScript environments expect to have.  This includes full support of [console logging](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) to the main openHAB log (including debug, trace, info, etc.), timer support with “[setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)” and “[setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)” , and importing personal or NPM published packages with “require”.  For example, logging in rules is as easy as:

```javascript
console.log("Kitchen Light State", items.getItem("KitchenLight").state);
```

Finally, in previous openHAB versions, installing the JS Scripting binding meant the legacy default Javascript engine (Nashorn) could not be used.  In practice the two engines had issues coexisting, especially when it comes to UI based rules.  In 3.2 JS Scripting will use its own directory for files in “conf/automation/js, including user provided libraries.  The UI will now show both scripting engines when selecting an action, allowing the user to continue to use the legacy JavaScript engine, or migrate to this new ES6 based version at their convenience.  

Thank you to Jonathan Gilbert (aka jpg0), who contributed both the JSScripting add-on as well as the openhab-js library. 

## Marketplace 

## openHAB Alexa Skill

## Localizing Add-Ons

Previous versions of openHAB have focused on localizing the openHAB Main UI as well as configuration settings in the core. In this release we have focused on setting up an easy to use translation toolbox for openHAB Add-Ons. Our new i18n-tool allows developers to create the default files containing English terms in their familiar Maven environment (just run `mvn i18n:generate-default-translations` in the bundle folder). Once added to GitHub those files will be uploaded automatically to [Crowdin](https://crowdin.com/project/openhab-addons) - a collaboration platform to support multilingual translations. This will allow everyone in our community to translate into their language of choice without requiring any development skills. Completed translations are synced back to our repository periodically. If your language is missing, please help and visit [Crowdin](https://crowdin.com/project/openhab-addons)!

Current i18n status:
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
