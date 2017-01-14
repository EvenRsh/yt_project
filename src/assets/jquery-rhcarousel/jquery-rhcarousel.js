;(function ($) {
	$.fn.extend({
		rhcarousel:function(options){
			/* 编写轮播图插件，要求如下：
			    - 是否自动轮播
			    - 是否显示小图
			    - 是否显示左右按钮
			    - 可设置轮播间隔时间
			    - 轮播类型: fade:淡入淡出, vertial:垂直滚动, horizontal:水平滚动, show:幻灯片
			    - 默认显示第几张图片*/
			var defaults = {
						imglist:[],//必填
						width:810,
						height:320,
			    	autoPlay:true,
			    	showSmls:true,
			    	showSmall:false,
			    	showButton:true,
			    	page:'right',//center,left
			    	duration:1000,
			    	index:0,
			    	type:'vertial'//fade,horizontal,show,vertial(默认)
			    };
		    //扩展
		    var opt = $.extend({},defaults,options);



			return this.each(function(){

			    /*var $self = $(this);
			    var $ul = $self.find('ul');
			    var $li = $ul.find("li");
			    var $img = $li.find('img');
			    
			    var index = 0;
			    var len,speed;
				len = $li.length;
			    //初始化
			    init();
			    var defaults = {
			    	type:"fade",
			    }

			    var opt = $.extend({},defaults,options);
			    switch(opt.type){
			    	case 'vertial':
			    		_type='top';
			    		speed=$self.outerHeight();
			    		break;
			    	case 'horizontal':
			    		_type='left';
			    		speed=$self.outerWidth();
			    		$ul.css({
			    			width:speed*(len+1)
			    		});
			    		break;
		    		case 'fade':
		    			_type = 'opacity';
		    			$li.not(':first').fadeOut();
		    			break;
		    		case 'show':
		    			_type = 'show';
		    			$li.not(':first').hide();
		    			break;

			    	
			    }
			    function init(){
			    	// _type = "top";
					$self.addClass('rhcarousel');
					var $liclone = $li.clone().appendTo($ul);
					var timer = setInterval(function(){
			    		move(_type ,speed);
			    	},3000);
			    }
			    function move(_tpye,speed){
					index++;
					if(_type != 'opacity' && _type != 'show'){
						if(index > len){
							index = 1;
							$ul.css({
								[_type]:0
							})
						}
						$ul.animate({
							[_type]:-speed*index
						})
			    	}else if(_type == 'opacity'){
			    		if(index >= len){
							index = 0;
						}
			    		$($li[index]).fadeIn().siblings('li').fadeOut();
			    	}else if(_type == 'show'){
			    		if(index >= len){
							index = 0;
						}
						$($li[index]).show().siblings('li').hide();
			    	}
			    }
*/				
				var $self = $(this);
				var len = opt.imglist.length;
				//初始化
				init();	
				function init(){
					//添加默认类
					$self.addClass('rhcarousel');
					//生成大图
					var imghtml = opt.imglist.map(function(url,index){
						return '<li><img src="'+url+'" /></li>';
					}).join('\n');
					var $bigWrap = $('<div/>').addClass('big-wrap').appendTo($self);
					var $big = $('<ul/>').addClass('big').html(imghtml).appendTo($bigWrap);
					


					//生成小图
					if(opt.showSmall){
						var $small = $big.clone().attr('class','small').appendTo($self);
						//点击切换
						$small.on('click','li',function(){
							opt.index = $(this).index();
							showPic();
						})
					}

					//生成按钮
					if(opt.showButton){
						var $btnPrev = $('<div/>').addClass('btn-prev').html('&lt;').appendTo($bigWrap);
						var $btnNext = $('<div/>').addClass('btn-next').html('&gt;').appendTo($bigWrap);

						//点击
						$btnPrev.on('click',function(){
							opt.index--;
							showPic();
						});
						$btnNext.on('click',function(){
							opt.index++;
							showPic();
						})
					}

					//生成分页
					if(opt.page){
						var $page = $('<div/>').addClass('page').html(opt.imglist.map(function(url,idx){
							return '<span >'+(idx+1)+'</span>';
						}).join('\n')).appendTo($bigWrap);
						//点击
						$page.on('click','span',function(){
							opt.index = $(this).index();
							showPic();
						});
						if(opt.page ==='center'){
							$page.addClass('page-center');
						}
					}
					//是否无缝
					if(opt.showSmls){
						var $bigClone = $big.children('li').clone().appendTo($big);
					}


					//设置样式

					$self.css({
						width:opt.width
					});
					$bigWrap.css({
						height:opt.height
					})
					//轮播(默认垂直)

					if(opt.autoPlay){
						//鼠标移入移出
						$self.on('mouseenter',function(){
							clearInterval($self.timer);
						}).on('mouseleave',function(){
							$self.timer = setInterval(function(){
								opt.index++;
								showPic();
							},opt.duration);
						}).trigger('mouseleave');
						//trigger手动触发事件

					};
					//刷新页面当前高亮
					showPic();


					//显示图片
					function showPic(){
						if(!opt.showSmls){
							if(opt.index >= len ){
								opt.index = 0;
							}else if(opt.index < 0){
								opt.index = len - 1;
							}
						}else{
							if(opt.index > len ){
								opt.index = 1;
								$big.css('top',0);
							}else if(opt.index < 0){
								opt.index = len-1;
								$big.css('top',-opt.height*len);
							}
						}
						
						$big.animate({
							top: -opt.height*opt.index,
						});

						//小图高亮
						if(opt.showSmall){
							$small.children().eq(opt.index).animate({opacity:1}).siblings('li').animate({opacity:0.5})
						}
						//分页高亮
						if(opt.page){
							$page.children().removeClass('active').eq(opt.index).addClass('active');
							if(opt.index == len){
								$page.children().eq(0).addClass('active');
							}
						}
					}

				}

			})
		}
	})

})(jQuery);