/****************/
/* Dependencies */
/****************/

let autoprefixer = require('gulp-autoprefixer'),
  beautify = require('gulp-beautify'),
  browserSync = require('browser-sync').create(),
  cleanCSS = require('gulp-clean-css'),
  concat = require ('gulp-concat'),
  gulp = require('gulp'),
  htmlbeautify = require('gulp-html-beautify'),
  imagemin = require('gulp-imagemin'),
  pug = require('gulp-pug'),
  pump = require('pump'),
  sass = require ('gulp-sass'),
  uglify = require('gulp-uglify'),
  watch = require('gulp-watch');



/*************/
/* Dev Tasks */
/*************/

gulp.task('pugDev', () => {
  return gulp.src('pug/**/*.pug')
    .pipe(pug())
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest('build/'));
});

gulp.task('sassDev', () => {
  return gulp.src(['assets/sass/*.sass', 'assets/sass/partials/*.sass'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('jsDev', () => {
  return gulp.src('js/*.js')
    .pipe(concat('index.min.js'))
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('build/js'));
});

// Main dev Task
gulp.task('dev', ['pugDev', 'sassDev', 'jsDev']);



/***************/
/* Build Tasks */
/***************/

gulp.task('pugBuild', () => {
  return gulp.src('pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/'));
});

gulp.task('sassBuild', () => {
  return gulp.src(['assets/sass/*.sass', 'assets/sass/partials/*.sass'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/assets/css'));
});

gulp.task('jsBuild', (cb) => {
  pump([
    gulp.src('js/*.js'),
    uglify(),
    concat('index.min.js'),
    gulp.dest('build/js')
  ], cb );
});

gulp.task('imageBuild', () => {
  return gulp.src('assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets/img'));
});

// Main Build Task
gulp.task('build', ['pugBuild', 'sassBuild', 'jsBuild', 'imageBuild'], () => {});



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
      baseDir: 'build',
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
