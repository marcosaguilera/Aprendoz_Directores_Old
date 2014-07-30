Main.widgets = {
	listGrado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	iraformularios: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"cur_formularios"}, {}]
			}]
		}]
	}],
	listDES: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoDesempeno"}, {}],
	listRETRO: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoValoracion"}, {}],
	LOGOUT: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"iraSALIR"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	iraSALIR: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	estudiantes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}]
		}]
	}],
	iraCalificaciones: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"calificaciones"}, {}]
			}]
		}]
	}],
	alumnosCURSOS: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","maxResults":40,"designMaxResults":40}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.sexo","source":"calif_contenedor_sel_Genero.dataValue"}, {}]
		}]
	}],
	alumnoslv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","maxResults":30,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_alumnos_panel1_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"calif_alumnos_panel1_sel_sy.dataValue"}, {}]
		}]
	}],
	unidadlv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Unidad","orderBy":"asc: numeroUnidad","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.asignatura.idAsignatura"}, {}]
		}]
	}],
	subtopicolv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Subtopico"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.unidad.idUnidad","source":"unidad.selectedItem.idUnidad"}, {}]
		}]
	}],
	personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView1","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.codigo","source":"Estudiante.selectedItem.persona.codigo"}, {}]
		}]
	}],
	listapersonas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"grado2.dataValue"}, {}]
		}]
	}],
	listaGrado4: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	listaCursos4: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"grado1.dataValue"}, {}]
		}]
	}],
	listaPeriodo: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Sy"}, {}],
	lsCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}]
		}]
	}],
	inscalumactividadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumactividadLiveView1","ignoreCase":true,"orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.actividad.idActividad","source":"dataGrid5.selectedItem.idActividad"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"actAlumnos.selectedItem.persona.idPersona"}, {}]
		}]
	}],
	asignaturaslv1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"selectEditor17.dataValue"}, {}]
		}]
	}],
	actividadLV: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Unidad"}, {}],
	ACTIVIDADESLV3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Actividad","orderBy":"asc: fecha"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.unidad.asignatura.idAsignatura","source":"actAsignaturas.selectedItem.idAsignatura"}, {}]
		}]
	}],
	inscalumasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumasigLiveView3","orderBy":"asc: persona.apellido1, asc: persona.apellido2,  asc: persona.nombre1, asc: persona.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.asignatura.sy.idSy","source":"Schoolar_Year.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"Asignatura.selectedItem.id.idAsignatura"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"Estudiante.selectedItem.id.idPersona"}, {}]
		}]
	}],
	vistaEstudiantes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false}, {}],
	vistaALUMNOS: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumAsigCurso"}, {}],
	insccursoasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.insccursoasigLiveView2","maxResults":40,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.nombreLdap","source":"cur_encabezado_tex_ldapUser.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.periodo.sy.idSy","source":"cur_encabezado_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.asignatura.grado.idGrado","source":"cur_encabezado_sel_grado.dataValue"}, {}]
		}]
	}],
	sp_insertar_actividades: ["wm.ServiceVariable", {"service":"sp_actividad_curso","operation":"corre_proc_act_cur"}, {}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_act_curInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"P_Fecha","source":"fechaEditor3.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"Pr_Comentario","source":"comentarioEditor4.dataValue"}, {}],
				wire2: ["wm.Wire", {"targetProperty":"Pr_Id_Actividad","source":"dataGrid5.selectedItem.idActividad"}, {}],
				wire3: ["wm.Wire", {"targetProperty":"Pr_Id_Curso","source":"selectEditor18.dataValue"}, {}],
				wire4: ["wm.Wire", {"targetProperty":"Pr_Logrado","source":"logradoEditor2.dataValue"}, {}]
			}]
		}]
	}],
	ls_Area1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_Area2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_Area3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	lv_subarea1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Subarea"}, {}],
	actualizacalifestuapren: ["wm.ServiceVariable", {"service":"actualiza_calif","operation":"corre_proc_calcula_calif_est"}, {"onSuccess":"aux200","onResult":"actualizacalifestuaprenResult"}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"targetProperty":"Pr_Id_Persona","source":"personaaux.dataValue"}, {}],
				wire: ["wm.Wire", {"targetProperty":"Pr_Id_Aprendizaje","source":"aprendizajeaux.dataValue"}, {}]
			}]
		}]
	}],
	iraFormulario2: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"layer47"}, {}]
			}]
		}]
	}],
	ejesDirNivel: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}],
	actualizacalifestudiante: ["wm.ServiceVariable", {"service":"actualiza_calif","operation":"corre_proc_calcula_calif_est"}, {"onResult":"actualizacalifestudianteResult"}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"Pr_Id_Aprendizaje","source":"aux200.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"Pr_Id_Persona","source":"aux199.dataValue"}, {}]
			}]
		}]
	}],
	pesos: ["wm.Variable", {"type":"EntryData","json":"[\n\t{name:\"1\", dataValue:\"1\"},\n        {name:\"2\", dataValue:\"2\"},\n\t{name:\"3\", dataValue:\"3\"},\n\t{name:\"4\", dataValue:\"4\"},\n\t{name:\"5\", dataValue:\"5\"}\n]\n"}, {}],
	a_lista_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {"onSuccess":"a_lista_sySuccess"}],
	a_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	l_cur_asig_asignaturas_vista_docentes_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"cur_encabezado_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.cursoIdCurso","source":"cur_encabezado_sel_grado.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"cur_encabezado_sel_grado.dataValue"}, {}]
		}]
	}],
	l_cur_unid_unidades_unidadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.unidadLiveView1"}, {}],
	l_cur_subt_subtopicos_subtopicoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.subtopicoLiveView1","ignoreCase":true,"orderBy":"asc: fechaInicio","maxResults":50}, {}],
	l_cur_apr_aprendizajes_aprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.aprendizajeLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_metas_metas_otrasmetasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.otrasmetasLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_act_actividades_actividadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.actividadLiveView1","maxResults":30,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_rec_recursos_recursoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.recursoLiveView3"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaEjes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaEjesBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaEjesSuccess"}],
	l_cur_formularios_aprendizajes_listaDimension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaDimension_comprensionBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaDimension_comprensionSuccess"}],
	l_cur_formularios_aprendizajes_listaDimension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaDimension_curricularBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaDimension_curricularSuccess"}],
	l_cur_formularios_aprendizajes_listaInteligencias: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaInteligenciasBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaInteligenciasSuccess"}],
	l_cur_formularios_actividad_listaTipoActividades: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoActividad"}, {"onBeforeUpdate":"l_cur_formularios_actividad_listaTipoActividadesBeforeUpdate","onSuccess":"l_cur_formularios_actividad_listaTipoActividadesSuccess"}],
	l_cur_formularios_actividad_listaTipoValoracion: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoValoracion"}, {"onBeforeUpdate":"l_cur_formularios_actividad_listaTipoValoracionBeforeUpdate","onSuccess":"l_cur_formularios_actividad_listaTipoValoracionSuccess"}],
	l_cur_formularios_actividad_listaTipoDesempeno: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoDesempeno"}, {}],
	l_cur_formularios_recursos_tipoRecurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoRecurso"}, {"onBeforeUpdate":"l_cur_formularios_recursos_tipoRecursoBeforeUpdate","onSuccess":"l_cur_formularios_recursos_tipoRecursoSuccess"}],
	l_calif_encabezado_opciones_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_asignaturas_docentes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura","orderBy":"asc: id.fechaEsperada"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"calif_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura"}, {}]
		}]
	}],
	l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumAsigCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2","maxResults":40,"designMaxResults":40}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.sexo","source":"calif_contenedor_sel_Genero.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"calif_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_calificacion_final: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaCalificacionFinal"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.aprendizajeIdAprendizaje","source":"calif_asig_datag_aprendizajesDataGrid1.selectedItem.id.idAprendizaje"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.id.personaIdPersona"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumaprendizajeLiveView3","orderBy":"desc: idInscAlumAprendizaje","maxResults":50,"designMaxResults":10}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.inscAlumCurso.persona.idPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.persona.idPersona"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.aprendizaje.idAprendizaje","source":"calif_asig_datag_aprendizajesDataGrid1.selectedItem.id.idAprendizaje"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.id.personaIdPersona"}, {}]
		}]
	}],
	l_calif_alumnos_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"calif_alumnos_panel1_sel_grado.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_alumnosCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"calif_alumnos_panel1_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"calif_alumnos_panel1_sel_sy.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura","orderBy":"asc: id.fechaEsperada"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.id.idAsignatura"}, {}]
		}]
	}],
	l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumaprendizajeLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.inscAlumCurso.persona.idPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.persona.idPersona"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.aprendizaje.idAprendizaje","source":"calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.id.idAprendizaje"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}]
		}]
	}],
	l_calif_alumnos_calificaciones_finales: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaCalificacionFinal"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.aprendizajeIdAprendizaje","source":"calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.id.idAprendizaje"}, {}]
		}]
	}],
	l_inscrip_panel_lista_cursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"Grado.dataValue"}, {}]
		}]
	}],
	l_inscrip_panel_VistaAsignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscipcionesVistaAsignaturas","orderBy":"asc: id.electiva"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"Grado.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"Schoolar_Year.dataValue"}, {}]
		}]
	}],
	l_inscrip_panel_VistaEstudiantesCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscripcionesVistaInscAlumnCurso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"Curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"Schoolar_Year.dataValue"}, {}]
		}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_Ejes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_EjesBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_EjesSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subarea.idSubarea","source":"nivel_asig_datag_asignaturasDataGrid1.selectedItem.idSubarea1"}, {}]
		}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_domension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_domension_comprensionBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_domension_comprensionSuccess"}],
	l_dirNivel_formulario_aprendizaje_lista_domension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_domension_curricularBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_domension_curricularSuccess"}],
	a_isAuthenticated: ["wm.ServiceVariable", {"service":"securityService","operation":"isAuthenticated","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"isAuthenticatedInputs"}, {}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_inteligencia: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_inteligenciaBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_inteligenciaSuccess"}],
	l_promocion_insc_alum_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.PromocionVistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"promocion_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"promocion_sel_ao_escolar.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"promocion_box_codigo.dataValue"}, {}]
		}]
	}],
	l_promocion_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"promocion_sel_grado.dataValue"}, {}]
		}]
	}],
	l_promocion_promocionLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.promocionLiveView2","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"promocion_container_datag_personas_x_curso.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"promocion_sel_ao_escolar.dataValue"}, {}]
		}]
	}],
	multiReporte: ["wm.ServiceVariable", {"service":"MultiReportes","operation":"getReport"}, {"onResult":"multiReporteResult"}, {
		input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
	}],
	tipoDocumento: ["wm.Variable", {"type":"EntryData","json":"[{name: \"PDF (Adobe Reader)\", value: \"PDF\"},\n{name: \"DOCX (Microsoft Word 2007 o Superior)\", value: \"DOCX\"}]"}, {}],
	a_getCompleteName: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getFullName"}, {"onSuccess":"a_getCompleteNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getFullNameInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"usuario","source":"bienvenida_inputFullName.dataValue"}, {}]
			}]
		}]
	}],
	a_periodo: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Periodo"}, {}],
	countEstudiantes: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCountGender"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCountGenderInputs"}, {}]
	}],
	a_logInsertRecords: ["wm.Variable", {"type":"com.aprendoz_test.data.LogDocentes"}, {}],
	a_informacionUsuario: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"showInformationUser"}, {"onSuccess":"a_informacionUsuarioSuccess"}, {
		input: ["wm.ServiceInput", {"type":"showInformationUserInputs"}, {}]
	}],
	a_getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {"onSuccess":"a_getUserNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	a_actualizaClave: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"actualizarClave"}, {"onSuccess":"a_actualizaClaveSuccess","onError":"a_actualizaClaveError"}, {
		input: ["wm.ServiceInput", {"type":"actualizarClaveInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"usuario","source":"aux_getNameUser.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"clave","source":"inicio_box_clave.dataValue"}, {}]
			}]
		}]
	}],
	l_inicio_cursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"inicio_sel_grado.dataValue"}, {}]
		}]
	}],
	l_inicio_detalles_acceso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesInicioVistaDetallesAcceso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"inicio_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.cursoIdCurso","source":"inicio_sel_curso.dataValue"}, {}]
		}]
	}],
	l_reportes_graficos_listado_reportes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DirectoresDocentesListadoReportes","matchMode":"anywhere","orderBy":"asc: id.codigo","maxResults":50}, {}],
	openUpReportes: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Reportes\""}, {}]
			}]
		}]
	}],
	a_getLastAccess: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"last_accessHQL"}, {"onSuccess":"a_getLastAccessSuccess"}, {
		input: ["wm.ServiceInput", {"type":"last_accessHQLInputs"}, {}]
	}],
	cur_ls_inteligencias: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {}],
	l_calif_alumnos_alumnos_asignaturas_aux: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaInscAlumnAsig"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"calif_alumnos_panel1_sel_sy.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_alumnos_asignaturas: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsBySyAndStudent"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsBySyAndStudentInputs"}, {}]
	}],
	a_cursy: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getSyByCurDate"}, {"onSuccess":"a_cursySuccess"}, {
		input: ["wm.ServiceInput", {"type":"getSyByCurDateInputs"}, {}]
	}],
	l_cur_asig_asignaturas_vista_docentes_asignaturas2: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsCirruculum"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsCirruculumInputs"}, {}]
	}],
	curriculo_numerounidad: ["wm.Variable", {"type":"EntryData","json":"[{name:\"Unidad 1\", dataValue: \"1\"},\n{name:\"Unidad 2\", dataValue: \"2\"},\n{name:\"Unidad 3\", dataValue: \"3\"},\n{name:\"Unidad 4\", dataValue: \"4\"},\n{name:\"Unidad 5\", dataValue: \"5\"},\n{name:\"Unidad 6\", dataValue: \"6\"},\n{name:\"Unidad 7\", dataValue: \"7\"}]"}, {}],
	curriculo_numeroSubtopico: ["wm.Variable", {"type":"EntryData","json":"[{name:\"Subtopico 1\", dataValue: \"1\"},\n{name:\"Subtopico 2\", dataValue: \"2\"},\n{name:\"Subtopico 3\", dataValue: \"3\"},\n{name:\"Subtopico 4\", dataValue: \"4\"},\n{name:\"Subtopico 5\", dataValue: \"5\"},\n{name:\"Subtopico 6\", dataValue: \"6\"},\n{name:\"Subtopico 7\", dataValue: \"7\"},\n{name:\"Subtopico 8\", dataValue: \"8\"},\n{name:\"Subtopico 9\", dataValue: \"9\"},\n{name:\"Subtopico 10\", dataValue: \"10\"}\n]"}, {}],
	gotoUploader: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Uploader\""}, {}],
				wire1: ["wm.Wire", {"targetProperty":"height","expression":"500"}, {}],
				wire2: ["wm.Wire", {"targetProperty":"width","expression":"500"}, {}]
			}]
		}]
	}],
	getAxisService: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsAxis"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsAxisInputs"}, {}]
	}],
	l_cur_formularios_aprendizajes_listaEjes2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}],
	l_cur_formularios_aprendizajes_listaEjes3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}],
	global_log_acciones_docentes: ["wm.Variable", {"type":"com.aprendoz_test.data.LogAccionesDocentes"}, {}],
	infoEmailsGroup: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getEmailsFamiliarGroup"}, {"onSuccess":"infoEmailsGroupSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getEmailsFamiliarGroupInputs"}, {}]
	}],
	sendingEmailJS: ["wm.ServiceVariable", {"service":"sendingMailToParents","operation":"enviarNotificacionAlmuerzo"}, {"onSuccess":"sendingEmailJSSuccess","onError":"sendingEmailJSError"}, {
		input: ["wm.ServiceInput", {"type":"enviarNotificacionAlmuerzoInputs"}, {}]
	}],
	panel_principal: ["wm.Layout", {"height":"100%","width":"957px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			templateMain: ["wm.Template", {"_classes":{"domNode":["template-main","wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","autoScroll":true}, {}, {
				aprendoz: ["wm.Panel", {"height":"1551px","width":"100%","horizontalAlign":"left","verticalAlign":"top","freeze":true}, {}, {
					panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","width":"100%","horizontalAlign":"right","verticalAlign":"top","padding":"2","layoutKind":"left-to-right"}, {}, {
						panel31: ["wm.Panel", {"height":"36px","width":"250%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							sy_icon: ["wm.Picture", {"height":"26px","border":"0","width":"22px","source":"resources/images/buttons/ring.png","aspect":"v"}, {}],
							bievenida_sy: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"26px","width":"95px","border":"0","align":"center"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							picture1: ["wm.Picture", {"height":"26px","border":"0","width":"22px","source":"resources/images/buttons/date.png","aspect":"v"}, {}],
							dateEditor1: ["wm.DateEditor", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_FontFamily_Arial"]},"width":"78px","captionAlign":"center","height":"26px","displayValue":"30/07/2014","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
								}],
								editor: ["wm._DateEditor", {}, {}]
							}],
							picture3: ["wm.Picture", {"height":"26px","border":"0","width":"22px","source":"resources/images/buttons/clock.png","aspect":"v"}, {}],
							timeEditor1: ["wm.TimeEditor", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_FontFamily_Arial"]},"displayValue":"12:56 p.m.","captionAlign":"center","height":"26px","width":"72px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
								}],
								editor: ["wm._TimeEditor", {}, {}]
							}],
							button7: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_BackgroundColor_White"]},"height":"38px","width":"49px","caption":"","border":"0","margin":"0","borderColor":"","iconUrl":"resources/images/ico/logout.png","iconWidth":"35px","iconMargin":"0 0px 0 0"}, {"onclick":"LOGOUT"}]
						}]
					}],
					panel1: ["wm.Panel", {"height":"24px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}],
						templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}],
						templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}]
					}],
					body: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","freeze":true,"padding":"5","layoutKind":"left-to-right"}, {}, {
						templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top","freeze":true,"showing":false}, {}],
						templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							MAIN: ["wm.TabLayers", {}, {}, {
								pestana_bievenida: ["wm.Layer", {"caption":"Inicio","horizontalAlign":"left","verticalAlign":"top","roles":["6","10","5","4"],"padding":"100","lock":true}, {}, {
									bienvenida_inputFullName: ["wm.TextEditor", {"width":"100%","caption":"inputFullName","showing":false,"displayValue":"m"}, {"onchange":"bienvenida_inputFullNameChange"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUserName.dataValue"}, {}]
										}],
										editor: ["wm._TextEditor", {}, {}]
									}],
									panel12: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"123px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
										bienvenida_logo: ["wm.Picture", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"95px","border":"0","width":"424px","source":"http://aprendoz.rochester.edu.co/recursos/logo_aprendoz_nuevo.png","aspect":"v"}, {}]
									}],
									panel4: ["wm.Panel", {"height":"51px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										bienvenida_fullname: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"48px","width":"100%","border":"0","align":"center"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									configuracion_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										inicio_filtros_claves: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"500px","horizontalAlign":"left","verticalAlign":"top","padding":"10","margin":"10","showing":false}, {}, {
											inicio_sel_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año Escolar","height":"26px"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
													}]
												}]
											}],
											inicio_sel_grado: ["wm.SelectEditor", {"width":"150%","caption":"Grado","height":"26px"}, {"onchange":"l_inicio_cursos"}, {
												editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
													}]
												}]
											}],
											inicio_sel_curso: ["wm.SelectEditor", {"width":"150%","caption":"Curso","height":"26px"}, {"onchange":"l_inicio_detalles_acceso"}, {
												editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inicio_cursos","expression":undefined}, {}]
													}]
												}]
											}],
											detalles_alumnos: ["wm.DataGrid", {"border":"0"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inicio_detalles_acceso","expression":undefined}, {}]
												}],
												column2: ["wm.DataGridColumn", {"caption":"*","field":"id.codigo","columnWidth":"62px","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column1: ["wm.DataGridColumn", {"caption":"Nombre","field":"id.nombre1","columnWidth":"100%","index":1,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}+\" \"+${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column3: ["wm.DataGridColumn", {"caption":"Usuario","field":"id.nombreLdap","columnWidth":"80px","index":2}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column4: ["wm.DataGridColumn", {"caption":"Clave","field":"id.clave","columnWidth":"80px","index":3}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}]
										}],
										dashBoard: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}],
										tabs: ["wm.Panel", {"height":"100%","width":"44px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											layers1: ["wm.Layers", {"width":"44px"}, {}, {
												layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"right","verticalAlign":"top"}, {}, {
													spacer2: ["wm.Spacer", {"height":"20px","width":"100%","showing":false}, {}],
													inicio_abrir_preferencias: ["wm.Label", {"height":"48px","width":"100%","border":"0","align":"right","caption":"<img src=\"resources/images/ico/gear.png\" height=\"34\" width=\"34\" align=\"right\">"}, {"onclick":"inicio_abrir_preferenciasClick"}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer7: ["wm.Spacer", {"height":"2px","width":"100%"}, {}],
													inicio_abrir_preferencias1: ["wm.Label", {"height":"48px","width":"100%","border":"0","align":"right","caption":"<img src=\"resources/images/ico/student.png\" height=\"34\" width=\"34\" align=\"right\">"}, {"onclick":"inicio_abrir_preferencias1Click"}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer6: ["wm.Spacer", {"height":"2px","width":"100%"}, {}],
													inicio_cerrar_preferencias: ["wm.Label", {"height":"30px","width":"70%","border":"0","align":"right","caption":"<img src=\"resources/images/ico/close.png\" height=\"18\" width=\"18\" align=\"right\">"}, {"onclick":"inicio_cerrar_preferenciasClick"}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}]
										}],
										inicio_panel_opciones: ["wm.Panel", {"height":"100%","width":"275px","horizontalAlign":"left","verticalAlign":"top","padding":"10"}, {}, {
											aux_getNameUser: ["wm.TextEditor", {"width":"150%","caption":"userId","showing":false,"disabled":true,"displayValue":"m","height":"28px"}, {"onchange":"getCompleteName"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUserName.dataValue"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											lastAccess_Label: ["wm.Label", {"height":"38px","width":"100%","border":"0","align":"center","singleLine":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											inicio_box_id_persona: ["wm.TextEditor", {"width":"100%","caption":"•","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_tipo_persona: ["wm.TextEditor", {"width":"150%","caption":"Tipo Persona","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_nombre: ["wm.TextEditor", {"width":"150%","caption":"Nombres","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_apellido: ["wm.TextEditor", {"width":"150%","caption":"Apellidos","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_usuario: ["wm.TextEditor", {"width":"150%","caption":"Usuario","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_clave: ["wm.TextEditor", {"width":"150%","caption":"Clave","height":"28px","readonly":true}, {"onchange":"inicio_box_claveChange"}, {
												editor: ["wm._TextEditor", {"password":true,"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											inicio_box_reclave: ["wm.TextEditor", {"width":"150%","caption":"Repetir Clave","height":"28px","readonly":true}, {"onchange":"inicio_box_reclaveChange"}, {
												editor: ["wm._TextEditor", {"password":true,"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											inicio_ok_label: ["wm.Label", {"height":"22px","width":"100%","border":"0","align":"center","caption":"Comparación de contraseña correcta!","showing":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											inicio_bad_label: ["wm.Label", {"height":"22px","width":"100%","border":"0","align":"center","caption":"Verificación de contraseña erronea!","showing":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											spacer3: ["wm.Spacer", {"height":"12px","width":"96px"}, {}],
											inicio_panel_boton_actualizar: ["wm.Panel", {"height":"40px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
												inicio_boton_actualiza: ["wm.Button", {"height":"100%","width":"96px","caption":"Actualizar","disabled":true}, {"onclick":"a_actualizaClave"}],
												inicio_boton_cancelar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"height":"100%","width":"96px","caption":"Cancelar"}, {"onclick":"inicio_boton_cancelarClick"}]
											}],
											inicio_forgot_password: ["wm.Label", {"height":"25px","width":"100%","border":"0","align":"center","caption":"<u>¿Desea cambiar su contraseña?</u>"}, {"onclick":"inicio_forgot_passwordClick"}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											logForm: ["wm.LiveForm", {"height":"60px","verticalAlign":"top","horizontalAlign":"left","showing":false}, {}, {
												inicio_box_fecha: ["wm.DateEditor", {"displayValue":"30/07/2014","readonly":true,"disabled":true,"caption":"hora","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
													}],
													editor: ["wm._DateEditor", {}, {}]
												}],
												inicio_box_hora: ["wm.TimeEditor", {"displayValue":"12:56 p.m.","disabled":true,"caption":"fecha","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
													}],
													editor: ["wm._TimeEditor", {}, {}]
												}]
											}]
										}]
									}]
								}],
								pestana_curriculo: ["wm.Layer", {"caption":"Currículo","horizontalAlign":"left","verticalAlign":"top","roles":["8","9","6","10","20","21","22","23","24","25"],"lock":true}, {"onShow":"pestana_curriculoShow"}, {
									curriculo: ["wm.TabLayers", {}, {}, {
										cur_tablas: ["wm.Layer", {"caption":"TABLAS","horizontalAlign":"left","verticalAlign":"top","borderColor":"#ffffff"}, {"onShow":"cur_tablasShow"}, {
											cur_tablas_panel: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","padding":"0","height":"869px","borderColor":"#CD0000"}, {}, {
												cur_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													cur_encabezado_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"180px","caption":"Año escolar","captionSize":"80%"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
															}]
														}]
													}],
													cur_encabezado_sel_grado: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_TextDecoration_Bold","wm_FontSizePx_12px"],"domNode":["wm_FontSizePx_12px"]},"width":"160px","caption":"Grado","captionAlign":"left","height":"26px"}, {"onchange":"cur_encabezado_sel_gradoChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","startUpdate":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
															}]
														}]
													}],
													cur_encabezado_spacer_espacio: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
													cur_encabezado_butt_reporte1: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"43px","borderColor":"#F3F3F3","iconUrl":"resources/images/ico/download.png","iconMargin":"0px 5px 0px 0px"}, {"onclick":"cur_encabezado_butt_reporte1Click"}],
													cur_encabezado_butt_restaurar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"43px","width":"150px","caption":"Restaurar","borderColor":"#bbb","iconUrl":"resources/images/ico/refresh.png","iconMargin":"0 0px 0 0"}, {"onclick":"cur_encabezado_butt_restaurarClick"}]
												}],
												cur_panel_asig: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","layoutKind":"left-to-right"}, {}, {
													cur_asig_panel_asignaturas: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"ASIGNATURAS","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White","margin":"0","borderColor":"#fff"}, {}, {
														cur_asig_datag_asignaturasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"cur_asig_datag_asignaturasDataGrid1Selected","onSelectionChanged":"cur_asig_datag_asignaturasDataGrid1SelectionChanged"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_asig_asignaturas_vista_docentes_asignaturas2","expression":undefined}, {}]
															}],
															subject1: ["wm.DataGridColumn", {"caption":"Subject","field":"subject","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															asignatura1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura","columnWidth":"100%","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															idasignatura1: ["wm.DataGridColumn", {"caption":" ","field":"idasignatura","columnWidth":"81px"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}]
												}],
												cur_panel_encabezado2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue","wm_BackgroundColor_VeryLightGray"]},"height":"40px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
													crear_unidad: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"crear_unidadClick"}],
													editar_unidad: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"editar_unidadClick"}],
													ver_unidad: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"ver_unidadClick"}]
												}],
												cur_panel_unid: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"right","height":"239px","layoutKind":"left-to-right","lock":true}, {}, {
													cur_unid_panel_unidades: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"UNIDADES","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White","margin":"0","lock":true,"borderColor":"#ffffff"}, {}, {
														cur_unid_datag_unidadesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"cur_unid_datag_unidadesDataGrid1Selected"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_unid_unidades_unidadLiveVariable1","expression":undefined}, {}]
															}],
															idUnidad1: ["wm.DataGridColumn", {"caption":" ","field":"idUnidad","columnWidth":"90px"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															unit1: ["wm.DataGridColumn", {"caption":"Unit","field":"unit","columnWidth":"100%","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															fechaInicio1: ["wm.DataGridColumn", {"caption":"Fecha Inicio","field":"fechaInicio","columnWidth":"110px","index":4,"display":"Date","autoSize":undefined}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															fechaFin1: ["wm.DataGridColumn", {"caption":"Fecha Final","field":"fechaFin","columnWidth":"110px","index":5,"display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															numeroUnidad1: ["wm.DataGridColumn", {"caption":"No. Unidad","field":"numeroUnidad","columnWidth":"110px","index":1,"display":"Number"}, {}, {
																format: ["wm.NumberFormatter", {}, {}]
															}]
														}]
													}],
													panel_unidades: ["wm.Panel", {"height":"100%","width":"0px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														top_close: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"29px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															close_panel: ["wm.Button", {"height":"28px","width":"28px","caption":"","margin":"1","borderColor":"#bbb","iconUrl":"resources/images/news_icons/close.png","iconMargin":"3px 0px 0 3px","iconHeight":"28px"}, {"onclick":"close_panelClick"}]
														}],
														unidadLiveForm1: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onBeginInsert":"unidadLiveForm1BeginInsert","onSuccess":"l_cur_unid_unidades_unidadLiveVariable1","onBeginUpdate":"unidadLiveForm1BeginUpdate","onCancelEdit":"unidadLiveForm1CancelEdit"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_unid_datag_unidadesDataGrid1.selectedItem","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"asignaturaRelatedEditor1.dataOutput","expression":undefined}, {}]
															}],
															bigUnitPanel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																left: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	idUnidadEditor1: ["wm.Editor", {"caption":"Id Unidad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idUnidad"}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	unidadEditor1: ["wm.Editor", {"caption":"Unidad","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"unidad"}, {}, {
																		editor: ["wm._TextAreaEditor", {"required":true}, {}]
																	}],
																	fechaInicioEditor1: ["wm.Editor", {"caption":"Fecha Inicio","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaInicio"}, {}, {
																		editor: ["wm._DateEditor", {"required":true}, {}]
																	}]
																}],
																right: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	asignaturaRelatedEditor1: ["wm.RelatedEditor", {"formField":"asignatura"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_unid_datag_unidadesDataGrid1.selectedItem.asignatura","expression":undefined}, {}]
																		}],
																		asignaturaLookup1: ["wm.Editor", {"caption":"Id Asignatura","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAsignatura"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}],
																	unitEditor1: ["wm.Editor", {"caption":"Unit","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"unit"}, {}, {
																		editor: ["wm._TextAreaEditor", {"required":true}, {}]
																	}],
																	fechaFinEditor1: ["wm.Editor", {"caption":"Fecha Fin","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaFin"}, {}, {
																		editor: ["wm._DateEditor", {"required":true}, {}]
																	}]
																}]
															}],
															numeroUnidadEditor1: ["wm.Editor", {"caption":"No. Unidad","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"numeroUnidad"}, {}, {
																editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","startUpdate":true}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"curriculo_numerounidad","expression":undefined}, {}]
																	}]
																}]
															}],
															editPanel4: ["wm.EditPanel", {"liveForm":"unidadLiveForm1","savePanel":"savePanel4","operationPanel":"operationPanel4"}, {}, {
																savePanel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																	saveButton4: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel4.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formInvalid","expression":undefined}, {}]
																		}]
																	}],
																	cancelButton4: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel4.cancelEdit"}]
																}],
																operationPanel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	newButton4: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel4.beginDataInsert"}],
																	updateButton4: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
																		}]
																	}],
																	deleteButton4: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}],
												cur_panel_encabezado3: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
													crear_subtopico_1: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"crear_subtopico_1Click"}],
													editar_subtopico: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"editar_subtopicoClick"}],
													ver_subtopico: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"ver_subtopicoClick"}]
												}],
												cur_panel_subt: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"right","height":"239px","layoutKind":"left-to-right","lock":true}, {}, {
													cur_subt_panel_subtopicos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"SUBTOPICOS","captionClasses":"wm_BackgroundGradient_Blue wm_FontColor_White wm_FontSizePx_16px","margin":"0","borderColor":"#ffffff"}, {}, {
														cur_subt_datag_subtopicoDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"cur_subt_datag_subtopicoDataGrid1Selected"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_subt_subtopicos_subtopicoLiveVariable1","expression":undefined}, {}]
															}],
															idSubtopico1: ["wm.DataGridColumn", {"caption":" ","field":"idSubtopico","columnWidth":"90px"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															fechaInicio1: ["wm.DataGridColumn", {"caption":"Fecha Inicio","field":"fechaInicio","columnWidth":"110px","index":4,"display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															fechaFin1: ["wm.DataGridColumn", {"caption":"Fecha Final","field":"fechaFin","columnWidth":"110px","index":5,"display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															subtopic1: ["wm.DataGridColumn", {"caption":"Subtopic","field":"subtopic","columnWidth":"100%","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															numeroSubtopico1: ["wm.DataGridColumn", {"caption":"No. Subtopico","field":"numeroSubtopico","columnWidth":"110px","index":1,"display":"Number"}, {}, {
																format: ["wm.NumberFormatter", {}, {}]
															}]
														}]
													}],
													panel_subtopicos: ["wm.Panel", {"height":"100%","width":"0px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														subtopicoLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_subt_subtopicos_subtopicoLiveVariable1","onBeginInsert":"subtopicoLiveForm1BeginInsert","onCancelEdit":"subtopicoLiveForm1CancelEdit","onBeginUpdate":"subtopicoLiveForm1BeginUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput.unidad","source":"unidadRelatedEditor1.dataOutput","expression":undefined}, {}]
															}],
															top_close_subtopic: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"29px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																close_panel_subtopic: ["wm.Button", {"height":"28px","width":"28px","caption":"","margin":"1","borderColor":"#bbb","iconUrl":"resources/images/news_icons/close.png","iconMargin":"3px 0px 0 3px","iconHeight":"28px"}, {"onclick":"close_panel_subtopicClick"}]
															}],
															bigSubPanel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																left_sub: ["wm.Panel", {"height":"100%","width":"50%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	idSubtopicoEditor1: ["wm.Editor", {"caption":"Id Subtopico","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	subtopicoEditor1: ["wm.Editor", {"caption":"Subtopico","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"subtopico"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	fechaInicioEditor2: ["wm.Editor", {"caption":"Fecha Inicio","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaInicio"}, {}, {
																		editor: ["wm._DateEditor", {}, {}]
																	}]
																}],
																right_sub: ["wm.Panel", {"height":"100%","width":"50%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	unidadRelatedEditor1: ["wm.RelatedEditor", {"formField":"unidad"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.unidad","expression":undefined}, {}]
																		}],
																		unidadLookup1: ["wm.Editor", {"caption":"Id Unidad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idUnidad"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}],
																	subtopicEditor1: ["wm.Editor", {"caption":"Subtopic","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"subtopic"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	fechaFinEditor2: ["wm.Editor", {"caption":"Fecha Fin","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaFin"}, {}, {
																		editor: ["wm._DateEditor", {}, {}]
																	}]
																}]
															}],
															numeroSubtopicoEditor1: ["wm.Editor", {"caption":"Numero Subtopico","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"numeroSubtopico"}, {}, {
																editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"curriculo_numeroSubtopico","expression":undefined}, {}]
																	}]
																}]
															}],
															editPanel5: ["wm.EditPanel", {"liveForm":"subtopicoLiveForm1","savePanel":"savePanel5","operationPanel":"operationPanel5"}, {}, {
																savePanel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																	saveButton5: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel5.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formInvalid","expression":undefined}, {}]
																		}]
																	}],
																	cancelButton5: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel5.cancelEdit"}]
																}],
																operationPanel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	newButton5: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel5.beginDataInsert"}],
																	updateButton5: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel5.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
																		}]
																	}],
																	deleteButton5: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel5.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_subTablas: ["wm.TabLayers", {"borderColor":"#CD0000"}, {}, {
												cur_subTablas_apr: ["wm.Layer", {"caption":"APRENDIZAJE","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_apr_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
														crear_aprendizaje_1: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconWidth":"18px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"crear_aprendizaje_1Click"}],
														editar_aprendizaje: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"editar_aprendizajeClick"}],
														ver_aprendizaje: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"ver_aprendizajeClick"}]
													}],
													cur_panel_apr: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","layoutKind":"left-to-right"}, {}, {
														cur_apr_panel_subtopicos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Aprendizaje","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White","margin":"0","borderColor":"#ffffff","border":"3,3,3,3"}, {}, {
															cur_apr_datag_aprendizajeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"cur_apr_datag_aprendizajeDataGrid1Selected","onSelectionChanged":"cur_apr_datag_aprendizajeDataGrid1SelectionChanged"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_apr_aprendizajes_aprendizajeLiveVariable1","expression":undefined}, {}]
																}],
																idAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"idAprendizaje","columnWidth":"62px"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																fechaEsperada1: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"fechaEsperada","columnWidth":"95px","index":1,"display":"Date"}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"aprendizaje","columnWidth":"100%","index":2}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																learning1: ["wm.DataGridColumn", {"caption":"Learning","field":"learning","columnWidth":"100%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																peso1: ["wm.DataGridColumn", {"caption":"Peso","field":"peso","columnWidth":"50px","index":4,"display":"Number"}, {}, {
																	format: ["wm.NumberFormatter", {}, {}]
																}],
																column3: ["wm.DataGridColumn", {"caption":"Dimensión Comprension","field":"dimensionComprension.dimensionComprension","index":8}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column4: ["wm.DataGridColumn", {"caption":"Dimensión Curricular","field":"dimensionCurricular.dimensionCurricular","index":9}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}],
														panel_aprendizaje: ["wm.Panel", {"height":"100%","width":"0px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															top_close_aprendizaje: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"29px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																close_panel_aprendizaje: ["wm.Button", {"height":"28px","width":"28px","caption":"","margin":"1","borderColor":"#bbb","iconUrl":"resources/images/news_icons/close.png","iconWidth":"20px","iconMargin":"3px 0px 0 3px","iconHeight":"20px"}, {"onclick":"close_panel_aprendizajeClick"}]
															}],
															aprendizajeLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_apr_aprendizajes_aprendizajeLiveVariable1","onBeginInsert":"aprendizajeLiveForm1BeginInsert","onBeginUpdate":"aprendizajeLiveForm1BeginUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem","expression":undefined}, {}],
																	wire1: ["wm.Wire", {"targetProperty":"dataOutput.dimensionComprension","source":"dimensionComprensionRelatedEditor1.dataOutput","expression":undefined}, {}],
																	wire2: ["wm.Wire", {"targetProperty":"dataOutput.dimensionCurricular","source":"dimensionCurricularRelatedEditor1.dataOutput","expression":undefined}, {}],
																	wire3: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor1.dataOutput","expression":undefined}, {}],
																	wire4: ["wm.Wire", {"targetProperty":"dataOutput.nivelEsperado","source":"relatedEditor5.dataOutput","expression":undefined}, {}],
																	wire5: ["wm.Wire", {"targetProperty":"dataOutput.inteligencia","source":"relatedEditor2.dataOutput","expression":undefined}, {}]
																}],
																panel16: ["wm.Panel", {"height":"38px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	idAprendizajeEditor1: ["wm.Editor", {"caption":"ID Aprendizaje","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	relatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup7.selectedItem","expression":undefined}, {}]
																		}],
																		subtopicoLookup6: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}]
																}],
																bigUnitPanelApr: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	leftapr: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		aprendizajeEditor1: ["wm.Editor", {"caption":"Aprendizaje","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"aprendizaje","singleLine":false}, {}, {
																			editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción del Aprendizaje","invalidMessage":"Este campo es obligatorio *","tooltipDisplayTime":3000}, {}]
																		}],
																		fechaEsperadaEditor1: ["wm.Editor", {"caption":"Fecha esperada","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaEsperada"}, {}, {
																			editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione una Fecha"}, {}]
																		}],
																		pesoEditor3: ["wm.NumberEditor", {"display":"Select","height":"26px","width":"150%","caption":"Peso","readonly":true,"formField":"peso"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"dataValue","dataField":"name","required":true,"lookupDisplay":"Number","startUpdate":true}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"pesos","expression":undefined}, {}]
																				}],
																				format: ["wm.NumberFormatter", {}, {}]
																			}]
																		}],
																		relatedEditor5: ["wm.RelatedEditor", {"formField":"nivelEsperado","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.nivelEsperado","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"nivelEsperadoLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			nivelEsperadoLookup1: ["wm.Editor", {"caption":"Nivel Esperado","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																				editor: ["wm._LookupEditor", {"required":true,"displayField":"nivelEsperado"}, {}]
																			}]
																		}],
																		dimensionComprensionRelatedEditor1: ["wm.RelatedEditor", {"formField":"dimensionComprension","lock":true}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.dimensionComprension","expression":undefined}, {}],
																				wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"dimensionComprensionLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			dimensionComprensionLookup1: ["wm.Editor", {"caption":"Dimensión de la comprensión","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																				editor: ["wm._LookupEditor", {"required":true,"displayField":"dimensionComprension","autoDataSet":false,"startUpdate":false}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaDimension_comprension","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		dimensionCurricularRelatedEditor1: ["wm.RelatedEditor", {"formField":"dimensionCurricular","lock":true}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.dimensionCurricular","expression":undefined}, {}],
																				wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"dimensionCurricularLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			dimensionCurricularLookup1: ["wm.Editor", {"caption":"Dimensión curricular","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																				editor: ["wm._LookupEditor", {"required":true,"displayField":"dimensionCurricular","autoDataSet":false,"startUpdate":false}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaDimension_curricular","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}],
																	rightapr: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		learningEditor1: ["wm.Editor", {"caption":"Learning","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"learning","singleLine":false}, {}, {
																			editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción del Aprendizaje","invalidMessage":"Este campo es obligatorio *","tooltipDisplayTime":3000}, {}]
																		}],
																		ejeIdEjeEditor1: ["wm.Editor", {"caption":"1er. Eje","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"ejeIdEje"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje","required":true}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes","expression":undefined}, {}]
																				}]
																			}]
																		}],
																		eje2IdEjeEditor1: ["wm.Editor", {"caption":"2do. Eje","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eje2IdEje"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes2","expression":undefined}, {}]
																				}]
																			}]
																		}],
																		eje3IdEjeEditor1: ["wm.Editor", {"caption":"3er. Eje","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eje3IdEje"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes3","expression":undefined}, {}]
																				}]
																			}]
																		}],
																		relatedEditor2: ["wm.RelatedEditor", {"formField":"inteligencia","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.inteligencia","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"inteligenciaLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			inteligenciaLookup1: ["wm.Editor", {"caption":"Inteligencia","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																				editor: ["wm._LookupEditor", {"required":true,"displayField":"inteligencia","autoDataSet":false,"startUpdate":false}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaInteligencias","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}]
																}],
																editPanel1: ["wm.EditPanel", {"liveForm":"aprendizajeLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","lock":false}, {}, {
																	savePanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																		saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
																			}]
																		}],
																		cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
																	}],
																	operationPanel1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"120px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
																		updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"120px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
																			}]
																		}],
																		deleteButton1: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.deleteData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_metas: ["wm.Layer", {"caption":"OTRAS METAS","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_metas_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														crear_meta_1: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"crear_meta_1Click"}],
														editar_meta: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"editar_metaClick"}],
														ver_meta: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconWidth":"20px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"20px"}, {"onclick":"ver_metaClick"}]
													}],
													cur_panel_metas: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","layoutKind":"left-to-right"}, {}, {
														cur_metas_panel_metas: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Metas","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White","margin":"0","borderColor":"#ffffff"}, {}, {
															cur_metas_datag_otrasmetasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onRowDblClick":"cur_metas_datag_otrasmetasDataGrid1RowDblClick","onSelected":"cur_metas_datag_otrasmetasDataGrid1Selected","onSelectionChanged":"cur_metas_datag_otrasmetasDataGrid1SelectionChanged"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_metas_metas_otrasmetasLiveVariable1","expression":undefined}, {}]
																}],
																idOtraMeta1: ["wm.DataGridColumn", {"caption":" ","field":"idOtraMeta"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																meta1: ["wm.DataGridColumn", {"caption":"Meta (Descripción)","field":"meta","columnWidth":"100%","index":1}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","index":2,"display":"Date","autoSize":undefined}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}]
															}]
														}],
														panel_metas: ["wm.Panel", {"height":"100%","width":"0px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															otrasmetasLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_metas_metas_otrasmetasLiveVariable1","onBeginInsert":"otrasmetasLiveForm1BeginInsert"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_metas_datag_otrasmetasDataGrid1.selectedItem","expression":undefined}, {}],
																	wire1: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor7.dataOutput","expression":undefined}, {}]
																}],
																top_close_metas: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"29px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	close_panel_metas: ["wm.Button", {"height":"28px","width":"28px","caption":"","margin":"1","borderColor":"#bbb","iconUrl":"resources/images/news_icons/close.png","iconWidth":"20px","iconMargin":"3px 0px 0 3px","iconHeight":"20px"}, {"onclick":"close_panel_metasClick"}]
																}],
																bigUnitPanelMetas: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	left_metas: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		idOtraMetaEditor1: ["wm.Editor", {"caption":"ID Otra Meta","width":"100%","height":"32px","display":"Number","readonly":true,"formField":"idOtraMeta"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		metaEditor1: ["wm.Editor", {"caption":"Meta","width":"100%","height":"90%","display":"TextArea","readonly":true,"formField":"meta","singleLine":false}, {}, {
																			editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción de la Meta","invalidMessage":"Este campo es obligatorio *"}, {}]
																		}]
																	}],
																	right_metas: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		relatedEditor7: ["wm.RelatedEditor", {"formField":"subtopico","lock":true,"height":"32px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_metas_datag_otrasmetasDataGrid1.selectedItem.subtopico","expression":undefined}, {}]
																			}],
																			subtopicoLookup1: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}],
																		fechaEditor1: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
																			editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione una Fecha","invalidMessage":"Este campo es obligatorio *"}, {}]
																		}],
																		logradoEditor1: ["wm.Editor", {"caption":"Logrado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"logrado","displayValue":true,"emptyValue":"false"}, {}, {
																			editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																		}]
																	}]
																}],
																editPanel2: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"otrasmetasLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2","lock":false}, {}, {
																	savePanel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																		saveButton2: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
																			}]
																		}],
																		cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
																	}],
																	operationPanel2: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		newButton2: ["wm.RoundedButton", {"caption":"Nueva Meta","width":"150px","height":"100%"}, {"onclick":"editPanel2.beginDataInsert"}],
																		updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","width":"128px","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
																			}]
																		}],
																		deleteButton2: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.deleteData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_act: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"ACTIVIDADES","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_act_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														crear_actividad: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconWidth":"19px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"19px"}, {"onclick":"crear_actividadClick"}],
														editar_actividad: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconWidth":"19px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"19px"}, {"onclick":"editar_actividadClick"}],
														ver_actividad: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconWidth":"19px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"19px"}, {"onclick":"ver_actividadClick"}]
													}],
													cur_panel_act: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","layoutKind":"left-to-right"}, {}, {
														cur_act_panel_actividades: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Actividad","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White","margin":"0","borderColor":"#ffffff"}, {}, {
															cur_act_datag_actividadDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"cur_act_datag_actividadDataGrid1Selected","onSelectionChanged":"cur_act_datag_actividadDataGrid1SelectionChanged"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_act_actividades_actividadLiveVariable1","expression":undefined}, {}]
																}],
																idActividad1: ["wm.DataGridColumn", {"caption":" ","field":"idActividad","columnWidth":"60px"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																actividad1: ["wm.DataGridColumn", {"caption":"Actividad","field":"actividad","columnWidth":"60%","index":1}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","columnWidth":"90px","index":2,"display":"Date"}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Tipo Actividad","field":"tipoActividad.tipoActividad","columnWidth":"40%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":"Tipo Desempeño","field":"tipoDesempeno.tipoDesempeno","columnWidth":"50%","index":4}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column3: ["wm.DataGridColumn", {"caption":"Tipo Valoración","field":"tipoValoracion.tipoValoracion","columnWidth":"50%","index":5}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}],
														panel_actividad: ["wm.Panel", {"height":"100%","width":"0px","horizontalAlign":"left","verticalAlign":"top","lock":true}, {}, {
															actividadLiveForm1: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onSuccess":"l_cur_act_actividades_actividadLiveVariable1","onBeginInsert":"actividadLiveForm1BeginInsert"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem","expression":undefined}, {}],
																	wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoActividad","source":"relatedEditor8.dataOutput","expression":undefined}, {}],
																	wire2: ["wm.Wire", {"targetProperty":"dataOutput.tipoValoracion","source":"relatedEditor9.dataOutput","expression":undefined}, {}],
																	wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoDesempeno","source":"relatedEditor10.dataOutput","expression":undefined}, {}],
																	wire4: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor3.dataOutput","expression":undefined}, {}]
																}],
																top_close_actividades: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"29px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	close_panel_actividad: ["wm.Button", {"height":"28px","width":"28px","caption":"","margin":"1","borderColor":"#bbb","iconUrl":"resources/images/news_icons/close.png","iconWidth":"20px","iconMargin":"2px 0px 0 3px","iconHeight":"20px"}, {"onclick":"close_panel_actividadClick"}]
																}],
																cur_formularios_actividad_panel1: ["wm.Panel", {"height":"40px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	idActividadEditor1: ["wm.Editor", {"caption":"ID Actividad","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idActividad"}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	relatedEditor3: ["wm.RelatedEditor", {"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup2.selectedItem","expression":undefined}, {}]
																		}],
																		subtopicoLookup3: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}]
																}],
																bigUnitPanelActividades: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	left_activities: ["wm.Panel", {"height":"100%","width":"174px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		actividadEditor1: ["wm.Editor", {"caption":"Actividad","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"actividad","captionAlign":"left","captionSize":"10%","captionPosition":"top","singleLine":false}, {}, {
																			editor: ["wm._TextAreaEditor", {"required":true}, {}]
																		}]
																	}],
																	right_activities: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		fechaEditor2: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
																			editor: ["wm._DateEditor", {"required":true}, {}]
																		}],
																		requeridoAlternativoEditor1: ["wm.Editor", {"caption":"Requerido","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"requeridoAlternativo","displayValue":true,"emptyValue":"false"}, {}, {
																			editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																		}],
																		relatedEditor8: ["wm.RelatedEditor", {"formField":"tipoActividad","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoActividad","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoActividadLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			tipoActividadLookup1: ["wm.Editor", {"caption":"Tipo de Actividad","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {"onchange":"tipoActividadLookup1Change"}, {
																				editor: ["wm._LookupEditor", {"required":true,"displayField":"tipoActividad","autoDataSet":false,"startUpdate":false}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoActividades","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		relatedEditor9: ["wm.RelatedEditor", {"formField":"tipoValoracion","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoValoracion","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoValoracionLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			tipoValoracionLookup1: ["wm.Editor", {"caption":"Retroalimentación","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																				editor: ["wm._LookupEditor", {"displayField":"tipoValoracion","autoDataSet":false,"startUpdate":false}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoValoracion","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		relatedEditor10: ["wm.RelatedEditor", {"formField":"tipoDesempeno","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoDesempeno","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoDesempenoLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			tipoDesempenoLookup1: ["wm.Editor", {"caption":"Desempeño","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true}, {}, {
																				editor: ["wm._LookupEditor", {"displayField":"tipoDesempeno","autoDataSet":false,"startUpdate":false}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoDesempeno","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}]
																}],
																editPanel6: ["wm.EditPanel", {"liveForm":"actividadLiveForm1","savePanel":"savePanel6","operationPanel":"operationPanel6","lock":false}, {}, {
																	savePanel6: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																		saveButton6: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel6.saveData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formInvalid","expression":undefined}, {}]
																			}]
																		}],
																		cancelButton6: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel6.cancelEdit"}]
																	}],
																	operationPanel6: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		newButton6: ["wm.RoundedButton", {"caption":"Nuevo","height":"100%"}, {"onclick":"editPanel6.beginDataInsert"}],
																		updateButton6: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel6.beginDataUpdate"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formUneditable","expression":undefined}, {}]
																			}]
																		}],
																		deleteButton6: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel6.deleteData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formUneditable","expression":undefined}, {}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_rec: ["wm.Layer", {"caption":"RECURSOS","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_rec_encabezado_recursos: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														crear_recurso_1: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconWidth":"19px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"19px"}, {"onclick":"crear_recurso_1Click"}],
														editar_recurso: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconWidth":"19px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"19px"}, {"onclick":"editar_recursoClick"}],
														ver_recurso: ["wm.Button", {"height":"100%","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconWidth":"19px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"19px"}, {"onclick":"ver_recursoClick"}]
													}],
													cur_panel_rec: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","layoutKind":"left-to-right"}, {}, {
														cur_rec_panel_recursos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Recurso","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White","margin":"0","borderColor":"#ffffff"}, {}, {
															cur_rec_datag_recursosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"cur_rec_datag_recursosDataGrid1Selected"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_rec_recursos_recursoLiveVariable1","expression":undefined}, {}]
																}],
																idRecurso1: ["wm.DataGridColumn", {"caption":" ","field":"idRecurso","display":"Number","autoSize":undefined}, {}, {
																	format: ["wm.NumberFormatter", {}, {}]
																}],
																recurso1: ["wm.DataGridColumn", {"caption":"Recurso","field":"recurso","columnWidth":"60%","index":1}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																ubicacion1: ["wm.DataGridColumn", {"caption":"Direccion Recurso http://","field":"ubicacion","columnWidth":"120%","index":3,"dataExpression":"'<a href=\"'+${ubicacion}+'\" target=\"_blank\">'+${ubicacion}+'</a>'"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}],
														panel_recursos: ["wm.Panel", {"height":"100%","width":"0px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															recursoLiveForm2: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_rec_recursos_recursoLiveVariable1","onBeginInsert":"recursoLiveForm2BeginInsert","onBeforeOperation":"l_cur_formularios_recursos_tipoRecurso"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem","expression":undefined}, {}],
																	wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoRecurso","source":"tipoRecursoRelatedEditor2.dataOutput","expression":undefined}, {}],
																	wire2: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"subtopicoRelatedEditor1.dataOutput","expression":undefined}, {}]
																}],
																top_close_recursos: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"29px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	close_panel_recursos: ["wm.Button", {"height":"100%","width":"28px","caption":"","margin":"1","borderColor":"#bbb","iconUrl":"resources/images/news_icons/close.png","iconWidth":"20px","iconMargin":"2px 0px 0 3px","iconHeight":"20px"}, {"onclick":"close_panel_recursosClick"}]
																}],
																bigUnitPanelRecursos: ["wm.Panel", {"height":"60%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	left_recursos: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		idRecursoEditor2: ["wm.Editor", {"caption":"ID Recurso","width":"100%","height":"32px","display":"Number","readonly":true,"formField":"idRecurso"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		recursoEditor1: ["wm.Editor", {"caption":"Recurso","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"recurso","singleLine":false}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}]
																	}],
																	right_recursos: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		subtopicoRelatedEditor1: ["wm.RelatedEditor", {"formField":"subtopico","lock":true,"height":"32px"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																				wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup5.selectedItem","expression":undefined}, {}]
																			}],
																			subtopicoLookup4: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}],
																		tipoRecursoRelatedEditor2: ["wm.RelatedEditor", {"formField":"tipoRecurso","height":"33px"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem.tipoRecurso","expression":undefined}, {}],
																				wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoRecursoLookup2.selectedItem","expression":undefined}, {}]
																			}],
																			tipoRecursoLookup2: ["wm.Editor", {"caption":"Tipo recurso","width":"100%","height":"100%","display":"Lookup","readonly":true,"formField":""}, {}, {
																				editor: ["wm._LookupEditor", {"required":true,"displayField":"tipoRecurso","autoDataSet":false,"startUpdate":false}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_recursos_tipoRecurso","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		ubicacionEditor2: ["wm.Editor", {"caption":"Dirección Http://","width":"100%","height":"26px","readonly":true,"formField":"ubicacion"}, {}, {
																			editor: ["wm._TextEditor", {}, {}]
																		}]
																	}]
																}],
																idSyIdIdSyEditor1: ["wm.Editor", {"caption":"IdSyIdIdSy","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSyIdIdSy","showing":false}, {}, {
																	editor: ["wm._NumberEditor", {}, {}]
																}],
																cur_formularios_butt_cargar_recurso: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"40px","width":"100%","caption":"Recursos","borderColor":"#4cae4c","iconUrl":"resources/images/ico/page_up.png","iconWidth":"30px","iconMargin":"0 0px 0 0"}, {"onclick":"cur_formularios_butt_cargar_recursoClick"}],
																editPanel13: ["wm.EditPanel", {"liveForm":"recursoLiveForm2","savePanel":"savePanel13","operationPanel":"operationPanel13","height":"50px"}, {}, {
																	savePanel13: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																		saveButton13: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel13.saveData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formInvalid","expression":undefined}, {}]
																			}]
																		}],
																		cancelButton13: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel13.cancelEdit"}]
																	}],
																	operationPanel13: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		newButton13: ["wm.RoundedButton", {"caption":"Nuevo","width":"131px","height":"100%"}, {"onclick":"editPanel13.beginDataInsert"}],
																		updateButton13: ["wm.RoundedButton", {"caption":"Actualizar","width":"136px","height":"100%","disabled":true}, {"onclick":"editPanel13.beginDataUpdate"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formUneditable","expression":undefined}, {}]
																			}]
																		}],
																		deleteButton13: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel13.deleteData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formUneditable","expression":undefined}, {}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								calificaciones: ["wm.Layer", {"caption":"Calificaciones","horizontalAlign":"left","verticalAlign":"top","roles":["6","8","9","10","7","25"],"lock":true,"borderColor":"#CD0000"}, {"onShow":"calificacionesShow"}, {
									calf_panel_encabezado_principal: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"42px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","margin":"3","layoutKind":"left-to-right"}, {}, {
										textEditor6: ["wm.TextEditor", {"width":"308px","caption":"idTipoPersona","showing":false}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getTipoPersona.usuario"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}],
										l_calif_alumnos_panel1_butt_cambiarPanel: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px"]},"height":"100%","width":"153px","caption":"Aprendizajes","margin":"0","borderColor":"#D14836","iconUrl":"resources/images/ico/canvas_holder.png","iconWidth":"30px","iconMargin":"0 0px 0 0","roles":["10","11","4","5","6","9","18","19","20","22","21","23","24"]}, {"onclick":"l_calif_alumnos_panel1_butt_cambiarPanelClick"}],
										button12: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"153px","caption":"Estudiantes","margin":"0","borderColor":"#3C9300","iconUrl":"resources/images/ico/user-comment.png","iconMargin":"0 0px 0 0","roles":["4","5","6","9","10","11","20","21","22","23","24"]}, {"onclick":"button12Click"}],
										l_calif_alumnos_panel1_butt_promocion: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"150px","caption":"Promoción","margin":"0","borderColor":"#CD3333","iconUrl":"resources/images/ico/prom32x32.png","iconMargin":"0 0px 0 0","roles":["6","9","10","13","7","11","25"]}, {"onclick":"l_calif_alumnos_panel1_butt_promocionClick"}],
										button39: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"107px","caption":"Actividades","margin":"0","borderColor":"#4D90FE","roles":["4","10","11","22","21","20","23","24","5","6","18","19","9"]}, {"onclick":"button39Click"}]
									}],
									fotoEstd: ["wm.Panel", {"height":"0px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
										imgstd: ["wm.Picture", {"height":"100%","border":"0","width":"120px","source":"http://big.cs.bris.ac.uk/wp-content/themes/crystal/img/default-profile-image.png","aspect":"v"}, {}]
									}],
									calf_panel_encabezado_opciones: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"45px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
										calif_encabezado_opciones_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"],"captionNode":["wm_FontSizePx_12px"]},"width":"180px","caption":"Año escolar","captionSize":"80%"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_sel_grado: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"],"captionNode":["wm_FontSizePx_12px"]},"width":"200px","caption":"Grado","captionSize":"70%","height":"26px"}, {"onchange":"calif_encabezado_opciones_sel_gradoChange"}, {
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_sel_curso: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontSizePx_12px"],"domNode":["wm_FontSizePx_12px"]},"width":"200px","caption":"Curso","captionSize":"70%","disabled":true,"height":"26px"}, {"onchange":"calif_encabezado_opciones_sel_cursoChange"}, {
											editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_encabezado_opciones_listaCursos","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"48px","caption":"","borderColor":"#FFCC00","iconUrl":"resources/images/ico/trash-can.png","iconMargin":"0 0px 0 0"}, {"onclick":"calif_encabezado_opciones_butt_limpiarClick"}],
										calif_encabezado_opciones_butt_reporte: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"42px","borderColor":"#474747","iconUrl":"resources/images/ico/download.png","iconMargin":"5 10px 0 0","disabled":true}, {"onclick":"calif_encabezado_opciones_butt_reporteClick"}],
										calif_encabezado_opciones_butt_limpiar1: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_24px"]},"height":"43px","width":"48px","caption":"☝","iconMargin":"0 0px 0 0","showing":false,"roles":["6","7","9","10","13"]}, {"onclick":"calif_encabezado_opciones_butt_limpiar1Click"}],
										calif_encabezado_opciones_butt_reporte_pendientes: ["wm.Button", {"height":"43px","width":"52px","caption":"","borderColor":"#474747","iconUrl":"resources/images/news_icons/icon2.png","iconMargin":"0 0px 0 0","disabled":true}, {"onclick":"calif_encabezado_opciones_butt_reporte_pendientesClick"}],
										spacer4: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
										calif_alumnos_panel1_butt_show: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"35px","width":"35px","caption":"","margin":"0","borderColor":"#3C9300","iconUrl":"resources/images/buttons/left.png","iconWidth":"30px","iconMargin":"0 10px 0 8px","iconHeight":"20px","showing":false}, {"onclick":"calif_alumnos_panel1_butt_showClick"}],
										calif_alumnos_panel1_butt_hide: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"35px","width":"35px","caption":"","margin":"0","borderColor":"#3C9300","iconUrl":"resources/images/buttons/right.png","iconWidth":"30px","iconMargin":"0 10px 0 8px","iconHeight":"20px","showing":false}, {"onclick":"calif_alumnos_panel1_butt_hideClick"}],
										l_calif_alumnos_butt_ocultar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px"]},"height":"35px","width":"35px","caption":"","margin":"0","borderColor":"#D14836","iconUrl":"resources/images/buttons/left.png","iconWidth":"30px","iconMargin":"0 0px 0 8px","iconHeight":"20px"}, {"onclick":"l_calif_alumnos_butt_ocultarClick"}],
										l_calif_alumnos_butt_mostrar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px"]},"height":"35px","width":"35px","caption":"","margin":"0","borderColor":"#D14836","iconUrl":"resources/images/buttons/right.png","iconWidth":"30px","iconMargin":"0 0px 0 8px","iconHeight":"20px"}, {"onclick":"l_calif_alumnos_butt_mostrarClick"}],
										button1: ["wm.Button", {"height":"48px","width":"96px","showing":false}, {"onclick":"button1Click"}],
										spacer8: ["wm.Spacer", {"height":"48px","width":"3px"}, {}]
									}],
									calif_panel_contenedor_aprendizaje: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#ffffff"}, {}, {
										calif_contendor_layer_principal: ["wm.Layers", {}, {}, {
											calif_contendor_sublayer_principal: ["wm.Layer", {"caption":"layer20","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												calif_contendor_panel1: ["wm.Panel", {"height":"50%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#fffff"}, {}, {
													calif_asig_datag_asignaturasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","borderColor":"#fff","width":"447px"}, {"onSelected":"calif_asig_datag_asignaturasDataGrid1Selected","onDeselected":"calif_asig_datag_asignaturasDataGrid1Deselected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_asignaturas_docentes","expression":undefined}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":" ","field":"id.asignaturaIdAsignatura","columnWidth":"60px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"120%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Docente","field":"id.nombreLdap","columnWidth":"85px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													tablaUnidades: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_Unidades","expression":undefined}, {}]
														}],
														unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"213px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idUnidad1: ["wm.DataGridColumn", {"caption":"ID Unidad","field":"idUnidad","columnWidth":"58px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Numero Unidad","field":"numeroUnidad","columnWidth":"65px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													tablaSubtopicos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_Subtopicos","expression":undefined}, {}]
														}],
														subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"259px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"ID Subtopico","field":"idSubtopico","columnWidth":"76px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													splitter2: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													calif_asig_datag_aprendizajesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","borderColor":"#fff"}, {"onSelected":"calif_asig_datag_aprendizajesDataGrid1Selected","onSelectionChanged":"calif_asig_datag_aprendizajesDataGrid1SelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_aprendizajes","expression":undefined}, {}]
														}],
														idAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"id.idAprendizaje","columnWidth":"55px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"id.aprendizaje","columnWidth":"150%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Learning","field":"id.learning","columnWidth":"150%","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Unidad","field":"id.unidad","columnWidth":"100%","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Subtopico","field":"id.subtopico","columnWidth":"100%","index":8}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"id.fechaEsperada","columnWidth":"92px","index":4,"display":"Date"}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"#U","field":"id.numeroUnidad","columnWidth":"20px","index":5,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"#S","field":"id.numeroSubtopico","columnWidth":"20px","index":7,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column7: ["wm.DataGridColumn", {"caption":"Peso","field":"id.peso","columnWidth":"30px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												calif_contenedor_panel1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"5%","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
													mensaje_parpadeante: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"55%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
														label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"100%","width":"100%","border":"0","caption":"Importante: Seleccione un <u>Aprendizaje</u> y <u>Estudiante</u> para ver los detalles de calificaciones.","singleLine":false}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													calif_contenedor1_spacer1: ["wm.Spacer", {"height":"100%","width":"37px"}, {}],
													calif_contenedor_tex_cadena: ["wm.TextEditor", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_16px"]},"width":"100%","height":"100%","captionPosition":"right","readonly":true}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}]
												}],
												calif_contenedor_panel_datagrids: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#ffffff"}, {}, {
													calif_contenedor_datagrids_layer_principal: ["wm.Layers", {"padding":"5"}, {}, {
														calif_contenedor_datagrids_sublayer: ["wm.Layer", {"caption":"layer13","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															calif_contenedor_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"35px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
																calif_contenedor_lab_alumnos: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontColor_White","wm_FontSizePx_14px"]},"height":"24px","width":"100%","border":"0","caption":"ALUMNOS"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																calif_contenedor_sel_Genero: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontFamily_Geneva","wm_FontColor_White"],"domNode":["wm_FontSizePx_14px"]},"width":"180px","caption":"GENERO","captionSize":"65%"}, {"onchange":"l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso"}, {
																	editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Masculino, Femenino"}, {}, {
																		optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																	}]
																}],
																calif_contenedor_img_limpiar: ["wm.Picture", {"height":"24px","border":"0","width":"25px","source":"resources/images/ico/dialog-close.png","padding":"0","margin":"0","hint":"Restaurar todos los alumnos del curso"}, {"onclick":"calif_contenedor_img_limpiarClick"}]
															}],
															calif_alumnos_curso_datag_alumnosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","borderColor":"#fff"}, {"onSelected":"calif_alumnos_curso_datag_alumnosDataGrid1Selected","onSelectionChanged":"calif_alumnos_curso_datag_alumnosDataGrid1SelectionChanged"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso","expression":undefined}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":" ","field":"id.sexo","columnWidth":"52px","dataExpression":"if(${id.sexo}==\"Masculino\") {'<img src=\"resources/images/ico/Male.png\" height=\"28\" width=\"28\" /><center>'}  if(${id.sexo}==\"Femenino\") {'<img src=\"resources/images/ico/Female.png\" height=\"28\" width=\"28\" /><center>'}"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":2,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column5: ["wm.DataGridColumn", {"caption":"ID Persona","field":"id.personaIdPersona","columnWidth":"82px","index":1}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															log_acciones_docentesForm: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left","showing":false}, {}]
														}]
													}],
													splitter4: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													spacer10: ["wm.Spacer", {"height":"48px","width":"1px"}, {}],
													layers2: ["wm.Layers", {}, {}, {
														layer12: ["wm.Layer", {"caption":"layer12","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															calif_contenedor_panel_encabezado2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_Green"]},"height":"35px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
																label4: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontColor_White","wm_FontSizePx_12px"]},"height":"100%","width":"231%","border":"0","caption":"DETALLES DE CALIFICACIONES"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															panel36: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"height":"262px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																liveForm1: ["wm.LiveForm", {"height":"256px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onBeginInsert":"liveForm1BeginInsert","onSuccess":"alumnoCALIFICACIONES"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"calificaciones.selectedItem","expression":undefined}, {}],
																		wire1: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor1.dataOutput","expression":undefined}, {}]
																	}],
																	panel39: ["wm.Panel", {"height":"31px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		idInscAlumAprendizajeEditor1: ["wm.Editor", {"caption":"ID","width":"113px","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha Ingreso:","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true,"showing":false}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		calificacionEditor1: ["wm.Editor", {"caption":"Calificación:","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																				optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																			}]
																		}],
																		fechaLogroEditor1: ["wm.Editor", {"caption":"Fecha Logro:","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}]
																	}],
																	idSyEditor1: ["wm.Editor", {"caption":"IdSy","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSy","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	calificacionNumEditor1: ["wm.Editor", {"caption":"CalificacionNum","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacionNum","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	comentarioEditor1: ["wm.Editor", {"caption":"Comentario:","width":"100%","height":"105px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	personaIdPersonaEditor1: ["wm.Editor", {"caption":"ID PERSONA:","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"personaIdPersona","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	aprendizajeIdAprendizajeEditor1: ["wm.Editor", {"caption":"ID APRENDIZAJE","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"aprendizajeIdAprendizaje","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	periodoIdPeriodoEditor1: ["wm.Editor", {"caption":"PeriodoIdPeriodo","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"periodoIdPeriodo","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	inscAlumCursoRelatedEditor1: ["wm.RelatedEditor", {"formField":"inscAlumCurso"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"calificaciones.selectedItem.inscAlumCurso","expression":undefined}, {}],
																			wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"inscAlumCursoLookup2.selectedItem","expression":undefined}, {}]
																		}],
																		inscAlumCursoLookup1: ["wm.Editor", {"caption":"ID ALUMNO*CURSO:","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumCurso"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}],
																	editPanel8: ["wm.EditPanel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontSizePx_10px"]},"liveForm":"liveForm1","savePanel":"savePanel8","operationPanel":"operationPanel8"}, {}, {
																		savePanel8: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																			saveButton8: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel8.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formInvalid","expression":undefined}, {}]
																				}]
																			}],
																			cancelButton8: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel8.cancelEdit"}]
																		}],
																		operationPanel8: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			newButton8: ["wm.RoundedButton", {"caption":"Ingresar Calificacion","width":"160px","height":"100%"}, {"onclick":"editPanel8.beginDataInsert"}],
																			updateButton8: ["wm.RoundedButton", {"caption":"Actualizar Calificación","width":"170px","height":"100%","disabled":true}, {"onclick":"editPanel8.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formUneditable","expression":undefined}, {}]
																				}]
																			}],
																			deleteButton8: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel8.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formUneditable","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}]
																}]
															}],
															dataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0","height":"80px","borderColor":"#fff"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_calificacion_final","expression":undefined}, {}]
																}],
																fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"id.fechaLogro","index":1,"display":"Date"}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","field":"id.calificacion","columnWidth":"120%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																calificacionNum1: ["wm.DataGridColumn", {"caption":"Puntaje","field":"id.calificacionNum","columnWidth":"120%","index":4,"display":"Number"}, {}, {
																	format: ["wm.NumberFormatter", {"digits":2}, {}]
																}]
															}],
															inscalumaprendizajeLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
																inscalumaprendizajeGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_BackgroundColor_Green"]},"horizontalAlign":"left","verticalAlign":"top","title":"CALIFICACIONES DEL APRENDIZAJE","captionClasses":"wm_Border_DropShadow wm_BackgroundColor_Green wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_12px","margin":"0","borderColor":"#fff","border":"3,3,3,3","height":"237px"}, {}, {
																	inscalumaprendizajeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"inscalumaprendizajeDataGrid1Selected","onRowDblClick":"inscalumaprendizajeDataGrid1RowDblClick"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2","expression":undefined}, {}]
																		}],
																		idInscAlumAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"idInscAlumAprendizaje","columnWidth":"60px"}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"fechaLogro","columnWidth":"70px","index":2,"display":"Date"}, {}, {
																			format: ["wm.DateFormatter", {}, {}]
																		}],
																		calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacion","columnWidth":"80px","index":3}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"150%","index":4}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		fechaIngreso1: ["wm.DataGridColumn", {"caption":"Fecha Ingreso","field":"fechaIngreso","columnWidth":"70px","index":1,"display":"Date"}, {}, {
																			format: ["wm.DateFormatter", {}, {}]
																		}]
																	}]
																}],
																splitter7: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
																inscalumaprendizajeDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_BackgroundColor_Green"]},"horizontalAlign":"left","verticalAlign":"top","title":"MODIFICAR CALIFICACIÓN","captionClasses":"wm_Border_DropShadow wm_BackgroundColor_Green wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_12px","margin":"0","borderColor":"#fff"}, {}, {
																	inscalumaprendizajeLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"290%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onBeginInsert":"inscalumaprendizajeLiveForm1BeginInsert","onBeginUpdate":"inscalumaprendizajeLiveForm1BeginUpdate","onSuccess":"inscalumaprendizajeLiveForm1Success","onDeleteData":"inscalumaprendizajeLiveForm1DeleteData","onCancelEdit":"inscalumaprendizajeLiveForm1CancelEdit","onInsertData":"inscalumaprendizajeLiveForm1InsertData","onUpdateData":"inscalumaprendizajeLiveForm1UpdateData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput.aprendizaje","source":"aprendizajeRelatedEditor1.dataOutput","expression":undefined}, {}],
																			wire2: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor2.dataOutput","expression":undefined}, {}],
																			wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}]
																		}],
																		editPanel9: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"inscalumaprendizajeLiveForm1","savePanel":"savePanel9","operationPanel":"operationPanel9","lock":false}, {}, {
																			savePanel9: ["wm.Panel", {"height":"42px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
																				saveButton9: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel9.saveData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formInvalid","expression":undefined}, {}]
																					}]
																				}],
																				cancelButton9: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel9.cancelEdit"}]
																			}],
																			operationPanel9: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"40px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																				newButton9: ["wm.RoundedButton", {"caption":"Nueva","width":"120px","height":"100%"}, {"onclick":"editPanel9.beginDataInsert"}],
																				updateButton9: ["wm.RoundedButton", {"caption":"Actualizar","width":"120px","height":"100%","disabled":true}, {"onclick":"editPanel9.beginDataUpdate"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formUneditable","expression":undefined}, {}]
																					}]
																				}],
																				deleteButton9: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel9.deleteData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formUneditable","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		panel40: ["wm.Panel", {"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			idInscAlumAprendizajeEditor2: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}],
																			fechaIngresoEditor2: ["wm.Editor", {"caption":"Fecha Ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true,"showing":false}, {}, {
																				editor: ["wm._DateEditor", {}, {}]
																			}],
																			fechaLogroEditor2: ["wm.Editor", {"caption":"Fecha Logro","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																				editor: ["wm._DateEditor", {}, {}]
																			}]
																		}],
																		panel22: ["wm.Panel", {"height":"32px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			calificacionEditor2: ["wm.Editor", {"caption":"Calificación","width":"120%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {"onchange":"calificacionEditor2Change"}, {
																				editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral","required":true}, {}, {
																					optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																				}]
																			}],
																			label33: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"26px","width":"37px","border":"0","caption":"»»"}, {}, {
																				format: ["wm.DataFormatter", {}, {}]
																			}],
																			calificacionNumEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_FontSizePx_14px"],"captionNode":["wm_FontColor_LightBlue","wm_BackgroundColor_VeryLightGray"]},"width":"100%","height":"26px","readonly":true,"formField":"calificacionNum","disabled":true}, {}, {
																				editor: ["wm._TextEditor", {"required":true}, {}]
																			}]
																		}],
																		comentarioEditor2: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"110px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}],
																		panel8: ["wm.Panel", {"height":"35px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			aprendizajeRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"formField":"aprendizaje"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem.aprendizaje","expression":undefined}, {}],
																					wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"aprendizajeLookup2.selectedItem","expression":undefined}, {}]
																				}],
																				aprendizajeLookup1: ["wm.Editor", {"caption":"ID Aprendizaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}]
																			}],
																			personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem.persona","expression":undefined}, {}],
																					wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup2.selectedItem","expression":undefined}, {}]
																				}],
																				personaLookup1: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}],
																				label32: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"24px","width":"855px","border":"0","caption":"Apreciado Visitante: Realice con éxito la consulta de calificaciónes <b><u>siguiendo  paso a paso el proceso."}, {}, {
																					format: ["wm.DataFormatter", {}, {}]
																				}]
																			}]
																		}],
																		aprendizajeaux: ["wm.TextEditor", {"width":"309px","caption":"aprendizaje","display":"Number","showing":false}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		personaaux: ["wm.TextEditor", {"width":"294px","caption":"persona","display":"Number","showing":false}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		usuarioRegistroCalificacion: ["wm.TextEditor", {"width":"265px","caption":"Usuario","readonly":true,"formField":"usuario"}, {}, {
																			editor: ["wm._TextEditor", {}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									actividades: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
										panel72: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											layers18: ["wm.Layers", {"border":"2","borderColor":"#000000"}, {}, {
												layer41: ["wm.Layer", {"caption":"layer41","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													panel42: ["wm.Panel", {"height":"90px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														layers19: ["wm.Layers", {}, {}, {
															layer42: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"layer42","horizontalAlign":"left","verticalAlign":"bottom"}, {}, {
																selectEditor17: ["wm.SelectEditor", {"width":"353px","caption":"GRADO"}, {"onchange":"selectEditor17Change"}, {
																	editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"gradoslista","expression":undefined}, {}]
																		}]
																	}]
																}],
																selectEditor18: ["wm.SelectEditor", {"width":"353px","caption":"CURSO"}, {}, {
																	editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cursoslv1","expression":undefined}, {}]
																		}]
																	}]
																}],
																panel73: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	selectEditor19: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"353px","caption":"AÑO ESCOLAR"}, {}, {
																		editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}]
																	}],
																	button10: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"34px","width":"96px","caption":"Buscar"}, {"onclick":"button10Click"}],
																	button36: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"34px","width":"96px","caption":"Limpiar"}, {"onclick":"button36Click"}]
																}]
															}]
														}]
													}],
													actAsignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"border":"2","height":"450px","borderColor":"#000000"}, {"onSelected":"ACTIVIDADESLV3"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"asignaturaLV1","expression":undefined}, {}]
														}],
														idAsignatura1: ["wm.DataGridColumn", {"caption":"●","field":"idAsignatura","columnWidth":"78px","index":10}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														asignatura2: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura","columnWidth":"100%","index":11}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													dataGrid5: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"border":"2","borderColor":"#000000"}, {"onSelected":"inscalumactividadLiveVariable1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ACTIVIDADESLV3","expression":undefined}, {}]
														}],
														fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","columnWidth":"98px","index":2,"display":"Date"}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														actividad1: ["wm.DataGridColumn", {"caption":"Actividad","field":"actividad","columnWidth":"100%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idActividad1: ["wm.DataGridColumn", {"caption":"●","field":"idActividad","columnWidth":"68px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													inscalumactividadLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														inscalumactividadDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO INSCRIPCION ACTIVIDADES","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"148%"}, {}, {
															inscalumactividadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"198%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumactividadLiveVariable1","onBeginInsert":"inscalumactividadLiveForm1BeginInsert","onCancelEdit":"inscalumactividadLiveVariable1"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem","expression":undefined}, {}],
																	wire1: ["wm.Wire", {"targetProperty":"dataOutput.actividad","source":"actividadRelatedEditor1.dataOutput","expression":undefined}, {}],
																	wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor3.dataOutput","expression":undefined}, {}]
																}],
																idInscAlumActividadEditor1: ["wm.Editor", {"caption":"ID Actividad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumActividad"}, {}, {
																	editor: ["wm._NumberEditor", {"required":true}, {}]
																}],
																logradoEditor2: ["wm.Editor", {"caption":"Logrado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"logrado","displayValue":true,"emptyValue":"false"}, {}, {
																	editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																}],
																fechaEditor3: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
																	editor: ["wm._DateEditor", {}, {}]
																}],
																comentarioEditor4: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"74px","display":"TextArea","readonly":true,"formField":"comentario"}, {}, {
																	editor: ["wm._TextAreaEditor", {}, {}]
																}],
																actividadRelatedEditor1: ["wm.RelatedEditor", {"formField":"actividad"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem.actividad","expression":undefined}, {}]
																	}],
																	actividadLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"caption":"ID Actividad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idActividad"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}]
																}],
																personaRelatedEditor3: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem.persona","expression":undefined}, {}]
																	}],
																	personaLookup4: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}]
																}],
																editPanel12: ["wm.EditPanel", {"liveForm":"inscalumactividadLiveForm1","savePanel":"savePanel12","operationPanel":"operationPanel12","lock":false,"verticalAlign":"middle","height":"43px"}, {}, {
																	savePanel12: ["wm.Panel", {"height":"43px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
																		calificaTodos: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundChromeBar_LightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"184px","caption":"Calificar a todos","margin":"2","borderColor":"#CD0000","iconUrl":"resources/images/ico/todos.png","iconMargin":"0 0px 0 0"}, {"onclick":"calificaTodosClick"}],
																		spacer11: ["wm.Spacer", {"height":"48px","width":"171px"}, {}],
																		saveButton12: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel12.saveData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formInvalid","expression":undefined}, {}]
																			}]
																		}],
																		cancelButton12: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel12.cancelEdit"}]
																	}],
																	operationPanel12: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
																		newButton12: ["wm.RoundedButton", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Calificar","width":"100px","height":"100%"}, {"onclick":"editPanel12.beginDataInsert"}],
																		updateButton12: ["wm.RoundedButton", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Actualizar","width":"112px","height":"100%","disabled":true}, {"onclick":"editPanel12.beginDataUpdate"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formUneditable","expression":undefined}, {}]
																			}]
																		}],
																		deleteButton12: ["wm.RoundedButton", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel12.deleteData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formUneditable","expression":undefined}, {}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}],
											spacer35: ["wm.Spacer", {"height":"48px","width":"12px"}, {}],
											layers17: ["wm.Layers", {"border":"2","borderColor":"#000000"}, {}, {
												layer40: ["wm.Layer", {"caption":"layer40","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													panel58: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"47px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														button40: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_FontSizePx_16px"]},"height":"100%","width":"126px","caption":"Calificaciones"}, {"onclick":"button40Click"}]
													}],
													spacer34: ["wm.Spacer", {"height":"41px","width":"98px"}, {}],
													actAlumnos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"border":"2","height":"450px","borderColor":"#000000"}, {"onSelected":"inscalumactividadLiveVariable1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"INSALUCUR","expression":undefined}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"●","field":"persona.idPersona","columnWidth":"72px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","columnWidth":"100%","index":2,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"100%","index":1,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Año escolar","field":"sy.schoolYear","columnWidth":"110px","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													panel76: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														picture9: ["wm.Picture", {"height":"27px","border":"0","width":"32px","source":"resources/images/ico/dialog-close.png","hint":"Ver todas las calificaciones"}, {"onclick":"picture9Click"}]
													}],
													inscalumactividadGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"TABLA INSCRIPCION DE ACTIVIDADES","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","border":"3,3,3,3"}, {}, {
														inscalumactividadDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadLiveVariable1","expression":undefined}, {}]
															}],
															logrado1: ["wm.DataGridColumn", {"caption":"Logrado","field":"logrado","columnWidth":"63px","index":2,"display":"Number","autoSize":undefined,"dataExpression":"if(${logrado}==\"1\") {'<img src=\"resources/images/ico/si.gif\" height=\"22\" width=\"22\" /><center>'}  if(${logrado}==\"0\") {'<img src=\"resources/images/ico/no.gif\" height=\"22\" width=\"22\" /><center>'}"}, {}, {
																format: ["wm.NumberFormatter", {}, {}]
															}],
															fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","columnWidth":"113px","index":3,"display":"Date","autoSize":undefined}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"100%","index":4}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Nombre","field":"persona.nombre1","columnWidth":"159px","index":1,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"159px","dataExpression":"${persona.apellido1}+ \" \"+${persona.apellido2}"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									calif_panel_contenedor_alumnos: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
										layers7: ["wm.Layers", {}, {}, {
											layer21: ["wm.Layer", {"caption":"layer21","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												calif_alumnos_panel_datagrids: ["wm.Panel", {"height":"402px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
													calif_alumnos_datagrids_datag_alumnos_cursos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","borderColor":"#000000","width":"440px"}, {"onSelected":"calif_alumnos_datagrids_datag_alumnos_cursosSelected","onSelectionChanged":"calif_alumnos_datagrids_datag_alumnos_cursosSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_alumnosCursos","expression":undefined}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":1,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column8: ["wm.DataGridColumn", {"caption":" ","field":"id.idPersona","columnWidth":"64px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													splitter6: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													calif_alumnos_datagrids_datag_alumnos_asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","borderColor":"#000000"}, {"onSelected":"calif_alumnos_datagrids_datag_alumnos_asignaturasSelected","onSelectionChanged":"calif_alumnos_datagrids_datag_alumnos_asignaturasSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_alumnos_asignaturas","expression":undefined}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":" ","field":"idasignatura","columnWidth":"65px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura","columnWidth":"180px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Esperados","field":"esperados","columnWidth":"65px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Logrados","field":"logrados","columnWidth":"60px","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"Porcentaje","field":"porcentaje","columnWidth":"70px","index":4,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"Puntaje","field":"puntaje","columnWidth":"68px","index":5,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column7: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacion","columnWidth":"60px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													unidad: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"unidadlv","expression":undefined}, {}]
														}],
														numeroUnidad1: ["wm.DataGridColumn", {"caption":"Nº Unidad","field":"numeroUnidad","columnWidth":"82px","index":2,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"241px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idUnidad1: ["wm.DataGridColumn", {"caption":"ID","field":"idUnidad"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												aux13: ["wm.TextEditor", {"caption":"aux","showing":false,"disabled":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												panel50: ["wm.Panel", {"height":"349px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													subtopico: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"subtopicolv","expression":undefined}, {}]
														}],
														idSubtopico1: ["wm.DataGridColumn", {"caption":"ID","field":"idSubtopico","columnWidth":"88px","index":4}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"467px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													calif_alumnos_datagrids_datag_aprendizajes_asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0","height":"345px","borderColor":"#000000"}, {"onSelectionChanged":"calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelectionChanged","onSelected":"calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_aprendizajes","expression":undefined}, {}]
														}],
														fechaEsperada1: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"id.fechaEsperada","columnWidth":"110px","index":3,"display":"Date"}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														idAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"id.idAprendizaje","columnWidth":"85px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"id.aprendizaje","columnWidth":"150%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"id.subtopico","columnWidth":"100%","index":5}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Unidad","field":"id.unidad","columnWidth":"100%","index":7}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Learning","field":"id.learning","columnWidth":"150%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"No. Unidad","field":"id.numeroUnidad","columnWidth":"70px","index":6,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"No. Subtopico","field":"id.numeroSubtopico","columnWidth":"70px","index":4,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}]
													}]
												}],
												panel51: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													inscalumaprendizajeGridPanel1: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundChromeBar_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"CALIFICACION","captionClasses":"wm_BackgroundChromeBar_Blue wm_FontColor_White wm_FontSizePx_12px","margin":"0","borderColor":"#ffffff"}, {}, {
														inscalumaprendizajeDataGrid2: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1","expression":undefined}, {}]
															}],
															idInscAlumAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"idInscAlumAprendizaje","columnWidth":"57px"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"fechaLogro","columnWidth":"119px","index":1,"display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															calificacion1: ["wm.DataGridColumn", {"caption":"Calificacion","field":"calificacion","columnWidth":"100px","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"100%","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}],
														calif_alumnos_datag_calificacionFinal: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_calificaciones_finales","expression":undefined}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Calificación","field":"id.calificacion","columnWidth":"140px","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"id.fechaLogro","columnWidth":"122px","display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Puntaje","field":"id.calificacionNum","columnWidth":"100%","index":2,"display":"Number"}, {}, {
																format: ["wm.NumberFormatter", {"digits":1}, {}]
															}]
														}]
													}],
													inscalumaprendizajeDetailsPanel1: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundChromeBar_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"MODIFICAR CALIFICACION","captionClasses":"wm_BackgroundChromeBar_Blue wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_12px","margin":"0","borderColor":"#ffffff","border":"3,3,3,3"}, {}, {
														inscalumaprendizajeLiveForm2: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumaprendizajeLiveForm2Success","onBeginInsert":"inscalumaprendizajeLiveForm2BeginInsert","onCancelEdit":"inscalumaprendizajeLiveForm2CancelEdit","onBeginUpdate":"inscalumaprendizajeLiveForm2BeginUpdate","onInsertData":"inscalumaprendizajeLiveForm2InsertData","onUpdateData":"inscalumaprendizajeLiveForm2UpdateData","onDeleteData":"inscalumaprendizajeLiveForm2DeleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput.aprendizaje","source":"aprendizajeRelatedEditor2.dataOutput","expression":undefined}, {}],
																wire2: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor3.dataOutput","expression":undefined}, {}],
																wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor2.dataOutput","expression":undefined}, {}]
															}],
															panel52: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"266px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																panel7: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	idInscAlumAprendizajeEditor3: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	fechaIngresoEditor3: ["wm.Editor", {"caption":"Fecha Ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true}, {}, {
																		editor: ["wm._DateEditor", {}, {}]
																	}],
																	fechaLogroEditor3: ["wm.Editor", {"caption":"Fecha Logro","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																		editor: ["wm._DateEditor", {}, {}]
																	}],
																	calificacionEditor3: ["wm.Editor", {"caption":"Calificación","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {"onchange":"calificacionEditor3Change"}, {
																		editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																			optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																		}]
																	}],
																	calificacionNumEditor3: ["wm.TextEditor", {"width":"100%","caption":"Puntaje","display":"Number","disabled":true,"readonly":true,"formField":"calificacionNum"}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}]
																}],
																panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	comentarioEditor3: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"132px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	aprendizajeRelatedEditor2: ["wm.RelatedEditor", {"formField":"aprendizaje"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem.aprendizaje","expression":undefined}, {}]
																		}],
																		aprendizajeLookup3: ["wm.Editor", {"caption":"ID Aprendizaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}],
																	personaRelatedEditor2: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem.persona","expression":undefined}, {}]
																		}],
																		personaLookup3: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}],
																	docenteRegistroCalifEstudiante: ["wm.TextEditor", {"width":"100%","caption":"Docente","readonly":true,"formField":"usuario"}, {}, {
																		editor: ["wm._TextEditor", {}, {}]
																	}]
																}]
															}],
															panel105: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
																aux199: ["wm.TextEditor", {"width":"100%","caption":"auxIDPersona"}, {}, {
																	editor: ["wm._TextEditor", {}, {}]
																}],
																aux200: ["wm.TextEditor", {"width":"100%","caption":"auxIDAprendizaje"}, {}, {
																	editor: ["wm._TextEditor", {}, {}]
																}]
															}],
															editPanel10: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"inscalumaprendizajeLiveForm2","savePanel":"savePanel10","operationPanel":"operationPanel10","lock":false}, {}, {
																savePanel10: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																	saveButton10: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel10.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formInvalid","expression":undefined}, {}]
																		}]
																	}],
																	cancelButton10: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel10.cancelEdit"}]
																}],
																operationPanel10: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	newButton10: ["wm.RoundedButton", {"caption":"Nueva","width":"100px","height":"100%"}, {"onclick":"editPanel10.beginDataInsert"}],
																	updateButton10: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel10.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formUneditable","expression":undefined}, {}]
																		}]
																	}],
																	deleteButton10: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel10.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formUneditable","expression":undefined}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									calif_panel_contenedor_promocion: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false,"roles":["6","7","10","9","11","13","25"]}, {}, {
										calif_panel_contenedor_top: ["wm.Layers", {}, {}, {
											calif_layer_contenedor_promocion: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												promociones_panel_top: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													promocion_sel_ao_escolar: ["wm.SelectEditor", {"width":"220px","caption":"Año Escolar","captionSize":"70%","height":"28px"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_sel_grado: ["wm.SelectEditor", {"width":"160px","caption":"Grado","height":"28px"}, {"onchange":"promocion_sel_gradoChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_sel_curso: ["wm.SelectEditor", {"width":"160px","caption":"Curso","height":"28px"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_curso","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_box_codigo: ["wm.NumberEditor", {"display":"Text","height":"28px","caption":"Codigo","roles":["7","25","10"]}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													promocion_butt_buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","caption":"Buscar","borderColor":"#3366CC"}, {"onclick":"l_promocion_insc_alum_curso"}],
													promocion_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","caption":"Limpiar","borderColor":"#bbb"}, {"onclick":"promocion_butt_limpiarClick"}],
													button3: ["wm.Button", {"height":"38px","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/ico/refresh.png"}, {"onclick":"l_promocion_promocionLiveVariable1"}]
												}],
												promocion_panel_container: ["wm.Panel", {"height":"804px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													promocion_container_datag_personas_x_curso: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"l_promocion_promocionLiveVariable1","onSelectionChanged":"promocion_container_datag_personas_x_cursoSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_insc_alum_curso","expression":undefined}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":" ","field":"id.codigo","columnWidth":"80px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":1,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":2,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													panel9: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														promocionLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
															promocionGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"213px"}, {}, {
																label1: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"48px","width":"100%","border":"0","caption":"(*A-A)= Autorización Académica (*A-F)= Autorización Financiera  <br>(*A-P-A)= Autorización Promoción Anticipada (*A-CRA)= Autorización CRA","singleLine":false}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																promocionDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"promocionDataGrid1Selected"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_promocionLiveVariable1","expression":undefined}, {}]
																	}],
																	column2: ["wm.DataGridColumn", {"caption":"Aprobado","field":"aprobado","columnWidth":"90%","index":1,"dataExpression":"if(${aprobado}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${aprobado}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column3: ["wm.DataGridColumn", {"caption":"Promovido","field":"promovido","columnWidth":"90%","index":2,"dataExpression":"if(${promovido}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${promovido}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column4: ["wm.DataGridColumn", {"caption":"A-A","field":"autorizadoAcademico","columnWidth":"30px","index":3,"dataExpression":"if(${autorizadoAcademico}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoAcademico}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column5: ["wm.DataGridColumn", {"caption":"A-F","field":"autorizadoFinanciera","columnWidth":"30px","index":4,"dataExpression":"if(${autorizadoFinanciera}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoFinanciera}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column1: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacionChar","columnWidth":"75%","index":6}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column6: ["wm.DataGridColumn", {"caption":"Año Escolar","field":"sy.schoolYear","columnWidth":"65px","index":7}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column7: ["wm.DataGridColumn", {"caption":" ","field":"idPromocion","columnWidth":"43px"}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column8: ["wm.DataGridColumn", {"caption":"A-CRA","field":"autorizadoCra","columnWidth":"40px","index":5,"dataExpression":"if(${autorizadoCra}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${autorizadoCra}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}]
																}]
															}],
															promocionDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario Acciones de Promoción","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
																promocionLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"promocionLiveForm1Success","onBeginInsert":"promocionLiveForm1BeginInsert","onBeginUpdate":"promocionLiveForm1BeginUpdate","onUpdateData":"promocionLiveForm1UpdateData","onCancelEdit":"promocionLiveForm1CancelEdit","onInsertData":"promocionLiveForm1InsertData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem","expression":undefined}, {}],
																		wire1: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor1.dataOutput","expression":undefined}, {}],
																		wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor5.dataOutput","expression":undefined}, {}]
																	}],
																	editPanel3: ["wm.EditPanel", {"liveForm":"promocionLiveForm1","savePanel":"savePanel3","operationPanel":"operationPanel3","lock":false}, {}, {
																		savePanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																			saveButton3: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel3.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formInvalid","expression":undefined}, {}]
																				}]
																			}],
																			cancelButton3: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel3.cancelEdit"}]
																		}],
																		operationPanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			newButton3: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%","showing":false}, {"onclick":"editPanel3.beginDataInsert"}],
																			updateButton3: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
																				}]
																			}],
																			deleteButton3: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true,"showing":false}, {"onclick":"editPanel3.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}],
																	idPromocionEditor1: ["wm.Editor", {"caption":"ID Promocion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPromocion"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	aprobadoEditor1: ["wm.Editor", {"caption":"Aprobado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"aprobado","disabled":true,"displayValue":true,"emptyValue":"false","roles":["6","9","10","11","23","24"]}, {"onchange":"aprobadoEditor1Change"}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentaprobadoEditor1: ["wm.Editor", {"caption":"Comentario de Aprobación","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentaprobado","roles":["6","9","10","11","23","24"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	promovidoEditor1: ["wm.Editor", {"caption":"Promovido","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"promovido","displayValue":true,"emptyValue":"false","roles":["6","9","10","23","24"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentpromovidoEditor1: ["wm.Editor", {"caption":"Comentario de Promoción","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentpromovido","roles":["23","24","6","9","10","11"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoAcademicoEditor1: ["wm.Editor", {"caption":"Autorización Docencia","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoAcademico","displayValue":true,"emptyValue":"false","roles":["6","9","10","11","22","23"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentcomiteEditor1: ["wm.Editor", {"caption":"Comentario de Autorización Docente","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentcomite","roles":["23","24","6","9","10","11"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoFinancieraEditor1: ["wm.Editor", {"caption":"Autorización Financiera","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoFinanciera","displayValue":true,"emptyValue":"false","roles":["7","25"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentfinancEditor1: ["wm.Editor", {"caption":"Comentario de Autorización Financiera","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentfinanc","roles":["7","25"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoPromAnticipadaEditor1: ["wm.Editor", {"caption":"Autorizado Promoción Anticipada","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoPromAnticipada","captionSize":"80%","displayValue":true,"emptyValue":"false","roles":["6","9","10","11","23","24"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	calificacionEditor5: ["wm.Editor", {"caption":"Puntaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacion","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	calificacionCharEditor1: ["wm.Editor", {"caption":"Calificación","width":"100%","height":"26px","readonly":true,"formField":"calificacionChar","disabled":true}, {}, {
																		editor: ["wm._TextEditor", {}, {}]
																	}],
																	syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem.sy","expression":undefined}, {}],
																			wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup1.selectedItem","expression":undefined}, {}]
																		}],
																		syLookup1: ["wm.Editor", {"caption":"ID Año Escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true,"displayValue":"2010-2011"}, {}, {
																			editor: ["wm._LookupEditor", {"required":true,"displayField":"schoolYear","autoDataSet":false,"startUpdate":false}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}],
																	panel10: ["wm.Panel", {"height":"36px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		personaRelatedEditor5: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem.persona","expression":undefined}, {}],
																				wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup5.selectedItem","expression":undefined}, {}]
																			}],
																			personaLookup2: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}]
																	}],
																	panel11: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		promocion_butt_promover: ["wm.Button", {"height":"100%","width":"100%","caption":"FINALIZAR Y PROMOVER","iconUrl":"resources/images/ico/route.png","iconMargin":"0 0px 0 0","showing":false}, {}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								demografica: ["wm.Layer", {"caption":"Demográfica","horizontalAlign":"left","verticalAlign":"top","roles":["7","8","9","6","10"],"lock":true,"borderColor":"#CD0000"}, {}, {
									pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Demografica"}, {}]
								}],
								asistencia: ["wm.Layer", {"caption":"Asistencia","horizontalAlign":"left","verticalAlign":"top","roles":["10","11","21","22","23","24","8"],"lock":true}, {"onShow":"asistenciaShow"}, {
									eventualidadesContainer: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Eventualidades"}, {}]
								}],
								distribucion: ["wm.Layer", {"caption":"<u>Distribución</u>","horizontalAlign":"left","verticalAlign":"top","roles":["5","6","10"],"lock":true}, {}, {
									page_distribucion: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Distribucion"}, {}]
								}],
								eventualidades: ["wm.Layer", {"caption":"Eventualidades","horizontalAlign":"left","verticalAlign":"top","roles":["10","6","7","8","9","5"],"lock":true}, {}, {
									registro_eventualidades: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Reg_eventualidades"}, {}]
								}],
								gestion: ["wm.Layer", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"caption":"Gestión Curricular","horizontalAlign":"left","verticalAlign":"top","roles":["7","10","8","11","22","23","21","24","6","4"],"lock":true,"borderColor":"#CD0000"}, {"onShow":"gestionShow"}, {
									pageSubjects: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Subjects"}, {}]
								}],
								Inscripciones: ["wm.Layer", {"caption":"Inscripciones","horizontalAlign":"left","verticalAlign":"top","roles":["6","10","20","21","22","23","24","5"]}, {}, {
									inscripciones: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Inscripciones"}, {}]
								}],
								pestana_reportes_seguimiento: ["wm.Layer", {"caption":"Reportes","horizontalAlign":"left","verticalAlign":"top","roles":["5","6","10"],"padding":"40","lock":true}, {"onShow":"pestana_reportes_seguimientoShow"}, {
									reportes_top_panel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_BackgroundColor_VeryLightGray"]},"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"2","layoutKind":"left-to-right"}, {}, {
										reports_open_report_window: ["wm.Button", {"height":"100%","width":"155px","caption":"<img src=\"resources/images/buttons/report.png\" WIDTH=32 HEIGHT=32 > Generar reporte","borderColor":"#c6c6c6","disabled":true,"hint":"Abrir generador de  reporte"}, {"onclick":"reports_open_report_windowClick"}],
										uctualizar_reportes_descripcion: ["wm.Button", {"height":"100%","width":"200px","caption":"<img src=\"resources/images/buttons/Update.png\" WIDTH=22 HEIGHT=22 > Actualizar información","disabled":true}, {}]
									}],
									panel6: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"40px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
										codigoReporte: ["wm.TextEditor", {"caption":"Codigo","height":"32px"}, {"onchange":"codigoReporteChange"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										reporte: ["wm.TextEditor", {"width":"200px","caption":"Reporte","height":"32px","captionSize":"35%"}, {"onchange":"reporteChange"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}]
									}],
									panel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"5","layoutKind":"left-to-right","autoScroll":true}, {}, {
										reportes_graficos_listado_reportes: ["wm.DataGrid", {"border":"0"}, {"onSelected":"reportes_graficos_listado_reportesSelected","onSelectionChanged":"reportes_graficos_listado_reportesSelectionChanged","onDeselected":"reportes_graficos_listado_reportesDeselected"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_reportes_graficos_listado_reportes","expression":undefined}, {}]
											}],
											column1: ["wm.DataGridColumn", {"caption":"<center>+ Código</center>","field":"id.codigo","dataExpression":"\"<center>\"+${id.codigo}+\"</center>\""}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column3: ["wm.DataGridColumn", {"caption":"Reporte","field":"id.reporte","columnWidth":"100%","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column6: ["wm.DataGridColumn", {"caption":"Tipo <br/>Persona","field":"id.tipoPersona","index":2}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column4: ["wm.DataGridColumn", {"caption":"Descripción","field":"id.descripcion","columnWidth":"100%","index":3}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}]
								}],
								mensaje: ["wm.Layer", {"caption":"Aviso","horizontalAlign":"left","verticalAlign":"top","roles":["1","2","3"],"lock":true}, {}, {
									panel56: ["wm.Panel", {"height":"482px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										picture6: ["wm.Picture", {"height":"100%","border":"0","width":"615px","source":"resources/images/illustrator-old-school-icon.gif","aspect":"h"}, {}],
										label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","width":"96%","border":"3","caption":"<font color=\"red\"><b><h3>AVISO IMPORTANTE: </h3></b></font> <font color=\"red\"><b>Aprendoz</b></font> ha detectado que usted no cumple con los requisitos de seguridad para utilizar este  servicio.</br></br> Le sugerimos ponerse en contacto con el administrador del sistema quien le podra brindar información mas precisa sobre esta restricción.</br></br>  Sentimos  las molestias causadas.","singleLine":false,"borderColor":"#FFxxyy"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}]
								}]
							}]
						}],
						templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}]
					}],
					panel3: ["wm.Panel", {"height":"24px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}],
						templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}],
						templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}]
					}],
					panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_LightGray","wm_FontSizePx_14px"]},"height":"48px","width":"100%","border":"0","align":"right","padding":"10,20","margin":"0","caption":"Aprendoz® | Colegio Rochester  2013 - 2014","singleLine":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}