const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function compiledSass(){
    return gulp.src('./source/styles/*.main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps')).pipe(gulp.dest('./build/styles'));
}

function javaScript(){
    return gulp.src('./source/javascript/*.js')
    .pipe(uglify()).pipe(gulp.dest('./build/javascript'))
}

function compressorDeImagem(){
    return gulp.src('./source/images/*')
    .pipe(imagemin()).pipe(gulp.dest('./build/images'))
}

exports.default = function() {
    gulp.watch('./source/styles/*.main.scss', {ignoreInitial : false}, gulp.series(compiledSass));
    gulp.watch('./source/javascript/*.js', {ignoreInitial : false}, gulp.series(javaScript));
    gulp.watch('./source/images/*', {ignoreInitial : false}, gulp.series(compressorDeImagem));
}