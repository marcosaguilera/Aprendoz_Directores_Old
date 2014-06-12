
/*js aprendoz directores*/

Date.prototype.getWeek = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

/*****************************/

dojo.declare("Main", wm.Page, {
  start: function() {
    this.curdate = new Date().getTime();
    main.a_cursy.input.setValue("f1",this.curdate);
    main.a_cursy.update();
  
  dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");    
  wm.DataGrid.extend({
  setDisabled: function(inDisabled) { dojo[inDisabled ? "addClass" : "removeClass"](this.domNode, "wmgrid-disabled");}
    });   
  },
 
  mySessionExpiredMethod: function() {
      /*alert("Aviso importante: Sesión expirada \n\n"+"Su sesión ha excedido el tiempo de inactividad permitido en la aplicación. Por favor ingrese nuevamente.");*/
      window.location.reload();
  },  
  cur_encabezado_sel_syChange: function(inSender, inDisplayValue, inDataValue) {
      this.l_cur_asig_asignaturas_vista_docentes_asignaturas.update();
      this.l_cur_unid_unidades_unidadLiveVariable1.clearData();
      this.l_cur_subt_subtopicos_subtopicoLiveVariable1.clearData();
      this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
      this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
      this.l_cur_act_actividades_actividadLiveVariable1.clearData();
      this.l_cur_act_actividades_actividadLiveVariable1.clearData();
  },  
  cur_encabezado_sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
      var grado= this.cur_encabezado_sel_grado.getDataValue();
      var json= this.a_cursy.getItem(0);
      this.sy = json.data.sy;
      this.schoolyear = json.data.idsy;
      this.l_cur_asig_asignaturas_vista_docentes_asignaturas2.input.setValue("pidsy", this.schoolyear);
      this.l_cur_asig_asignaturas_vista_docentes_asignaturas2.input.setValue("pidgrado", grado);
      this.l_cur_asig_asignaturas_vista_docentes_asignaturas2.update();
      this.l_cur_unid_unidades_unidadLiveVariable1.clearData();
      this.l_cur_subt_subtopicos_subtopicoLiveVariable1.clearData();
      this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
      this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
      this.l_cur_act_actividades_actividadLiveVariable1.clearData();
      this.l_cur_rec_recursos_recursoLiveVariable1.clearData();
  },
  cur_encabezado_butt_restaurarClick: function(inSender, inEvent) {
      this.cur_encabezado_sel_grado.clear();
      this.cur_encabezado_sel_sy.clear();
      this.l_cur_asig_asignaturas_vista_docentes_asignaturas.clearData();
      this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
      this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
      this.l_cur_unid_unidades_unidadLiveVariable1.clearData();
      this.l_cur_subt_subtopicos_subtopicoLiveVariable1.clearData();
      this.l_cur_act_actividades_actividadLiveVariable1.clearData();
      this.l_cur_rec_recursos_recursoLiveVariable1.clearData();
  },
  asignaturaDataGrid1RowDblClick: function(inSender, inEvent) {
      this.iraformularios.update();
      this.cur_formularios_panel_unidad.hide();
      this.cur_formularios_panel_subtopico.hide();
      this.cur_formularios_panel_aprendizaje.hide();
      this.cur_formularios_panel_otrasmetas.hide();
      this.cur_formularios_panel_actividad.hide();
      this.cur_formularios_panel_recurso.hide();
      this.asignaturaDetailsPanel.show();
  },
  cur_act_datag_actividadDataGrid1RowDblClick: function(inSender, inEvent) {
      this.iraformularios.update();     
      this.cur_formularios_panel_otrasmetas.hide();
      this.cur_formularios_panel_recurso.hide();
      this.cur_formularios_panel_unidad.hide();
      this.cur_formularios_panel_subtopico.hide();
      this.cur_formularios_panel_aprendizaje.hide();
      this.cur_formularios_panel_actividad.show();   
  },

  cur_encabezado3_butt_crear_subtopico_1Click: function(inSender, inEvent) {
       this.cur_subt_datag_subtopicoDataGrid1RowDblClick(inSender, inEvent);
       this.editPanel5.beginDataInsert();
  },
  
  bSubtopicoClick: function(inSender, inEvent) {
    try {
      this.iraFormulario2.update();
      this.aprendizajeDetailsPanel2.hide();     
      this.asignaturaDetailsPanel2.hide();
      this.unidadDetalles.hide();
      this.subtopicoDetailsPanel2.show();
      this.editPanel18.beginDataInsert();
      
    } catch(e) {
      console.error('ERROR IN button2Click: ' + e); 
    } 
  },
  
otrasmetasLiveForm1BeginInsert: function(inSender) {
    try {
      this.subtopicoLookup1.setValue("dataValue",this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().idSubtopico);
      
    } catch(e) {
      console.error('ERROR IN otrasmetasLiveForm1BeginInsert: ' + e); 
    } 
  },
 
  actividadLiveForm1BeginInsert: function(inSender) {
    try {
       this.subtopicoLookup3.setValue("dataValue",this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().idSubtopico);
      
    } catch(e) {
      console.error('ERROR IN actividadLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  recursoLiveForm2BeginInsert: function(inSender) {
    try {
      this.subtopicoLookup4.setValue("dataValue",this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().idSubtopico);
      
    } catch(e) {
      console.error('ERROR IN recursoLiveForm2BeginInsert: ' + e); 
    } 
  },
  
  asignaturaDataGrid1CellClick: function(inSender, inEvent) {
    try {
      this.cur_encabezado2_butt_crea_unidad.enable();
     
      
    } catch(e) {
      console.error('ERROR IN asignaturaDataGrid1CellClick: ' + e); 
    } 
  },
  
   nivel_encabezado_butt_restaurarClick: function(inSender, inEvent) {
    try {
      this.selectEditor24.clear();
      this.asignaturaLiveVariable1.update();
      this.unidadLiveVariable2.clearData();
      this.subtopicoLiveVariable2.clearData();
      this.aprendizajeLiveVariable2.clearData();
      this.otrasmetasLiveVariable2.clearData();      
      this.actividadLiveVariable2.clearData();
      this.recursoLiveVariable2.clearData();
      
    } catch(e) {
      console.error('ERROR IN button8Click: ' + e); 
    } 
  },
  
  recursosClick: function(inSender, inEvent) {
    try {
      window.open("http://aprendoz.rochester.edu.co/ckfinder/ckfinder.html","popup");
      
        } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    } 
  },
  
  calif_encabezado_opciones_butt_limpiarClick: function(inSender, inEvent) {
    try {
      this.calif_encabezado_opciones_sel_sy.clear();
      this.calif_encabezado_opciones_sel_grado.clear();
      this.calif_encabezado_opciones_sel_curso.clear();
      this.l_calif_contenedor_tablas_asignaturas_docentes.clearData();
      this.l_calif_contenedor_tablas_aprendizajes.clearData();
      this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.clearData();
      this.l_calif_contenedor_tablas_calificacion_final.clearData();
      this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.clearData();          
      
    } catch(e) {
      console.error('ERROR IN calif_encabezado_opciones_butt_limpiarClick: ' + e); 
    } 
  },
  
  dataGrid1Selected: function(inSender, inIndex) {
    try {
      this.aux2.setValue("dataValue",this.dataGrid1.selectedItem.getData().persona.idPersona);
      this.newButton8.enable();
      
    } catch(e) {
      console.error('ERROR IN dataGrid1Selected: ' + e); 
    } 
  },
  
  historialcalificacionesLiveForm1BeginInsert: function(inSender) {
    try {
      this.fechaIngresoEditor2.setDataValue(new Date());
      this.calificacionNumEditor2.setValue("dataValue","0");
      this.inscAlumAprendizajeLookup1.setValue("dataValue",this.inscalumaprendizajeDataGrid1.selectedItem.getData().idInscAlumAprendizaje);
      
    } catch(e) {
      console.error('ERROR IN historialcalificacionesLiveForm1BeginInsert: ' + e); 
    } 
  },

  layer11Show: function(inSender) {
    try {
      this.historialcalificacionesLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN layer11Show: ' + e); 
    } 
  },
  
  inscalumaprendizajeDataGrid1AfterRender: function(inSender) {
    try {
      this.inscalumaprendizajeDataGrid1.select(0);
    
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeDataGrid1AfterRender: ' + e); 
    } 
  },
  
  calif_encabezado_opciones_sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
    try {    
      var grado= this.calif_encabezado_opciones_sel_grado.getDataValue();
      var json= this.a_cursy.getItem(0);
      this.sy = json.data.sy;
      this.schoolyear = json.data.idsy;
      if(this.calif_encabezado_opciones_sel_grado.dataValue== null || this.calif_encabezado_opciones_sel_grado.dataValue==405){
         this.calif_encabezado_opciones_sel_curso.disable();
              
       }else{
           this.calif_encabezado_opciones_sel_curso.enable();
           this.l_calif_encabezado_opciones_listaCursos.update();
       }
      this.l_calif_contenedor_tablas_asignaturas_docentes.filter.setValue("id.syIdSy",this.schoolyear);
      this.l_calif_contenedor_tablas_asignaturas_docentes.filter.setValue("id.gradoIdGrado",grado);
      this.l_calif_contenedor_tablas_asignaturas_docentes.update();
      this.l_calif_contenedor_tablas_aprendizajes.clearData();
      this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.clearData();
      this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.clearData();
      this.l_calif_contenedor_tablas_calificacion_final.clearData();          
      
    } catch(e) {
      console.error('ERROR IN calif_encabezado_opciones_sel_gradoChange: ' + e); 
    } 
  },
  
  inscalumaprendizajeLiveForm1BeginInsert: function(inSender) {
      var usuario= main.a_getUserName.getData().dataValue;
      this.calif_alumnos_curso_datag_alumnosDataGrid1.setDisabled(true);
      this.calif_asig_datag_aprendizajesDataGrid1.setDisabled(true);
      this.fechaIngresoEditor2.disable();
      this.fechaIngresoEditor2.setDataValue(new Date());
      this.calificacionNumEditor2.setValue("dataValue","0");
      this.aprendizajeLookup1.setValue("dataValue",this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.idAprendizaje);
      this.personaLookup1.setValue("dataValue",this.calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.getData().id.personaIdPersona); 
      this.usuarioRegistroCalificacion.setReadonly(true);
      this.usuarioRegistroCalificacion.setDataValue(usuario);
  },
  inscalumaprendizajeLiveForm1BeginUpdate: function(inSender) {
      var usuario= main.a_getUserName.getData().dataValue;
      this.personas.setDisabled(true);
      this.tablaAprendizajes.setDisabled(true);
      this.fechaIngresoEditor2.disable();
      this.fechaIngresoEditor2.setDataValue(new Date());
      this.usuarioRegistroCalificacion.setReadonly(true);
      this.usuarioRegistroCalificacion.setDataValue(usuario);
  },  
  tipoActividadLookup1Change: function(inSender, inDisplayValue, inDataValue) {
      if(this.tipoActividadLookup1.displayValue=="Retroalimentación"){
         this.tipoDesempenoLookup1.setDataValue(undefined);
         this.tipoDesempenoLookup1.disable();
         this.tipoValoracionLookup1.enable();         
         }else{
             this.tipoValoracionLookup1.setDataValue(undefined);
             this.tipoValoracionLookup1.disable();
             this.tipoDesempenoLookup1.enable();            
         }     
  },  
  listaGRADOSChange: function(inSender, inDisplayValue, inDataValue) {
        this.asignaturaLV1.update();
        this.cursoslv1.update();      
  },  
  asignaturas1Selected: function(inSender, inIndex) {
      this.asig1.setValue("dataValue",this.asignaturas1.selectedItem.getData().asignatura);      
  },  
  curso1Selected: function(inSender, inIndex) {
      this.cursost1.setValue("dataValue",this.curso1.selectedItem.getData().curso);        
  }, 
  inscalumaprendizajeLiveForm2BeginInsert: function(inSender) {
      var user= main.a_getUserName.getData().dataValue;
      /*acciones sobre la tabla de Calificacion por estudiante*/  
      this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(true);
      this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(true);
      this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(true);    
      /*fin de las acciones*/
      this.fechaIngresoEditor3.setDataValue(new Date());
      this.calificacionNumEditor3.setValue("dataValue","0");      this.aprendizajeLookup3.setValue("dataValue",this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.getData().id.idAprendizaje);
      this.personaLookup3.setValue("dataValue",this.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona);
      this.docenteRegistroCalifEstudiante.setDataValue(user);
      this.docenteRegistroCalifEstudiante.setReadonly(true);
  },

  button12Click: function(inSender, inEvent){
      var json= this.a_cursy.getItem(0);
      this.idsy = json.data.idsy;
      var idgardo= this.calif_encabezado_opciones_sel_grado.getDataValue();
      var idcurso= this.calif_encabezado_opciones_sel_curso.getDataValue();
      if(idgardo != undefined && idcurso!= undefined ){
        this.l_calif_alumnos_alumnosCursos.filter.setValue("id.idSy",this.idsy);
        this.l_calif_alumnos_alumnosCursos.filter.setValue("id.idCurso",idcurso);
        this.l_calif_alumnos_alumnosCursos.update();
        this.l_calif_alumnos_butt_ocultar.hide();
        this.l_calif_alumnos_butt_mostrar.hide();
        this.calif_panel_contenedor_promocion.hide();
        this.actividades.hide();
        this.calif_panel_contenedor_aprendizaje.hide();
        this.calif_panel_contenedor_alumnos.show();
        this.calif_alumnos_panel1_butt_hide.show();
        this.calif_alumnos_panel1_butt_show.show();
        this.fotoEstd.show();
      }else{
        this.l_calif_alumnos_butt_ocultar.hide();
        this.l_calif_alumnos_butt_mostrar.hide();
        this.calif_panel_contenedor_promocion.hide();
        this.actividades.hide();
        this.calif_panel_contenedor_aprendizaje.hide();
        this.calif_panel_contenedor_alumnos.show();
        this.calif_alumnos_panel1_butt_hide.show();
        this.calif_alumnos_panel1_butt_show.show();
        this.fotoEstd.show();
      }
  },
  
  l_calif_alumnos_panel1_butt_cambiarPanelClick: function(inSender, inEvent) {
      this.calif_alumnos_panel1_butt_show.hide();
      this.calif_alumnos_panel1_butt_hide.hide();
      this.calif_panel_contenedor_alumnos.hide();
      this.calif_panel_contenedor_promocion.hide();
      this.actividades.hide();
      this.fotoEstd.hide();
      this.calf_panel_encabezado_opciones.show();
      this.calif_panel_contenedor_aprendizaje.show();
      this.l_calif_alumnos_butt_ocultar.show();
      this.l_calif_alumnos_butt_mostrar.show();      
  },
  
  calif_alumnos_datagrids_datag_alumnos_cursosSelected: function(inSender, inIndex) {
      var json= this.a_cursy.getItem(0);
      this.sy = json.data.sy;
      this.schoolyear = json.data.idsy;
      var codigo= main.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.codigo;
      main.imgstd.setSource("http://www.rochester.edu.co/fotosestudiantes/"+codigo+".Jpeg"); 
      var idp= this.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona;     
      this.l_calif_alumnos_alumnos_asignaturas.input.setValue("idpersona", idp);
      this.l_calif_alumnos_alumnos_asignaturas.input.setValue("idsyp", this.schoolyear);
      this.l_calif_alumnos_alumnos_asignaturas.update();
      this.calif_encabezado_opciones_butt_reporte_pendientes.enable();
  },
  
  listaGRADO2Change: function(inSender, inDisplayValue, inDataValue) {
      this.asignaturasLV2.update();
      this.cursoslv2.update(); 
  },
  
  asignaturas2Selected: function(inSender, inIndex) {
    try {
      this.asig2.setValue("dataValue",this.asignaturas2.selectedItem.getData().asignatura); 
      
    } catch(e) {
      console.error('ERROR IN asignaturas2Selected: ' + e); 
    } 
  },
  
  curso2Selected: function(inSender, inIndex) {
    try {
      this.cursost2.setValue("dataValue",this.curso2.selectedItem.getData().curso);   
      
    } catch(e) {
      console.error('ERROR IN curso2Selected: ' + e); 
    } 
  },
  
  layer27Show: function(inSender) {
    try {
      this.aux2.setValue(Demografica.personaDataGrid1.selectedItem.getData().codigo);
      
    } catch(e) {
      console.error('ERROR IN layer27Show: ' + e); 
    } 
  },

  button15Click: function(inSender, inEvent) {
    try {
      url= "services/reporteGrado.download?method=getReport&idGrado="+this.grado1.getDataValue()+"&idGrado2="+this.grado2.getDataValue();
           window.open(url,"_BLANK");
       
    } catch(e) {
      console.error('ERROR IN button15Click: ' + e); 
    } 
  },
 
  inscalumaprendizajeDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
      this.editPanel9.beginDataUpdate();
      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeDataGrid1RowDblClick: ' + e); 
    } 
  },

  l_calif_alumnos_panel1_butt_promocionClick: function(inSender, inEvent) {
    try {
      this.calif_panel_contenedor_alumnos.hide();
      this.actividades.hide();
      this.calf_panel_encabezado_opciones.hide();
      this.calif_panel_contenedor_aprendizaje.hide();
      this.calif_panel_contenedor_promocion.show();

    } catch(e) {
      console.error('ERROR IN button21Click: ' + e); 
    }},
  calif_asig_datag_aprendizajesDataGrid1Selected: function(inSender, inIndex) {
    try {
      if(this.calif_asig_datag_aprendizajesDataGrid1.getEmptySelection()== true || this.calif_alumnos_curso_datag_alumnosDataGrid1.getEmptySelection()== true){
         this.mensaje_parpadeante.show();
       
       }else if(this.calif_asig_datag_aprendizajesDataGrid1.getEmptySelection()== false && this.calif_alumnos_curso_datag_alumnosDataGrid1.getEmptySelection()== false){        
           this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.update();
           this.l_calif_contenedor_tablas_calificacion_final.update();
           this.mensaje_parpadeante.hide();
       }
      
      this.calif_contenedor_tex_cadena.setValue("dataValue", "Unidad » " + this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.unidad +"  •   "+ "   Subtopico »" +     this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.subtopico);
      
    } catch(e) {
      console.error('ERROR IN calif_asig_datag_aprendizajesDataGrid1Selected: ' + e); 
    } 
  },
  
  calif_alumnos_curso_datag_alumnosDataGrid1Selected: function(inSender, inIndex) {
    try {
      if(this.calif_alumnos_curso_datag_alumnosDataGrid1.getEmptySelection()== true  ||  this.calif_asig_datag_aprendizajesDataGrid1.getEmptySelection()== true){
         this.mensaje_parpadeante.show();
       
       }else if(this.calif_asig_datag_aprendizajesDataGrid1.getEmptySelection()== false && this.calif_alumnos_curso_datag_alumnosDataGrid1.getEmptySelection()== false){
          this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.update();
          this.l_calif_contenedor_tablas_calificacion_final.update();
          this.mensaje_parpadeante.hide();
       }
            
    } catch(e) {
      console.error('ERROR IN personasSelected: ' + e); 
    } 
  },
  
 asignaturaSelected: function(inSender, inIndex) {
    try {
      this.aux13.setValue("dataValue", this.asignatura.selectedItem.getData().asignatura.idAsignatura);
      
    } catch(e) {
      console.error('ERROR IN asignaturaSelected: ' + e); 
    } 
  },

  dataGrid4Selected: function(inSender, inIndex) {
    try {
    this.aux103.setValue("dataValue", this.dataGrid4.selectedItem.getData().codigo);
    this.aux104.setValue("dataValue", "1");
    
    } catch(e) {
      console.error('ERROR IN dataGrid4Selected: ' + e); 
    } 
  },
  
  button36Click: function(inSender, inEvent) {
    try {
      this.inscalumactividadLiveVariable1.clearData();
      this.ACTIVIDADESLV3.clearData();
      this.INSALUCUR.clearData();
      this.asignaturaLV1.clearData();
      this.selectEditor19.clear();
      this.selectEditor18.clear();
      this.selectEditor17.clear();
      
    } catch(e) {
      console.error('ERROR IN button36Click: ' + e); 
    } 
  },

  picture7Click: function(inSender) {
    try {
      window.print();
      
    } catch(e) {
      console.error('ERROR IN picture7Click: ' + e); 
    } 
  },

  aux25Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.aux25.dataValue=1){
       //formulario unidades
       main.operationPanel4.setShowing(false);
      }
      if (this.aux25.dataValue=2){
       //formulario unidades
       main.operationPanel4.setShowing(true);
         
      }
      
    } catch(e) {
      console.error('ERROR IN numberEditor2Change: ' + e); 
    } 
  },
  
  button10Click: function(inSender, inEvent) {
    try {
     // window.open("http://aprendoz.rochester.edu.co/ckfinder/ckfinder.html");
      this.asignaturaLV1.update();
      this.INSALUCUR.update();
    
    } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    } 
  },
  
  selectEditor17Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     this.cursoslv1.update();
 
    } catch(e) {
      console.error('ERROR IN selectEditor17Change: ' + e); 
    } 
  },
  
  inscalumactividadLiveForm1BeginInsert: function(inSender) {
    try {
      this.actividadLookup1.setValue("dataValue", this.dataGrid5.selectedItem.getData().idActividad);
      this.personaLookup4.setValue("dataValue", this.actAlumnos.selectedItem.getData().persona.idPersona);
      
    } catch(e) {
      console.error('ERROR IN inscalumactividadLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  asistenciaShow: function(inSender) {
    try {
      app.listaSY.update();
      app.listaGrado.update();
      
    } catch(e) {
      console.error('ERROR IN layer43Show: ' + e); 
    } 
  },

  calificacionEditor2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.calificacionEditor2.dataValue=="En Progreso"){
        this.calificacionNumEditor2.setValue("dataValue", "0.3")
      }     
      if(this.calificacionEditor2.dataValue=="Competente"){
        this.calificacionNumEditor2.setValue("dataValue", "1")
      }     
      if(this.calificacionEditor2.dataValue=="Avanzado"){
        this.calificacionNumEditor2.setValue("dataValue", "1.3")
      }     
      if(this.calificacionEditor2.dataValue=="Magistral"){
        this.calificacionNumEditor2.setValue("dataValue", "1.6")
      }     
      
    } catch(e) {
      console.error('ERROR IN calificacionEditor2Change: ' + e); 
    } 
  },
  
  calif_contenedor_img_limpiarClick: function(inSender) {
    try {
      this.calif_contenedor_sel_Genero.clear();
      this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.update();
      
    } catch(e) {
      console.error('ERROR IN picture8Click: ' + e); 
    } 
  },
  
  GradoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.l_inscrip_panel_lista_cursos.update();
      this.l_inscrip_panel_VistaAsignaturas.update();
      this.inscalumasigLiveVariable1.clearData();
      this.estudiantesInscAsig.clearData();
      
    } catch(e) {
      console.error('ERROR IN GradoChange: ' + e); 
    } 
  },
  
  inscalumasigLiveForm1BeginInsert: function(inSender) {
    try {
      this.calificacionEditor4.setDataValue(0);
      this.porcentajeEditor1.setDataValue(0);
      this.esperadosEditor1.setDataValue(0);
      this.logradosEditor1.setDataValue(0);
      this.califCharEditor1.setDataValue(0);
      this.periodoLookup1.setValue("displayValue", "2012-2013");
      this.asignaturaLookup5.setValue("dataValue", this.Asignatura.selectedItem.getData().id.idAsignatura);
      this.personaLookup6.setValue("dataValue", this.Estudiante.selectedItem.getData().id.idPersona);
       
    } catch(e) {
      console.error('ERROR IN inscalumasigLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  button39Click: function(inSender, inEvent) {
    try {
      this.calf_panel_encabezado_opciones.hide();
      this.calif_panel_contenedor_aprendizaje.hide();
      this.calif_panel_contenedor_alumnos.hide();
      this.calif_panel_contenedor_promocion.hide();
      this.actividades.show();
      
    } catch(e) {
      console.error('ERROR IN button39Click: ' + e); 
    } 
  },
  
  button40Click: function(inSender, inEvent) {
    try {
      this.actividades.hide();
      this.selectEditor7.show();
      this.selectEditor4.show();
      this.cursos.show();
      this.button9.show();
      this.aprendizaje.show();
      
    } catch(e) {
      console.error('ERROR IN button40Click: ' + e); 
    } 
  },
 
  informes_fuckersShow: function(inSender) {
    try {
      this.RLVGrados.update(); 
      
    } catch(e) {
      console.error('ERROR IN layer16Show: ' + e); 
    } 
  },
 
  calificaTodosClick: function(inSender, inEvent) {
    try {
      this.sp_insertar_actividades.update();
      this.editPanel12.cancelEdit();

    } catch(e) {
      console.error('ERROR IN calificaTodosClick: ' + e); 
    } 
  },
  
  picture9Click: function(inSender) {
    try {
      this.actAlumnos.clearSelection();
      this.inscalumactividadLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN picture9Click: ' + e); 
    } 
  },
  button48Click: function(inSender, inEvent) {
    try {
      url= "services/dirNivel2.download?method=getReport&ida="+this.tablaAsignaturas.selectedItem.getData().idAsignatura+"&idc="+this.cursos.getDataValue();;  
      window.open(url,"_BLANK");   
      
    } catch(e) {
      console.error('ERROR IN button48Click: ' + e); 
    } 
  },
  
  gestionShow: function(inSender) {
    try {
      this.ls_Area1.update();
      this.ls_Area2.update();
      this.ls_Area3.update();
      this.lv_subarea1.update();
      
    } catch(e) {
      console.error('ERROR IN layer29Show: ' + e); 
    } 
  },
  asignaturaDataGrid2RowDblClick: function(inSender, inEvent) {
    try {
      this.editPanel11.beginDataUpdate();
      
    } catch(e) {
      console.error('ERROR IN asignaturaDataGrid2RowDblClick: ' + e); 
    } 
  },
  inscalumaprendizajeLiveForm1Success: function(inSender, inData) {
    try {
      this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.update();
      this.calif_asig_datag_aprendizajesDataGrid1.setDisabled(false);
      this.calif_alumnos_curso_datag_alumnosDataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm1Success: ' + e); 
    } 
  },
 
  calif_encabezado_opciones_butt_reporteClick: function(inSender, inEvent) {
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var idc = this.calif_encabezado_opciones_sel_curso.getDataValue();
      var ida = this.calif_asig_datag_asignaturasDataGrid1.selectedItem.getData().id.asignaturaIdAsignatura;
      var formatType= "PDF";
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/DOC002",
               format: formatType,
               params: { curso: idc, asignatura: ida }
         }
       });
       inEvent.preventDefault(); 
  },
  
  calificacionEditor3Change: function(inSender, inDisplayValue, inDataValue) {
      if(this.calificacionEditor3.dataValue=="En Progreso"){
        this.calificacionNumEditor3.setValue("dataValue", "0.3");
      }     
      if(this.calificacionEditor3.dataValue=="Competente"){
        this.calificacionNumEditor3.setValue("dataValue", "1");
      }     
      if(this.calificacionEditor3.dataValue=="Avanzado"){
        this.calificacionNumEditor3.setValue("dataValue", "1.3");
      }     
      if(this.calificacionEditor3.dataValue=="Magistral"){
        this.calificacionNumEditor3.setValue("dataValue", "1.6");
      }     
  },
  liveForm4BeginInsert: function(inSender) {
    try {
      this.unidadLookup2.setValue("dataValue",this.unidadDataGrid2.selectedItem.getData().idUnidad);
      
    } catch(e) {
      console.error('ERROR IN liveForm4BeginInsert: ' + e); 
    } 
  },  
  aprendizajeDataGrid2RowDblClick: function(inSender, inEvent) {
      this.iraFormulario2.update();
      this.unidadDetalles.hide();
      this.subtopicoDetailsPanel2.hide();
      this.aprendizajeDetailsPanel2.show();
      this.l_dirNivel_formulario_aprendizaje_lista_Ejes.update();
  },  
  nivel_encabezado_butt_reporte_asignaturaClick: function(inSender, inEvent) {
      url= "services/catalogoAsignaturas.download?method=getReport&ida="+this.asignaturaDataGrid4.selectedItem.getData().idAsignatura;  
      window.open(url,"_BLANK");   
  },
  
  cur_encabezado_butt_reporte1Click: function(inSender, inEvent) {
    try {
      url= "services/catalogoAsignaturas.download?method=getReport&ida="+this.cur_asig_datag_asignaturasDataGrid1.selectedItem.getData().id.asignaturaIdAsignatura;  
      window.open(url,"_BLANK");   

    } catch(e) {
      console.error('ERROR IN cur_encabezado_butt_reporte1Click: ' + e); 
    } 
  },

  generar7Click: function(inSender, inEvent) {
    try {
      url= "services/s319.download?method=getReport&c1="+this.rep_select_1.getDataValue()+"&c2="+this.rep_select_2.getDataValue()+"&idp="+this.rep_select_3.getDataValue();
      window.open(url,"_BLANK");  
      
    } catch(e) {
      console.error('ERROR IN generar7Click: ' + e); 
    } 
  },
  
  generar8Click: function(inSender, inEvent) {
    try {
      url= "services/s317.download?method=getReport&idp="+this.rep_select_cantidad.getDataValue()+"&num_asig="+this.rep_select_periodo.getDataValue();
      window.open(url,"_BLANK");
      
    } catch(e) {
      console.error('ERROR IN generar8Click: ' + e); 
    } 
  },

  dataGridAlumnosSelected: function(inSender, inIndex) {
    try {
      this.rep_box1.setValue("dataValue",this.dataGridAlumnos.selectedItem.getData().persona.idPersona);
      this.rep_box2.setValue("dataValue",this.dataGridAlumnos.selectedItem.getData().sy.idSy);
      
    } catch(e) {
      console.error('ERROR IN dataGridAlumnosSelected: ' + e); 
    } 
  },
  
  dataGridAlumnos1Selected: function(inSender, inIndex) {
    try {
      this.rep_box3.setValue("dataValue", this.dataGridAlumnos1.selectedItem.getData().persona.idPersona);
      
    } catch(e) {
      console.error('ERROR IN dataGridAlumnos1Selected: ' + e); 
    } 
  },

  calif_asig_datag_asignaturasDataGrid1Selected: function(inSender, inIndex) {
    try {         
      this.l_calif_contenedor_tablas_aprendizajes.update();
      this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.update();
         
      if(this.calif_asig_datag_asignaturasDataGrid1.getEmptySelection()== false && this.calif_encabezado_opciones_sel_curso.getDataValue()!== null){
        this.calif_encabezado_opciones_butt_reporte.enable();
            
        } 
                          
    } catch(e) {
      console.error('ERROR IN tablaAsignaturasSelected: ' + e); 
    } 
  },

  ausencias_select2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.ausencias_select2.dataValue=="1"){
        this.layerGrado.hide();
        this.layerCursos.show();
            
      }
      if(this.ausencias_select2.dataValue=="2"){
            this.layerCursos.hide();
            this.layerGrado.show();
      }
      if(this.ausencias_select2.dataValue=="3"){
             
      }
      if(this.ausencias_select2.dataValue=="4"){
                     
      }
      
    } catch(e) {
      console.error('ERROR IN ausencias_select2Change: ' + e); 
    } 
  },
  bAusentesClick: function(inSender, inEvent) {
    try {
      if(this.ausencias_select2.dataValue=="1"){
        url= "services/s3119.download?method=getReport&idCurso="+this.selectEditor31.getDataValue()+"&fecha="+this.ausencias_select1.getDataValue()+"&Curso="+this.selectEditor31.getDisplayValue();
        window.open(url,"_BLANK");        
      }
      if(this.ausencias_select2.dataValue=="2"){
        url= "services/s3119b.download?method=getReport&idGrado="+this.selectEditor32.getDataValue()+"&fecha="+this.ausencias_select1.getDataValue()+"&Grado="+this.selectEditor32.getDisplayValue();
        window.open(url,"_BLANK");     
      }
      if(this.ausencias_select2.dataValue=="3"){
             
      }
      if(this.ausencias_select2.dataValue=="4"){
                     
      }
      
    } catch(e) {
      console.error('ERROR IN button61Click: ' + e); 
    } 
  },
  
  inscalumaprendizajeLiveForm1CancelEdit: function(inSender) {
    try {
      this.calif_alumnos_curso_datag_alumnosDataGrid1.setDisabled(false);
      this.calif_asig_datag_aprendizajesDataGrid1.setDisabled(false);
        
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm1CancelEdit: ' + e); 
    } 
  },
  
  calif_alumnos_curso_datag_alumnosDataGrid1SelectionChanged: function(inSender) {
    try {
      this.editPanel9.cancelEdit();
 
    } catch(e) {
      console.error('ERROR IN personasSelectionChanged: ' + e); 
    } 
  },
  
  calif_asig_datag_aprendizajesDataGrid1SelectionChanged: function(inSender) {
    try {
      this.editPanel9.cancelEdit();
      
    } catch(e) {
      console.error('ERROR IN calif_asig_datag_aprendizajesDataGrid1SelectionChanged ' + e); 
    } 
  },
  liveForm3BeginInsert: function(inSender) {
      this.subtopicoLookup8.setValue("dataValue", this.subtopicoDataGrid2.selectedItem.getData().idSubtopico);
  },  
  inscalumaprendizajeLiveForm2CancelEdit: function(inSender) {
      this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(false);
      this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(false);
      this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(false);
  },  
  calif_alumnos_datagrids_datag_alumnos_asignaturasSelectionChanged: function(inSender) {
      this.editPanel10.cancelEdit();
  },  
  calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelectionChanged: function(inSender) {
      this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.clearData();
      this.l_calif_alumnos_calificaciones_finales.clearData();
      this.editPanel10.cancelEdit();
  },  
  inscalumaprendizajeLiveForm2Success: function(inSender, inData) {
      this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.update();
      this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(false);
      this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(false);
      this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(false);
  },
  bCrearUnidadClick: function(inSender, inEvent) {
      this.iraFormulario2.update();
      this.aprendizajeDetailsPanel2.hide();
      this.subtopicoDetailsPanel2.hide()
      this.unidadDetalles.show();
      this.editPanel15.beginDataInsert();
  },
  liveForm2BeginInsert: function(inSender) {
      this.asignaturaLookup4.setValue("dataValue", this.asignaturaDataGrid4.selectedItem.getData().idAsignatura);
  }, 
  calif_alumnos_datagrids_datag_alumnos_cursosSelectionChanged: function(inSender) {
      this.l_calif_alumnos_aprendizajes.clearData();
      this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.clearData();
      this.l_calif_alumnos_calificaciones_finales.clearData();
      this.editPanel10.cancelEdit();
  },  
  inscalumaprendizajeLiveForm2BeginUpdate: function(inSender) {
      var user= main.a_getUserName.getData().dataValue;
      this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(true);
      this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(true);
      this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(true);
      this.docenteRegistroCalifEstudiante.setDataValue(user);
      this.docenteRegistroCalifEstudiante.setReadonly(true);
  },  
  apredizajesSelected: function(inSender, inIndex) {
      this.inscalumaprendizajeLiveVariable1.update();
      this.calif_finales.update();
  },  
  calificacionesShow: function(inSender) {
      //var sy_actual= this.a_cursy.getItem(0).data.sy;
      //this.calif_encabezado_opciones_sel_grado.setDisplayValue(sy_actual);
      this.l_calif_encabezado_opciones_listaCursos.update();
  },

 
/***********
 * Empieza implementaciones para loading popup
 * 
 ***********/
 
  l_cur_formularios_aprendizajes_listaEjesBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaEjesBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaEjesSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
       this.l_cur_formularios_aprendizajes_listaDimension_comprension.update();
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaEjesSuccess: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaDimension_comprensionBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaDimension_comprensionBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaDimension_comprensionSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading_message");
       this.l_cur_formularios_aprendizajes_listaDimension_curricular.update();
        
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaDimension_comprensionSuccess: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaDimension_curricularBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
        
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaDimension_curricularBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaDimension_curricularSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading_message");
       this.l_cur_formularios_aprendizajes_listaInteligencias.update();  
           
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaDimension_curricularSuccess: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaInteligenciasBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaInteligenciasBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaInteligenciasSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaInteligenciasSuccess: ' + e); 
    } 
  },
  l_cur_formularios_actividad_listaTipoActividadesBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
         
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_actividad_listaTipoActividadesBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_actividad_listaTipoActividadesSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      this.l_cur_formularios_actividad_listaTipoValoracion.update();
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_actividad_listaTipoActividadesSuccess: ' + e); 
    } 
  },
  l_cur_formularios_actividad_listaTipoValoracionBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_actividad_listaTipoValoracionBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_actividad_listaTipoValoracionSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      this.l_cur_formularios_actividad_listaTipoDesempeno.update();
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_actividad_listaTipoValoracionSuccess: ' + e); 
    } 
  },
  
  l_cur_formularios_recursos_tipoRecursoBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_recursos_tipoRecursoBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_recursos_tipoRecursoSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_recursos_tipoRecursoSuccess: ' + e); 
    } 
  },
/***********
 *FIN implementaciones para loading popup
 ***********/

  calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelected: function(inSender, inIndex) {
    try {
      this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.update();
      this.l_calif_alumnos_calificaciones_finales.update();
      
    } catch(e) {
      console.error('ERROR IN calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelected: ' + e); 
    } 
  },

  calif_encabezado_opciones_sel_cursoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      var json= this.a_cursy.getItem(0);
      this.sy = json.data.sy;
      this.schoolyear = json.data.idsy;
      var idgardo= this.calif_encabezado_opciones_sel_grado.getDataValue();
      var idcurso= this.calif_encabezado_opciones_sel_curso.getDataValue();      
      this.calif_asig_datag_asignaturasDataGrid1.clearSelection();
      this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.clearData();
      this.l_calif_contenedor_tablas_aprendizajes.clearData();
      this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.clearData();
      this.l_calif_contenedor_tablas_calificacion_final.clearData(); 
      this.l_calif_alumnos_alumnosCursos.filter.setValue("id.idSy",this.schoolyear);
      this.l_calif_alumnos_alumnosCursos.filter.setValue("id.idCurso",idcurso);
      this.l_calif_alumnos_alumnosCursos.update();
                    
    } catch(e) {
      console.error('ERROR IN calif_encabezado_opciones_sel_cursoChange: ' + e); 
    } 
  },
  
  l_calif_alumnos_butt_ocultarClick: function(inSender, inEvent) {
    try {
      this.calif_asig_datag_asignaturasDataGrid1.hide();      
        
    } catch(e) {
      console.error('ERROR IN l_calif_alumnos_panel1Click: ' + e); 
    } 
  },
  
  l_calif_alumnos_butt_mostrarClick: function(inSender, inEvent) {
      this.calif_asig_datag_asignaturasDataGrid1.show();
  },

  calif_encabezado_opciones_butt_limpiar1Click: function(inSender, inEvent) {
    try {
      this.cur_encabezado_tex_ldapUser.clear();
      
    } catch(e) {
      console.error('ERROR IN calif_encabezado_opciones_butt_limpiar1Click: ' + e); 
    } 
  },
  
  calif_asig_datag_asignaturasDataGrid1Deselected: function(inSender, inIndex) {
    try {
      if(this.calif_asig_datag_asignaturasDataGrid1.getEmptySelection()== true || this.calif_encabezado_opciones_sel_curso.getDataValue()== null){
        this.calif_encabezado_opciones_butt_reporte.disable();
             
      }
      
    } catch(e) {
      console.error('ERROR IN calif_asig_datag_asignaturasDataGrid1Deselected: ' + e); 
    } 
  },
  
 /*
  *Carga de listas DIRECTORES DE NIVEL
  */
  
  l_dirNivel_formulario_aprendizaje_lista_EjesBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_EjesBeforeUpdate: ' + e); 
    } 
  },
  
  l_dirNivel_formulario_aprendizaje_lista_EjesSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading_message");
       this.l_dirNivel_formulario_aprendizaje_lista_domension_comprension.update();
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_EjesSuccess: ' + e); 
    } 
  },
  
  l_dirNivel_formulario_aprendizaje_lista_domension_comprensionBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_domension_comprensionBeforeUpdate: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_domension_comprensionSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      this.l_dirNivel_formulario_aprendizaje_lista_domension_curricular.update();
       
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_domension_comprensionSuccess: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_domension_curricularBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_domension_curricularBeforeUpdate: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_domension_curricularSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      this.l_dirNivel_formulario_aprendizaje_lista_inteligencia.update();
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_domension_curricularSuccess: ' + e); 
    } 
  },
  
  
  l_dirNivel_formulario_aprendizaje_lista_inteligenciaBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_inteligenciaBeforeUpdate: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_inteligenciaSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_inteligenciaSuccess: ' + e); 
    } 
  },
 /*
  *
  *fin procesos de carga
  *
  */
  promocionLiveForm1BeginInsert: function(inSender) {
    try {
      this.personaLookup2.setValue("dataValue", this.promocion_container_datag_personas_x_curso.selectedItem.getData().id.idPersona);
      this.syLookup1.enable();
      this.calificacionEditor5.enable();
      this.calificacionCharEditor1.enable();
      this.promocion_container_datag_personas_x_curso.setDisabled(true);
      this.promocionDataGrid1.setDisabled(true);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1BeginInsert: ' + e); 
    } 
  },
  /*
  *
  *inicio detalles acciones promociones
  */
  aprobadoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.aprobadoEditor1.dataValue== true){
        this.promovidoEditor1.enable();
        this.commentpromovidoEditor1.enable();
      }else{
        this.promovidoEditor1.disable();
        this.commentpromovidoEditor1.disable();
      }
      
    } catch(e) {
      console.error('ERROR IN aprobadoEditor1Change: ' + e); 
    } 
  },
  promocion_butt_limpiarClick: function(inSender, inEvent) {
      this.promocion_sel_ao_escolar.setDataValue(3);
      this.promocion_sel_grado.clear();
      this.promocion_sel_curso.clear();
      this.l_promocion_insc_alum_curso.clearData();
      this.l_promocion_promocionLiveVariable1.clearData();
  },
  
  a_lista_sySuccess: function(inSender, inDeprecated) {
      this.promocion_sel_ao_escolar.setDataValue(3);
  },
  
  a_getUserNameSuccess: function(inSender, inDeprecated) {
      var userName = this.aux_getNameUser.getDataValue(); 
      this.a_informacionUsuario.input.setValue("user",userName);
      this.a_informacionUsuario.update();
      this.a_getLastAccess.input.setValue("user",userName); 
      this.a_getLastAccess.update();
  },
  
  promocionDataGrid1Selected: function(inSender, inIndex) {
      var _aprobado= this.aprobadoEditor1.dataValue;
  },
  
  promocionLiveForm1BeginUpdate: function(inSender) {
    try {
      this.promocion_container_datag_personas_x_curso.setDisabled(true);
      this.promocionDataGrid1.setDisabled(true);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1BeginUpdate: ' + e); 
    }},
  promocionLiveForm1UpdateData: function(inSender) {
    try {
      this.promocion_container_datag_personas_x_curso.setDisabled(false);
      this.promocionDataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1UpdateData: ' + e); 
    }},
  promocionLiveForm1CancelEdit: function(inSender) {
    try {
      this.promocion_container_datag_personas_x_curso.setDisabled(false);
      this.promocionDataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1CancelEdit: ' + e); 
    }},
  promocionLiveForm1InsertData: function(inSender) {
    try {
      this.promocion_container_datag_personas_x_curso.setDisabled(false);
      this.promocionDataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1InsertData: ' + e); 
    }},
  promocion_container_datag_personas_x_cursoSelectionChanged: function(inSender) {
    try {
      this.editPanel3.cancelEdit();
      
    } catch(e) {
      console.error('ERROR IN promocion_container_datag_personas_x_cursoSelectionChanged: ' + e); 
    }},
  promocionDataGrid1SelectionChanged: function(inSender) {
    try {
      this.editPanel3.cancelEdit();
      
    } catch(e) {
      console.error('ERROR IN promocionDataGrid1SelectionChanged: ' + e); 
    } 
  },
  promocion_sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
      this.l_promocion_curso.update();
      this.l_promocion_insc_alum_curso.clearData();
      this.l_promocion_promocionLiveVariable1.clearData();
  },
  multiReporteResult: function(inSender, inDeprecated) {
      this.html1.setValue("html","<iframe width='100%' name='reportes1' id='reportes1' src='"+window.location.href+inDeprecated+"'>");   
  },
  
  bienvenida_inputFullNameChange: function(inSender, inDisplayValue, inDataValue) {
      this.a_getCompleteName.update();
  },
  a_getCompleteNameSuccess: function(inSender, inDeprecated) {
      var nombre1= main.a_getCompleteName.getData().nombre1;
      var nombre2= main.a_getCompleteName.getData().nombre2;
      var apellido1= main.a_getCompleteName.getData().apellido1;
      var apellido2= main.a_getCompleteName.getData().apellido2;
      this.bienvenida_fullname.setCaption("BIENVENIDO, "+nombre1+" "+nombre2+" "+apellido1+" "+apellido2);
  },
  unidadLiveForm1InsertData: function(inSender) {
      this.numeroUnidadEditor1.hide();
      this.numeroUnidadEditor2.show();

  },
  unidadLiveForm1UpdateData: function(inSender) {
      this.numeroUnidadEditor1.hide();
      this.numeroUnidadEditor2.show();
  },
  a_informacionUsuarioSuccess: function(inSender, inDeprecated) {
      var datosHql = main.a_informacionUsuario.getItem(0);
      var tipoPersona= datosHql.data.tipoPersona;      
      var nombre1 = datosHql.data.nombre1;
      var nombre2 = datosHql.data.nombre2;
      var nombres= nombre1+" "+nombre2;
      var apellido1= datosHql.data.apellido1; 
      var apellido2= datosHql.data.apellido2;
      var apellidos= apellido1+" "+apellido2;
      var usuario= datosHql.data.usuario;
      var clave= datosHql.data.clave;
      var idp = datosHql.data.idpersona;
      this.inicio_box_tipo_persona.setDataValue(tipoPersona);
      this.inicio_box_nombre.setDataValue(nombres);
      this.inicio_box_apellido.setDataValue(apellidos);
      this.inicio_box_usuario.setDataValue(usuario);
      this.inicio_box_clave.setDataValue(clave);
      this.inicio_box_reclave.setDataValue(clave);
      this.inicio_box_id_persona.setDataValue(idp);
       
       if( main.a_isAuthenticated.getData().dataValue == true){
         this.a_logInsertRecords.setValue("persona.idPersona", this.inicio_box_id_persona.getDataValue());
         this.a_logInsertRecords.setValue("fechaIngreso", this.inicio_box_fecha.getDataValue());
         this.a_logInsertRecords.setValue("horaIngreso", this.inicio_box_hora.getDataValue());

         this.logForm.setDataSet(this.a_logInsertRecords);          
         this.logForm.insertData();
         
       }
  },
  inicio_forgot_passwordClick: function(inSender, inEvent) {
      this.inicio_panel_boton_actualizar.show();
      this.inicio_box_clave.setReadonly(false);
      this.inicio_box_reclave.setReadonly(false);
      this.inicio_boton_actualiza.disable();
  },
  inicio_box_claveChange: function(inSender, inDisplayValue, inDataValue) {
      if(this.inicio_box_clave.dataValue == this.inicio_box_reclave.dataValue){
        this.inicio_bad_label.hide();
        this.inicio_ok_label.show();
        this.inicio_boton_actualiza.enable();
      
      }else if(this.inicio_box_clave.dataValue != this.inicio_box_reclave.dataValue){  
        this.inicio_ok_label.hide();
        this.inicio_bad_label.show();
        this.inicio_boton_actualiza.disable();
      }
  }, 
  inicio_box_reclaveChange: function(inSender, inDisplayValue, inDataValue) {
      if(this.inicio_box_clave.dataValue == this.inicio_box_reclave.dataValue){
        this.inicio_bad_label.hide();
        this.inicio_ok_label.show();
        this.inicio_boton_actualiza.enable();
      
      }else if(this.inicio_box_clave.dataValue != this.inicio_box_reclave.dataValue){  
        this.inicio_ok_label.hide();
        this.inicio_bad_label.show();
        this.inicio_boton_actualiza.disable();
      }
  },
  inicio_boton_cancelarClick: function(inSender, inEvent) {
      this.inicio_box_clave.setReadonly(true);
      this.inicio_box_reclave.setReadonly(true);
      this.inicio_panel_boton_actualizar.hide();
  },
  a_actualizaClaveSuccess: function(inSender, inDeprecated) {
      alert("Su contraseña ha sido actualizada exitosamente.");
      this.inicio_box_clave.setReadonly(true);
      this.inicio_box_reclave.setReadonly(true);
  },
  a_actualizaClaveError: function(inSender, inError) {
      alert("No ha sido posible realizar la operación.");
  },
  inicio_abrir_preferencias1Click: function(inSender, inEvent) {
      this.inicio_filtros_claves.show();
  },
  inicio_cerrar_preferenciasClick: function(inSender, inEvent) {
      this.inicio_filtros_claves.hide();
  },
  pestana_reportes_seguimientoShow: function(inSender) {
      var jsonobject= main.a_informacionUsuario.getItem(0);
      var rol = jsonobject.data.idtipo;
      var idpersona = jsonobject.data.idpersona;
      var valueToFilter = rol;
      var valuePersona = idpersona;
      this.l_reportes_graficos_listado_reportes.filter.setValue("id.idTipoPersona", valueToFilter);
      this.l_reportes_graficos_listado_reportes.filter.setValue("id.idPersona", valuePersona);
      this.l_reportes_graficos_listado_reportes.update();
  },
  reports_open_report_windowClick: function(inSender, inEvent) {    
      app.pageDialog.showPage("Reportes", false, 790, 600);
      var descripcion= main.reportes_graficos_listado_reportes.selectedItem.getData().id.reporte;
      var codigoRep = main.reportes_graficos_listado_reportes.selectedItem.getData().id.codigo;
      app.pageDialog.page.reporte_descrip_general.setCaption("<b>DETALLES DEL REPORTE SELECCIONADO</b>"+"<br/>CODIGO REPORTE: "+codigoRep+"<br/>"+descripcion);
      
      if(codigoRep=="REC001"){
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.p2.show();
      app.pageDialog.page.p1.show();
      app.pageDialog.page.f1_label.setCaption("Fecha inicial");
      app.pageDialog.page.f2_label.setCaption("Fecha final");
      app.pageDialog.page.fecha1_dt.show();
      app.pageDialog.page.fecha2_dt.show();

      }
      if(codigoRep=="REC002"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.show();
      }
      
      if(codigoRep=="REC003"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.show();
      }
      
      if(codigoRep=="REC004"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.p2.show();
      app.pageDialog.page.p1.show();
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.semana_box.hide();  
      app.pageDialog.page.f1_label.setCaption("Desde");
      app.pageDialog.page.f1_label.show();
      app.pageDialog.page.f2_label.setCaption("Hasta");
      app.pageDialog.page.f2_label.show();
      app.pageDialog.page.search_user_complex_box.show();
      app.pageDialog.page.alumnosDataGrid.setShowing(true);  
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.idp_box.show();
      app.pageDialog.page.fecha1_dt.show();
      app.pageDialog.page.fecha2_dt.show();
      app.pageDialog.page.alumnosDataGrid.setShowing(true);  
      }
      
      if(codigoRep=="REC005"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.nivel_box.show();
      }
      
      if(codigoRep=="REC006"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(true);  
      app.pageDialog.page.idp_box.show();
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.search_user_complex_box.show();
      app.pageDialog.page.alumnosDataGrid.setShowing(true);  
      }

      if(codigoRep=="REC007"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.periodo_box.show();
      app.pageDialog.page.num_asig_bajo.show();
      app.pageDialog.page.nivel_box.show();
      }
      
      if(codigoRep=="REC008"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);     
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.periodo_box.show();
      app.pageDialog.page.desde_curso_box.show();
      app.pageDialog.page.hasta_curso_box.show();
      }

      if(codigoRep=="REC009"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);     
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.periodo_box.show();
      app.pageDialog.page.grado_box.show();
      }
      
      if(codigoRep=="REC010"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.numero_mes.hide();  
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);      
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.periodo_box.show();   
      app.pageDialog.page.p1.show();
      app.pageDialog.page.f1_label.setCaption("Aprendizajes con fecha esperada antes o igual a");
      app.pageDialog.page.f1_label.show();
      app.pageDialog.page.fecha1_dt.show(); 
      app.pageDialog.page.desde_curso_box.setCaption("Curso deaseado");
      app.pageDialog.page.desde_curso_box.show(); 
      app.pageDialog.page.puntaje.show(); 
      app.pageDialog.page.puntaje_max.show(); 
      app.pageDialog.page.num_asig_bajo.show();
      }
      
      if(codigoRep=="REC012"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.a_area.update();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);     
      app.pageDialog.page.num_asig_bajo.hide();   
      app.pageDialog.page.numero_mes.hide();    
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.grado_box.show();
      app.pageDialog.page.grado_box2.show();
      app.pageDialog.page.area_box.show();  
      }
      
      if(codigoRep=="REC013"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);      
      app.pageDialog.page.num_asig_bajo.hide(); 
      app.pageDialog.page.numero_mes.hide();      
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.sy_box.show();
      } 
      
      if(codigoRep=="REC014"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);      
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.sy_box.show();
      } 
      
      if(codigoRep=="REC015"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.show();
      
      } 
      
      if(codigoRep=="REC024"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);    
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.desde_curso_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.show();
      app.pageDialog.page.f1_label.setCaption("Aprendizajes con fecha esperada antes o igual a");
      app.pageDialog.page.f1_label.show();
      app.pageDialog.page.nivel_esperado.show(); 
      app.pageDialog.page.fecha1_dt.show();           
      app.pageDialog.page.peso_aprendizaje.show(); 
      app.pageDialog.page.a_grado.update();    
      } 
      
      if(codigoRep=="REC025"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.fecha1_dt.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      } 
      
      if(codigoRep=="REC026"){  
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.fecha1_dt.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.grado_box.show();
      } 

      if(codigoRep=="REC027"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();   
      app.pageDialog.page.puntaje_max.hide();   
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.hide();      
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.fecha1_dt.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.alumnosDataGrid.setShowing(false); 
      app.pageDialog.page.idp_box.hide(); 
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.puntaje.show();
      app.pageDialog.page.num_asig_bajo.show();  
      app.pageDialog.page.nivel_box.show(); 
      app.pageDialog.page.periodo_box.show(); 
      } 

      if(codigoRep=="REC028"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();   
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.show();
      app.pageDialog.page.numero_mes.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.grado_box.hide();     
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.f1_label.show(); 
      app.pageDialog.page.f1_label.setCaption("Seleccione una fecha"); 
      app.pageDialog.page.fecha1_dt.show();  
      app.pageDialog.page.alumnosDataGrid.setShowing(true); 
      app.pageDialog.page.idp_box.show();  
      app.pageDialog.page.search_user_complex_box.show();
      } 

      if(codigoRep=="DOC001"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();    
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();      
      app.pageDialog.page.alumnosDataGrid.hide();    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.semana_box.show();
      app.pageDialog.page.desde_curso_box.show();
      app.pageDialog.page.hasta_curso_box.show();

      }
      if(codigoRep=="EVE002"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();    
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();      
      app.pageDialog.page.alumnosDataGrid.hide();    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.show();
      
      }
      if(codigoRep=="EVE003"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();    
      app.pageDialog.page.numero_mes.hide();         
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.search_user_complex_box.show();      
      app.pageDialog.page.alumnosDataGrid.show();
      app.pageDialog.page.idp_box.show();    
      
      }
      if(codigoRep=="EVE004"){ 
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();      
      app.pageDialog.page.alumnosDataGrid.hide();    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.tipoeventualidad.show();
      app.pageDialog.page.numero_eventualidades.show();
      app.pageDialog.page.idp_box.hide();  
      
      }
      if(codigoRep=="EVE005"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();    
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();      
      app.pageDialog.page.alumnosDataGrid.hide();    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      }
      if(codigoRep=="DOC009"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();   
      app.pageDialog.page.puntaje_max.hide();   
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.hide();      
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.fecha1_dt.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.alumnosDataGrid.setShowing(false); 
      app.pageDialog.page.idp_box.hide(); 
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.puntaje.hide();
      app.pageDialog.page.num_asig_bajo.hide(); 
      app.pageDialog.page.periodo_box.hide();  
      app.pageDialog.page.nivel_box.show();       
      } 
      if(codigoRep=="REC035"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.puntaje_max.hide(); 
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);      
      app.pageDialog.page.num_asig_bajo.hide(); 
      app.pageDialog.page.numero_mes.hide();      
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.area_box.hide();
      app.pageDialog.page.grado_box2.hide();
      app.pageDialog.page.sy_box.show();
      } 
  },
  reportes_graficos_listado_reportesSelected: function(inSender, inIndex) {
     this.reports_open_report_window.enable();
  },
  reportes_graficos_listado_reportesDeselected: function(inSender, inIndex) {
     this.reports_open_report_window.disable();  
  },
  a_getLastAccessSuccess: function(inSender, inDeprecated) {
      var json= main.a_getLastAccess.getItem(0);
      var fechaUltimoAcceso= json.data.lastdate;
      this.lastAccess_Label.setCaption("Último acceso: <br/>"+fechaUltimoAcceso);
  },   
  codigoReporteChange: function(inSender, inDisplayValue, inDataValue) {
     var _codigo= this.codigoReporte.getDataValue();
     this.l_reportes_graficos_listado_reportes.filter.setValue("id.codigo", _codigo);
     this.l_reportes_graficos_listado_reportes.update();  
  },
  reporteChange: function(inSender, inDisplayValue, inDataValue) {
     var _reporte= this.reporte.getDataValue();
     this.l_reportes_graficos_listado_reportes.filter.setValue("id.reporte", _reporte);
     this.l_reportes_graficos_listado_reportes.update(); 
  },
  calif_alumnos_datagrids_datag_alumnos_asignaturasSelected: function(inSender, inIndex) {
     var idasignatura= this.calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.getData().idasignatura;
     this.l_calif_alumnos_aprendizajes.filter.setValue("id.asignaturaIdAsignatura", idasignatura); 
     this.l_calif_alumnos_aprendizajes.update();  
  },
  calif_alumnos_panel1_butt_showClick: function(inSender, inEvent) {     
     this.calif_alumnos_datagrids_datag_alumnos_cursos.hide(); 
  },
  calif_alumnos_panel1_butt_hideClick: function(inSender, inEvent) {
     this.calif_alumnos_datagrids_datag_alumnos_cursos.show(); 
  },
  a_cursySuccess: function(inSender, inDeprecated) {
     var json= this.a_cursy.getItem(0);
     this.sy = json.data.sy;
     this.bievenida_sy.setCaption(this.sy);
    
  },
  cur_act_datag_actividadDataGrid1Selected: function(inSender, inIndex) {    
     this.l_cur_formularios_actividad_listaTipoActividades.update();
     this.l_cur_formularios_actividad_listaTipoValoracion.update();
     this.editar_actividad.enable();
     this.ver_actividad.enable();
  },
  /*Curriculo*/
  /*--->Asignatura*/ 
  cur_asig_datag_asignaturasDataGrid1Selected: function(inSender, inIndex) {
      var idasignatura= this.cur_asig_datag_asignaturasDataGrid1.selectedItem.getData().idasignatura;                  this.l_cur_unid_unidades_unidadLiveVariable1.filter.setValue("asignatura.idAsignatura",idasignatura);
      this.l_cur_unid_unidades_unidadLiveVariable1.update();  
      this.getAxisService.input.setValue("ida",idasignatura);      
      this.l_cur_subt_subtopicos_subtopicoLiveVariable1.clearData();
      this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
      this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
      this.l_cur_act_actividades_actividadLiveVariable1.clearData();
      this.l_cur_rec_recursos_recursoLiveVariable1.clearData();
      this.crear_unidad.enable();       
      this.getAxisService.update();           
  },
  cur_asig_datag_asignaturasDataGrid1SelectionChanged: function(inSender) {
      this.editar_unidad.disable();
      this.ver_unidad.disable();
  },
  /*-->unidades*/ 
  cur_unid_datag_unidadesDataGrid1Selected: function(inSender, inIndex) {
      var idunidad= this.cur_unid_datag_unidadesDataGrid1.selectedItem.getData().idUnidad;
      this.editar_unidad.enable();
      this.ver_unidad.enable(); 
      this.crear_subtopico_1.enable();
      var numeroUnidad= this.cur_unid_datag_unidadesDataGrid1.selectedItem.getData().numeroUnidad;
      this.numeroUnidadEditor1.setDataValue(""+numeroUnidad+"");
      this.l_cur_subt_subtopicos_subtopicoLiveVariable1.filter.setValue("unidad.idUnidad",idunidad);
      this.l_cur_subt_subtopicos_subtopicoLiveVariable1.update();
      
      this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
      this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
      this.l_cur_act_actividades_actividadLiveVariable1.clearData();
      this.l_cur_rec_recursos_recursoLiveVariable1.clearData();
  },
  unidadLiveForm1BeginUpdate: function(inSender) {
      var numeroUnidad= this.cur_unid_datag_unidadesDataGrid1.selectedItem.getData().numeroUnidad;
      this.numeroUnidadEditor1.setDataValue(""+numeroUnidad+"");  
  },
  unidadLiveForm1CancelEdit: function(inSender) {
    var numeroUnidad= this.cur_unid_datag_unidadesDataGrid1.selectedItem.getData().numeroUnidad;
    this.numeroUnidadEditor1.setDataValue(""+numeroUnidad+"");  
  },
  crear_unidadClick: function(inSender, inEvent) {
      $("#main_panel_unidades").animate(
        {width:'100%'}
       );
      this.editPanel4.beginDataInsert(); 
      this.unidadLiveForm1.setWidth("528px");
      this.bigUnitPanel.setWidth("528px");
      this.top_close.setWidth("528px");
  },
  editar_unidadClick: function(inSender, inEvent) {
      $("#main_panel_unidades").animate(
        {width:'100%'}
       );
      this.editPanel4.beginDataUpdate(); 
      this.unidadLiveForm1.setWidth("528px");
      this.bigUnitPanel.setWidth("528px");
      this.top_close.setWidth("528px");
  },
  ver_unidadClick: function(inSender, inEvent) {
     // this.editPanel4.cancelEdit();
      $("#main_panel_unidades").animate(
        {width:'100%'}
       );
      this.unidadLiveForm1.setWidth("528px");
      this.bigUnitPanel.setWidth("528px");
      this.top_close.setWidth("528px");
  },
  close_panelClick: function(inSender, inEvent) {
     $("#main_panel_unidades").animate(
        {width:'0px'}
       );
      this.unidadLiveForm1.setWidth("528px");
      this.bigUnitPanel.setWidth("528px");
      this.top_close.setWidth("528px");
  },
  unidadLiveForm1BeginInsert: function(inSender) {
      var idasignatura=  this.cur_asig_datag_asignaturasDataGrid1.selectedItem.getData().idasignatura;
      this.asignaturaLookup1.setValue("dataValue",idasignatura);     
  },
  /*-->Subtopicos*/
  crear_subtopico_1Click: function(inSender, inEvent) {
    $("#main_panel_subtopicos").animate(
        {width:'100%'}
       );
      this.editPanel5.beginDataInsert(); 
      this.unidadLiveForm1.setWidth("528px");
      this.bigSubPanel.setWidth("528px");
      this.top_close_subtopic.setWidth("528px"); 
      this.editPanel5.setWidth("528px"); 
      this.numeroSubtopicoEditor1.setWidth("528px");
  },
  editar_subtopicoClick: function(inSender, inEvent) {
     $("#main_panel_subtopicos").animate(
        {width:'100%'}
       );
      this.editPanel5.beginDataUpdate(); 
      this.unidadLiveForm1.setWidth("528px");
      this.bigSubPanel.setWidth("528px");
      this.top_close_subtopic.setWidth("528px"); 
      this.editPanel5.setWidth("528px");  
      this.numeroSubtopicoEditor1.setWidth("528px");
  },
  close_panel_subtopicClick: function(inSender, inEvent) {
     $("#main_panel_subtopicos").animate(
        {width:'0px'}
       );
      this.unidadLiveForm1.setWidth("528px");
      this.bigSubPanel.setWidth("528px");
      this.top_close_subtopic.setWidth("528px"); 
  },
  subtopicoLiveForm1BeginInsert: function(inSender) {
     var idunidad= this.cur_unid_datag_unidadesDataGrid1.selectedItem.getData().idUnidad;
     this.unidadLookup1.setValue("dataValue", idunidad);
  }, 
  cur_subt_datag_subtopicoDataGrid1Selected: function(inSender, inIndex) {   
      var numerosub= this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().numeroSubtopico;
      this.numeroSubtopicoEditor1.setDataValue(""+numerosub+"");
      this.editar_subtopico.enable();
      this.ver_subtopico.enable();
      this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.update();
      this.l_cur_metas_metas_otrasmetasLiveVariable1.update();
      this.l_cur_act_actividades_actividadLiveVariable1.update();
      this.l_cur_rec_recursos_recursoLiveVariable1.update();
      this.l_cur_formularios_actividad_listaTipoActividades.update();
      this.l_cur_formularios_recursos_tipoRecurso.update();
      
      this.crear_aprendizaje_1.enable();
      this.crear_meta_1.enable();
      this.crear_actividad.enable();
      this.crear_recurso_1.enable();
  },
  ver_subtopicoClick: function(inSender, inEvent) {
     this.editPanel5.cancelEdit(); 
     $("#main_panel_subtopicos").animate(
        {width:'100%'}
       );
      this.unidadLiveForm1.setWidth("528px");
      this.bigSubPanel.setWidth("528px");
      this.top_close_subtopic.setWidth("528px"); 
      this.editPanel5.setWidth("528px");  
      this.numeroSubtopicoEditor1.setWidth("528px");     
  },  
  subtopicoLiveForm1CancelEdit: function(inSender) {
     var numerosub= this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().numeroSubtopico;
     this.numeroSubtopicoEditor1.setDataValue(""+numerosub+""); 
  },
  subtopicoLiveForm1BeginUpdate: function(inSender) {
     var numerosub= this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().numeroSubtopico;
     this.numeroSubtopicoEditor1.setDataValue(""+numerosub+"");
  },
  /*-->Aprendizaje*/ 
  crear_aprendizaje_1Click: function(inSender, inEvent) {
     $("#main_panel_aprendizaje").animate(
        {width:'100%'}
       );
      this.editPanel1.beginDataInsert(); 
      this.aprendizajeLiveForm1.setWidth("528px");
      this.bigUnitPanelApr.setWidth("528px");
      this.top_close_aprendizaje.setWidth("528px"); 
      this.editPanel1.setWidth("528px"); 
  },
  editar_aprendizajeClick: function(inSender, inEvent) {
     $("#main_panel_aprendizaje").animate(
        {width:'100%'}
       );
      this.editPanel1.beginDataUpdate(); 
      this.aprendizajeLiveForm1.setWidth("528px");
      this.bigUnitPanelApr.setWidth("528px");
      this.top_close_aprendizaje.setWidth("528px"); 
      this.editPanel1.setWidth("528px");  
  },
  ver_aprendizajeClick: function(inSender, inEvent) {
     $("#main_panel_aprendizaje").animate(
        {width:'100%'}
       );
      this.aprendizajeLiveForm1.setWidth("528px");
      this.bigUnitPanelApr.setWidth("528px");
      this.top_close_aprendizaje.setWidth("528px"); 
      this.editPanel1.setWidth("528px");       
  },
  close_panel_aprendizajeClick: function(inSender, inEvent) {
     $("#main_panel_aprendizaje").animate(
        {width:'0px'}
       );
      this.editPanel1.cancelEdit(); 
      this.aprendizajeLiveForm1.setWidth("528px");
      this.bigUnitPanelApr.setWidth("528px");
      this.top_close_aprendizaje.setWidth("528px"); 
  },
  aprendizajeLiveForm1BeginUpdate: function(inSender) {
      var _peso= this.cur_apr_datag_aprendizajeDataGrid1.selectedItem.getData().peso;
      this.pesoEditor3.show();
      this.pesoEditor3.setDataValue(""+_peso+"");
  },
  aprendizajeLiveForm1BeginInsert: function(inSender) {       
     var varstatus= this.l_cur_formularios_aprendizajes_listaEjes.getData();
     var idsubtopico= this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().idSubtopico;
     var eje1 = this.getAxisService.getItem(0).data.s1;
     var eje2 = this.getAxisService.getItem(0).data.s2;
     var eje3 = this.getAxisService.getItem(0).data.s3;
     this.subtopicoLookup6.setValue("dataValue", idsubtopico);
     this.pesoEditor3.setDataValue("1");
     
       this.l_cur_formularios_aprendizajes_listaEjes.filter.setValue("subarea.idSubarea",eje1);
       this.l_cur_formularios_aprendizajes_listaEjes.filter.setValue("activo",true);
       this.l_cur_formularios_aprendizajes_listaEjes2.filter.setValue("subarea.idSubarea",eje2);
       this.l_cur_formularios_aprendizajes_listaEjes2.filter.setValue("activo",true);
       this.l_cur_formularios_aprendizajes_listaEjes3.filter.setValue("subarea.idSubarea",eje3);
       this.l_cur_formularios_aprendizajes_listaEjes3.filter.setValue("activo",true);
       this.l_cur_formularios_aprendizajes_listaEjes.update();
       this.l_cur_formularios_aprendizajes_listaEjes2.update();
       this.l_cur_formularios_aprendizajes_listaEjes3.update();
  },    
  cur_apr_datag_aprendizajeDataGrid1Selected: function(inSender, inIndex) {
     var varstatus= this.l_cur_formularios_aprendizajes_listaEjes.getData();
     var _peso= this.cur_apr_datag_aprendizajeDataGrid1.selectedItem.getData().peso; 
     var eje1 = this.getAxisService.getItem(0).data.s1;
     var eje2 = this.getAxisService.getItem(0).data.s2;
     var eje3 = this.getAxisService.getItem(0).data.s3;
     this.pesoEditor3.setDataValue(""+_peso+"");
     this.editar_aprendizaje.enable();
     this.ver_aprendizaje.enable();
     
       this.l_cur_formularios_aprendizajes_listaEjes.filter.setValue("subarea.idSubarea",eje1);
       this.l_cur_formularios_aprendizajes_listaEjes.filter.setValue("activo",true);
       this.l_cur_formularios_aprendizajes_listaEjes2.filter.setValue("subarea.idSubarea",eje2);
       this.l_cur_formularios_aprendizajes_listaEjes2.filter.setValue("activo",true);
       this.l_cur_formularios_aprendizajes_listaEjes3.filter.setValue("subarea.idSubarea",eje3);
       this.l_cur_formularios_aprendizajes_listaEjes3.filter.setValue("activo",true);
       this.l_cur_formularios_aprendizajes_listaEjes.update();
       this.l_cur_formularios_aprendizajes_listaEjes2.update();
       this.l_cur_formularios_aprendizajes_listaEjes3.update();
  },
  /*--> metas*/  
  crear_meta_1Click: function(inSender, inEvent) {
     $("#main_panel_metas").animate(
        {width:'100%'}
       );
      this.editPanel2.beginDataInsert(); 
      this.otrasmetasLiveForm1.setWidth("528px");
      this.bigUnitPanelMetas.setWidth("528px");
      this.top_close_metas.setWidth("528px"); 
      this.editPanel2.setWidth("528px");        
  },
  close_panel_metasClick: function(inSender, inEvent) {
    $("#main_panel_metas").animate(
        {width:'0px'}
       );
      this.editPanel2.cancelEdit(); 
      this.otrasmetasLiveForm1.setWidth("528px");
      this.bigUnitPanelMetas.setWidth("528px");
      this.top_close_metas.setWidth("528px"); 
      this.editPanel2.setWidth("528px");
  },
  editar_metaClick: function(inSender, inEvent) {
    $("#main_panel_metas").animate(
        {width:'100%'}
       );
      this.editPanel2.beginDataUpdate(); 
      this.otrasmetasLiveForm1.setWidth("528px");
      this.bigUnitPanelMetas.setWidth("528px");
      this.top_close_metas.setWidth("528px"); 
      this.editPanel2.setWidth("528px");
  },
  ver_metaClick: function(inSender, inEvent) {
    $("#main_panel_metas").animate(
        {width:'100%'}
       );
      this.bigUnitPanelMetas.setWidth("528px");
      this.otrasmetasLiveForm1.setWidth("528px");     
      this.top_close_metas.setWidth("528px"); 
      this.editPanel2.setWidth("528px");
  },
  cur_metas_datag_otrasmetasDataGrid1Selected: function(inSender, inIndex) {
     this.editar_meta.enable();
     this.ver_meta.enable(); 
  },
  /*--> actividad*/  
  crear_actividadClick: function(inSender, inEvent) {
     $("#main_panel_actividad").animate(
        {width:'100%'}
       );
      this.editPanel6.beginDataInsert();
      this.bigUnitPanelActividades.setWidth("528px");
      this.actividadLiveForm1.setWidth("528px");     
      this.top_close_actividades.setWidth("528px"); 
      this.editPanel6.setWidth("528px"); 
  },
  
  close_panel_actividadClick: function(inSender, inEvent) {
     $("#main_panel_actividad").animate(
        {width:'0px'}
       );      
      this.editPanel6.cancelEdit();
      this.bigUnitPanelActividades.setWidth("528px");
      this.actividadLiveForm1.setWidth("528px");     
      this.top_close_actividades.setWidth("528px"); 
      this.editPanel6.setWidth("528px");  
  },
  
  editar_actividadClick: function(inSender, inEvent) {
     $("#main_panel_actividad").animate(
        {width:'100%'}
       ); 
     this.editPanel6.beginDataUpdate();  
     this.bigUnitPanelActividades.setWidth("528px");
     this.actividadLiveForm1.setWidth("528px");     
     this.top_close_actividades.setWidth("528px"); 
     this.editPanel6.setWidth("528px");  
  },
  ver_actividadClick: function(inSender, inEvent) {
     $("#main_panel_actividad").animate(
        {width:'100%'}
      );
      this.bigUnitPanelActividades.setWidth("528px");
      this.actividadLiveForm1.setWidth("528px");     
      this.top_close_actividades.setWidth("528px"); 
      this.editPanel6.setWidth("528px"); 
  },
  /*---> recursos*/
  crear_recurso_1Click: function(inSender, inEvent) {
     $("#main_panel_recursos").animate(
        {width:'100%'}
       );
      this.editPanel13.beginDataInsert();
      this.bigUnitPanelRecursos.setWidth("528px");
      this.recursoLiveForm2.setWidth("528px");     
      this.top_close_recursos.setWidth("528px"); 
      this.editPanel13.setWidth("528px");  
  },
  close_panel_recursosClick: function(inSender, inEvent) {
     $("#main_panel_recursos").animate(
        {width:'0px'}
       );      
      this.editPanel13.cancelEdit();
      this.bigUnitPanelRecursos.setWidth("528px");
      this.recursoLiveForm2.setWidth("528px");     
      this.top_close_recursos.setWidth("528px"); 
      this.editPanel13.setWidth("528px");  
  },
  cur_formularios_butt_cargar_recursoClick: function(inSender, inEvent) {
      url= "http://www.rochester.edu.co/apps/index/aprendoz-finder/token/266c25fad84169c44dca7b8462db4369";
      window.open(url,"_BLANK"); 
  },
  cur_rec_datag_recursosDataGrid1Selected: function(inSender, inIndex) {
     this.editar_recurso.enable();
     this.ver_recurso.enable(); 
  },
  editar_recursoClick: function(inSender, inEvent) {
     $("#main_panel_recursos").animate(
        {width:'100%'}
       );
      this.editPanel13.beginDataUpdate();
      this.bigUnitPanelRecursos.setWidth("528px");
      this.recursoLiveForm2.setWidth("528px");     
      this.top_close_recursos.setWidth("528px"); 
      this.editPanel13.setWidth("528px");   
  },
  ver_recursoClick: function(inSender, inEvent) {
     $("#main_panel_recursos").animate(
        {width:'100%'}
       );
      this.bigUnitPanelRecursos.setWidth("528px");
      this.recursoLiveForm2.setWidth("528px");     
      this.top_close_recursos.setWidth("528px"); 
      this.editPanel13.setWidth("528px");   
  },  
  inscalumaprendizajeLiveForm1InsertData: function(inSender) {
      var docente= main.a_getUserName.getData().dataValue;
      var estudiante= this.calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.getData().id.personaIdPersona;
      var aprendizaje= this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.idAprendizaje;
      var now= new Date().getTime();                                  //fecha del sistema para fecha_creacion                                 
      var entidad= "inscalumnaprendizaje"  ;                          //entidad afectada            
      var fechaCreacion= this.fechaIngresoEditor2.getDisplayValue();  //fecha ingreso automatica
      var fechaLogro= this.fechaLogroEditor2.getDisplayValue();       //fecha de logro a ingresar
      var calificacion= this.calificacionEditor2.getDisplayValue();   //calificacion a ingresar
      var puntaje= this.calificacionNumEditor2.getDataValue();        //puntaje a ingresar
      var comentario= this.comentarioEditor2.getDataValue();
      var accion= "accion: crear "+" >idPersona: "+estudiante+" >idAprendizaje: "+aprendizaje+" >calificacion y puntaje: "+calificacion+"-"+puntaje+" >comentario: "+comentario+" >fechaCreacion: "+fechaCreacion+" >fechaLogro: "+fechaLogro;          

      //insert docentes_log_acciones
      this.global_log_acciones_docentes.setValue("usuario", docente);
      this.global_log_acciones_docentes.setValue("accionRealizada", accion);
      this.global_log_acciones_docentes.setValue("tablaAfectada", entidad);
      this.global_log_acciones_docentes.setValue("fechaCreacion", now);
      this.log_acciones_docentesForm.setDataSet(this.global_log_acciones_docentes);          
      this.log_acciones_docentesForm.insertData();  
  },
  inscalumaprendizajeLiveForm1UpdateData: function(inSender) {
      var docente= main.a_getUserName.getData().dataValue;
      var idkey= this.idInscAlumAprendizajeEditor2.getDataValue();
      var estudiante= this.calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.getData().id.personaIdPersona;
      var aprendizaje= this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.idAprendizaje;
      var now= new Date().getTime();                                  //fecha del sistema para fecha_creacion                                 
      var entidad= "inscalumnaprendizaje"  ;                          //entidad afectada            
      var fechaCreacion= this.fechaIngresoEditor2.getDisplayValue();  //fecha ingreso automatica
      var fechaLogro= this.fechaLogroEditor2.getDisplayValue();       //fecha de logro a ingresar
      var calificacion= this.calificacionEditor2.getDisplayValue();   //calificacion a ingresar
      var puntaje= this.calificacionNumEditor2.getDataValue();        //puntaje a ingresar
      var comentario= this.comentarioEditor2.getDataValue();
      var accion= "accion: actualizar "+" >idpk: "+idkey+" >idPersona: "+estudiante+" >idAprendizaje: "+aprendizaje+" >calificacion y puntaje: "+calificacion+"-"+puntaje+" >comentario: "+comentario+" >fechaCreacion: "+fechaCreacion+" >fechaLogro: "+fechaLogro;          

      //insert docentes_log_acciones
      this.global_log_acciones_docentes.setValue("usuario", docente);
      this.global_log_acciones_docentes.setValue("accionRealizada", accion);
      this.global_log_acciones_docentes.setValue("tablaAfectada", entidad);
      this.global_log_acciones_docentes.setValue("fechaCreacion", now);
      this.log_acciones_docentesForm.setDataSet(this.global_log_acciones_docentes);          
      this.log_acciones_docentesForm.insertData();  
  },
  inscalumaprendizajeLiveForm1DeleteData: function(inSender) {
      var docente= main.a_getUserName.getData().dataValue;
      var idkey= this.idInscAlumAprendizajeEditor2.getDataValue();
      var estudiante= this.calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.getData().id.personaIdPersona;
      var aprendizaje= this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.idAprendizaje;
      var now= new Date().getTime();                                  //fecha del sistema para fecha_creacion                                 
      var entidad= "inscalumnaprendizaje"  ;                          //entidad afectada            
      var fechaCreacion= this.fechaIngresoEditor2.getDisplayValue();  //fecha ingreso automatica
      var fechaLogro= this.fechaLogroEditor2.getDisplayValue();       //fecha de logro a ingresar
      var calificacion= this.calificacionEditor2.getDisplayValue();   //calificacion a ingresar
      var puntaje= this.calificacionNumEditor2.getDataValue();        //puntaje a ingresar
      var comentario= this.comentarioEditor2.getDataValue();
      var accion= "accion: borrar "+" >idPersona: "+estudiante+" >idAprendizaje: "+aprendizaje;          

      //insert docentes_log_acciones
      this.global_log_acciones_docentes.setValue("usuario", docente);
      this.global_log_acciones_docentes.setValue("accionRealizada", accion);
      this.global_log_acciones_docentes.setValue("tablaAfectada", entidad);
      this.global_log_acciones_docentes.setValue("fechaCreacion", now);
      this.log_acciones_docentesForm.setDataSet(this.global_log_acciones_docentes);          
      this.log_acciones_docentesForm.insertData();  
  },
  inscalumaprendizajeLiveForm2InsertData: function(inSender) {
      var docente= main.a_getUserName.getData().dataValue;
      var estudiante= main.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona;
      var aprendizaje= main.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.getData().id.idAprendizaje;
      var now= new Date().getTime();                                  //fecha del sistema para fecha_creacion                                 
      var entidad= "inscalumnaprendizaje"  ;                          //entidad afectada            
      var fechaCreacion= this.fechaIngresoEditor3.getDisplayValue();  //fecha ingreso automatica
      var fechaLogro= this.fechaLogroEditor3.getDisplayValue();       //fecha de logro a ingresar
      var calificacion= this.calificacionEditor3.getDisplayValue();   //calificacion a ingresar
      var puntaje= this.calificacionNumEditor3.getDataValue();        //puntaje a ingresar
      var comentario= this.comentarioEditor3.getDataValue();
      var accion= "modo estudiante - accion: crear "+" >idPersona: "+estudiante+" >idAprendizaje: "+aprendizaje+" >calificacion y puntaje: "+calificacion+"-"+puntaje+" >comentario: "+comentario+" >fechaCreacion: "+fechaCreacion+" >fechaLogro: "+fechaLogro;          

      //insert docentes_log_acciones
      this.global_log_acciones_docentes.setValue("usuario", docente);
      this.global_log_acciones_docentes.setValue("accionRealizada", accion);
      this.global_log_acciones_docentes.setValue("tablaAfectada", entidad);
      this.global_log_acciones_docentes.setValue("fechaCreacion", now);
      this.log_acciones_docentesForm.setDataSet(this.global_log_acciones_docentes);          
      this.log_acciones_docentesForm.insertData();
  },
  inscalumaprendizajeLiveForm2UpdateData: function(inSender) {
      var docente= main.a_getUserName.getData().dataValue;
      var estudiante= main.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona;
      var aprendizaje= main.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.getData().id.idAprendizaje;
      var now= new Date().getTime();                                  //fecha del sistema para fecha_creacion                                 
      var entidad= "inscalumnaprendizaje"  ;                          //entidad afectada            
      var fechaCreacion= this.fechaIngresoEditor3.getDisplayValue();  //fecha ingreso automatica
      var fechaLogro= this.fechaLogroEditor3.getDisplayValue();       //fecha de logro a ingresar
      var calificacion= this.calificacionEditor3.getDisplayValue();   //calificacion a ingresar
      var puntaje= this.calificacionNumEditor3.getDataValue();        //puntaje a ingresar
      var comentario= this.comentarioEditor3.getDataValue();
      var accion= "modo estudiante - accion: actualizar "+" >idPersona: "+estudiante+" >idAprendizaje: "+aprendizaje+" >calificacion y puntaje: "+calificacion+"-"+puntaje+" >comentario: "+comentario+" >fechaCreacion: "+fechaCreacion+" >fechaLogro: "+fechaLogro;          

      //insert docentes_log_acciones
      this.global_log_acciones_docentes.setValue("usuario", docente);
      this.global_log_acciones_docentes.setValue("accionRealizada", accion);
      this.global_log_acciones_docentes.setValue("tablaAfectada", entidad);
      this.global_log_acciones_docentes.setValue("fechaCreacion", now);
      this.log_acciones_docentesForm.setDataSet(this.global_log_acciones_docentes);          
      this.log_acciones_docentesForm.insertData();
  },
  inscalumaprendizajeLiveForm2DeleteData: function(inSender) {
      var docente= main.a_getUserName.getData().dataValue;
      var estudiante= main.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona;
      var aprendizaje= main.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.getData().id.idAprendizaje;
      var now= new Date().getTime();                                  //fecha del sistema para fecha_creacion                                 
      var entidad= "inscalumnaprendizaje"  ;                          //entidad afectada            
      var fechaCreacion= this.fechaIngresoEditor3.getDisplayValue();  //fecha ingreso automatica
      var fechaLogro= this.fechaLogroEditor3.getDisplayValue();       //fecha de logro a ingresar
      var calificacion= this.calificacionEditor3.getDisplayValue();   //calificacion a ingresar
      var puntaje= this.calificacionNumEditor3.getDataValue();        //puntaje a ingresar
      var comentario= this.comentarioEditor3.getDataValue();
      var accion= "modo estudiante - accion: eliminar "+" >idPersona: "+estudiante+" >idAprendizaje: "+aprendizaje+" >calificacion y puntaje: "+calificacion+"-"+puntaje+" >comentario: "+comentario+" >fechaCreacion: "+fechaCreacion+" >fechaLogro: "+fechaLogro;          

      //insert docentes_log_acciones
      this.global_log_acciones_docentes.setValue("usuario", docente);
      this.global_log_acciones_docentes.setValue("accionRealizada", accion);
      this.global_log_acciones_docentes.setValue("tablaAfectada", entidad);
      this.global_log_acciones_docentes.setValue("fechaCreacion", now);
      this.log_acciones_docentesForm.setDataSet(this.global_log_acciones_docentes);          
      this.log_acciones_docentesForm.insertData();
  },
  calif_encabezado_opciones_butt_reporte_pendientesClick: function(inSender, inEvent) {
      var idpersonap= main.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona;
     // main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var formatType= "PDF";
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/DOC008",
               format: formatType,
               params: { idpersona: idpersonap}
         }
       });
       inEvent.preventDefault(); 
  },  
  
  _end: 0
});