import{f as u,v as i,x as p,o as y,c as m,a as f,a5 as h}from"./index-CoQjj_Ka.js";const k=u({__name:"TreeCategory",props:i({data:{}},{selectedKeys:{},selectedKeysModifiers:{},expandedKeys:{},expandedKeysModifiers:{}}),emits:i(["check"],["update:selectedKeys","update:expandedKeys"]),setup(s,{emit:c}){const a=c,n=p(s,"selectedKeys"),t=p(s,"expandedKeys"),e=(o,d)=>{var l;const r=o[0];((l=d.node.children)==null?void 0:l.length)>0||!r||a("check",r)};return(o,d)=>{const r=h;return y(),m("div",null,[f(r,{"tree-data":o.data,"expanded-keys":t.value,"onUpdate:expandedKeys":d[0]||(d[0]=l=>t.value=l),"selected-keys":n.value,"onUpdate:selectedKeys":d[1]||(d[1]=l=>n.value=l),"block-node":"","show-line":"","show-icon":!1,onSelect:e,"field-names":{key:"val",title:"label"}},null,8,["tree-data","expanded-keys","selected-keys"])])}}}),v=s=>s?(a=>{const n=new Map;a.forEach(e=>{n.set(e.id,{val:e.val,title:e.title,label:e.label,children:[],id:e.id})});const t=[];return a.forEach(e=>{const o=n.get(e.id);e.parentId===0||!n.has(e.parentId)?t.push(o):n.get(e.parentId).children.push(o)}),t})(s):[],x=(s,c)=>{const a=new Blob([s],{type:"text/plain"}),n=URL.createObjectURL(a),t=document.createElement("a");t.href=n,t.download=c,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(n)};export{k as _,v as c,x as d};