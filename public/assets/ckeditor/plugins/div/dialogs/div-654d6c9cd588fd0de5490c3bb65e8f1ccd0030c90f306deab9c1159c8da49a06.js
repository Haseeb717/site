!function(){function e(e,t,n){t.is&&t.getCustomData("block_processed")||(t.is&&CKEDITOR.dom.element.setMarker(n,t,"block_processed",!0),e.push(t))}function t(t,n){function l(){this.foreach(function(e){/^(?!vbox|hbox)/.test(e.type)&&(e.setup||(e.setup=function(t){e.setValue(t.getAttribute(e.id)||"",1)}),!e.commit)&&(e.commit=function(t){var n=this.getValue();"dir"==e.id&&t.getComputedStyle("direction")==n||(n?t.setAttribute(e.id,n):t.removeAttribute(e.id))})})}var i=function(){var e=CKEDITOR.tools.extend({},CKEDITOR.dtd.$blockLimit);return t.config.div_wrapTable&&(delete e.td,delete e.th),e}(),o=CKEDITOR.dtd.div,a={},d=[];return{title:t.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:t.lang.common.generalTab,title:t.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:t.lang.div.styleSelectLabel,"default":"",items:[[t.lang.common.notSet,""]],onChange:function(){var e=["info:elementStyle","info:class","advanced:dir","advanced:style"],n=this.getDialog(),l=n._element&&n._element.clone()||new CKEDITOR.dom.element("div",t.document);this.commit(l,!0);for(var e=[].concat(e),i=e.length,o,a=0;a<i;a++)(o=n.getContentElement.apply(n,e[a].split(":")))&&o.setup&&o.setup(l,!0)},setup:function(e){for(var n in a)a[n].checkElementRemovable(e,!0,t)&&this.setValue(n,1)},commit:function(e){var n;(n=this.getValue())?a[n].applyToObject(e,t):e.removeAttribute("style")}},{id:"class",type:"text",requiredContent:"div(cke-xyz)",label:t.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:t.lang.common.advancedTab,title:t.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",requiredContent:"div[id]",label:t.lang.common.id,"default":""},{type:"text",id:"lang",requiredContent:"div[lang]",label:t.lang.common.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",requiredContent:"div{cke-xyz}",style:"width: 100%;",label:t.lang.common.cssStyle,"default":"",commit:function(e){e.setAttribute("style",this.getValue())}}]},{type:"hbox",children:[{type:"text",id:"title",requiredContent:"div[title]",style:"width: 100%;",label:t.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",requiredContent:"div[dir]",style:"width: 100%;",label:t.lang.common.langDir,"default":"",items:[[t.lang.common.notSet,""],[t.lang.common.langDirLtr,"ltr"],[t.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){l.call(this);var e=this,n=this.getContentElement("info","elementStyle");t.getStylesSet(function(l){var i,o;if(l)for(var d=0;d<l.length;d++)o=l[d],o.element&&"div"==o.element&&(i=o.name,a[i]=o=new CKEDITOR.style(o),t.filter.check(o)&&(n.items.push([i,i]),n.add(i,i)));n[1<n.items.length?"enable":"disable"](),setTimeout(function(){e._element&&n.setup(e._element)},0)})},onShow:function(){"editdiv"==n&&this.setupContent(this._element=CKEDITOR.plugins.div.getSurroundDiv(t))},onOk:function(){if("editdiv"==n)d=[this._element];else{var l=[],a={},r=[],s,m=t.getSelection(),c=m.getRanges(),u=m.createBookmarks(),g,h;for(g=0;g<c.length;g++)for(h=c[g].createIterator();s=h.getNextParagraph();)if(s.getName()in i&&!s.isReadOnly()){var f=s.getChildren();for(s=0;s<f.count();s++)e(r,f.getItem(s),a)}else{for(;!o[s.getName()]&&!s.equals(c[g].root);)s=s.getParent();e(r,s,a)}for(CKEDITOR.dom.element.clearAllMarkers(a),c=[],g=null,h=0;h<r.length;h++)s=r[h],f=t.elementPath(s).blockLimit,f.isReadOnly()&&(f=f.getParent()),t.config.div_wrapTable&&f.is(["td","th"])&&(f=t.elementPath(f.getParent()).blockLimit),f.equals(g)||(g=f,c.push([])),c[c.length-1].push(s);for(g=0;g<c.length;g++){for(f=c[g][0],r=f.getParent(),s=1;s<c[g].length;s++)r=r.getCommonAncestor(c[g][s]);for(h=new CKEDITOR.dom.element("div",t.document),s=0;s<c[g].length;s++){for(f=c[g][s];!f.getParent().equals(r);)f=f.getParent();c[g][s]=f}for(s=0;s<c[g].length;s++)f=c[g][s],f.getCustomData&&f.getCustomData("block_processed")||(f.is&&CKEDITOR.dom.element.setMarker(a,f,"block_processed",!0),s||h.insertBefore(f),h.append(f));CKEDITOR.dom.element.clearAllMarkers(a),l.push(h)}m.selectBookmarks(u),d=l}for(l=d.length,a=0;a<l;a++)this.commitContent(d[a]),!d[a].getAttribute("style")&&d[a].removeAttribute("style");this.hide()},onHide:function(){"editdiv"==n&&this._element.removeCustomData("elementStyle"),delete this._element}}}CKEDITOR.dialog.add("creatediv",function(e){return t(e,"creatediv")}),CKEDITOR.dialog.add("editdiv",function(e){return t(e,"editdiv")})}();