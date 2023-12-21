---
layout: BlogPost
category: blog
title: openHAB 4.1 Release
author: Florian Hotze and others
date: '2023-12-22T18:00:00+02:00'
previewimage: /uploads/2023-12-22-openhab-4-1-release/header.jpg
tags:
  - news
excerpt: >-
  As usual before christmas, we are happy to announce a new release of openHAB, that brings many additions, improvements and fixes!
---
The first minor release of openHAB 4 has arrived! openHAB 4.1 brings several improvements and bugfixes as well as some nice additions!

TODO: Write intro

With that being said, we again want to share some statistics that show the activity in numbers.

# Activity

As you'd expect from any new openHAB release, we have had a high activity across all our GitHub repositories since our [summer release](/blog/2023-07-23-openhab-4-0-release.html).
We therefore want to share a few statistics about our three main repositories: Core, add-ons and UI.

[openHAB core](https://github.com/openhab/openhab-core) has received 122 pull requests in total, with 31 bug fixes and 46 enhancements resulting in 10,238 lines of code added.
Even though the number of pull requests decreased compared to our [summer release](/blog/2023-07-23-openhab-4-0-release.html), that is still a lot of activity.

5 new add-ons were introduced, and with 437 pull requests, 121 bug fixes and 132 enhancements resulted in 13,071 lines of add-on code added to the [openHAB add-ons repository](https://github.com/openhab/openhab-addons).

Our [openHAB web UIs](https://github.com/openhab/openhab-webui) have also received many contributions: 129 pull requests including 46 bug fixes and 67 enhancements resulted in 6,235 lines of code changed.
This means the number of pull requests only slightly decreased compared to our [summer release](/blog/2023-07-23-openhab-4-0-release.html), which means our UIs continue to develop at a high pace.

It is worth to mention, that [our other repositories](https://github.com/openhab) have also received numerous contributions (e.g. documentation), but listing them all would probably be too much here.
Big thanks to all our contributors for driving openHAB forward!

Finally, it is time to shout out to our top code contributors per repository (having done the most commits) for this new release:

- Wouter ([@wborn](https://github.com/wborn)) for openHAB core
- Jan ([@J-N-K](https://github.com/J-N-K)) for openHAB core
- Jacob ([@jlaur](https://github.com/jlaur)) for openHAB add-ons
- Leo ([@lsiepel](https://github.com/lsiepel)) for openHAB add-ons
- Florian ([@florian-h05](https://github.com/florian-h05)) for the openHAB Main UI
- Laurent ([@lolodomo](https://github.com/lolodomo)) for the openHAB Basic UI

Most of them are also maintainers, which means besides of contributing code, they review pull requests and participate in discussions on GitHub issues.
At present, we are 35 maintainers across all our repositories.
Many thanks to my colleagues for making openHAB 4.1 a Christmas present to our community!

# Highlights

TODO: Write short summary

Therefore, please have a look at the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.1.0) and check out the following highlights.

## Core Runtime Enhancements

### Extending the Ontology with your own Semantic Tags

You can now easily extend the default ontology with your own semantic tags and then use them to build your semantic model.
This can be used for example to add a location or equipment that does not (yet) exist by default.

To define your own semantic tags, create a YAML configuration file containing the description of all your specific semantic tags in the `$OPENHAB_CONF/tags` folder.
You can find a [tutorial on the community forum](https://community.openhab.org/t/oh-4-1-tutorial-to-manage-custom-semantic-tags/148135).

## Main UI Enhancements

_Florian Hotze, openHAB Maintainer_

As already noted above, there were many PRs to our UIs, also including Main UI.
Listing all changes would be too much for a blog post (please have a look at the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.1.0)), but I want to highlight the following changes:

## Redesigned Settings Menu

Let's take a look at the settings menu from openHAB 4.0.x:

<p align="center"><img style="max-width: 70%;" src="/uploads/2023-12-22-openhab-4-1-release/mainui-settings-4-0.png"/></p>

Even though your were able to change most settings from it, it had a few drawbacks:

- Displaying all settings in the "System Settings" section, including those more advanced, cluttered the view, especially on smaller screens.
- Whilst access to the add-on store from the settings menu worked, it wasn't really intuitive to have it in the settings menu.
- The page did not use the additional space provided by large/wide screens, but at the same time was relatively high, so you had to scroll to see all entries.
- Add-on settings had to be accessed through the add-on store.

So we decided that openHAB 4.1 is a good chance to redesign the settings menu and move the add-on store to its own entry in the sidebar:

<p align="center"><img style="max-width: 70%;" src="/uploads/2023-12-22-openhab-4-1-release/mainui-settings-4-1.png"/></p>

As you can see, the new settings menu fixes those drawbacks:

- The "System Settings" section now hides advanced settings (depending on screen size).
- The add-on store section has been removed and the store moved to the sidebar:
  <p align="center"><img style="max-width: 30%;" src="/uploads/2023-12-22-openhab-4-1-release/mainui-add-on-store.png"/></p>
- The settings page now uses three columns on large screens and isn't that high anymore.
- Add-on settings were (re-)introduced, and now it is also possible to set their log level right from the settings menu.
  Just expand the section to see all installed add-ons.

## Sitemap and Basic UI Enhancements

_Laurent Garnier, openHAB Maintainer_

### New Sitemap element: `Buttongrid`

A `Buttongrid` represents a grid of buttons as typical for remote controls:
It allows to arrange a number of buttons, either labelled with a string or an icon, in a custom format.
When a button is pressed, the associated command is sent to the linked Item.

Here is the result in Basic UI with the following definition:

```java
Buttongrid label="Remote Control" staticIcon=screen item=RemoteControl buttons=[1:1:POWER="Power"=switch-off , 1:2:MENU="Menu" , 1:3:EXIT="Exit" , 2:2:UP="Up"=f7:arrowtriangle_up , 4:2:DOWN="Down"=f7:arrowtriangle_down , 3:1:LEFT="Left"=f7:arrowtriangle_left , 3:3:RIGHT="Right"=f7:arrowtriangle_right , 3:2:OK="Ok" , 2:4:VOL_PLUS="Volume +" , 4:4:VOL_MINUS="Volume -" , 3:4:MUTE="Mute"=soundvolume_mute]
```

<p align="center"><img style="max-width: 70%;" src="/uploads/2023-12-22-openhab-4-1-release/basicui-buttongrid.png"/></p>

This new element is currently only supported in Basic UI, but it is already worked on supporting it in the Android app as well.

### Other Sitemap Enhancements

- When using [mappings](/docs/ui/sitemaps.html#mappings) with the `Switch` element, you can now also provide an optional icon for each button.
  UIs that support this new feature (Basic UI and Android app) will then display the icon inside the button rather than the text.
- There is also a new and more powerful way to define a [dynamic icon](/docs/ui/sitemaps.html#icons) based on the states of different Items and allowing you to attach any type of icon regardless of its source (not restricted to icons provided by openHAB).
  As with visibility or label color, you can define a list of conditions, each referencing a (potentially different) icon.
- Combining several conditions for visibility or color of label, value and icon is now possible by using the `AND` operator.
  Of course, it is possible to reference a different Item in each singular condition.
- The syntax of the `period` parameter of `Chart` elements has been extended.
  Valid values are now `h, 2h, 3h, ..., D, 2D, 3D, ..., W, 2W, 3W, ..., M, 2M, 3M, ..., Y, 2Y, ...` and any valid duration following the ISO8601 duration notation such as `P1Y6M` for the last year and a half or `PT1H30M` for the last hour and a half.
- The `staticIcon` parameter can now be used in place of the `icon` parameter when you want to indicate to UIs that there is no need to refresh the icon when the state of the Item is updated.
  This can reduce network traffic when you have very frequent updates to an Item.

### Basic UI Enhancements

- A header row with a label and icon is now displayed for `Chart`, `Image`, `Video`, `Mapview` and `Webview` elements.
  To be displayed, the `label` parameter must be explicitly defined.
  Additionally, for `Chart` and `Image` elements, the display of this header row can be toggled by clicking on the image.
- The image of a `Chart` or `Image` element is now never scaled by default but there is now a button in the header row to toggle between the scaled image at the screen width and the image to its original size.
  For `Chart` elements, there are more buttons in the header row such as one to toggle between showing or hiding the legend or one to select the chart duration from a few predefined durations.
- Framework7 icons are now supported.
- A new parameter now allows you to select the number of columns that will be used to display sitemap elements.
  On a large screen (desktop), you have the choice between 1, 2 or 3 columns.
  On a tablet, you have the choice between 1 or 2 columns.
- The page listing the sitemap to select now displays the sitemap label.
- Several enhancements and fixes for the dark theme.

## Add-on Enhancements

# Enjoy and Get in Touch!

We hope that you like the new release as much as we do - as always our [community forum](https://community.openhab.org/) is there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
