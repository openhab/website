# Contributing to the openHAB website

This website is made with [VuePress](https://vuepress.vuejs.org/), therefore you must install it globally first (with `npm i -g vuepress`).


## Running in development mode

To run the website on your local machine on a development server with live reload:

1. Migrate the documentation from https://github.com/openhab/openhab-docs for the website, by running `ruby prepare-docs.rb`
2. Run `vuepress dev`

The compilation can take a few minutes due to the size of the docs, wait for the "VuePress dev server listening at http://localhost:8080 (or another available port)" message.

You can alter layouts and components in `.vuepress/components`, or the navigation in `.vuepress/config.js` - check the VuePress docs for more details. Note: if you add a new component and reference it in a (Markdown) page with its custom tag, it might not work until you restart the dev server.

## Building the final website

This step is normally done by a CI service (e.g. Netlify).
You can however build it manually with the command: `npm run build`.

This will:

1. Run `ruby prepare-docs.rb` as above.
2. Run `vuepress build` which will output the final static files in `vuepress`.
3. Run `ruby postbuild.rb` which removes all prefetch directives inserted by VuePress from `index.html`, which optimizes the initial load performance.

The complete build will take between 2 and 5 minutes.
