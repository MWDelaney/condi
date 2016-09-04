var gulp		= require('gulp');
var sass 		= require('gulp-sass');
var imagemin     = require('gulp-imagemin');
var mainBowerFiles		= require('main-bower-files');
var uglify       			= require('gulp-uglify');
var wiredep 					= require('wiredep').stream;
var runSequence 			= require('run-sequence');

// ### Images
// `gulp images` - Run lossless compression on all the images.
gulp.task('images', function() {
	return gulp.src('./assets/images/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
		}))
		.pipe(gulp.dest('./dist/images'));
});


// ### Clean
// `gulp clean` - Deletes the build folder entirely.
gulp.task('clean', require('del').bind(null, ['./dist']));

// ### Styles
// `gulp styles` - Compiles, combines, and optimizes Bower CSS and project CSS.
// By default this task will only log a warning if a precompiler error is
// raised. If the `--production` flag is set: this task will fail outright.
gulp.task('styles', function() { 
	return gulp.src('./assets/styles/main.scss')
		.pipe(wiredep())
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'));
});


//Build task
gulp.task('build', function(callback) {
	runSequence('clean',
							'images',
							'styles',
							callback);
});


// ### Gulp
// `gulp` - Run a complete build. To compile for production run `gulp --production`.
gulp.task('default', function() {
	gulp.start('build');
});
