System.register(["./index-legacy.C7Ic2KQL.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.h}],execute:function(){e({a:function(e){return r.request({url:"/system/role/authUser/allocatedList",method:"get",params:e})},b:function(e){return r.request({url:"/system/role/authUser/selectAll",method:"put",params:e})},c:function(e){return r.request({url:"/system/role/authUser/cancel",method:"put",data:e})},d:function(e,t){const u={roleId:e,status:t};return r.request({url:"/system/role/changeStatus",method:"put",data:u})},e:function(e){return r.request({url:"/system/role/dataScope",method:"put",data:e})},f:function(e){return r.request({url:"/system/role",method:"put",data:e})},g:function(e){return r.request({url:"/system/role",method:"post",data:e})},h:function(e){return r.request({url:"/system/role/"+e,method:"delete"})},i:function(e){return r.request({url:"/system/role/"+e,method:"get"})},j:function(e){return r.request({url:"/system/role/deptTree/"+e,method:"get"})},l:function(e){return r.request({url:"/system/role/list",method:"get",params:e})},u:function(e){return r.request({url:"/system/role/authUser/unallocatedList",method:"get",params:e})}})}}}));