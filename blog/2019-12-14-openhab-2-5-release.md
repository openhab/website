---
layout: BlogPost
category: blog
title: openHAB 2.5 Release
author: Kai Kreuzer
date: '2019-12-15T12:26:55+01:00'
previewimage: /uploads/lights.jpg
tags:
  - news
excerpt: >-
  A full year has passed since openHAB 2.4 and a lot has happened meanwhile. A
  new release is overdue and we are happy to announce the new 2.5 release to all
  of you today!
---
A full year has passed since openHAB 2.4 and a lot has happened meanwhile. A new release is overdue and we are happy to announce the new 2.5 release to all of you today!

<!-- more -->

I am sure that many users were awaiting this release since quite a while. In the past, we strived for having at least two releases per year, but we have skipped doing one in summer this year. The reason for this is that some major changes have taken place under the hood, which are not directly visible for users, but have quite some impact on all developers: We have completely changed the underlying build system. This resulted in much more effort than was initially anticipated and it took many months before maintainers and contributors were back to work on features and not on build- and IDE-related stuff. Nonetheless, we are happy that contributors can now much more easily work with alternative IDEs, such as IntelliJ and VisualStudio Code as this has been a frequent request in the past. Furthermore, the new build system will allow us to significantly speed up build times in future.

Another major refactoring that happened under the hood was the [re-integration of the Eclipse SmartHome code](https://community.openhab.org/t/the-road-ahead-reintegrating-esh/64670) into openHAB, which has been completed successfully and left us with a much simpler project and community setup and less dependencies.

Despite all those internal efforts, I am amazed at the long list of functional changes that the official release notes mention: There are 46 new add-ons included in the distro, which is almost one add-on per week since the last release - another huge step forward in terms of device support, making openHAB a greatly versatile integration platform.

As usual I won't go into all the details as I would recommend having a look at the release notes in detail. Instead, let me just mention a couple of additions:

### Ephemeris

### Tesla Binding

### Shelly Binding

## Apps and Integrations

Besides the work on the openHAB distribution, there was a lot of activity in other parts of the overall openHAB solution, which are worth to mention. I'd like to give the word to the according maintainers of the components:

### openHAB Alexa Skill

_Jeremy Setton, maintainer of the openHAB Alexa skill:_

The new Alexa skill supports Amazon’s latest Smart Home Skill API V3 which provides a much richer set of features to model devices for voice control. While the V2 version of the API allowed basic lighting, thermostat and lock control, the new API can model nearly anything, with native support for AV devices, security systems, scenes, as well as enhanced support for thermostats, locks and lighting/power devices. Most importantly, the skill also supports the flexible building block APIs extending voice control to any devices, from fans to complex appliances, such as washers, to blinds and doors, when associated with the latest semantic extensions feature. Finally, the new API introduces state reporting giving the ability to poll the current state of modeled devices in the Alexa mobile app.

The skill takes advantage of using openHAB metadata instead of tags. This allows a higher level of item customization exposed to Alexa. Existing tags will continue to work with the new skill, so users will not need to migrate their current configuration unless they wish to use the enhanced features that the new version of the skill provides. Additionally, it automatically streamlines the item configuration leveraging some of its properties, such type, state presentation and unit of measurement, along with the server regional settings.

It is available in all the currently supported Alexa skill’s languages and countries:

English (AU), English (CA), English (GB), English (IN), English (US), French (CA), French (FR), German (DE), Hindi (IN), Italian (IT), Japanese (JP), Portuguese (BR), Spanish (ES), Spanish (MX), Spanish (US)

The latest guide provides all the necessary information and examples to take advantage of these new features.

### openHAB iOS App

_Tim Müller-Seydlitz, maintainer of the openHAB iOS app:_

After a long period of inactivity, the IOS client has received a flurry of new activities bringing the application into the modern world.

While there are numerous changes and updates, by far the largest one is not something that will be immediately visible to end users, but is critically important for future development: the Objective-C based code was completely ported to Swift. The amount of code rework and rewrite for this task was enormous. With our codebase now in Apple’s preferred language, we have come up to par with the development on other platforms. We also laid the foundation for more enhancements of our iOS application and have recruited an active community of contributors.

The most visible change resulting out of this port to Swift was made possible immediately after the release of iOS 13. The iOS app now supports the beautiful Dark Mode.

Also, video support is enhanced by adding support for mjpeg. The accessibility is improved by handling changes in font size. We implemented haptic feedback and have added a search bar for items in the sitemap. The authentication process was enhanced and is now supporting mTLS client certificates.

### openHAB Android App

_Matthias Müller, maintainer of the openHAB Android app:_

t.b.d.

<p align="center"><img src="/uploads/android.png"/></p>

![Android app](/uploads/android.png)
