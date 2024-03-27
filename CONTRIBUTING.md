# Contributing to the openHAB website

This website is made with [VuePress](https://vuepress.vuejs.org/).
It will be installed as part of the dev dependencies.
For the used version of vuepress to work correctly, Node.js 16.20.0 or **older** is needed.
Alternatively on newer versions [the legacy OpenSSL provider can be enabled as described in this StackOverflow thread](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported).
For the Ruby scripts used by the website build, Ruby 2.4.3 is needed.
If you are using a Node.js version manager like [fnm](https://github.com/Schniz/fnm), the provided `.node-version` file should automatically set the correct Node.js version needed.
If you are using a Ruby version manager like [rvm](https://rvm.io/), running `rvm use` should automatically set the correct version according to the `.ruby-version` file.

## Editing

Be careful not to edit anything in the folder vuepress as it is the folder that contains generated content.
The folder that contains pages to be edited is called ".vuepress" (note the dot at the beginning of the folder name).
You can alter layouts and components in `.vuepress/components`, or the navigation in `.vuepress/config.js` - check the VuePress docs for more details.

Note: if you add a new component and reference it in a (Markdown) page with its custom tag, it might not work until you restart the dev server.

## Environment Setup

This chapter describes how to setup a local environment to be able to build the whole website and review changes locally before creating a pull request.

### Linux / MacOS

The following has been tested on Linux and MacOS (Windows seems to have a few minors that prevent the script to run completely).

#### Ruby 2.4.3

It is highly recommended to use the [Ruby Version Manager (RVM)](https://rvm.io).
Once installed it will help to automatically download and configure `Ruby`:

```bash
$ rvm install "ruby-2.4.3"
$ rvm use
Using /home/foo/.rvm/gems/ruby-2.4.3
```

If there are no binary packages available for your distribution, `rvm` will compile `Ruby` from the source code:

```bash
$ rvm install "ruby-2.4.3"
Searching for binary rubies, this might take some time.
No binary rubies available for: ubuntu/22.04/x86_64/ruby-2.4.3.
Continuing with compilation.
# ...
```

<details>
  <summary>Solve ruby build problem(s) on Linux</summary>

As version 2.4.3 requires the an older (deprecated) version of [OpenSSL](https://www.openssl.org) it is possible that the compilation from source fails on the recent distribution (as they no longer provide the required version).

```bash
$ rvm install "ruby-2.4.3"

Searching for binary rubies, this might take some time.
No binary rubies available for: ubuntu/22.04/x86_64/ruby-2.4.3.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
Checking requirements for ubuntu.
Requirements installation successful.
Installing Ruby from source to: /home/foo/.rvm/rubies/ruby-2.4.3, this may take a while depending on your cpu(s)...
ruby-2.4.3 - #downloading ruby-2.4.3, this may take a while depending on your connection...
ruby-2.4.3 - #extracting ruby-2.4.3 to /home/foo/.rvm/src/ruby-2.4.3.....
ruby-2.4.3 - #configuring..................................................................
ruby-2.4.3 - #post-configuration..
ruby-2.4.3 - #compiling................................................................................................................................................................................................|
Error running '__rvm_make -j8',
please read /home/foo/.rvm/log/1709118815_ruby-2.4.3/make.log
```

Modern distributions do not provide the required OpenSSL Version 1.1.1 dependency anymore.
Check the logs:

```log
...
make[2]: *** [Makefile:305: ossl_pkey.o] Error 1
make[2]: Leaving directory '/home/foo/.rvm/src/ruby-2.4.3/ext/openssl'
make[1]: *** [exts.mk:237: ext/openssl/all] Error 2
make[1]: Leaving directory '/home/foo/.rvm/src/ruby-2.4.3'
make: *** [uncommon.mk:220: build-ext] Error 2
++ return 2
```

In case of the missing SSL dependency follow the steps below (Ubuntu based distributions):

```bash
sudo apt install build-essential checkinstall zlib1g-dev
cd ~/Downloads
wget https://www.openssl.org/source/openssl-1.1.1q.tar.gz
cd ~/Downloads/openssl-1.1.1q
./config --prefix=/opt/openssl-1.1.1q --openssldir=/opt/openssl-1.1.1q shared zlib
make
make test
sudo make install
sudo rm -rf /opt/openssl-1.1.1q/certs
sudo ln -s /etc/ssl/certs /opt/openssl-1.1.1q
```

[ [Build ruby-2.4.3 on ubuntu 22.04 LTS](https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2663209) ]

You should now be able to use `rvm` to build using the following parameters:

```bash
rvm install "ruby-2.4.3" -C --with-openssl-dir=/opt/openssl-1.1.1q
```

</details>

## Running in development mode

To run the website on your local machine on a development server with live reload:

- run the released (stable) version of the documentation execute `npm run build-local-stable -y`
- run the latest (work in progress) version use `npm run build-local-latest -y`

As the compilation can take a few minutes due to the size of the docs, wait for the "VuePress dev server listening at <http://localhost:8080> (or another available port)" message.
When loading the website in the browser it may take a few seconds until it finally appears.

### Build documentation from PR

In special situations; e.g. if you make changes in the documentation repository that might impact the website build, it is possible to build the website from a PR.
This makes it possible to verify that your proposed changes do not have negative side effects:

```bash
ARGUMENTS="--pull-request 2272" npm run build-local
```

Available ARGUMENTS:

- `--verbose`
- `--no-clone`
- `--pull-request #`

## Building the final website

This step is normally done by a CI service (e.g. Netlify).
You can however build it manually with the command: `npm run build`.

This will:

1. Run `ruby prepare-docs.rb` as above.
2. Run `vuepress build` which will output the final static files in `vuepress`.
3. Run `ruby postbuild.rb` which removes all prefetch directives inserted by VuePress from `index.html`, which optimizes the initial load performance.

The complete build will take between 2 and 5 minutes.
