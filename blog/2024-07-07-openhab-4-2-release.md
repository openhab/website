---
layout: BlogPost
category: blog
title: openHAB 4.2 Release
author: Florian Hotze and others
date: '2024-07-07T18:00:00+02:00'
previewimage: /uploads/2024-07-07-openhab-4-2-release/header.jpg
tags:
  - news
excerpt: >-
  One year has passed since our big openHAB 4.0 release, and we are thrilled to announce our first summer minor release of the openHAB 4.x series&colon; openHAB 4.2.
  openHAB 4.2 adds a number of exciting new features, including the long awaited notification enhancements, as well as a multitude of smaller improvements and bug fixes.
---
One year has passed since our big [openHAB 4.0 release](/blog/2023-07-23-openhab-4-0-release.html), and we are thrilled to announce our first summer minor release of the openHAB 4.x series: openHAB 4.2.
openHAB 4.2 adds a number of exciting new features, including the long awaited notification enhancements, as well as a multitude of smaller improvements and bug fixes.

With that being said, we as usual want to share our highlights and some statistics that show the activity in numbers.

# Activity

As you'd expect from any new openHAB release, we have had a high activity across all our GitHub repositories.
We therefore want to share a few statistics about our three main repositories: Core, add-ons and UIs.

[openHAB Core](https://github.com/openhab/openhab-core) has received XXX pull requests in total, with XX bug fixes and XX enhancements resulting in XX,xxx lines of code added.

X new add-ons, XX bug fixes and XXX enhancements were contributed to the [openHAB add-ons repository](https://github.com/openhab/openhab-addons), which resulted in the addition of XX,xxx lines of code.

The [openHAB web UIs](https://github.com/openhab/openhab-webui) have broken their "personal" best with a whopping XXX pull requests, including XX bug fixes and XX enhancements and resulting in X,xxx lines of code added.

It is worth to mention, that [our other repositories](https://github.com/openhab) have also received numerous contributions (e.g. documentation), but listing them all would probably be too much here.
Many thanks to all our contributors for driving openHAB forward!

Again, it is time to shout out to our top code contributors per repository (having done the most commits) for this new release:

- Wouter ([@wborn](https://github.com/wborn)) for openHAB core
- Holger ([@holgerfriedrich](https://github.com/holgerfriedrich)) for openHAB core
- Jan ([@J-N-K](https://github.com/J-N-K)) for openHAB core
- Jacob ([@jlaur](https://github.com/jlaur)) for openHAB add-ons
- Holger ([@holgerfriedrich](https://github.com/holgerfriedrich)) for openHAB add-ons
- Florian ([@florian-h05](https://github.com/florian-h05)) for the openHAB Main UI
- Jimmy ([@jimtng](https://github.com/jimtng)) for the openHAB Main UI
- Laurent ([@lolodomo](https://github.com/lolodomo)) for the openHAB Basic UI

Many of our top committers are also maintainers, which means besides contributing code, they also review pull requests and participate in discussions on GitHub issues, which helps maintain our high level of quality across bindings, UIs and Core.
At present, we have 36 maintainers across all our repositories.
Huge thanks to all of them for keeping a high development pace for openHAB 4.2!

# Highlights

As you might have already noticed in the activity statistics, there was much development on openHAB - too much to list everything.
Please refer to the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.2.0) to check out what's new and noteworthy (e.g. breaking changes).

In the following sections, our maintainers and contributors are introducing some new features you don't want to miss!

## Notification Enhancements

@digitaldan: https://github.com/openhab/openhab-addons/issues/16934

Huge thanks to Dan Cunningham ([@digitaldan](https://github.com/digitaldan)) for doing all the work on openHAB Cloud, the Cloud Connector add-on and the iOS app!

Many thanks to our app maintainers [@weakfl](https://github.com/weakfl), Dan Cunningham ([@digitaldan](https://github.com/digitaldan)), Tim Bert ([@timbms](https://github.com/timbms)) [@mueller-ma](https://github.com/mueller-ma) and Danny Baumann ([@maniac103](https://github.com/maniac103)) for all their work on the apps!

## Core Runtime Enhancements

### Persistence Extensions

@mherwege: https://github.com/openhab/openhab-core/pull/3736

## Main UI Enhancements

_Florian Hotze, openHAB Maintainer_

### Dependency 6 Build System Upgrades

openHAB 4.2 upgrades most of Main UI's dependencies to their latest version, including our charting engine [Apache ECharts](https://echarts.apache.org) and our date and time manipulation library [dayjs](https://day.js.org).
As Main UI is still using Vue 2, we would like to upgrade to Vue 3 in the future - by upgrading to the latest Vue 2.x version, we have taken a minor step towards Vue 3.

In addition to our runtime dependencies, we have also upgraded our build system to the latest tooling: Webpack 5 and Node.js 20.
This ensures we can always use the latest Webpack features when bundling the Main UI source code, and moves away from Node.js 16, which is now EOL.

Many thanks to Miguel Álvarez ([@GiviMAD](https://github.com/givimad)) for the Webpack upgrade!

### Semantic Model Templates

@justingeorgi: https://github.com/openhab/openhab-webui/pull/2105

### Persistence Settings Menu

Persistence configuration through the UI has been [supported since openHAB 4.0](/blog/2023-07-23-openhab-4-0-release.html#persistence-configuration), but unfortunately it was hidden in the add-on settings and difficult to find.

This finally changes with openHAB 4.2 with the introduction of the new persistence settings menu:

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/persistence-menu.png"/></p>

The new page is reachable through the settings menu and allows to configure the default persistence service, persistence policies and installation of more persistence add-ons.

Thanks to Mark Herwege ([@mherwege](https://github.com/mherwege)) for the contribution!

### Item Form Enhancements

@jimtng

### Add-on Store Redesign

@jimtng

### Setup Wizard Extensions

With the introduction of [add-on suggestions](/blog/2023-12-22-openhab-4-1-release.html#add-on-suggestions) in openHAB 4.1, we made a first, big step towards a better first-user experience.

openHAB 4.2 continues this path by extending the setup wizard with a separate step for persistence.
In this step, suggested persistence add-ons are shown and it is explained, why these add-ons are suggested to be installed:

<p align="center"><img style="max-width: 35%;" src="/uploads/2024-07-07-openhab-4-2-release/setup-wizard-persistence.png"/></p>
<p align="center"><img style="max-width: 35%;" src="/uploads/2024-07-07-openhab-4-2-release/setup-wizard-addons.png"/></p>

As you can see in the screenshots, it recognizes which add-ons are already installed and adds explanations to the JavaScript Scripting and the Astro binding suggestions.

Many thanks to Mark Herwege ([@mherwege](https://github.com/mherwege)), who already worked on the add-on suggestions in openHAB 4.1, for this enhancement!

### `oh-context` Component

@justingeorgi: https://github.com/openhab/openhab-webui/pull/2533

### Health UI

Ever heard of orphaned links before? Orphaned links are channel links, where either the Item or the channel (or possibly even both) are missing.

As you can imagine, orphaned links can and should be removed.
The new health UI allows to easily check if there are orphaned links and take care of them:

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/health-menu.png"/></p>
<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/health-orphaned-links.png"/></p>

Checking and handling orphaned links is just the beginning for the new health UI - we plan to extend it in the future.
Stay tuned!

### Blockly Enhancements

_Stefan Höhn, Blockly Maintainer_

## Sitemap and Basic UI Enhancements

_Laurent Garnier, openHAB Maintainer_

### Basic UI Enhancements

## Add-on Enhancements

openHAB 4.2 brings X new add-ons, adding support for new devices:

- The [Amber Electric binding](/addons/bindings/amberelectric) provides access to the Australian energy retailer's Amber API with energy pricing and renewable energy data.
- The [Basic Profiles transformation](/addons/transformations/basicprofiles), which provides a list of useful profiles and transformations.
- The [Emotiva binding](/addons/bindings/emotiva) integrated Emotiva AV processors using the Emotiva Network Remote Control protocol.
- The [Ephemeris binding](/addons/bindings/ephemeris) which provides access to openHAB Core's Ephemeris feature through Items.
- The [French Government Energy Data binding](/addons/bindings/frenchgovtenergydata) provides regulated electricity prices in France.
- The [IoTaWatt binding](/addons/bindings/iotawatt) integrated IoTaWatt Open WiFi Electric Power Monitor into openHAB.
- The [MfFan binding](/addons/bindings/mffan) enables communication between openHAB and "Modern Forms" or "WAC Lighting" WIFI connected, smart, ceiling fans.
- The [PegelOnline binding](/addons/bindings/pegelonline) allows to observe water levels from German rivers.
- The [Salus binding](/addons/bindings/salus) facilitates seamless integration between openHAB and Salus Cloud.
- The [SiemensHVAC binding](/addons/bindings/hvac) provides support for the Siemens HVAC controller ecosystem, and the Web Gateway interface OZW672.
- The [TeslaPowerwall binding](/addons/bindings/teslapowerwall) enables the capture of key data from a Tesla Powerwall 2 into openHAB.
- The [Whisper Speech-to-Text voice add-on](/addons/voice/whisperstt) provides a new offline voice recognition service for openHAB using OpenAI's Whisper model.

But not only were new bindings added, some existing bindings also received massive improvements:

@jlaur ???

# Enjoy and Get in Touch!

We hope that you like the new release as much as we do - as always our [community forum](https://community.openhab.org/) is there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
