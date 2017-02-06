/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 4
==============  
*/
//页面加载

$(function() {
    console.log('调用该js');
    //放大镜效果
    var $magnifier_wrap = $('.magnifier-wrap');
    $magnifier_wrap.rhzoom({ width: 500, height: 500});

    //小图tab效果
    var $ew_c_list = $('.ew-c-list');
    $ew_c_list.on('mouseenter','li',function(){
    	var $self = $(this);
    	var $img = $self.find('img');
    	var _src = $img.attr('data-src');
    	var _databig = $img.attr('data-big');
    	var $cimg = $magnifier_wrap.find('img');
    	$cimg.attr({'src':_src,'data-big':_databig});
    	// console.log(_src,_databig);
    });

    //selected效果
    var $sel = $('.sel');
    $sel.on('click','.item',function(){
    	var $self = $(this);
    	$self.addClass('selected').siblings('.item').removeClass('selected');
    });

    //商品的数量变化
    var $setCount = $('#setCount');
    var $buyNum = $('#buyNum');
    $setCount.on('click','a',function(){
    	var $self =$(this);
    	var _val = $buyNum.val()*1;
    	if($self.hasClass('p-num-add')){
    		_val++;
    		if(_val>99){
    			alert('数量不能大于99')
    			return
    		}
    		$buyNum.val(_val);
    	}else{
    		_val--;
    		if(_val<1){
	    		alert('数量不能少于1');
	    		return
	    	}
    		$buyNum.val(_val);
    	}
    });

    //加入购物车
    var $addCart = $('#addCart');
    var $selColor = $('.selColor');
    var $selSize = $('.selSize');
    var $p_info = $('.p-info');
    $addCart.on('click','button',function(){
    	//判断是否选择颜色和尺寸;
    	if($selColor.find('.item').hasClass('selected') && $selSize.find('.item').hasClass('selected')){
    		var _title = $p_info.find('h1').text();
    		var _price = $p_info.find('.YTPrice').find('strong').text().slice(1);
            var _color = $selColor.find('.selected').find('span').text();
    		var _src = $selColor.find('.selected').find('img').attr('src');
    		var _size = $selSize.find('.selected').find('span').text().slice(3);
    		var _count = $buyNum.val();
    		// console.log(_title,_price,_color,_size,_count);
    		$.post('../php/goodsdetails.php',{
    			'title':_title,
    			"price":_price,
    			"color":_color,
                "src":_src,
    			"size":_size,
    			"count":_count
    		},function(res){
                // console.log(res);
    			if(res){
	    			console.log('返回成功');
                    window.location.href = './cartlist.html';
    			}else{
    				console.log('添加失败')
    			}
    		})
    	}else{
    		alert('请选择颜色或者尺寸');
    		return
    	}
    })

});
