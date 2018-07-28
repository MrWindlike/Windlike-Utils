var gp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


let scripts = [
  'dist/*.js',
  'dist/**/*.js',
];

gp.task('build', function () {
  // 合并
  gp.src(scripts).pipe(concat('utils.js')).pipe(gp.dest('./release'));

  // 合并并压缩
  gp.src(scripts).pipe(concat('utils.min.js')).pipe(uglify()).pipe(gp.dest('./release'));
});