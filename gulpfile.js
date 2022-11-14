const gulp = require('gulp'),
    {series, parallel, src, dest, watch} = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    imagecomp = require('compress-images'),
    pathJS = 'src/assets/js/**/*.js';

function browsersync() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false,
        online: true,
    })
}

function scripts() {
    return src([
        pathJS,
        '!src/assets/js/**/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(dest('src/assets/js/'))
    .pipe(browserSync.stream())
}

function styles() {
    return src('src/assets/scss/main.scss')
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(dest('src/assets/css/'))
    .pipe(browserSync.stream())
}

async function images() {
	imagecomp(
        "src/assets/images/**/*",
		"src/assets/dest/",
		{ compress_force: false, statistic: true, autoupdate: true }, false, 
		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } }, 
		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
		{ svg: { engine: "svgo", command: "--multipass" } },
		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
		function (err, completed) { 
			if (completed === true) {
				browserSync.reload()
			}
		}
	)
}

function watcher() {
    watch('src/assets/scss/**/*.scss', styles);
    watch([pathJS, '!src/assets/js/**/app.js'], scripts);
    watch('**/*.html').on('change', browserSync.reload);
    watch('src/assets/images/**/*', images);
}

function buildcopy() {
    return src([
        'src/assets/js/**.js',
        'src/assets/css/app.css',
        'src/assets/fonts/**/*',
        'src/assets/dest/**/*',
        '**/*.html'
    ], {
        base: './'
    })
    .pipe(dest('dist'))
}

exports.browsersync = browsersync;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.default = parallel(styles, scripts, browsersync, images, watcher);
exports.build = series(styles, scripts, images, buildcopy);