(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{442:function(t,e,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("0f3b877e",content,!0,{sourceMap:!1})},448:function(t,e,r){"use strict";r(442)},449:function(t,e,r){var o=r(35)(!1);o.push([t.i,".item_discount_info li[data-v-f17814fa]{font-size:12px;list-style:inside}.product_image_wrapper .product_image[data-v-f17814fa]{height:250px}.product_image_wrapper .thumbnail_container[data-v-f17814fa]{display:flex;margin-top:20px;margin-bottom:12px}.product_image_wrapper .thumbnail_container div[data-v-f17814fa]{width:55px;height:55px;margin-right:5px;border:.5px solid grey}.product_image_wrapper .thumbnail_container div .product_thumbnail[data-v-f17814fa]{width:100%}.delivery_info[data-v-f17814fa]{padding-bottom:10px}.delivery_info h6[data-v-f17814fa]{font-weight:400;margin-bottom:10px;text-transform:uppercase}.delivery_info hr[data-v-f17814fa]{margin-top:-10px;margin-bottom:2px}.delivery_info label[data-v-f17814fa]{font-size:12px;font-weight:400;margin-bottom:5px}.delivery_info label i[data-v-f17814fa]{color:#f16464}.delivery_info .el-select[data-v-f17814fa]{width:100%}",""]),t.exports=o},454:function(t,e,r){"use strict";r.r(e);var o=r(8),l=(r(40),r(182)),n={name:"SingleProduct",data:function(){return{showCartItems:!1,productLoading:!0,product:null,rateValue:3,showCheckoutButton:!1,regions:["Greater Accra","Kumasi","Tamale","Takoradi"],region:"Greater Accra"}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getSingleProduct(t.$route.query.id).then((function(e){t.productLoading=!1,t.product=e})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},methods:{addToCart:function(){this.showCheckoutButton=!0}}},c=(r(448),r(27)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section mt-20"},[r("el-skeleton",{attrs:{loading:t.productLoading,animated:""}},[r("template",{slot:"template"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{xs:24,sm:24,md:9}},[r("div",[r("el-skeleton-item",{staticStyle:{width:"100%",height:"180px"},attrs:{variant:"image"}})],1)]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:9}},[r("div",{staticStyle:{padding:"14px"}},[r("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"p"}}),t._v(" "),t._l(5,(function(i){return r("div",{key:i},[r("el-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),t._v(" "),r("el-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)}))],2)]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:6}},[r("div",{staticStyle:{padding:"14px"}},[r("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"p"}}),t._v(" "),t._l(5,(function(i){return r("div",{key:i},[r("el-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),t._v(" "),r("el-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)}))],2)])],1)],1)],2),t._v(" "),t.productLoading?t._e():r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{xs:24,sm:24,md:19}},[r("el-row",{staticClass:"bg-white br-5"},[r("el-col",{attrs:{xs:24,sm:24,md:10}},[r("div",{staticClass:"p-20 product_image_wrapper"},[r("div",{staticClass:"full-width d-flex-center"},[r("img",{staticClass:"product_image",attrs:{src:t.product.media.source,alt:"item"}})]),t._v(" "),r("div",{staticClass:"thumbnail_container"},[r("div",{staticClass:"br-5"},[r("img",{staticClass:"product_thumbnail br-5",attrs:{src:t.product.media.source,alt:"item"}})])])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:14}},[r("div",{staticClass:"p-20"},[r("h1",[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"d-flex mt-10 mb-10"},[r("el-rate",{attrs:{disabled:"","text-color":"#e5c13a"},model:{value:t.rateValue,callback:function(e){t.rateValue=e},expression:"rateValue"}}),t._v(" "),r("span",{},[t._v("(3 customer review)")])],1),t._v(" "),r("hr",{staticClass:"dot"}),t._v(" "),r("div",{staticClass:"d-flex"},[r("el-button",{staticClass:"cancel_prize color-primary",attrs:{type:"text"}},[t._v("GH₵ "+t._s(t.product.price.formatted))]),t._v(" "),r("el-button",{attrs:{type:"text"}},[r("span",{staticClass:"color-primary",staticStyle:{"font-size":"25px"}},[t._v("GH₵ "+t._s(t.product.price.formatted))])])],1),t._v(" "),r("div",[r("p",{staticClass:"mb-20",domProps:{innerHTML:t._s(t.product.description)}}),t._v(" "),r("div",{staticClass:"d-flex"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.showCartItems=!0}}},[r("b",[t._v("Buy Now")])]),t._v(" "),r("el-button",{attrs:{type:"info",icon:"el-icon-shopping-cart-full",size:"medium"}},[r("b",[t._v("Add to Cart")])])],1)]),t._v(" "),r("div",{staticClass:"mt-20"},[r("hr",{staticClass:"dot"}),t._v(" "),r("ul",{staticClass:"mt-10 mb-20 item_discount_info"},[r("li",[t._v("Free Delivery for Items GH₵ 100 and above.")]),t._v(" "),r("li",[t._v("10% Discount on Food Packages")])]),t._v(" "),r("div",{staticClass:"d-flex-justify-between"},[r("div",[r("p",{staticClass:"mb-0"},[t._v("Share this product")]),t._v(" "),r("span",[r("a",{staticClass:"mr-0",attrs:{href:""}},[r("img",{attrs:{src:"/instagram.png",alt:"icon",width:"20"}})]),t._v(" "),r("a",{staticClass:"mr-0",attrs:{href:""}},[r("img",{attrs:{src:"/facebook.png",alt:"icon",width:"20"}})]),t._v(" "),r("a",{attrs:{href:""}},[r("img",{attrs:{src:"/whatsapp.png",alt:"icon",width:"20"}})])])]),t._v(" "),r("div",[r("p",{staticClass:"mb-0"},[t._v("Add to your saved products")]),t._v(" "),r("span",[r("el-button",{attrs:{plain:"",size:"mini",icon:"el-icon-collection-tag"}},[t._v("Add to saved")])],1)])])])])])],1)],1),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:5}},[r("div",{staticClass:"delivery_info bg-white br-5"},[r("h6",{staticClass:"p-10"},[t._v("Delivery Informaion")]),t._v(" "),r("hr",{staticClass:"rule"}),t._v(" "),r("label",{staticClass:"d-block pl-10 mt-10"},[r("i",{staticClass:"el-icon-info"}),t._v(" Delivery is limited to these locations\n          for now")]),t._v(" "),r("div",{staticClass:"mx-10"},[r("el-select",{attrs:{placeholder:"select region"},model:{value:t.region,callback:function(e){t.region=e},expression:"region"}},t._l(t.regions,(function(t){return r("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)])])],1)],1)}),[],!1,null,"f17814fa",null);e.default=component.exports}}]);