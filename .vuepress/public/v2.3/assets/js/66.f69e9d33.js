(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{555:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The binding has been tested with the following models:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("This binding is current in Beta state with the following commands implemented:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The binding support transport using a TCP/IP to RS232 converter or via a direct RS232 interface.")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://en.usr.cn/Ethernet-Module-T24/RS232-to-Ethernet-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("USR-TCP232-2"),a("OutboundLink")],1),t._v(" is a known working TCP/IP to RS232 converter.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("items/yourbenq.items")]),t._v(" "),t._m(10),a("p",[t._v("transform/ProjSourceNum.map")]),t._v(" "),t._m(11),a("p",[t._v("sitemap/yourbenq.sitemap")]),t._v(" "),t._m(12),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"benq-projector-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benq-projector-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" BenQ Projector Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding is designed to interface with BenQ projectors that have an RS232 interface on them that accepts the commands documented by BenQ "),s("a",{attrs:{href:"ftp://ftp.benq-eu.com/projector/benq_rs232_commands.pdf"}},[this._v("here")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("BenQ W1070")]),this._v(" "),s("li",[this._v("BenQ W1080")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status","aria-hidden":"true"}},[this._v("#")]),this._v(" Status")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Command")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Query")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Set")]),t._v(" "),a("th",[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Power")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Mute")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Volume")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Source")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",[t._v("Can be returned as either a string or number")])]),t._v(" "),a("tr",[a("td",[t._v("Lamp Time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"transports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transports","aria-hidden":"true"}},[this._v("#")]),this._v(" Transports")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/benqprojector.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("controls how the projector can be reached. "),a("code",[t._v("serial")]),t._v(" is for a directly connected RS232 serial interface while "),a("code",[t._v("network")]),t._v(" is for using a TCP/IP to serial converter")])]),t._v(" "),a("tr",[a("td",[t._v("deviceId")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("if "),a("code",[t._v("mode")]),t._v(" is "),a("code",[t._v("network")]),t._v(", value should be set to the "),a("code",[t._v("<hostname>:<port>")]),t._v(" of the CP/IP to serial converter"),a("br"),t._v("if "),a("code",[t._v("mode")]),t._v(" is "),a("code",[t._v("serial")]),t._v(", value should be "),a("code",[t._v("<device>:<speed>")]),t._v(", where "),a("code",[t._v("<device>")]),t._v(" is the name of the serial port device and "),a("code",[t._v("<speed>")]),t._v(" is the bitrate (defaults to 57600 if not given)")])]),t._v(" "),a("tr",[a("td",[t._v("refresh")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",[t._v("Polling interval in milliseconds, for example 15000 (15 seconds)")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("gf_lounge_multimedia_projectorPower")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Projector Power"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (gf_lounge, gf_multimedia)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("benqprojector"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"power"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("gf_lounge_multimedia_projectorMute")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Projector Mute"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (gf_lounge, gf_multimedia)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("benqprojector"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"mute"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("gf_lounge_multimedia_projectorVol")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Projector Volume [%d]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (gf_lounge, gf_multimedia)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("benqprojector"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("gf_lounge_multimedia_projectorSourceNum")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Projector Source [MAP(ProjSourceNum.map):%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (gf_lounge, gf_multimedia)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("benqprojector"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"source_number"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("gf_lounge_multimedia_projectorSourceString")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Projector Source [%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (gf_lounge, gf_multimedia)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("benqprojector"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"source_string"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("gf_lounge_multimedia_projectorLamp")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Projector Lamp [%d hours]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (gf_lounge, gf_multimedia)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("benqprojector"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"lamp_hours"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Computer\n"),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Computer "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Component\n"),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("DVI"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("A\n"),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("DVI"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("D\n"),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sky TV"),a("span",{attrs:{class:"token tag"}},[t._v(" (HDMI)")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Chromecast"),a("span",{attrs:{class:"token tag"}},[t._v(" (HDMI2)")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Composite\n"),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("S"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("Video")]),t._v("\n"),a("span",{attrs:{class:"token class-name"}},[t._v("9")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Network\n"),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("USB Display\n"),a("span",{attrs:{class:"token number"}},[t._v("11")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("USB Reader\n"),a("span",{attrs:{class:"token operator"}},[t._v("-=")]),t._v("Unknown\nundefined"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Unknown\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Media"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("gf_lounge_multimedia_projectorPower\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Projector"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gf_lounge_multimedia_projectorPower"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("gf_lounge_multimedia_projectorSourceNum "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Projector Source"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Sky TV"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Chromecast"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gf_lounge_multimedia_projectorPower"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("gf_lounge_multimedia_projectorMute "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gf_lounge_multimedia_projectorPower"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("gf_lounge_multimedia_projectorVol "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gf_lounge_multimedia_projectorPower"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t\t\t\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="readme.md";s.default=n.exports}}]);