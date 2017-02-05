/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 3
==============  
*/
//页面加载

$(function() {
    $banner = $('#banner');

    ///////////
    //banner //
    ///////////
    $banner.rhcarousel({ "imglist": ["./img/059c1b4b-94cd-4630-b04c-9a189b3a4285.jpg", "./img/88b6dad4-b26a-4c4d-a53d-51c41add7be2.jpg", "./img/107269b8-1478-4850-8320-21e6307bd3d1.jpg", "./img/8fcf3e58-3adf-48c2-9b3a-e6786291a1b3.jpg", "./img/ca11e774-32ab-4149-bac2-da2918f4a592.jpg"], "width": 1190, "height": 470 });
    ////////
    //tab //
    ////////
    $eva_switchable = $('.eva-switchable-triggers');
    $eva_switchable.on('mouseenter', 'li', function() {

        var $self = $(this);
        //切换+底边高亮
        $self.addClass('eva-switchable-active').siblings('li').removeClass('eva-switchable-active');
        // console.log($self.closest('ul').next().hasClass('eva-switchable-panels'));
        if ($self.closest('ul').next().hasClass('eva-switchable-panels')) {
            var $eva = $self.closest('ul').next();
        } else {
            var $eva = $self.closest('div').next('.eva-switchable-panels');
        }

        // console.log($eva)
        $eva.children('div').eq($self.index()).show().siblings().hide();

    });
    /////////////////////
    //border_animation //
    /////////////////////
    $('body').on('mouseenter', '.border_animation', function() {

        var $self = $(this);
        var _width = $self.outerWidth();
        var _height = $self.outerHeight();
        $self.children('.border_top').animate({ width: _width }).next().animate({ height: _height }).next().animate({ width: _width }).next().animate({ height: _height });
    }).on('mouseleave', '.border_animation', function() {
        var $self = $(this);
        $self.children('.border_top').animate({ width: 0 }).next().animate({ height: 0 }).next().animate({ width: 0 }).next().animate({ height: 0 });
    });
    //////////
    //floor //
    //////////
    //生成多层楼层
    for (var i = 0; i < 8; i++) {
        floor();
    }

    //封装生成结构函数
    function floor() {
        var $ytCard = $('.yt_card');
        // console.log($ytCard);
        //生成楼层结构
        var $yt_floor_mp = $('<div/>').addClass('ytWrap yt_floor_mp yt_floor_item').insertBefore($ytCard);
        //楼层头部
        var $floor_title = $('<div/>').addClass('floor_title').html('<a><h6>时尚名品</h6></a><div class="tit_recommend"></div>').appendTo($yt_floor_mp);
        //楼层导航
        var $floor_nav = $('<div/>').addClass('floor_nav').appendTo($yt_floor_mp);
        var $floor_nav_category = $('<ul/>').addClass('floor_nav_category').appendTo($floor_nav);
        for (var i = 0; i < 12; i++) {
            $('<li/>').html('<a>针织衫</a>').appendTo($floor_nav_category);
        }
        //品牌选择
        var $floorbarndSlide = $('<div/>').addClass('floorbarndSlide').appendTo($floor_nav);
        var $scroller = $('<div/>').addClass('scroller').appendTo($floorbarndSlide);
        var $eva_switchable_panels = $('<div/>').addClass('eva-switchable-panels').appendTo($scroller);
        for (var j = 0; j < 5; j++) {
            var $div = $('<div/>').appendTo($eva_switchable_panels);
            for (var k = 0; k < 4; k++) {
                $('<a/>').html('<img width="75" height="50" alt="" src="http://r.ytrss.com/rs/img/eccms/2016/3/9/0e00b125-0bd0-4d66-aedc-59d543afef8d.jpg">').appendTo($div);
            }
        }
        /////////
        //左右按钮 //
        /////////
        $('<a/>').addClass('eva-switchable-prev').html('prev').appendTo($floorbarndSlide);
        $('<a/>').addClass('eva-switchable-next').html('next').appendTo($floorbarndSlide);

        ////////
        //楼层边 //
        ////////
        var $floor_slide = $('<div/>').addClass('floor_slide').appendTo($yt_floor_mp);
        var $floor_banner_slide = $('<div/>').addClass('floor_banner_slide').appendTo($floor_slide);
        var $floor_b_pannels = $('<div/>').addClass('floor_b_pannels').appendTo($floor_banner_slide);
        var $eva_switchable_panels = $('<div/>').addClass('eva-switchable-panels').appendTo($floor_b_pannels);
        $('<a/>').css({'display':'block','float':'left'}).html('<img width="390" height="370" alt="" img-src="http://r.ytrss.com/rs/img/eccms/2017/1/23/c1dbc81a-5a95-4ef4-b179-4d7bb2eedafe.jpg" src="http://r.ytrss.com/rs/img/eccms/2017/1/23/c1dbc81a-5a95-4ef4-b179-4d7bb2eedafe.jpg">').appendTo($eva_switchable_panels);
        $('<a/>').css({'display':'block','float':'left'}).html('<img width="390" height="370" alt="" img-src="http://r.ytrss.com/rs/img/eccms/2017/1/23/ce711069-166b-4b02-ae94-c9303bd0133a.jpg" src="http://r.ytrss.com/rs/img/eccms/2017/1/23/ce711069-166b-4b02-ae94-c9303bd0133a.jpg">').appendTo($eva_switchable_panels);
        $('<ul/>').addClass('floor_slide_trigger').html('<li class="eva-switchable-active"></li><li></li>').appendTo($floor_banner_slide);
        $('<a/>').addClass('eva-switchable-prev eva-switchable-disable-btn').html('pre').css({ 'left': 0 }).appendTo($floor_banner_slide);
        $('<a/>').addClass('eva-switchable-next').html('next').css({ 'right': 0 }).appendTo($floor_banner_slide);

        //////////
        // 楼梯广告 //
        //////////
        var $floor_banner = $('<div/>').addClass('floor_banner').appendTo($yt_floor_mp);
        var $floor_banner_main = $('<div/>').addClass('floor_banner_main').appendTo($floor_banner);
        for (var i = 0; i < 4; i++) {
            var $product_block = $('<div/>').addClass('product_block').appendTo($floor_banner_main);
            var $border_animation = $('<div/>').addClass('border_animation').appendTo($product_block);
            $('<div/>').addClass('border border_top').css({ 'width': 0 }).appendTo($border_animation);
            $('<div/>').addClass('border border_right').css({ 'height': 0 }).appendTo($border_animation);
            $('<div/>').addClass('border border_bootom').css({ 'width': 0 }).appendTo($border_animation);
            $('<div/>').addClass('border border_left').css({ 'height': 0 }).appendTo($border_animation);
            $('<div/>').addClass('img_wrap').html('<a target="_blank" href="http://www.yintai.com/product/list-10002015-10002017.html?intcmp=GGW20160809_home_mp_c4" id="yui_3_13_0_1_1486093763883_2665"><img width="270" height="180" alt="" img-src="http://r.ytrss.com/rs/img/eccms/2017/1/16/5565bf2d-038e-4c7b-b6af-112e041c0b18.jpg" src="http://r.ytrss.com/rs/img/eccms/2017/1/16/5565bf2d-038e-4c7b-b6af-112e041c0b18.jpg" id="yui_3_13_0_1_1486093763883_2664"></a>').appendTo($border_animation);
        }
    }

    //楼层动画效果
    //品牌动画(失败)
    var $floorbarndSlide = $('.floorbarndSlide');
    $floorbarndSlide.on('click','a',function(){
    	var $self = $(this);
    	var $evaSwitchable = $self.siblings('div').find('.eva-switchable-panels');
    	var _width = $evaSwitchable.outerWidth();
    	var _cwidth = $evaSwitchable.children('div').outerWidth();
    	$evaSwitchable.css({'left':_cwidth})
    	console.log(_cwidth);
    });
    //banner动画
    var $floor_banner_slide = $('.floor_banner_slide');
    $floor_banner_slide.on('click','a',function(){
    	var $self = $(this);
    	var $evaSwitchable = $self.siblings('div').find('.eva-switchable-panels');
    	var $floor_slide_trigger = $self.siblings('.floor_slide_trigger');
    	var _width = -$evaSwitchable.find('img').outerWidth();
    	if($self.hasClass('eva-switchable-next')){
    		$evaSwitchable.css({'position':'absolute','left':_width});
    		//图标高亮
    		$floor_slide_trigger.children('li').eq(1).addClass('eva-switchable-active').siblings('li').removeClass('eva-switchable-active');
    	}else{
    		$evaSwitchable.css({'position':'absolute','left':0});
    		$floor_slide_trigger.children('li').eq(0).addClass('eva-switchable-active').siblings('li').removeClass('eva-switchable-active');
    	}
    });

    //楼梯效果(失败)
    var $float_nav_wrap = $('.float_nav_wrap');
    $(window).on('scroll',function(){
    	var $scrollTop = $('body').scrollTop();
    	if($scrollTop<1300){
    		$float_nav_wrap.hide();
    	}else{
    		$float_nav_wrap.show();
    	}
    	// var $yt_floor_mp = $('.yt_floor_mp');
    	// console.log($yt_floor_mp.offset().top);
    })
});
