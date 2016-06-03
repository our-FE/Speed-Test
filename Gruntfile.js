module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Begin grunt-phantomas config
    phantomas : {
  /* https://github.com/stefanjudis/grunt-phantomas */
      grunt : {
        options : {
          assertions : {
            assetsWithQueryString : 3,     // receive warning, when there are more than 3 assets with a query string
            bodyHTMLSize          : 10500, // receive warning, when the bodyHTMLsize is bigger than 10500
            jsErrors              : 0,     // receive warning, when more than 0 JS errors appear
            gzipRequests          : {      // receive warning, when less compressed assets are loaded then 10 ( might be useful for checking server configurations )
              type  : '<',
              value : 10
            }
          },
          indexPath  : './zumiez/',
          options    : {
            'timeout' : 30
          },
          url        : 'http://www.zumiez.com/storelocator/list/'
        },
          numberOfRuns         : 1
      }
    }
    // End grunt-phantomas config
  });

  grunt.loadNpmTasks('grunt-phantomas');
  grunt.registerTask('default', ['phantomas']);
};
