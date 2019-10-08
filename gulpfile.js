const 
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename");

gulp.task('pug-compile', function buildHTML() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(rename('./index.html'))
        .pipe(gulp.dest('./'))
});

// gulp.task('watch', ['browserSync'], function() {
//     gulp.watch('./pug/*.pug', browserSync.reload);
// });