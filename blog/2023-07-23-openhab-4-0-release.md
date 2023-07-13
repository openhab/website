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

### Transformation Editor

### Persistence Configuration

openHAB 4 finally adds support for configuring persistence from the UI.

As most UI configuration pages, the persistence configuration page is divided into two tabs: A design and a code tab.

The design tab allows to graphically configure strategies and filters for selected Items, create new cron strategies (common ones are automatically created for you) and manage filters.
The code tab represents the persistence configuration in YAML code and is perfect for sharing, e.g. when asking for help on the forum, but everything can be configured without touching a single line of code.

Big thanks to Jan (aka [J-N-K](https://github.com/J-N-K)) for implementing the core part (e.g. REST endpoints) and even adding new filters.

<!-- Add image here -->

To try it yourself, open a persistence add-on’s settings from the add-on store and click on the blue “Persistence configuration” header.

### Developer Sidebar Search

# Enjoy and get in touch!

We hope that you like the new release as much as we do - as always our [community forums](https://community.openhab.org/) are there for questions, comments and discussions. Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
