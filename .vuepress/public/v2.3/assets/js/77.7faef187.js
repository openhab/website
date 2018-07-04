(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{682:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[e._v('Eclipse SmartHome has a strict separation between the physical world (the "things", see below) and the application, which is built around the notion of "items" (also called the virtual layer).')]),a("p",[e._v("Items represent functionality that is used by the application (mainly user interfaces or automation logic).\nItems have a state and are used through events.")]),a("p",[e._v("The following item types are currently available (alphabetical order):")]),e._m(1),e._m(2),a("p",[e._v("Group items collect other items into groups.\nGroup items can themselves be members of other group items.\nCyclic membership is not forbidden but strongly not recommended.\nUser interfaces might display group items as single entries and provide navigation to its members.")]),a("p",[e._v("Example for a Group item as a simple collection of other items:")]),e._m(3),e._m(4),a("p",[e._v("Group items can derive their own state from their member items.\nTo derive a state the group item must be constructed using a base item and a group function.\nWhen calculating the state, group functions recursively traverse the group's members and also take members of subgroups into account.\nIf a subgroup however defines a state on its own (having base item & group function set) traversal stops and the state of the subgroup member is taken.")]),a("p",[e._v("Available group functions:")]),e._m(5),a("p",[e._v("Examples for derived states on group items when declared in the item DSL:")]),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),e._m(15),e._m(16),a("p",[e._v("A numerical type which carries a unit in addition to its value.\nThe framework is capable of automatic conversion between units depending on the users locale settings.\nSee the concept on "),a("router-link",{attrs:{to:"units-of-measurement.html"}},[e._v("Units of Measurement")]),e._v(" for more details.")],1),e._m(17),e._m(18),e._m(19),e._m(20),e._m(21),e._m(22),e._m(23),e._m(24),a("p",[e._v("Here is a short table demonstrating conversions for the examples above:")]),e._m(25),e._m(26),a("p",[e._v('Sometimes additional information is required to be attached to items for certain use-cases.\nThis could be e.g. an application which needs some hints in order to render the items in a generic way or an integration with voice controlled assistants or any other services which access the items and need to understand their "meaning".')]),a("p",[e._v("For this purpose, such meta-information can be attached to items using disjunct namespaces so they won't conflict with each other.\nEach metadata entry has a main value and optionally additional key/value pairs.\nThere can be metadata attached to an item for as many namespaces as desired, like in the following example:")]),e._m(27),e._m(28),e._m(29),e._m(30),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Item Name")]),a("th",[e._v("Description")]),a("th",[e._v("Command Types")])])]),a("tbody",[a("tr",[a("td",[e._v("Color")]),a("td",[e._v("Color information (RGB)")]),a("td",[e._v("OnOff, IncreaseDecrease, Percent, HSB")])]),a("tr",[a("td",[e._v("Contact")]),a("td",[e._v("Item storing status of e.g. door/window contacts")]),a("td",[e._v("OpenClose")])]),a("tr",[a("td",[e._v("DateTime")]),a("td",[e._v("Stores date and time")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("Dimmer")]),a("td",[e._v("Item carrying a percentage value for dimmers")]),a("td",[e._v("OnOff, IncreaseDecrease, Percent")])]),a("tr",[a("td",[e._v("Group")]),a("td",[e._v("Item to nest other items / collect them in groups")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("Image")]),a("td",[e._v("Holds the binary data of an image")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("Location")]),a("td",[e._v("Stores GPS coordinates")]),a("td",[e._v("Point")])]),a("tr",[a("td",[e._v("Number")]),a("td",[e._v("Stores values in number format, takes an optional dimension suffix")]),a("td",[e._v("Decimal")])]),a("tr",[a("td",[e._v("Number:<dimension>")]),a("td",[e._v("like Number, additional dimension information for unit support")]),a("td",[e._v("Quantity")])]),a("tr",[a("td",[e._v("Player")]),a("td",[e._v("Allows to control players (e.g. audio players)")]),a("td",[e._v("PlayPause, NextPrevious, RewindFastforward")])]),a("tr",[a("td",[e._v("Rollershutter")]),a("td",[e._v("Typically used for blinds")]),a("td",[e._v("UpDown, StopMove, Percent")])]),a("tr",[a("td",[e._v("String")]),a("td",[e._v("Stores texts")]),a("td",[e._v("String")])]),a("tr",[a("td",[e._v("Switch")]),a("td",[e._v("Typically used for lights (on/off)")]),a("td",[e._v("OnOff")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"group-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Group Items")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[e._v("    "),a("span",{attrs:{class:"token keyword"}},[e._v("Group")]),e._v(" "),a("span",{attrs:{class:"token class-name"}},[e._v("groundFloor")]),e._v("\n    "),a("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),a("span",{attrs:{class:"token class-name"}},[e._v("kitchenLight")]),a("span",{attrs:{class:"token tag"}},[e._v(" (groundFloor)")]),e._v("\n    "),a("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),a("span",{attrs:{class:"token class-name"}},[e._v("livingroomLight")]),a("span",{attrs:{class:"token tag"}},[e._v(" (groundFloor)")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"derive-group-state-from-member-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#derive-group-state-from-member-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Derive Group State from Member Items")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Function")]),a("th",[e._v("Parameters")]),a("th",[e._v("Base Item")]),a("th",[e._v("Description")])])]),a("tbody",[a("tr",[a("td",[e._v("EQUALITY")]),a("td",[e._v("-")]),a("td",[e._v("<all>")]),a("td",[e._v("Sets the state of the members if all have equal state. Otherwise UNDEF is set.")])]),a("tr",[a("td",[e._v("AND, OR, NAND, NOR")]),a("td",[e._v("<activeState>, <passiveState>")]),a("td",[e._v("<all> (must match active & passive state)")]),a("td",[e._v("Sets the <activeState>, if the member state <activeState> evaluates to "),a("code",[e._v("true")]),e._v(" under the boolean term. Otherwise the <passiveState> is set.")])]),a("tr",[a("td",[e._v("SUM, AVG, MIN, MAX")]),a("td",[e._v("-")]),a("td",[e._v("Number")]),a("td",[e._v("Sets the state according to the arithmetic function over all member states.")])]),a("tr",[a("td",[e._v("COUNT")]),a("td",[e._v("<regular expression>")]),a("td",[e._v("Number")]),a("td",[e._v("Sets the state to the number of members matching the given regular expression with their states.")])]),a("tr",[a("td",[e._v("LATEST, EARLIEST")]),a("td",[e._v("-")]),a("td",[e._v("DateTime")]),a("td",[e._v("Sets the state to the latest/earliest date from all member states")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v('Group:Number:COUNT(".*")')]),e._v(" counts all members of the group matching the given regular expression, here any character or state (simply count all members).")]),a("li",[a("code",[e._v("Group:Number:AVG")]),e._v(" calculates the average value over all member states which can be interpreted as "),a("code",[e._v("DecimalTypes")]),e._v(".")]),a("li",[a("code",[e._v("Group:Switch:OR(ON,OFF)")]),e._v(" sets the group state to "),a("code",[e._v("ON")]),e._v(" if any of its members has the state "),a("code",[e._v("ON")]),e._v(", "),a("code",[e._v("OFF")]),e._v(" if all are off.")]),a("li",[a("code",[e._v("Group:Switch:AND(ON,OFF)")]),e._v(" sets the group state to "),a("code",[e._v("ON")]),e._v(" if all of its members have the state "),a("code",[e._v("ON")]),e._v(", "),a("code",[e._v("OFF")]),e._v(" if any of the group members has a different state than "),a("code",[e._v("ON")]),e._v(".")]),a("li",[a("code",[e._v("Group:DateTime:LATEST")]),e._v(" sets the group state to the latest date from all its members states.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"state-and-command-type-formatting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-and-command-type-formatting","aria-hidden":"true"}},[this._v("#")]),this._v(" State and Command Type Formatting")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"stringtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stringtype","aria-hidden":"true"}},[this._v("#")]),this._v(" StringType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("StringType")]),this._v(" objects store a simple Java String.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"datetimetype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datetimetype","aria-hidden":"true"}},[this._v("#")]),this._v(" DateTimeType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("DateTimeType")]),this._v(" objects are parsed using Java's "),t("code",[this._v("SimpleDateFormat.parse()")]),this._v(" using the first matching pattern:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("code",[this._v("yyyy-MM-dd'T'HH:mm:ss.SSSZ")])]),t("li",[t("code",[this._v("yyyy-MM-dd'T'HH:mm:ss.SSSz")])]),t("li",[t("code",[this._v("yyyy-MM-dd'T'HH:mm:ss.SSSX")])]),t("li",[t("code",[this._v("yyyy-MM-dd'T'HH:mm:ssz")])]),t("li",[t("code",[this._v("yyyy-MM-dd'T'HH:mm:ss")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Literal")]),a("th",[e._v("Standard")]),a("th",[e._v("Example")])])]),a("tbody",[a("tr",[a("td",[e._v("z")]),a("td",[e._v("General time zone")]),a("td",[e._v("Pacific Standard Time; PST; GMT-08:00")])]),a("tr",[a("td",[e._v("Z")]),a("td",[e._v("RFC 822 time zone")]),a("td",[e._v("-0800")])]),a("tr",[a("td",[e._v("X")]),a("td",[e._v("ISO 8601 time zone")]),a("td",[e._v("-08; -0800; -08:00")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"decimaltype-percenttype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decimaltype-percenttype","aria-hidden":"true"}},[this._v("#")]),this._v(" DecimalType, PercentType")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("DecimalType")]),e._v(" and "),a("code",[e._v("PercentType")]),e._v(" objects use Java's "),a("code",[e._v("BigDecimal")]),e._v(" constructor for conversion.\n"),a("code",[e._v("PercentType")]),e._v(" values range from 0 to 100.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"quantitytype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quantitytype","aria-hidden":"true"}},[this._v("#")]),this._v(" QuantityType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"hsbtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hsbtype","aria-hidden":"true"}},[this._v("#")]),this._v(" HSBType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("HSB string values consist of three comma-separated values for hue (0-360°), saturation (0-100%), and value (0-100%) respectively, e.g. "),t("code",[this._v("240,100,100")]),this._v(" for blue.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pointtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pointtype","aria-hidden":"true"}},[this._v("#")]),this._v(" PointType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("PointType")]),this._v(" strings consist of three "),t("code",[this._v("DecimalType")]),this._v("s separated by commas, indicating latitude and longitude in degrees, and altitude in meters respectively.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"enum-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enum-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Enum Types")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Type")]),a("th",[e._v("Supported Values")])])]),a("tbody",[a("tr",[a("td",[e._v("IncreaseDecreaseType")]),a("td",[a("code",[e._v("INCREASE")]),e._v(", "),a("code",[e._v("DECREASE")])])]),a("tr",[a("td",[e._v("NextPreviousType")]),a("td",[a("code",[e._v("NEXT")]),e._v(", "),a("code",[e._v("PREVIOUS")])])]),a("tr",[a("td",[e._v("OnOffType")]),a("td",[a("code",[e._v("ON")]),e._v(", "),a("code",[e._v("OFF")])])]),a("tr",[a("td",[e._v("OpenClosedType")]),a("td",[a("code",[e._v("OPEN")]),e._v(", "),a("code",[e._v("CLOSED")])])]),a("tr",[a("td",[e._v("PlayPauseType")]),a("td",[a("code",[e._v("PLAY")]),e._v(", "),a("code",[e._v("PAUSE")])])]),a("tr",[a("td",[e._v("RewindFastforwardType")]),a("td",[a("code",[e._v("REWIND")]),e._v(", "),a("code",[e._v("FASTFORWARD")])])]),a("tr",[a("td",[e._v("StopMoveType")]),a("td",[a("code",[e._v("STOP")]),e._v(", "),a("code",[e._v("MOVE")])])]),a("tr",[a("td",[e._v("UpDownType")]),a("td",[a("code",[e._v("UP")]),e._v(", "),a("code",[e._v("DOWN")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"a-note-on-items-which-accept-multiple-state-data-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-items-which-accept-multiple-state-data-types","aria-hidden":"true"}},[this._v("#")]),this._v(" A note on items which accept multiple state data types")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("There are a number of items which accept multiple state data types, for example "),a("code",[e._v("DimmerItem")]),e._v(", which accepts "),a("code",[e._v("OnOffType")]),e._v(" and "),a("code",[e._v("PercentType")]),e._v(", "),a("code",[e._v("RollershutterItem")]),e._v(", which  accepts "),a("code",[e._v("PercentType")]),e._v(" and "),a("code",[e._v("UpDownType")]),e._v(", or "),a("code",[e._v("ColorItem")]),e._v(", which accepts "),a("code",[e._v("HSBType")]),e._v(", "),a("code",[e._v("OnOffType")]),e._v(" and "),a("code",[e._v("PercentType")]),e._v(".\nSince an item has a SINGLE state, these multiple data types can be considered different views to this state.\nThe data type carrying the most information about the state is usually used to keep the internal state for the item, and other datatypes are converted from this main data type.\nThis main data type is normally the first element in the list returned by "),a("code",[e._v("Item.getAcceptedDataTypes()")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Item Name")]),a("th",[e._v("Main Data Type")]),a("th",[e._v("Additional Data Types Conversions")])])]),a("tbody",[a("tr",[a("td",[e._v("Color")]),a("td",[a("code",[e._v("HSBType")])]),a("td",[e._v("• "),a("code",[e._v("OnOffType")]),e._v(" - "),a("code",[e._v("OFF")]),e._v(" if the brightness level in the "),a("code",[e._v("HSBType")]),e._v(" equals 0, "),a("code",[e._v("ON")]),e._v(" otherwise "),a("br"),e._v(" • "),a("code",[e._v("PercentType")]),e._v(" - the value for the brightness level in the "),a("code",[e._v("HSBType")])])]),a("tr",[a("td",[e._v("Dimmer")]),a("td",[a("code",[e._v("PercentType")])]),a("td",[a("code",[e._v("OnOffType")]),e._v(" - "),a("code",[e._v("OFF")]),e._v(" if the brightness level indicated by the percent type equals 0, "),a("code",[e._v("ON")]),e._v(" otherwise")])]),a("tr",[a("td",[e._v("Rollershutter")]),a("td",[a("code",[e._v("PercentType")])]),a("td",[a("code",[e._v("UpDownType")]),e._v(" - "),a("code",[e._v("UP")]),e._v(" if the shutter level indicated by the percent type equals 0, "),a("code",[e._v("DOWN")]),e._v(" if it equals 100, and "),a("code",[e._v("UnDefType.UNDEF")]),e._v(" for any other value")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Metadata")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('Switch "My Fan" { homekit="Fan.v2", alexa="Fan" [ type="oscillating", speedSteps=3 ] }\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The metadata can alternatively maintained via a dedicated REST endpoint and is included in the "),t("code",[this._v("EnrichedItemDTO")]),this._v(" responses.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Extensions which can infer some metadata automatically need to implement an register a "),t("code",[this._v("MetadataProvider")]),this._v(" service in order to make them available to the system.\nThey may provision them from any source they like and also dynamically remove or add data.\nThey are also not restricted to a single namespace.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("MetadataRegistry")]),this._v(" provides access for all extensions which need to read the item metadata programmatically.\nIt is the central place where additional information about items is kept.")])}],!1,null,null,null);t.default=r.exports}}]);