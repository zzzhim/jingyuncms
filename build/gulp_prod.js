const gulp = require('gulp')
const babel = require('gulp-babel')

function handleCSS() {
  const postcss = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp
    .src('src/static/css/*.css')
    // .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-nested'),
      require('autoprefixer')
    ]))
    .pipe(sourcemaps.write('.') )
    .pipe(require('gulp-minify-css')()) // 压缩css
    .pipe(gulp.dest('dist/src/static/css/') )
}

function handleJS() {
  const uglify = require('gulp-uglify')

  return gulp
    .src('src/static/js/*.js')
    .pipe(babel()) // 编译js
    .pipe(uglify()) // 压缩js
    .pipe(gulp.dest('dist/src/static/js/') )
}

module.exports = {
  handleCSS,
  handleJS
}