---
layout: BlogPost
category: blog
title: openHAB 3.2 Release
author: Kai Kreuzer and others
date: '2021-12-20T12:00:00-08:00'
previewimage: /uploads/2021-winter-snow.png
tags:
  - news
excerpt: >-
  Our winter release of openHAB 3.2 is out! This latest version contains many
  new add-ons, enhanced voice features, automation improvements and more!
---
Our winter release of openHAB 3.2 is out! This latest version contains many new add-ons, enhanced voice features, automation improvements and more!

Another year is coming to its end and so it is time for us to bring you this openHAB release just in time for the festive season!

During the past days the whole IT industry was caught by the vulnerabilities of log4j aka LogShell - which kept many people very busy, at least those in the Java universe.

As openHAB is based on Java, we were impacted as well and trying to be a good citizen in the ecosystem, we addressed the major risks through the [3.0.4 and 3.1.1 patch releases](https://community.openhab.org/t/openhab-and-the-log4j-security-vulnerability/129901/2) that were published shortly after the fixed log4j 2.15 was out. Looking at the statistics of Maven Central that are provided by Sonatype, we are on the sunny side of the industry, while the dark 50% are still consuming vulnerable log4j versions <2.15:

<p align="center"><img src="/uploads/2021-12-20-log4jstats.png"/></p>

Since log4j 2.15 has been released, many security researches jumped on that library and in consequence further (partially less critical) issues were found that led to the latest log4j versions 2.16 and 2.17. We are happy to tell you that openHAB 3.2 already contains the (as of writing) very latest version 2.17, so that this alone should give you a good reason to update your installation. 

The whole log4j story showed up a big issue we have in our industry: Open Source maintenance is often only done by engaged individuals in their spare time and their work is hardly recognized by the people that depend on such libraries. In the case of log4j, two passionate developers take care of it in their free time, while almost the entire Java industry depends on it. These guys do a tremendous job and they hopefully get the recognition (and sponsors from the industry) they deserve.

Having said this, I would like to also make sure that our openHAB committers are recognized for their work. While I often do the announcements, I don't contribute to the code base that much anymore - the major work is on the shoulders of many individuals that - most of the time silently - keep coding and contributing to our common project. I therefore like to thank every contributor, especially the ones of the 18 new add-ons that are included in the 3.2 release and would now like to give the word directly to some of our maintainers that worked on outstanding new features:

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

![UI rules editor](/uploads/2021-rules-script-editor.gif)

This behavior is configurable, and users can opt to disable automatic imports into scripts for full control of their scripting environment.  Users can continue to use custom built libraries as well as NPM modules through the use of CommonJS Require.  Best of all, [openhab-js](https://github.com/openhab/openhab-js) is published as an NPM library, [openhab](https://www.npmjs.com/package/openhab) and can be updated or modified by users independently of the built-in version by running “npm -i openhab” inside the user’s JS automation configuration folder. 

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
   <td>openHAB Add-ons 
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

## Summary

t.b.d.
