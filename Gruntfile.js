module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/js/uglyfied.js'],
        dest: 'assets/js/index.js',
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/uglyfied.js': ['assets/js/raw.js']
        }
      }
    },

    sass: {
      build: {
          options: {
            style: 'compressed' //Seems to be the same as minified
          },
        files: {
          'assets/css/style.css': 'assets/css/style.sass',
        }
      }
    },

    pug: {
      compile: {
        files: {
          'index.html':'index.pug'
        }
      },
    },

    watch: {
      structure: {
        files: ['index.pug', 'includes/*.pug'],
        tasks: ['pug'],
      },
      style: {
        files: ['assets/css/style.sass', 'assets/css/_partials/*.sass'],
        tasks: ['sass'],
      },
      js: {
        files: ['assets/js/raw.js'],
        tasks: ['uglify'],
      },
      scripts: {
        files: ['assets/js/uglyfied.js'],
        tasks: ['concat'],
      },
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'assets/css/*.css',
            'assets/js/*.js',
            'index.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};