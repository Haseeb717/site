/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e){function a(){this.deflated||(e.widgets.focused==this.widget&&(this.focused=!0),e.widgets.destroy(this.widget),this.deflated=!0)}function n(){var t=e.editable(),i=e.document;if(this.deflated)this.widget=e.widgets.initOn(this.element,"image",this.widget.data),this.widget.inline&&!new CKEDITOR.dom.elementPath(this.widget.wrapper,t).block&&(t=i.createElement(e.activeEnterMode==CKEDITOR.ENTER_P?"p":"div"),t.replace(this.widget.wrapper),this.widget.wrapper.move(t)),this.focused&&(this.widget.focus(),delete this.focused),delete this.deflated;else{var a=this.widget,t=r,i=a.wrapper,n=a.data.align,a=a.data.hasCaption;if(t){for(var s=3;s--;)i.removeClass(t[s]);"center"==n?a&&i.addClass(t[1]):"none"!=n&&i.addClass(t[u[n]])}else"center"==n?(a?i.setStyle("text-align","center"):i.removeStyle("text-align"),i.removeStyle("float")):("none"==n?i.removeStyle("float"):i.setStyle("float",n),i.removeStyle("text-align"))}}var r=e.config.image2_alignClasses,l=e.config.image2_captionedClass;return{allowedContent:g(e),requiredContent:"img[src,alt]",features:c(e),styleableElements:"img figure",contentTransformations:[["img[width]: sizeToAttribute"]],editables:{caption:{selector:"figcaption",allowedContent:"br em strong sub sup u s; a[!href]"}},parts:{image:"img",caption:"figcaption"},dialog:"image2",template:h,data:function(){var t=this.features;if(this.data.hasCaption&&!e.filter.checkFeature(t.caption)&&(this.data.hasCaption=!1),"none"!=this.data.align&&!e.filter.checkFeature(t.align)&&(this.data.align="none"),this.shiftState({widget:this,element:this.element,oldData:this.oldData,newData:this.data,deflate:a,inflate:n}),this.data.link?this.parts.link||(this.parts.link=this.parts.image.getParent()):this.parts.link&&delete this.parts.link,this.parts.image.setAttributes({src:this.data.src,"data-cke-saved-src":this.data.src,alt:this.data.alt}),this.oldData&&!this.oldData.hasCaption&&this.data.hasCaption)for(var i in this.data.classes)this.parts.image.removeClass(i);if(e.filter.checkFeature(t.dimension)){t=this.data,t={width:t.width,height:t.height},i=this.parts.image;for(var s in t)t[s]?i.setAttribute(s,t[s]):i.removeAttribute(s)}this.oldData=CKEDITOR.tools.extend({},this.data)},init:function(){var t=CKEDITOR.plugins.image2,i=this.parts.image,a={hasCaption:!!this.parts.caption,src:i.getAttribute("src"),alt:i.getAttribute("alt")||"",width:i.getAttribute("width")||"",height:i.getAttribute("height")||"",lock:!this.ready||t.checkHasNaturalRatio(i)},n=i.getAscendant("a");n&&this.wrapper.contains(n)&&(this.parts.link=n),a.align||(i=a.hasCaption?this.element:i,r?(i.hasClass(r[0])?a.align="left":i.hasClass(r[2])&&(a.align="right"),a.align?i.removeClass(r[u[a.align]]):a.align="none"):(a.align=i.getStyle("float")||"none",i.removeStyle("float"))),e.plugins.link&&this.parts.link&&(a.link=CKEDITOR.plugins.link.parseLinkAttributes(e,this.parts.link),(i=a.link.advanced)&&i.advCSSClasses)&&(i.advCSSClasses=CKEDITOR.tools.trim(i.advCSSClasses.replace(/cke_\S+/,""))),this.wrapper[(a.hasCaption?"remove":"add")+"Class"]("cke_image_nocaption"),this.setData(a),e.filter.checkFeature(this.features.dimension)&&!0!==e.config.image2_disableResizer&&s(this),this.shiftState=t.stateShifter(this.editor),this.on("contextMenu",function(e){e.data.image=CKEDITOR.TRISTATE_OFF,(this.parts.link||this.wrapper.getAscendant("a"))&&(e.data.link=e.data.unlink=CKEDITOR.TRISTATE_OFF)}),this.on("dialog",function(e){e.data.widget=this},this)},addClass:function(e){d(this).addClass(e)},hasClass:function(e){return d(this).hasClass(e)},removeClass:function(e){d(this).removeClass(e)},getClasses:function(){var e=RegExp("^("+[].concat(l,r).join("|")+")$");return function(){var t=this.repository.parseElementClasses(d(this).getAttribute("class")),i;for(i in t)e.test(i)&&delete t[i];return t}}(),upcast:t(e),downcast:i(e)}}function t(e){var t=a(e),i=e.config.image2_captionedClass;return function(e,a){var s={width:1,height:1},r=e.name,l;if(!e.attributes["data-cke-realelement"]&&(t(e)?("div"==r&&(l=e.getFirst("figure"))&&(e.replaceWith(l),e=l),a.align="center",l=e.getFirst("img")||e.getFirst("a").getFirst("img")):"figure"==r&&e.hasClass(i)?l=e.getFirst("img")||e.getFirst("a").getFirst("img"):n(e)&&(l="a"==e.name?e.children[0]:e),l)){for(var o in s)(r=l.attributes[o])&&r.match(f)&&delete l.attributes[o];return e}}}function i(e){var t=e.config.image2_alignClasses;return function(e){var i="a"==e.name?e.getFirst():e,a=i.attributes,n=this.data.align;if(!this.inline){var s=e.getFirst("span");s&&s.replaceWith(s.getFirst({img:1,a:1}))}return n&&"none"!=n&&(s=CKEDITOR.tools.parseCssText(a.style||""),"center"==n&&"figure"==e.name?e=e.wrapWith(new CKEDITOR.htmlParser.element("div",t?{"class":t[1]}:{style:"text-align:center"})):n in{left:1,right:1}&&(t?i.addClass(t[u[n]]):s["float"]=n),!t&&!CKEDITOR.tools.isEmpty(s)&&(a.style=CKEDITOR.tools.writeCssText(s))),e}}function a(e){var t=e.config.image2_captionedClass,i=e.config.image2_alignClasses,a={figure:1,a:1,img:1};return function(s){if(!(s.name in{div:1,p:1}))return!1;var r=s.children;if(1!==r.length)return!1;if(r=r[0],!(r.name in a))return!1;if("p"==s.name){if(!n(r))return!1}else if("figure"==r.name){if(!r.hasClass(t))return!1}else if(e.enterMode==CKEDITOR.ENTER_P||!n(r))return!1;return!(i?!s.hasClass(i[1]):"center"!=CKEDITOR.tools.parseCssText(s.attributes.style||"",!0)["text-align"])}}function n(e){return"img"==e.name||"a"==e.name&&(1==e.children.length&&e.getFirst("img"))}function s(e){var t=e.editor,i=t.editable(),a=t.document,n=e.resizer=a.createElement("span");if(n.addClass("cke_image_resizer"),n.setAttribute("title",t.lang.image2.resizer),n.append(new CKEDITOR.dom.text("\u200b",a)),e.inline)e.wrapper.append(n);else{var s=e.parts.link||e.parts.image,r=s.getParent(),l=a.createElement("span");l.addClass("cke_image_resizer_wrapper"),l.append(s),l.append(n),e.element.append(l,!0),r.is("span")&&r.remove()}n.on("mousedown",function(s){function r(e,t,i){var n=CKEDITOR.document,s=[];if(a.equals(n)||s.push(n.on(e,t)),s.push(a.on(e,t)),i)for(e=s.length;e--;)i.push(s.pop())}function l(){k=m+c*T,w=Math.round(k/f)}function o(){w=u-E,k=Math.round(w*f)}var g=e.parts.image,c="right"==e.data.align?-1:1,d=s.data.$.screenX,h=s.data.$.screenY,m=g.$.clientWidth,u=g.$.clientHeight,f=m/u,p=[],C="cke_image_s"+(~c?"e":"w"),v,k,w,_,T,E,D;t.fire("saveSnapshot"),r("mousemove",function(e){v=e.data.$,T=v.screenX-d,E=h-v.screenY,D=Math.abs(T/E),1==c?0>=T?0>=E?l():D>=f?l():o():0>=E?D>=f?o():l():o():0>=T?0>=E?D>=f?o():l():o():0>=E?l():D>=f?l():o(),15<=k&&15<=w?(g.setAttributes({width:k,height:w}),_=!0):_=!1},p),r("mouseup",function(){for(var a;a=p.pop();)a.removeListener();i.removeClass(C),n.removeClass("cke_image_resizing"),_&&(e.setData({width:k,height:w}),t.fire("saveSnapshot")),_=!1},p),i.addClass(C),n.addClass("cke_image_resizing")}),e.on("data",function(){n["right"==e.data.align?"addClass":"removeClass"]("cke_image_resizer_left")})}function r(e){var t=[],i;return function(a){var n=e.getCommand("justify"+a);n&&(t.push(function(){n.refresh(e,e.elementPath())}),a in{right:1,left:1,center:1}&&n.on("exec",function(i){var n=o(e);if(n){for(n.setData("align",a),n=t.length;n--;)t[n]();i.cancel()}}),n.on("refresh",function(t){var n=o(e),s={right:1,left:1,center:1};n&&(void 0===i&&(i=e.filter.checkFeature(e.widgets.registered.image.features.align)),i?this.setState(n.data.align==a?CKEDITOR.TRISTATE_ON:a in s?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED):this.setState(CKEDITOR.TRISTATE_DISABLED),t.cancel())}))}}function l(e){e.plugins.link&&(CKEDITOR.on("dialogDefinition",function(t){if(t=t.data,"link"==t.name){var t=t.definition,i=t.onShow,a=t.onOk;t.onShow=function(){var t=o(e);t&&(t.inline?!t.wrapper.getAscendant("a"):1)?this.setupContent(t.data.link||{}):i.apply(this,arguments)},t.onOk=function(){var t=o(e);if(t&&(t.inline?!t.wrapper.getAscendant("a"):1)){var i={};this.commitContent(i),t.setData("link",i)}else a.apply(this,arguments)}}}),e.getCommand("unlink").on("exec",function(t){var i=o(e);i&&i.parts.link&&(i.setData("link",null),this.refresh(e,e.elementPath()),t.cancel())}),e.getCommand("unlink").on("refresh",function(t){var i=o(e);i&&(this.setState(i.data.link||i.wrapper.getAscendant("a")?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED),t.cancel())}))}function o(e){return(e=e.widgets.focused)&&"image"==e.name?e:null}function g(e){var t=e.config.image2_alignClasses,e={div:{match:a(e)},p:{match:a(e)},img:{attributes:"!src,alt,width,height"},figure:{classes:"!"+e.config.image2_captionedClass},figcaption:!0};return t?(e.div.classes=t[1],e.p.classes=e.div.classes,e.img.classes=t[0]+","+t[2],e.figure.classes+=","+e.img.classes):(e.div.styles="text-align",e.p.styles="text-align",e.img.styles="float",e.figure.styles="float,display"),e}function c(e){return e=e.config.image2_alignClasses,{dimension:{requiredContent:"img[width,height]"},align:{requiredContent:"img"+(e?"("+e[0]+")":"{float}")},caption:{requiredContent:"figcaption"}}}function d(e){return e.data.hasCaption?e.element:e.parts.image}var h='<img alt="" src="" />',m=new CKEDITOR.template('<figure class="{captionedClass}">'+h+"<figcaption>{captionPlaceholder}</figcaption></figure>"),u={left:0,center:1,right:2},f=/^\s*(\d+\%)\s*$/i;CKEDITOR.plugins.add("image2",{lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",requires:"widget,dialog",icons:"image",hidpi:!0,onLoad:function(){CKEDITOR.addCss(".cke_image_nocaption{line-height:0}.cke_editable.cke_image_sw, .cke_editable.cke_image_sw *{cursor:sw-resize !important}.cke_editable.cke_image_se, .cke_editable.cke_image_se *{cursor:se-resize !important}.cke_image_resizer{display:none;position:absolute;width:10px;height:10px;bottom:-5px;right:-5px;background:#000;outline:1px solid #fff;line-height:0;cursor:se-resize;}.cke_image_resizer_wrapper{position:relative;display:inline-block;line-height:0;}.cke_image_resizer.cke_image_resizer_left{right:auto;left:-5px;cursor:sw-resize;}.cke_widget_wrapper:hover .cke_image_resizer,.cke_image_resizer.cke_image_resizing{display:block}.cke_widget_wrapper>a{display:inline-block}")},init:function(t){var i=t.config,a=t.lang.image2,n=e(t);i.filebrowserImage2BrowseUrl=i.filebrowserImageBrowseUrl,i.filebrowserImage2UploadUrl=i.filebrowserImageUploadUrl,n.pathName=a.pathName,n.editables.caption.pathName=a.pathNameCaption,t.widgets.add("image",n),t.ui.addButton&&t.ui.addButton("Image",{label:t.lang.common.image,command:"image",toolbar:"insert,10"}),t.contextMenu&&(t.addMenuGroup("image",10),t.addMenuItem("image",{label:a.menu,command:"image",group:"image"})),CKEDITOR.dialog.add("image2",this.path+"dialogs/image2.js")},afterInit:function(e){var t={left:1,right:1,center:1,block:1},i=r(e),a;for(a in t)i(a);l(e)}}),CKEDITOR.plugins.image2={stateShifter:function(e){function t(e,t){var s={};return n?s.attributes={"class":n[1]}:s.styles={"text-align":"center"},s=a.createElement(e.activeEnterMode==CKEDITOR.ENTER_P?"p":"div",s),i(s,t),t.move(s),s}function i(t,i){if(i.getParent()){var a=e.createRange();a.moveToPosition(i,CKEDITOR.POSITION_BEFORE_START),i.remove(),r.insertElementIntoRange(t,a)}else t.replace(i)}var a=e.document,n=e.config.image2_alignClasses,s=e.config.image2_captionedClass,r=e.editable(),l=["hasCaption","align","link"],o={align:function(i,a,s){var r=i.element;i.changed.align?i.newData.hasCaption||("center"==s&&(i.deflate(),i.element=t(e,r)),i.changed.hasCaption||"center"!=a||"center"==s)||(i.deflate(),a=r.findOne("a,img"),a.replace(r),i.element=a):"center"==s&&i.changed.hasCaption&&!i.newData.hasCaption&&(i.deflate(),i.element=t(e,r)),!n&&r.is("figure")&&("center"==s?r.setStyle("display","inline-block"):r.removeStyle("display"))},hasCaption:function(t,n,r){t.changed.hasCaption&&(n=t.element.is({img:1,a:1})?t.element:t.element.findOne("a,img"),t.deflate(),r?(r=CKEDITOR.dom.element.createFromHtml(m.output({captionedClass:s,captionPlaceholder:e.lang.image2.captionPlaceholder}),a),i(r,t.element),n.replace(r.findOne("img")),t.element=r):(n.replace(t.element),t.element=n))},link:function(t,i,n){if(t.changed.link){var s=t.element.is("img")?t.element:t.element.findOne("img"),r=t.element.is("a")?t.element:t.element.findOne("a"),l=t.element.is("a")&&!n||t.element.is("img")&&n,o;l&&t.deflate(),n?(i||(o=a.createElement("a",{attributes:{href:t.newData.link.url}}),o.replace(s),s.move(o)),n=CKEDITOR.plugins.link.getLinkAttributes(e,n),CKEDITOR.tools.isEmpty(n.set)||(o||r).setAttributes(n.set),n.removed.length&&(o||r).removeAttributes(n.removed)):(n=r.findOne("img"),n.replace(r),o=n),l&&(t.element=o)}}};return function(e){var t,i;for(e.changed={},i=0;i<l.length;i++)t=l[i],e.changed[t]=!!e.oldData&&e.oldData[t]!==e.newData[t];for(i=0;i<l.length;i++)t=l[i],o[t](e,e.oldData?e.oldData[t]:null,e.newData[t]);e.inflate()}},checkHasNaturalRatio:function(e){var t=e.$,e=this.getNatural(e);return Math.round(t.clientWidth/e.width*e.height)==t.clientHeight||Math.round(t.clientHeight/e.height*e.width)==t.clientWidth},getNatural:function(e){if(e.$.naturalWidth)e={width:e.$.naturalWidth,height:e.$.naturalHeight};else{var t=new Image;t.src=e.getAttribute("src"),e={width:t.width,height:t.height}}return e}}}(),CKEDITOR.config.image2_captionedClass="image";