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
  A new major release has arrived! openHAB 4 brings some exciting new features and several improvements for our users as well as our devs!
---
A new major release has arrived! openHAB 4 brings some exciting new features and several improvements for our users as well as our devs!

We finally reached feature parity between UI-based and file-based configurations with UI support for both transformation and persistence configuration, and moved to Java 17 to give our devs access to great new language features. 

<!-- Write more, see 3.0 release post. Ask @kaikreuzer -->

You can find the full list of new add-ons, enhancements and fixes in our [**official release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.0.0).

With that being said, we again want to share some statistics that show the progress in numbers.

# Activity

<!-- Share some stats about PRs, LOC etc. like in https://www.openhab.org/blog/2022-06-26-openhab-3-3-release.html#activity -->
<!-- Thank major contributors like in https://www.openhab.org/blog/2022-12-19-openhab-3-4-release.html -->

# Highlights

As this is a major release, there are some major (breaking) changes (like the switch to Java 17), but there is no single big new thing (like the introduction of MainUI in openHAB 3) to learn about.
Instead, we have quite a large number of new features and enhancements and we hope everyone finds something that matters to him.

Therefore, please have a look at the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.0.0) and check out the following highlights.

## UI Enhancements

_Florian Hotze, openHAB Maintainer_

Especially as a new member of the UI maintainers team (i.e. duo — it’s just Yannick Schaus and me), I’m really excited to introduce you to the following enhancements, which are only a part of all the changes that have been contributed.

### Blockly

<!-- GraalJS, UoM support. Ask @stefan-hoehn -->

### Scene Editor

Given several discussions on the community, support for scenes was a long awaited feature — openHAB 4 has it.

Basically, scenes are only a set of Items and states that the Items are commanded to when the scene is enabled.
In openHAB, a simple rule would be enough to achieve that functionality, but it would either require some coding or several UI interactions.

The scene editor allows you to define Items and their respective target states very easily.
A sync state button allows to store the current Item state as the target state, and another button allows you to test the currently defined target state.

Scenes can be triggered from MainUI widgets and, as they are basically just rules without triggers, from other rules. 
One may wonder how to trigger scenes from BasicUI: In this case, you can create an Item and use the code tab of the scene to define it as a trigger.

<p align=“center”><img style=“max-width: 80%;” src=“/uploads/2023-07-23-openhab-4-0-release/scene-editor.png”/></p>

If you are interested, please check out [the documentation]({base}/docs/tutorial/rules_scenes.html).

### Transformation Editor

Previously, it was only possible to define transformations through files in the respective folder, but this release brings UI-based configuration of transformations.

The transformation editor basically is just a code editor with syntax highlighting for the selected transformation type, and pre-filled code snippets for some script-based transformations, but it is an important part of reaching feature parity between file-based and UI-based configuration.

The upcoming openHAB 4.1 release will probably improve the UI so you can simply select which transformation you want to apply on an Item state, but until then the transformation editor provides guidance what to fill into the state description field.

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

For an exact list of entities the search checks your query against, please have a look at [the documentation]({base}/docs/tutorial/tips-and-tricks.html#search).

# Enjoy and get in touch!

We hope that you like the new release as much as we do - as always our [community forums](https://community.openhab.org/) are there for questions, comments and discussions. Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
