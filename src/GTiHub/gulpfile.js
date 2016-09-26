/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {};
paths.npmSrc = "./node_modules/";
paths.npmLibs = "./wwwroot/lib/";

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});

gulp.task("copy-deps:angular2", function () {
    return gulp.src(paths.npmSrc + '/@angular/**/*.js', { base: paths.npmSrc + '/@angular/' })
         .pipe(gulp.dest(paths.npmLibs + '/angular2/'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src(paths.npmSrc + '/rxjs/**/**/*.*', { base: paths.npmSrc + '/rxjs/' })
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/reflect.js', { base: paths.npmSrc + '/reflect-metadata/' })
         .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
});

gulp.task("copy-deps:corejs", function () {
    return gulp.src(paths.npmSrc + '/core-js/**/*.js', { base: paths.npmSrc + '/corejs/' })
         .pipe(gulp.dest(paths.npmLibs + '/corejs/'));
});

gulp.task("copy-deps:zonejs", function () {
    return gulp.src(paths.npmSrc + '/zone.js/**/*.js', { base: paths.npmSrc + '/zone.js/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/zonejs/'));
});

gulp.task("copy-deps:typescript", function () {
    return gulp.src(paths.npmSrc + '/typescript/**/*.js', { base: paths.npmSrc + '/typescript/lib' })
         .pipe(gulp.dest(paths.npmLibs + '/typescript/'));
});

gulp.task("copy-deps:ng2-file-upload", function () {
    return gulp.src(paths.npmSrc + '/ng2-file-upload/**/*.js', { base: paths.npmSrc + '/ng2-file-upload/' })
         .pipe(gulp.dest(paths.npmLibs + '/ng2-file-upload/'));
});

gulp.task("copy-deps:es6-shim", function () {
    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
});

gulp.task("copy-deps", ["copy-deps:rxjs", 'copy-deps:angular2', 'copy-deps:systemjs', 'copy-deps:reflect-metadata', 'copy-deps:corejs', 'copy-deps:typescript', 'copy-deps:zonejs']);