import{h as t}from"./index-CfbifT15.js";function r(e){return t.request({url:"/system/menu/list",method:"get",params:e})}function s(e){return t.request({url:"/system/menu/"+e,method:"get"})}function n(){return t.request({url:"/system/menu/treeselect",method:"get"})}function m(e){return t.request({url:"/system/menu/roleMenuTreeselect/"+e,method:"get"})}function o(e){return t.request({url:"/system/menu",method:"post",data:e})}function l(e){return t.request({url:"/system/menu",method:"put",data:e})}function a(e){return t.request({url:"/system/menu/"+e,method:"delete"})}export{o as a,a as d,s as g,r as l,m as r,n as t,l as u};