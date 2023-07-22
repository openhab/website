# Contributing to the openHAB website

This website is made with [VuePress](https://vuepress.vuejs.org/).
It will be installed as part of the dev dependencies.
For the used version of vuepress to work correctly, Node.js 16.20.0 or **older** is needed. Alternatively on newer versions [the legacy OpenSSL provider can be enabled as described in this StackOverflow thread](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported).
Ruby version 2.4.3 is required for the ruby scripts used by the build process to work correctly.

If you are using a Node.js version manager like [fnm](https://github.com/Schniz/fnm), the provided `.node-version` file should automatically set the correct Node.js version needed.
If you are using a Ruby version manager like [RVM](https://rvm.io/), run `rvm use` and the provided `.ruby-version` file should automatically set the correct Ruby version needed.


## Running in development mode

To run the website on your local machine on a development server with live reload:

1. Set the `OH_DOCS_VERSION` environment variable to the documentation version you want to use, e.g. `main` for latest docs or `final-stable` for stable docs.
   This must be a branch name from the [openhab/openhab-docs repository](https://github.com/openhab/openhab-docs).
2. Migrate the documentation from https://github.com/openhab/openhab-docs for the website, by running `ruby prepare-docs.rb`
3. Run `npm run dev`

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
