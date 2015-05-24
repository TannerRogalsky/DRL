var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var browserifyDev = function(source) {
  return browserify({
    entries: source,
    debug: true,
    transform: [babelify.configure({
      jsxPragma: 'DRL.createElement'
    })]
  });
}

gulp.task('default', ['drl', 'examples']);

gulp.task('drl', function(){
  var b = browserifyDev('./drl.js');

  return b.bundle()
    .pipe(source('drl.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'));
});

gulp.task('examples', function(){
  var b = browserifyDev('./examples/test.js');

  return b.bundle()
    .pipe(source('test.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'));
});

// watch files for changes and reload
gulp.task('serve', ['default'], function() {
  browserSync({
    server: {
      baseDir: './',
      directory: true
    }
  });

  gulp.watch(['./drl.js', './src/**/*.js'], ['drl', reload]);
  gulp.watch(['./examples/**/*.js'], ['examples', reload]);
});
