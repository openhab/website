---
layout: BlogPost
category: blog
title: openHAB 5.0 Release
author: Florian Hotze and others
date: "2025-07-21T10:00:00+01:00"
previewimage: /uploads/2025-07-21-openhab-5-0-release/header.webp
tags:
  - news
excerpt: >-
  TODO
---

TODO

# Activity

As you'd expect from any new openHAB release, we have had a high activity across all our GitHub repositories.
We therefore want to share a few statistics about our three main repositories: Core, add-ons and UIs.

[openHAB Core](https://github.com/openhab/openhab-core) has received xxx pull requests in total, with xxx bug fixes and xxx enhancements resulting in xx,yyy lines of added code.

xx new add-ons, xxx bug fixes and xxx enhancements were contributed in xxx pull requests to the [openHAB add-ons repository](https://github.com/openhab/openhab-addons), which resulted in the addition of xxx,yyy lines of code.

Our [openHAB web UIs](https://github.com/openhab/openhab-webui) have received xxx pull requests, including xxx bug fixes and xxx enhancements resulting in xx,yyy lines of code added.

It is worth to mention, that [our other repositories](https://github.com/openhab) have also received numerous contributions (e.g. documentation), but listing them all would probably be too much here.
Many thanks to all our contributors for driving openHAB forward!

Again, it is time to shout out to our top code contributors per repository (having done the most commits) for this new release:

- TODO

Many of our top committers are also maintainers, which means besides contributing code, they also review pull requests and participate in discussions on GitHub issues, which helps maintain our high level of quality across bindings, UIs and Core.
At present, we have xx maintainers across all our repositories.
Huge thanks to all our contributors and all my maintainer colleagues for their work on our next major release!

# Highlights

As you might have already noticed in the activity statistics, there was much development on openHAB - too much to list everything.
Please refer to the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/5.0.0) to check out what's new and noteworthy (e.g. breaking changes).

In the following sections, our maintainers and contributors are introducing some new features you don't want to miss!

## Matter Integration

_Dan Cunningham ([@digitaldan](https://github.com/digitaldan)), openHAB Maintainer_

## Python Scripting

_Holger Hees ([@HolgerHees](https://github.com/HolgerHees)), openHAB Maintainer_

## Z-Wave JS Binding

_Leo Siepel ([@lsiepel](https://github.com/lsiepel)), openHAB Maintainer_

The openHAB 5.0 release introduces a new [Z-Wave JS binding](/addons/bindings/zwavejs), offering an alternative way to integrate Z-Wave networks into openHAB by connecting to an external [Z-Wave JS](https://zwave-js.github.io/zwave-js/) server.
This binding is particularly useful for advanced users, large networks, or those seeking cross-platform compatibility—such as when migrating from or running alongside other home automation platforms.
It supports newer 700/800 series chipsets, S2 security, Smart Start, and provides more robust device management features.
While the binding does not yet expose every capability of [Z-Wave JS](https://zwave-js.github.io/zwave-js/) (such as NVM backups), these can be accessed via the [Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui/) directly.
Importantly, the existing native Z-Wave binding remains fully supported, giving users the flexibility to choose the integration that best fits their needs.

More information and discussion can be found on the community forum: [Z-Wave JS UI in place of openHAB Z-Wave binding](https://community.openhab.org/t/zwave-js-ui-in-place-of-oh-zwave-binding/150007)

## Core Runtime Enhancements

## Main UI Enhancements

_Florian Hotze ([@florian-h05](https://github.com/florian-h05)), openHAB Maintainer_

## Blockly Enhancements

## Sitemap Enhancements

_Laurent Garnier ([@lolodomo](https://github.com/lolodomo)), openHAB Maintainer_

## Basic UI Enhancements

_Laurent Garnier ([@lolodomo](https://github.com/lolodomo)), openHAB Maintainer_

## Add-on Enhancements

openHAB 5.0 brings xx new add-ons, adding support for new devices:

- TODO

But not only were new bindings added, some existing bindings also received massive improvements:

- TODO

> Probably shout out our top reviewers.

### MQTT / Home Assistant

_Cody Cutrer ([@ccutrer](https://github.com/ccutrer)), openHAB Maintainer_

> Actual Home Assistant Jinja runningin GraalPython, ...

## openHABian Enhancements

_Markus Storm ([@mstormi](https://github.com/mstormi)), openHABian Maintainer_

# Enjoy and Get in Touch!

We hope that you like the new release as much as we do. As always, our [community forum](https://community.openhab.org/) is there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
