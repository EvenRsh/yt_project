/*
============================================
    ver 1.0.1 create by EvenRH 2017 2 - 11
============================================
 */
;
"use strict"
;
require(["config"],()=>{
    require(["jquery","carousel"],($,crou)=>{
        $(()=>{
            console.log('调用page_header.js');
             
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
                            let str = `<dl class="mainmenu dl_${key}">
                                            <dt class="mainmenu_title">
                                                <span class="mainmenu_title_png"></span><a href="#" title="${item[key]["name"]}">${item[key]["name"]}</a><i>|</i><a href="#" title="${item[key]["title"]}">${item[key]["title"]}</a><s class="menu_right_png"></s>
                                            </dt>
                                            <dd class="submenu clearfix">
                                                <div class="submenu_left">
                                                    ${(()=>{
                                                        let str = "";
                                                        let subnav = item[key]["submenu"]["Category"];
                                                        for(let i=0;i<subnav.length;i++){
                                                            str += `<div class="subnav">
                                                                        <h4><a href="#" title="${subnav[i]["name"]}">${subnav[i]["name"]}</a></h4>
                                                                        <p>
                                                                            ${(()=>{
                                                                                let subnavData = subnav[i]["data"];
                                                                                let str = "";
                                                                                for(let i=0;i<subnavData.length;i++){
                                                                                    str += `<a  href="#" title="${subnavData[i]}">${subnavData[i]}</a>`;
                                                                                }
                                                                                return str;
                                                                            })()}
                                                                        </p>
                                                                    </div>`;
                                                        }
                                                        return str;
                                                    })()}
                                                </div>
                                                <div class="submenu_right">
                                                    <h4>${(()=>{
                                                        let pinpaititle = item[key]["submenu"]["brand"]["name"];
                                                        return `<a href="#" title="${pinpaititle}">${pinpaititle}</a>`;
                                                    })()}</h4>
                                                    <p>
                                                        ${(()=>{
                                                            let str = "";
                                                            let brandData = item[key]["submenu"]["brand"]["data"];
                                                            for(let i=0;i<brandData.length;i++){
                                                                str += `<a href="#" title="${brandData[i]}">${brandData[i]}</a>`;
                                                            }
                                                            return str;
                                                        })()}

                                                    </p>
                                                </div>
                                            </dd>
                                        </dl>`;
                            // console.log(str);
                            dom.append(str);
                        }
                    });
                    console.log('调用了该函数');
                    return "成功加入结构";
                }
            };

            //生成商品导航栏的数据
             //元素获取
                //商品导航
            let $classification = $("#classification");
                //轮播图
            let $banner = $("#banner");
             //请求商品导航栏后台数据
             $.ajax({
                url:"../php/page_header.php",
                type: "GET",
            })
            .done((res)=>{
                let data = JSON.parse(res);
                // let data = eval('('+res+')');
                console.log(data);
                let navStructure = new Structure();
                navStructure.addMethod($classification,"navInit",data);
                navStructure.formStructure();
              
            });

            //轮播实现
            $banner.rhcarousel({imglist:["../img/059c1b4b-94cd-4630-b04c-9a189b3a4285.jpg", "../img/88b6dad4-b26a-4c4d-a53d-51c41add7be2.jpg", "../img/107269b8-1478-4850-8320-21e6307bd3d1.jpg", "../img/8fcf3e58-3adf-48c2-9b3a-e6786291a1b3.jpg", "../img/ca11e774-32ab-4149-bac2-da2918f4a592.jpg"], "width": 1190, "height": 460 })
         });
    });
});
