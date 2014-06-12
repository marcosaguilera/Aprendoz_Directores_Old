dojo.declare("Inscripciones", wm.Page, {
  start: function() {
    
  },
  
  subjectsSelectChange: function(inSender, inDisplayValue, inDataValue) {
    /*var username = this.getUserName.getData().dataValue;
    var idgrado  = this.subjectsSelect.getDataValue();
    this.subjectsByUser.input.setValue("sy","4");
    this.subjectsByUser.input.setValue("usuario",username);
    this.subjectsByUser.update();*/
  },

  listadoGradoSelectChange: function(inSender, inDisplayValue, inDataValue) {
    var idcurso   = this.listadoCursoSelect.getDataValue();
    var idgradosel= this.listadoGradoSelect.getDataValue();
    var index     = this.asignatura.getSelectedIndex();
    var data      = this.asignatura.getItemData(index);
    var subjectid = data.idasignatura; 
    var gradoid   = data.idgrado; 
    if(gradoid != idgradosel){    
      var idgrado= this.listadoGradoSelect.getDataValue();
      this.a_cursosv.input.setValue("pgrado", idgrado);
      this.a_cursosv.update();
    }else{
      var idgrado= this.listadoGradoSelect.getDataValue();
      this.a_cursosv.input.setValue("pgrado", idgrado);
      this.a_cursosv.update();
    }
  },
  
  item_ : 0,
  
  inscribirEstudiantesClick: function(inSender, inEvent) {
    this.obj_ = this.estudiantesDojoGrid.dojoObj.selection.getSelected();
    this.cont_= this.estudiantesDojoGrid.dojoObj.selection.getSelectedCount();
    this.index     = this.asignatura.getSelectedIndex();
    this.data      = this.asignatura.getItemData(this.index);
    this.subjectid = this.data.idasignatura; 
    this.subject   = this.data.asignatura; 
    this.gradoid   = this.data.idgrado;
    this.grado     = this.data.grado;
    this.periodoid = 10;
    this.periodo   = "2013-2014";
    this.writeNext();
  },
  
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
  
  inscribirFormError: function(inSender, inError) {
    try {
     alert("Alerta de duplicidad en datos: \n\nYa existe una inscripción del estudiante en la asignatura seleccionada."); 
      
    } catch(e) {
      console.error('ERROR IN inscribirFormError: ' + e); 
    } 
  },
  
  inscribirFormSuccess: function(inSender, inData){
    try {   
      if (this.item_ <= this.cont_) {
        this.writeNext();
      }
      
    } catch(e) {
      console.error('ERROR IN inscribirFormSuccess: ' + e); 
      this.item_=0;
      this.studentsListGradeSubject.update();
    } 
  },
 
  asignaturaSelect: function(inSender, inItem) {
     this.listadoGradoSelect.enable();
     this.listadoCursoSelect.enable();
     var idcurso   = this.listadoCursoSelect.getDataValue();
     var idgrado   = this.listadoGradoSelect.getDataValue();
     
     if(idcurso != undefined && idgrado != undefined){
       var index     = this.asignatura.getSelectedIndex();
       var data      = this.asignatura.getItemData(index);
       var subjectid = data.idasignatura; 
       var subject   = data.asignatura;
       var idcurso   = this.listadoCursoSelect.getDataValue();
       this.messageTop.setCaption("Ha seleccionado: "+subject);
       this.studentsListGradeSubject.input.setValue("pcurso",idcurso);
       this.studentsListGradeSubject.input.setValue("pasignatura",subjectid);
      
       this.studentsListGradeSubject.update();
     }else{/*nothing to do!*/}
  },
  
  showSubjectsButtonClick: function(inSender, inEvent) {
    var username = this.getUserName.getData().dataValue;
    
    //var idgrado  = this.subjectsSelect.getDataValue();
    this.subjectsByUser.input.setValue("sy", sy);
    this.subjectsByUser.input.setValue("usuario", username);
    this.subjectsByUser.update();
  },
  
  itemretirar_ : 0,
  
  retirarEstudiantesClick: function(inSender, inEvent) {
    try {
     this.obj_ = this.estudiantesInscritosAsignatura.dojoObj.selection.getSelected();
     this.cont_= this.estudiantesInscritosAsignatura.dojoObj.selection.getSelectedCount();
       var obj  = this.obj_;
       var cont = this.cont_;
       console.log(obj);
       console.log(cont);
       var intiaa = parseInt(obj[this.itemretirar_].idaa);
       console.log(intiaa);
       this.borrarVar.setValue("idInscAlumAsig", intiaa);
       this.retirarForm.setDataSet(this.borrarVar); 
       this.retirarForm.deleteData(); 
        
     } catch(e) {
        console.error('ERROR IN retirarEstudiantesClick: ' + e); 
    } 
  },

  estudiantesDojoGridCellClick: function(inSender, evt) {
     this.inscribirEstudiantes.enable(); 
  },
  
  estudiantesInscritosAsignaturaCellClick: function(inSender, evt) {
     this.retirarEstudiantes.enable(); 
  },
  
  listadoCursoSelectChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     var index     = this.asignatura.getSelectedIndex();
     var data      = this.asignatura.getItemData(index);
     var subjectid = data.idasignatura; 
     var subject   = data.asignatura;
     var idcurso   = this.listadoCursoSelect.getDataValue();
     var sy= this.syGrade.getDataValue();
     this.messageTop.setCaption("Ha seleccionado: "+subject);
     this.studentsListGradeSubject.input.setValue("pcurso", idcurso);
     this.studentsListGradeSubject.input.setValue("pasignatura", subjectid);
     this.studentsListGradeSubject.input.setValue("idsy", sy);
     this.listStudentsByCurse.input.setValue("pcurso",idcurso);
     
     this.listStudentsByCurse.update();
     this.studentsListGradeSubject.update(); 
      
    } catch(e) {
      console.error('ERROR IN listadoCursoSelectChange: ' + e); 
    } 
  },
  
  subjectsGradeChange: function(inSender, inDisplayValue, inDataValue) {
     this.listadoCursoSelect.disable();
     this.listadoGradoSelect.disable();
     this.listadoCursoSelect.clear();
     this.listadoGradoSelect.clear();
     this.messageTop.setCaption("Ha seleccionado: ");
     this.studentsListGradeSubject.clearData();
     this.listStudentsByCurse.clearData();
     this.subjectsByUser.update(); 
  },
  _end: 0
});