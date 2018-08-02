/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("a11yHelp",function(e){var t=e.lang.a11yhelp,a=CKEDITOR.tools.getNextId(),l={8:t.backspace,9:t.tab,13:t.enter,16:t.shift,17:t.ctrl,18:t.alt,19:t.pause,20:t.capslock,27:t.escape,33:t.pageUp,34:t.pageDown,35:t.end,36:t.home,37:t.leftArrow,38:t.upArrow,39:t.rightArrow,40:t.downArrow,45:t.insert,46:t["delete"],91:t.leftWindowKey,92:t.rightWindowKey,93:t.selectKey,96:t.numpad0,97:t.numpad1,98:t.numpad2,99:t.numpad3,100:t.numpad4,101:t.numpad5,102:t.numpad6,103:t.numpad7,104:t.numpad8,105:t.numpad9,106:t.multiply,107:t.add,109:t.subtract,110:t.decimalPoint,111:t.divide,112:t.f1,113:t.f2,114:t.f3,115:t.f4,116:t.f5,117:t.f6,118:t.f7,119:t.f8,120:t.f9,121:t.f10,122:t.f11,123:t.f12,144:t.numLock,145:t.scrollLock,186:t.semiColon,187:t.equalSign,188:t.comma,189:t.dash,190:t.period,191:t.forwardSlash,192:t.graveAccent,219:t.openBracket,220:t.backSlash,221:t.closeBracket,222:t.singleQuote};l[CKEDITOR.ALT]=t.alt,l[CKEDITOR.SHIFT]=t.shift,l[CKEDITOR.CTRL]=t.ctrl;var n=[CKEDITOR.ALT,CKEDITOR.SHIFT,CKEDITOR.CTRL],i=/\$\{(.*?)\}/g,c=function(){var t=e.keystrokeHandler.keystrokes,a={},i;for(i in t)a[t[i]]=i;return function(e,t){var i;if(a[t]){i=a[t];for(var c,r,d=[],o=0;o<n.length;o++)r=n[o],1<(c=i/n[o])&&2>=c&&(i-=r,d.push(l[r]));d.push(l[i]||String.fromCharCode(i)),i=d.join("+")}else i=e;return i}}();return{title:t.title,minWidth:600,minHeight:400,contents:[{id:"info",label:e.lang.common.generalTab,expand:!0,elements:[{type:"html",id:"legends",style:"white-space:normal;",focus:function(){this.getElement().focus()},html:function(){for(var e='<div class="cke_accessibility_legend" role="document" aria-labelledby="'+a+'_arialbl" tabIndex="-1">%1</div><span id="'+a+'_arialbl" class="cke_voice_label">'+t.contents+" </span>",l=[],n=t.legend,r=n.length,d=0;d<r;d++){for(var o=n[d],s=[],p=o.items,g=p.length,f=0;f<g;f++){var m=p[f],u=m.legend.replace(i,c);u.match(i)||s.push("<dt>%1</dt><dd>%2</dd>".replace("%1",m.name).replace("%2",u))}l.push("<h1>%1</h1><dl>%2</dl>".replace("%1",o.name).replace("%2",s.join("")))}return e.replace("%1",l.join(""))}()+'<style type="text/css">.cke_accessibility_legend{width:600px;height:400px;padding-right:5px;overflow-y:auto;overflow-x:hidden;}.cke_browser_quirks .cke_accessibility_legend,{height:390px}.cke_accessibility_legend *{white-space:normal;}.cke_accessibility_legend h1{font-size: 20px;border-bottom: 1px solid #AAA;margin: 5px 0px 15px;}.cke_accessibility_legend dl{margin-left: 5px;}.cke_accessibility_legend dt{font-size: 13px;font-weight: bold;}.cke_accessibility_legend dd{margin:10px}</style>'}]}],buttons:[CKEDITOR.dialog.cancelButton]}});