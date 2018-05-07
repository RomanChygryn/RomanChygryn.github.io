var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify       = require('gulp-notify');

gulp.task('testing', function () {
    console.log('Gulp OK!');
});

gulp.task('serve',['sass'], function () {

   notify('BrowserSync started!').write('');

   browserSync.init({
       server: "./app"
   });

   gulp.watch('app/sass/*.scss', ['sass']);
   gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
        return gulp.src('app/sass/*.scss')
            .pipe(sass({errLogToConsole: false, outputStyle: 'compressed'}))
            .on('error', function(err) {
                notify().write(err);
                this.emit('end');
            })
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'IE 10']
            }))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.stream())
});

gulp.task('watch', function() {
    gulp.watch('app/sass/*scss', ['sass']);
});
gulp.task('default', ['serve', 'watch']);

