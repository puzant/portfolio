var gulp = require('gulp'); 
var pug = require('gulp-pug');
var watch = require('gulp-watch');

gulp.task('pug', function() {
  return gulp.src('template/*.pug')
  .pipe(pug({
    doctype: 'html',
    pretty: true
  }))
  .pipe(gulp.dest('./'))
})

gulp.task('watch', function () {
  return watch('template/*.pug', { ignoreInitial: false })
     .pipe(gulp.dest('pug'));
  });