var b={exports:{}};(function(d){(function(){var o;o=d.exports=i,o.format=i,o.vsprintf=x,typeof console<"u"&&typeof console.log=="function"&&(o.printf=k);function k(){console.log(i.apply(null,arguments))}function x(r,c){return i.apply(null,[r].concat(c))}function i(r){for(var c=1,I=[].slice.call(arguments),n=0,S=r.length,e="",t,p=!1,s,f,l=!1,g,a=function(){return I[c++]},v=function(){for(var u="";/\d/.test(r[n]);)u+=r[n++],t=r[n];return u.length>0?parseInt(u):null};n<S;++n)if(t=r[n],p)switch(p=!1,t=="."?(l=!1,t=r[++n]):t=="0"&&r[n+1]=="."?(l=!0,n+=2,t=r[n]):l=!0,g=v(),t){case"b":e+=parseInt(a(),10).toString(2);break;case"c":s=a(),typeof s=="string"||s instanceof String?e+=s:e+=String.fromCharCode(parseInt(s,10));break;case"d":e+=parseInt(a(),10);break;case"f":f=String(parseFloat(a()).toFixed(g||6)),e+=l?f:f.replace(/^0/,"");break;case"j":e+=JSON.stringify(a());break;case"o":e+="0"+parseInt(a(),10).toString(8);break;case"s":e+=a();break;case"x":e+="0x"+parseInt(a(),10).toString(16);break;case"X":e+="0x"+parseInt(a(),10).toString(16).toUpperCase();break;default:e+=t;break}else t==="%"?p=!0:e+=t;return e}})()})(b);const y=b.exports;export{y as a,b as f};
//# sourceMappingURL=format.5298ab92.js.map
