module.exports=(()=>{var e={723:e=>{const t=(e,t,r="rule")=>{return Object.keys(e).map(s=>{const o=e[s];const c=Object.keys(o).map(e=>t.decl({prop:e,value:o[e],raws:{before:"\n  "}}));const a=c.length>0;const n=r==="rule"?t.rule({selector:`:import('${s}')`,raws:{after:a?"\n":""}}):t.atRule({name:"icss-import",params:`'${s}'`,raws:{after:a?"\n":""}});if(a){n.append(c)}return n})};const r=(e,t,r="rule")=>{const s=Object.keys(e).map(r=>t.decl({prop:r,value:e[r],raws:{before:"\n  "}}));if(s.length===0){return[]}const o=r==="rule"?t.rule({selector:`:export`,raws:{after:"\n"}}):t.atRule({name:"icss-export",raws:{after:"\n"}});o.append(s);return[o]};const s=(e,s,o,c)=>[...t(e,o,c),...r(s,o,c)];e.exports=s},32:e=>{const t=/^:import\(("[^"]*"|'[^']*'|[^"']+)\)$/;const r=/^("[^"]*"|'[^']*'|[^"']+)$/;const s=e=>{const t={};e.walkDecls(e=>{const r=e.raws.before?e.raws.before.trim():"";t[r+e.prop]=e.value});return t};const o=(e,o=true,c="auto")=>{const a={};const n={};function addImports(e,t){const r=t.replace(/'|"/g,"");a[r]=Object.assign(a[r]||{},s(e));if(o){e.remove()}}function addExports(e){Object.assign(n,s(e));if(o){e.remove()}}e.each(e=>{if(e.type==="rule"&&c!=="at-rule"){if(e.selector.slice(0,7)===":import"){const r=t.exec(e.selector);if(r){addImports(e,r[1])}}if(e.selector===":export"){addExports(e)}}if(e.type==="atrule"&&c!=="rule"){if(e.name==="icss-import"){const t=r.exec(e.params);if(t){addImports(e,t[1])}}if(e.name==="icss-export"){addExports(e)}}});return{icssImports:a,icssExports:n}};e.exports=o},630:(e,t,r)=>{const s=r(46);const o=r(951);const c=r(32);const a=r(723);e.exports={replaceValueSymbols:s,replaceSymbols:o,extractICSS:c,createICSSRules:a}},951:(e,t,r)=>{const s=r(46);const o=(e,t)=>{e.walk(e=>{if(e.type==="decl"&&e.value){e.value=s(e.value.toString(),t)}else if(e.type==="rule"&&e.selector){e.selector=s(e.selector.toString(),t)}else if(e.type==="atrule"&&e.params){e.params=s(e.params.toString(),t)}})};e.exports=o},46:e=>{const t=/[$]?[\w-]+/g;const r=(e,r)=>{let s;while(s=t.exec(e)){const o=r[s[0]];if(o){e=e.slice(0,s.index)+o+e.slice(t.lastIndex);t.lastIndex-=s[0].length-o.length}}return e};e.exports=r}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var s=t[r]={exports:{}};var o=true;try{e[r](s,s.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return s.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(630)})();