/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("specialchar",function(e){var t,n=e.lang.specialchar,a=function(n){var a,n=n.data?n.data.getTarget():new CKEDITOR.dom.element(n);"a"==n.getName()&&(a=n.getChild(0).getHtml())&&(n.removeClass("cke_light_background"),t.hide(),n=e.document.createElement("span"),n.setHtml(a),e.insertText(n.getText()))},l=CKEDITOR.tools.addFunction(a),i,o=function(e,n){var a,n=n||e.data.getTarget();if("span"==n.getName()&&(n=n.getParent()),"a"==n.getName()&&(a=n.getChild(0).getHtml())){i&&r(null,i);var l=t.getContentElement("info","htmlPreview").getElement();t.getContentElement("info","charPreview").getElement().setHtml(a),l.setHtml(CKEDITOR.tools.htmlEncode(a)),n.getParent().addClass("cke_light_background"),i=n}},r=function(e,n){n=n||e.data.getTarget(),"span"==n.getName()&&(n=n.getParent()),"a"==n.getName()&&(t.getContentElement("info","charPreview").getElement().setHtml("&nbsp;"),t.getContentElement("info","htmlPreview").getElement().setHtml("&nbsp;"),n.getParent().removeClass("cke_light_background"),i=void 0)},s=CKEDITOR.tools.addFunction(function(t){var t=new CKEDITOR.dom.event(t),n=t.getTarget(),l;l=t.getKeystroke();var i="rtl"==e.lang.dir;switch(l){case 38:(l=n.getParent().getParent().getPrevious())&&(l=l.getChild([n.getParent().getIndex(),0]),l.focus(),r(null,n),o(null,l)),t.preventDefault();break;case 40:(l=n.getParent().getParent().getNext())&&(l=l.getChild([n.getParent().getIndex(),0]))&&1==l.type&&(l.focus(),r(null,n),o(null,l)),t.preventDefault();break;case 32:a({data:t}),t.preventDefault();break;case i?37:39:(l=n.getParent().getNext())?(l=l.getChild(0),1==l.type?(l.focus(),r(null,n),o(null,l),t.preventDefault(!0)):r(null,n)):(l=n.getParent().getParent().getNext())&&((l=l.getChild([0,0]))&&1==l.type?(l.focus(),r(null,n),o(null,l),t.preventDefault(!0)):r(null,n));break;case i?39:37:(l=n.getParent().getPrevious())?(l=l.getChild(0),l.focus(),r(null,n),o(null,l),t.preventDefault(!0)):(l=n.getParent().getParent().getPrevious())?(l=l.getLast().getChild(0),l.focus(),r(null,n),o(null,l),t.preventDefault(!0)):r(null,n)}});return{title:n.title,minWidth:430,minHeight:280,buttons:[CKEDITOR.dialog.cancelButton],charColumns:17,onLoad:function(){for(var t=this.definition.charColumns,a=e.config.specialChars,i=CKEDITOR.tools.getNextId()+"_specialchar_table_label",o=['<table role="listbox" aria-labelledby="'+i+'" style="width: 320px; height: 100%; border-collapse: separate;" align="center" cellspacing="2" cellpadding="2" border="0">'],r=0,c=a.length,g,d;r<c;){o.push('<tr role="presentation">');for(var u=0;u<t;u++,r++){if(g=a[r]){g instanceof Array?(d=g[1],g=g[0]):(d=g.replace("&","").replace(";","").replace("#",""),d=n[d]||g);var p="cke_specialchar_label_"+r+"_"+CKEDITOR.tools.getNextNumber();o.push('<td class="cke_dark_background" style="cursor: default" role="presentation"><a href="javascript: void(0);" role="option" aria-posinset="'+(r+1)+'"',' aria-setsize="'+c+'"',' aria-labelledby="'+p+'"',' class="cke_specialchar" title="',CKEDITOR.tools.htmlEncode(d),'" onkeydown="CKEDITOR.tools.callFunction( '+s+', event, this )" onclick="CKEDITOR.tools.callFunction('+l+', this); return false;" tabindex="-1"><span style="margin: 0 auto;cursor: inherit">'+g+'</span><span class="cke_voice_label" id="'+p+'">'+d+"</span></a>")}else o.push('<td class="cke_dark_background">&nbsp;');o.push("</td>")}o.push("</tr>")}o.push("</tbody></table>",'<span id="'+i+'" class="cke_voice_label">'+n.options+"</span>"),this.getContentElement("info","charContainer").getElement().setHtml(o.join(""))},contents:[{id:"info",label:e.lang.common.generalTab,title:e.lang.common.generalTab,padding:0,align:"top",elements:[{type:"hbox",align:"top",widths:["320px","90px"],children:[{type:"html",id:"charContainer",html:"",onMouseover:o,onMouseout:r,focus:function(){var e=this.getElement().getElementsByTag("a").getItem(0);setTimeout(function(){e.focus(),o(null,e)},0)},onShow:function(){var e=this.getElement().getChild([0,0,0,0,0]);setTimeout(function(){e.focus(),o(null,e)},0)},onLoad:function(e){t=e.sender}},{type:"hbox",align:"top",widths:["100%"],children:[{type:"vbox",align:"top",children:[{type:"html",html:"<div></div>"},{type:"html",id:"charPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:28px;height:40px;width:70px;padding-top:9px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"},{type:"html",id:"htmlPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:14px;height:20px;width:70px;padding-top:2px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"}]}]}]}]}]}});