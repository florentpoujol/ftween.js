var gulp = require('gulp');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var insert = require('gulp-insert');

var metadata = require('./package');
var header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';

gulp.task('lint', function() {
	return gulp.src('src/ftween.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('min', function() {
	return gulp.src([
		'src/ftween.js'
	])
	.pipe(uglify())
	.pipe(insert.prepend(header))
	.pipe(rename('ftween.min.js'))
	.pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
	gulp.watch('src/*.js', ['build']);
});

gulp.task('build', ['lint', 'min']);

gulp.task('default', ['build']);
