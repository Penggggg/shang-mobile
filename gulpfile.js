var gulp = require('gulp');
var git = require('gulp-git');
var fs = require('fs');

const child_process = require('child_process');
var workerProcess;

gulp.task('default',['run_test'] ,function( ) {
    console.log('run default')
})

gulp.task('run_test', function( ) {
    gulp.watch(['src/**','test/**'])
        .on('change', function( ){
            runTest( );
        })
    runTest( );
})

gulp.task('push_daily', function( ) {
    var CONFIG = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    var ver = CONFIG.version;
    var num = ver.replace(/\./g, '')/1 + 1;
    var newVer = num.toString( ).split('').join('.');
    CONFIG.version = newVer;
    console.log(CONFIG.version);
    git.checkout('daily/' + CONFIG.version, { args: '-b' }, function( ) {
        git.add({ args: '-A' });
        git.exec({ args: 'commit -am daily' }, function( ) {
            git.exec({ args: 'push origin daily' + CONFIG.version }, function( ) {
                fs.writeFileSync('./package.json', JSON.stringify( CONFIG ));
                console.log('push done!')
            })
        })
    })
})

function runTest( ) {
    try{ if( workerProcess!==undefined || workerProcess!==null ) {workerProcess.kill( );} }catch(e) {  }
    workerProcess = child_process.exec( 
        'mocha --compilers ts:ts-node/register ./test/**/*.test.tsx --require ./config/dom.env.js', function( error, stdout, stderr ) {
         if ( error ) { console.log( error.stack )}
         console.log( stdout );
         console.log( stderr )
    })
}