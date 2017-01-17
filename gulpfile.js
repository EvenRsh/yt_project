//请求模块	
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
//创建任务
//目地:编译sass
gulp.task('buildSass', function() {
  //查找需要编译的文件
  gulp.src('./src/sass/*.scss')

  	//编译.scss文件
  	.pipe(sass({outputStyle:'compact'}))
  	.pipe(gulp.dest('./src/css'))
//.on('error',sass.logError)
  	//编译成功后,
  	.pipe(browserSync.reload({stream:true}))
});

//创建监听任务
gulp.task('jtSass',function(){
	// 监听文件，当文件有修改时，执行buildSass任务
	gulp.watch('./src/sass/*.scss',['buildSass']);
});

//创建静态服务器
gulp.task('server',function(){
	gulp.watch('./src/sass/*.scss',['buildSass']);
	browserSync({

		/*server:{
			baseDir:'./src'
		},*/
		//port:4000;修改端口号
		//代理
		proxy:'http://localhost/yt',
		files:['./src/html/*.html','./src/*.html']

	});
});