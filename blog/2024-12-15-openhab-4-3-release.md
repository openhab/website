---
layout: BlogPost
category: blog
title: openHAB 4.3 Release
author: Florian Hotze and others
date: '2024-12-15T18:00:00+01:00'
previewimage: /uploads/2024-12-15-openhab-4-3-release/header.png
tags:
  - news
excerpt: >-

---

# Activity

# Highlights

As you might have already noticed in the activity statistics, there was much development on openHAB - too much to list everything.
Please refer to the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.3.0) to check out what's new and noteworthy (e.g. breaking changes).

In the following sections, our maintainers and contributors are introducing some new features you don't want to miss!

## Core Runtime Enhancements

### Pre-Compile Script Conditions and Actions

_Florian Hotze ([@florian-h05](https://github.com/florian-h05)), openHAB Maintainer_

openHAB 4.3 introduces automatic pre-compilation of script conditions and actions from UI-based rules.
This means that these scripts are now compiled on openHAB startup instead of on the first execution, which was the case before.
The main benefit of this change is that the possibly time-consuming compilation of the script is done at startup time and there is no delay anymore when the rule is executed for the first time.
Another benefit is that syntax errors are discovered at startup and not at runtime of the rule, which makes it easier to find and fix them.

Especially Blockly users of Raspberry Pis with a 32-bit OS will love this change, as the JavaScript Scripting automation add-on, which is used by Blockly under the hood, is known to compile scripts very slowly on these devices.
Please note that not all automation add-ons support pre-compilation (yet).

## Main UI Enhancements

_Florian Hotze ([@florian-h05](https://github.com/florian-h05)), openHAB Maintainer_

### Charting with the current Item State

Main UI now uses the current Item state as well as persisted data outside the selected period to "close" gaps at the beginning and end of charts.
In addition to that, calendar and aggregation charts display the current Item state for the current day or aggregation period, enhancing the user experience without requiring unnecessary persistence entries.

To illustrate this change, consider the following examples:

- You open the analyzer for a temperature sensor.
  Previously, the graph started at some point and end at some point, but did probably not span the whole range.
  Now, the graph starts at the begin of the selected range (if a persisted state before the beginning of the range is available) and ends at the end of the selected range (if a persisted state after the ending is available or the ending is close enough the current time).

- You have a bar chart displaying monthly solar production and power consumption.
  Previously, the chart ended at the last persisted value, which was the last day of the previous month.
  Now, the chart displays the current month by displaying the current state of the solar production and power consumption Items.

### Add-On Store Redesign for Mobile Devices

The Add-On Store has been redesigned to be more mobile-friendly:

Similar to major app stores, the openHAB add-on store now uses a vertical slider to display the featured and suggested add-ons.
Together with changes in the sizing of featured and suggested add-ons on desktop, this improves the user experience by allowing a more compact layout.

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-12-15-openhab-4-3-release/addon-store-ios.png"/></p>

### Routable Tabbed Pages

openHAB 4.3 makes tabbed pages routable by appending the tab index to the end of the route.
For example, the route `/page/tabs/0` will open the first tab of the page `tabs`.

Please refer to the [documentation](/docs/ui/tabbed-pages.html#navigating-tabs) for more information.

## Blockly Enhancements

_Stefan Höhn ([@stefan-hoehn](https://github.com/stefan-hoehn)), Blockly Maintainer_

## Sitemap Enhancements

_Laurent Garnier ([@lolodomo](https://github.com/lolodomo)), openHAB Maintainer_

## Basic UI Enhancements

_Laurent Garnier ([@lolodomo](https://github.com/lolodomo)), openHAB Maintainer_

## Add-on Enhancements

openHAB 4.3 brings XX new add-ons, adding support for new devices:

But not only were new bindings added, some existing bindings also received massive improvements:

- The [JavaScript Scripting automation] has finally fixed the remaining reported multi-threading issues for UI-bases rules.

## openHABian Enhancements

# Enjoy and Get in Touch!

We hope that you like the new release as much as we do - as always our [community forum](https://community.openhab.org/) is there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
