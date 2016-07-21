const gulp = require('gulp');

//in your terminal, type:
//npm install gulp
//npm install gulp-concat
//this will install the gulp packages you need. you can now require them
//in this gulpfile below
//we're using npm to install things from the internet, to use
//in our project.

gulp.task('js', function() {
  gulp.src('./js/*.js')
  //means after you've done this, take the result of that operation
  //and do this other thing with them
  .pipe()
});
