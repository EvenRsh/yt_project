;(function ($) {
	$.fn.extend({
	rhzoom :function(options){

			//默认设置
			var defaults = {
				width:300,
				height:300,
				gap:30,
				position:'right',
			}

			var opt = $.extend({},defaults,options);
			return this.each(function(){
				var $self = $(this);
				var $smallImg = $self.find('img');

				//初始化
				init();
				function init(){
					//获取大图路径
					var bigUrl = $smallImg.data('big');
					//添加默认样式
					$self.addClass('rhzoom');
					$self.css({
						width:$smallImg.outerWidth(),
						height:$smallImg.outerHeight()
					});

					//生成html结果
					var $lens = $('<span/>').addClass('lens').hide().appendTo($self);
					var $bigLens = $('<div/>').addClass('rhbzoom').append('<img src="'+bigUrl+'"/>').hide().appendTo('body');

					//设置样式
					var bigLeft,bigTop;
					if(opt.position === 'right'){
						bigLeft = $self.offset().left+ $smallImg.outerWidth()+opt.gap;
						bigTop = $self.offset().top;
					}

					$bigLens.css({
						width:opt.width,
						height:opt.height,
						top:bigTop || opt.position.top,
						left:bigLeft || opt.position.left
					})

					var $bigImg = $bigLens.find('img');
					//计算比例
					var ratio ;

					$self.on('mouseenter',function(){
						$lens.show();
						$bigLens.show();
						ratio = $smallImg.outerWidth()/$bigImg.outerWidth();
					})

					//鼠标移除,移出大图
					.on('mouseleave',function(e){
							$lens.hide();
							$bigLens.hide();
					})

					//移动效果

					.on('mousemove',function(e){
						var _left = e.clientX - $lens.outerWidth()/2 - $self.offset().left;
						var _top = e.clientY - $lens.outerHeight()/2 - $self.offset().top;

						//防止移出边界
						if(_left <= 0){
							_left = 0;
						}else if(_left >= $smallImg.outerWidth()-$lens.outerWidth()){
							_left = $smallImg.outerWidth()-$lens.outerWidth()
						}
						if(_top <= 0){
							_top = 0
						}else if(_top >= $smallImg.outerHeight()-$lens.outerHeight()){
							_top = $smallImg.outerHeight()-$lens.outerHeight()
						}

						$lens.css({
							top:_top,
							left:_left
						});
						$bigImg.css({
							top:-_top/ratio,
							left:-_left/ratio
						});

					})

				}

			})
		}
	})	
})(jQuery);