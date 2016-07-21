const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

//in your terminal, type:
//npm install gulp
//npm install gulp-concat
//this will install the gulp packages you need. you can now require them
//in this gulpfile above
//we're using npm to install things from the internet, to use
//in our project.

gulp.task('js', function() {
  //gulp.src('./js/*.js')
  //the original gulp.src is above
  //we're redoing it below with an array because we need to include app.js first
  //we do that by making that file the 1st one in the array below
  //now we can remove all the JS files in our index.html and just include /dist/bundle.js
  //in the index.html
  gulp.src(['./js/app.js', './js/*.js'])
  //the package below converts your shit to regular js
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  //.pipe means after you've done this, take the result of that operation
  //and do this other thing with them
  .pipe(gulp.dest('./dist'))
  //now run 'gulp js' in your terminal
});

gulp.watch(
  ['./js/**/*.js'],
  ['js','concat']
);
