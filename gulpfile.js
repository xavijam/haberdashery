var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');


gulp.task('default', function(){
  gulp.src(['./app/fonts/icon_font/svgs/*.svg'])
    
    .pipe(iconfontCss({
      fontName: 'haberdasheryIcon',
      path: './app/fonts/icon_font/templates/_icons.scss',
      targetPath: '../_scss/icon-font.scss',
      fontPath: './app/fonts/'
    }))

    .pipe(iconfont({
      fontName: 'haberdasheryIcon', // required
      appendCodepoints: true // recommended option
    }))

    .pipe(gulp.dest('app/fonts/'));
});