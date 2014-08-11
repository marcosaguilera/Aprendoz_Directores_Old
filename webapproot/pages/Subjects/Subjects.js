dojo.declare("Subjects", wm.Page, {
  start: function() {
    this.curdate = new Date().getTime();
    main.a_cursy.input.setValue("f1",this.curdate);
    main.a_cursy.update();
    //this.aprendizajes_sy.setDisplayValue("2014-2015"); 
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
     this.docentes.hide();
     this.learnings.hide();
     this.subjects.show();
     
     this.curdate = new Date().getTime();
     this.a_cursy.input.setValue("f1",this.curdate); 
     this.a_cursy.update();
  },
  areas_buttonClick: function(inSender, inEvent) {
     this.axis.hide();
     this.subjects.hide(); 
     this.docentes.hide();
     this.learnings.hide();
     this.areas.show();
  },
  ejes_buttonClick: function(inSender, inEvent) {   
     this.subjects.hide(); 
     this.areas.hide(); 
     this.docentes.hide();
     this.learnings.hide();
     this.axis.show();    
  },
  docentes_buttonClick: function(inSender, inEvent) {
     this.subjects.hide(); 
     this.areas.hide();    
     this.axis.hide();
     this.learnings.hide();
     this.docentes.show();
     
     this.curdate = new Date().getTime();
     this.a_cursy.input.setValue("f1",this.curdate); 
     this.a_cursy.update();   
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
  a_cursySuccess: function(inSender, inDeprecated) {
     var json= this.a_cursy.getItem(0);    
     var sy = json.data.sy;
     var schoolyear = json.data.idsy;
     this.aprendizajes_sel_sy.setDataValue(5); 
     this.aprendizajes_sy.setDisplayValue(sy);
     this.select_sy.setDisplayValue(sy);
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
     this.inscCursoAsigSv.input.setValue("idc", idcurso); 
     this.inscCursoAsigSv.input.setValue("idper", idsy); 
     this.inscCursoAsigSv.update(); 
  },   
  docentesAgregarClick: function(inSender, inEvent) {
     var obj_  = this.cursosDojoGrid.dojoObj.selection.getSelected();
     var cont_ = this.cursosDojoGrid.dojoObj.selection.getSelectedCount();
     var index = this.listado_asignaturas.getSelectedIndex();
     var data = this.listado_asignaturas.getItemData(index);
     var idasignatura= data.id;
     var idcurso= this.cursosDojoGrid.selectedItem.getData().idcurso;
     var periodoid = 13;
     var periodo   = "2014-2015";
     var idpersona= this.docentesDojoGrid.selectedItem.getData().idpersona;   

     this.actionsInscCursoAsig.setValue("asignatura.idAsignatura", idasignatura);
     this.actionsInscCursoAsig.setValue("persona.idPersona", idpersona);
     this.actionsInscCursoAsig.setValue("periodo.idPeriodo", periodoid);
     this.actionsInscCursoAsig.setValue("curso.idCurso", idcurso);     
     this.inscCursoAsigActionForm.setDataSet(this.actionsInscCursoAsig);          
     this.inscCursoAsigActionForm.insertData();  
     
     var idcurso= this.cursosDojoGrid.selectedItem.getData().idcurso;
     var idsy= this.aprendizajes_sel_sy.getDataValue();
     this.inscCursoAsigSv.input.setValue("idc", idcurso); 
     this.inscCursoAsigSv.input.setValue("idper", idsy); 
     this.inscCursoAsigSv.update();
  }, 
  
  docentesRestablecerClick: function(inSender, inEvent) {
     this.inscCursoAsigSv.clearData();
     this.searchTeacher.clearData();
     this.ls_cursos_by_grade.clearData();
     this.learningsSubjectsByGrade.clearData(); 
     this.aprendizajes_sel_grado.clear();
     this.docentesSearch.clear();
  },
  inscripcionesGrid1CellClick: function(inSender, evt) {
     this.docentesRetirar.enable();
  },
  docentesRetirarClick: function(inSender, inEvent) {
     var id= this.inscripcionesGrid1.selectedItem.data.id;
     var r=confirm("¿El registro se eliminará de manera definitiva, estas seguro de continuar?");
     if (r==true) {
        this.deleteInscCursoAsig.input.setValue("icaId", id);
        this.deleteInscCursoAsig.update();
        this.inscCursoAsigSv.update();
     } else {
        alert("Acción cancelada.");
     }    
  },  
  inscCursoAsigActionFormSuccess: function(inSender, inData) {
     this.inscCursoAsigSv.update(); 
  },
  aprendizajes_asignaturasClick: function(inSender, evt) {
     this.newButton3.enable();
     var idasignatura=  this.aprendizajes_asignaturas.selectedItem.data.id;
     var ejeIdEje1= this.aprendizajes_asignaturas.selectedItem.data.sa1;
     var ejeIdEje2= this.aprendizajes_asignaturas.selectedItem.data.sa2;
     var ejeIdEje3= this.aprendizajes_asignaturas.selectedItem.data.sa3;
     console.log(ejeIdEje1);
     console.log(ejeIdEje2);
     console.log(ejeIdEje3);

     this.aprendizajesAsignaturaLV.filter.setValue("asignatura.idAsignatura", idasignatura);
     this.aprendizajesAsignaturaLV.update();
     
     this.aprendizajesEje1.filter.setValue("subarea.idSubarea", ejeIdEje1);
     this.aprendizajesEje1.filter.setValue("activo",true);
     this.aprendizajesEje2.filter.setValue("subarea.idSubarea", ejeIdEje2);
     this.aprendizajesEje2.filter.setValue("activo",true);
     this.aprendizajesEje3.filter.setValue("subarea.idSubarea", ejeIdEje3);
     this.aprendizajesEje3.filter.setValue("activo",true);
     this.aprendizajesEje1.update();
     this.aprendizajesEje2.update();
     this.aprendizajesEje3.update();     
          
     this.l_dimension_comprension.update();
     this.l_dimension_curricular.update();
     this.l_inteligencias.update();
     this.l_nivel_esperado.update();
  },
  aprendizajes_aprendizajesClick: function(inSender, evt) {
     this.updateButton3.enable();
     this.deleteButton3.enable();
      
     var idapr= this.aprendizajes_aprendizajes.selectedItem.data.idAprendizaje;
     this.hql_detallesAprendizajes.input.setValue("idaprendizajes", idapr);
     this.hql_detallesAprendizajes.update();
  },
   
  hql_detallesAprendizajesSuccess: function(inSender, inDeprecated) {
     var jsonObj         = this.hql_detallesAprendizajes.getItem(0).data;
     var idAprendizaje   = jsonObj.idAprendizaje;
     var aprendizaje     = jsonObj.aprendizaje;
     var learning        = jsonObj.learning;
     var ejeIdEje        = jsonObj.ejeIdEje;
     var eje2IdEje       = jsonObj.eje2IdEje;
     var eje3IdEje       = jsonObj.eje3IdEje;    
     var fechaEsperada   = jsonObj.fechaEsperada;
     var idAsignatura    = jsonObj.idAsignatura;
     var idDimension     = jsonObj.idDimension;
     var idDimension2    = jsonObj.idDimension2;
     var idInteligencia  = jsonObj.idInteligencia;
     var idNivelEsperado = jsonObj.idNivelEsperado;     
     var peso            = jsonObj.peso;
       
     this.idAprendizajeEditor1.setDataValue(idAprendizaje);
     this.fechaEsperadaEditor1.setDataValue(fechaEsperada);
     this.aprendizajeEditor1.setDataValue(aprendizaje);
     this.learningEditor1.setDataValue(learning);
     this.pesoEditor1.setDataValue(peso);
     this.ejeIdEjeEditor1.setDataValue(ejeIdEje);
     console.log(ejeIdEje);
     this.eje2IdEjeEditor1.setDataValue(eje2IdEje);
     console.log(eje2IdEje);
     this.eje3IdEjeEditor1.setDataValue(eje3IdEje);  
     console.log(eje3IdEje);
     this.dimensinComprensionEditor1.setDataValue(idDimension);
     this.dimensinCurricularEditor1.setDataValue(idDimension2);
     this.inteligenciaEditor1.setDataValue(idInteligencia);
     this.nivelEsperadoEditor1.setDataValue(idNivelEsperado);
     this.pesoEditor1.setDataValue(peso);
     
  },
  updateButton3Click: function(inSender, inEvent) {
    try {
     this.operationPanel3.hide();
     this.savePanel3.show();
     this.saveButton4.hide();
     this.saveButton3.show();
     //this.editPanel3.beginDataUpdate();
     //this.idAprendizajeEditor1.setReadonly(false);
     this.fechaEsperadaEditor1.setReadonly(false);
     this.aprendizajeEditor1.setReadonly(false);
     this.learningEditor1.setReadonly(false);
     this.pesoEditor1.setReadonly(false);
     this.ejeIdEjeEditor1.setReadonly(false);
     this.eje2IdEjeEditor1.setReadonly(false);
     this.eje3IdEjeEditor1.setReadonly(false);  
     this.dimensinComprensionEditor1.setReadonly(false);
     this.dimensinCurricularEditor1.setReadonly(false);
     this.inteligenciaEditor1.setReadonly(false);
     this.nivelEsperadoEditor1.setReadonly(false);
     this.pesoEditor1.setReadonly(false);  
    } catch(e) {
      console.error('ERROR IN updateButton3Click: ' + e); 
    } 
  },
  newButton3Click: function(inSender, inEvent) {
    try {
     this.operationPanel3.hide();
     this.savePanel3.show();
     this.saveButton3.hide();
     this.saveButton4.show();     
     //this.editPanel3.beginDataInsert();
     //this.idAprendizajeEditor1.setReadonly(false);
     this.idAprendizajeEditor1.clear()
     this.fechaEsperadaEditor1.clear()
     this.aprendizajeEditor1.clear()
     this.learningEditor1.clear()
     this.pesoEditor1.clear()
     this.ejeIdEjeEditor1.clear()
     this.eje2IdEjeEditor1.clear()
     this.eje3IdEjeEditor1.clear()  
     this.dimensinComprensionEditor1.clear()
     this.dimensinCurricularEditor1.clear()
     this.inteligenciaEditor1.clear()
     this.nivelEsperadoEditor1.clear()
     this.pesoEditor1.clear()
     
     this.fechaEsperadaEditor1.setReadonly(false);
     this.aprendizajeEditor1.setReadonly(false);
     this.learningEditor1.setReadonly(false);
     this.pesoEditor1.setReadonly(false);
     this.ejeIdEjeEditor1.setReadonly(false);
     this.eje2IdEjeEditor1.setReadonly(false);
     this.eje3IdEjeEditor1.setReadonly(false);  
     this.dimensinComprensionEditor1.setReadonly(false);
     this.dimensinCurricularEditor1.setReadonly(false);
     this.inteligenciaEditor1.setReadonly(false);
     this.nivelEsperadoEditor1.setReadonly(false);
     this.pesoEditor1.setReadonly(false); 
      
    } catch(e) {
      console.error('ERROR IN newButton3Click: ' + e); 
    } 
  },
  cancelButton3Click: function(inSender, inEvent) {
    try {
     this.savePanel3.hide();
     this.operationPanel3.show(); 
     this.saveButton4.hide();  
     this.saveButton3.show();       
     //this.editPanel3.cancelEdit();
     this.idAprendizajeEditor1.setReadonly(true);
     this.fechaEsperadaEditor1.setReadonly(true);
     this.aprendizajeEditor1.setReadonly(true);
     this.learningEditor1.setReadonly(true);
     this.pesoEditor1.setReadonly(true);
     this.ejeIdEjeEditor1.setReadonly(true);
     this.eje2IdEjeEditor1.setReadonly(true);
     this.eje3IdEjeEditor1.setReadonly(true);  
     this.dimensinComprensionEditor1.setReadonly(true);
     this.dimensinCurricularEditor1.setReadonly(true);
     this.inteligenciaEditor1.setReadonly(true);
     this.nivelEsperadoEditor1.setReadonly(true);
     this.pesoEditor1.setReadonly(true);       
    } catch(e) {
      console.error('ERROR IN cancelButton3Click: ' + e); 
    } 
  },  
  //save update learning
  saveButton3Click: function(inSender, inEvent) {
  try{     
     var idAprendizaje   = this.idAprendizajeEditor1.getDataValue();
     var aprendizaje     = this.aprendizajeEditor1.getDataValue();
     var learning        = this.learningEditor1.getDataValue();
     var ejeIdEje        = this.ejeIdEjeEditor1.getDataValue();
     var eje2IdEje       = this.eje2IdEjeEditor1.getDataValue();
     var eje3IdEje       = this.eje3IdEjeEditor1.getDataValue();    
     var fechaEsperada   = new Date().getTime();
     console.log(fechaEsperada);
     var grado           = this.aprendizajes_grado.dataValue.idGrado;
     var gradosapiens    = this.aprendizajes_grado.dataValue.gradoSapiens;
     var grade           = this.aprendizajes_grado.dataValue.grade;
     var gradostr        = this.aprendizajes_grado.getDisplayValue();
     var sy              = this.aprendizajes_sy.dataValue.idSy;    
     var systr           = this.aprendizajes_sy.getDisplayValue();
     var fecha1          = this.aprendizajes_sy.getDataValue().fechaDesde;
     var fecha2          = this.aprendizajes_sy.getDataValue().fechaHasta;
     var ih1             = this.aprendizajes_asignaturas.selectedItem.getData().ih1;
     var ih2             = this.aprendizajes_asignaturas.selectedItem.getData().ih2;
     var ih3             = this.aprendizajes_asignaturas.selectedItem.getData().ih3;
     var idAsignatura    = this.aprendizajes_asignaturas.selectedItem.data.id;  
     /**/
     var asignatura      = this.aprendizajes_asignaturas.selectedItem.data.asignatura; 
     var subject         = this.aprendizajes_asignaturas.selectedItem.data.subject;  
     var electiva        = this.aprendizajes_asignaturas.selectedItem.data.electiva;
     var a1              = this.aprendizajes_asignaturas.selectedItem.data.a1;
     var a2              = this.aprendizajes_asignaturas.selectedItem.data.a2;
     var a3              = this.aprendizajes_asignaturas.selectedItem.data.a3;
     var sa1             = this.aprendizajes_asignaturas.selectedItem.data.sa1;
     var sa2             = this.aprendizajes_asignaturas.selectedItem.data.sa2;
     var sa3             = this.aprendizajes_asignaturas.selectedItem.data.sa3;
     var intensidadHoraria = this.aprendizajes_asignaturas.selectedItem.data.intensidadHoraria;
     var peso            = this.aprendizajes_asignaturas.selectedItem.data.intensidadHoraria;
     var descripAsigEspaniol = this.aprendizajes_asignaturas.selectedItem.data.descripAsigEspaniol;
     var descripAsigIngles= this.aprendizajes_asignaturas.selectedItem.data.descripAsigIngles;
     var meses            = this.aprendizajes_asignaturas.selectedItem.data.meses;
     var esperadostotal   = this.aprendizajes_asignaturas.selectedItem.data.esperadostotal;
     var salonIdSalon     = this.aprendizajes_asignaturas.selectedItem.data.salonIdSalon;
     var idNivel          = this.aprendizajes_asignaturas.selectedItem.data.idNivel;
     var nivel           = this.aprendizajes_asignaturas.selectedItem.data.nivel;
     var levelName       = this.aprendizajes_asignaturas.selectedItem.data.levelName;
     /**/
     var idDimension     = this.dimensinComprensionEditor1.getDataValue();          
     var idDimensionstr  = this.dimensinComprensionEditor1.getDisplayValue();          
     var idDimension2    = this.dimensinCurricularEditor1.getDataValue();
     var idDimension2str = this.dimensinCurricularEditor1.getDisplayValue();
     var idInteligencia  = this.inteligenciaEditor1.getDataValue();
     var idNivelEsperado = this.nivelEsperadoEditor1.getDataValue();
     var inteligencia    = this.inteligenciaEditor1.getDisplayValue();
     var nivelEsperado   = this.nivelEsperadoEditor1.getDisplayValue();    
     var peso            = this.pesoEditor1.getDataValue(); 
     var idsalon         = 1;
     var salon           = 101;
     var idtipoinsc      = 1;
     var tipo            = "MIXTO";
          
     this.aprendizajes_asignaturaActions.setValue("idAprendizaje",idAprendizaje);
     this.aprendizajes_asignaturaActions.setValue("aprendizaje",aprendizaje);
     this.aprendizajes_asignaturaActions.setValue("learning",learning);
     this.aprendizajes_asignaturaActions.setValue("fechaEsperada",fechaEsperada);
     this.aprendizajes_asignaturaActions.setValue("ejeIdEje",ejeIdEje);
     this.aprendizajes_asignaturaActions.setValue("eje2IdEje",eje2IdEje);
     this.aprendizajes_asignaturaActions.setValue("eje3IdEje",eje3IdEje);
     this.aprendizajes_asignaturaActions.setValue("peso",peso);
     this.aprendizajes_asignaturaActions.setValue("asignatura.idAsignatura",idAsignatura);
     this.aprendizajes_asignaturaActions.setValue("asignatura.grado.idGrado",grado);
     this.aprendizajes_asignaturaActions.setValue("asignatura.grado.gradoSapiens",gradosapiens);
     this.aprendizajes_asignaturaActions.setValue("asignatura.grado.grade",grade);
     this.aprendizajes_asignaturaActions.setValue("asignatura.grado.grado",gradostr);
     this.aprendizajes_asignaturaActions.setValue("asignatura.ihA1",ih1);
     this.aprendizajes_asignaturaActions.setValue("asignatura.ihA2",ih2);
     this.aprendizajes_asignaturaActions.setValue("asignatura.ihA3",ih3);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sy.idSy",sy);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sy.schoolYear",systr);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sy.fechaDesde",fecha1);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sy.fechaHasta",fecha2);
     this.aprendizajes_asignaturaActions.setValue("dimensionComprension.idDimension",idDimension);
     this.aprendizajes_asignaturaActions.setValue("dimensionCurricular.idDimension",idDimension2);
     this.aprendizajes_asignaturaActions.setValue("dimensionComprension.dimensionComprension",idDimensionstr);//
     this.aprendizajes_asignaturaActions.setValue("dimensionCurricular.dimensionCurricular",idDimension2str);//
     this.aprendizajes_asignaturaActions.setValue("nivelEsperado.idNivelEsperado",idNivelEsperado);
     this.aprendizajes_asignaturaActions.setValue("inteligencia.idInteligencia",idInteligencia);
     this.aprendizajes_asignaturaActions.setValue("nivelEsperado.nivelEsperado",nivelEsperado);
     this.aprendizajes_asignaturaActions.setValue("inteligencia.inteligencia",inteligencia);     
     this.aprendizajes_asignaturaActions.setValue("asignatura.salonIdSalon",idsalon);
     this.aprendizajes_asignaturaActions.setValue("asignatura.tipoInscAsig.idTipoInscAsig",idtipoinsc);
     this.aprendizajes_asignaturaActions.setValue("asignatura.tipoInscAsig.tipo",tipo);        
     /**/ 
     this.aprendizajes_asignaturaActions.setValue("asignatura.asignatura",asignatura);
     this.aprendizajes_asignaturaActions.setValue("asignatura.subject",subject);
     this.aprendizajes_asignaturaActions.setValue("asignatura.electiva",electiva);
     this.aprendizajes_asignaturaActions.setValue("asignatura.a1",a1);
     this.aprendizajes_asignaturaActions.setValue("asignatura.a2",a2);
     this.aprendizajes_asignaturaActions.setValue("asignatura.a3",a3);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sa1",sa1);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sa2",sa2);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sa3",sa3);
     this.aprendizajes_asignaturaActions.setValue("asignatura.intensidadHoraria",intensidadHoraria);
     this.aprendizajes_asignaturaActions.setValue("asignatura.peso",peso);
     this.aprendizajes_asignaturaActions.setValue("asignatura.descripAsigEspaniol",descripAsigEspaniol);
     this.aprendizajes_asignaturaActions.setValue("asignatura.descripAsigIngles",descripAsigIngles);
     this.aprendizajes_asignaturaActions.setValue("asignatura.meses",meses);
     this.aprendizajes_asignaturaActions.setValue("asignatura.esperadostotal",esperadostotal);
     this.aprendizajes_asignaturaActions.setValue("asignatura.salonIdSalon",salonIdSalon);
     this.aprendizajes_asignaturaActions.setValue("nivel.idNivel",idNivel);
     this.aprendizajes_asignaturaActions.setValue("nivel.nivel",nivel);
     this.aprendizajes_asignaturaActions.setValue("nivel.levelName",levelName);
     /**/
     this.aprendizajes_asignaturaLiveForm.setDataSet(this.aprendizajes_asignaturaActions);          
     this.aprendizajes_asignaturaLiveForm.updateData();  
     
     this.idAprendizajeEditor1.setReadonly(true);
     this.fechaEsperadaEditor1.setReadonly(true);
     this.aprendizajeEditor1.setReadonly(true);
     this.learningEditor1.setReadonly(true);
     this.pesoEditor1.setReadonly(true);
     this.ejeIdEjeEditor1.setReadonly(true);
     this.eje2IdEjeEditor1.setReadonly(true);
     this.eje3IdEjeEditor1.setReadonly(true);  
     this.dimensinComprensionEditor1.setReadonly(true);
     this.dimensinCurricularEditor1.setReadonly(true);
     this.inteligenciaEditor1.setReadonly(true);
     this.nivelEsperadoEditor1.setReadonly(true);
     this.pesoEditor1.setReadonly(true);
     this.savePanel3.hide();
     this.operationPanel3.show();   
    } catch(e) {
    console.error('ERROR IN saveButton3Click: ' + e); 
    } 
  },  
  //save new learning
  saveButton4Click: function(inSender, inEvent) {
    try {
     var idAprendizaje   = this.idAprendizajeEditor1.getDataValue();
     var aprendizaje     = this.aprendizajeEditor1.getDataValue();
     var learning        = this.learningEditor1.getDataValue();
     var ejeIdEje        = this.ejeIdEjeEditor1.getDataValue();
     var eje2IdEje       = this.eje2IdEjeEditor1.getDataValue();
     var eje3IdEje       = this.eje3IdEjeEditor1.getDataValue();      
     var fechaEsperada   = new Date().getTime();
     console.log(fechaEsperada);
     var grado           = this.aprendizajes_grado.dataValue.idGrado;
     var gradosapiens    = this.aprendizajes_grado.dataValue.gradoSapiens;
     var grade           = this.aprendizajes_grado.dataValue.grade;
     var gradostr        = this.aprendizajes_grado.getDisplayValue();
     var sy              = this.aprendizajes_sy.dataValue.idSy;
     var systr           = this.aprendizajes_sy.getDisplayValue();
     var fecha1          = this.aprendizajes_sy.getDataValue().fechaDesde;
     var fecha2          = this.aprendizajes_sy.getDataValue().fechaHasta;
     var ih1             = this.aprendizajes_asignaturas.selectedItem.getData().ih1;
     var ih2             = this.aprendizajes_asignaturas.selectedItem.getData().ih2;
     var ih3             = this.aprendizajes_asignaturas.selectedItem.getData().ih3;
     var idAsignatura    = this.aprendizajes_asignaturas.selectedItem.data.id;
     /**/
     var asignatura      = this.aprendizajes_asignaturas.selectedItem.data.asignatura; 
     var subject         = this.aprendizajes_asignaturas.selectedItem.data.subject;  
     var electiva        = this.aprendizajes_asignaturas.selectedItem.data.electiva;
     var a1              = this.aprendizajes_asignaturas.selectedItem.data.a1;
     var a2              = this.aprendizajes_asignaturas.selectedItem.data.a2;
     var a3              = this.aprendizajes_asignaturas.selectedItem.data.a3;
     var sa1             = this.aprendizajes_asignaturas.selectedItem.data.sa1;
     var sa2             = this.aprendizajes_asignaturas.selectedItem.data.sa2;
     var sa3             = this.aprendizajes_asignaturas.selectedItem.data.sa3;
     var intensidadHoraria = this.aprendizajes_asignaturas.selectedItem.data.intensidadHoraria;
     var peso            = this.aprendizajes_asignaturas.selectedItem.data.intensidadHoraria;
     var descripAsigEspaniol = this.aprendizajes_asignaturas.selectedItem.data.descripAsigEspaniol;
     var descripAsigIngles= this.aprendizajes_asignaturas.selectedItem.data.descripAsigIngles;
     var meses            = this.aprendizajes_asignaturas.selectedItem.data.meses;
     var esperadostotal   = this.aprendizajes_asignaturas.selectedItem.data.esperadostotal;
     var salonIdSalon     = this.aprendizajes_asignaturas.selectedItem.data.salonIdSalon;
     var idNivel          = this.aprendizajes_asignaturas.selectedItem.data.idNivel;
     var nivel           = this.aprendizajes_asignaturas.selectedItem.data.nivel;
     var levelName       = this.aprendizajes_asignaturas.selectedItem.data.levelName;
     /**/
     var idDimension     = this.dimensinComprensionEditor1.getDataValue();
     var idDimensionstr  = this.dimensinComprensionEditor1.getDisplayValue();
     var idDimension2    = this.dimensinCurricularEditor1.getDataValue();
     var idDimension2str = this.dimensinCurricularEditor1.getDisplayValue();
     var idInteligencia  = this.inteligenciaEditor1.getDataValue();
     var idNivelEsperado = this.nivelEsperadoEditor1.getDataValue();   
     var inteligencia    = this.inteligenciaEditor1.getDisplayValue();
     var nivelEsperado   = this.nivelEsperadoEditor1.getDisplayValue(); 
     var peso            = this.pesoEditor1.getDataValue();
     var idsalon         = 1;
     var salon           = 101;
     var idtipoinsc      = 1;
     var tipo            = "MIXTO"; 

     //this.aprendizajes_asignaturaActions.setValue("idAprendizaje",idAprendizaje);
     this.aprendizajes_asignaturaActions.setValue("aprendizaje",aprendizaje);
     this.aprendizajes_asignaturaActions.setValue("learning",learning);
     this.aprendizajes_asignaturaActions.setValue("fechaEsperada",fechaEsperada);
     this.aprendizajes_asignaturaActions.setValue("ejeIdEje",ejeIdEje);
     this.aprendizajes_asignaturaActions.setValue("eje2IdEje",eje2IdEje);
     this.aprendizajes_asignaturaActions.setValue("eje3IdEje",eje3IdEje);
     this.aprendizajes_asignaturaActions.setValue("peso",peso);
     this.aprendizajes_asignaturaActions.setValue("asignatura.idAsignatura",idAsignatura);
     this.aprendizajes_asignaturaActions.setValue("asignatura.idAsignatura",idAsignatura);
     this.aprendizajes_asignaturaActions.setValue("asignatura.grado.idGrado",grado);
     this.aprendizajes_asignaturaActions.setValue("asignatura.grado.gradoSapiens",gradosapiens);
     this.aprendizajes_asignaturaActions.setValue("asignatura.grado.grade",grade);
     this.aprendizajes_asignaturaActions.setValue("asignatura.grado.grado",gradostr);
     this.aprendizajes_asignaturaActions.setValue("asignatura.ihA1",ih1);
     this.aprendizajes_asignaturaActions.setValue("asignatura.ihA2",ih2);
     this.aprendizajes_asignaturaActions.setValue("asignatura.ihA3",ih3);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sy.idSy",sy);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sy.schoolYear",systr);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sy.fechaDesde",fecha1);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sy.fechaHasta",fecha2);
     this.aprendizajes_asignaturaActions.setValue("dimensionComprension.idDimension",idDimension);
     this.aprendizajes_asignaturaActions.setValue("dimensionCurricular.idDimension",idDimension2);
     this.aprendizajes_asignaturaActions.setValue("dimensionComprension.dimensionComprension",idDimensionstr);//
     this.aprendizajes_asignaturaActions.setValue("dimensionCurricular.dimensionCurricular",idDimension2str);//
     this.aprendizajes_asignaturaActions.setValue("nivelEsperado.idNivelEsperado",idNivelEsperado);
     this.aprendizajes_asignaturaActions.setValue("inteligencia.idInteligencia",idInteligencia);
     this.aprendizajes_asignaturaActions.setValue("nivelEsperado.nivelEsperado",nivelEsperado);
     this.aprendizajes_asignaturaActions.setValue("inteligencia.inteligencia",inteligencia);
     this.aprendizajes_asignaturaActions.setValue("asignatura.salonIdSalon",idsalon);
     this.aprendizajes_asignaturaActions.setValue("asignatura.tipoInscAsig.idTipoInscAsig",idtipoinsc);
     this.aprendizajes_asignaturaActions.setValue("asignatura.tipoInscAsig.tipo",tipo);     
     this.aprendizajes_asignaturaActions.setValue("asignatura.salonIdSalon",idsalon);
     this.aprendizajes_asignaturaActions.setValue("asignatura.tipoInscAsig.idTipoInscAsig",idtipoinsc);
     this.aprendizajes_asignaturaActions.setValue("asignatura.tipoInscAsig.tipo",tipo);    
     /**/ 
     this.aprendizajes_asignaturaActions.setValue("asignatura.asignatura",asignatura);
     this.aprendizajes_asignaturaActions.setValue("asignatura.subject",subject);
     this.aprendizajes_asignaturaActions.setValue("asignatura.electiva",electiva);
     this.aprendizajes_asignaturaActions.setValue("asignatura.a1",a1);
     this.aprendizajes_asignaturaActions.setValue("asignatura.a2",a2);
     this.aprendizajes_asignaturaActions.setValue("asignatura.a3",a3);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sa1",sa1);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sa2",sa2);
     this.aprendizajes_asignaturaActions.setValue("asignatura.sa3",sa3);
     this.aprendizajes_asignaturaActions.setValue("asignatura.intensidadHoraria",intensidadHoraria);
     this.aprendizajes_asignaturaActions.setValue("asignatura.peso",peso);
     this.aprendizajes_asignaturaActions.setValue("asignatura.descripAsigEspaniol",descripAsigEspaniol);
     this.aprendizajes_asignaturaActions.setValue("asignatura.descripAsigIngles",descripAsigIngles);
     this.aprendizajes_asignaturaActions.setValue("asignatura.meses",meses);
     this.aprendizajes_asignaturaActions.setValue("asignatura.esperadostotal",esperadostotal);
     this.aprendizajes_asignaturaActions.setValue("asignatura.salonIdSalon",salonIdSalon);
     this.aprendizajes_asignaturaActions.setValue("nivel.idNivel",idNivel);
     this.aprendizajes_asignaturaActions.setValue("nivel.nivel",nivel);
     this.aprendizajes_asignaturaActions.setValue("nivel.levelName",levelName);
     /**/ 
     this.aprendizajes_asignaturaLiveForm.setDataSet(this.aprendizajes_asignaturaActions);          
     this.aprendizajes_asignaturaLiveForm.insertData();  
     
     this.idAprendizajeEditor1.setReadonly(true);
     this.fechaEsperadaEditor1.setReadonly(true);
     this.aprendizajeEditor1.setReadonly(true);
     this.learningEditor1.setReadonly(true);
     this.pesoEditor1.setReadonly(true);
     this.ejeIdEjeEditor1.setReadonly(true);
     this.eje2IdEjeEditor1.setReadonly(true);
     this.eje3IdEjeEditor1.setReadonly(true);  
     this.dimensinComprensionEditor1.setReadonly(true);
     this.dimensinCurricularEditor1.setReadonly(true);
     this.inteligenciaEditor1.setReadonly(true);
     this.nivelEsperadoEditor1.setReadonly(true);
     this.pesoEditor1.setReadonly(true);
          
     this.savePanel3.hide();
     this.operationPanel3.show();        
    } catch(e) {
      console.error('ERROR IN saveButton4Click: ' + e); 
    } 
  },
  aprendizajes_asignaturaLiveFormSuccess: function(inSender, inData) {
     this.aprendizajesAsignaturaLV.update(); 
  },
  deleteButton3Click: function(inSender, inEvent) {
  try{
     var idAprendizaje   = this.aprendizajes_aprendizajes.selectedItem.data.idAprendizaje;
     var r = confirm("¿Esta acción no se puede revertir. Desea eliminar este aprendizaje?");
     if (r == true) {
         this.deleteLearningsSV.input.setValue("ida", idAprendizaje);
         this.deleteLearningsSV.update(); 
     } else {
         alert("Operación cancelada.");
     }          
     this.idAprendizajeEditor1.clear();
     this.fechaEsperadaEditor1.clear();
     this.aprendizajeEditor1.clear();
     this.learningEditor1.clear();
     this.pesoEditor1.clear();
     this.ejeIdEjeEditor1.clear();
     this.eje2IdEjeEditor1.clear();
     this.eje3IdEjeEditor1.clear(); 
     this.dimensinComprensionEditor1.clear();
     this.dimensinCurricularEditor1.clear();
     this.inteligenciaEditor1.clear();
     this.nivelEsperadoEditor1.clear();
     this.pesoEditor1.clear();     
     this.idAprendizajeEditor1.setReadonly(true);
     this.fechaEsperadaEditor1.setReadonly(true);
     this.aprendizajeEditor1.setReadonly(true);
     this.learningEditor1.setReadonly(true);
     this.pesoEditor1.setReadonly(true);
     this.ejeIdEjeEditor1.setReadonly(true);
     this.eje2IdEjeEditor1.setReadonly(true);
     this.eje3IdEjeEditor1.setReadonly(true);  
     this.dimensinComprensionEditor1.setReadonly(true);
     this.dimensinCurricularEditor1.setReadonly(true);
     this.inteligenciaEditor1.setReadonly(true);
     this.nivelEsperadoEditor1.setReadonly(true);
     this.pesoEditor1.setReadonly(true);

     this.savePanel3.hide();
     this.operationPanel3.show();  
     } catch(e) {
      console.error('ERROR IN deleteButton3Click: ' + e); 
    }
  }, 
  deleteLearningsSVSuccess: function(inSender, inDeprecated) {
     this.aprendizajesAsignaturaLV.update(); 
     
     var idAprendizaje   = this.idAprendizajeEditor1.getDataValue();
     var aprendizaje     = this.aprendizajeEditor1.getDataValue();
     var learning        = this.learningEditor1.getDataValue();
     var ejeIdEje        = this.ejeIdEjeEditor1.getDataValue();
     var eje2IdEje       = this.eje2IdEjeEditor1.getDataValue();
     var eje3IdEje       = this.eje3IdEjeEditor1.getDataValue();      
     var fechaEsperada   = main.pageSubjects.page.fechaEsperadaEditor1.getDataValue();
     var idAsignatura    = this.aprendizajes_asignaturas.selectedItem.data.id;
     var idDimension     = this.dimensinComprensionEditor1.getDataValue();
     var idDimension2    = this.dimensinCurricularEditor1.getDataValue();
     var idInteligencia  = this.inteligenciaEditor1.getDataValue();
     var idNivelEsperado = this.nivelEsperadoEditor1.getDataValue();   
     var peso            = this.pesoEditor1.getDataValue();  
     
     var now             = new Date().getTime(); 
     var accion          = "accion: borrar > idAprendizaje >"+idAprendizaje+" idAsignatura >"+idAsignatura+" aprendizaje >"+aprendizaje+" learning> "+learning+" ejes >"+ejeIdEje+"-"+eje2IdEje+"-"+eje3IdEje+" dimension_comp >"+idDimension+" >dimension curr >"+idDimension2+" > idInteligencia >"+idInteligencia+" > idNivelEsperado > "+idNivelEsperado+" peso >"+peso+" fechaEsperada > "+fechaEsperada;
     var username        = main.a_getUserName.getData().dataValue;  
     this.insertLogData.setValue("usuario", username);
     this.insertLogData.setValue("tablaAfectada", "AprendizajesAsig");
     this.insertLogData.setValue("accionRealizada", accion);
     this.insertLogData.setValue("fechaCreacion", now);
     this.insertLogDocentesForm.setDataSet(this.insertLogData);          
     this.insertLogDocentesForm.insertData();       
  },
  aprendizajes_buttonClick: function(inSender, inEvent) {
     this.axis.hide();
     this.areas.hide();
     this.docentes.hide();
     this.subjects.hide();
     this.learnings.show();
     
     this.curdate = new Date().getTime();
     this.a_cursy.input.setValue("f1",this.curdate); 
     this.a_cursy.update();
  },
  aprendizajes_asignaturaLiveFormInsertData: function(inSender) {
    try {
     var idAprendizaje   = this.idAprendizajeEditor1.getDataValue();
     var aprendizaje     = this.aprendizajeEditor1.getDataValue();
     var learning        = this.learningEditor1.getDataValue();
     var ejeIdEje        = this.ejeIdEjeEditor1.getDataValue();
     var eje2IdEje       = this.eje2IdEjeEditor1.getDataValue();
     var eje3IdEje       = this.eje3IdEjeEditor1.getDataValue();      
     var fechaEsperada   = main.pageSubjects.page.fechaEsperadaEditor1.getDataValue();
     var idAsignatura    = this.aprendizajes_asignaturas.selectedItem.data.id;
     var idDimension     = this.dimensinComprensionEditor1.getDataValue();
     var idDimension2    = this.dimensinCurricularEditor1.getDataValue();
     var idInteligencia  = this.inteligenciaEditor1.getDataValue();
     var idNivelEsperado = this.nivelEsperadoEditor1.getDataValue();   
     var peso            = this.pesoEditor1.getDataValue();  
     
     var now             = new Date().getTime(); 
     var accion          = "accion: crear > idAprendizaje >"+idAprendizaje+" idAsignatura >"+idAsignatura+" aprendizaje >"+aprendizaje+" learning> "+learning+" ejes >"+ejeIdEje+"-"+eje2IdEje+"-"+eje3IdEje+" dimension_comp >"+idDimension+" >dimension curr >"+idDimension2+" > idInteligencia >"+idInteligencia+" > idNivelEsperado > "+idNivelEsperado+" peso >"+peso+" fechaEsperada > "+fechaEsperada;
     var username        = main.a_getUserName.getData().dataValue;  
     this.insertLogData.setValue("usuario", username);
     this.insertLogData.setValue("tablaAfectada", "AprendizajesAsig");
     this.insertLogData.setValue("accionRealizada", accion);
     this.insertLogData.setValue("fechaCreacion", now);
     this.insertLogDocentesForm.setDataSet(this.insertLogData);          
     this.insertLogDocentesForm.insertData(); 
      
    } catch(e) {
      console.error('ERROR IN aprendizajes_asignaturaLiveFormInsertData: ' + e); 
    } 
  },
  aprendizajes_asignaturaLiveFormUpdateData: function(inSender) {
    try {
     var idAprendizaje   = this.idAprendizajeEditor1.getDataValue();
     var aprendizaje     = this.aprendizajeEditor1.getDataValue();
     var learning        = this.learningEditor1.getDataValue();
     var ejeIdEje        = this.ejeIdEjeEditor1.getDataValue();
     var eje2IdEje       = this.eje2IdEjeEditor1.getDataValue();
     var eje3IdEje       = this.eje3IdEjeEditor1.getDataValue();      
     var fechaEsperada   = main.pageSubjects.page.fechaEsperadaEditor1.getDataValue();
     var idAsignatura    = this.aprendizajes_asignaturas.selectedItem.data.id;
     var idDimension     = this.dimensinComprensionEditor1.getDataValue();
     var idDimension2    = this.dimensinCurricularEditor1.getDataValue();
     var idInteligencia  = this.inteligenciaEditor1.getDataValue();
     var idNivelEsperado = this.nivelEsperadoEditor1.getDataValue();   
     var peso            = this.pesoEditor1.getDataValue();  
     
     var now             = new Date().getTime(); 
     var accion          = "accion: actualizar > idAprendizaje >"+idAprendizaje+" idAsignatura >"+idAsignatura+" aprendizaje >"+aprendizaje+" learning> "+learning+" ejes >"+ejeIdEje+"-"+eje2IdEje+"-"+eje3IdEje+" dimension_comp >"+idDimension+" >dimension curr >"+idDimension2+" > idInteligencia >"+idInteligencia+" > idNivelEsperado > "+idNivelEsperado+" peso >"+peso+" fechaEsperada > "+fechaEsperada;
     var username        = main.a_getUserName.getData().dataValue;  
     this.insertLogData.setValue("usuario", username);
     this.insertLogData.setValue("tablaAfectada", "AprendizajesAsig");
     this.insertLogData.setValue("accionRealizada", accion);
     this.insertLogData.setValue("fechaCreacion", now);
     this.insertLogDocentesForm.setDataSet(this.insertLogData);          
     this.insertLogDocentesForm.insertData();        
    } catch(e) {
      console.error('ERROR IN aprendizajes_asignaturaLiveFormUpdateData: ' + e); 
    } 
  },
  insertLogDocentesFormSuccess: function(inSender, inData) {
     this.idAprendizajeEditor1.clear();
     this.fechaEsperadaEditor1.clear();
     this.aprendizajeEditor1.clear();
     this.learningEditor1.clear();
     this.pesoEditor1.clear();
     this.ejeIdEjeEditor1.clear();
     this.eje2IdEjeEditor1.clear();
     this.eje3IdEjeEditor1.clear(); 
     this.dimensinComprensionEditor1.clear();
     this.dimensinCurricularEditor1.clear();
     this.inteligenciaEditor1.clear();
     this.nivelEsperadoEditor1.clear();
     this.pesoEditor1.clear(); 
  },
  aprendizajes_gradoChange: function(inSender, inDisplayValue, inDataValue) {  
     this.cancelButton3Click(); 
     var idgrado= this.aprendizajes_grado.dataValue.idGrado;
     var idsy   = this.aprendizajes_sy.dataValue.idSy;
     this.aprendizajes_asignaturas_sv.input.setValue("_grado", idgrado);
     this.aprendizajes_asignaturas_sv.input.setValue("_sy", idsy);
     this.aprendizajes_asignaturas_sv.update();      
  },
  inscCursoAsigSvSuccess: function(inSender, inDeprecated) {
     var count=  this.inscCursoAsigSv.getCount();
     this.perfiles_docentes_total.setCaption("Existe(n)  "+count+" perfil(es) de docente(s)");
  },
  aprendizajes_asignaturasSelectionChange: function(inSender) {
     this.cancelButton3Click();  
  },
  _end: 0
});