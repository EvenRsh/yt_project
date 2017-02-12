/*
============================================
    ver 1.0.1 create by EvenRH 2017 2 - 12
============================================
 */
"use strict"
;( function($) {
	$.fn.extend({
	rhtab :function(options){
			console.log("调用rhtab插件");
			//默认设置
			let defaults = {
				tabs:`nav_tabs`,
				tablist:`toogletab`,
				active:`active`,
				content:`tab_content`,
				pane:`tab_pane`,
				selectd:`selected`,
				type:'mouseenter'//'click'
			}

			let opt = $.extend({},defaults,options);
			return this.each(function(){
				let $self = $(this);
				console.log(`.${opt.tabs}>.${opt.tablist}`);
				$self.on(`${opt.type}`,`.${opt.tabs}>.${opt.tablist}`,function(){
					let self = $(this);
					let $panes = $self.find(`.${opt.content}>.${opt.pane}`);
					console.log(self);
					let ac = `${opt.active}`;
					let se = `${opt.selectd}`;
					if(!self.hasClass(ac)){
						self.addClass(ac).siblings().removeClass(ac);
						let index = self.index();
						console.log(se);
						$panes.eq(index).addClass(se).siblings().removeClass(se);
					}
				});

			})
		}
	})	
})(jQuery);