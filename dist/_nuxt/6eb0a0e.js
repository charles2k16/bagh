(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{407:function(t,e,r){"use strict";r(10);var n=r(410),o=new(r.n(n).a)("pk_test_32569e9ff3a842a73c51e36305c4221c07b8f31257dbf");e.a={name:"productService",getProducts:function(t){return o.products.list(t).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},getSingleProduct:function(t){return o.products.retrieve(t).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))}}},423:function(t,e,r){var content=r(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("51f84ee6",content,!0,{sourceMap:!1})},440:function(t,e,r){"use strict";r(423)},441:function(t,e,r){var n=r(45)(!1);n.push([t.i,".item_discount_info li[data-v-10c0ff7f]{font-size:12px;list-style:inside}.product_image_wrapper .product_image[data-v-10c0ff7f]{height:250px}.product_image_wrapper .thumbnail_container[data-v-10c0ff7f]{display:flex;margin-top:20px;margin-bottom:12px}.product_image_wrapper .thumbnail_container div[data-v-10c0ff7f]{width:55px;height:55px;margin-right:5px;border:.5px solid grey}.product_image_wrapper .thumbnail_container div .product_thumbnail[data-v-10c0ff7f]{width:100%}",""]),t.exports=n},446:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(47),r(407)),c={name:"SingleProduct",data:function(){return{showCartItems:!1,productLoading:!0,item:null,rateValue:3,showProductModal:!0,showCheckoutButton:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getSingleProduct(t.$route.query.id).then((function(e){t.productLoading=!1,t.item=e})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},l=(r(440),r(26)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section mt-20"},[r("el-skeleton",{attrs:{loading:t.productLoading,animated:""}},[r("template",{slot:"template"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{xs:24,sm:24,md:11}},[r("div",[r("el-skeleton-item",{staticStyle:{width:"100%",height:"180px"},attrs:{variant:"image"}})],1)]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:13}},[r("div",{staticStyle:{padding:"14px"}},[r("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"p"}}),t._v(" "),t._l(5,(function(i){return r("div",{key:i},[r("el-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),t._v(" "),r("el-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)}))],2)])],1)],1)],2),t._v(" "),t.productLoading?t._e():r("el-row",{attrs:{gutter:0}},[r("el-col",{attrs:{xs:24,sm:24,md:8}},[r("div",{staticClass:"bg-white p-20 product_image_wrapper"},[r("div",{staticClass:"full-width d-flex-center"},[r("img",{staticClass:"product_image",attrs:{src:t.item.media.source,alt:"item"}})]),t._v(" "),r("div",{staticClass:"thumbnail_container"},[r("div",{staticClass:"br-5"},[r("img",{staticClass:"product_thumbnail br-5",attrs:{src:t.item.media.source,alt:"item"}})])])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:11}},[r("div",{staticClass:"bg-white p-20"},[r("h2",[t._v(t._s(t.item.name))]),t._v(" "),r("div",{staticClass:"d-flex mt-10 mb-10"},[r("el-rate",{attrs:{disabled:"","text-color":"#e5c13a"},model:{value:t.rateValue,callback:function(e){t.rateValue=e},expression:"rateValue"}}),t._v(" "),r("span",{},[t._v("(3 customer review)")])],1),t._v(" "),r("hr",{staticClass:"dot"}),t._v(" "),r("div",{staticClass:"d-flex"},[r("el-button",{staticClass:"cancel_prize color-primary",attrs:{type:"text"}},[t._v("GH₵ "+t._s(t.item.price.formatted))]),t._v(" "),r("el-button",{attrs:{type:"text"}},[r("span",{staticClass:"color-primary",staticStyle:{"font-size":"25px"}},[t._v("GH₵ "+t._s(t.item.price.formatted))])])],1),t._v(" "),r("div",[r("p",{staticClass:"mb-20",domProps:{innerHTML:t._s(t.item.description)}}),t._v(" "),r("div",{staticClass:"d-flex"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.showCartItems=!0}}},[r("b",[t._v("Buy Now")])]),t._v(" "),r("el-button",{attrs:{type:"info",icon:"el-icon-shopping-cart-full",size:"medium"}},[r("b",[t._v("Add to Cart")])])],1)]),t._v(" "),r("div",{staticClass:"mt-20"},[r("hr",{staticClass:"dot"}),t._v(" "),r("ul",{staticClass:"mt-10 mb-20 item_discount_info"},[r("li",[t._v("Free Delivery for Items GH₵ 100 and above.")]),t._v(" "),r("li",[t._v("10% Discount on Food Packages")])]),t._v(" "),r("div",{staticClass:"d-flex-justify-between"},[r("div",[r("p",{staticClass:"mb-0"},[t._v("Share this product")]),t._v(" "),r("span",[r("a",{staticClass:"mr-0",attrs:{href:""}},[r("img",{attrs:{src:"/instagram.png",alt:"icon",width:"20"}})]),t._v(" "),r("a",{staticClass:"mr-0",attrs:{href:""}},[r("img",{attrs:{src:"/facebook.png",alt:"icon",width:"20"}})]),t._v(" "),r("a",{attrs:{href:""}},[r("img",{attrs:{src:"/whatsapp.png",alt:"icon",width:"20"}})])])]),t._v(" "),r("div",[r("p",{staticClass:"mb-0"},[t._v("Add to your saved products")]),t._v(" "),r("span",[r("el-button",{attrs:{plain:"",size:"mini",icon:"el-icon-collection-tag"}},[t._v("Add to saved")])],1)])])])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:5}},[r("p",[t._v("hello from the side bar product")])])],1)],1)}),[],!1,null,"10c0ff7f",null);e.default=component.exports}}]);