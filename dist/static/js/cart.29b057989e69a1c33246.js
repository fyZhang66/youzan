webpackJsonp([5],{0:function(e,t,i){"use strict";var n={hotLists:"index/hotLists",banner:"index/banner",topLists:"category/topList",subLists:"category/subList",rank:"category/rank",searchList:"search/list",details:"goods/details",deal:"goods/deal",addCart:"cart/add",cartLists:"cart/list",cartReduce:"cart/reduce",cartRemove:"cart/remove",cartMrremove:"cart/mrremove",addressLists:"address/list",addressAdd:"address/add",addressRemove:"address/remove",addressUpdate:"address/update",addressDefault:"address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="https://easy-mock.com/mock/5d68e529cd2c201c25e08631/sdf/"+n[s]);t.a=n},112:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(81),s=(i.n(n),i(82)),o=(i.n(s),i(80)),r=(i.n(o),i(1)),c=i(8),d=i(2),a=i.n(d),h=i(10),u=(i.n(h),i(0)),f=i(26),l=i.n(f),g=i(76);i(18);new r.default({el:".container",data:{lists:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(e){return e.checked})},set:function(e){console.log(1),this.lists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},selectLists:function(){if(this.lists&&this.lists.length){var e=[],t=0;return this.lists.forEach(function(i){i.goodsList.forEach(function(i){i.checked&&(e.push(i),t+=i.price*i.number)})}),this.total=t,e}return[]},removeLists:function(){if(this.editingShop){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},created:function(){this.getList()},methods:{getList:function(){var e=this;a.a.get(u.a.cartLists).then(function(t){var i=t.data.cartList;i.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.editing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.lists=i})},selectGood:function(e,t){var i=this.editingShop?"removeChecked":"checked";t[i]=!t[i],e[i]=e.goodsList.every(function(e){return e[i]})},selectShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(i){i[t]=e[t]})},selectAll:function(){var e=this.editingShop?"allRemoveSelected":"allSelected";this[e]=!this[e]},editing:function(e,t){e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.lists.forEach(function(i,n){t!==n&&(i.editing=!1,i.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingShopIndex=e.editing?t:-1},reduce:function(e){1!==e.number&&g.a.reduce(e.id).then(function(t){e.number--})},add:function(e){g.a.add(e.id).then(function(t){e.number++})},remove:function(e,t,i,n){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:i,goodIndex:n},this.removeMsg="确定要删除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定要将所选"+this.removeLists.length+"个商品删除"},removeConfrim:function(){var e=this;if("确定要删除该商品吗？"===this.removeMsg){var t=this.removeData,i=t.shop,n=t.shopIndex,s=t.good,o=t.goodIndex;a.a.post(u.a.cartRemove,{id:s.id}).then(function(t){i.goodsList.splice(o,1),i.goodsList.length||(e.lists.splice(n,1),e.removeShop()),e.removePopup=!1})}else{var r=[];this.removeLists.forEach(function(e){r.push(e.id)}),a.a.post(u.a.cartMrremove,{ids:r}).then(function(t){var i=[];e.editingShop.goodsList.forEach(function(t){-1===e.removeLists.findIndex(function(e){return e.id==t.id})&&i.push(t)}),i.length?e.editingShop.goodsList=i:(e.lists.splice(e.editingShopIndex,1),e.removeShop()),e.removePopup=!1})}},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})},start:function(e,t){t.startX=e.changedTouches[0].clientX},end:function(e,t,i,n){var s=e.changedTouches[0].clientX,o="0";i.startX-s>100&&(o="-60px"),s-i.startX>100&&(o="0px"),l()(this.$refs["goods-"+t+"-"+n],{left:o})}},mixins:[c.a]})},18:function(e,t,i){"use strict";function n(e,t){return new o.a(function(i,n){c.a.post(e,t).then(function(e){var t=e.data.status;200===t&&i(e),300===t&&(location.href="",i(e)),n(e)}).catch(function(e){n(e)})})}var s=i(51),o=i.n(s),r=i(2),c=i.n(r);i(0);t.a=n},76:function(e,t,i){"use strict";var n=i(52),s=i.n(n),o=i(53),r=i.n(o),c=i(18),d=i(0),a=function(){function e(){s()(this,e)}return r()(e,null,[{key:"add",value:function(e){return i.i(c.a)(d.a.addCart,{id:e,number:1})}},{key:"reduce",value:function(e){return i.i(c.a)(d.a.cartReduce,{id:e,number:1})}}]),e}();t.a=a},8:function(e,t,i){"use strict";var n={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var i=t.split(".");return i[0]+"."+(i[1]+"0").substr(0,2)}return t+".00"}}};t.a=n},80:function(e,t){},81:function(e,t){},82:function(e,t){}},[112]);
//# sourceMappingURL=cart.29b057989e69a1c33246.js.map