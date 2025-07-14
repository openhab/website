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

Our new major release introduces a new [Python Scripting add-on](/addons/automation/pythonscripting) based on [GraalPy](https://www.graalvm.org/python/).
Unlike the [Jython Scripting add-on](/addons/automation/jythonscripting), it offers full Python 3.11 support and is future-proof, as the underlying [GraalPy](https://www.graalvm.org/python/) is actively developed and promoted by Oracle.
In the long term, it will also completely replace the _outdated_ Jython add-on, but before, Jython will be market as deprecated for a while.

The binding offers the possibility of using Python as a scripting language in UI or file-based rules, as well as in transformation services.
It also included a helper library that simplifies the use of openHAB's API and provides a more Pythonic interface to interact with openHAB's APIs.

It also offers the following improvements over the Jython binding:

- improved error logging
- import native `java.*` or `org.openhab.*` Java packages
- scope module to encapsulate all jsr223 objects
- rule class to simplify rule setup, logging, and more
- registry class which wraps/simplifies access to Items, Things, Channels
- works with native python datatypes like [`datetype`](https://docs.python.org/3/library/datetime.html) instead of [`ZonedDateTime`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZonedDateTime.html)
- all kinds of triggers, actions and services are supported
- object functions are almost 100% similar to the openHAB Core API
- dependency watcher to reload scripts when modified

The only current limitation is the lack of PIP support for installing external modules, which will be introduced in the next release.
If you don't want to wait, you can install [the beta version via the Marketplace](https://community.openhab.org/t/python-scripting-5-0-0-5-9-9/164947).

It's also important to note that this binding was not developed as a replacement for HabAPP, which is completely independent, still actively developed, and enjoys a large community.
Your choice among these two options depends entirely on your personal preference.

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

### Sitemap Editor Drag & Drop

When designing sitemaps through the UI, it was very cumbersome to move elements around, as you had to delete and re-add them in the desired order, or cut and paste the DSL code in the code tab.
With openHAB 5.0, we have introduced a drag & drop feature to the sitemap editor, allowing you to easily rearrange elements in the sitemap:

<p align="center"><img style="max-width: 70%;" src="/uploads/2025-07-21-openhab-5-0-release/sitemap-edit-dragdrop.gif"/></p>

Many thanks to Mark Herwege ([@mherwege](https://github.com/mherwege)) for implementing this feature!

### Model Editor Drag & Drop

Similarly to the sitemap editor, the model editor now supports drag & drop for moving semantic tags around.
This not only makes it faster to build your semantic model, it also makes it easier to ensure that your model is valid and follows the best practices by introducing numerous validation checks.

<div align="center" class="row">
  <img style="max-width: 45%; min-width: 250px;" src="/uploads/2025-07-21-openhab-5-0-release/model-dragdrop-1.gif"/>
  <img style="max-width: 45%; min-width: 250px;" src="/uploads/2025-07-21-openhab-5-0-release/model-dragdrop-2.gif"/>
</div>

A big thank you to Mark Herwege ([@mherwege](https://github.com/mherwege)) for working on this game-changing feature!

### Copy DSL & YAML Definitions

### Semantic Tags Maintenance & Treeview Picker

### State Series chart

An additional state series for time based charts to easily see changes of an item's state over time.
The oh-state-series supports several settings to adjust color palette and the ability to provide a function to map item states (see Air Temp State vs. Air Temp).
This series can be used on any time-based chart with either an oh-value-axis or oh-category-axis as the y-axis.

<p align="center"><img style="max-width: 70%;" src="/uploads/2025-07-21-openhab-5-0-release/oh-state-series.png"/></p>

### Additional Enhancements

- **Widget Config:** The widget config popup has been redesigned to support live updates, dirty checking and be movable, so you can watch the changes in your page while editing the widget config.
- **Specific Browser Titles:** The browser title now reflects the current page, making it easier to identify the contents of the openHAB tabs in your browser.
- **Log Viewer Enhancements:** The log viewer has been enhanced with a history buffer, allowing you to scroll back through previous log entries, and a log details popup that provides more information about each log entry.
  Additionally, a text mode has been introduced as alternative to the default table view, having the look and feel of the well-known [frontail](https://github.com/mthenw/frontail) log viewer.

## Blockly Enhancements

- New Rule-Enable Block to enable or disable rules.
- New dictionary block to update dictionary entry values
- Persistence Block: Riemann sum support added
- Boolean-typed variable added
- Get Item Previous State added

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
