var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('compress', function() {
    return gulp.src('./dev/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./out'));
});

gulp.task('default',['compress']);
