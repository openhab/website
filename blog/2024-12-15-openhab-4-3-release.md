---
layout: BlogPost
category: blog
title: openHAB 4.3 Release
author: Florian Hotze and others
date: "2024-12-15T18:00:00+01:00"
previewimage: /uploads/2024-12-15-openhab-4-3-release/header.png
tags:
  - news
excerpt: >-
  We are pleased to announce the release of openHAB 4.3!
  This traditional winter release introduces numerous new features and enhancements to the openHAB ecosystem, paving the way for our next major release.
---

We are pleased to announce the release of openHAB 4.3!
This traditional winter release introduces numerous new features and enhancements to the openHAB ecosystem, paving the way for our next major release.

One and a half year have passed since the [release of the openHAB 4.x series](/blog/2023-07-23-openhab-4-0-release.html), and we are proud to announce the final version of the openHAB 4.x series today.
However, openHAB 4.3 is far from being just a minor step toward openHAB 5 — it is packed with incredible new features, including a log viewer, UI support for Thing actions, and the new interactive SVG canvas, which unlocks previously untapped possibilities for your smart home dashboard.
Having openHAB 4.3 as a solid foundation, we will now focus development on openHAB 5, for which we have already started to collect ideas.
Make sure to read the outlook towards openHAB 5, it contains some important news!

With that being said, let's checkout some statistics highlighting the activity of our community and dive into the highlights of the openHAB 4.3 release!

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

<p align="center"><img style="max-width: 70%; max-height: 1000px;" src="/uploads/2024-12-15-openhab-4-3-release/addon-store-ios.jpg"/></p>

### Routable Tabbed Pages

openHAB 4.3 makes tabbed pages routable by appending the tab index to the end of the route.
For example, the route `/page/tabs/0` will open the first tab of the page `tabs`.

Please refer to the [documentation](/docs/ui/tabbed-pages.html#navigating-tabs) for more information.

### Dirty / Modified Indicator

When you modify a configuration/setting, a ● symbol is now shown next to the page title to indicate that there are unsaved changes and the configuration page becomes "dirty":

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-12-15-openhab-4-3-release/dirty-indicator.34733bcb.png"/></p>

To save the changes, click the `Save` button or hit `Ctrl` + `S` on your keyboard. If you attempt to leave the current configuration page and there are unsaved changes, a warning dialog will be shown to avoid losing your changes.

### Confirmation Dialogs for Widget Actions

It is now possible to optionally display a confirmation dialog when an action is triggered on a widget.
This is especially useful for actions that have a significant impact, like opening your garage door.

Action confirmation can be enabled by setting the `actionConfirmation` parameter.
The dialog can be customized by setting the `type`, `title`, and `text` parameters:

<br>

<div align="center" class="row">
  <img style="max-width: 30%;" src="/uploads/2024-12-15-openhab-4-3-release/action-confirmation-basic.png"/>
  <img style="max-width: 30%;" src="/uploads/2024-12-15-openhab-4-3-release/action-confirmation-dialog.png"/>
  <img style="max-width: 30%;" src="/uploads/2024-12-15-openhab-4-3-release/action-confirmation-sheet.png"/>
</div>

<details>

<summary>Show me the widget code for the example.</summary>

Have a look at the following example to learn about the different options:

```yaml
uid: actionConfirmation
tags: []
props:
  parameters: []
  parameterGroups: []
timestamp: Dec 10, 2024, 10:15:02 PM
component: oh-card
config:
  title: Action Confirmation
slots:
  content:
    - component: oh-button
      config:
        text: Confirm
        action: url
        actionUrl: https://www.openhab.org/blog/2024-12-15-openhab-4-3-release.html
        actionConfirmation: Are you sure you want to open the openHAB blog?
    - component: oh-button
      config:
        text: Confirm with Dialog
        action: url
        actionUrl: https://www.openhab.org/blog/2024-12-15-openhab-4-3-release.html
        actionConfirmation:
          type: dialog
          title: openHAB Blog
          text: Are you sure you want to open the openHAB blog?
    - component: oh-button
      config:
        text: Confirm with Sheet
        action: url
        actionUrl: https://www.openhab.org/blog/2024-12-15-openhab-4-3-release.html
        actionConfirmation:
          type: sheet
          text: Open the openHAB blog
          color: green
```

</details>

## Blockly Enhancements

_Stefan Höhn ([@stefan-hoehn](https://github.com/stefan-hoehn)), Blockly Maintainer_

## Sitemap Enhancements

_Laurent Garnier ([@lolodomo](https://github.com/lolodomo)), openHAB Maintainer_

## Basic UI Enhancements

_Laurent Garnier ([@lolodomo](https://github.com/lolodomo)), openHAB Maintainer_

## Add-on Enhancements

openHAB 4.3 brings XX new add-ons, adding support for new devices:

But not only were new bindings added, some existing bindings also received massive improvements:

- The [JavaScript Scripting automation](/addons/automation/jsscripting) has finally fixed the remaining reported multi-threading issues for UI-bases rules.
- The [KNX binding](/addons/bindings/knx) provides better support for KNX Secure, allowing to include keyring files and reading KNX Data Secure packets.

### MQTT / Home Assistant

_Cody Cutrer ([@ccutrer](https://github.com/ccutrer)), openHAB Maintainer_

The MQTT / Home Assistant binding allows integrating devices that communicate over MQTT, but were designed with Home Assistant in mind, rather than openHAB.
Some prominent examples include [zwave-js-ui](https://zwave-js.github.io/zwave-js-ui/), [zigbee2mqtt](https://www.zigbee2mqtt.io), and [ESPHome](https://esphome.io).
Historically, openHAB's support for these devices has been buggy and missing many features, prompting many users to prefer to manually configure generic MQTT things rather than use auto-discovery, which can be time consuming and error prone.
This release aims to make that practice no longer necessary, by fixing many bugs, and adding support for many missing features.

The biggest change is the overall structure of Thing Type and Channel IDs.
Whereas previously you may have had a Channel UID like `mqtt:homeassistant_zigbee2mqtt_5F0x8cf681fffe32e58e:mosquitto:zigbee2mqtt_5F0x8cf681fffe32e58e:0x8cf681fffe32e58e_5Fbattery_5Fzigbee2mqtt#sensor`, that same channel might now be `mqtt:homeassistant:mosquitto:zigbee2mqtt_5F0x00158d0007d3d7fa:battery`.
Note that this release is transitional, and only newly discovered Things will use the new style IDs.
You can opt in by deleting and re-creating your Things.
Proper support for persisting dynamic Thing Types has been added, so the 2 minute delay before things would initialize after booting openHAB has been eliminated.
There have been several issues fixed around keeping already created Things and Channels up to date if a device adds or removes components.
The README has been re-written to give more useful details on what channels are supported for each component type.

#### Jinja Templates

Home Assistant discovery uses Jinja templates to transform values and commands to and from the native format of a device.
Unfortunately, the Java Jinja implementation has lagged behind the features of Python's reference implementation.
Manually installing the Jinja Transformation Add-On is no longer necessary, either.
This release of openHAB brings support for the following features in Jinja, allowing use of devices that utilize them.
There are even some devices that have an "openHAB compatibility mode" to work around these idiosyncrasies.
Such options should no longer be necessary.

- `break`
- `continue`
- `iif`
- `is_defined`
- Numeric hash keys

#### Components With Significant Updates

- Alarm Control Panel (additional states)
- Climate (`humidity` and `preset-mode`)
- Device Trigger (sharing a channel for events from the same button)
- Light (several bug fixes around color modes)
- Fan (`speed`, `preset-mode`, `oscillation`, `direction`)
- Vacuum (no longer supports Legacy Schema)

#### Newly Supported Component Types

Many new component types are now supported:

- Device Tracker
- Event
- Humidifier
- Light (Template Schema)
- Tag Scanner
- Text
- Valve
- Water Heater

If you manually configure generic MQTT Things to integrate devices that support Home Assistant discovery, I encourage you to try using auto-discovery.
Please report any issues you have with specific devices in [GitHub issues](https://github.com/openhab/openhab-addons/issues/new?title=%5Bmqtt.homeassistant%5D+Unsupported+Device), and I'll try to address it as soon as I can.

## openHABian Enhancements

# Enjoy and Get in Touch!

We hope that you like the new release as much as we do - as always our [community forum](https://community.openhab.org/) is there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
