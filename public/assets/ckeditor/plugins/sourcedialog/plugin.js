/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("sourcedialog",{lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"sourcedialog,sourcedialog-rtl",hidpi:!0,init:function(o){o.addCommand("sourcedialog",new CKEDITOR.dialogCommand("sourcedialog")),CKEDITOR.dialog.add("sourcedialog",this.path+"dialogs/sourcedialog.js"),o.ui.addButton&&o.ui.addButton("Sourcedialog",{label:o.lang.sourcedialog.toolbar,command:"sourcedialog",toolbar:"mode,10"})}});