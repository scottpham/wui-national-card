module.exports = {
  paths: {},
  plugins: {
    sass: {
      options: {
        // an array of paths that will become available to sass' import statement
        includePaths: [
          'bower_components/bootstrap-sass-official/assets/stylesheets/'
        ]
      }
    }
  },
  // brunch will inject and concatenate files from bower, vendor, npm,
  // and app/scripts, in that order. For more info: http://brunch.io/docs/config#-files-
  files: {
    javascripts: {
      joinTo: {
        // custom files go in app/scripts. Entry point is main.js
        'app.js': 'app/scripts/*.*|app/components/*.*',
        'vendor.js': 'app/scripts/vendor/*.js|node_modules/**|bower_components/**'
      },
      order: {
        // if necessary, list vendor scripts here in the order they need to run
        before: 'bower_components/jquery/dist/jquery.js'
      }
    },
    stylesheets: {
      // put .scss or css in app/styles
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  }
}
