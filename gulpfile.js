var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');

gulp.task('less', function () {
  return gulp.src('./app/styles/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/styles/css'));
});

/* Task to watch less changes */
gulp.task('watch-less', function() {
  gulp.watch('./app/styles/*.less' , ['less']);
});

/* Task when running `gulp` from terminal */
gulp.task('default', ['less', 'watch-less']);
