---
title: Transformation Services
source: https://github.com/openhab/openhab-docs/blob/gh-pages/addons/transformations.md
---


# Transformation Services

Transformations are used to translate data from a cluttered or technical raw value to a processed or human-readable representation.
They are often useful, to **interpret received Item values**, like sensor readings or state variables, and to translate them into a human-readable or better processible format.

**Examples:**

- Translation of a technical Binding output, e.g., "CLOSED" can be translated to the Spanish translation "cerrado"
- Processing of a raw Item value, e.g., Parsing a number from a JSON string, like `{ "temperature": 23.2 }`
- Conversion of sensor readings, e.g., temperature in degree Celsius can be converted to degree Fahrenheit

## Usage

Transformations are applicable in Item and Sitemap element labels and inside DSL rules.
Be aware, that some Transformation services rely on transformation files, while others work by directly providing the transformation logic.
Transformation files need to be placed in the directory `$OPENHAB_CONF/transform`.

1.  Item and Sitemap Labels

     Transformations used in the [state/value part](/docs/configuration/items.html#state-transformations) of labels are applied **on the fly**.
     While the **transformed value** will (for example) be visible on a Sitemap, the **original value** is stored in the Item.

    The following example shows a Map transformation (see below) used in the State part of an Item's label.
    The technical state of a Contact Item (e.g. "CLOSED") is translated into a human readable representation in Spanish ("cerrado").

    ```java
    Contact Livingroom_Window        "Window [MAP(window_esp.map):%s]"               {/*Some Binding*/}
    Number  Kitchen_Temperature_C    "Temperature [JSONPATH($.temperature):%.1f °C]" {/*Some Binding*/}
    Number  Livingroom_Temperature_F "Temperature [JS(convert-C-to-F.js):%.1f °F]"   {/*Some Binding*/}

    ```

    Usage of Transformations in the [label parameter of Sitemap elements](/docs/configuration/sitemaps.html#element-type-text) works the same way.

2.  Rules

    Transformations can also be [used in rules](/docs/configuration/rules-dsl.html#transformations) to transform/translate/convert data.
    The following shows three examples:

    ```java
    var condition = transform("MAP", "window_esp.map", "CLOSED")
    var temperature = transform("JSONPATH", "$.temperature", jsonstring)
    var fahrenheit = transform("JS", "convert-C-to-F.js", temperature)
    ```

To keep these examples simple, the contents of the referenced files `window_esp.map` and `convert-C-to-F.js` were left out.

<DocPreviousVersions/>
<EditPageLink/>
