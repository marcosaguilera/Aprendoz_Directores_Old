dojo.declare("Eventualidades", wm.Page, {
  start: function() {
     
  },
  sesionLiveForm1BeginInsert: function(inSender) {
    try {
       this.asignaturaLookup1.setValue("dataValue", this.asignaturas.selectedItem.getData().id.asignaturaIdAsignatura);
       this.cursoLookup1.setValue("dataValue", this.asignaturas.selectedItem.getData().id.cursoIdCurso);
      
    } catch(e) {
      console.error('ERROR IN sesionLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  button2Click: function(inSender, inEvent) {
      this.docenteAsig.update();
      app.lsEventualidad.update();    
      this.sesionLiveVariable1.clearData(); 
      this.asistencia.clearData(); 
  },
  button1Click: function(inSender, inEvent) {
      this.asignaturaCurso.clearData();
      this.sesionLiveVariable1.clearData();
      this.docenteAsig.clearData();
      this.sesionLiveVariable1.clearData();
      this.asistencia.clearData();
      this.selectEditor2.clear();
      this.selectEditor3.clear();
  },
  asignaturasCellClick: function(inSender, inEvent) {
    try {
      this.sesionLiveVariable1.clearData();
        this.asistencia.clearData();
      
    } catch(e) {
      console.error('ERROR IN asignaturasCellClick: ' + e); 
    } 
  },
  dataGrid1RowDblClick: function(inSender, inEvent) {
    try {
      
      this.editPanel2.beginDataUpdate();
      
    } catch(e) {
      console.error('ERROR IN dataGrid1RowDblClick: ' + e); 
    } 
  },
  picture1Click: function(inSender) {
    try {
      this.selectEditor4.clear();
       this.asistencia.update();
      
    } catch(e) {
      console.error('ERROR IN picture1Click: ' + e); 
    } 
  },
  liveForm1CancelEdit: function(inSender) {
    try {
       this.dataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN liveForm1CancelEdit: ' + e); 
    } 
  },
  liveForm1BeginUpdate: function(inSender) {
    try {
      this.dataGrid1.setDisabled(true);
      
    } catch(e) {
      console.error('ERROR IN liveForm1BeginUpdate: ' + e); 
    } 
  },
  dataGrid1SelectionChanged: function(inSender) {
   /* this.editPanel2.cancelEdit();
      this.dataGrid1.setDisabled(false);
      */ 
  },
  button3Click: function(inSender, inEvent) {
     this.personaBox.clear();
     this.docenteAsig.update();
     app.lsEventualidad.update(); 
  },
  liveForm1UpdateData: function(inSender) {
      this.dataGrid1.setDisabled(false);
  },
  liveForm1Result: function(inSender, inData) {
      this.dataGrid1.setDisabled(false);
  },
  a_lista_sySuccess: function(inSender, inDeprecated) {
      var sy_actual =  main.a_cursy.getItem(0).data.sy;
      this.selectEditor1.setDisplayValue(sy_actual);
  },
  _end: 0
});