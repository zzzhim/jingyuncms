const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss')
// const sourcemaps = require('gulp-sourcemaps')

const handleSCSS = () => {
  return gulp
    .src('src/static/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-nested'),
      require('autoprefixer')
    ]))
    // .pipe(sourcemaps.write('.') )
    .pipe(require('gulp-minify-css')()) // 压缩css
    .pipe(gulp.dest('src/static/css/'))
}

function handleWatchSCSS() {
  return gulp
    .watch('src/static/scss/*.scss', () => handleSCSS())
}

module.exports = {
  handleWatchSCSS
}