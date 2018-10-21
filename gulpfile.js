var gulp = require("gulp");
var concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

gulp.task('default',function () {
    gulp.src(["node_modules/multi-level-poppicker/dist/css/**"]).pipe(gulp.dest("public/css/"));
    gulp.src('index.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets:['@babel/env']
    }))
    .on('error',console.error.bind(console))
    .pipe(webpack())
    .on('error',console.error.bind(console))
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'));
});