;(function ($) {
	/*
        @编写一个弹窗插件
        要求如下：
        1）默认居中显示，弹窗有标题，有关闭按钮，有遮罩层，可拖动，按ESC键关闭弹窗（40）
        2）可随意定制弹窗宽高（5）
        3）可设定是否显示遮罩层（5）
        4）可设定是否显示标题（5）
        5）可自定弹窗内容（10）
        6）可设定是否允许拖动（10）
        7）可设定遮罩层透明度（10）
        8）可设定回调函数，弹窗弹出后，能对弹窗做其他操作（15）
     */

	$.fn.rhpopover = function(options){
		//默认配置
		var defaults = {
			width:480,
			height:300,
			draggeable:true,
			position:'center',//{top:xx,left:xx}
			title:'弹窗',
			content:'弹窗内容',
			overlay:0.3,
			callback:null//默认没有
		}
		//用opt扩展defaults
		var opt = $.extend({},defaults,options);

		this.each(function(){
			var $self = $(this);
			var $wd = $(window);
			$self.addClass('popover').css({
				width:opt.width,
				height:opt.height
			});
			if(opt.position === 'center'){
				$self.css({
					top:($wd.height()/2-$self.outerHeight()/2+$wd.scrollTop()),
					left:($wd.width()/2-$self.outerWidth()/2+$wd.scrollLeft())
				});
			}else{
				$self.css({
				top:opt.position.top,
				left:opt.position.left
				});
			}
			//生成html结构
			if(opt.title){
				var $title = $('<div/>').addClass('title').html(opt.title).appendTo($self);
			}
			var $content = $('<div/>').addClass('content').html('文本框内容').appendTo($self);
			var $btnClose = $('<span/>').addClass('btn-close').html("&times;").appendTo($self);
			//遮罩层
			if(opt.overlay){
				var $overlay = $('<div/>').addClass('overlay').css({
					opacity:opt.overlay
				}).insertAfter($self);
			}

			$self.show();
			$.type(opt.callback) === 'function' && opt.callback($self);

			//拖拽效果
			if(opt.draggeable && opt.title){
				$title.on('mousedown.rhpopover',function(e){
				var ox = e.offsetX;
				var oy = e.offsetY;
				$(document).on('mousemove.rhpopover',function(evt){
					$self.css({
						position:'absolute',
						left:evt.clientX-ox,
						top:evt.clientY-oy
						});
					});
				});
				$(document).on('mouseup.rhpopover',function(){
					$(document).off('mousemove.rhpopover');
				});
			}
			//关闭
			$btnClose.on('click',function(){
				close()
			});
			//esc
			$(document).on('keyup',function(e){
				if(e.keyCode === 27){
					if($self.is($('.popover').last())){
						close();
					}
				}
			});
				//封装
			function close(){
				$self.remove();
				if($overlay){
					$overlay.remove();
				}
				

			}
		});
	
		return this;
	}
})(jQuery);