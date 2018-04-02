module.exports = function(grunt) {

  // Project configuration.
  const mozjpeg = require('imagemin-mozjpeg');
  const imagemin = require('imagemin');
  const imageminMozjpeg = require('imagemin-mozjpeg');
  const imageminOptipng = require('imagemin-optipng');
  const imageminSvgo = require('imagemin-svgo');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/js/modules/*.js'],
        dest: 'assets/js/index.min.js',
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/index.min.js': ['assets/js/index.min.js']
        }
      }
    },

    sass: {
      build: {
          options: {
            style: 'compressed'
          },
        files: {
          'assets/css/style.css': 'assets/css/style.sass',
        }
      }
    },

    autoprefixer: {
      dist: {
        options: {
          map: true
        },
        files: {
          'assets/css/style.css': 'assets/css/style.css',
        }
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          svgoPlugins: [{removeViewBox: false}],
          use: [mozjpeg(), imageminOptipng(), imageminSvgo()]
        },
        files: [{
          expand: true,
          cwd: 'assets/img/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'assets/img/'
        }]
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
      pug: {
        files: ['index.pug', 'includes/*.pug'],
        tasks: ['pug'],
      },
      sass: {
        files: ['assets/css/style.sass', 'assets/css/_partials/*.sass'],
        tasks: ['sass'],
      },
      concat: {
        files: ['assets/js/modules/*.js'],
        tasks: ['concat'],
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'assets/css/style.css',
            'assets/js/index.min.js',
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
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('compile', ['concat', 'uglify', 'sass', 'autoprefixer', 'imagemin', 'pug']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};
