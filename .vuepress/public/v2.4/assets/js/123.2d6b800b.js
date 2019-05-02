(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{655:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("ul",[a("li",[t._v("Enable Telnet ("),a("a",{attrs:{href:"http://www.wehavemorefun.de/fritzbox/Starten_von_telnetd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),a("OutboundLink")],1),t._v(")"),a("BR")],1),t._v(" "),a("li",[t._v("Activate User Login: FRITZ!Box-Benutzer -> Anmeldung im Heimnetz -> Anmeldung mit dem FRITZ!Box-Kennwort")])]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The format of the binding configuration is simple and looks like this:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Fritz!Box item configurations are valid on Switch and Call items.")]),t._v(" "),a("p",[t._v("Switch items with this binding will receive an ON update event at the start and an OFF update event at the end (a connection marks the end for inbound and outbound types, only active type will be ON for connected calls).")]),t._v(" "),a("p",[t._v("Call items will receive the external and the internal phone number in form of a string value as a status update. At the end of the event, an empty Call item which contains empty strings is sent as a status update.")]),t._v(" "),a("p",[t._v("As a result, your lines in the items file might look like the following:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("The following items switch DECT, WIFI, GUEST_WIFI and the answering machine 0 (default TAM):")]),t._v(" "),t._m(11),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"fritz-box-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fritz-box-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Fritz!Box Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the "),s("code",[this._v("services/fritzbox.cfg")]),this._v(" file.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ip")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("IP address of your Fritz!Box")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Password to your Fritz!Box")])]),t._v(" "),a("tr",[a("td",[t._v("user")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("when user management is enabled")]),t._v(" "),a("td",[t._v("User of your Fritz!Box. It is a good practice to create an additional user for openHAB.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prepare-your-fritzbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-your-fritzbox","aria-hidden":"true"}},[this._v("#")]),this._v(" Prepare your Fritzbox")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('fritzbox="<eventType>"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("where "),s("code",[this._v("<eventType>")]),this._v(" is one of the following values:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("inbound - for incoming calls")]),this._v(" "),s("li",[this._v("outbound - for placed calls")]),this._v(" "),s("li",[this._v("active - for currently active calls")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("    "),a("span",{attrs:{class:"token class-name"}},[t._v("Incoming_Call")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Ringing"')]),t._v("                       "),a("span",{attrs:{class:"token tag"}},[t._v(" (Phone)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fritzbox"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"inbound"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nCall      Active_Call       "),a("span",{attrs:{class:"token string"}},[t._v('"Connected to [%1$s from %2$s]"')]),t._v(" "),a("span",{attrs:{class:"token tag"}},[t._v(" (Phone)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fritzbox"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"active"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nCall      Incoming_Call_No  "),a("span",{attrs:{class:"token string"}},[t._v('"Caller No. [%2$s]"')]),t._v("             "),a("span",{attrs:{class:"token tag"}},[t._v(" (Phone)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fritzbox"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"inbound"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"switching-wifi-and-dect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switching-wifi-and-dect","aria-hidden":"true"}},[this._v("#")]),this._v(" Switching WIFI and DECT")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("DECT")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzbox"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dect"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WIFI")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzbox"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wlan"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GWIFI")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzbox"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"guestwlan"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Version "),a("span",{attrs:{class:"token number"}},[t._v("1.7")]),a("span",{attrs:{class:"token number"}},[t._v(".0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TAM0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzbox"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tam0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);