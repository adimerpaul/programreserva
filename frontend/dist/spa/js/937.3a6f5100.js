(globalThis["webpackChunkfrontend"]=globalThis["webpackChunkfrontend"]||[]).push([[937],{5757:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>R});var l=a(9835),t=a(6970),r=a(1957);const o={class:"row"},n={class:"col-12 col-md-4 flex flex-center"},i={class:"q-pa-md flex flex-center"},d={class:"row"},c={class:"col-12"},u={class:"col-12"},m={class:"col-12 col-md-8"},j={class:"text-bold text-grey"},h={class:"text-h6 text-bold q-mb-md text-blue"},v=(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col-1 text-center text-grey"},"Serial"),(0,l._)("div",{class:"col-5 text-center text-grey"},"Doctor"),(0,l._)("div",{class:"col-3 text-center text-grey"},"Status"),(0,l._)("div",{class:"col-3 text-center text-grey"},"Opciones")],-1),p={class:"col-1 text-center text-bold"},b={class:"col-5 text-left"},f={class:"text-bold"},g={class:"col-3 text-center"},k={key:0,class:"col-3 text-center text-grey flex flex-center"},w=(0,l._)("div",{class:"text-h6"},"Crear reserva",-1),x=(0,l._)("div",{class:"text-h6"},"Reservar",-1);function V(e,s,a,V,_,y){const D=(0,l.up)("q-btn"),z=(0,l.up)("q-date"),q=(0,l.up)("q-icon"),W=(0,l.up)("q-checkbox"),U=(0,l.up)("q-card-section"),Y=(0,l.up)("q-card"),C=(0,l.up)("q-tab-panel"),Z=(0,l.up)("q-tab-panels"),M=(0,l.up)("q-select"),Q=(0,l.up)("q-input"),F=(0,l.up)("q-form"),I=(0,l.up)("q-dialog"),$=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)($,null,{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l._)("div",n,[(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("div",c,[(0,l.Wm)(D,{onClick:s[0]||(s[0]=e=>_.reservaDialog=!0),label:"Crear reserva","no-caps":"",outline:"",color:"primary","icon-right":"add_circle"})]),(0,l._)("div",u,[(0,l.Wm)(z,{"onUpdate:modelValue":[y.cambio,s[1]||(s[1]=e=>_.date=e)],modelValue:_.date,events:_.events,"event-color":"orange"},null,8,["onUpdate:modelValue","modelValue","events"])])])])]),(0,l._)("div",m,[(0,l.Wm)(Z,{modelValue:_.date,"onUpdate:modelValue":s[2]||(s[2]=e=>_.date=e),animated:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.events,((e,s)=>((0,l.wg)(),(0,l.j4)(C,{name:e,key:s},{default:(0,l.w5)((()=>[(0,l._)("div",j,"lista de citas disponibles ("+(0,t.zw)(_.reservas.length)+")",1),(0,l._)("div",h,[(0,l.Wm)(q,{name:"event"}),(0,l.Uk)(" "+(0,t.zw)(e),1)]),(0,l.Wm)(Y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[v,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.reservas,((e,s)=>((0,l.wg)(),(0,l.iD)("div",{key:s,class:(0,t.C_)(e.estado?"row bg-red-1":"row bg-blue-1")},[(0,l._)("div",p,(0,t.zw)(s+1),1),(0,l._)("div",b,[(0,l._)("div",f,(0,t.zw)(e.doctor.name),1),(0,l._)("div",null,(0,t.zw)(e.fechaInicio.substring(11,16))+" - "+(0,t.zw)(e.fechaFin.substring(11,16)),1)]),(0,l._)("div",g,[(0,l.Wm)(W,{disable:"",modelValue:e.estado,"onUpdate:modelValue":s=>e.estado=s,label:e.estado?"OCUPADO":"LIBRE"},null,8,["modelValue","onUpdate:modelValue","label"])]),e.estado?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(D,{onClick:s=>y.reservarClick(e),color:"green",icon:"event",rounded:"",size:"9px","no-caps":"",label:"Reservar"},null,8,["onClick"])]))],2)))),128))])),_:2},1024)])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])]),(0,l.Wm)(I,{modelValue:_.reservaDialog,"onUpdate:modelValue":s[6]||(s[6]=e=>_.reservaDialog=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"q-pb-none"},{default:(0,l.w5)((()=>[w])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{onSubmit:(0,r.iM)(y.reservaCreate,["prevent"])},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{label:"Doctor",modelValue:_.reserva.doctors,"onUpdate:modelValue":s[3]||(s[3]=e=>_.reserva.doctors=e),dense:"",outlined:"",options:_.doctors,required:""},null,8,["modelValue","options"]),(0,l.Wm)(Q,{label:"Fecha inicio",modelValue:_.reserva.fechaInicio,"onUpdate:modelValue":s[4]||(s[4]=e=>_.reserva.fechaInicio=e),type:"datetime-local",dense:"",outlined:""},null,8,["modelValue"]),(0,l.Wm)(Q,{label:"Fecha fin",modelValue:_.reserva.fechaFin,"onUpdate:modelValue":s[5]||(s[5]=e=>_.reserva.fechaFin=e),type:"datetime-local",dense:"",outlined:""},null,8,["modelValue"]),(0,l.Wm)(D,{loading:_.loading,type:"submit",class:"full-width",color:"light-blue-7","icon-right":"check",label:"Crear reserva","no-caps":""},null,8,["loading"])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(I,{modelValue:_.reservaUpdateDialog,"onUpdate:modelValue":s[13]||(s[13]=e=>_.reservaUpdateDialog=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"q-pb-none"},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{onSubmit:(0,r.iM)(y.reservaUpdate,["prevent"])},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{disable:"",label:"Doctor",modelValue:_.reserva.doctor.name,"onUpdate:modelValue":s[7]||(s[7]=e=>_.reserva.doctor.name=e),dense:"",outlined:"",required:""},null,8,["modelValue"]),(0,l.Wm)(Q,{disable:"",label:"Especialidad",modelValue:_.reserva.doctor.especialidad,"onUpdate:modelValue":s[8]||(s[8]=e=>_.reserva.doctor.especialidad=e),dense:"",outlined:"",required:""},null,8,["modelValue"]),(0,l.Wm)(Q,{disable:"",label:"Fecha inicio",modelValue:_.reserva.fechaInicio,"onUpdate:modelValue":s[9]||(s[9]=e=>_.reserva.fechaInicio=e),type:"datetime-local",dense:"",outlined:""},null,8,["modelValue"]),(0,l.Wm)(Q,{disable:"",label:"Fecha fin",modelValue:_.reserva.fechaFin,"onUpdate:modelValue":s[10]||(s[10]=e=>_.reserva.fechaFin=e),type:"datetime-local",dense:"",outlined:""},null,8,["modelValue"]),(0,l.Wm)(Q,{label:"Nombre",modelValue:_.reserva.cliente,"onUpdate:modelValue":s[11]||(s[11]=e=>_.reserva.cliente=e),type:"text",required:"",dense:"",outlined:""},null,8,["modelValue"]),(0,l.Wm)(Q,{label:"Celular",modelValue:_.reserva.celular,"onUpdate:modelValue":s[12]||(s[12]=e=>_.reserva.celular=e),type:"text",required:"",dense:"",outlined:""},null,8,["modelValue"]),(0,l.Wm)(D,{loading:_.loading,type:"submit",class:"full-width",color:"info","icon-right":"check",label:"Crear reserva","no-caps":""},null,8,["loading"])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}a(8964),a(9665);var _=a(4170),y=a(3878),D=a.n(y),z=a(4527);const q={name:"IndexPage",data(){return{reservaUpdateDialog:!1,loading:!1,reservaDialog:!1,reservas:[],reserva:{fechaInicio:D()().format("YYYY-MM-DD 10:00:00"),fechaFin:D()().format("YYYY-MM-DD 10:30:00")},splitterModel:50,date:_.ZP.formatDate(new Date,"YYYY/MM/DD"),events:[],doctors:[],fecha:""}},methods:{reservaUpdate(){this.$q.loading.show(),this.reserva.estado=!0,console.log(this.reserva),this.$api.put("reserva/"+this.reserva.id,this.reserva).then((e=>{this.reservaUpdateDialog=!1,this.search(this.fecha);const s=new z.kH;s.text("Nombre ",10,10),s.text(this.reserva.cliente,50,10),s.text("Doctor ",10,20),s.text(this.reserva.doctor.name,50,20),s.text("Horario ",10,30),s.text(this.reserva.fechaInicio,50,30),s.text("Especialista ",10,40),s.text(this.reserva.doctor.especialidad,50,40),s.save("reserva.pdf")}))},reservarClick(e){this.reservaUpdateDialog=!0,this.reserva=e},reservaCreate(){void 0!=this.reserva.doctors?(this.loading=!0,this.reserva.doctor_id=this.reserva.doctors.id,this.$api.post("reserva/",this.reserva).then((e=>{this.reservaDialog=!1,this.fechasAll(),this.loading=!1,this.re,this.$q.notify({message:"Reserva creada",color:"positive",icon:"check_circle"})}))):this.$q.notify({message:"Debe seleccionar un doctor",color:"negative",position:"top",timeout:2e3})},cambio(e){this.search(e)},fechasAll(){this.$api.get("fecha").then((e=>{this.events=[],e.data.forEach((e=>{let s=e.fecha.replace("-","/");s=s.replace("-","/"),this.events.push(s)}))}))},search(e){this.fecha=e,this.$q.loading.show(),this.reservas=[],this.$api.get("reserva/"+D()(e,"YYYY/MM/DD").format("YYYY-MM-DD")).then((e=>{this.$q.loading.hide(),e.data.forEach((e=>{e.estado=0!=e.estado,this.reservas.push(e)}))}))}},created(){this.$api.get("doctor").then((e=>{e.data.forEach((e=>{e.label=e.name+" - "+e.especialidad,this.doctors.push(e)}))})),this.search(this.date),this.fechasAll()}};var W=a(1639),U=a(9885),Y=a(4455),C=a(7088),Z=a(9800),M=a(4106),Q=a(2857),F=a(4458),I=a(3190),$=a(1221),S=a(7498),E=a(2074),O=a(8326),P=a(6945),T=a(6611),A=a(9984),H=a.n(A);const N=(0,W.Z)(q,[["render",V]]),R=N;H()(q,"components",{QPage:U.Z,QBtn:Y.Z,QDate:C.Z,QTabPanels:Z.Z,QTabPanel:M.Z,QIcon:Q.Z,QCard:F.Z,QCardSection:I.Z,QCheckbox:$.Z,QSplitter:S.Z,QDialog:E.Z,QForm:O.Z,QSelect:P.Z,QInput:T.Z})},6700:(e,s,a)=>{var l={"./af":3902,"./af.js":3902,"./ar":6314,"./ar-dz":5666,"./ar-dz.js":5666,"./ar-kw":6591,"./ar-kw.js":6591,"./ar-ly":7900,"./ar-ly.js":7900,"./ar-ma":5667,"./ar-ma.js":5667,"./ar-sa":4092,"./ar-sa.js":4092,"./ar-tn":1379,"./ar-tn.js":1379,"./ar.js":6314,"./az":1699,"./az.js":1699,"./be":8988,"./be.js":8988,"./bg":7437,"./bg.js":7437,"./bm":7947,"./bm.js":7947,"./bn":2851,"./bn-bd":4905,"./bn-bd.js":4905,"./bn.js":2851,"./bo":7346,"./bo.js":7346,"./br":1711,"./br.js":1711,"./bs":3706,"./bs.js":3706,"./ca":112,"./ca.js":112,"./cs":6406,"./cs.js":6406,"./cv":1853,"./cv.js":1853,"./cy":9766,"./cy.js":9766,"./da":6836,"./da.js":6836,"./de":9320,"./de-at":4904,"./de-at.js":4904,"./de-ch":6710,"./de-ch.js":6710,"./de.js":9320,"./dv":3274,"./dv.js":3274,"./el":286,"./el.js":286,"./en-au":143,"./en-au.js":143,"./en-ca":237,"./en-ca.js":237,"./en-gb":2428,"./en-gb.js":2428,"./en-ie":3349,"./en-ie.js":3349,"./en-il":3764,"./en-il.js":3764,"./en-in":7809,"./en-in.js":7809,"./en-nz":9851,"./en-nz.js":9851,"./en-sg":5594,"./en-sg.js":5594,"./eo":4483,"./eo.js":4483,"./es":2184,"./es-do":5777,"./es-do.js":5777,"./es-mx":9356,"./es-mx.js":9356,"./es-us":8496,"./es-us.js":8496,"./es.js":2184,"./et":7578,"./et.js":7578,"./eu":2092,"./eu.js":2092,"./fa":5927,"./fa.js":5927,"./fi":171,"./fi.js":171,"./fil":2416,"./fil.js":2416,"./fo":9937,"./fo.js":9937,"./fr":5172,"./fr-ca":8249,"./fr-ca.js":8249,"./fr-ch":7541,"./fr-ch.js":7541,"./fr.js":5172,"./fy":7907,"./fy.js":7907,"./ga":6361,"./ga.js":6361,"./gd":2282,"./gd.js":2282,"./gl":2630,"./gl.js":2630,"./gom-deva":680,"./gom-deva.js":680,"./gom-latn":6220,"./gom-latn.js":6220,"./gu":6272,"./gu.js":6272,"./he":5540,"./he.js":5540,"./hi":6067,"./hi.js":6067,"./hr":9669,"./hr.js":9669,"./hu":3396,"./hu.js":3396,"./hy-am":6678,"./hy-am.js":6678,"./id":4812,"./id.js":4812,"./is":4193,"./is.js":4193,"./it":7863,"./it-ch":959,"./it-ch.js":959,"./it.js":7863,"./ja":6741,"./ja.js":6741,"./jv":8657,"./jv.js":8657,"./ka":3290,"./ka.js":3290,"./kk":8418,"./kk.js":8418,"./km":7687,"./km.js":7687,"./kn":1375,"./kn.js":1375,"./ko":2641,"./ko.js":2641,"./ku":3518,"./ku.js":3518,"./ky":5459,"./ky.js":5459,"./lb":1978,"./lb.js":1978,"./lo":6915,"./lo.js":6915,"./lt":8948,"./lt.js":8948,"./lv":2548,"./lv.js":2548,"./me":8608,"./me.js":8608,"./mi":333,"./mi.js":333,"./mk":1876,"./mk.js":1876,"./ml":999,"./ml.js":999,"./mn":4098,"./mn.js":4098,"./mr":6111,"./mr.js":6111,"./ms":3717,"./ms-my":265,"./ms-my.js":265,"./ms.js":3717,"./mt":8980,"./mt.js":8980,"./my":6895,"./my.js":6895,"./nb":5348,"./nb.js":5348,"./ne":1493,"./ne.js":1493,"./nl":4419,"./nl-be":5576,"./nl-be.js":5576,"./nl.js":4419,"./nn":6907,"./nn.js":6907,"./oc-lnc":2321,"./oc-lnc.js":2321,"./pa-in":9239,"./pa-in.js":9239,"./pl":7627,"./pl.js":7627,"./pt":5703,"./pt-br":1623,"./pt-br.js":1623,"./pt.js":5703,"./ro":2747,"./ro.js":2747,"./ru":4420,"./ru.js":4420,"./sd":2148,"./sd.js":2148,"./se":2461,"./se.js":2461,"./si":2783,"./si.js":2783,"./sk":3306,"./sk.js":3306,"./sl":341,"./sl.js":341,"./sq":2768,"./sq.js":2768,"./sr":2451,"./sr-cyrl":3371,"./sr-cyrl.js":3371,"./sr.js":2451,"./ss":8812,"./ss.js":8812,"./sv":3820,"./sv.js":3820,"./sw":3615,"./sw.js":3615,"./ta":2869,"./ta.js":2869,"./te":2044,"./te.js":2044,"./tet":5861,"./tet.js":5861,"./tg":6999,"./tg.js":6999,"./th":1772,"./th.js":1772,"./tk":7443,"./tk.js":7443,"./tl-ph":9786,"./tl-ph.js":9786,"./tlh":2812,"./tlh.js":2812,"./tr":6952,"./tr.js":6952,"./tzl":9573,"./tzl.js":9573,"./tzm":5990,"./tzm-latn":6961,"./tzm-latn.js":6961,"./tzm.js":5990,"./ug-cn":2610,"./ug-cn.js":2610,"./uk":9498,"./uk.js":9498,"./ur":3970,"./ur.js":3970,"./uz":9006,"./uz-latn":26,"./uz-latn.js":26,"./uz.js":9006,"./vi":9962,"./vi.js":9962,"./x-pseudo":8407,"./x-pseudo.js":8407,"./yo":1962,"./yo.js":1962,"./zh-cn":8909,"./zh-cn.js":8909,"./zh-hk":4014,"./zh-hk.js":4014,"./zh-mo":996,"./zh-mo.js":996,"./zh-tw":6327,"./zh-tw.js":6327};function t(e){var s=r(e);return a(s)}function r(e){if(!a.o(l,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return l[e]}t.keys=function(){return Object.keys(l)},t.resolve=r,e.exports=t,t.id=6700}}]);