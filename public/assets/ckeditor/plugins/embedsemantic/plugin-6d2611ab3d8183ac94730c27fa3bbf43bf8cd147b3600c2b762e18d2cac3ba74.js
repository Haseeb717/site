/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){CKEDITOR.plugins.add("embedsemantic",{icons:"embedsemantic",hidpi:!0,requires:"embedbase",onLoad:function(){this.registerOembedTag()},init:function(e){var t=CKEDITOR.plugins.embedBase.createWidgetBaseDefinition(e),a=t.init;CKEDITOR.tools.extend(t,{dialog:"embedBase",button:e.lang.embedbase.button,allowedContent:"oembed",requiredContent:"oembed",styleableElements:"oembed",providerUrl:new CKEDITOR.template(e.config.embed_provider||"//ckeditor.iframe.ly/api/oembed?url={url}&callback={callback}"),init:function(){var t=this;a.call(this),this.once("ready",function(){this.data.loadOnReady&&this.loadContent(this.data.url,{callback:function(){t.setData("loadOnReady",!1),e.fire("updateSnapshot")}})})},upcast:function(e,t){if("oembed"==e.name){var a=e.children[0];if(a&&a.type==CKEDITOR.NODE_TEXT&&a.value)return t.url=a.value,t.loadOnReady=!0,a=new CKEDITOR.htmlParser.element("div"),e.replaceWith(a),a.attributes["class"]=e.attributes["class"],a}},downcast:function(e){var t=new CKEDITOR.htmlParser.element("oembed");return t.add(new CKEDITOR.htmlParser.text(this.data.url)),e.attributes["class"]&&(t.attributes["class"]=e.attributes["class"]),t}},!0),e.widgets.add("embedSemantic",t)},registerOembedTag:function(){var e=CKEDITOR.dtd,t;e.oembed={"#":1};for(t in e)e[t].div&&(e[t].oembed=1)}})}();