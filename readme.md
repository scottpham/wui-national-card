# Front-end template for cir graphics

Note: this is a work in progress and a lot of this is liable to change. As I am the main person using this template, I tend to make big changes regularly as I need them. Best to fork first if you want to use this.

## What is this
This is a template for building single-page apps that live on their own URL. It's quite possible to build an embeddable app with pym.js using this template, or even incorporate this whole build into a Django app, but it's not currently set up for that. The assumption is that you're building a javascript-heavy app that will deploy to an s3 bucket.


## How to get started
1. Run `npm install` to install the major dev dependencies.
2. Run `npm install brunch -g` because the app uses this extensively
3. Run `npm start` to start a dev server on port `8080`. The app will auto reload the browser, auto inject your changes and generally be awesome.

## What does this template do:
1. Provide an index.html with proper markup and styles to simulate a revealnews.org article page
2. Provide social buttons and a social popup with js to run it.
3. Brunch.io scaffolding (more on that below) to:
  - Load and concatenate common js modules
  - Automatically inject bower dependencies and vendor js files (either works without changing config)
  - Automatically load and concatenate SASS, SCSS and CSS (use these interchangeably)
  - Automatically uglify js and clean css for production
  - Run a nice dev server with Browser-Sync, automatically watch files for changes and reload the browser


## Main dependencies:
- `jQuery`
- `Brunch.io`
- `Bootstrap`
- `FontAwesome`

## Assumptions
This template is opinionated. This means there is a specific way of working with javascript and html that makes this template helpful. In some cases, these opinions are flexible and needn't be followed exactly. In other cases, changing coding styles will require major reconfigurations and is not recommended. Here are the basics:

### Folder organization
Brunch.io makes everything as breeze as long as you follow the existing folder configuration.

`index.html`: Don't add scripts or css links to the index. Brunch will take care of all that. Only write markup here.

`app` is basically all your source files, minus bower and npm stuff.

`app/assets` is where you should put images, data files, and other stuff that shouldn't be 'processed' in any way (Brunch will just copy this folder in its entirety)

`app/scripts` is where your js goes. Put common js modules in the root of `/scripts` and global files in `app/scripts/vendor` (like jQuery or something)

`bower.json` has a couple of front-end dependencies that are automatically injected into your project and loaded BEFORE anything in `app/scripts`. If you need to fine tune this order, write the name of the script in `files.javascripts.order` in the `brunch-config.js`. You don't have to write anything here if your globals don't depend on each other.

`app/styles` is where your css goes. It doesn't HAVE to be written in SCSS but it should be.

`app/styles` is for css libraries like font awesome.

### Modules
Most JavaScript in this template is written in Common JS modules. This is a requirement, as the app will init any code in `main.js` and all custom scripts need to be `require`d there. Also, the social popup is written in a Common JS format.

### SASS
The template makes heavy use of SASS variables and it's recommended you use them as well.

### Bootstrap
The main html shell is written in bootstrap.

If this template becomes more generally useful, I will eventually remove this dependency (along with jQuery while I'm at it). For now, both are necessary for the easiest functioning. Probably you could manually remove Bootstrap if you need to, and it wouldn't be that hard. It would be harder to remove the jQuery dependency.

### Why Brunch.io?
1: I need a build tool.

SASS is too useful and and too easy not to use, even in small projects. And Common JS makes code organization pleasant, readable and more maintainable, even in small projects. You need something to build these files, so you might as well use a system that also gives you a dev server and dependency injections.

2: I like Brunch.

Yeah, Brunch is weird and a little obscure. Webpack, Gulp and Grunt are the go-to build tools of the JS world, and I'm not using them. Here's why:
- Tiny config file: all configuration is in `brunch-config.js` and clocks in at 32 lines including heavy commenting. The same configuration in Gulp is 250 lines and in Grunt is nearly 400.
- Convention over configuration: Keep to the folder structure and a whole lot will happen under the scenes without you having to think about it. Reduces the complexity of starting and growing a project. Webpack has a similar philosophy but you need many more plugins and the config files are notoriously verbose and confusing. I think Brunch.io hits a sweet spot between being highly featured and relatively simple to understand and use.
