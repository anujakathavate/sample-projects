var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var sass = require('gulp-sass');
var htmlreplace = require('gulp-html-replace');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();

var path = {
	HTML: 'src/index.html',
	ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html', 'src/scss/*.scss', 'src/scss/**/*.scss'],
	JS: ['src/js/*.js', 'src/js/**/*.js'],
	SCSS: ['src/scss/*.scss', 'src/scss/**/*.scss'],
	MINIFIED_OUT: 'build.min.js',
	DEST_SRC: 'dist/src/js',
	DEST_CSS: 'dist/src/css',
	DEST_BUILD: 'dist/build',
	DEST: 'dist'
};

gulp.task('transform', function() {
	return gulp.src(path.JS)
		.pipe(babel({presets: ['es2015', 'react']}))
	    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('browserify', function() {
	return gulp.src('dist/src/js/App.js')
		.pipe(browserify())
		.pipe(gulp.dest('./app/js/'))
		.pipe(browserSync.stream());
});

gulp.task('sass', function () {
	return gulp.src(path.SCSS)
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest(path.DEST_CSS));
});

gulp.task('copyCSS', function () {
	gulp.src("dist/src/css/main.css")
	    .pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream());
});

gulp.task('copyHTML', function() {
  	gulp.src(path.HTML)
    	.pipe(gulp.dest(path.DEST));
});

// Default task
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
	browserSync.init({
        proxy: "localhost:3000"
    });

    gulp.watch(path.ALL, ['transform', 'browserify', 'sass', 'copyCSS', 'copyHTML']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// TODO: browserify is not working as expected. Some times we will have to save the file twise.
gulp.task('default', ['transform', 'browserify' ,'sass', 'copyCSS', 'copyHTML', 'serve']);
gulp.task('dist', ['transform','sass', 'copyCSS', 'copyHTML']);

// Production Build. To be used later.
// TODO: Make sure you test this one.
// gulp.task('build', function() {
// 	gulp.src(path.JS)
// 		.pipe(babel({presets: ['es2015', 'react']}))
// 	    //.pipe(react())
// 	    .pipe(concat(path.MINIFIED_OUT))
// 	    .pipe(uglify(path.MINIFIED_OUT))
// 	    .pipe(gulp.dest(path.DEST_BUILD));
// });
//
// // TODO: Make sure you test this one.
// gulp.task('replaceHTML', function() {
// 	gulp.src(path.HTML)
//     	.pipe(htmlreplace({
//       		'js': 'build/' + path.MINIFIED_OUT
//     	}))
//     	.pipe(gulp.dest(path.DEST));
// });
//
// // TODO: Make sure you test this one.
// gulp.task('production', ['replaceHTML', 'build']);
