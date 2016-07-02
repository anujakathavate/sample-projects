var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var sass = require('gulp-sass');
var htmlreplace = require('gulp-html-replace');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

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
	gulp.src(path.JS)
		.pipe(babel({presets: ['es2015', 'react']}))
		//.pipe(react())
	    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('browserify', function() {
	gulp.src('dist/src/js/App.js')
		.pipe(browserify())
		.pipe(gulp.dest('./build/js/'));
});

gulp.task('sass', function () {
	return gulp.src(path.SCSS)
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest(path.DEST_CSS));
});

gulp.task('copyCSS', function () {
	// TODO: For later use
	return gulp.src(path.DEST_CSS)
	    .pipe(gulp.dest('./build/css'));
});

gulp.task('copyHTML', function() {
  	gulp.src(path.HTML)
    	.pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
  	gulp.watch(path.ALL, ['transform', 'browserify', 'sass', 'copyCSS', 'copyHTML']); // TODO: Use this later
	//gulp.watch(path.ALL, ['transform', 'sass', 'copyHTML']);
});

// TODO: Make sure you test this one.
gulp.task('build', function() {
	gulp.src(path.JS)
		.pipe(babel({presets: ['es2015', 'react']}))
	    //.pipe(react())
	    .pipe(concat(path.MINIFIED_OUT))
	    .pipe(uglify(path.MINIFIED_OUT))
	    .pipe(gulp.dest(path.DEST_BUILD));
});

// TODO: Make sure you test this one.
gulp.task('replaceHTML', function() {
	gulp.src(path.HTML)
    	.pipe(htmlreplace({
      		'js': 'build/' + path.MINIFIED_OUT
    	}))
    	.pipe(gulp.dest(path.DEST));
});

// TODO: Make sure you test this one.
gulp.task('production', ['replaceHTML', 'build']);

// Default task
gulp.task('default', ['transform', 'browserify', 'sass', 'copyCSS', 'copyHTML', 'watch']);
