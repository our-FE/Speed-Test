module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    phantomas: {
      default: {
        options: {
          indexPath: './zumiez/',
          options: {},
          url: 'http://preview7.zumiez.com/'
        }
      },
      screenshot: {
        options: {
          indexPath: './zumiez/',
          options: {
            'screenshot': 'screenshots/sample-' + Date.now() + '.png'
          },
          url: 'http://preview7.zumiez.com/'
        }
      },
      requests: {
        options: {
          indexPath: './zumiez/',
          options: {
            'assert-requests': 20
          },
          url: 'http://preview7.zumiez.com/'
        }
      },
    }
  });
  grunt.loadNpmTasks('grunt-phantomas');
  grunt.registerTask('default', ['phantomas:default']);
};
