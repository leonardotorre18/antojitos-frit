(()=>{"use strict";var e={607:function(e,r,t){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=(0,s(t(860)).default)(),n=process.env.PORT;o.get("/",((e,r)=>{r.send("Express + TypeScript Server")})),o.listen(n,(()=>{console.log(`⚡️[server]: Server is running at http://localhost:${n}`)})),r.default=o},860:e=>{e.exports=require("express")}},r={};!function t(s){var o=r[s];if(void 0!==o)return o.exports;var n=r[s]={exports:{}};return e[s].call(n.exports,n,n.exports,t),n.exports}(607)})();