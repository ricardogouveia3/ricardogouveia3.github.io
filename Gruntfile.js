module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/js/jquery-3.2.1.min.js', 'assets/js/particles.min.js', 'assets/js/index.min.js'],
        dest: 'build/js/index.js',
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/index.min.js': ['assets/js/index.js']
        }
      }
    },

    sass: {
      build: {
          options: {
            style: 'compressed' //Seems to be the same as minified
          },
        files: {
          'build/css/style.css': 'assets/css/style.sass',
        }
      }
    },

    pug: {
      compile: {
        files: {
          'build/index.html':'index.pug'
        }
      },
    },

    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            src: ['assets/img/*.png'],
            dest: 'build/img',
            ext: '.png'
          }
        ]
      },
    },

    watch: {
      structure: {
        files: ['index.pug'],
        tasks: ['pug'],
      },
      style: {
        files: ['assets/css/style.sass'],
        files: ['assets/css/sections/**/*.sass'],
        tasks: ['sass'],
      },
      js: {
        files: ['assets/js/index.js'],
        tasks: ['uglify'],
      },
      scripts: {
        files: ['assets/js/*.min.js'],
        tasks: ['concat'],
      },
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'build/css/*.css',
            'build/js/*.js',
            'build/index.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./build"
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};