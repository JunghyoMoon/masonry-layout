// task
import gulp, { watch } from "gulp";
import del from "del";
import server from "gulp-webserver";
// sass
import sass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
// js
import babelify from "babelify";
import browserify from "gulp-bro";
import uglify from "uglifyify";

sass.compiler = require("node-sass");

const routes = {
    scss: {
        src: "./src/scss/**/*.scss",
        dest: "./dest/css",
        watch: "",
    },
    js: {
        src: "./src/js/main.js",
        dest: "./dest/js",
        watch: "",
    },
    img: {},
};

const prepare = gulp.series([]);
const assets = gulp.series([]);
const live = gulp.parallel([]);

export const dev = gulp.series([prepare, assets, live]);
