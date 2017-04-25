var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var SassPluginAutoPrefix = require('gulp-autoprefixer');
var cssPrefix = require("gulp-css-prefix");

var autoprefix = new SassPluginAutoPrefix({ browsers: ["last 4 versions"] });

gulp.task('build', function() {
    gulp.src(['./*.sass'])
        .pipe(sass({
            plugins: [autoprefix]
        }))
        .pipe(csscomb())
		    .pipe(cssPrefix({prefix:'bulma-', parentClass: 'bulma-container'}))
        .pipe(gulp.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
