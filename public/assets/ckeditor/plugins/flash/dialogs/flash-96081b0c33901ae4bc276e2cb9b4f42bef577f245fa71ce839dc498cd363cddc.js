/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e,t,o){var s=n[this.id];if(s)for(var m=this instanceof CKEDITOR.ui.dialog.checkbox,d=0;d<s.length;d++){var c=s[d];switch(c.type){case a:if(!e)continue;if(null!==e.getAttribute(c.name))return e=e.getAttribute(c.name),void(m?this.setValue("true"==e.toLowerCase()):this.setValue(e));m&&this.setValue(!!c["default"]);break;case l:if(!e)continue;if(c.name in o)return e=o[c.name],void(m?this.setValue("true"==e.toLowerCase()):this.setValue(e));m&&this.setValue(!!c["default"]);break;case i:if(!t)continue;if(t.getAttribute(c.name))return e=t.getAttribute(c.name),void(m?this.setValue("true"==e.toLowerCase()):this.setValue(e));m&&this.setValue(!!c["default"])}}}function t(e,t,o){var s=n[this.id];if(s)for(var m=""===this.getValue(),d=this instanceof CKEDITOR.ui.dialog.checkbox,c=0;c<s.length;c++){var h=s[c];switch(h.type){case a:if(!e||"data"==h.name&&t&&!e.hasAttribute("data"))continue;var r=this.getValue();m||d&&r===h["default"]?e.removeAttribute(h.name):e.setAttribute(h.name,r);break;case l:if(!e)continue;if(r=this.getValue(),m||d&&r===h["default"])h.name in o&&o[h.name].remove();else if(h.name in o)o[h.name].setAttribute("value",r);else{var g=CKEDITOR.dom.element.createFromHtml("<cke:param></cke:param>",e.getDocument());g.setAttributes({name:h.name,value:r}),1>e.getChildCount()?g.appendTo(e):g.insertBefore(e.getFirst())}break;case i:if(!t)continue;r=this.getValue(),m||d&&r===h["default"]?t.removeAttribute(h.name):t.setAttribute(h.name,r)}}}for(var a=1,l=2,i=4,n={id:[{type:a,name:"id"}],classid:[{type:a,name:"classid"}],codebase:[{type:a,name:"codebase"}],pluginspage:[{type:i,name:"pluginspage"}],src:[{type:l,name:"movie"},{type:i,name:"src"},{type:a,name:"data"}],name:[{type:i,name:"name"}],align:[{type:a,name:"align"}],"class":[{type:a,name:"class"},{type:i,name:"class"}],width:[{type:a,name:"width"},{type:i,name:"width"}],height:[{type:a,name:"height"},{type:i,name:"height"}],hSpace:[{type:a,name:"hSpace"},{type:i,name:"hSpace"}],vSpace:[{type:a,name:"vSpace"},{type:i,name:"vSpace"}],style:[{type:a,name:"style"},{type:i,name:"style"}],type:[{type:i,name:"type"}]},o="play loop menu quality scale salign wmode bgcolor base flashvars allowScriptAccess allowFullScreen".split(" "),s=0;s<o.length;s++)n[o[s]]=[{type:i,name:o[s]},{type:l,name:o[s]}];for(o=["play","loop","menu"],s=0;s<o.length;s++)n[o[s]][0]["default"]=n[o[s]][1]["default"]=!0;CKEDITOR.dialog.add("flash",function(a){var l=!a.config.flashEmbedTagOnly,i=a.config.flashAddEmbedTag||a.config.flashEmbedTagOnly,n,o="<div>"+CKEDITOR.tools.htmlEncode(a.lang.common.preview)+'<br><div id="cke_FlashPreviewLoader'+CKEDITOR.tools.getNextNumber()+'" style="display:none"><div class="loading">&nbsp;</div></div><div id="cke_FlashPreviewBox'+CKEDITOR.tools.getNextNumber()+'" class="FlashPreviewBox"></div></div>';return{title:a.lang.flash.title,minWidth:420,minHeight:310,onShow:function(){this.fakeImage=this.objectNode=this.embedNode=null,n=new CKEDITOR.dom.element("embed",a.document);var e=this.getSelectedElement();if(e&&e.data("cke-real-element-type")&&"flash"==e.data("cke-real-element-type")){this.fakeImage=e;var t=a.restoreRealElement(e),l=null,i=null,o={};if("cke:object"==t.getName()){l=t,t=l.getElementsByTag("embed","cke"),0<t.count()&&(i=t.getItem(0));for(var t=l.getElementsByTag("param","cke"),s=0,m=t.count();s<m;s++){var d=t.getItem(s),c=d.getAttribute("name"),d=d.getAttribute("value");o[c]=d}}else"cke:embed"==t.getName()&&(i=t);this.objectNode=l,this.embedNode=i,this.setupContent(l,i,o,e)}},onOk:function(){var e=null,t=null,n=null;if(this.fakeImage?(e=this.objectNode,t=this.embedNode):(l&&(e=CKEDITOR.dom.element.createFromHtml("<cke:object></cke:object>",a.document),e.setAttributes({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"})),i&&(t=CKEDITOR.dom.element.createFromHtml("<cke:embed></cke:embed>",a.document),t.setAttributes({type:"application/x-shockwave-flash",pluginspage:"http://www.macromedia.com/go/getflashplayer"}),e&&t.appendTo(e))),e)for(var n={},o=e.getElementsByTag("param","cke"),s=0,m=o.count();s<m;s++)n[o.getItem(s).getAttribute("name")]=o.getItem(s);o={},s={},this.commitContent(e,t,n,o,s),e=a.createFakeElement(e||t,"cke_flash","flash",!0),e.setAttributes(s),e.setStyles(o),this.fakeImage?(e.replace(this.fakeImage),a.getSelection().selectElement(e)):a.insertElement(e)},onHide:function(){this.preview&&this.preview.setHtml("")},contents:[{id:"info",label:a.lang.common.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"src",type:"text",label:a.lang.common.url,required:!0,validate:CKEDITOR.dialog.validate.notEmpty(a.lang.flash.validateSrc),setup:e,commit:t,onLoad:function(){var e=this.getDialog(),t=function(t){n.setAttribute("src",t),e.preview.setHtml('<embed height="100%" width="100%" src="'+CKEDITOR.tools.htmlEncode(n.getAttribute("src"))+'" type="application/x-shockwave-flash"></embed>')};e.preview=e.getContentElement("info","preview").getElement().getChild(3),this.on("change",function(e){e.data&&e.data.value&&t(e.data.value)}),this.getInputElement().on("change",function(){t(this.getValue())},this)}},{type:"button",id:"browse",filebrowser:"info:src",hidden:!0,style:"display:inline-block;margin-top:14px;",label:a.lang.common.browseServer}]}]},{type:"hbox",widths:["25%","25%","25%","25%","25%"],children:[{type:"text",id:"width",requiredContent:"embed[width]",style:"width:95px",label:a.lang.common.width,validate:CKEDITOR.dialog.validate.htmlLength(a.lang.common.invalidHtmlLength.replace("%1",a.lang.common.width)),setup:e,commit:t},{type:"text",id:"height",requiredContent:"embed[height]",style:"width:95px",label:a.lang.common.height,validate:CKEDITOR.dialog.validate.htmlLength(a.lang.common.invalidHtmlLength.replace("%1",a.lang.common.height)),setup:e,commit:t},{type:"text",id:"hSpace",requiredContent:"embed[hspace]",style:"width:95px",label:a.lang.flash.hSpace,validate:CKEDITOR.dialog.validate.integer(a.lang.flash.validateHSpace),setup:e,commit:t},{type:"text",id:"vSpace",requiredContent:"embed[vspace]",style:"width:95px",label:a.lang.flash.vSpace,validate:CKEDITOR.dialog.validate.integer(a.lang.flash.validateVSpace),setup:e,commit:t}]},{type:"vbox",children:[{type:"html",id:"preview",style:"width:95%;",html:o}]}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:a.lang.common.upload,elements:[{type:"file",id:"upload",label:a.lang.common.upload,size:38},{type:"fileButton",id:"uploadButton",label:a.lang.common.uploadSubmit,filebrowser:"info:src","for":["Upload","upload"]}]},{id:"properties",label:a.lang.flash.propertiesTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"scale",type:"select",requiredContent:"embed[scale]",label:a.lang.flash.scale,"default":"",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.flash.scaleAll,"showall"],[a.lang.flash.scaleNoBorder,"noborder"],[a.lang.flash.scaleFit,"exactfit"]],setup:e,commit:t},{id:"allowScriptAccess",type:"select",requiredContent:"embed[allowscriptaccess]",label:a.lang.flash.access,"default":"",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.flash.accessAlways,"always"],[a.lang.flash.accessSameDomain,"samedomain"],[a.lang.flash.accessNever,"never"]],setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"wmode",type:"select",requiredContent:"embed[wmode]",label:a.lang.flash.windowMode,"default":"",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.flash.windowModeWindow,"window"],[a.lang.flash.windowModeOpaque,"opaque"],[a.lang.flash.windowModeTransparent,"transparent"]],setup:e,commit:t},{id:"quality",type:"select",requiredContent:"embed[quality]",label:a.lang.flash.quality,"default":"high",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.flash.qualityBest,"best"],[a.lang.flash.qualityHigh,"high"],[a.lang.flash.qualityAutoHigh,"autohigh"],[a.lang.flash.qualityMedium,"medium"],[a.lang.flash.qualityAutoLow,"autolow"],[a.lang.flash.qualityLow,"low"]],setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"align",type:"select",requiredContent:"object[align]",label:a.lang.common.align,"default":"",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.common.alignLeft,"left"],[a.lang.flash.alignAbsBottom,"absBottom"],[a.lang.flash.alignAbsMiddle,"absMiddle"],[a.lang.flash.alignBaseline,"baseline"],[a.lang.common.alignBottom,"bottom"],[a.lang.common.alignMiddle,"middle"],[a.lang.common.alignRight,"right"],[a.lang.flash.alignTextTop,"textTop"],[a.lang.common.alignTop,"top"]],setup:e,commit:function(e,a,l,i,n){var o=this.getValue();t.apply(this,arguments),o&&(n.align=o)}},{type:"html",html:"<div></div>"}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(a.lang.flash.flashvars),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"menu",label:a.lang.flash.chkMenu,"default":!0,setup:e,commit:t},{type:"checkbox",id:"play",label:a.lang.flash.chkPlay,"default":!0,setup:e,commit:t},{type:"checkbox",id:"loop",label:a.lang.flash.chkLoop,"default":!0,setup:e,commit:t},{type:"checkbox",id:"allowFullScreen",label:a.lang.flash.chkFull,"default":!0,setup:e,commit:t}]}]}]},{id:"advanced",label:a.lang.common.advancedTab,elements:[{type:"hbox",children:[{type:"text",id:"id",requiredContent:"object[id]",label:a.lang.common.id,setup:e,commit:t}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"bgcolor",requiredContent:"embed[bgcolor]",label:a.lang.flash.bgcolor,setup:e,commit:t},{type:"text",id:"class",requiredContent:"embed(cke-xyz)",label:a.lang.common.cssClass,setup:e,commit:t}]},{type:"text",id:"style",requiredContent:"embed{cke-xyz}",validate:CKEDITOR.dialog.validate.inlineStyle(a.lang.common.invalidInlineStyle),label:a.lang.common.cssStyle,setup:e,commit:t}]}]}})}();