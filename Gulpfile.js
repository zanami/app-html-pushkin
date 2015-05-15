
var gulp = require('gulp'),
  browsersync = require('browser-sync'),
  include = require('gulp-include'),
  concat = require('gulp-concat'),
  haml = require('gulp-ruby-haml'),
  sass = require('gulp-sass'),
  bourbon = require('node-bourbon').includePaths,
// not needed really
//  susy = require('susy'),
  sourcemaps = require('gulp-sourcemaps'),
  coffee = require('gulp-coffee'),
  deploy = require('gulp-gh-pages');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

var paths = {
  haml: './source/views/*.haml',
  coffee: './source/assets/javascripts/**/*.coffee',
  js: './source/assets/javascripts/**/*.js',
  scss: './source/assets/stylesheets/**/*.scss',
  images: './source/assets/images/*',
  fonts: './source/assets/fonts/*'
};

// Haml templates
gulp.task('views', function () {
  gulp.src(paths.haml)
    .pipe(haml())
    .pipe(gulp.dest('./build'));
  gulp.src('./source/views/CNAME')
    .pipe(gulp.dest('./build'));
});

// Scss stylesheets
gulp.task('stylesheets', function() {
  return gulp.src(paths.scss)
    .pipe(sass({
      loadPath: [paths.scss].concat(bourbon).concat('./node_modules/susy/sass'),
      includePaths: [paths.scss].concat('./node_modules/susy/sass').concat(bourbon),
      onError: console.error.bind(console, 'Sass error:'),
//			,
//			includePaths: [
//			                './node_modules/susy/sass'
//			]
    }))
    .pipe(gulp.dest('./build/assets/stylesheets'));
});

// Coffeescript
gulp.task('coffeescripts', function() {
  return gulp.src(paths.coffee)
    .pipe(sourcemaps.init())
    .pipe(include())
    .pipe(coffee())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/assets/javascripts'));
});

// Javascripts
gulp.task('javascripts', function() {
  return gulp.src(paths.js)
	  // Concatenate everything within the JavaScript folder.
	  .pipe(concat('scripts.js'))
	  .pipe(gulp.dest('./build/assets/javascripts'))
	  .pipe(rename('scripts.min.js'))
	  // Minify the JavaScript.
//	  .pipe(uglify())
    .pipe(gulp.dest('./build/assets/javascripts'));
});

coffeeStream = coffee({bare: true});
coffeeStream.on('error', function(err) {});

// Copy images
gulp.task('images', function () {
  gulp.src(paths.images)
    .pipe(gulp.dest('./build/assets/images'));
});

// Copy fonts
gulp.task('fonts', function () {
  gulp.src(paths.fonts)
    .pipe(gulp.dest('./build/assets/fonts'));
});

// Server
gulp.task('server', function() {
  browsersync({
    server: {
      baseDir: "./build",
    },
    port: 4000,
    notify: false,
    open: false
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.haml, ['views']);
  gulp.watch(paths.scss, ['stylesheets']);
  gulp.watch(paths.coffee, ['coffeescripts', 'javascripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.fonts, ['fonts']);
  gulp.watch('./build/*.html', browsersync.reload);
  gulp.watch('./build/assets/stylesheets/*.css', browsersync.reload);
  gulp.watch('./build/assets/javascripts/*.js', browsersync.reload);
  gulp.watch('./build/assets/images/*', browsersync.reload);
  gulp.watch('./build/assets/fonts/*', browsersync.reload);
});

// Run
gulp.task('default', ['views', 'stylesheets', 'javascripts', 'coffeescripts', 'images', 'fonts', 'server', 'watch'], function() {

});

// Deploy
gulp.task('deploy', function () {
  return gulp.src("./build/**/*")
    .pipe(deploy({
      branch: "gh-pages"
    }));
});
