/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){CKEDITOR.plugins.add("embed",{icons:"embed",hidpi:!0,requires:"embedbase",init:function(e){var t=CKEDITOR.plugins.embedBase.createWidgetBaseDefinition(e);CKEDITOR.tools.extend(t,{dialog:"embedBase",button:e.lang.embedbase.button,allowedContent:"div[!data-oembed-url]",requiredContent:"div[data-oembed-url]",providerUrl:new CKEDITOR.template(e.config.embed_provider||"//ckeditor.iframe.ly/api/oembed?url={url}&callback={callback}"),styleToAllowedContentRules:function(e){return{div:{propertiesOnly:!0,classes:e.getClassesArray(),attributes:"!data-oembed-url"}}},upcast:function(e,t){if("div"==e.name&&e.attributes["data-oembed-url"])return t.url=e.attributes["data-oembed-url"],!0},downcast:function(e){e.attributes["data-oembed-url"]=this.data.url}},!0),e.widgets.add("embed",t),e.filter.addElementCallback(function(e){if("data-oembed-url"in e.attributes)return CKEDITOR.FILTER_SKIP_TREE})}})}();