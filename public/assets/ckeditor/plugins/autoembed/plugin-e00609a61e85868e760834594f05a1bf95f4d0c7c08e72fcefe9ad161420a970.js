/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e,t){var a=e.editable().findOne('a[data-cke-autoembed="'+t+'"]'),n=e.lang.autoembed,i;if(a&&a.data("cke-saved-href")){var a=a.data("cke-saved-href"),d=CKEDITOR.plugins.autoEmbed.getWidgetDefinition(e,a);if(d){var o="function"==typeof d.defaults?d.defaults():d.defaults,o=CKEDITOR.dom.element.createFromHtml(d.template.output(o)),u,l=e.widgets.wrapElement(o,d.name),r=new CKEDITOR.dom.documentFragment(l.getDocument());r.append(l),(u=e.widgets.initOn(o,d))?(i=e.showNotification(n.embeddingInProgress,"info"),u.loadContent(a,{noNotifications:!0,callback:function(){var a=e.editable().findOne('a[data-cke-autoembed="'+t+'"]'),n=e.createRange();a&&(n.setStartAt(a,CKEDITOR.POSITION_BEFORE_START),n.setEndAt(a,CKEDITOR.POSITION_AFTER_END),e.editable().insertElementIntoRange(l,n)),i.hide(),e.widgets.finalizeCreation(r)},errorCallback:function(){i.hide(),e.widgets.destroy(u,!0),e.showNotification(n.embeddingFailed,"info")}})):e.widgets.finalizeCreation(r)}else window.console&&window.console.log("[CKEDITOR.plugins.autoEmbed] Incorrect config.autoEmbed_widget value. No widget definition found.")}}var t=/^<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>$/i;CKEDITOR.plugins.add("autoembed",{requires:"autolink,undo",lang:"cs,en,it,nb,pl,zh",init:function(a){var n=1,i;a.on("paste",function(e){if(e.data.dataTransfer.getTransferType(a)==CKEDITOR.DATA_TRANSFER_INTERNAL)i=0;else{var d=e.data.dataValue.match(t);(i=null!=d&&decodeURI(d[1])==decodeURI(d[2]))&&(e.data.dataValue='<a data-cke-autoembed="'+ ++n+'"'+e.data.dataValue.substr(2))}},null,null,20),a.on("afterPaste",function(){i&&e(a,n)})}}),CKEDITOR.plugins.autoEmbed={getWidgetDefinition:function(e,t){var a=e.config.autoEmbed_widget||"embed,embedSemantic",n,i=e.widgets.registered;if("string"==typeof a){for(a=a.split(",");n=a.shift();)if(i[n])return i[n]}else if("function"==typeof a)return i[a(t)];return null}}}();