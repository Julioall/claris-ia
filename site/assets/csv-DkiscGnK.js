function d(l,n){if(n.length===0)return;const o=Object.keys(n[0]),r=[o.join(","),...n.map(a=>o.map(u=>{const c=a[u],e=c==null?"":String(c);return e.includes(",")||e.includes('"')||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}).join(","))].join(`
`),i=new Blob([r],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(i),t=document.createElement("a");t.href=s,t.download=l,t.click(),URL.revokeObjectURL(s)}export{d as e};
