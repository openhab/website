# Concepts

When first thinking about your home automation system, it may be helpful to bear in mind that there are two ways of thinking about or viewing your system; the physical view and the functional view.

The physical view will be familiar to you.
This view focuses on the devices in your system, the connections between these devices (e.g. wires, Z-Wave, WiFi hardware), and other physical aspects of the system.

The functional view might be a new concept for you.
The functional view focuses on how information about the devices, connections, and so on, is represented in user interfaces.
The functional view includes focusing on how rules effect representations of physical devices in software.
 Perhaps most important to you, the functional view focuses on how an action in a user interface affects the software associated with the physical device it represents.

It is a bit of an over-simplification, but you can think of the physical view as being a view of the 'real world', and the functional view being a view of the 'software world'.

### Things, Channels, Bindings, Items and Links

**Things** are entities that can be physically added to a system.
Things may provide more than one function (for example, a Z-Wave multi-sensor may provide a motion detector and also measure room temperature).
Things do not have to be physical devices; they can also represent a web service or any other manageable source of information and functionality.

Things expose their capabilities through **Channels**.
Whether an installation takes advantage of a particular capability reflected by a Channel depends on whether it has been configured to do so.
When you configure your system, you do not necessarily have to use every capability offered by a Thing.
You can find out what Channels are available for a Thing by looking at the documentation of the Thing's Binding.

**Bindings** can be thought of as software adapters, making Things available to your home automation system.
They are add-ons that provide a way to link Items to physical devices.
They also abstract away the specific communications requirements of that device so that it may be treated more generically by the framework.

**Items** represent capabilities that can be used by applications, either in user interfaces or in automation logic.
Items have a **State** and they may receive commands.

The glue between Things and Items are **Links**.
A Link is an association between exactly one Channel and one Item.
If a Channel is linked to an Item, it is "enabled", which means that the capability the Item represents is accessible through that Channel.
Channels may be linked to multiple Items and Items may be linked to multiple Channels.

To illustrate these concepts, consider the example below of a two-channel actuator that controls two lights:

![](./images/concepts/thing-devices-1.png)

The actuator is a Thing that might be installed in an electrical cabinet.
It has a physical address and it must be configured in order to be used (remember the physical view introduced at the beginning of this article).

In order for the user to control the two lights, he or she access the capability of the actuator Thing (turning on and off two separate lights) through two Channels, that are Linked to two switch Items presented to the user through a user interface.

## Things

Things are the entities that can physically be added to a system and which can potentially provide many functionalities in one.
It is important to note that things do not have to be devices, but they can also represent a web service or any other manageable source of information and functionality.
From a user perspective, they are relevant for the setup and configuration process, but not for the operation.

Things can have configuration properties, which can be optional or mandatory.
Such properties can be basic information like an IP address, an access token for a web service or a device specific configuration that alters its behavior.

#### Channels

Things provide "channels", which represent the different functions the thing provides.
Where the thing is the physical entity or source of information, the channel is a concrete function from this thing.
A physical light bulb might have a color temperature channel and a color channel, both providing functionality of the one light bulb thing to the system.
For sources of information the thing might be the local weather with information from a web service with different channels like temperature, pressure and humidity.

Channels are linked to items, where such links are the glue between the virtual and the physical layer.
Once such a link is established, a thing reacts on events sent for an item that is linked to one of its channels.
Likewise, it actively sends out events for items linked to its channels.

#### Bridges

A special type of thing is a "bridge".
Bridges are things that need to be added to the system in order to gain access to other things.
A typical example of a bridge is an IP gateway for some non-IP based home automation system or a web service configuration with authentication information which every thing from this web service might need.

#### Discovery

As many things can be automatically discovered, there are special mechanisms available that deal with the handling of [automatically discovered things](discovery.html).


### Thing Status

Each thing has a status object, which helps to identify possible problems with the device or service.
The following table provides an overview of the different statuses:

| Status        | Description |
|---------------|-------------|
| UNINITIALIZED | This is the initial status of a thing, when it is added or the framework is being started. This status is also assigned, if the initializing process failed or the binding is not available. Commands, which are sent to channels will not be processed. |
| INITIALIZING  | This state is assigned while the binding initializes the thing. It depends on the binding how long the initializing process takes. Commands, which are sent to channels will not be processed. |
| UNKNOWN       | The handler is fully initialized but due to the nature of the represented device/service it cannot really tell yet whether the thing is ONLINE or OFFLINE. Therefore the thing potentially might be working correctly already and may or may not process commands. But the framework is allowed to send commands, because some radio-based devices may go ONLINE if a command is sent to them. The handler should take care to switch the thing to ONLINE or OFFLINE as soon as possible. |
| ONLINE        | The device/service represented by a thing is assumed to be working correctly and can process commands. |
| OFFLINE       | The device/service represented by a thing is assumed to be not working correctly and may not process commands. But the framework is allowed to send commands, because some radio-based devices may go back to ONLINE, if a command is sent to them. |
| GONE          | The device has been removed from the bridge or the network to which it belongs and is no longer available for use. The user can now remove the thing from the system. |
| REMOVING      | The device/service represented by a thing should be removed, but the binding did not confirm the deletion yet. Some bindings need to communicate with the device to unpair it from the system. Thing is probably not working and commands can not be processed. |
| REMOVED       | This status indicates that the device/service represented by a thing was removed from the external system after the REMOVING was initiated by the framework. Usually this status is an intermediate status because the thing gets removed from the database after this status was assigned. |

The statuses UNINITIALIZED, INITIALIZING and REMOVING are set by the framework, where as the statuses UNKNOWN, ONLINE and OFFLINE are assigned from a binding.

Additionally, the REMOVED state is set by the binding to indicate that the removal process has been completed, i.e. the thing must have been in REMOVING state before.

#### Status Transitions

The following diagram shows the allowed status transitions:

![Status Transitions](./images/concepts/diagrams/status_transitions.png)

The initial state of a thing is UNINITIALIZED.
From UNINITIALIZED the thing goes into INITIALIZING.
If the initialization fails, the thing goes back to UNINITIALIZED.
If the initialization succeeds, the binding sets the status of the thing to UNKNOWN, ONLINE or OFFLINE, which all mean that the thing handler is fully initialized.
From one of this states the thing can go back into UNINITIALIZED, REMOVING or REMOVED.
The statuses REMOVING and REMOVED can also be reached from any of the other states.

### Status Details

A status is detailed further with a status detail object.
The following table lists the different status details for each status:

<table>
<tr valign="top"><td rowspan="6">UNINITIALIZED</td><td>NONE</td><td>No further status details available.</td></tr>
<tr valign="top">                                  <td>HANDLER_MISSING_ERROR</td><td>The handler cannot be initialized, because the responsible binding is not available or started.</td></tr>
<tr valign="top">                                  <td>HANDLER_REGISTERING_ERROR</td><td>The handler failed in the service registration phase.</td></tr>
<tr valign="top">                                  <td>HANDLER_CONFIGURATION_PENDING</td><td>The handler is registered but can not be initialized caused by missing configuration parameters.</td></tr>
<tr valign="top">                                  <td>HANDLER_INITIALIZING_ERROR</td><td>The handler failed in the initialization phase.</td></tr>
<tr valign="top">                                  <td>BRIDGE_UNINITIALIZED</td><td>The bridge associated with this thing is not initialized.</td></tr>
<tr valign="top"><td>INITIALIZING</td>             <td>NONE</td><td>No further status details available.</td></tr>
<tr valign="top"><td>UNKNOWN</td>                  <td>NONE</td><td>No further status details available.</td></tr>
<tr valign="top"><td rowspan="2">ONLINE</td>       <td>NONE</td><td>No further status details available.</td></tr>
<tr valign="top">                                  <td>CONFIGURATION_PENDING</td><td>The thing is waiting to transfer configuration information to a device. Some bindings need to communicate with the device to make sure the configuration is accepted.</td></tr>
<tr valign="top"><td rowspan="6">OFFLINE</td>      <td>NONE</td><td>No further status details available.</td></tr>
<tr valign="top">                                  <td>COMMUNICATION_ERROR</td><td>Error in communication with the device. This may also be only a temporary error.</td></tr>
<tr valign="top">                                  <td>CONFIGURATION_ERROR</td><td>An issue with the configuration of a thing prevents the communication with the represented device or service. This issue might be solved by reconfiguring the thing.</td></tr>
<tr valign="top">                                  <td>BRIDGE_OFFLINE</td><td>Assuming the thing to be offline because the corresponding bridge is offline.</td></tr>
<tr valign="top">                                  <td>FIRMWARE_UPDATING</td><td>The thing is currently operating a firmware update.</td></tr>
<tr valign="top">                                  <td>DUTY_CYCLE</td><td>The thing is currently in DUTY_CYCLE state, which means it is blocked for further usage.</td></tr>
<tr valign="top"><td>REMOVING</td>                 <td>NONE</td><td>No further status details available.</td></tr>
<tr valign="top"><td>REMOVED</td>                  <td>NONE</td><td>No further status details available.</td></tr>
</table>

#### Status Description 

To provide additional information about the current status a description is used.
The status description is to be specified by the binding.
This description can be used for debugging purposes and should not be presented to the user, as it might contain unreadable technical information (e.g. an HTTP status code, or any other protocol specific information, which helps to identify the current problem).

#### Thing Status API

The Thing interface defines a method `getStatusInfo()` to retrieve the current status of the thing.
The following code shows how to print the status of each thing into the console:

```java
Collection<Thing> things = thingRegistry.getAll();
for (Thing thing : things) {
    ThingStatusInfo statusInfo = thing.getStatusInfo();
    switch (statusInfo.getStatus()) {
        case ONLINE:
            System.out.println("Thing is online");
            break;
        case OFFLINE:
            System.out.println("Thing is offline");
            break;
        default:
            System.out.println("Thing is in state " + statusInfo.getStatus());
            break;
    }
    System.out.println("Thing status detail: " + statusInfo.getStatusDetail());
    System.out.println("Thing status description: " + statusInfo.getDescription());
}
```


## Items

Eclipse SmartHome has a strict separation between the physical world (the "things", see below) and the application, which is built around the notion of "items" (also called the virtual layer).

Items represent functionality that is used by the application (mainly user interfaces or automation logic).
Items have a state and are used through events.
  
The following item types are currently available (alphabetical order):

| Item Name          | Description | Command Types |
|--------------------|-------------|---------------|
| Color              | Color information (RGB) | OnOff, IncreaseDecrease, Percent, HSB |
| Contact            | Item storing status of e.g. door/window contacts | OpenClose |
| DateTime           | Stores date and time | - |
| Dimmer             | Item carrying a percentage value for dimmers | OnOff, IncreaseDecrease, Percent |
| Group              | Item to nest other items / collect them in groups | - |
| Image              | Holds the binary data of an image | - |
| Location           | Stores GPS coordinates | Point |
| Number             | Stores values in number format, takes an optional dimension suffix  | Decimal |
| Number:dimension | like Number, additional dimension information for unit support | Quantity |
| Player             | Allows to control players (e.g. audio players) | PlayPause, NextPrevious, RewindFastforward |
| Rollershutter      | Typically used for blinds | UpDown, StopMove, Percent |
| String             | Stores texts | String |
| Switch             | Typically used for lights (on/off) | OnOff |

### Group Items

Group items collect other items into groups.
Group items can themselves be members of other group items.
Cyclic membership is not forbidden but strongly not recommended.
User interfaces might display group items as single entries and provide navigation to its members.

Example for a Group item as a simple collection of other items:
```
    Group groundFloor
    Switch kitchenLight (groundFloor)
    Switch livingroomLight (groundFloor)
``` 

#### Derive Group State from Member Items

Group items can derive their own state from their member items.
To derive a state the group item must be constructed using a base item and a group function.
When calculating the state, group functions recursively traverse the group's members and also take members of subgroups into account.
If a subgroup however defines a state on its own (having base item & group function set) traversal stops and the state of the subgroup member is taken. 

Available group functions:

| Function           | Parameters                    | Base Item                                   | Description                                                                                                                                     |
|--------------------|-------------------------------|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| EQUALITY           | -                             | all                                     | Sets the state of the members if all have equal state. Otherwise UNDEF is set.                                                                  |
| AND, OR, NAND, NOR | activeState, passiveState | \all (must match active & passive state) | Sets the activeState, if the member state activeState evaluates to `true` under the boolean term. Otherwise the passiveState is set.|
| SUM, AVG, MIN, MAX | -                             | Number                                      | Sets the state according to the arithmetic function over all member states.                                                                     |
| COUNT              | regular expression          | Number                                      | Sets the state to the number of members matching the given regular expression with their states.                                                |
| LATEST, EARLIEST | - | DateTime | Sets the state to the latest/earliest date from all member states 


Examples for derived states on group items when declared in the item DSL:

- `Group:Number:COUNT(".*")` counts all members of the group matching the given regular expression, here any character or state (simply count all members).
- `Group:Number:AVG` calculates the average value over all member states which can be interpreted as `DecimalTypes`.
- `Group:Switch:OR(ON,OFF)` sets the group state to `ON` if any of its members has the state `ON`, `OFF` if all are off.    
- `Group:Switch:AND(ON,OFF)` sets the group state to `ON` if all of its members have the state `ON`, `OFF` if any of the group members has a different state than `ON`.
- `Group:DateTime:LATEST` sets the group state to the latest date from all its members states.

### State and Command Type Formatting

#### StringType

`StringType` objects store a simple Java String.

#### DateTimeType

`DateTimeType` objects are parsed using Java's `SimpleDateFormat.parse()` using the first matching pattern:

1. `yyyy-MM-dd'T'HH:mm:ss.SSSZ`
2. `yyyy-MM-dd'T'HH:mm:ss.SSSz`
3. `yyyy-MM-dd'T'HH:mm:ss.SSSX`
4. `yyyy-MM-dd'T'HH:mm:ssz`
5. `yyyy-MM-dd'T'HH:mm:ss`

Literal | Standard | Example
--------|----------|--------
z | General time zone | Pacific Standard Time; PST; GMT-08:00
Z | RFC 822 time zone | -0800
X | ISO 8601 time zone | -08; -0800; -08:00

#### DecimalType, PercentType

`DecimalType` and `PercentType` objects use Java's `BigDecimal` constructor for conversion.
`PercentType` values range from 0 to 100.

#### QuantityType

A numerical type which carries a unit in addition to its value.
The framework is capable of automatic conversion between units depending on the users locale settings.
See the concept on [Units of Measurement](units-of-measurement.html) for more details.

#### HSBType

HSB string values consist of three comma-separated values for hue (0-360°), saturation (0-100%), and value (0-100%) respectively, e.g. `240,100,100` for blue.

#### PointType

`PointType` strings consist of three `DecimalType`s separated by commas, indicating latitude and longitude in degrees, and altitude in meters respectively.

#### Enum Types

| Type                  | Supported Values        |
|-----------------------|-------------------------|
| IncreaseDecreaseType  | `INCREASE`, `DECREASE`  |
| NextPreviousType      | `NEXT`, `PREVIOUS`      |
| OnOffType             | `ON`, `OFF`             |
| OpenClosedType        | `OPEN`, `CLOSED`        |
| PlayPauseType         | `PLAY`, `PAUSE`         |
| RewindFastforwardType | `REWIND`, `FASTFORWARD` |
| StopMoveType          | `STOP`, `MOVE`          |
| UpDownType            | `UP`, `DOWN`            |

### A note on items which accept multiple state data types

There are a number of items which accept multiple state data types, for example `DimmerItem`, which accepts `OnOffType` and `PercentType`, `RollershutterItem`, which  accepts `PercentType` and `UpDownType`, or `ColorItem`, which accepts `HSBType`, `OnOffType` and `PercentType`.
Since an item has a SINGLE state, these multiple data types can be considered different views to this state.
The data type carrying the most information about the state is usually used to keep the internal state for the item, and other datatypes are converted from this main data type.
This main data type is normally the first element in the list returned by `Item.getAcceptedDataTypes()`.

Here is a short table demonstrating conversions for the examples above:

| Item Name     | Main Data Type | Additional Data Types Conversions |
|---------------|----------------|-----------------------------------|
| Color         | `HSBType`      | &bull; `OnOffType` - `OFF` if the brightness level in the `HSBType` equals 0, `ON` otherwise <br/> &bull; `PercentType` - the value for the brightness level in the `HSBType` |
| Dimmer        | `PercentType`  | `OnOffType` - `OFF` if the brightness level indicated by the percent type equals 0, `ON` otherwise |
| Rollershutter | `PercentType`  | `UpDownType` - `UP` if the shutter level indicated by the percent type equals 0, `DOWN` if it equals 100, and `UnDefType.UNDEF` for any other value|

## Thing Discovery

Many devices, technologies and systems can be automatically discovered on the network or browsed through some API. It therefore makes a lot of sense to use these features for a smart home solution.

In Eclipse SmartHome bindings therefore implement _Discovery Services_ for things, which provide _Discovery Results_. All _Discovery Results_ are regarded as suggestions to the user and are put into the _inbox_.

#### Background Discovery

A couple of discovery services support automatic discovery in the background, while for others a scan needs to be triggered manually.
Services that support background discovery usually have it enabled by default. 
It is possible to override this setting and deactivate background discovery for individual services by setting `discovery.<serviceid>:background=false`, where `serviceid` is usually identical to a binding id, e.g. the LIFX background discovery can be disabled through `discovery.lifx:background=false`.

### Inbox

The inbox holds a list of all discovered things (`DiscoveryResult`) from all active discovery services. A discovery result represents a discovered thing of a specific thing type, that could be instantiated as a thing. The result usually contains properties that identify the discovered things further like IP address or a serial number. Each discovery result also has a timestamp when it was added to or updated in the inbox and it may also contain a time to live, indicating the time after which it is be automatically removed from the inbox. 

Discovery results can either be ignored or approved, where in the latter case a thing is created for them and they become available in the application. If an entry is ignored, it will be hidden in the inbox without creating a thing for it. 

Eclipse SmartHome offers a service to automatically ignore discovery results in the inbox, whenever a thing is created manually, that represents the same thing, as the respective discovery result would create. 
This thing would either have the same thing UID or the value of its representation property is equal to the representation property's value in the discovery result.  This service is enabled by default but can be disabled by setting `org.eclipse.smarthome.inbox:autoIgnore=false`. 

#### Auto Approve

If the manual acceptence of discovery results by the user is not wished, it is possible to turn on the auto-approval feature of the inbox. 
In this case, every new entry gets automatically approved immediately (unless it has been marked as ignored as a duplicate).

The auto approval can be enabled by the setting `org.eclipse.smarthome.inbox:autoApprove=true`; the default is false.

## Audio & Voice

Audio and voice features are an important aspect of any smart home solution as it is a very natural way to interact with the user.

Eclipse SmartHome comes with a very modular architecture that enables all kinds of different use cases. At its core, there is the notion of an *audio stream*. Audio streams are provided by *audio sources* and consumed by *audio sinks*.  

![](./images/concepts/audio.png)

- *Audio Streams* are essentially a byte stream with a given *audio format*. They do not need to be limited in size, i.e. it is also allowed to have continuous streams, e.g. the input from a microphone or from an Internet radio station.
- *Audio Formats* define the container (e.g. WAV), encoding, bit rate, sample frequency and depth and the bit order (little or big endian).
- *Audio Sources* are services that are capable of producing audio streams. They can support different formats and provide a stream in a requested format upon request. Typical audio source services are microphones. Typically, a continuous stream is expected from them.
- *Audio Sinks* are services that accept audio streams of certain formats. Typically, these are expected to play the audio stream, i.e. they are some kind of speaker or media device.
- *Text-to-Speech* (TTS) services are similar to audio sources with respect to the ability to create audio streams. The difference is that they take a string as an input and will synthesize this string to a spoken text using a given voice. TTS services can provide information about the voices that they support and the locale that those voices are associated with. Each voice supports exactly one locale.
- *Speech-to-Text* (STT) services are similar to audio sinks, but they do not simply play back the stream, but convert it to a plain string. They provide information about supported formats and locales.

As plain text from an STT service is often not very useful, there is additionally the concept of a *human language interpreter*:

![](./images/concepts/hli.png)

A *Human Language Interpreter* takes a string as an input. It then derives actions from it (like sending commands to devices) and/or replies with a string, which opens the possibility to realize conversations. As such an interpreter is not directly linked to audio streams, but operates on strings only, this can be the basis for any kind of assistant, e.g. for chat bots using the console, XMPP, Twitter or other messaging services. 

Applications can dynamically choose which services to use, so that different sinks can be used for different use cases. Defaults can be set as a configuration for all those services in case an application does not ask for any specific service.
