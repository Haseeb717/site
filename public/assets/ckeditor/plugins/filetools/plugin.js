/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e){this.editor=e,this.loaders=[]}function t(e,t,a){this.editor=e,this.lang=e.lang,"string"==typeof t?(this.data=t,this.file=o(this.data),this.loaded=this.total=this.file.size):(this.data=null,this.file=t,this.total=this.file.size,this.loaded=0),this.fileName=a||(this.file.name?this.file.name:this.file.type.replace("/",".")),this.uploaded=0,this.status="created",this.abort=function(){this.changeStatus("abort")}}function o(e){var t=e.match(a)[1],e=e.replace(a,""),e=atob(e),o=[],r,l,n,s;for(r=0;r<e.length;r+=512){for(l=e.slice(r,r+512),n=Array(l.length),s=0;s<l.length;s++)n[s]=l.charCodeAt(s);l=new Uint8Array(n),o.push(l)}return new Blob(o,{type:t})}CKEDITOR.plugins.add("filetools",{lang:"cs,da,de,en,eo,fr,gl,it,ko,nb,nl,pl,pt-br,ru,sv,tr,zh,zh-cn",beforeInit:function(t){t.uploadRepository=new e(t),t.on("fileUploadRequest",function(e){e=e.data.fileLoader,e.xhr.open("POST",e.uploadUrl,!0)},null,null,5),t.on("fileUploadRequest",function(e){var e=e.data.fileLoader,t=new FormData;t.append("upload",e.file,e.fileName),e.xhr.send(t)},null,null,999),t.on("fileUploadResponse",function(e){var t=e.data.fileLoader,o=t.xhr,a=e.data;try{var r=JSON.parse(o.responseText);r.error&&r.error.message&&(a.message=r.error.message),r.uploaded?(a.fileName=r.fileName,a.url=r.url):e.cancel()}catch(r){a.message=t.lang.filetools.responseError,window.console&&window.console.log(o.responseText),e.cancel()}},null,null,999)}}),e.prototype={create:function(e,o){var a=this.loaders.length,r=new t(this.editor,e,o);return r.id=a,this.loaders[a]=r,this.fire("instanceCreated",r),r},isFinished:function(){for(var e=0;e<this.loaders.length;++e)if(!this.loaders[e].isFinished())return!1;return!0}},t.prototype={loadAndUpload:function(e){var t=this;this.once("loaded",function(o){o.cancel(),t.once("update",function(e){e.cancel()},null,null,0),t.upload(e)},null,null,0),this.load()},load:function(){var e=this,t=this.reader=new FileReader;e.changeStatus("loading"),this.abort=function(){e.reader.abort()},t.onabort=function(){e.changeStatus("abort")},t.onerror=function(){e.message=e.lang.filetools.loadError,e.changeStatus("error")},t.onprogress=function(t){e.loaded=t.loaded,e.update()},t.onload=function(){e.loaded=e.total,e.data=t.result,e.changeStatus("loaded")},t.readAsDataURL(this.file)},upload:function(e){e?(this.uploadUrl=e,this.xhr=new XMLHttpRequest,this.attachRequestListeners(),this.editor.fire("fileUploadRequest",{fileLoader:this})&&this.changeStatus("uploading")):(this.message=this.lang.filetools.noUrlError,this.changeStatus("error"))},attachRequestListeners:function(){var e=this,t=this.xhr;e.abort=function(){t.abort()},t.onabort=function(){e.changeStatus("abort")},t.onerror=function(){e.message=e.lang.filetools.networkError,e.changeStatus("error")},t.onprogress=function(t){e.uploaded=t.loaded,e.update()},t.onload=function(){if(e.uploaded=e.total,200>t.status||299<t.status)e.message=e.lang.filetools["httpError"+t.status],e.message||(e.message=e.lang.filetools.httpError.replace("%1",t.status)),e.changeStatus("error");else{for(var o={fileLoader:e},a=["message","fileName","url"],r=e.editor.fire("fileUploadResponse",o),l=0;l<a.length;l++){var n=a[l];"string"==typeof o[n]&&(e[n]=o[n])}!1===r?e.changeStatus("error"):e.changeStatus("uploaded")}}},changeStatus:function(e){this.status=e,"error"!=e&&"abort"!=e&&"loaded"!=e&&"uploaded"!=e||(this.abort=function(){}),this.fire(e),this.update()},update:function(){this.fire("update")},isFinished:function(){return!!this.status.match(/^(?:loaded|uploaded|error|abort)$/)}},CKEDITOR.event.implementOn(e.prototype),CKEDITOR.event.implementOn(t.prototype);var a=/^data:(\S*?);base64,/;CKEDITOR.fileTools||(CKEDITOR.fileTools={}),CKEDITOR.tools.extend(CKEDITOR.fileTools,{uploadRepository:e,fileLoader:t,getUploadUrl:function(e,t){var o=CKEDITOR.tools.capitalize;return t&&e[t+"UploadUrl"]?e[t+"UploadUrl"]:e.uploadUrl?e.uploadUrl:t&&e["filebrowser"+o(t,1)+"UploadUrl"]?e["filebrowser"+o(t,1)+"UploadUrl"]+"&responseType=json":e.filebrowserUploadUrl?e.filebrowserUploadUrl+"&responseType=json":null},isTypeSupported:function(e,t){return!!e.type.match(t)}})}();