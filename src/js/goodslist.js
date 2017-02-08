/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 4
==============  
*/
//页面加载
;
requirejs(['config'], function() {
    requirejs(['jquery'], function($) {
        $(function() {
            // console.log('调用该js');
            //生成商品列表
            $.post('../php/goodslist.php', function(res) {
                var arr = JSON.parse(res);
                // console.log(arr);

                //存放列表数据
                var $p_listMain = $('.p-listMain');
                //存放分页数据
                var $Y_Foot_Page = $('#Y_Foot_Page');
                //初始化
                $.each(arr, function(index, el) {
                    // console.log(idx,item);
                    //生成分页
                    $('<a/>').addClass('b-pageNum').html(el.pageNo).appendTo($Y_Foot_Page);
                    if (el.pageNo == 1) {
                        $.each(el.data, function(idx, item) {
                            // console.log(idx,item);
                            //生成p-listInfo,
                            var $p_listInfo = $('<div/>').addClass('p-listInfo').attr('id', idx).appendTo($p_listMain);
                            //p-listImgBig,
                            var $p_listImgBig = $('<div/>').addClass('p-listImgBig').attr('iic', idx).html('<a href="' + item.goods_Big.goods_imgBig_href + '" title="' + item.goods_Big.goods_imgBig_title + '" target="_blank"><img src="' + item.goods_Big.goods_imgBig_src + '" width="228" alt="' + item.goods_Big.goods_imgBig_title + '"></a>').appendTo($p_listInfo);
                            //p-listImgSmall
                            var $p_listImgSmall = $('<div/>').addClass('p-listImgSmall').css({ 'overflow': "hidden" }).appendTo($p_listInfo);
                            //p-listScroller
                            var $p_listScroller = $('<div/>').addClass('p-listScroller').css({ 'position': "relative" }).appendTo($p_listImgSmall);
                            //listPicPanel
                            var $listPicPanel = $('<ul/>').addClass('cf listPicPanel').css({ 'position': "absolute", 'width': 160, 'left': 0, 'overflow': "hidden" }).appendTo($p_listScroller);
                            //li
                            $.each(item.goods_Small, function(ind, itm) {
                                $('<li/>').css({ "display": "block", "float": "left" }).html('<a href="' + itm.goods_imgSmall_href + '" title="' + itm.goods_imgSmall_title + '" msize-src="' + itm.goods_imgSmall_src + '" target="_blank"><img src="' + itm.goods_imgSmall_src + '" width="40" alt="' + itm.goods_imgSmall_title + '" title="' + itm.goods_imgSmall_title + '"></a>').appendTo($listPicPanel);
                            });
                            //p-listPrice
                            var $p_listPrice = $('<div/>').addClass('p-listPrice').appendTo($p_listInfo);
                            var $y_p = $('<strong/>').addClass('y-p').html('￥' + item.goods_Price.y_p).appendTo($p_listPrice);
                            var $m_p = $('<em/>').addClass('m-p').html('￥' + item.goods_Price.m_p).appendTo($p_listPrice);
                            //p-listTxt
                            var $p_listTxt = $('<div/>').addClass('p-listTxt').html('<p class=""><a href="' + item.goods_Big.goods_imgBig_href + '" target="_blank" title="' + item.goods_Big.goods_imgBig_title + '">' + item.goods_Big.goods_imgBig_title + '</a></p>').appendTo($p_listInfo);

                        });
                    }
                });
                //分页处理
                $Y_Foot_Page.on('click', 'a', function() {
                    var $self = $(this);
                    console.log($self.html());
                    //清空当前商品列表;
                    $p_listMain.html('');
                    $.each(arr, function(index, el) {
                        // console.log(idx,item);
                        if (el.pageNo == $self.html()) {
                            $.each(el.data, function(idx, item) {
                                // console.log(idx,item);
                                //生成p-listInfo,
                                var $p_listInfo = $('<div/>').addClass('p-listInfo').attr('id', idx).appendTo($p_listMain);
                                //p-listImgBig,
                                var $p_listImgBig = $('<div/>').addClass('p-listImgBig').attr('iic', idx).html('<a href="' + item.goods_Big.goods_imgBig_href + '" title="' + item.goods_Big.goods_imgBig_title + '" target="_blank"><img src="' + item.goods_Big.goods_imgBig_src + '" width="228" alt="' + item.goods_Big.goods_imgBig_title + '"></a>').appendTo($p_listInfo);
                                //p-listImgSmall
                                var $p_listImgSmall = $('<div/>').addClass('p-listImgSmall').css({ 'overflow': "hidden" }).appendTo($p_listInfo);
                                //p-listScroller
                                var $p_listScroller = $('<div/>').addClass('p-listScroller').css({ 'position': "relative" }).appendTo($p_listImgSmall);
                                //listPicPanel
                                var $listPicPanel = $('<ul/>').addClass('cf listPicPanel').css({ 'position': "absolute", 'width': 160, 'left': 0, 'overflow': "hidden" }).appendTo($p_listScroller);
                                //li
                                $.each(item.goods_Small, function(ind, itm) {
                                    $('<li/>').css({ "display": "block", "float": "left" }).html('<a href="' + itm.goods_imgSmall_href + '" title="' + itm.goods_imgSmall_title + '" msize-src="' + itm.goods_imgSmall_src + '" target="_blank"><img src="' + itm.goods_imgSmall_src + '" width="40" alt="' + itm.goods_imgSmall_title + '" title="' + itm.goods_imgSmall_title + '"></a>').appendTo($listPicPanel);
                                });
                                //p-listPrice
                                var $p_listPrice = $('<div/>').addClass('p-listPrice').appendTo($p_listInfo);
                                var $y_p = $('<strong/>').addClass('y-p').html('￥' + item.goods_Price.y_p).appendTo($p_listPrice);
                                var $m_p = $('<em/>').addClass('m-p').html('￥' + item.goods_Price.m_p).appendTo($p_listPrice);
                                //p-listTxt
                                var $p_listTxt = $('<div/>').addClass('p-listTxt').html('<p class=""><a href="' + item.goods_Big.goods_imgBig_href + '" target="_blank" title="' + item.goods_Big.goods_imgBig_title + '">' + item.goods_Big.goods_imgBig_title + '</a></p>').appendTo($p_listInfo);

                            });
                        }
                    });
                    //回到页头;
                    $('body').scrollTop(200);
                })

            })

        });
    })
});
