/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){var a=/^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?[^\s\.,]$/gi,t=/"/g;CKEDITOR.plugins.add("autolink",{requires:"clipboard",init:function(e){e.on("paste",function(d){var n=d.data.dataValue;d.data.dataTransfer.getTransferType(e)!=CKEDITOR.DATA_TRANSFER_INTERNAL&&!(-1<n.indexOf("<"))&&(n=n.replace(a,'<a href="'+n.replace(t,"%22")+'">$&</a>'),n!=d.data.dataValue&&(d.data.type="html"),d.data.dataValue=n)})}})}();