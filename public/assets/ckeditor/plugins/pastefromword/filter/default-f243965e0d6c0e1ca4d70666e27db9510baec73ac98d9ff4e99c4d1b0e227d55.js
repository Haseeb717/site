/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e){for(var e=e.toUpperCase(),t=a.length,l=0,n=0;n<t;++n)for(var r=a[n],i=r[1].length;e.substr(0,i)==r[1];e=e.substr(i))l+=r[0];return l}function t(e){for(var e=e.toUpperCase(),t=o.length,l=1,n=1;0<e.length;n*=t)l+=o.indexOf(e.charAt(e.length-1))*n,e=e.substr(0,e.length-1);return l}var l=CKEDITOR.htmlParser.fragment.prototype,n=CKEDITOR.htmlParser.element.prototype;l.onlyChild=n.onlyChild=function(){var e=this.children;return 1==e.length&&e[0]||null},n.removeAnyChildWithName=function(e){for(var t=this.children,l=[],n,r=0;r<t.length;r++)n=t[r],n.name&&(n.name==e&&(l.push(n),t.splice(r--,1)),l=l.concat(n.removeAnyChildWithName(e)));return l},n.getAncestor=function(e){for(var t=this.parent;t&&(!t.name||!t.name.match(e));)t=t.parent;return t},l.firstChild=n.firstChild=function(e){for(var t,l=0;l<this.children.length;l++)if(t=this.children[l],e(t)||t.name&&(t=t.firstChild(e)))return t;return null},n.addStyle=function(e,t,l){var n="";if("string"==typeof t)n+=e+":"+t+";";else{if("object"==typeof e)for(var r in e)e.hasOwnProperty(r)&&(n+=r+":"+e[r]+";");else n+=e;l=t}this.attributes||(this.attributes={}),e=this.attributes.style||"",e=(l?[n,e]:[e,n]).join(";"),this.attributes.style=e.replace(/^;+|;(?=;)/g,"")},n.getStyle=function(e){var t=this.attributes.style;if(t)return t=CKEDITOR.tools.parseCssText(t,1),t[e]},CKEDITOR.dtd.parentOf=function(e){var t={},l;for(l in this)-1==l.indexOf("$")&&this[l][e]&&(t[l]=1);return t};var r=/^([.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz){1}?/i,i=/^(?:\b0[^\s]*\s*){1,4}$/,s={ol:{decimal:/\d+/,"lower-roman":/^m{0,4}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/,"upper-roman":/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,"lower-alpha":/^[a-z]+$/,"upper-alpha":/^[A-Z]+$/},ul:{disc:/[l\u00B7\u2002]/,circle:/[\u006F\u00D8]/,square:/[\u006E\u25C6]/}},a=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],o="ABCDEFGHIJKLMNOPQRSTUVWXYZ",u=0,c=null,f,d=CKEDITOR.plugins.pastefromword={utils:{createListBulletMarker:function(e,t){var l=new CKEDITOR.htmlParser.element("cke:listbullet");return l.attributes={"cke:listsymbol":e[0]},l.add(new CKEDITOR.htmlParser.text(t)),l},isListBulletIndicator:function(e){if(/mso-list\s*:\s*Ignore/i.test(e.attributes&&e.attributes.style))return!0},isContainingOnlySpaces:function(e){var t;return(t=e.onlyChild())&&/^(:?\s|&nbsp;)+$/.test(t.value)},resolveList:function(e){var t=e.attributes,l;return(l=e.removeAnyChildWithName("cke:listbullet"))&&l.length&&(l=l[0])?(e.name="cke:li",t.style&&(t.style=d.filters.stylesFilter([["text-indent"],["line-height"],[/^margin(:?-left)?$/,null,function(e){e=e.split(" "),e=CKEDITOR.tools.convertToPx(e[3]||e[1]||e[0]),!u&&null!==c&&e>c&&(u=e-c),c=e,t["cke:indent"]=u&&Math.ceil(e/u)+1||1}],[/^mso-list$/,null,function(e){if(e=e.split(" "),!(2>e.length)){var l=Number(e[0].match(/\d+/)),e=Number(e[1].match(/\d+/));1==e&&(l!==f&&(t["cke:reset"]=1),f=l),t["cke:indent"]=e}}]])(t.style,e)||""),t["cke:indent"]||(c=0,t["cke:indent"]=1),CKEDITOR.tools.extend(t,l.attributes),!0):(f=c=u=null,!1)},getStyleComponents:function(){var e=CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;"></div>',CKEDITOR.document);return CKEDITOR.document.getBody().append(e),function(t,l,n){e.setStyle(t,l);for(var t={},l=n.length,r=0;r<l;r++)t[n[r]]=e.getStyle(n[r]);return t}}(),listDtdParents:CKEDITOR.dtd.parentOf("ol")},filters:{flattenList:function(e,t){var t="number"==typeof t?t:1,l=e.attributes,n;switch(l.type){case"a":n="lower-alpha";break;case"1":n="decimal"}for(var i=e.children,s,a=0;a<i.length;a++)if(s=i[a],s.name in CKEDITOR.dtd.$listItem){var o=s.attributes,u=s.children,m=u[0],h=u[u.length-1];m.attributes&&m.attributes.style&&-1<m.attributes.style.indexOf("mso-list")&&(s.attributes.style=m.attributes.style,m.replaceWithChildren()),h.name in CKEDITOR.dtd.$list&&(e.add(h,a+1),--u.length||i.splice(a--,1)),s.name="cke:li",l.start&&!a&&(o.value=l.start),d.filters.stylesFilter([["tab-stops",null,function(e){(e=e.split(" ")[1].match(r))&&(c=CKEDITOR.tools.convertToPx(e[0]))}],1==t?["mso-list",null,function(e){e=e.split(" "),e=Number(e[0].match(/\d+/)),e!==f&&(o["cke:reset"]=1),f=e}]:null])(o.style),o["cke:indent"]=t,o["cke:listtype"]=e.name,o["cke:list-style-type"]=n}else if(s.name in CKEDITOR.dtd.$list){for(arguments.callee.apply(this,[s,t+1]),i=i.slice(0,a).concat(s.children).concat(i.slice(a+1)),e.children=[],s=0,u=i.length;s<u;s++)e.add(i[s]);i=e.children}delete e.name,l["cke:list"]=1},assembleList:function(l){for(var n=l.children,r,i,a,o,d,m,l=[],h,p,y,g,b,v,C=0;C<n.length;C++)if(r=n[C],"cke:li"==r.name)if(r.name="li",i=r.attributes,y=(y=i["cke:listsymbol"])&&y.match(/^(?:[(]?)([^\s]+?)([.)]?)$/),g=b=v=null,i["cke:ignored"])n.splice(C--,1);else{if(i["cke:reset"]&&(m=o=d=null),a=Number(i["cke:indent"]),a!=o&&(p=h=null),y){if(p&&s[p][h].test(y[1]))g=p,b=h;else for(var O in s)for(var I in s[O])if(s[O][I].test(y[1])){if("ol"!=O||!/alpha|roman/.test(I)){g=O,b=I;break}h=/roman/.test(I)?e(y[1]):t(y[1]),(!v||h<v)&&(v=h,g=O,b=I)}!g&&(g=y[2]?"ol":"ul")}else g=i["cke:listtype"]||"ol",b=i["cke:list-style-type"];if(p=g,h=b||("ol"==g?"decimal":"disc"),b&&b!=("ol"==g?"decimal":"disc")&&r.addStyle("list-style-type",b),"ol"==g&&y){switch(b){case"decimal":v=Number(y[1]);break;case"lower-roman":case"upper-roman":v=e(y[1]);break;case"lower-alpha":case"upper-alpha":v=t(y[1])}r.attributes.value=v}if(m){if(a>o)l.push(m=new CKEDITOR.htmlParser.element(g)),m.add(r),d.add(m);else{if(a<o){o-=a;for(var D;o--&&(D=m.parent);)m=D.parent}m.add(r)}n.splice(C--,1)}else l.push(m=new CKEDITOR.htmlParser.element(g)),m.add(r),n[C]=m;d=r,o=a}else m&&(m=o=d=null);for(C=0;C<l.length;C++)if(m=l[C],O=m.children,h=h=void 0,I=m.children.length,D=h=void 0,n=/list-style-type:(.*?)(?:;|$)/,o=CKEDITOR.plugins.pastefromword.filters.stylesFilter,h=m.attributes,!n.exec(h.style)){for(d=0;d<I;d++)if(h=O[d],h.attributes.value&&Number(h.attributes.value)==d+1&&delete h.attributes.value,h=n.exec(h.attributes.style)){if(h[1]!=D&&D){D=null;break}D=h[1]}if(D){for(d=0;d<I;d++)h=O[d].attributes,h.style&&(h.style=o([["list-style-type"]])(h.style)||"");m.addStyle("list-style-type",D)}}f=c=u=null},falsyFilter:function(){return!1},stylesFilter:function(e,t){return function(l,n){var r=[];(l||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(l,i,s){"font-family"==(i=i.toLowerCase())&&(s=s.replace(/["']/g,""));for(var a,o,u,c=0;c<e.length;c++)if(e[c]&&(l=e[c][0],a=e[c][1],o=e[c][2],u=e[c][3],i.match(l)&&(!a||s.match(a))))return i=u||i,t&&(o=o||s),"function"==typeof o&&(o=o(s,n,i)),o&&o.push&&(i=o[0],o=o[1]),void("string"==typeof o&&r.push([i,o]));!t&&r.push([i,s])});for(var i=0;i<r.length;i++)r[i]=r[i].join(":");return!!r.length&&r.join(";")+";"}},elementMigrateFilter:function(e,t){return e?function(l){var n=t?new CKEDITOR.style(e,t)._.definition:e;l.name=n.element,CKEDITOR.tools.extend(l.attributes,CKEDITOR.tools.clone(n.attributes)),l.addStyle(CKEDITOR.style.getStyleText(n)),n.attributes&&n.attributes["class"]&&(l.classWhiteList=" "+n.attributes["class"]+" ")}:function(){}},styleMigrateFilter:function(e,t){var l=this.elementMigrateFilter;return e?function(n,r){var i=new CKEDITOR.htmlParser.element(null),s={};s[t]=n,l(e,s)(i),i.children=r.children,r.children=[i],i.filter=function(){},i.parent=r}:function(){}},bogusAttrFilter:function(e,t){if(-1==t.name.indexOf("cke:"))return!1},applyStyleFilter:null},getRules:function(e,t){var l=CKEDITOR.dtd,n=CKEDITOR.tools.extend({},l.$block,l.$listItem,l.$tableContent),r=e.config,s=this.filters,a=s.falsyFilter,o=s.stylesFilter,u=s.elementMigrateFilter,c=CKEDITOR.tools.bind(this.filters.styleMigrateFilter,this.filters),f=this.utils.createListBulletMarker,d=s.flattenList,m=s.assembleList,h=this.utils.isListBulletIndicator,p=this.utils.isContainingOnlySpaces,y=this.utils.resolveList,g=function(e){return e=CKEDITOR.tools.convertToPx(e),isNaN(e)?e:e+"px"},b=this.utils.getStyleComponents,v=this.utils.listDtdParents,C=!1!==r.pasteFromWordRemoveFontStyles,O=!1!==r.pasteFromWordRemoveStyles;return{elementNames:[[/meta|link|script/,""]],root:function(e){e.filterChildren(t),m(e)},elements:{"^":function(e){var t;CKEDITOR.env.gecko&&(t=s.applyStyleFilter)&&t(e)},$:function(e){var i=e.name||"",s=e.attributes;if(i in n&&s.style&&(s.style=o([[/^(:?width|height)$/,null,g]])(s.style)||""),i.match(/h\d/)){if(e.filterChildren(t),y(e))return;u(r["format_"+i])(e)}else if(i in l.$inline)e.filterChildren(t),p(e)&&delete e.name;else if(-1!=i.indexOf(":")&&-1==i.indexOf("cke")){if(e.filterChildren(t),"v:imagedata"==i)return(i=e.attributes["o:href"])&&(e.attributes.src=i),void(e.name="img");delete e.name}i in v&&(e.filterChildren(t),m(e))},style:function(e){if(CKEDITOR.env.gecko){var e=(e=e.onlyChild().value.match(/\/\* Style Definitions \*\/([\s\S]*?)\/\*/))&&e[1],t={};e&&(e.replace(/[\n\r]/g,"").replace(/(.+?)\{(.+?)\}/g,function(e,l,n){for(var l=l.split(","),e=l.length,r=0;r<e;r++)CKEDITOR.tools.trim(l[r]).replace(/^(\w+)(\.[\w-]+)?$/g,function(e,l,r){l=l||"*",r=r.substring(1,r.length),r.match(/MsoNormal/)||(t[l]||(t[l]={}),r?t[l][r]=n:t[l]=n)})}),s.applyStyleFilter=function(e){var l=t["*"]?"*":e.name,n=e.attributes&&e.attributes["class"];l in t&&(l=t[l],"object"==typeof l&&(l=l[n]),l&&e.addStyle(l,!0))})}return!1},p:function(e){if(/MsoListParagraph/i.exec(e.attributes["class"])||e.getStyle("mso-list")){var l=e.firstChild(function(e){return e.type==CKEDITOR.NODE_TEXT&&!p(e.parent)});(l=l&&l.parent)&&l.addStyle("mso-list","Ignore")}e.filterChildren(t),y(e)||(r.enterMode==CKEDITOR.ENTER_BR?(delete e.name,e.add(new CKEDITOR.htmlParser.element("br"))):u(r["format_"+(r.enterMode==CKEDITOR.ENTER_P?"p":"div")])(e))},div:function(e){var t=e.onlyChild();if(t&&"table"==t.name){var l=e.attributes;t.attributes=CKEDITOR.tools.extend(t.attributes,l),l.style&&t.addStyle(l.style),t=new CKEDITOR.htmlParser.element("div"),t.addStyle("clear","both"),e.add(t),delete e.name}},td:function(e){e.getAncestor("thead")&&(e.name="th")},ol:d,ul:d,dl:d,font:function(e){if(h(e.parent))delete e.name;else{e.filterChildren(t);var l=e.attributes,n=l.style,r=e.parent;"font"==r.name?(CKEDITOR.tools.extend(r.attributes,e.attributes),n&&r.addStyle(n),delete e.name):(n=(n||"").split(";"),l.color&&("#000000"!=l.color&&n.push("color:"+l.color),delete l.color),l.face&&(n.push("font-family:"+l.face),delete l.face),l.size&&(n.push("font-size:"+(3<l.size?"large":3>l.size?"small":"medium")),delete l.size),e.name="span",e.addStyle(n.join(";")))}},span:function(e){if(h(e.parent))return!1;if(e.filterChildren(t),p(e))return delete e.name,null;if(h(e)){var l=e.firstChild(function(e){return e.value||"img"==e.name}),n=(l=l&&(l.value||"l."))&&l.match(/^(?:[(]?)([^\s]+?)([.)]?)$/);if(n)return l=f(n,l),(e=e.getAncestor("span"))&&/ mso-hide:\s*all|display:\s*none /.test(e.attributes.style)&&(l.attributes["cke:ignored"]=1),l}return(n=(l=e.attributes)&&l.style)&&(l.style=o([["line-height"],[/^font-family$/,null,C?null:c(r.font_style,"family")],[/^font-size$/,null,C?null:c(r.fontSize_style,"size")],[/^color$/,null,C?null:c(r.colorButton_foreStyle,"color")],[/^background-color$/,null,C?null:c(r.colorButton_backStyle,"color")]])(n,e)||""),l.style||delete l.style,CKEDITOR.tools.isEmpty(l)&&delete e.name,null},b:u(r.coreStyles_bold),i:u(r.coreStyles_italic),u:u(r.coreStyles_underline),s:u(r.coreStyles_strike),sup:u(r.coreStyles_superscript),sub:u(r.coreStyles_subscript),a:function(e){e=e.attributes,e.href&&e.href.match(/^file:\/\/\/[\S]+#/i)&&(e.href=e.href.replace(/^file:\/\/\/[^#]+/i,""))},"cke:listbullet":function(e){e.getAncestor(/h\d/)&&!r.pasteFromWordNumberedHeadingToList&&delete e.name}},attributeNames:[[/^onmouse(:?out|over)/,""],[/^onload$/,""],[/(?:v|o):\w+/,""],[/^lang/,""]],attributes:{style:o(O?[[/^list-style-type$/,null],[/^margin$|^margin-(?!bottom|top)/,null,function(e,t,l){if(t.name in{p:1,div:1}){if(t="ltr"==r.contentsLangDirection?"margin-left":"margin-right","margin"==l)e=b(l,e,[t])[t];else if(l!=t)return null;if(e&&!i.test(e))return[t,e]}return null}],[/^clear$/],[/^border.*|margin.*|vertical-align|float$/,null,function(e,t){if("img"==t.name)return e}],[/^width|height$/,null,function(e,t){if(t.name in{table:1,td:1,th:1,img:1})return e}]]:[[/^mso-/],[/-color$/,null,function(e){return"transparent"!=e&&(CKEDITOR.env.gecko?e.replace(/-moz-use-text-color/g,"transparent"):void 0)}],[/^margin$/,i],["text-indent","0cm"],["page-break-before"],["tab-stops"],["display","none"],C?[/font-?/]:null],O),width:function(e,t){if(t.name in l.$tableContent)return!1},border:function(e,t){if(t.name in l.$tableContent)return!1},"class":function(e,t){return!(!t.classWhiteList||-1==t.classWhiteList.indexOf(" "+e+" "))&&e},bgcolor:a,valign:O?a:function(e,t){return t.addStyle("vertical-align",e),!1}},comment:CKEDITOR.env.ie?a:function(e,t){var l=e.match(/<img.*?>/),n=e.match(/^\[if !supportLists\]([\s\S]*?)\[endif\]$/);return n?(n=(l=n[1]||l&&"l.")&&l.match(/>(?:[(]?)([^\s]+?)([.)]?)</),f(n,l)):!(!CKEDITOR.env.gecko||!l)&&(l=CKEDITOR.htmlParser.fragment.fromHtml(l[0]).children[0],(n=(n=(n=t.previous)&&n.value.match(/<v:imagedata[^>]*o:href=['"](.*?)['"]/))&&n[1])&&(l.attributes.src=n),l)}}}},m=function(){this.dataFilter=new CKEDITOR.htmlParser.filter};m.prototype={toHtml:function(e){var e=CKEDITOR.htmlParser.fragment.fromHtml(e),t=new CKEDITOR.htmlParser.basicWriter;return e.writeHtml(t,this.dataFilter),t.getHtml(!0)}},CKEDITOR.cleanWord=function(e,t){e=e.replace(/<!\[([^\]]*?)\]>/g,"<!--[$1]-->"),CKEDITOR.env.gecko&&(e=e.replace(/(<\!--\[if[^<]*?\])--\>([\S\s]*?)<\!--(\[endif\]--\>)/gi,"$1$2$3")),CKEDITOR.env.webkit&&(e=e.replace(/(class="MsoListParagraph[^>]+><\!--\[if !supportLists\]--\>)([^<]+<span[^<]+<\/span>)(<\!--\[endif\]--\>)/gi,"$1<span>$2</span>$3"));var l=new m,n=l.dataFilter;n.addRules(CKEDITOR.plugins.pastefromword.getRules(t,n)),t.fire("beforeCleanWord",{filter:n});try{e=l.toHtml(e)}catch(e){t.showNotification(t.lang.pastefromword.error)}return e=e.replace(/cke:.*?".*?"/g,""),e=e.replace(/style=""/g,""),e=e.replace(/<span>/g,"")}}();