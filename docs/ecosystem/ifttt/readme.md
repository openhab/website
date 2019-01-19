---
title: IFTTT Integration
type: io
source: https://github.com/openhab/website/blob/master/docs/ecosystem/ifttt/readme.md
meta:
  - name: og:title
    content: IFTTT Integration
  - name: og:description
    content: "openHAB users can take advantage of IFTTT to realize even more use cases in their smart home!"
---

# IFTTT Integration for openHAB

[If This Then That (IFTTT)](https://ifttt.com) is a very popular web-based service that allows users to create "applets", which can combine different web services into powerful automation rules. 
With its [hundreds of services](https://ifttt.com/services), there are limitless new creative options: Be notified through text-to-speech if you are receive a DM on twitter, be warned through your lights if your favorite stock price falls below a certain threshold or put your house in away-mode when you turn on the ignition of your car - you can get further inspiration by browsing through existing applets.

openHAB users can take advantage of IFTTT to realize even more use cases in their smart home! 

Besides the new kinds of integration possibilities, IFTTT is also a good start for new openHAB users as it makes the creation of rules dead simple - no need to do any scripting, no complex setup routines, it all works through a few mouse clicks!

# Getting Started

## Requirements
* [openHAB Cloud Connector](https://www.openhab.org/addons/integrations/openhabcloud/#openhab-cloud-connector) configured using [myopenHAB.org](https://myopenHAB.org)
* [IFTTT](https://ifttt.com/join) account

## Configuration

**1. Connect openHAB with IFTTT**

IFTTT is available to all our users through the myopenHAB service. 
Activating the integration is easy. 
Just log in to your IFTTT account and activate the [openHAB service](https://ifttt.com/openhab). 
You will be forwarded to the [myopenHAB.org website](http://www.myopenhab.org/) to authorize the IFTTT service connection. 
You can delete the IFTTT authorization token in the myopenHAB Applications section at any time.

**2. Expose specific items to IFTTT**

Before you start creating IFTTT applets you need to make sure that you configured your local openHAB runtime to expose certain items to myopenHAB.org. 
Only those items will be visible to IFTTT. 
Read here [how to expose items to myopenHAB.org](https://www.openhab.org/addons/integrations/openhabcloud/#configuration). 
You will also be able to send commands to those items from IFTTT Applets. 

**Important:** Items will appear in myopenHAB and thus in IFTTT only after at least one state update has been received by myopenHAB.org from your local openHAB runtime. 

This can be done by for instance creating a simple rule:

```
rule "Set initial values IFTTT items"
when
	System started
then
	createTimer(now.plusSeconds(160)) [|
		logInfo("RULE", "Set initial values IFTTT items")
		postUpdate(YourItem, 0)
	]
end
```

**Sending notifications from openHAB to your mobile device via IFTTT**

If you are using iOS or Android, you can use IFTTT to send notifications from your openHAB runtime to your device running iOS or Android. 
Read more about this [here](https://community.openhab.org/t/openhab-send-sensor-notification-to-ios-android-using-ifttt/24725).


<EditPageLink/>
