const gulp = require('gulp')
const { handleWatchSCSS } = require('./build/gulp_dev')
const { handleCSS, handleJS } = require('./build/gulp_prod')

console.log(process.env.APP_NODE_ENV)
let build;

if(process.env.APP_NODE_ENV === "dev") {
  build = gulp.series(handleWatchSCSS)
}else if(process.env.APP_NODE_ENV === "test") {
  // build = gulp.series(handleCSS, handleJS)
}else if(process.env.APP_NODE_ENV === "prod") {
  build = gulp.series(handleCSS, handleJS)
  // build = gulp.series(handleCSS, handleJS)
}else {
  build = gulp.series(handleWatchSCSS)
}

exports.build = build