var gulp		= require('gulp');
var sass		= require('gulp-sass');
var imagemin		= require('gulp-imagemin');
var flatten		= require('gulp-flatten');
var mainBowerFiles	= require('main-bower-files');
var concat		= require('gulp-concat');
var uglify		= require('gulp-uglify');
var wiredep		= require('wiredep').stream;
var runSequence		= require('run-sequence');

var config = {
 	dist: './dist',
 	assets: './assets' 
}

// ### Images
// `gulp images` - Run lossless compression on all the images.
gulp.task('images', function() {
	return gulp.src(config.assets + '/images/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
		}))
		.pipe(gulp.dest(config.dist + '/images'));
});

// Scripts
gulp.task("bower_scripts", function(){
	return gulp.src(mainBowerFiles('**/*.js'))
		.pipe(concat('package.js'))
		.pipe(gulp.dest(config.dist + '/js'))
});

// Scripts
gulp.task("scripts", function(){
	return gulp.src(config.assets + '/scripts/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest(config.dist + '/js'))
});

// ### Fonts
gulp.task('fonts', function() {
	return gulp.src(mainBowerFiles(['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2']))
		.pipe(flatten())
		.pipe(gulp.dest(config.dist + '/fonts'));
});


// ### Clean
// `gulp clean` - Deletes the build folder entirely.
gulp.task('clean', require('del').bind(null, ['./dist']));

// ### Styles
// `gulp styles` - Compiles, combines, and optimizes Bower CSS and project CSS.
// By default this task will only log a warning if a precompiler error is
// raised. If the `--production` flag is set: this task will fail outright.
gulp.task('styles', function() { 
	return gulp.src(config.assets + '/styles/main.scss')
		.pipe(wiredep())
		.pipe(sass())
		.pipe(gulp.dest(config.dist + '/css'));
});


//Build task
gulp.task('build', function(callback) {
	runSequence('clean',
			'images',
			'bower_scripts',
			'scripts',
			'styles',
			'bootstrap_fonts',
			callback);
});


// ### Gulp
// `gulp` - Run a complete build. To compile for production run `gulp --production`.
gulp.task('default', function() {
	gulp.start('build');
});
