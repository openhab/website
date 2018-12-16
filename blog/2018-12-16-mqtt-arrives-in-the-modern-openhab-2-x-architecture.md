---
layout: BlogPost
category: blog
title: MQTT Arrives in the Modern openHAB 2.x Architecture
author: David Gräff
date: '2018-12-16T13:35:12+01:00'
previewimage: /uploads/mqttblog.jpg
tags:
  - mqtt
excerpt: >-
  The new MQTT bindings allow an easy point and click configuration to include
  your MQTT capable device into openHAB. If your device follows any supported
  MQTT convention, it got even simpler with full auto-discovery of all device
  capabilities.
---
If you haven't heard about MQTT yet, it is probably time to have a [look](https://en.wikipedia.org/wiki/MQTT). Quoting Wikipedia:

> "MQTT (Message Queuing Telemetry Transport) is an ISO standard (ISO/IEC PRF 20922)[2] publish-subscribe-based messaging protocol. [&hellip;] It is designed for connections with remote locations where a "small code footprint" is required or the network bandwidth is limited.  [&hellip;]
> 
> An MQTT system consists of clients communicating with a server, often called a "broker". A client may be either a publisher of information or a subscriber. Each client can connect to the broker.
> 
> Information is organized in a hierarchy of topics."

![MQTT Overview](esh_mqtt-MQTT-Overview.png "MQTT Overview with Broker and clients")

In recent years MQTT got a lot of attention for the Internet of Things,
Maker and DIY culture as well as home automation purposes.
Mainly because of its simplicity and its many client and server implementations.

## MQTT in openHAB 1.x and up to 2.3

Let us wrap up a bit of history to understand what has changed.
openHAB had quite powerful MQTT support for its time in the 1.x days.

First you would have defined one or multiple MQTT brokers in a service configuration file.
In a next step some lines like the following would have been added to your .item file:

```
Switch mySwitch {mqtt="<[mybroker:home/office/lamp:state:default],>[mybroker:home/office/lamp/set:command:*]"}
```

What you see above is an item, bound to a MQTT topic as the source for the item state.

A command topic is defined for the switch item, used when the switch is turned.
What happens on the MQTT level for the command topic is:

1. The target device **subscribes** to the command topic `home/office/lamp/set`:
![MQTT Command Topic Subscribe](/uploads/esh_mqtt-mqttpublishsubscribe1.png "MQTT Command Topic Subscribe")
2. openHAB **publishes** via the MQTT connection to the command topic `home/office/lamp/set`:
![MQTT Command Topic Publish](/uploads/esh_mqtt-mqttpublishsubscribe2.png "MQTT Command Topic Publish")

MQTT doesn't restrict you on what to publish as topic values and it is not part of the standard how to express a boolean or enumeration value.
Some vendors use xml, some use json structured data and some just send plain strings like "1" or "ON".

The MQTT binding considered that from the beginning and offered to apply a transformation for received (and published) messages.

If your water meter for example sends JSON encoded data:

```json
{
   device: {
      meters: [
         { value: 2 }
      ]
   }
}
```
Have a look at this corresponding `Number` item, where a JSONPATH is used to extract the value of interest:

`Number waterConsumption "consum [%d]" {mqtt="<[mybroker:myHome/watermeter:state:$.device.meters[0].value]"}`

Unfortunately the MQTT support did not evolve much while openHAB migrated to a new architecture for 2.x.

* It is not possible to use Paper UI at all to define MQTT brokers.
* You can not graphically define MQTT linked Things and Channels.
* And your feedback for a configuration problem narrows down to skimming through log files.

Up until now, where some fundamental changes found their way into the codebase.

## MQTT in openHAB 2.4

The new MQTT architecture has been realized in an easy extensible modular way by 3 independent extensions.
They are fully test covered to live up to the high coding standards of openHAB.

I will now take you on a journey of exploring all the new features.

### MQTT Broker

When it comes to MQTT enabled devices, like your WiFi wall plug or custom Arduino or ESP8266 solution,
you first need to take care of a very central aspect, the MQTT broker.

Configuring the MQTT broker connection is so essential for a good MQTT support,
that you can now finally do this in a graphical fashion:

[TODO picture of paperui: manually define a MQTT broker connection]
[TODO picture of paperui: inbox, showing a found MQTT broker]

So to wrap it up: MQTT can be enabled for your network by
(1) installing, (2) configuring and (3) setting up a broker server next to your openHAB software
and (4) adding the Broker Thing in Paper UI. Right?

Actually, it is even simpler. openHAB comes with an embedded MQTT broker now:

![Install embedded MQTT Broker](/uploads/esh_embedded_install.png "Install embedded MQTT Broker")

All you have to do is installing the add-on in Paper UI to have a working
MQTT broker, ready to use.

You can configure the broker in the service section of PaperUI (or via text files as usual):

![Configure embedded MQTT Broker](/uploads/esh_embedded_configure.png "Configure embedded MQTT Broker")

#### Broker Connection Status

Internally the extension knows what is going on and why a broker connection fails.
May it be wrong credentials, a denied tcp connection (i.e. firewall) or a maximum connection limit.

The former MQTT implementation knew about the reason as well. But instead of only
logging it, the reason is now directly presented to you via the Thing status:

[TODO picture of paperui broker connection thing offline status]

This also means, the status is available for the automation rule engine to e.g.
react on a failing broker connection.

#### System Broker Connections for openHAB Distributions

This section is targeting distributors.
You may skip to the next exiting feature of MQTT Thing auto-discovery if you are not interested in bundling openHAB.

It is crucial to be able to pre-configure openHAB to offer a seamless integration
of pre-installed extensions and other 3rd-party software like an MQTT broker.

Like in the versions before, if you pre-install a MQTT broker like Mosquitto,
you can tell openHAB about it via a service configuration file. 

Instead of populating a "mqtt.conf" file, you are now creating a "etc/whatever-name.cfg" file that contains the following lines:

```
service.pid="org.eclipse.smarthome.mqttbroker"
name="A mosquitto local installation"
username="username"
password="password"
clientID="localClient123"
host="127.0.0.1"
secure=true
```

Those pre-defined connections are called system broker connections.
This is the equivalence of using Paper UI for configuring the service:

![Manage system broker connections](/uploads/esh_system_connection_manage.png "Manage system broker connections")

![Add system broker connection](/uploads/esh_system_connection_add.png "Add system broker connection")

Be aware that this adds the broker to the users Inbox, but does not create a Broker Thing on its own.

### Auto-Discovery

The MQTT standard does not enforce any topic layout or topic value format. 
A smart light vendor can decide to publish his lights under a "vendorname/deviceID/light" MQTT topic
or use a totally different layout like "light/vendorname/deviceid".

People even disagree about the value format, sometimes it is "ON", sometimes "1" or "true".
Did you know that for Filipinos a switched-on light is "OPEN"?
And it doesn't even need to be English.

And that is why MQTT topic and format conventions got established amongst the IoT community. 
The new MQTT Things extension supports two conventions out-of-the-box:

* The Homie 3.x specification: This MQTT convention defines the layout of MQTT topics and the value format is discribed via "attribute topics".
* The HomeAssistant MQTT Components specification: The related documents describe common components like a Light, a Switch, a Fan, an Air-Conditioner and so on.

Because the topic structure is known, the MQTT Things extension is able to provide auto-discovery and mapping of MQTT topics to OpenHAB Things and Channels.

[picture of paperui inbox]

If you setup your next Home-Automation gadget, consider flashing it with a *Homie 3.x* compatible firmware and it will work with OpenHAB right away.

### MQTT Things

It cannot be stressed enough, to consider changing existing MQTT client devices to a MQTT convention like the mentioned *Homie 3.x* convention.
That might not be possible in some cases though. 

It is always possible to create a manual MQTT Thing by selecting the MQTT broker Bridge Thing and a Thing name:

[TODO picture of paperui manual MQTT Thing creation]

By adding Channels to your Thing, you actually bind MQTT topics to your OpenHAB world.
The following channel types are supported:

* String: This channel can show the received text on the given topic and can send text to a given topic.
* Number: This channel can show the received number on the given topic and can send a number to a given topic. It can have min, max and step values.
* Dimmer: This channel handles numeric values as percentages. It can have min, max and step values.
* Contact: This channel represents an open/close (on/off) state of a given topic.
* Switch: This channel represents an on/off state of a given topic and can send an on/off value to a given topic. This channel takes a configuration for the ON and OFF state, because some people use "1" and "0", some "true" and "false" and so on.
* Color: This channel handles color values in RGB and HSB format.
* DateTime: This channel handles date/time values.
* Image: Show images like bmp, jpeg, png and other supported image formats by publishing them as binary stream over MQTT.
* Location: This channel handles location values like GPS coordinates.

[TODO: picture of paperui example Switch channel config page]

Each channel supports a transformation pattern to extract a state from a structured response like JSON.
An example would be the pattern `JSONPATH:$.device.status.temperature` for an
incoming MQTT message of `{device: {status: { temperature: 23.2 }}}`.

### MQTT for Your Own Binding/Extension

Many companies, including Amazon, Google and Microsoft with their respective voice assistants are providing a MQTT based service interaction.

You are encouraged to a have a look at the `MQTTBrokerConnection` class and companion APIs in the `org.eclipse.smarthome.io.transport.mqtt` bundle to implement your next MQTT based binding.

### Configuration via Text Files instead of Paper UI

The extensions discussed here are not taking away the possibilities to configure via text files, like in the following example:

*demo.thing* file:
```
content
```

*demo.item* file:
```
content
```

## Conclusion

The new MQTT bindings allow an easy point and click configuration to include your
MQTT capable device into openHAB. If your device follows any supported MQTT convention,
it got even simpler with full auto-discovery of all device capabilities. At the same
time all advanced requirements that the community brought up during development,
could be considered.

This is a contribution by an external author, and I feel the need to talk a few seconds about my motivation.

I think, that a home-automation framework should be simple to configure.
I'm talking about a graphical interface to install, enable and disable plugins,
to setup plugins in a graphical fashion and to control provided functionality
right after everything was configured.

That is why I got caught by the openHAB 2 development, when Paper UI got introduced.
The [community](https://community.openhab.org/) was amazing, super friendly and welcoming when I asked my first questions on the forum.

The many issues appearing weekly, over and over, with the openHAB 1.x MQTT binding
got me thinking. It was just time that MQTT support arrives in a openHAB 2 compatible fashion.

I am really happy how this support turned out and I hope you will find it as useful as I do and that MQTT feels like a first class citizen now.

If you have any comments on how we as a community can improve the support or covering even more use-cases, head over to the [discussion forum](https://community.openhab.org/).
