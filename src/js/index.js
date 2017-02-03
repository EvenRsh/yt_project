/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 3
==============  
*/
//页面加载

$(function() {
   $banner = $('#banner');
   
   //banner
   $banner.rhcarousel({"imglist":["./img/059c1b4b-94cd-4630-b04c-9a189b3a4285.jpg","./img/88b6dad4-b26a-4c4d-a53d-51c41add7be2.jpg","./img/107269b8-1478-4850-8320-21e6307bd3d1.jpg","./img/8fcf3e58-3adf-48c2-9b3a-e6786291a1b3.jpg","./img/ca11e774-32ab-4149-bac2-da2918f4a592.jpg"],"width":1190,"height":470});
   //tab
   $eva_switchable = $('.eva-switchable-triggers');
   $eva_switchable.on('mouseenter','li',function(){
   	
   		var $self = $(this);
   		//切换+底边高亮
   		$self.addClass('eva-switchable-active').siblings('li').removeClass('eva-switchable-active');
   		// console.log($self.closest('ul').next().hasClass('eva-switchable-panels'));
   		if($self.closest('ul').next().hasClass('eva-switchable-panels')){
   			console.log('223');
   			var $eva = $self.closest('ul').next();
   		}else{
   			var $eva = $self.closest('div').next('.eva-switchable-panels');
   		}
   			
   		// console.log($eva)
   		$eva.children('div').eq($self.index()).show().siblings().hide();
   		
   });
   //border_animation
   $('body').on('mouseenter','.border_animation',function(){
   	
   		var $self = $(this);
   		$self.children('.border_top').animate({width:220}).next().animate({height:260}).next().animate({width:220}).next().animate({height:260});
   }).on('mouseleave','.border_animation',function(){
   		var $self = $(this);
   		$self.children('.border_top').animate({width:0}).next().animate({height:0}).next().animate({width:0}).next().animate({height:0});
   })
   //floor
   var $ytCard = $('.yt_card');
   // console.log($ytCard);
   //生成楼层结构
   var $yt_floor_mp = $('<div/>').addClass('ytWrap yt_floor_mp yt_floor_item').insertBefore($ytCard);
   //楼层头部
   var $floor_title = $('<div/>').addClass('floor_title').html('<a><h6>时尚名品</h6></a><div class="tit_recommend"></div>').appendTo($yt_floor_mp);
   //楼层导航
   var $floor_nav = $('<div/>').addClass('floor_nav').appendTo($yt_floor_mp);
   console.log($('.floor_nav_category').children('li').length);
   var $floor_nav_category = $('<ul/>').addClass('floor_nav_category').appendTo($floor_nav);
   for(var i=0;i<12;i++){
   		$('<li/>').html('<a>针织衫</a>').appendTo($floor_nav_category);
   }
   //品牌选择
   var $floorbarndSlide = $('<div/>').addClass('floorbarndSlide').appendTo($floor_nav);
   var $scroller = $('<div/>').addClass('scroller').appendTo($floorbarndSlide);
   var $eva_switchable_panels = $('<div/>').addClass('eva-switchable-panels').appendTo($scroller);
   for(var j=0;j<20;j++){
   		var $aa = $('<a/>').html('<img width="75" height="50" alt="" data-src="http://r.ytrss.com/rs/img/eccms/2016/3/9/0e00b125-0bd0-4d66-aedc-59d543afef8d.jpg">')
   		if(j%4 == 0){
   			$('<div/>').append($aa).appendTo($eva_switchable_panels);
   		}
   }
});
