/*
============================================
    ver 1.0.1 create by EvenRH 2017 2 - 11
============================================
 */
;
"use strict"
require(['config'],()=>{
    require(['jquery'],($)=>{
        $(()=>{
             console.log('调用page_header.js');
             //生成商品导航栏的数据
             //商品导航元素获取
             let $classification = $("#classification");
             //生成页面结构的构造函数
             let Structure = function () {
                 this.cache = [];
             };

             //添加所需要的结构模版
             Structure.prototype.addMethod = function(dom,rule,data){
                let ary = rule.split(":");
                this.cache.push(function(){
                    let strategy = ary.shift();
                    ary.unshift(dom);
                    ary.push(data);
                    return formMethod[strategy].apply(dom,ary);
                }
            );
             };
             //执行<结构生成>的每一个方法;
            Structure.prototype.formStructure = function(){
                for (let i = 0,len = this.cache.length; i < len; i++){
                    let msg = this.cache[i]();
                    if(msg){
                        return msg;
                    }
                }
            };
            //存放需要结构生成的方法
            let formMethod = {
                navInit:function(dom,data){
                    console.log(data);
                    $.each(data,(idx,item)=>{
                        console.log(item);
                        for(let key in item){
                            console.log(key);
                            let str = `<dl class="mainmenu dl_${key}">
                                            <dt class="mainmenu_title">
                                                <span class="mainmenu_title_png"></span><a href="#" title="${item[key]["name"]}">${item[key]["name"]}</a><i>|</i><a href="#" title="${item[key]["title"]}">${item[key]["title"]}</a><s class="menu_right_png"></s>
                                            </dt>
                                            <dd class="submenu clearfix">
                                                <div class="submenu_left">
                                                    <div class="subnav">
                                                        <h4><a href="#" title="女装">女装</a></h4>
                                                        <p>
                                                            <a class="hover" href="#" title="新品">新品</a>
                                                            <a  href="#" title="卫衣">卫衣</a>
                                                            <a class="hover" href="#" title="针织衫">针织衫</a>
                                                            <a  href="#" title="裤装">裤装</a>
                                                            <a  href="#" title="外套">外套</a>
                                                            <a  href="#" title="群装">群装</a>
                                                        </p>
                                                    </div>
                                                    <div class="subnav">
                                                        <h4><a href="#" title="鞋靴">鞋靴</a></h4>
                                                        <p>
                                                            <a class="hover" href="#" title="新品">新品</a>
                                                            <a  href="#" title="女士单鞋">女士单鞋</a>
                                                            <a class="hover" href="#" title="男鞋">男鞋</a>
                                                            <a  href="#" title="靴子">靴子</a>
                                                            <a  href="#" title="外套">外套</a>

                                                        </p>
                                                    </div>
                                                    <div class="subnav">
                                                        <h4><a href="#" title="女装">女装</a></h4>
                                                        <p>
                                                            <a class="hover" href="#" title="新品">新品</a>
                                                            <a  href="#" title="卫衣">卫衣</a>
                                                            <a class="hover" href="#" title="针织衫">针织衫</a>
                                                            <a  href="#" title="裤装">裤装</a>
                                                            <a  href="#" title="外套">外套</a>
                                                            <a  href="#" title="群装">群装</a>
                                                        </p>
                                                    </div>
                                                    <div class="subnav">
                                                        <h4><a href="#" title="男装">男装</a></h4>
                                                        <p>
                                                            <a class="hover" href="#" title="新品">新品</a>
                                                            <a  href="#" title="卫衣">卫衣</a>
                                                            <a class="hover" href="#" title="针织衫">针织衫</a>
                                                            <a  href="#" title="裤装">裤装</a>
                                                            <a  href="#" title="外套">外套</a>
                                                            <a class="hover" href="#" title="新品">新品</a>
                                                            <a  href="#" title="卫衣">卫衣</a>
                                                            <a class="hover" href="#" title="针织衫">针织衫</a>
                                                            <a  href="#" title="裤装">裤装</a>
                                                            <a  href="#" title="外套">外套</a>
                                                        </p>
                                                    </div>
                                                    <div class="subnav">
                                                        <h4><a href="#" title="女装">女装</a></h4>
                                                        <p>
                                                            <a class="hover" href="#" title="新品">新品</a>
                                                            <a  href="#" title="卫衣">卫衣</a>
                                                            <a class="hover" href="#" title="针织衫">针织衫</a>
                                                            <a  href="#" title="裤装">裤装</a>
                                                            <a  href="#" title="外套">外套</a>
                                                            <a  href="#" title="群装">群装</a>
                                                        </p>
                                                    </div>
                                                    <div class="subnav">
                                                        <h4><a href="#" title="男装">男装</a></h4>
                                                        <p>
                                                            <a class="hover" href="#" title="新品">新品</a>
                                                            <a  href="#" title="卫衣">卫衣</a>
                                                            <a class="hover" href="#" title="针织衫">针织衫</a>
                                                            <a  href="#" title="裤装">裤装</a>
                                                            <a  href="#" title="外套">外套</a>

                                                        </p>
                                                    </div>
                                                    <div class="subnav">
                                                        <h4><a href="#" title="男装">男装</a></h4>
                                                        <p>
                                                            <a class="hover" href="#" title="新品">新品</a>
                                                            <a  href="#" title="卫衣">卫衣</a>
                                                            <a class="hover" href="#" title="针织衫">针织衫</a>
                                                            <a  href="#" title="裤装">裤装</a>
                                                            <a  href="#" title="外套">外套</a>

                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                                <div class="submenu_right">
                                                    <h4><a href="#" title="品牌">品牌</a></h4>
                                                    <p>
                                                       <a href="#" title="BURBERRY">BURBERRY</a>
                                                       <a href="#" title="FERRAGAMO">FERRAGAMO</a>
                                                       <a href="#" title="GUCCI">GUCCI</a>
                                                       <a href="#" title="COACH">COACH</a>
                                                       <a href="#" title="ARMANI">ARMANI</a>
                                                       <a href="#" title="JEANS">JEANS</a>
                                                       <a href="#" title="DIESEL">DIESEL</a>
                                                       <a href="#" title="VERSACE">VERSACE</a>
                                                       <a href="#" title="MAX&CO">MAX&CO</a>
                                                       <a href="#" title="FRED">FRED</a>
                                                       <a href="#" title="PERRY">PERRY</a>
                                                       <a href="#" title="CELINE">CELINE</a>
                                                       <a href="#" title="SPORTMAX">SPORTMAX</a>
                                                       <a href="#" title="MAX">MAX</a>
                                                       <a href="#" title="MARA">MARA</a>
                                                       <a href="#" title="MICHAEL">MICHAEL</a>
                                                       <a href="#" title="KORS">KORS</a>
                                                       <a href="#" title="FENDI">FENDI</a>
                                                       <a href="#" title="EMPORIO">EMPORIO</a>
                                                       <a href="#" title="ARMANI">ARMANI</a>
                                                       <a href="#" title="BALLY">BALLY</a>
                                                       <a href="#" title="ALEXANDER">ALEXANDER</a>
                                                       <a href="#" title="MCQUEEN">MCQUEEN</a>

                                                    </p>
                                                </div>
                                            </dd>
                                        </dl>`;
                            dom.append(str);
                        }
                    });
                    console.log('调用了该函数');
                    return "成功加入结构";
                }
            };
             
             //请求后台数据
             $.ajax({
                url:"../php/page_header.php",
                type: "GET",
            })
            .done((res)=>{
                let data = JSON.parse(res);
                // console.log(data);
                let navStructure = new Structure();
                navStructure.addMethod($classification,"navInit",data);
                navStructure.formStructure();
              
            });
         });
    });
});
