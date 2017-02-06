/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 5
==============  
*/
//页面加载

$(function() {
    console.log('调用该js');
    var $CommodityList = $('.CommodityList');
    $.post('../php/cartlist.php',function(res){
    	var data =[] ;
    	var opt = {};
    	var arr = [] ; 
    	// console.log(res);
        if(res){
        	data = res.split(';');
        	for(var i=0;i<data.length;i++){
        		arr = data[i].split(':');
        		opt[arr[0]] = arr[1];
        	}
			console.log(opt);
			init(opt);
			//生成购物车商品列表
			function init(opt){

				//AProduct areacolor cf
				var $AProduct = $('<div/>').addClass('AProduct areacolor cf').appendTo($CommodityList);
				//category th-chk
				var $th_chk = $('<div/>').addClass('category th-chk').html('<div style="margin-top: 14.5px;"><input type="checkbox" class="J-willing" checked="checked" sku="21-236-5270" id="J-Change-21-236-5270-0-1300.00" data-clk="clkcartcheckbox"><label class="checked J-SelectPro" data-clk="clkcartcheckbox" for="J-Change-21-236-5270-0-1300.00"></label></div>').appendTo($AProduct);
				//category th-item
				var $th_item = $('<div/>').addClass('category th-item').html('<div class="property cf"><div class="pro-img"><a title="'+opt.title+'" target="_blank" href="javascript:void(0)"><img alt="" src="'+opt.src+'"></a></div><p class="pro-title"><a href="javascript:void(0)" title="'+opt.title+'" target="_blank">'+opt.title+'</a></p><div class="pro-pro"><p class="pro-check"><span>颜色：<b>'+opt.color+'</b></span><span>尺码：<b>'+opt.size+'</b></span></p></div></div>').appendTo($AProduct);
				//category th-price
				var $th_price = $('<div/>').addClass('category th-price').html('<div class="pro-price" style="margin-top: 11px;"><strong>￥'+opt.price+'<em></em></strong><b class="integral hidden">+<i>'+opt.price+'</i>积分</b></div>').appendTo($AProduct);
				//category th-amount
				var $th_amount = $('<div/>').addClass('category th-amount').css({'margin-top':11}).html('<div class="pro-number"><a href="javascript:void(0)" title="减少" class="nums-red ">-</a><input type="text" class="pro-nums" value="'+opt.count+'" lastvalue="1"><a href="javascript:void(0)" title="增加" class="nums-add">+</a></div>').appendTo($AProduct);
				//category th-sum
				var $th_sum = $('<div/>').addClass('category th-sum').css({'margin-top':11}).html((opt.price*1*opt.count).toFixed(0)).appendTo($AProduct);
				//category th-op
				var $th_op = $('<div/>').addClass('category th-op').css({'margin-top':3}).html('<div class="decidetime"><a class="pro-remove" href="javascript:void(0)">删除商品</a></div>').appendTo($AProduct);

			}

			//购物车商品结算处理
			var _price = (opt.price*1).toFixed(0);
			var _totalPrice = $CommodityList.find('.th-sum').html()*1;
			//总价
			var $total = $CommodityList.closest('.CommodityBox').next('.PayofTable').find('.total');
			//结算金额
			var $pay = $CommodityList.closest('.CommodityBox').next('.PayofTable').find('.pay');
			$total.html('').html('¥' + _totalPrice.toFixed(2));
    		$pay.html('').html('¥' + _totalPrice.toFixed(2));

			//商品数量改变
			$pro_number = $CommodityList.find('.pro-number');
			$pro_number.on('click','a',function(){
				$self = $(this);
				//数量
				var $count = $self.siblings('input');
				//积分
				var $th_sum = $self.closest('.AProduct').find('.th-sum');
				//总价
				$total = $self.closest('.CommodityBox').next('.PayofTable').find('.total');
				//结算金额
				$pay = $self.closest('.CommodityBox').next('.PayofTable').find('.pay');
				var _val = $count.val()*1;
				if($self.hasClass('nums-add')){
		    		_val++;
		    		if(_val>99){
		    			alert('数量不能大于99')
		    			return
		    		}
		    		$count.val(_val);
		    		_totalPrice = _price * _val;
		    		$th_sum.html('').html(_totalPrice);
		    		$total.html('').html('¥' + _totalPrice.toFixed(2));
		    		$pay.html('').html('¥' + _totalPrice.toFixed(2));
		    	}else{
		    		_val--;
		    		if(_val<1){
			    		alert('数量不能少于1');
			    		return
			    	}
		    		$count.val(_val);
		    		_totalPrice = _price * _val;
		    		$th_sum.html('').html(_totalPrice);
		    		$total.html('').html('¥' + _totalPrice.toFixed(2));
		    		$pay.html('').html('¥' + _totalPrice.toFixed(2));
		    	}
			});

			//商品删除
			$CommodityList.on('click','.pro-remove',function(){
				var $self = $(this);
				$self.closest('.AProduct').remove();
				$total.html('').html('¥' + "0.00");
    			$pay.html('').html('¥' + "0.00");
			})
        }else{
        	console.log('购物车空空如也')
        }
    })
});
