const { task, series } = require('gulp');
const browserSync = require('browser-sync');

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

task('default', series('server'));
