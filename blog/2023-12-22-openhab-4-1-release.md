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

[openHAB core](https://github.com/openhab/openhab-core) has received TODO pull requests, TODO bug fixes and TODO enhancements with TODO lines of code added.
The number of pull requests has TODO compared to our [summer release](/blog/2023-07-23-openhab-4-0-release.html).

TODO new add-ons were introduced, and with TODO pull requests, TODO bug fixes and TODO enhancements resulted in TODO lines of add-on code added to [openHAB add-ons](https://github.com/openhab/openhab-addons).

Our [openHAB web UIs](https://github.com/openhab/openhab-webui) have also received many contributions: TODO pull requests, TODO bug fixes and TODO enhancements resulted in TODO lines of code added.
TODO the number of pull requests compared to our [winter release](/blog/2023-07-23-openhab-4-0-release.html).

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
At present, we are TODO maintainers across all our repositories.
Many thanks to my colleagues for making openHAB 4.1 a christmas present to our community!

# Highlights

TODO: Write short summary

Therefore, please have a look at the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.1.0) and check out the following highlights.

## Core Runtime Enhancements

### Extending the ontology with your semantic tags

You can now easily extend the default ontology with your own semantic tags and then use them to build your semantic model.
This can be used for example to add a location or equipment that does not yet exist by default.
You can achieve that by providing a new very simple configuration file (YAML format) containing the description of all your specific semantic tags.
You can find a [tutorial on the community forum](https://community.openhab.org/t/oh-4-1-tutorial-to-manage-custom-semantic-tags/148135).

## UI Enhancements

### New sitemap element: Buttongrid

A Buttongrid represents a grid of buttons and enables commands to be sent to an Item.
When a button is pressed, the associated command is sent to the linked Item.
This is a typical element for simulating a remote control, for example.

Here is the result in Basic UI with the following definition:

```java
Buttongrid label="Remote Control" staticIcon=screen item=RemoteControl buttons=[1:1:POWER="Power"=switch-off , 1:2:MENU="Menu" , 1:3:EXIT="Exit" , 2:2:UP="Up"=f7:arrowtriangle_up , 4:2:DOWN="Down"=f7:arrowtriangle_down , 3:1:LEFT="Left"=f7:arrowtriangle_left , 3:3:RIGHT="Right"=f7:arrowtriangle_right , 3:2:OK="Ok" , 2:4:VOL_PLUS="Volume +" , 4:4:VOL_MINUS="Volume -" , 3:4:MUTE="Mute"=soundvolume_mute]
```

![Buttongrid example in BasicUI](https://www.openhab.org/assets/img/sitemap_demo_buttongrid.1aad90ba.png)

This new element is supported in Basic UI but should also be supported quickly in a future version of the Android app.

### Other sitemap enhancements

- When using [mappings](https://www.openhab.org/docs/ui/sitemaps.html#mappings) with the Switch element, you can now also provide an optional icon for each button.
UIs that support this new feature (Basic UI and Android app) will then display the icon inside the button rather than the text.

- There is also a new and more powerful way to define a [dynamic icon](https://www.openhab.org/docs/ui/sitemaps.html#icons) based on the states of different items and allowing you to attach any type of icon regardless of its source (not restricted to icons provided by openHAB).
As with visibility or label color, you can define a list of conditions, each referencing a (potentially different) icon.

- It is also now possible in a condition of visibility or color (label/value/icon) to combine several comparisons separated by the AND operator.
A condition including the AND operator will be considered as true if all individual comparisons are considered as true.
Of course, it is possible to reference a different item in each comparison.

- The syntax of the `period` parameter used in a Chart element is extended.
Valid values are now `h, 2h, 3h, ..., D, 2D, 3D, ..., W, 2W, 3W, ..., M, 2M, 3M, ..., Y, 2Y, ...` and any valid duration following the ISO8601 duration notation such as `P1Y6M` for the last year and a half or `PT1H30M` for the last hour and a half.

- The `staticIcon` parameter can now be used in place of the `icon` parameter when you want to indicate to UIs that there is no need to refresh the icon when the state of the item is updated.
This can reduce network traffic when you have very frequent updates to an item.

### Basic UI enhancements

- A header row with a label and icon is now displayed for Chart, Image, Video, Mapview and Webview elements.
To be displayed, the `label` parameter must be explicitly defined.
Additionally for Chart and Image elements, the display of this header row can be toggled by clicking on the image.
The image of a Chart or Image element is now never scaled by default but there is now a button in the header row to toggle between the scaled image at the screen width and the image to its original size.
For Chart element, there are also other buttons in the header row such as one to toggle between showing or hiding the legend or one to select the chart duration from a few predefined durations.

- Framework7 icons are now supported.

- A new parameter now allows you to select the number of columns that will be used to display sitemap elements.
On a large screen (desktop), you have the choice between 1, 2 or 3 columns.
On a tablet, you have the choice between 1 or 2 columns.

- The page listing the sitemap to select now displays the sitemap label.

- Some enhancements with the dark theme.

## Add-on Enhancements

# Enjoy and Get in Touch!

We hope that you like the new release as much as we do - as always our [community forum](https://community.openhab.org/) is there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
