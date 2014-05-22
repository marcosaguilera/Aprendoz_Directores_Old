dojo.declare("Subjects", wm.Page, {
  start: function() {
    this.curdate = new Date().getTime();
    main.a_cursy.input.setValue("f1",this.curdate);
    main.a_cursy.update();
  }, 
  intensidadHorariaTotal: function(){
    var ih1= parseFloat(this.subject_iha1.getDataValue());
    var ih2= parseFloat(this.subject_iha2.getDataValue());
    var ih3= parseFloat(this.subject_iha3.getDataValue());
    totalIntensidad= ih1+ih2+ih3; 
    return totalIntensidad;
  },  
  asignaturasSelect: function(inSender, inItem) {
    this.subject_newRecord.enable();
    this.subject_updateRecord.enable();
    this.subject_deleteRecord.enable();
  
    var index = this.asignaturas.getSelectedIndex();
    var data = this.asignaturas.getItemData(index);
    var id= data.id;
    var subject= data.asignatura;
    var _a1= data.a1;
    var _a2= data.a2;
    var _a3= data.a3;
    var _sa1= data.sa1;
    var _sa2= data.sa2;
    var _sa3= data.sa3;
    this.subjectById.input.setValue("idasignatura", id);
    this.subjectById.update();
  },  
  asignaturasDeselect: function(inSender, inItem) {
    this.subject_newRecord.disable();
    this.subject_updateRecord.disable();
    this.subject_deleteRecord.disable();
  }, 
  subjectByIdSuccess: function(inSender, inDeprecated) {
     var json= this.subjectById.getItem(0);
     var _id= json.data.id;  
     var _asignatura= json.data.asignatura; 
     var _descripEspanol= json.data.descripcion_espanol;
     var _subject= json.data.subject;
     var _descripcion_ingles= json.data.descripcion_ingles;
     var _electiva= json.data.electiva;
     var _sy = json.data.sy;
     var _salon= json.data.salon;
     var _tipo= json.data.idTipoInscAsig;
     var _grado= json.data.idgrado;
     
     var _a1= json.data.a1;
     var _a2= json.data.a2;
     var _a3= json.data.a3;
     var _sa1= json.data.sa1;
     var _sa2= json.data.sa2;
     var _sa3= json.data.sa3;
     var _esperadosTotal= json.data.esperadosTotal;
     var _iha1= json.data.iha1;
     var _iha2= json.data.iha2;
     var _iha3= json.data.iha3;
     var _ihtotal= json.data.ihtotal;
     var _meses= json.data.meses;
     var _peso= json.data.peso;

     if(_electiva == true){
       this.subject_electiva.setChecked(_electiva);
     }else{
       this.subject_electiva.setChecked(_electiva);
     }
     this.subject_idasignatura.setDataValue(_id);
     this.subject_asignatura.setDataValue(_asignatura);
     this.subject_descripcion.setDataValue(_descripEspanol);
     this.subject_subject.setDataValue(_subject);
     this.subject_description.setDataValue(_descripcion_ingles);
     this.subject_sy.setDataValue(_sy);
     this.subject_salon.setDataValue(_salon);
     this.subject_tipo.setDataValue(_tipo);
     this.subject_grado.setDataValue(_grado);
     
     this.subject_area1.setDataValue(_a1);
     this.subject_area2.setDataValue(_a2);
     this.subject_area3.setDataValue(_a3);
     this.subject_sub1.setDataValue(_sa1);
     this.subject_sub2.setDataValue(_sa2);
     this.subject_sub3.setDataValue(_sa3);
     
     this.subject_esperados.setDataValue(_esperadosTotal);
     this.subject_iha1.setDataValue(_iha1);
     this.subject_iha2.setDataValue(_iha2);
     this.subject_iha3.setDataValue(_iha3);
     this.subject_ihtotal.setDataValue(_ihtotal);
     this.subject_meses.setDataValue(_meses);
     this.subject_peso.setDataValue(_peso);
  },
  select_gradeChange: function(inSender, inDisplayValue, inDataValue) {
     this.ls_subjects.update();
     this.getNewIdSubject.update(); 
  }, 
  subject_saveNewRecordClick: function(inSender, inEvent) {
     var _electivaValue= this.subject_electiva.getChecked();    
     var _systring= this.subject_sy.getDisplayValue();
     var _gradostring= this.subject_grado.getDisplayValue();
     this.updateSubjects.setValue("electiva", _electivaValue);
     this.updateSubjects.setValue("grado.grado", _gradostring);
     this.updateSubjects.setValue("sy.schoolYear", _systring);
     this.subjectDataForm.setDataSet(this.updateSubjects);       
     this.subjectDataForm.insertData();        
  }, 
  subject_saveUpdateRecordClick: function(inSender, inEvent) {
     var _electivaValue= this.subject_electiva.getChecked();
     var _sy= this.subject_sy.getDataValue();
     var _grado= this.subject_grado.getDataValue();
     this.updateSubjects.setValue("electiva", _electivaValue);
     this.updateSubjects.setValue("grado.idGrado", _grado);
     this.updateSubjects.setValue("sy.idSy", _sy);
     this.subjectDataForm.setDataSet(this.updateSubjects);          
     this.subjectDataForm.updateData(); 
  }, 
  subject_deleteRecordClick: function(inSender, inEvent) {
     var _id= this.subject_idasignatura.getDataValue();
     var _asig= this.subject_asignatura.getDataValue();
     if(_id >0){
       var result = confirm("Esta acción eliminará la asignatura "+_asig+".\n\n¿Esta seguro de realizar esta acción?");
       if (result==true){
          this.deleteSubject.input.setValue("idasignatura",_id);
          this.deleteSubject.update();
       }else{
          alert("Operación cancelada");
       }       
     }else{
       alert("Acción no permitida. Asegurese de seleccionar una asignatura.");
     }
  },
  
  subject_updateRecordClick: function(inSender, inEvent) {
     this.subject_newRecord.hide();
     this.subject_updateRecord.hide();
     this.subject_deleteRecord.hide();
     this.subject_saveNewRecord.hide();
     this.subject_saveUpdateRecord.show();
     this.subject_cancelOperation.show();
    
     this.subject_asignatura.setReadonly(false);
     this.subject_descripcion.setReadonly(false);
     this.subject_subject.setReadonly(false);
     this.subject_description.setReadonly(false);
     this.subject_electiva.setReadonly(false);
     this.subject_salon.setReadonly(false);
     this.subject_tipo.setReadonly(false);
     
     this.subject_area1.setReadonly(false);
     this.subject_peso.setReadonly(false);
     this.subject_area2.setReadonly(false);
     this.subject_area3.setReadonly(false);
     this.subject_sub1.setReadonly(false);
     this.subject_sub2.setReadonly(false);
     this.subject_sub3.setReadonly(false);
     
     this.subject_iha1.setReadonly(false);
     this.subject_iha2.setReadonly(false);
     this.subject_iha3.setReadonly(false);
     this.subject_meses.setReadonly(false);
  }, 
  subject_newRecordClick: function(inSender, inEvent) {
     var gradeValue= this.select_grade.getDataValue();
     var syValue   = this.select_sy.getDataValue();
     
     if(gradeValue > 0 && syValue > -3){
       var json = this.getNewIdSubject.getItem(0);
       var newId= json.data.newId;
         
       this.subject_newRecord.hide();
       this.subject_updateRecord.hide();
       this.subject_deleteRecord.hide();
       this.subject_saveUpdateRecord.hide();
       this.subject_saveNewRecord.show();
       this.subject_cancelOperation.show();
       
       //clearing all inputs
       this.subject_idasignatura.clear();
       this.subject_asignatura.clear();
       this.subject_descripcion.clear();
       this.subject_subject.clear();
       this.subject_description.clear();
       this.subject_electiva.setChecked(0);
       this.subject_sy.clear();
       this.subject_salon.clear();
       this.subject_tipo.clear();
       this.subject_grado.clear();
       
       this.subject_area1.clear();
       this.subject_area2.clear();
       this.subject_area3.clear();
       this.subject_sub1.clear();
       this.subject_sub2.clear();
       this.subject_sub3.clear();
       
       this.subject_esperados.clear();
       this.subject_iha1.clear();
       this.subject_iha2.clear();
       this.subject_iha3.clear();
       this.subject_ihtotal.clear();
       this.subject_meses.clear();
       this.subject_peso.clear(); 
       //end clearing
       
       this.subject_idasignatura.setDataValue(newId);
       this.subject_asignatura.setReadonly(false);
       this.subject_descripcion.setReadonly(false);
       this.subject_subject.setReadonly(false);
       this.subject_description.setReadonly(false);
       this.subject_electiva.setReadonly(false);
       this.subject_sy.setReadonly(false);
       this.subject_salon.setDataValue("1");
       this.subject_salon.hide();
       this.subject_tipo.setDataValue("1");
       this.subject_tipo.hide();
       this.subject_grado.setReadonly(false);
       
       this.subject_area1.setReadonly(false);
       this.subject_area2.setReadonly(false);
       this.subject_area3.setReadonly(false);
       this.subject_sub1.setReadonly(false);
       this.subject_sub2.setReadonly(false);
       this.subject_sub3.setReadonly(false);
       
       this.subject_esperados.setReadonly(false);
       this.subject_iha1.setDataValue("0");
       this.subject_iha1.setReadonly(false);
       this.subject_iha2.setDataValue("0");
       this.subject_iha2.setReadonly(false);
       this.subject_iha3.setDataValue("0");
       this.subject_iha3.setReadonly(false);  
       this.subject_meses.setReadonly(false);
       this.subject_peso.setReadonly(false);
     }else{
       alert("Operación no permitida. Seleccione un Año escolar y Grado para continuar con la creación de una asignatura.");
     }  
  }, 
  subject_cancelOperationClick: function(inSender, inEvent) {
     this.subject_saveNewRecord.hide();
     this.subject_saveUpdateRecord.hide();
     this.subject_cancelOperation.hide();
     this.subject_newRecord.show();
     this.subject_updateRecord.show();
     this.subject_deleteRecord.show();
    
     this.subject_asignatura.setReadonly(true);
     this.subject_descripcion.setReadonly(true);
     this.subject_subject.setReadonly(true);
     this.subject_description.setReadonly(true);
     this.subject_electiva.setReadonly(true);
     this.subject_sy.setReadonly(true);
     this.subject_salon.setReadonly(true);
     this.subject_tipo.setReadonly(true);
     this.subject_grado.setReadonly(true);
     
     this.subject_esperados.setReadonly(true);
     this.subject_area1.setReadonly(true);
     this.subject_area2.setReadonly(true);
     this.subject_area3.setReadonly(true);
     this.subject_sub1.setReadonly(true);
     this.subject_sub2.setReadonly(true);
     this.subject_sub3.setReadonly(true);
     
     this.subject_iha1.setReadonly(true);
     this.subject_iha2.setReadonly(true);
     this.subject_iha3.setReadonly(true);
     this.subject_meses.setReadonly(true);
     this.subject_peso.setReadonly(true); 
  },
  subjectDataFormInsertData: function(inSender) {
     this.subject_cancelOperationClick();
  },  
  subjectDataFormUpdateData: function(inSender) {
     this.subject_cancelOperationClick(); 
  },  
  subjectDataFormDeleteData: function(inSender) {
     this.subject_idasignatura.clear();
     this.subject_asignatura.clear();
     this.subject_descripcion.clear();
     this.subject_subject.clear();
     this.subject_description.clear();
     this.subject_electiva.setChecked(0);
     this.subject_sy.setDisplayValue("");
     this.subject_salon.clear();
     this.subject_tipo.clear();
     this.subject_grado.setDisplayValue("");
     
     this.subject_area1.setDisplayValue("");
     this.subject_area2.setDisplayValue("");
     this.subject_area3.setDisplayValue("");
     this.subject_sub1.setDisplayValue("");
     this.subject_sub2.setDisplayValue("");
     this.subject_sub3.setDisplayValue("");
     
     this.subject_esperados.clear();
     this.subject_iha1.clear();
     this.subject_iha2.clear();
     this.subject_iha3.clear();
     this.subject_ihtotal.clear();
     this.subject_meses.clear();
     this.subject_peso.clear();  
  },  
  deleteSubjectSuccess: function(inSender, inDeprecated) {
     this.ls_subjects.update();
     this.subject_idasignatura.clear();
     this.subject_asignatura.clear();
     this.subject_descripcion.clear();
     this.subject_subject.clear();
     this.subject_description.clear();
     this.subject_electiva.setChecked(0);
     this.subject_sy.setDisplayValue("");
     this.subject_salon.clear();
     this.subject_tipo.clear();
     this.subject_grado.setDisplayValue("");
     
     this.subject_area1.setDisplayValue("");
     this.subject_area2.setDisplayValue("");
     this.subject_area3.setDisplayValue("");
     this.subject_sub1.setDisplayValue("");
     this.subject_sub2.setDisplayValue("");
     this.subject_sub3.setDisplayValue("");
     
     this.subject_esperados.clear();
     this.subject_iha1.clear();
     this.subject_iha2.clear();
     this.subject_iha3.clear();
     this.subject_ihtotal.clear();
     this.subject_meses.clear();
     this.subject_peso.clear();   
  },  
  subject_iha1Change: function(inSender, inDisplayValue, inDataValue) {
     var ihtotal= this.intensidadHorariaTotal();
     this.subject_ihtotal.setDataValue(ihtotal);      
  },
  subject_iha2Change: function(inSender, inDisplayValue, inDataValue) {
     var ihtotal= this.intensidadHorariaTotal();
     this.subject_ihtotal.setDataValue(ihtotal);  
  },  
  subject_iha3Change: function(inSender, inDisplayValue, inDataValue) {
     var ihtotal= this.intensidadHorariaTotal();
     this.subject_ihtotal.setDataValue(ihtotal);          
  },  
  asignatura_buttonClick: function(inSender, inEvent) {
     this.axis.hide();
     this.areas.hide();
     this.subjects.show();
  },
  areas_buttonClick: function(inSender, inEvent) {
     this.axis.hide();
     this.subjects.hide(); 
     this.areas.show();
  },
  ejes_buttonClick: function(inSender, inEvent) {   
     this.subjects.hide(); 
     this.areas.hide(); 
     this.axis.show();
  },
  search_axis_textEditorChange: function(inSender, inDisplayValue, inDataValue) {
     var search_eje= this.search_axis_textEditor.getDataValue();
     var search_axis= this.search_axis_textEditor.getDataValue();
     this.ejeLiveVariable2.filter.setValue("ejeTematico", search_eje);
     this.ejeLiveVariable2.update();     
  },
  search_areas_textEditorChange: function(inSender, inDisplayValue, inDataValue) {
     var search_area= this.search_areas_textEditor.getDataValue();
     var search_axis= this.search_areas_textEditor.getDataValue(); 
     this.areaLiveVariable1.filter.setValue("area", search_area);
     this.areaLiveVariable1.update();      
  },  
  areaLiveVariable1Success: function(inSender, inDeprecated) {
     this.ls_area.update();
     this.ls_subareas.update();  
  },
  docentes_buttonClick: function(inSender, inEvent) {
     this.curdate = new Date().getTime();
     this.a_cursy.input.setValue("f1",this.curdate); 
     this.a_cursy.update();   
  },  
  a_cursySuccess: function(inSender, inDeprecated) {
     var json= this.a_cursy.getItem(0);    
     var sy = json.data.sy;
     var schoolyear = json.data.idsy;
     this.aprendizajes_sel_sy.setDataValue(5);
  },
  aprendizajes_sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
     var idsy= this.aprendizajes_sel_sy.getDataValue();
     var idgrado= this.aprendizajes_sel_grado.getDataValue();
     this.learningsSubjectsByGrade.input.setValue("_grado",idgrado);
     this.learningsSubjectsByGrade.input.setValue("_sy", idsy);
     this.learningsSubjectsByGrade.update();
     
     this.ls_cursos_by_grade.input.setValue("idg", idgrado);
     this.ls_cursos_by_grade.update();
  }, 
  docentesVerClick: function(inSender, inEvent) {
     var idcurso= this.cursosDojoGrid.selectedItem.getData().idcurso;
     var idsy= this.aprendizajes_sel_sy.getDataValue();
     var idpersona= this.docentesDojoGrid.selectedItem.getData().idpersona;
     this.inscCursoAsigSv.input.setValue("idc", idcurso); 
     this.inscCursoAsigSv.input.setValue("idp", idpersona); 
     this.inscCursoAsigSv.input.setValue("idper", idsy); 
     this.inscCursoAsigSv.update(); 
  },
  
  
    
  docentesAgregarClick: function(inSender, inEvent) {
     this.obj_  = this.cursosDojoGrid.dojoObj.selection.getSelected();
     this.cont_ = this.cursosDojoGrid.dojoObj.selection.getSelectedCount();
     this.index = this.listado_asgianturas.getSelectedIndex();
     this.data = this.listado_asgianturas.getItemData(index);
     this.idasignatura= data.id;
     this.idcurso= this.cursosDojoGrid.selectedItem.getData().idcurso;
     //this.grado     = this.data.grado;
     this.periodoid = 13;
     this.periodo   = "2014-2015";
     this.idpersona= this.docentesDojoGrid.selectedItem.getData().idpersona;     
     console.log("fin");    
     this.writeNext();     
  },
  
  item_ : 0,
  /*
  for(var i=0; i<=count; i++){        
         var obj = 
         console.log(obj);
         var intcurso = parseInt(obj[i].idcurso);              
         this.actionsInscCursoAsig.setValue("asignatura.idAsignatura", idasignatura);
         this.actionsInscCursoAsig.setValue("persona.idPersona", idpersona);
         this.actionsInscCursoAsig.setValue("periodo.idPeriodo", idperiodo);
         this.actionsInscCursoAsig.setValue("curso.idCurso", intcurso);     
         this.inscCursoAsigActionForm.setDataSet(this.actionsInscCursoAsig);          
         this.inscCursoAsigActionForm.insertData();
     }
  */
  writeNext: function(){
    var obj = this.obj_;  
    var cont = this.cont_;
    var index= this.index;
    var data = this.data;
    var subjectid= this.subjectid;
    var subject= this.subject;
    var gradoid= this.gradoid;
    var grado= this.grado;
    var periodoid= this.periodoid;
    var periodo  = this.periodo; 
    console.log(obj);
    console.log(cont);  
    console.log(index);
    console.log(data); 
    console.log(subjectid);
    console.log(subject); 
    console.log(gradoid);
    console.log(grado); 
    console.log(periodoid);
    console.log(periodo);
       this.inscribirVar.setValue("grado.idGrado", obj[this.item_].idgrado); 
       this.inscribirVar.setValue("grado.grado", obj[this.item_].grado);
       this.inscribirVar.setValue("asignatura.idAsignatura", subjectid); 
       this.inscribirVar.setValue("asignatura.asignatura", subject);
       var intp = parseInt(obj[this.item_].idpersona);
       console.log(intp);
       this.inscribirVar.setValue("persona.idPersona", intp);
       this.inscribirVar.setValue("periodo.idPeriodo", periodoid);
       this.inscribirVar.setValue("periodo.periodo", periodo);
       this.inscribirForm.setDataSet(this.inscribirVar); 
       this.inscribirForm.insertData(); 
    this.item_++;
  },
  
  
  _end: 0
});