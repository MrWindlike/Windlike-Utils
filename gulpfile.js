var gp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


let scripts = [
	'array.js',
	'date.js',
	'fn.js',
	'math.js',
	'net.js',
	'string.js',
	'timing.js',
	'verification.js',
]

gp.task('concatUtils', function () {
	// 合并
	// gp.src(scripts).pipe(concat('utils.js')).pipe(gp.dest('./dist'));

	// 合并并压缩
	gp.src(scripts).pipe(concat('utils.js')).pipe(uglify()).pipe(gp.dest('./dist'));
})