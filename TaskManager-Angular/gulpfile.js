var gulp = require('gulp');

gulp.task('Copy-dist-to-wwwroot',
() => {
    return gulp.src('./dist/task-manager/**/*').pipe(
        gulp.dest('C:\\Users\\YoussefBaba\\Desktop\\My_Computer\\My-Projects\\Cours\\Angular\\Angular_Complete_Guide\\MvcTaskManger\\MvcTaskManger\\wwwroot'));
});

gulp.task('default', () => {
    gulp.watch('./dist/task-manager', gulp.series('Copy-dist-to-wwwroot'));
});