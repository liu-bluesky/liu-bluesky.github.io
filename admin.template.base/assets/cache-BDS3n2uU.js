import{h as e}from"./index-CfbifT15.js";function a(){return e.request({url:"/monitor/cache",method:"get"})}function c(){return e.request({url:"/monitor/cache/getNames",method:"get"})}function o(t){return e.request({url:"/monitor/cache/getKeys/"+t,method:"get"})}function n(t){return e.request({url:"/monitor/cache/clearCacheName/"+t,method:"delete"})}export{o as a,n as c,a as g,c as l};