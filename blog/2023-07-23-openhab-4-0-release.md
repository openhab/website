---
layout: BlogPost
category: blog
title: openHAB 4.0 Release
author: Kai Kreuzer and others
date: '2023-07-23T18:00:00+02:00'
previewimage: /uploads/summer23.jpg
tags:
  - news
excerpt: >-
  A new major release has arrived! openHAB 4 brings some exciting new features and several improvements for our users as well as our developers!
---
A new major release has arrived! openHAB 4 brings some exciting new features and several improvements for our users as well as our developers!

With openHAB4, we have finally reached feature parity between UI-based and file-based configurations with UI support for both transformation and persistence configuration, added support for using scripts as transformations and profiles, and levelled up Units of Measurement (UoM) support!
But that's not all!
As quite usual for new openHAB major releases, we also upgraded to Java 17 to stay in sync with the evolving Java ecosystem.
Java 17 brings a wealth of benefits to our user and especially our developers, including security enhancements, performance improvements and reduced memory usage as well as new language features and APIs.

As this is a new major release, we have a number of breaking changes that are required for the new features and improvements.
So, please have a look at our [**official release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.0.0) to learn about all breaking changes, new addons, enhancements and fixes.

With that being said, we again want to share some statistics that show the progress in numbers.

# Activity

<!-- Share some stats about PRs, LOC etc. like in https://www.openhab.org/blog/2022-06-26-openhab-3-3-release.html#activity -->
<!-- Thank major contributors like in https://www.openhab.org/blog/2022-12-19-openhab-3-4-release.html -->

# Highlights

As this is a major release, there are some major (breaking) changes (like the switch to Java 17), but there is no single big new thing (like the introduction of MainUI in openHAB 3) to learn about.
Instead, we have quite a large number of new features and enhancements, and we hope everyone finds something that matters to him.

Therefore, please have a look at the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.0.0) and check out the following highlights.

## Open openHAB to thousands of free new icons

### New icon sources available

In addition to the icons already provided via the openHAB server (classic icon set + custom user icons), you have now an easy access for your items and sitemap elements to the [Material icons](https://fonts.google.com/icons?icon.set=Material+Icons), [Framework7 icons](https://framework7.io/icons/) and [over 150,000 icons provided by Iconify](https://icon-sets.iconify.design/).

Main UI supports all these icon sources while Basic UI currently supports all of them except the Framework7.
Note that the iconify option requires Internet connectivity on the client to access the external API. The WEB browser will cache the retrieved icons to limit the requests and speed up the rendering. Basic UI provides a setting to enable this option which is disabled by default.

Dynamic icons based on the item state remains a feature only available with the openHAB icon sets.

For more details including the new category/icon syntax, please read [this page in the openHAB documentation](https://next.openhab.org/docs/configuration/items.html#icons).

### Managing your icon color

You can now control the icon color associated with any user interface element of a sitemap using the "iconcolor" parameter. The syntax and capabilities behind this parameter are the same as for the "labelcolor" and "valuecolor" parameters, which means you can define multiple conditions leading to different colors.

This is not possible with icons from the classic icon set because these icons have a hard-coded color palette, but it is possible with icons from other icon sources and with added user SVG icons containing "currentColor" as the fill color.
Basic UI supports this color feature for openHAB icons only if an option is enabled. Color support for other icon sources is supported by default.

For more details, please read [this page in the openHAB documentation](https://next.openhab.org/docs/ui/sitemaps.html#label-value-and-icon-colors).

### Icons provided by bindings

A binding can now make specific icons related to channels available to the user, especially when no appropriate category/icon is available in the classic icon set.
Few bindings have already integrated this feature, for example the [OpenUV binding](https://www.openhab.org/addons/bindings/openuv/).

## Core Runtime Enhancements

## UI Enhancements

_Florian Hotze, openHAB Maintainer_

Especially as a new member of the UI maintainers team (i.e. duo — it’s just Yannick Schaus and me), I’m really excited to introduce you to the following enhancements, which are only a part of all the changes that have been contributed.

### Blockly
(by _Stefan Höhn, openHAB Blockly Maintainer_)

<p align="center"><img style="max-width: 80%;" src="/uploads/2023-07-23-openhab-4-0-release/blockly4.0.png"/></p>

Lot's has happened since openHAB 3, in particular promoting all blocks to the new and latest JavaScript Engine that comes with openHAB 4.
Not only does that generate even more cleaner code, it also allows to implement many more feature that would have been hard to provide. 
Therefore, all blocks have been rewritten for openHAB 4 to support the new JavaScript engine.

**How the 🦏 found the holy Graal - The new code generation**

Even though one may not notice it directly, the blocks are eventually used to automatically create code that can run on the openHAB server.
Please watch the YouTube video [Blockly as an ECMA-Script code generator](https://youtu.be/EdllUlJ7p6k?t=1739) for a live demo.
The code that is generated can be viewed when clicking the button in the lower right corner of the blockly editor.

In general, the code that Blockly generates is JavaScript (aka ECMAScript) which exists in several flavours or versions.
The ECMAScript version that is used by Blockly in **openHAB 3** is **ECMAScript 5.1,** and it is run by a component named **NashornJS** 🦏. [Nashorn JS](https://www.oracle.com/technical-resources/articles/java/jf14-nashorn.html) itself was part of Java until version 14 when it was dropped.
The generated rule code is run within the Java runtime (also known as JVM) on the openHAB server and as openHAB 4 has moved to Java 17, the old ECMAScript 5.1 is not directly available anymore within the JVM via Nashorn.
A replacement for the Nashorn JS is **GraalJS** ("the holy grail"), which is currently running **ECMAScript 2022** and therefore supports all modern JavaScript features, like arrow functions and private class fields and methods.
[**GraalJS**](https://github.com/oracle/graaljs) is already available in openHAB 3 when the [JavaScript Scripting addon](https://www.openhab.org/addons/automation/jsscripting/) is installed.
The [JavaScript Scripting addon](https://www.openhab.org/addons/automation/jsscripting/) also includes the [openHAB JavaScript library](https://github.com/openhab/openhab-js), which in fact empowers most of the new Blockly features and allows the much cleaner code by providing a simple, pure JS API to openHAB.

**New Features in Blockly**

* Full Support of **U**nits **o**f **M**easurement with [5 brand-new blocks](https://openhab.org/docs/configuration/blockly/rules-blockly-uom.html)
* The [Math section](https://openhab.org/docs/configuration/blockly/rules-blockly-standard-ext.html#math) was extended by a new bitshift block and extended rounding block
* Metadata blocks allow direct access to [Item metadata](https://openhab.org/docs/configuration/blockly/rules-blockly-items-things.html#item-metadata)
* A historicState option was added to the [persistence blocks](https://openhab.org/docs/configuration/blockly/rules-blockly-persistence.html#get-statistical-value-of-an-item)
* Persistence blocks can now be used with any [persistence service](https://openhab.org/docs/configuration/blockly/rules-blockly-persistence.html)
* Added pattern to [text of date block](https://openhab.org/docs/configuration/blockly/rules-blockly-date-handling.html#get-string-representation-of-date-text-of)
* Support for [private and global cache](https://openhab.org/docs/configuration/blockly/rules-blockly-value-storage.html#caching) when using the value storage blocks
* A new [Blockly dictionary loop](https://openhab.org/docs/configuration/blockly/rules-blockly-standard-ext.html#loop-over-a-dictionary) block with value and key from dictionary
* Added stricter type checking for blocks to avoid mistakes
* Added numeric state, quantity state to getItemAttribute

Editor:
* [Search](https://openhab.org/docs/configuration/blockly/rules-blockly-before-using.html#searching-the-workspace) within the blockly workspace via Cmd/Ctrl-F
* Shadow Blocks are now automatically converted to real blocks, which is good when you want to reuse them by duplicating the block 
* [Cross-Rule Copy & Paste](https://next.openhab.org/docs/configuration/blockly/rules-blockly-before-using.html#cross-rule-copy-paste)

All new blocks have received comprehensive documentation at the [Blockly Reference](https://openhab.org/docs/configuration/blockly/).

### Scene Editor

Given several discussions on the community, support for scenes was a long awaited feature — openHAB 4 has it.

Basically, scenes are only a set of Items and states that the Items are commanded to when the scene is enabled.
In openHAB, a simple rule would be enough to achieve that functionality, but it would either require some coding or several UI interactions.

The scene editor allows you to define Items and their respective target states very easily.
A sync state button allows to store the current Item state as the target state, and another button allows you to test the currently defined target state.

Scenes can be triggered from MainUI widgets and, as they are basically just rules without triggers, from other rules. 
One may wonder how to trigger scenes from BasicUI: In this case, you can create an Item and use the code tab of the scene to define it as a trigger.

<p align="center"><img style="max-width: 80%;" src="/uploads/2023-07-23-openhab-4-0-release/scene-editor.png"/></p>

If you are interested, please check out [the documentation](https://openhab.org/docs/tutorial/rules_scenes.html).

### Transformation Editor

Previously, it was only possible to define transformations through files in the respective folder, but this release brings UI-based configuration of transformations.

The transformation editor basically is just a code editor with syntax highlighting for the selected transformation type, and pre-filled code snippets for some script-based transformations, but it is an important part of reaching feature parity between file-based and UI-based configuration.

The upcoming openHAB 4.1 release will probably improve the UI, so you can simply select which transformation you want to apply on an Item state, but until then the transformation editor provides guidance what to fill into the state description field.

### Persistence Configuration

Seems like openHAB 4 is full of new UI pages — It finally supports configuring persistence from the UI.

As most UI configuration pages, the persistence configuration page is divided into two tabs: A design and a code tab.

The design tab allows to graphically configure strategies and filters for selected Items, create new cron strategies (common ones are automatically created for you) and manage filters.
openHAB 4 also has a few new filters you should check out!

The code tab represents the persistence configuration in YAML code and is perfect for sharing, e.g. when asking for help on the forum, but everything can be configured without touching a single line of code.

<!-- Add image here -->

To try it yourself, open a persistence add-on’s settings from the add-on store and click on the blue “Persistence configuration” header.

### Developer Sidebar Search

In openHAB 3, the developer sidebar search was only able to find Items by name or label, Things by UID or label, rules by UID or name and pages by UID.

With openHAB 4, we gave it a big upgrade:
It is now possible to search inside nearly every UI entity. 
No matter where, you find what you search for.

Imagine you want to know which of your rules and pages use a specific Item. Just type the Item name in the developer sidebar search, and you’ll find all occurrences of the search query in pages, scenes, scripts and rules. 
Even Blockly and the code of script actions are now searchable.

<!-- Add image here -->

For an exact list of entities the search checks your query against, please have a look at [the documentation](https://openhab.org/docs/tutorial/tips-and-tricks.html#search).

## Addon Enhancements

### JavaScript Scripting

# Enjoy and get in touch!

We hope that you like the new release as much as we do - as always our [community forums](https://community.openhab.org/) are there for questions, comments and discussions. Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
