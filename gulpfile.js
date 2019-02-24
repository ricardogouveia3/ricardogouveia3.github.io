/****************/
/* Dependencies */
/****************/

let autoprefixer = require('gulp-autoprefixer'),
  beautify = require('gulp-beautify'),
  browserSync = require('browser-sync').create(),
  cleanCSS = require('gulp-clean-css'),
  concat = require ('gulp-concat'),
  del = require('del'),
  gulp = require('gulp'),
  htmlbeautify = require('gulp-html-beautify'),
  imagemin = require('gulp-imagemin'),
  pug = require('gulp-pug'),
  sass = require ('gulp-sass'),
  uglify = require('gulp-uglify-es').default,
  watch = require('gulp-watch');


/*************/
/* Dev Tasks */
/*************/

gulp.task('pugDev', () => {
  return gulp.src('pug/index.pug')
    .pipe(pug())
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest('./'));
});

gulp.task('sassDev', () => {
  return gulp.src(['assets/sass/*.sass', 'assets/sass/partials/*.sass'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('clearJS', () => {
  return del(['js/index.min.js']);
});

gulp.task('jsDev--comp', ['clearJS'], () => {
  return gulp.src('js/*.js')
    .pipe(concat('index.min.js'))
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('js/'));
});

gulp.task('jsDev', ['clearJS', 'jsDev--comp']);

// Main dev Task
gulp.task('dev', ['pugDev', 'sassDev', 'jsDev']);



/***************/
/* Build Tasks */
/***************/

gulp.task('pugBuild', () => {
  return gulp.src('pug/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'));
});

gulp.task('sassBuild', () => {
  return gulp.src(['assets/sass/*.sass', 'assets/sass/partials/*.sass'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('jsBuild', ['clearJS'], (cb) => {
  return gulp.src('js/*.js')
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});

gulp.task('imageBuild', () => {
  return gulp.src('assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img'));
});

// Main Build Task
gulp.task('build', ['pugBuild', 'sassBuild', 'clearJS', 'jsBuild', 'imageBuild'], () => {});



/****************/
/* Server Tasks */
/****************/

gulp.task('watch', ['browserSync', 'pugDev', 'sassDev', 'jsDev'], () => {
  gulp.watch(['pug/**/*.pug'], ['pugDev', browserSync.reload]);
  gulp.watch('assets/sass/**/*.sass', ['sassDev']);
  gulp.watch('js/*.js', ['jsDev', browserSync.reload]);
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './',
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
  });
});



/*****************/
/* Default Tasks */
/*****************/

gulp.task('default', ['watch'], () => {});
