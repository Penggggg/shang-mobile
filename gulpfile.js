var gulp = require('gulp');
const child_process = require('child_process');
var workerProcess;

gulp.task('default',['run_test'] ,function(){
    console.log('run default')
})

gulp.task('run_test', function(){
    gulp.watch(['src/**','test/**'])
        .on('change', function( ){
            runTest( )
        })
})

function runTest( ) {
    try{ if( workerProcess!==undefined || workerProcess!==null ) {workerProcess.kill( );} }catch(e) {  }
    workerProcess = child_process.exec( 
        'mocha --compilers ts:ts-node/register ./test/**/*.test.ts', function( error, stdout, stderr ) {
         console.log( stdout);
    })
}