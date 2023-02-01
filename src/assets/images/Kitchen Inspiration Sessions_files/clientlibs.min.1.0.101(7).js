CQ.Ext.ns("ExperienceAEM");
ExperienceAEM.MultiFieldPanel=CQ.Ext.extend(CQ.Ext.Panel,{panelValue:"",constructor:function(a){a=a||{};
ExperienceAEM.MultiFieldPanel.superclass.constructor.call(this,a)
},initComponent:function(){ExperienceAEM.MultiFieldPanel.superclass.initComponent.call(this);
this.panelValue=new CQ.Ext.form.Hidden({name:this.name});
this.add(this.panelValue);
var a=this.findParentByType("dialog");
a.on("beforesubmit",function(){var b=this.getValue();
if(b){this.panelValue.setValue(b)
}},this)
},getValue:function(){var a={};
this.items.each(function(b){if(b.xtype=="label"||b.xtype=="hidden"||!b.hasOwnProperty("dName")){return
}a[b.dName]=b.getValue()
});
return $.isEmptyObject(a)?"":JSON.stringify(a)
},setValue:function(b){this.panelValue.setValue(b);
var a=JSON.parse(b);
this.items.each(function(c){if(c.xtype=="label"||c.xtype=="hidden"||!c.hasOwnProperty("dName")){return
}if(!a[c.dName]){return
}c.setValue(a[c.dName])
})
},validate:function(){return true
},getName:function(){return this.name
}});
CQ.Ext.reg("multi-field-panel",ExperienceAEM.MultiFieldPanel);