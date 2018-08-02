/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("placeholder",function(e){var t=e.lang.placeholder,e=e.lang.common.generalTab;return{title:t.title,minWidth:300,minHeight:80,contents:[{id:"info",label:e,title:e,elements:[{id:"name",type:"text",style:"width: 100%;",label:t.name,"default":"",required:!0,validate:CKEDITOR.dialog.validate.regex(/^[^\[\]<>]+$/,t.invalidName),setup:function(e){this.setValue(e.data.name)},commit:function(e){e.setData("name",this.getValue())}}]}]}});