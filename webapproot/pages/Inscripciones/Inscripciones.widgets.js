Inscripciones.widgets = {
	subjectsByUser: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getSubjectsByProfile"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSubjectsByProfileInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"sy","expression":"\"4\""}, {}],
				wire1: ["wm.Wire", {"targetProperty":"pcurso","source":"subjectsCurse.dataValue"}, {}],
				wire2: ["wm.Wire", {"targetProperty":"idsy","source":"syGrade.dataValue"}, {}],
				wire3: ["wm.Wire", {"targetProperty":"pgrado","source":"subjectsGrade.dataValue"}, {}]
			}]
		}]
	}],
	getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	a_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	a_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"listadoGradoSelect.dataValue"}, {}]
		}]
	}],
	a_cursosv: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCurseByidGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCurseByidGradeInputs"}, {}]
	}],
	listStudentsByCurse: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getListStudentsByCurse"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListStudentsByCurseInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pcurso","source":"listadoCursoSelect.dataValue"}, {}]
			}]
		}]
	}],
	inscribirVar: ["wm.Variable", {"type":"com.aprendoz_test.data.InscAlumAsig"}, {}],
	studentsListGradeSubject: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"studentsByCurseBySubject"}, {}, {
		input: ["wm.ServiceInput", {"type":"studentsByCurseBySubjectInputs"}, {}]
	}],
	borrarVar: ["wm.Variable", {"type":"com.aprendoz_test.data.InscAlumAsig"}, {}],
	a_cursosv2: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCurseByidGrade"}, {"onSuccess":"a_cursosv2Success"}, {
		input: ["wm.ServiceInput", {"type":"getCurseByidGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pgrado","source":"subjectsGrade.dataValue"}, {}]
			}]
		}]
	}],
	a_sy: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			right_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				subjectsLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"100%","border":"0","caption":"Asignaturas"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				showSubjectsButton: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"33px","width":"100%","borderColor":" #3d80df","iconUrl":"resources/images/showme.png","iconMargin":"0 0px 0 0","margin":"1","caption":"Para ver las asignaturas haga clic aquí","iconWidth":"20px","iconHeight":"20px","showing":false}, {"onclick":"showSubjectsButtonClick"}],
				label2: ["wm.Label", {"height":"120px","width":"100%","border":"0","caption":"A continuación seleccione el Grado y  la <u>Asignatura</u> a la cual desea (+Agregar) o (-Retirar) alumnos.<br><br>Una vez hecho esto, los selectores  de <u>Estudiantes por Curso</u> se activarán y podrá buscar los alumnos en el curso deseado, seleccionarlos y (+Agregar) a la asignatura.","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				syGrade: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
						}]
					}]
				}],
				panel8: ["wm.Panel", {"height":"32px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					subjectsGrade: ["wm.SelectEditor", {"width":"100%","caption":"Grado"}, {"onchange":"subjectsGradeChange"}, {
						editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
							}]
						}]
					}]
				}],
				asignatura: ["wm.List", {"height":"100%","width":"100%","border":"0","dataFields":"grado,idasignatura,asignatura","columnWidths":"20%,20%,60%"}, {"onselect":"asignaturaSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"subjectsByUser","expression":undefined}, {}]
					}]
				}]
			}],
			center_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				estudiantesCurso: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"100%","border":"0","caption":"Estudiantes por Curso"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label3: ["wm.Label", {"height":"120px","width":"100%","border":"0","caption":"Para (+Agregar) alumnos a un listado de Asignatura deberá realizar el siguiente proceso:<br><br>1). Seleccione el <u>Grado</u> y <u>Curso</u>.<br>2). Haga clic sobre el/los alumnos que quiera agregar. Nota*** La tabla permite <b><u>multiselección.</u></b><br>3). Haga clic en el botón <u>+Agregar</u>.","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel7: ["wm.Panel", {"height":"32px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					listadoGradoSelect: ["wm.SelectEditor", {"width":"100%","caption":"Grado","disabled":true}, {"onchange":"listadoGradoSelectChange"}, {
						editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
							}]
						}]
					}],
					listadoCursoSelect: ["wm.SelectEditor", {"width":"100%","caption":"Curso","disabled":true}, {"onchange":"listadoCursoSelectChange"}, {
						editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idcurso"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_cursosv","expression":undefined}, {}]
							}]
						}]
					}]
				}],
				estudiantesDojoGrid: ["wm.DojoGrid", {"height":"100%","border":"0","structure":"[[{\"field\":\"idpersona\",\"name\":\" \",\"width\":\"50px\",\"displayType\":undefined,\"type\":\"\",\"typeValue\":\"\",\"editable\":false},{\"field\":\"apellidos\",\"name\":\"Apellidos\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"nombres\",\"name\":\"Nombres\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"curso\",\"name\":\"Curso\",\"width\":\"auto\",\"displayType\":undefined}]]","selectionMode":"multiple"}, {"onCellClick":"estudiantesDojoGridCellClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listStudentsByCurse"}, {}]
					}]
				}],
				alumnos_curso: ["wm.List", {"height":"150%","width":"250%","border":"0","dataFields":"codigo,apellidos,nombres,curso","showing":false}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listStudentsByCurse","expression":undefined}, {}]
					}]
				}],
				inscribirForm: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"inscribirFormSuccess","onError":"inscribirFormError"}]
			}],
			panel5: ["wm.Panel", {"height":"100%","width":"58px","horizontalAlign":"left","verticalAlign":"top","padding":"5"}, {}, {
				spacer1: ["wm.Spacer", {"height":"150px","width":"100%"}, {}],
				inscribirEstudiantes: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"48px","width":"100%","borderColor":"#5cb85c","margin":"1","caption":"+<br>Agregar","disabled":true}, {"onclick":"inscribirEstudiantesClick"}],
				retirarEstudiantes: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"48px","width":"100%","borderColor":"#d9534f","margin":"1","caption":"-<br>Retirar","disabled":true}, {"onclick":"retirarEstudiantesClick"}]
			}],
			left_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				alumnosInscritos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"100%","border":"0","caption":"Estudiantes Inscritos por Asignatura y curso"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel6: ["wm.Panel", {"height":"50px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
					label1: ["wm.Label", {"height":"100%","width":"100%","border":"0","caption":"Esta tabla muestra los estudiantes inscritos en la asignatura y curso seleccionados en la tabla de <u>Asignaturas.</u>","singleLine":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				label4: ["wm.Label", {"height":"120px","width":"100%","border":"0","caption":"         Para retirar un alumno de la asignatura siga el siguiente proceso:<br><br>1). Seleccione un alumno de la lista.<br>2). Haga clic en el botón <u>-Retirar</u>                                                                                           ","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				messageTop: ["wm.Label", {"height":"32px","width":"100%","border":"0","caption":"Asignatura seleccionada","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				estudiantesInscritosAsignatura: ["wm.DojoGrid", {"height":"100%","border":"0","structure":"[[{\"field\":\"idpersona\",\"name\":\" \",\"width\":\"50px\",\"displayType\":undefined},{\"field\":\"apellidos\",\"name\":\"Apellidos\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"nombres\",\"name\":\"Nombres\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"curso\",\"name\":\"Curso\",\"width\":\"auto\",\"displayType\":undefined}]]","customFields":"[]","customFieldCounter":1}, {"onCellClick":"estudiantesInscritosAsignaturaCellClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"studentsListGradeSubject"}, {}]
					}]
				}],
				retirarForm: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"studentsListGradeSubject"}]
			}]
		}]
	}]
}