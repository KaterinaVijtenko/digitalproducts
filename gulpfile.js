
let project_folder = 'dist';
let source_folder = '#src';

let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        fonts: project_folder + '/fonts/',
    },
    src: {
        html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
        css: source_folder + '/scss/style.scss',
        js: source_folder + '/js/*.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,webp,ico,gif}',
        fonts: source_folder + '/fonts/*.{ttf,woff,woff2}',
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,webp,ico,gif}',
    },
    clean: './' + project_folder + '/'
}



let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass')(require('sass'));

function img() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: true
    })
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
}

function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(html, css, js, img, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.css = css;
exports.html = html;
exports.img = img;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = watch;