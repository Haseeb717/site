!function(){CKEDITOR.plugins.add("mediaembed",{icons:"mediaembed",hidpi:!0,init:function(e){var d=this;CKEDITOR.dialog.add("MediaEmbedDialog",function(e){return{title:"Embed Media",minWidth:550,minHeight:200,contents:[{id:"iframe",expand:!0,elements:[{id:"embedArea",type:"textarea",label:"Paste Embed Code Here",autofocus:"autofocus",setup:function(e){},commit:function(e){}}]}],onOk:function(){var d=e.document.createElement("div");d.setHtml(this.getContentElement("iframe","embedArea").getValue()),e.insertElement(d)}}}),e.addCommand("MediaEmbed",new CKEDITOR.dialogCommand("MediaEmbedDialog",{allowedContent:"iframe[*]"})),e.ui.addButton("MediaEmbed",{label:"Embed Media",command:"MediaEmbed",toolbar:"mediaembed"})}})}();