dojo.declare("Distribucion", wm.Page, {
  start: function() {
    
  },
  totalCurso: function() {
      var totalPersona= this.inscalumcursoLiveVariable1.getCount();
      alert(totalPersona);
    },

  inscalumcursoLiveVariable1Success: function(inSender, inDeprecated) {
    try {
      var numFilas= this.inscalumcursoLiveVariable1.getCount();
      var cursoChar= this.sel_curso.getDisplayValue();
      //alert("numero de filas: "+numFilas);
      this.label_total_estudiantes.setCaption("En el curso "+cursoChar+", hay actualmente "+numFilas+" alumnos!");
      this.countMale.update();
      this.countFemale.update();
      
    } catch(e) {
      console.error('ERROR IN inscalumcursoLiveVariable1Success: ' + e); 
    } 
  },
  
  /*mostrara en una columna el numero de filas con su numeracion*/
  inscalumcursoDataGrid1SetColumns: function(inSender, inColumn, inIndex) {
    try {
      // inIndex is column number, starting with column 0
      if(inIndex == 0) {
         inColumn.formatter = function(inDatum, inRowIndex) {
               // Return current row number
               return inRowIndex+1;
            };
      }
    } catch(e) {
      console.error('ERROR IN inscalumcursoDataGrid1SetColumns: ' + e); 
    } 
  },
 
  cursoLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var idCurso= this.cursoLookup1.getDataValue().idCurso;
      this.num_aux.setDataValue(idCurso);
            
    } catch(e) {
      console.error('ERROR IN cursoLookup1Change: ' + e); 
    } 
  },
  lista_distribucion_curso_dataGridSetColumns: function(inSender, inColumn, inIndex) {
    try {
       if(inIndex == 0) {
         inColumn.formatter = function(inDatum, inRowIndex) {
               // Return current row number
               return inRowIndex+1;
            };
      } 
    } catch(e) {
      console.error('ERROR IN lista_distribucion_curso_dataGridSetColumns: ' + e); 
    } 
  },
  l_lista_distribucion_curso_alumnosSuccess: function(inSender, inDeprecated) {
    try {
      var numFilas1= this.l_lista_distribucion_curso_alumnos.getCount();
      this.label_total_estudiantes2.setCaption("En este curso hay actualmente "+numFilas1+" alumnos!");
      this.countMaleRight.update();
      this.countFemaleRight.update();
      
    } catch(e) {
      console.error('ERROR IN l_lista_distribucion_curso_alumnosSuccess: ' + e); 
    } 
  },
  inscalumcursoLiveForm1CancelEdit: function(inSender) {
    try {
      this.l_lista_distribucion_curso_alumnos.clearData();
      
    } catch(e) {
      console.error('ERROR IN inscalumcursoLiveForm1CancelEdit: ' + e); 
    } 
  },
  inscalumcursoLiveForm1Success: function(inSender, inData) {
    try {
      this.inscalumcursoLiveVariable1.update();
      this.l_lista_distribucion_curso_alumnos.update();
      
    } catch(e) {
      console.error('ERROR IN inscalumcursoLiveForm1Success: ' + e); 
    } 
  },
  sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.p_curso.update();
      //this.inscalumcursoLiveVariable1.clearData();
      this.l_lista_distribucion_curso_alumnos.clearData();
      
    } catch(e) {
      console.error('ERROR IN sel_gradoChange: ' + e); 
    } 
  },
  
  countMaleSuccess: function(inSender, inDeprecated) {
    try {
      var countHombres = this.countMale.getData().total;
      //alert(countHombres);
      this.getCountMale.setCaption(countHombres);
      
    } catch(e) {
      console.error('ERROR IN countMaleSuccess: ' + e); 
    } 
  },
  countFemaleSuccess: function(inSender, inDeprecated) {
    try {
      var countMujeres = this.countFemale.getData().total;
      //alert(countHombres);
      this.getCountFemale.setCaption(countMujeres);
      
    } catch(e) {
      console.error('ERROR IN countFemaleSuccess: ' + e); 
    } 
  },
  countMaleRightSuccess: function(inSender, inDeprecated) {
    try {
       var countHombresRight = this.countMaleRight.getData().total;
      //alert(countHombres);
      this.getCountMale1.setCaption(countHombresRight);
      
    } catch(e) {
      console.error('ERROR IN countMaleRightSuccess: ' + e); 
    } 
  },
  countFemaleRightSuccess: function(inSender, inDeprecated) {
    try {
      var countMujeresRight = this.countFemaleRight.getData().total;
      //alert(countHombres);
      this.getCountFemale1.setCaption(countMujeresRight);
      
    } catch(e) {
      console.error('ERROR IN countFemaleRightSuccess: ' + e); 
    } 
  },
  _end: 0
});