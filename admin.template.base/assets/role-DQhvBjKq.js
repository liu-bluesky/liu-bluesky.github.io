import{h as t}from"./index-DnKBT612.js";function o(e){return t.request({url:"/system/role/list",method:"get",params:e})}function l(e){return t.request({url:"/system/role/"+e,method:"get"})}function a(e){return t.request({url:"/system/role",method:"post",data:e})}function n(e){return t.request({url:"/system/role",method:"put",data:e})}function m(e){return t.request({url:"/system/role/dataScope",method:"put",data:e})}function c(e,r){const s={roleId:e,status:r};return t.request({url:"/system/role/changeStatus",method:"put",data:s})}function d(e){return t.request({url:"/system/role/"+e,method:"delete"})}function h(e){return t.request({url:"/system/role/authUser/allocatedList",method:"get",params:e})}function i(e){return t.request({url:"/system/role/authUser/unallocatedList",method:"get",params:e})}function p(e){return t.request({url:"/system/role/authUser/cancel",method:"put",data:e})}function f(e){return t.request({url:"/system/role/authUser/selectAll",method:"put",params:e})}function q(e){return t.request({url:"/system/role/deptTree/"+e,method:"get"})}export{h as a,p as b,f as c,n as d,a as e,c as f,l as g,m as h,d as i,q as j,o as l,i as u};
