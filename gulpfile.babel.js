// task
import gulp from "gulp";
import del from "del";
import server from "gulp-webserver";
// sass
import sass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
// js
import babelify from "babelify";
import browserify from "gulp-bro";

sass.compiler = require("node-sass");

const routes = {
    scss: {
        src: "./src/scss/style.scss",
        dest: "./dest/css",
        watch: "./src/scss/**/*.scss",
    },
    js: {
        src: "./src/js/main.js",
        dest: "./dest/js",
        watch: "./src/js/**/*.js",
    },
    img: {},
};

const clean = () => del(["dest"]);

const liveServer = () =>
    gulp.src("dest").pipe(server({ livereload: true, open: true }));

const js = () =>
    gulp
        .src(routes.js.src)
        .pipe(
            browserify({
                transform: [
                    babelify.configure({ presets: ["@babel/preset-env"] }),
                    ["uglifyify", { global: true }],
                ],
            })
        )
        .pipe(gulp.dest(routes.js.dest));

const style = () =>
    gulp
        .src(routes.scss.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(autoPrefixer())
        .pipe(minify())
        .pipe(gulp.dest(routes.scss.dest));

const watch = () => {
    gulp.watch(routes.scss.watch, style);
    gulp.watch(routes.js.src, js);
};

const prepare = gulp.series([clean]);
const assets = gulp.series([style, js]);
const live = gulp.parallel([liveServer, watch]);

export const dev = gulp.series([prepare, assets, live]);
