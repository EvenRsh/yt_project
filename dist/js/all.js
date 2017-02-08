/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 5
==============  
*/
//页面加载
$(function(){console.log("调用该js");var a=$(".CommodityList");$.post("../php/cartlist.php",function(e){var s=[];var t={};var i=[];
// console.log(res);
if(e){s=e.split(";");for(var o=0;o<s.length;o++){i=s[o].split(":");t[i[0]]=i[1]}console.log(t);l(t);
//生成购物车商品列表
function l(e){
//AProduct areacolor cf
var s=$("<div/>").addClass("AProduct areacolor cf").appendTo(a);
//category th-chk
var t=$("<div/>").addClass("category th-chk").html('<div style="margin-top: 14.5px;"><input type="checkbox" class="J-willing" checked="checked" sku="21-236-5270" id="J-Change-21-236-5270-0-1300.00" data-clk="clkcartcheckbox"><label class="checked J-SelectPro" data-clk="clkcartcheckbox" for="J-Change-21-236-5270-0-1300.00"></label></div>').appendTo(s);
//category th-item
var i=$("<div/>").addClass("category th-item").html('<div class="property cf"><div class="pro-img"><a title="'+e.title+'" target="_blank" href="javascript:void(0)"><img alt="" src="'+e.src+'"></a></div><p class="pro-title"><a href="javascript:void(0)" title="'+e.title+'" target="_blank">'+e.title+'</a></p><div class="pro-pro"><p class="pro-check"><span>颜色：<b>'+e.color+"</b></span><span>尺码：<b>"+e.size+"</b></span></p></div></div>").appendTo(s);
//category th-price
var o=$("<div/>").addClass("category th-price").html('<div class="pro-price" style="margin-top: 11px;"><strong>￥'+e.price+'<em></em></strong><b class="integral hidden">+<i>'+e.price+"</i>积分</b></div>").appendTo(s);
//category th-amount
var l=$("<div/>").addClass("category th-amount").css({"margin-top":11}).html('<div class="pro-number"><a href="javascript:void(0)" title="减少" class="nums-red ">-</a><input type="text" class="pro-nums" value="'+e.count+'" lastvalue="1"><a href="javascript:void(0)" title="增加" class="nums-add">+</a></div>').appendTo(s);
//category th-sum
var d=$("<div/>").addClass("category th-sum").css({"margin-top":11}).html((e.price*1*e.count).toFixed(0)).appendTo(s);
//category th-op
var r=$("<div/>").addClass("category th-op").css({"margin-top":3}).html('<div class="decidetime"><a class="pro-remove" href="javascript:void(0)">删除商品</a></div>').appendTo(s)}
//购物车商品结算处理
var d=(t.price*1).toFixed(0);var r=a.find(".th-sum").html()*1;
//总价
var n=a.closest(".CommodityBox").next(".PayofTable").find(".total");
//结算金额
var c=a.closest(".CommodityBox").next(".PayofTable").find(".pay");n.html("").html("¥"+r.toFixed(2));c.html("").html("¥"+r.toFixed(2));
//商品数量改变
$pro_number=a.find(".pro-number");$pro_number.on("click","a",function(){$self=$(this);
//数量
var a=$self.siblings("input");
//积分
var e=$self.closest(".AProduct").find(".th-sum");
//总价
n=$self.closest(".CommodityBox").next(".PayofTable").find(".total");
//结算金额
c=$self.closest(".CommodityBox").next(".PayofTable").find(".pay");var s=a.val()*1;if($self.hasClass("nums-add")){s++;if(s>99){alert("数量不能大于99");return}a.val(s);r=d*s;e.html("").html(r);n.html("").html("¥"+r.toFixed(2));c.html("").html("¥"+r.toFixed(2))}else{s--;if(s<1){alert("数量不能少于1");return}a.val(s);r=d*s;e.html("").html(r);n.html("").html("¥"+r.toFixed(2));c.html("").html("¥"+r.toFixed(2))}});
//商品删除
a.on("click",".pro-remove",function(){var a=$(this);a.closest(".AProduct").remove();n.html("").html("¥"+"0.00");c.html("").html("¥"+"0.00")})}else{console.log("购物车空空如也")}})});/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 4
==============  
*/
//页面加载
$(function(){console.log("调用该js");
//放大镜效果
var a=$(".magnifier-wrap");a.rhzoom({width:500,height:500});
//小图tab效果
var e=$(".ew-c-list");e.on("mouseenter","li",function(){var e=$(this);var s=e.find("img");var t=s.attr("data-src");var i=s.attr("data-big");var o=a.find("img");o.attr({src:t,"data-big":i})});
//selected效果
var s=$(".sel");s.on("click",".item",function(){var a=$(this);a.addClass("selected").siblings(".item").removeClass("selected")});
//商品的数量变化
var t=$("#setCount");var i=$("#buyNum");t.on("click","a",function(){var a=$(this);var e=i.val()*1;if(a.hasClass("p-num-add")){e++;if(e>99){alert("数量不能大于99");return}i.val(e)}else{e--;if(e<1){alert("数量不能少于1");return}i.val(e)}});
//加入购物车
var o=$("#addCart");var l=$(".selColor");var d=$(".selSize");var r=$(".p-info");o.on("click","button",function(){
//判断是否选择颜色和尺寸;
if(l.find(".item").hasClass("selected")&&d.find(".item").hasClass("selected")){var a=r.find("h1").text();var e=r.find(".YTPrice").find("strong").text().slice(1);var s=l.find(".selected").find("span").text();var t=l.find(".selected").find("img").attr("src");var o=d.find(".selected").find("span").text().slice(3);var n=i.val();
// console.log(_title,_price,_color,_size,_count);
$.post("../php/goodsdetails.php",{title:a,price:e,color:s,src:t,size:o,count:n},function(a){
// console.log(res);
if(a){console.log("返回成功");window.location.href="./cartlist.html"}else{console.log("添加失败")}})}else{alert("请选择颜色或者尺寸");return}})});/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 4
==============  
*/
//页面加载
$(function(){
// console.log('调用该js');
//生成商品列表
$.post("../php/goodslist.php",function(a){var e=JSON.parse(a);
// console.log(arr);
//存放列表数据
var s=$(".p-listMain");
//存放分页数据
var t=$("#Y_Foot_Page");
//初始化
$.each(e,function(a,e){
// console.log(idx,item);
//生成分页
$("<a/>").addClass("b-pageNum").html(e.pageNo).appendTo(t);if(e.pageNo==1){$.each(e.data,function(a,e){
// console.log(idx,item);
//生成p-listInfo,
var t=$("<div/>").addClass("p-listInfo").attr("id",a).appendTo(s);
//p-listImgBig,
var i=$("<div/>").addClass("p-listImgBig").attr("iic",a).html('<a href="'+e.goods_Big.goods_imgBig_href+'" title="'+e.goods_Big.goods_imgBig_title+'" target="_blank"><img src="'+e.goods_Big.goods_imgBig_src+'" width="228" alt="'+e.goods_Big.goods_imgBig_title+'"></a>').appendTo(t);
//p-listImgSmall
var o=$("<div/>").addClass("p-listImgSmall").css({overflow:"hidden"}).appendTo(t);
//p-listScroller
var l=$("<div/>").addClass("p-listScroller").css({position:"relative"}).appendTo(o);
//listPicPanel
var d=$("<ul/>").addClass("cf listPicPanel").css({position:"absolute",width:160,left:0,overflow:"hidden"}).appendTo(l);
//li
$.each(e.goods_Small,function(a,e){$("<li/>").css({display:"block",float:"left"}).html('<a href="'+e.goods_imgSmall_href+'" title="'+e.goods_imgSmall_title+'" msize-src="'+e.goods_imgSmall_src+'" target="_blank"><img src="'+e.goods_imgSmall_src+'" width="40" alt="'+e.goods_imgSmall_title+'" title="'+e.goods_imgSmall_title+'"></a>').appendTo(d)});
//p-listPrice
var r=$("<div/>").addClass("p-listPrice").appendTo(t);var n=$("<strong/>").addClass("y-p").html("￥"+e.goods_Price.y_p).appendTo(r);var c=$("<em/>").addClass("m-p").html("￥"+e.goods_Price.m_p).appendTo(r);
//p-listTxt
var p=$("<div/>").addClass("p-listTxt").html('<p class=""><a href="'+e.goods_Big.goods_imgBig_href+'" target="_blank" title="'+e.goods_Big.goods_imgBig_title+'">'+e.goods_Big.goods_imgBig_title+"</a></p>").appendTo(t)})}});
//分页处理
t.on("click","a",function(){var a=$(this);console.log(a.html());
//清空当前商品列表;
s.html("");$.each(e,function(e,t){
// console.log(idx,item);
if(t.pageNo==a.html()){$.each(t.data,function(a,e){
// console.log(idx,item);
//生成p-listInfo,
var t=$("<div/>").addClass("p-listInfo").attr("id",a).appendTo(s);
//p-listImgBig,
var i=$("<div/>").addClass("p-listImgBig").attr("iic",a).html('<a href="'+e.goods_Big.goods_imgBig_href+'" title="'+e.goods_Big.goods_imgBig_title+'" target="_blank"><img src="'+e.goods_Big.goods_imgBig_src+'" width="228" alt="'+e.goods_Big.goods_imgBig_title+'"></a>').appendTo(t);
//p-listImgSmall
var o=$("<div/>").addClass("p-listImgSmall").css({overflow:"hidden"}).appendTo(t);
//p-listScroller
var l=$("<div/>").addClass("p-listScroller").css({position:"relative"}).appendTo(o);
//listPicPanel
var d=$("<ul/>").addClass("cf listPicPanel").css({position:"absolute",width:160,left:0,overflow:"hidden"}).appendTo(l);
//li
$.each(e.goods_Small,function(a,e){$("<li/>").css({display:"block",float:"left"}).html('<a href="'+e.goods_imgSmall_href+'" title="'+e.goods_imgSmall_title+'" msize-src="'+e.goods_imgSmall_src+'" target="_blank"><img src="'+e.goods_imgSmall_src+'" width="40" alt="'+e.goods_imgSmall_title+'" title="'+e.goods_imgSmall_title+'"></a>').appendTo(d)});
//p-listPrice
var r=$("<div/>").addClass("p-listPrice").appendTo(t);var n=$("<strong/>").addClass("y-p").html("￥"+e.goods_Price.y_p).appendTo(r);var c=$("<em/>").addClass("m-p").html("￥"+e.goods_Price.m_p).appendTo(r);
//p-listTxt
var p=$("<div/>").addClass("p-listTxt").html('<p class=""><a href="'+e.goods_Big.goods_imgBig_href+'" target="_blank" title="'+e.goods_Big.goods_imgBig_title+'">'+e.goods_Big.goods_imgBig_title+"</a></p>").appendTo(t)})}});
//回到页头;
$("body").scrollTop(200)})})});/*
==============
    ver 1.0.1 create by EvenRH 2017 2 - 3
==============  
*/
//页面加载
$(function(){
//////////////
//判断是否有用户登录 //
//////////////
$.post("./php/index.php",function(res){console.log(res);var data=eval("("+res+")");if(data.state){console.log(data.message);var $ytUser=$(".ytUser");$ytUser.html("").html("Hi,欢迎你,"+data.message);var $logout=$("<a/>").text("登出").appendTo($ytUser);
////////////
//登出效果//
////////////
$logout.on("click",function(){$.post("./php/logout.php",function(a){window.location.href="index.html"})})}else{console.log("初始主页")}});$banner=$("#banner");
///////////
//banner //
///////////
$banner.rhcarousel({imglist:["./img/059c1b4b-94cd-4630-b04c-9a189b3a4285.jpg","./img/88b6dad4-b26a-4c4d-a53d-51c41add7be2.jpg","./img/107269b8-1478-4850-8320-21e6307bd3d1.jpg","./img/8fcf3e58-3adf-48c2-9b3a-e6786291a1b3.jpg","./img/ca11e774-32ab-4149-bac2-da2918f4a592.jpg"],width:1190,height:470});
////////
//tab //
////////
$eva_switchable=$(".eva-switchable-triggers");$eva_switchable.on("mouseenter","li",function(){var a=$(this);
//切换+底边高亮
a.addClass("eva-switchable-active").siblings("li").removeClass("eva-switchable-active");
// console.log($self.closest('ul').next().hasClass('eva-switchable-panels'));
if(a.closest("ul").next().hasClass("eva-switchable-panels")){var e=a.closest("ul").next()}else{var e=a.closest("div").next(".eva-switchable-panels")}
// console.log($eva)
e.children("div").eq(a.index()).show().siblings().hide()});
/////////////////////
//border_animation //
/////////////////////
$("body").on("mouseenter",".border_animation",function(){var a=$(this);var e=a.outerWidth();var s=a.outerHeight();a.children(".border_top").animate({width:e}).next().animate({height:s}).next().animate({width:e}).next().animate({height:s})}).on("mouseleave",".border_animation",function(){var a=$(this);a.children(".border_top").animate({width:0}).next().animate({height:0}).next().animate({width:0}).next().animate({height:0})});
//////////
//floor //
//////////
//生成多层楼层
for(var i=0;i<8;i++){floor()}
//封装生成结构函数
function floor(){var a=$(".yt_card");
// console.log($ytCard);
//生成楼层结构
var e=$("<div/>").addClass("ytWrap yt_floor_mp yt_floor_item").insertBefore(a);
//楼层头部
var s=$("<div/>").addClass("floor_title").html('<a><h6>时尚名品</h6></a><div class="tit_recommend"></div>').appendTo(e);
//楼层导航
var t=$("<div/>").addClass("floor_nav").appendTo(e);var i=$("<ul/>").addClass("floor_nav_category").appendTo(t);for(var o=0;o<12;o++){$("<li/>").html("<a>针织衫</a>").appendTo(i)}
//品牌选择
var l=$("<div/>").addClass("floorbarndSlide").appendTo(t);var d=$("<div/>").addClass("scroller").appendTo(l);var r=$("<div/>").addClass("eva-switchable-panels").appendTo(d);for(var n=0;n<5;n++){var c=$("<div/>").appendTo(r);for(var p=0;p<4;p++){$("<a/>").html('<img width="75" height="50" alt="" src="http://r.ytrss.com/rs/img/eccms/2016/3/9/0e00b125-0bd0-4d66-aedc-59d543afef8d.jpg">').appendTo(c)}}
/////////
//左右按钮 //
/////////
$("<a/>").addClass("eva-switchable-prev").html("prev").appendTo(l);$("<a/>").addClass("eva-switchable-next").html("next").appendTo(l);
////////
//楼层边 //
////////
var v=$("<div/>").addClass("floor_slide").appendTo(e);var h=$("<div/>").addClass("floor_banner_slide").appendTo(v);var g=$("<div/>").addClass("floor_b_pannels").appendTo(h);var r=$("<div/>").addClass("eva-switchable-panels").appendTo(g);$("<a/>").css({display:"block",float:"left"}).html('<img width="390" height="370" alt="" img-src="http://r.ytrss.com/rs/img/eccms/2017/1/23/c1dbc81a-5a95-4ef4-b179-4d7bb2eedafe.jpg" src="http://r.ytrss.com/rs/img/eccms/2017/1/23/c1dbc81a-5a95-4ef4-b179-4d7bb2eedafe.jpg">').appendTo(r);$("<a/>").css({display:"block",float:"left"}).html('<img width="390" height="370" alt="" img-src="http://r.ytrss.com/rs/img/eccms/2017/1/23/ce711069-166b-4b02-ae94-c9303bd0133a.jpg" src="http://r.ytrss.com/rs/img/eccms/2017/1/23/ce711069-166b-4b02-ae94-c9303bd0133a.jpg">').appendTo(r);$("<ul/>").addClass("floor_slide_trigger").html('<li class="eva-switchable-active"></li><li></li>').appendTo(h);$("<a/>").addClass("eva-switchable-prev eva-switchable-disable-btn").html("pre").css({left:0}).appendTo(h);$("<a/>").addClass("eva-switchable-next").html("next").css({right:0}).appendTo(h);
//////////
// 楼梯广告 //
//////////
var m=$("<div/>").addClass("floor_banner").appendTo(e);var f=$("<div/>").addClass("floor_banner_main").appendTo(m);for(var o=0;o<4;o++){var b=$("<div/>").addClass("product_block").appendTo(f);var _=$("<div/>").addClass("border_animation").appendTo(b);$("<div/>").addClass("border border_top").css({width:0}).appendTo(_);$("<div/>").addClass("border border_right").css({height:0}).appendTo(_);$("<div/>").addClass("border border_bootom").css({width:0}).appendTo(_);$("<div/>").addClass("border border_left").css({height:0}).appendTo(_);$("<div/>").addClass("img_wrap").html('<a target="_blank" href="http://www.yintai.com/product/list-10002015-10002017.html?intcmp=GGW20160809_home_mp_c4" id="yui_3_13_0_1_1486093763883_2665"><img width="270" height="180" alt="" img-src="http://r.ytrss.com/rs/img/eccms/2017/1/16/5565bf2d-038e-4c7b-b6af-112e041c0b18.jpg" src="http://r.ytrss.com/rs/img/eccms/2017/1/16/5565bf2d-038e-4c7b-b6af-112e041c0b18.jpg" id="yui_3_13_0_1_1486093763883_2664"></a>').appendTo(_)}}
//楼层动画效果
//品牌动画(失败)
var $floorbarndSlide=$(".floorbarndSlide");$floorbarndSlide.on("click","a",function(){var a=$(this);var e=a.siblings("div").find(".eva-switchable-panels");var s=e.outerWidth();var t=e.children("div").outerWidth();e.css({left:t});console.log(t)});
//banner动画
var $floor_banner_slide=$(".floor_banner_slide");$floor_banner_slide.on("click","a",function(){var a=$(this);var e=a.siblings("div").find(".eva-switchable-panels");var s=a.siblings(".floor_slide_trigger");var t=-e.find("img").outerWidth();if(a.hasClass("eva-switchable-next")){e.css({position:"absolute",left:t});
//图标高亮
s.children("li").eq(1).addClass("eva-switchable-active").siblings("li").removeClass("eva-switchable-active")}else{e.css({position:"absolute",left:0});s.children("li").eq(0).addClass("eva-switchable-active").siblings("li").removeClass("eva-switchable-active")}});
//楼梯效果(失败)
var $float_nav_wrap=$(".float_nav_wrap");$(window).on("scroll",function(){var a=$("body").scrollTop();if(a<1300){$float_nav_wrap.hide()}else{$float_nav_wrap.show()}})});$(function(){var $mainLogin=$(".mainLogin");var $phone=$("#cellPhone");var $password=$("#password");var $btnSubmit=$(":submit");
//tabs事件切换
$(".ytRight").on("click","li",function(){var a=$(this);a.addClass("active").siblings("li").removeClass("active");var e=a.index();if(e==0){$mainLogin.children("p").show().siblings(".scancode-login").hide();$phone.attr("placeholder","请输入银泰护照号(手机号)")}else if(e==1){$mainLogin.children("p").show().siblings(".scancode-login").hide();$phone.attr("placeholder","请输入手机/邮箱")}else if(e==2){$mainLogin.children(".scancode-login").show().siblings("p").hide()}}).on("click","#passportLogin",function(){$.post("../php/login.php",{cellPhone:$phone.val(),password:$password.val()},function(response){var data=eval("("+response+")");if(data.state){window.location.href="../index.html"}else{alert(data.message)}})}).on("click","a.register",function(){console.log("123");window.location.href="register.html"})});/*
==============
    ver 1.0.1 create by EvenRH 2017 1 - 14
==============  
*/
//页面加载
$(function(){var $form=$("form");var $btnSubmit=$("#submitButton");var $ytRight=$(".ytRight");
//获取输入数据
var $phone=$("#cellPhone");var $code=$("#setCode");var $password=$("#password");var $repassword=$("#repassword");function randomNum(){var a="";var e="0123456789";for(var s=0;s<6;s++){a+=parseInt(Math.random()*e.length)}return a}
//登录跳转
$ytRight.on("click","a#login",function(){window.location.href="login.html"}).on("change","#cellPhone",function(){var len=$phone.val().length;if(!/^1[3-578]\d{9}$/.test($phone.val())){$phone.siblings().remove();$("<b/>").text("格式不对").insertAfter($phone);return false}else{$phone.siblings().remove();
//检测数据库是否存在该手机
$.post("../php/register.php",{cellPhone:$phone.val(),password:$password.val()},function(response){var data=eval("("+response+")");if(!data.state){$("<b/>").text(data.message).insertAfter($phone);return false}else{$("<b/>").text("用户可以注册").insertAfter($phone);
//生成随机验证码
$ytRight.on("click","#getCode",function(){$("#setCode").val(randomNum())})}})}}).on("change","#password",function(){if(!/^\w{6,12}$/.test($password.val())){$password.siblings().remove();$("<b/>").text("密码格式不对").insertAfter($password);return false}else{$password.siblings().remove();
//判断所有输入框是否已经存在数据
$ytRight.on("input",function(){if($code.val()&&$password.val()&&$repassword.val()){
//提交按钮高亮
$btnSubmit.addClass("active")}else{$btnSubmit.removeClass("active")}})}}).on("click","#submitButton",function(){
//判断提交按钮是否高亮
if($btnSubmit.hasClass("active")){if($password.val()!=$repassword.val()){$repassword.siblings().remove();$("<b/>").text("密码不一致").insertAfter($repassword);return false}else{$repassword.siblings().remove();
// console.log('可以提交数据');
$.post("../php/register.php",{cellPhone:$phone.val(),password:$password.val()},function(response){var data=eval("("+response+")");if(data.state){alert("注册成功！");window.location.href="login.html"}else{alert(data.message)}})}}})});