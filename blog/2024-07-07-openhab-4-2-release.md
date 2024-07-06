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
  openHAB 4.2 adds a number of exciting new features, including some long awaited notification enhancements, as well as a multitude of smaller improvements and bug fixes.
---
One year has passed since our big [openHAB 4.0 release](/blog/2023-07-23-openhab-4-0-release.html), and we are thrilled to announce our first summer minor release of the openHAB 4.x series: openHAB 4.2.
openHAB 4.2 adds a number of exciting new features, including some long awaited notification enhancements, as well as a multitude of smaller improvements and bug fixes.

With that being said, we as usual want to share our highlights and some statistics that show the activity in numbers.

# Activity

As you'd expect from any new openHAB release, we have had a high activity across all our GitHub repositories.
We therefore want to share a few statistics about our three main repositories: Core, add-ons and UIs.

[openHAB Core](https://github.com/openhab/openhab-core) has received 216 pull requests in total, with 56 bug fixes and 104 enhancements resulting in 11,160 lines of added code.

23 new add-ons, 158 bug fixes and 195 enhancements were contributed in 572 pull requests to the [openHAB add-ons repository](https://github.com/openhab/openhab-addons), which resulted in the addition of 298,936 lines of code.

The [openHAB web UIs](https://github.com/openhab/openhab-webui) have broken their "personal" best with a whopping 247 merged pull requests, including 95 bug fixes and 105 enhancements resulting in 32,761 lines of code changes.

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

## Mobile Notification Enhancements

_Dan Cunningham ([@digitaldan](https://github.com/digitaldan)), openHAB Maintainer_

With openHAB 4.2 we have updated our mobile push notifications architecture, bringing modern, cutting edge notification features to both our Android and iOS clients.

First, we have consolidated both mobile platforms to use Google Firebase Messaging, which greatly improves the reliability of push notifications from our cloud service and reduces the amount of work needed to add new features in a cross-platform way.

This change has allowed us to add an incredible amount of new features to our app in a relatively short amount of time.

### Notification Display Enhancements

Notifications now contain many more additional features, such as:

- Title
  - Replaces the default "openHAB" text with a user supplied version
- Media Attachments
  - Add images (or a short video on iOS) from an external URL or openHAB image item
- On Click Action
  - Navigate to a specific sitemap, page, popup widget, etc... in our UIs when the notification is clicked
- Action Buttons
  - Add up to 3 buttons that allow for executing commands, navigating through our UI's or open links in an embedded browser

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/notifications.png"/></p>

### Update / Collapse Notifications

We have also added some really useful ways to manage notifications already pushed to a device through rules and actions!

- Collapsible Notifications
  - Instead of seeing 100 messages that you left the garage door open, have a messages replace the existing shown one, so only the latest message is show on a user's device.
  - Update existing messages with new information, add additional actions, media, etc.. without showing multiple notifications.

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/collapse-notifications.png"/></p>

### Remove / Hide Notifications

Finally, this has been a long requested feature by users, so we are very excited to be able to support removable notifications in this release!

- Hide / Remove Notifications
  - Is an alert no longer valid? Need to display something only temporarily?
  - Using rules or actions, you can remove already pushed notifications from your devices.

### Scripting Language Support

These new notification enhancements are of course available across all our rule languages, but we have introduced additional helper APIs in our [JavaScript Scripting](/addons/automation/jsscripting/#cloud-notification-actions) and [JRuby Scripting](https://openhab.github.io/openhab-jruby/main/OpenHAB/Core/Actions/Notification.html) implementations to make this even easier to use.

### Upcoming iOS Changes

It's been a long time since we have pushed an official update to the iOS app.
Unfortunately we have been unable to push updates do to a technical issue with our app store identifiers that Apple has not been able to resolve.
After months and months of back and forth with their developer support team, we have decided to move forward with an alternative plan to release a brand-new app.

This new app will still be called "openHAB" and will include all of the above features, more than a year's worth of bug fixes and improvements, the Apple Watch companion app and will continue to receive constant feature upgrades.
The new app will require at least iOS 16 and will drop openHAB 1.x support.

The existing app will continue to function, but be renamed to "openHAB V1".
This "legacy" app will only receive security updates and critical fixes, but will support openHAB 1.x to at least 4.2 and will also work for devices running iOS 15 and earlier.
The legacy app will not include Apple Watch support nor support our new enhanced notifications features, although basic notifications will continue to be supported.

Once both apps are available in the app store, the legacy app will prompt users to upgrade and make the switch.

In the meantime, you can download our new app right now on [TestFlight](https://testflight.apple.com/join/0uFYONeF) and try out these amazing new features!

<a href="https://testflight.apple.com/join/0uFYONeF"><img src="https://developer.apple.com/assets/elements/icons/testflight/testflight-128x128_2x.png" width="50" alt="Download on TestFlight"></a>
Download the new openHAB app on [TestFlight](https://testflight.apple.com/join/0uFYONeF).

Many thanks to:

- Florian Hotze ([@florian-h05](https://github.com/florian-h05)) for the enhanced JavaScript Scripting language support, docs, and code reviews of the cloud connector add-on.
- Jimmy Tanagra ([@jimtng](https://github.com/jimtng)) for the enhanced JRuby Scripting language support.
- Our app maintainers [@mueller-ma](https://github.com/mueller-ma), Danny Baumann ([@maniac103](https://github.com/maniac103)), [@weakfl](https://github.com/weakfl) and Tim Bert ([@timbms](https://github.com/timbms)) for all their work on the mobile apps!

## Java 21 Support

_Holger Friedrich ([@holgerfriedrich](https://github.com/holgerfriedrich)), openHAB Maintainer_

Java 17 is required and still recommended for all openHAB 4.x releases.
But with version 4.2, we introduce Java 21 as an alternative:

We typically focus on Java releases with long-term support (LTS) and the next LTS release following after Java 17 is Java 21, released in 2023.
To allow compiling openHAB with Java 21, we had to adapt our toolchain, upgrade dependencies, and also introduce some code changes.
This resulted in a comprehensive upgrade of almost all dependencies used in core, including Karaf and Xtext/Xtend.
To allow for running openHAB with Java 21, a few more changes had to be introduced:
One notable difference between Java 17 and Java 21 is the change of the serialization format of DateTime in [CLDR 42](https://cldr.unicode.org/index/downloads/cldr-42), which required some extra efforts in persistence to allow switching the Java version in an existing installation.

Now you can use both Java 17 and Java 21 to run openHAB, but the openHAB distribution continues to use the Java 17 binary format which can run on both Java versions.
Please consider Java 21 support as experimental, as it has not been tested thoroughly yet.
Also note that Java 21 is only available for 64-bit systems.
If you use openHABian and have installed the 64-bit image, you can install Java 21 using `openhabian-config`.

Developers can even choose between three options:
Java 17, Java 21 creating Java 17 binaries (default for openHAB if you use Java 21), and native Java 21 (binaries will not work on a Java 17 server).
Whereas we recommend Java 17 for running openHAB, development can be safely done on Java 21.

Please refer to the [developer documentation](/docs/developer/#setup-the-development-environment) for more information.

## Core Runtime Enhancements

### Persistence Extensions

_Mark Herwege ([@mherwege](https://github.com/mherwege)), openHAB Contributor_

Persistence Extensions have allowed the different scripting languages to easily persist states and retrieve persisted states or values calculated from these persisted states for a long time.

As openHAB supports units of measurument (UoM), persistence services can also return persisted values with a unit of measurement.
However, the Persistence Extensions did not consider these units of measurement and returned just a decimal value as the result of their calculations.
With openHAB 4.2, Persistence Extension have been enhanced to also return the unit of measurement.
This allows rules and scripts to simply calculate with `QuantityType`s without any implicit or explicit conversion to a `DecimalType`, while keeping the results consistent if different units of measure are used.
Note that this change may require adapting previous rules.

With the introduction of [Time Series support](/blog/2023-12-22-openhab-4-1-release.html#time-series-support-for-forecasts-and-historical-values) in openHAB 4.1, persistence services were extended to allow storing future values and forecasts.
openHAB 4.2 extends the Persistence Extensions to allow persisting future states and retrieving future values.
All persistence data retrieval methods now have `last`, `next` and `between` variants, 
whereby `last` will use the period from a point in time in the past until now, `next` will use the period from now to a future point in time and `between` will use the period between two provided points in time in the past and/or future.

To allow storing multiple values to persistence in one go, Persistence Extensions methods now support working with Time Series instead of individual values when persisting or retrieving data.
Time Series are series of time/value pairs, and can be constructed in rules, e.g. by modifying a Time Series retrieved from another persistence service or another Item.

Also, there was no way before to retrieve the time of the last state change for an item from persistence.
The existing methods (`previousState()` or `previousState(true)`) would not give the right result if the same value had been persisted multiple times.
A new method `lastChange()` has been added to resolve this.

Scripting languages (Rules DSL, JavaScript, jRuby and Blockly) have implemented full support of these new and enhanced Persistence Extensions, please refer to the individual languages' documentation for more information.

As much has changed, it is worthwhile to read the [documentation](/docs/configuration/persistence.html#persistence-extensions-in-scripts-and-rules) to update your knowledge about openHAB persistence extensions and learn everything about the new features.

## Main UI Enhancements

_Florian Hotze ([@florian-h05](https://github.com/florian-h05)), openHAB Maintainer_

### Dependency & Build System Upgrades

openHAB 4.2 upgrades most of Main UI's dependencies to their latest version, including the charting engine [Apache ECharts](https://echarts.apache.org) and the date and time manipulation library [dayjs](https://day.js.org).
As Main UI is still using Vue 2, we would like to upgrade to Vue 3 in the future - by upgrading to the latest Vue 2.x version, we have taken a minor step towards Vue 3.

In addition to our runtime dependencies, we have also upgraded our build system to the latest tooling: Webpack 5 and Node.js 20.
This ensures we can always use the latest Webpack features when bundling the Main UI source code, and moves away from Node.js 16, which is now EOL.

Many thanks to Miguel Álvarez ([@GiviMAD](https://github.com/givimad)) for the Webpack upgrade!

### Semantic Model Templates

_Justin Georgi ([@justingeorgi](https://github.com/JustinGeorgi)), openHAB Contributor_

It has gotten even easier for first time users of openHAB to get started quickly.

Instead of building up the organization of a home one location at a time, users creating a new semantic model can take advantage of the new template wizard to create a structured semantic model with just a few clicks.
The model template page provides three basic base templates with the ability to quickly select the necessary combination of rooms followed by one click creation of all the semantic items:

- One Bedroom Apartment
- One Story House
- Two Story House

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/semantic-model-template.png"/></p>

### Persistence Settings Menu

Persistence configuration through the UI has been [supported since openHAB 4.0](/blog/2023-07-23-openhab-4-0-release.html#persistence-configuration), but unfortunately it was hidden in the add-on settings and difficult to find.

This finally changes with openHAB 4.2 with the introduction of the new persistence settings menu:

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/persistence-menu.png"/></p>

The new page is reachable through the settings menu and allows to configure the default persistence service, persistence policies and installation of more persistence add-ons.

Thanks to Mark Herwege ([@mherwege](https://github.com/mherwege)) for the contribution!

### Item Form Enhancements

_Jimmy Tanagra ([@jimtng](https://github.com/jimtng)), openHAB Maintainer_

Items are one of the core elements in an openHAB system.

To make viewing and editing them easier and more streamlined, the Item Form has received some minor cosmetic and functional improvements, e.g. easier managing of parent groups.

For `Number` Items with a dimension (UoM Items), it is now easier to set the Item's unit directly on the form with a default unit pre-filled, thanks to the work by Mark Herwege ([@mherwege](https://github.com/mherwege)).
The unit defaults to the default system unit for the configured measurement system, and a dropdown allows to select from common alternatives or to enter a custom unit.
Bindings may propose a default unit for channels, which will be used when the Item is created from a channel.

### Add-on Store Redesign

_Jimmy Tanagra ([@jimtng](https://github.com/jimtng)), openHAB Maintainer_

The Add-on Store has been split up into sub-sections on navigation sidebar according to the add-on types.
When the navigation sidebar is not available, e.g. on mobile, the Add-on Store will split up into tabs according to the add-on categories.

The main Add-on Store page now shows the list of all suggested and installed add-ons, grouped by type, for a quick overview.
The add-on type sub-pages show the suggested add-ons on top, followed by the available add-ons.

The search box on the main Add-on Store page allows searching through all add-ons in every category, whereas the search box on the add-on types' sub-pages searches only the add-ons of the selected type.
In addition to that, filters were introduced to filter the add-ons by their connection type (e.g. cloud allowed, no cloud allowed) and country (all applicable for you, only for your country, all) (thanks to Mark Herwege ([@mherwege](https://github.com/mherwege))).

Browsing through the Add-ons Store and switching through the different sections is now much faster, thanks to cached results.
This makes browsing and installing add-ons through the UI easier and quicker.

The new Add-on Store sidebar menu and main page looks like this:

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/add-on-store.png"/></p>

### Setup Wizard Extensions

With the introduction of [add-on suggestions](/blog/2023-12-22-openhab-4-1-release.html#add-on-suggestions) in openHAB 4.1, we made a first, big step towards a better first-user experience.

openHAB 4.2 continues this path by extending the setup wizard with a separate step for persistence.
In this step, suggested persistence add-ons are displayed together with a short explanation for the suggestion.
The user can then decide if he wants to install the suggested persistence add-ons or not, and install more add-ons in the next step:

<div align="center" class="row">
  <img style="max-width: 35%;" src="/uploads/2024-07-07-openhab-4-2-release/setup-wizard-persistence.png"/>
  <img style="max-width: 35%;" src="/uploads/2024-07-07-openhab-4-2-release/setup-wizard-addons.png"/>
</div>

Many thanks to Mark Herwege ([@mherwege](https://github.com/mherwege)), who already worked on the add-on suggestions in openHAB 4.1, for this enhancement!

### `oh-context` Component

_Justin Georgi ([@justingeorgi](https://github.com/JustinGeorgi)), openHAB Contributor_

With openHAB 4.2, advanced custom widgets have gotten more powerful with the new `oh-context` component!

This component allows widget authors to insert a code context block at any point in the widget tree and define three different types of objects available for use in expressions in all children of the `oh-context`:

- Variables: These context variables differ slightly from the normal widget variables in that they can have initial default values and also have complete communication with sub-widgets.
- Constants: Context constants make for much more concise and readable expressions but unlike variable are only evaluated once when the widget loads.
- Functions: Named context functions allow widget authors to efficiently reuse complex functions in multiple expressions.

Please have a look at the [documentation](/docs/ui/widget-expressions-variables.html) to learn about the new `oh-context` component.

### Health UI

Ever heard of orphaned links before? Orphaned links are channel links, where either the Item or the channel (or possibly even both) are missing.

As you can imagine, orphaned links can and should be removed.
The new health UI allows to easily check if there are orphaned links and take care of them:

<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/health-menu.png"/></p>
<p align="center"><img style="max-width: 70%;" src="/uploads/2024-07-07-openhab-4-2-release/health-orphan-links.png"/></p>

The health UI is not only meant to display orphaned links, but also to provide a central place for health checks and maintenance tasks.
So stay tuned what gets added in the future!

Thanks to Arne Seime ([@seime](https://github.com/seime)) for this nice addition!

### Blockly Enhancements

_Stefan Höhn ([@stefan-hoehn](https://github.com/stefan-hoehn)), Blockly Maintainer_

## Sitemap Enhancements

_Laurent Garnier ([@lolodomo](https://github.com/lolodomo)), openHAB Maintainer_

### Two possible behaviors for the Slider element

A new parameter named `releaseOnly` was added to the `Slider` element.
If `releaseOnly` parameter is specified, the new value is only sent on releasing the slider.
Otherwise values are sent while sliding which is now the default behavior.

Note: an implicit slider element (when `Default` element is used) will have the `releaseOnly` parameter set.
Its behavior is therefore to send the new value only when the slider is released.

### Press and release buttons

For a `Switch` element with mappings, each button can now behave either as a click button or as a press and release button.
The default behavior is a click button.
To get a press and release behavior, provide two commands separated by a semicolon.
The first command is sent to the item when the button is pressed and the second command is sent when the button is finally released.
Here is an example of such a button sending command ON when the button is pressed and command OFF when the button is released.

```java
Swith item=myItem mappings=[ON:OFF="On"]
```

### Extended chart periods to cover past and future

The time axis can now be either entirely in the past ending at the present time, entirely in the future starting at the present time, or partly in the past and partly in the future around the present time.
To do this, the value of the `period` parameter can now be composed of two parts separated by the "-" character, the value before the "-" is then the scale in the past and the value after the "-" is the scale in the future.
Valid values before and after the central character "-" are `h, 2h, 3h, ..., D, 2D, 3D, ..., W, 2W, 3W, ..., M, 2M, 3M, ..., Y, 2Y, ...` and any valid duration following the ISO8601 duration notation such as `P1Y6M` for the last year and a half or `PT1H30M` for the last hour and a half.
If only a period is provided, i.e. without the final "-" character or without anything after the "-" character, only a period in the past is taken into account.

### New Button element

A new `Button` element was introduced.

```java
Button item=<itemname> [label="<labelname>"] [icon=<iconref>] [staticIcon=<iconref>] row=<row> column=<column> [stateless] click=<cmd> [release=<cmd>]
```

Such an element is only accepted as a child of a `Buttongrid` element.
It adds more functionalities to buttons in `Buttongrid` than before in openHAB 4.1.
You can now choose between stateful or stateless behavior and between click or press & release behavior.
Icon can be dynamic by defining icon conditions.
Label and icon color can be dynamic using the `labelcolor` and `iconcolor` parameters.
Visibility of the button can be dynamic using the `visibility` parameter.

## Add-on Enhancements

openHAB 4.2 brings 23 new add-ons, adding support for new devices:

- The [AirGradient binding](/addons/bindings/airgradient) supports AirGradient air quality sensors.
- The [Amber Electric binding](/addons/bindings/amberelectric) provides access to the Australian energy retailer's Amber API with energy pricing and renewable energy data.
- The [ArgoClima binding](/addons/bindings/argoclima) for ArgoClima HVAC devices.
- The [Basic Profiles transformation](/addons/transformations/basicprofiles), which provides a list of useful profiles and transformations.
- The [CP750 binding](/addons/bindings/cp750) to communicate with a CP750, a common sound processor used in cinemas.
- The [Emotiva binding](/addons/bindings/emotiva) integrated Emotiva AV processors using the Emotiva Network Remote Control protocol.
- The [Ephemeris binding](/addons/bindings/ephemeris) which provides access to openHAB Core's Ephemeris feature through Items.
- The [Freeathome binding](/addons/bindings/freeathome) is a new binding for controlling free@home devices from ABB / Busch-Jaeger.
- The [Freecurrency binding](/addons/bindings/freecurrency) allows converting between different currencies and makes full use of the UoM currency capability.
- The [French Government Energy Data binding](/addons/bindings/frenchgovtenergydata) provides regulated electricity prices in France.
- The [GridBox binding](/addons/bindings/gridbox) for connecting to the Viessmann GridBox.
- The [Growatt binding](/addons/bindings/growatt) for Growatt solar inverters.
- The [IoTaWatt binding](/addons/bindings/iotawatt) integrated IoTaWatt Open WiFi Electric Power Monitor into openHAB.
- The [MfFan binding](/addons/bindings/mffan) enables communication between openHAB and "Modern Forms" or "WAC Lighting" WIFI connected, smart, ceiling fans.
- The [PanasonicBDP](/addons/bindings/panasonicbdp) for Panasonic Blu-ray players.
- The [PegelOnline binding](/addons/bindings/pegelonline) allows to observe water levels from German rivers.
- The [RadioBrowser binding](/addons/bindings/radiobrowser) to navigate and find internet radio broadcasts.
- The [Saicismart binding](/addons/bindings/saicismart) supports reading out vehicle data of cars running the iSMART system from SAIC.
- The [Salus binding](/addons/bindings/salus) facilitates seamless integration between openHAB and Salus Cloud.
- The [SiemensHVAC binding](/addons/bindings/hvac) provides support for the Siemens HVAC controller ecosystem, and the Web Gateway interface OZW672.
- The [Solar Forecast binding](/addons/bindings/solarforecast) to interface two different free photovoltaic forecast services.
- The [Sungrow binding](/addons/bindings/sungrow) is a Modbus binding that integrates Sungrow inverters.
- The [TeslaPowerwall binding](/addons/bindings/teslapowerwall) enables the capture of key data from a Tesla Powerwall 2 into openHAB.
- The [Whisper Speech-to-Text voice add-on](/addons/voice/whisperstt) provides a new offline voice recognition service for openHAB using OpenAI's Whisper model.

But not only were new bindings added, some existing bindings also received massive improvements:

@jlaur ???

## openHABian Enhancements

_Ethan Dye ([@ecdye](https://github.com/ecdye)), openHABian Maintainer_

In openHABian, we've made a couple of under the hood enhancements to provide better support for the users running openHABian:

- Our latest image is now based on Bookworm, the most recent release of Debian/Raspberry Pi OS
- Support for the new Raspberry Pi 5 has been added.
- 64-bit support is now official, [check the docs](/docs/installation/openhabian.html#64-bit) for some caveats on running 64-bit vs 32-bit.

## Documentation Enhancements

As you might have already noticed when taking a look at the 4.2.0 documentation, we have made some changes to the documentation structure.

The first, most obvious change is the new structure of the sidebar:

<div align="center" class="row">
  <img style="max-width: 35%;" src="/uploads/2024-07-07-openhab-4-2-release/docs-sidebar-old.png"/>
  <img style="max-width: 35%;" src="/uploads/2024-07-07-openhab-4-2-release/docs-sidebar-new.png"/>
</div>

As you can see, we now have collapsible sections, which makes the sidebar much more compact and easier to navigate.
Big thanks to Stefan Höhn ([@stefan-hoehn](https://github.com/stefan-hoehn)) for his work on the sidebar!

The second change is the reorganization of the Main UI-related documentation.

The content of the old Settings section has been replaced by a new Main UI section, which now contains detailed documentation about most Main UI pages and follows the structure of Main UI itself.
This documentation is also rendered inside the [Integrated Help Features of Main UI](/blog/2023-12-22-openhab-4-1-release.html#integrated-help-features), which have been introduced in openHAB 4.1.

# Enjoy and Get in Touch!

We hope that you like the new release as much as we do - as always our [community forum](https://community.openhab.org/) is there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
