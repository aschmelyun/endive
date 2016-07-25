var gulp = require('gulp');

var sass     = require('gulp-sass'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    rename   = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build'))
        .pipe(concat('endive.css'))
        .pipe(gulp.dest('build'))
        .pipe(cleancss())
        .pipe(rename('endive.min.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
