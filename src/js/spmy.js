;
$(function() {
    console.log('调用spmy.js');
    $.post('../php/spmy.php', function(res) {
        // console.log(res);
        var arr = JSON.parse(res);
        console.log(arr);
        //存放列表数据
        var $ulContent = $('#ulContent');
        //存放分页数据
        var $page = $('#page');
        //分页插入位置
        var $inPage = $page.find('.nextPage')
            //处理数据
        $.each(arr, function(index, el) {
            //生成分页
            $('<span>').addClass('pageNo').html(el.pageNo).insertBefore($inPage);
            /////////////
            //处理第一页的数据 //
            /////////////
            if (el.pageNo == 1) {
                $.each(el.data, function(idx, item) {
                    // console.log(idx,item);
                    init(item, $ulContent);
                })
            }
        });
        //分页数据处理
        $page.on('click', '.pageNo', function() {
            var $self = $(this);
            //清空当前商品列表
            $ulContent.html('');
            $.each(arr, function(index, el) {
                if (el.pageNo == $self.html()) {
                    $.each(el.data, function(idx, item) {
                        init(item, $ulContent);
                    })
                }
            })
        });
        //加入购物车处理;
        var _val;

        var $carCount = $('#cartlist').find('.carCount');
        
        $ulContent.on('click', '.sumBox>a', function() {
                var $self = $(this);

                var $count = $self.siblings(':input');
                _val = $count.val() * 1;
                if ($self.hasClass('addBox')) {
                    _val++;
                    $count.val(_val);
                } else {
                    _val--;
                    $count.val(_val);
                }
            })
            .on('click', '.listGoodAddbox>.addCart', function(e) {
                var $self = $(this);
                var _imgsrc = $self.closest('li').find('img').attr('src');

                var flyer = $('<img class="u-flyer" src="'+_imgsrc+'">');

                flyer.fly({
                    start:{
                        left:event.pageX,
                        top:event.pageY
                    },
                    end:{
                        left:$carCount.offset().left+10,
                        top:$carCount.offset().top+10,
                        width:0,
                        height:0
                    },
                    onEnd:function(){//结束回调 
                        $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息 
                        $self.css("cursor","default").removeClass('orange').unbind('click'); 
                        this.destory(); //移除dom 
                            }
                });

                _val = $carCount.text() * 1;
                _val++;
                $carCount.text(_val);
                $.post('../php/spmycart.php', {
                    'count': _val
                }, function(res) {
                    console.log(res);
                });
            });

    });
    
    function init(item, ele) {
        /*        //生成li
                var $li = $('<li/>').appendTo(ele);
                //生成listGoodImg
                var $listGoodImg = $('<div/>').addClass('listGoodImg').html('<a href="' + item.goodImg.href + '"><img src="' + item.goodImg.src + '" alt=""></a>').appendTo($li);
                //listGoodTitle
                var $listGoodTitle = $('<div/>').addClass('listGoodTitle').html('<a href="' + item.goodTitle.href + '">' + item.goodTitle.title + '</a>').appendTo($li);
                //listGoodPrice
                var $listGoodPrice = $('<div/>').addClass('listGoodPrice').html('<strong><i>￥</i>' + item.goodPrice.newPrice + '</strong><s><i>￥</i>' + item.goodPrice.oldPrice + '</s>').appendTo($li);
                //listGoodAddbox
                var $  = $('<div/>').addClass('listGoodAddbox').html('<div class="sumBox"><input type="text" value = "1"><a href="javascript:void(0)" class="addBox">+</a><a href="javascript:void(0)" class="delBox">-</a></div><button class="addCart">加入购物车</button><span class="addSc">收藏</span>').appendTo($li);
        */

        $('<li>\
                <div class="listGoodImg">\
                    <a href="' + item.goodImg.href + '"><img src="' + item.goodImg.src + '" alt=""></a>\
                </div>\
                <div class="listGoodTitle">\
                    <a href="' + item.goodTitle.href + '">' + item.goodTitle.title + '</a>\
                </div>\
                <div class="listGoodPrice">\
                    <strong><i>￥</i>' + item.goodPrice.newPrice + '</strong>\
                    <s><i>￥</i>' + item.goodPrice.oldPrice + '</s>\
                </div>\
                <div class="listGoodAddbox">\
                    <div class="sumBox">\
                        <input type="text" value = "1">\
                        <a href="javascript:void(0)" class="addBox">+</a>\
                        <a href="javascript:void(0)" class="delBox">-</a>\
                    </div>\
                    <button class="addCart">加入购物车</button>\
                    <span class="addSc">收藏</span>\
                </div>\
            </li>').appendTo(ele);
    }
});
