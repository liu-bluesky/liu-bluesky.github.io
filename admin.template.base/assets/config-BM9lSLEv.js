import{h as e}from"./index-D5ps7mph.js";function o(t){return e.request({url:"/system/config/list",method:"get",params:t})}function s(t){return e.request({url:"/system/config/"+t,method:"get"})}function r(t){return e.request({url:"/system/config/configKey/"+t,method:"get"})}function u(t){return e.request({url:"/system/config",method:"post",data:t})}function i(t){return e.request({url:"/system/config",method:"put",data:t})}function f(t){return e.request({url:"/system/config/"+t,method:"delete"})}export{u as a,r as b,f as d,s as g,o as l,i as u};