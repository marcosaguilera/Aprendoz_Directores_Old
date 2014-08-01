Subjects.widgets = {
	ls_subjects: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsByGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"_grado","source":"select_grade.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"_sy","source":"select_sy.dataValue"}, {}]
			}]
		}]
	}],
	subjectById: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectDetails"}, {"onSuccess":"subjectByIdSuccess"}, {
		input: ["wm.ServiceInput", {"type":"subjectDetailsInputs"}, {}]
	}],
	ls_area: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_subareas: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Subarea"}, {}],
	updateSubjects: ["wm.Variable", {"type":"com.aprendoz_test.data.Asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"asignatura","source":"subject_asignatura.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"descripAsigEspaniol","source":"subject_descripcion.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"descripAsigIngles","source":"subject_description.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"esperadostotal","source":"subject_esperados.dataValue"}, {}],
			wire6: ["wm.Wire", {"targetProperty":"idArea1","source":"subject_area1.dataValue"}, {}],
			wire7: ["wm.Wire", {"targetProperty":"idArea2","source":"subject_area2.dataValue"}, {}],
			wire8: ["wm.Wire", {"targetProperty":"idArea3","source":"subject_area3.dataValue"}, {}],
			wire9: ["wm.Wire", {"targetProperty":"idSubarea1","source":"subject_sub1.dataValue"}, {}],
			wire10: ["wm.Wire", {"targetProperty":"idSubarea2","source":"subject_sub2.dataValue"}, {}],
			wire11: ["wm.Wire", {"targetProperty":"idSubarea3","source":"subject_sub3.dataValue"}, {}],
			wire12: ["wm.Wire", {"targetProperty":"ihA1","source":"subject_iha1.dataValue"}, {}],
			wire13: ["wm.Wire", {"targetProperty":"ihA2","source":"subject_iha2.dataValue"}, {}],
			wire14: ["wm.Wire", {"targetProperty":"ihA3","source":"subject_iha3.dataValue"}, {}],
			wire15: ["wm.Wire", {"targetProperty":"intensidadHoraria","source":"subject_ihtotal.dataValue"}, {}],
			wire16: ["wm.Wire", {"targetProperty":"meses","source":"subject_meses.dataValue"}, {}],
			wire17: ["wm.Wire", {"targetProperty":"peso","source":"subject_peso.dataValue"}, {}],
			wire18: ["wm.Wire", {"targetProperty":"salonIdSalon","source":"subject_salon.dataValue"}, {}],
			wire19: ["wm.Wire", {"targetProperty":"subject","source":"subject_subject.dataValue"}, {}],
			wire22: ["wm.Wire", {"targetProperty":"tipoInscAsig.idTipoInscAsig","source":"subject_tipo.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"idAsignatura","source":"subject_idasignatura.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"grado.idGrado","source":"subject_grado.dataValue"}, {}],
			wire20: ["wm.Wire", {"targetProperty":"sy.idSy","source":"subject_sy.dataValue"}, {}]
		}]
	}],
	getNewIdSubject: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getMaxSubjectByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getMaxSubjectByGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idgrado","source":"select_grade.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"idsy","source":"select_sy.dataValue"}, {}]
			}]
		}]
	}],
	deleteSubject: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"deleteSubject"}, {"onSuccess":"deleteSubjectSuccess"}, {
		input: ["wm.ServiceInput", {"type":"deleteSubjectInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idasignatura","source":"subject_idasignatura.dataValue"}, {}]
			}]
		}]
	}],
	areaLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.areaLiveView1","matchMode":"anywhere","maxResults":50}, {"onSuccess":"areaLiveVariable1Success"}],
	sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {"onSuccess":"sySuccess"}],
	grados: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	ejeLiveVariable2: ["wm.LiveVariable", {"liveSource":"app.ejeLiveView2","orderBy":"asc: subarea.subarea","maxResults":50}, {}],
	learningsSubjectsByGrade: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsByGradeInputs"}, {}]
	}],
	a_cursy: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getSyByCurDate"}, {"onSuccess":"a_cursySuccess"}, {
		input: ["wm.ServiceInput", {"type":"getSyByCurDateInputs"}, {}]
	}],
	ls_cursos_by_grade: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"cursos"}, {}, {
		input: ["wm.ServiceInput", {"type":"cursosInputs"}, {}]
	}],
	serviceVariable2: ["wm.ServiceVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
	}],
	searchTeacher: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"searchStudentsByComplexNameNoStudents"}, {}, {
		input: ["wm.ServiceInput", {"type":"searchStudentsByComplexNameNoStudentsInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"search","source":"docentesSearch.dataValue"}, {}]
			}]
		}]
	}],
	inscCursoAsigSv: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsByTeachersByCurseByPer"}, {"onSuccess":"inscCursoAsigSvSuccess"}, {
		input: ["wm.ServiceInput", {"type":"subjectsByTeachersByCurseByPerInputs"}, {}]
	}],
	actionsInscCursoAsig: ["wm.Variable", {"type":"com.aprendoz_test.data.InscCursoAsig"}, {}],
	deleteInscCursoAsig: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"deleteInscCursAsig"}, {}, {
		input: ["wm.ServiceInput", {"type":"deleteInscCursAsigInputs"}, {}]
	}],
	aprendizajes_asignaturas_sv: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsByGradeInputs"}, {}]
	}],
	aprendizajesAsignaturaLV: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.AprendizajesAsignaturas","orderBy":"desc: idAprendizaje"}, {}],
	aprendizajes_asignaturaActions: ["wm.Variable", {"type":"com.aprendoz_test.data.AprendizajesAsignaturas"}, {}],
	hql_detallesAprendizajes: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hql_aprendizaje_detalles"}, {"onSuccess":"hql_detallesAprendizajesSuccess"}, {
		input: ["wm.ServiceInput", {"type":"hql_aprendizaje_detallesInputs"}, {}]
	}],
	aprendizajesEje1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}],
	aprendizajesEje2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}],
	aprendizajesEje3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}],
	l_dimension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension"}, {}],
	l_dimension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular"}, {}],
	l_inteligencias: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {}],
	l_nivel_esperado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.NivelEsperado"}, {}],
	deleteLearningsSV: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hql_deleteLearnings"}, {"onSuccess":"deleteLearningsSVSuccess"}, {
		input: ["wm.ServiceInput", {"type":"hql_deleteLearningsInputs"}, {}]
	}],
	insertLogData: ["wm.Variable", {"type":"com.aprendoz_test.data.LogAccionesDocentes"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"20"}, {}, {
		top_header: ["wm.Panel", {"height":"46px","width":"100%","horizontalAlign":"left","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
			asignatura_button: ["wm.Button", {"height":"40px","width":"110px","caption":"Asignaturas","margin":"4,4,0,4","borderColor":"#C1272D","iconUrl":"resources/images/buttons/subjects.png","iconWidth":"20px","iconMargin":"0 5px 0 0","iconHeight":"20px","roles":["10"]}, {"onclick":"asignatura_buttonClick"}],
			docentes_button: ["wm.Button", {"height":"40px","width":"110px","caption":"Docentes","margin":"4,4,0,4","borderColor":"#C1272D","iconUrl":"resources/images/news_icons/icon_2002.png","iconWidth":"20px","iconMargin":"0 5px 0 0","iconHeight":"20px","roles":["10"]}, {"onclick":"docentes_buttonClick"}],
			aprendizajes_button: ["wm.Button", {"height":"40px","width":"96px","caption":"Aprendizajes","margin":"4,4,0,4","borderColor":"#C1272D","roles":["4","5","6","7","8","9","10","11","13","14","15","16","17","18","19","20","21","22","23","24","25"]}, {"onclick":"aprendizajes_buttonClick"}],
			areas_button: ["wm.Button", {"height":"40px","width":"96px","caption":"Areas","margin":"4,4,0,4","borderColor":"#C1272D","iconUrl":"resources/images/buttons/area2.png","iconWidth":"20px","iconMargin":"0 5px 0 0","iconHeight":"20px","roles":["10"]}, {"onclick":"areas_buttonClick"}],
			ejes_button: ["wm.Button", {"height":"40px","width":"96px","caption":"Ejes","margin":"4,4,0,4","borderColor":"#C1272D","iconUrl":"resources/images/buttons/eje2.png","iconWidth":"20px","iconMargin":"0 5px 0 0","iconHeight":"20px","roles":["10"]}, {"onclick":"ejes_buttonClick"}]
		}],
		subjects: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
			left_menu: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","width":"35%","horizontalAlign":"left","verticalAlign":"top","padding":"10"}, {}, {
				panel2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label3: ["wm.Label", {"height":"100%","width":"100%","border":"0","caption":"ASIGNATURAS"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				subject_top_message: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_BottomStyleCurved4px"]},"height":"210px","width":"100%","border":"0","padding":"8","caption":"Instrucciones sobre Asignaturas: <br><br>En este módulo usted podrá realizar acciones sobre las asignaturas: Crear - Actualizar - Eliminar (Dependiendo de su perfil de seguridad). <br><br>1). Para empezar seleccione el Año escolar y Grado para visualizar las asignaturas relacionadas.  <br><br>2). A continuación seleccione la asignatura a modificar.<br><br>3). Una vez el formulario muestre la asignatura seleccionada y todos sus detalles, proceda a realizar las acciones indicadas en el formulario.","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				select_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sy","expression":undefined}, {}]
						}]
					}]
				}],
				select_grade: ["wm.SelectEditor", {"width":"150%","caption":"Grados"}, {"onchange":"select_gradeChange"}, {
					editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grados","expression":undefined}, {}]
						}]
					}]
				}],
				asignaturas: ["wm.List", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","border":"0","dataFields":"id, asignatura","columnWidths":"20%,80%"}, {"onselect":"asignaturasSelect","ondeselect":"asignaturasDeselect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subjects","expression":undefined}, {}]
					}]
				}]
			}],
			main_form: ["wm.Panel", {"height":"100%","width":"75%","horizontalAlign":"center","verticalAlign":"top","padding":"0,10,10,10","autoScroll":true}, {}, {
				subject_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved8px"]},"height":"44px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					subject_newRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Nuevo","borderColor":"#0044cc","disabled":true}, {"onclick":"subject_newRecordClick"}],
					subject_updateRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Actualizar","borderColor":"#0044cc","disabled":true}, {"onclick":"subject_updateRecordClick"}],
					subject_saveNewRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Guardar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_saveNewRecordClick"}],
					subject_saveUpdateRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Guardar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_saveUpdateRecordClick"}],
					subject_cancelOperation: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"96px","caption":"Cancelar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_cancelOperationClick"}],
					subject_deleteRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Borrar","borderColor":"#bd362f","disabled":true}, {"onclick":"subject_deleteRecordClick"}]
				}],
				subject_content_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					subject_content_left_col: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						subject_idasignatura: ["wm.NumberEditor", {"width":"100%","caption":"Id","readonly":true}, {}, {
							editor: ["wm._NumberEditor", {}, {}]
						}],
						subject_asignatura: ["wm.TextEditor", {"width":"100%","caption":"Asignatura","readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_descripcion: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Descripción","singleLine":false,"readonly":true}, {}, {
							editor: ["wm._TextAreaEditor", {"required":true}, {}]
						}],
						subject_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sy","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area1: ["wm.SelectEditor", {"width":"100%","caption":"Area No.1","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area2: ["wm.SelectEditor", {"width":"100%","caption":"Area No.2","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area3: ["wm.SelectEditor", {"width":"100%","caption":"Area No.3","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_iha1: ["wm.NumberEditor", {"display":"Text","width":"100%","caption":"Inten Area No.1","readonly":true}, {"onchange":"subject_iha1Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_iha2: ["wm.NumberEditor", {"display":"Text","width":"100%","caption":"Inten Area No.2","readonly":true}, {"onchange":"subject_iha2Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_iha3: ["wm.NumberEditor", {"display":"Text","width":"100%","caption":"Inten Area No.3","readonly":true}, {"onchange":"subject_iha3Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_ihtotal: ["wm.NumberEditor", {"display":"Text","width":"100%","caption":"* Intensidad Total","readonly":true}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}]
					}],
					subject_content_right_col: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						subject_electiva: ["wm.CheckBoxEditor", {"width":"100%","caption":"Electiva","readonly":true}, {}, {
							editor: ["wm._CheckBoxEditor", {}, {}]
						}],
						subject_subject: ["wm.TextEditor", {"width":"100%","caption":"Subject","readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_salon: ["wm.TextEditor", {"width":"100%","caption":"Salon","showing":false,"readonly":true}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_tipo: ["wm.TextEditor", {"width":"100%","caption":"Tipo Asignatura","showing":false,"readonly":true}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_description: ["wm.TextEditor", {"width":"100%","caption":"Description","height":"120px","singleLine":false,"readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_grado: ["wm.SelectEditor", {"width":"100%","caption":"Grado","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grados","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub1: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.1","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub2: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.2","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub3: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.3","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_esperados: ["wm.NumberEditor", {"width":"100%","caption":"Esperados Año","readonly":true}, {}, {
							editor: ["wm._NumberEditor", {}, {}]
						}],
						subject_meses: ["wm.NumberEditor", {"display":"Text","width":"100%","caption":"No. Meses","readonly":true}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_peso: ["wm.NumberEditor", {"display":"Text","width":"100%","caption":"Peso asignatura","readonly":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataValue","source":"subject_ihtotal.dataValue"}, {}]
							}],
							editor: ["wm._TextEditor", {}, {}]
						}]
					}]
				}],
				subjectDataForm: ["wm.LiveForm", {"height":"84px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"width":"400px","showing":false}, {"onInsertData":"subjectDataFormInsertData","onSuccess":"ls_subjects","onUpdateData":"subjectDataFormUpdateData","onDeleteData":"subjectDataFormDeleteData"}],
				subject_footer: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_BottomStyleCurved8px"]},"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}]
			}]
		}],
		axis: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
			axis_left_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"70%","horizontalAlign":"left","verticalAlign":"top","padding":"5"}, {}, {
				panel4: ["wm.Panel", {"height":"37px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label2: ["wm.Label", {"height":"100%","width":"100%","border":"0","caption":"EJES"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				search_panel: ["wm.Panel", {"height":"65px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					search_axis_label: ["wm.Label", {"height":"30px","width":"100%","border":"0","caption":"Ingrese a continuación el nombre del eje a buscar"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					search_axis_textEditor: ["wm.TextEditor", {"width":"100%","height":"28px"}, {"onchange":"search_axis_textEditorChange"}, {
						editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
					}]
				}],
				panel_axis_header: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					header_axis_label: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%","width":"100%","border":"0","caption":"FORMULARIO DE EJES"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				ejeLiveForm1: ["wm.LiveForm", {"height":"230px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onSuccess":"ejeLiveVariable2"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ejeDataGrid1.selectedItem","expression":undefined}, {}],
						wire1: ["wm.Wire", {"targetProperty":"dataOutput.subarea","source":"relatedEditor1.dataOutput","expression":undefined}, {}]
					}],
					idEjeEditor1: ["wm.Editor", {"caption":"Id Eje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idEje"}, {}, {
						editor: ["wm._NumberEditor", {"required":true}, {}]
					}],
					ejeTematicoEditor1: ["wm.Editor", {"caption":"Eje Tematico","width":"100%","height":"56px","display":"TextArea","readonly":true,"formField":"ejeTematico","singleLine":false}, {}, {
						editor: ["wm._TextAreaEditor", {}, {}]
					}],
					axisEditor1: ["wm.Editor", {"caption":"Axis","width":"100%","height":"56px","readonly":true,"formField":"axis","singleLine":false}, {}, {
						editor: ["wm._TextEditor", {}, {}]
					}],
					activoEditor1: ["wm.Editor", {"caption":"Activo","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"activo","displayValue":true,"emptyValue":"false"}, {}, {
						editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
					}],
					relatedEditor1: ["wm.RelatedEditor", {"formField":"subarea","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ejeDataGrid1.selectedItem.subarea","expression":undefined}, {}],
							wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"subareaLookup1.selectedItem","expression":undefined}, {}]
						}],
						subareaLookup1: ["wm.Editor", {"caption":"Subarea","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
							editor: ["wm._LookupEditor", {"displayField":"subarea","allowNone":true}, {}]
						}]
					}],
					editPanel1: ["wm.EditPanel", {"liveForm":"ejeLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
							saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
								}]
							}],
							cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
							updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
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
			}],
			panel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				dataNavigator1: ["wm.DataNavigator", {"width":"100%","byPage":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"liveSource","source":"ejeLiveVariable2","expression":undefined}, {}]
					}]
				}],
				ejeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ejeLiveVariable2","expression":undefined}, {}]
					}],
					idEje1: ["wm.DataGridColumn", {"caption":" ","field":"idEje","columnWidth":"40px","display":"Number","autoSize":undefined}, {}, {
						format: ["wm.NumberFormatter", {}, {}]
					}],
					ejeTematico1: ["wm.DataGridColumn", {"caption":"Eje Tematico","field":"ejeTematico","columnWidth":"100%","index":2}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					axis1: ["wm.DataGridColumn", {"caption":"Axis","field":"axis","columnWidth":"100%","index":3}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					column1: ["wm.DataGridColumn", {"caption":"Subarea","field":"subarea.subarea","columnWidth":"93px","index":1}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}],
		areas: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
			area_left_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"70%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				areas_header_panel: ["wm.Panel", {"height":"37px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label1: ["wm.Label", {"height":"100%","width":"100%","border":"0","caption":"AREAS"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				panel3: ["wm.Panel", {"height":"65px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					search_axis_label1: ["wm.Label", {"height":"30px","width":"100%","border":"0","caption":"Ingrese a continuación el nombre del area a buscar"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					search_areas_textEditor: ["wm.TextEditor", {"width":"100%","height":"28px"}, {"onchange":"search_areas_textEditorChange"}, {
						editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
					}]
				}],
				panel1: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					header_axis_label1: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%","width":"100%","border":"0","caption":"FORMULARIO DE AREAS"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				areaLiveForm1: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onSuccess":"areaLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"areaDataGrid1.selectedItem","expression":undefined}, {}]
					}],
					idAreaEditor1: ["wm.Editor", {"caption":"Id Area","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idArea"}, {}, {
						editor: ["wm._NumberEditor", {}, {}]
					}],
					areaEditor1: ["wm.Editor", {"caption":"Area","width":"100%","height":"26px","readonly":true,"formField":"area"}, {}, {
						editor: ["wm._TextEditor", {"required":true}, {}]
					}],
					areaNameEditor1: ["wm.Editor", {"caption":"Area (English)","width":"100%","height":"26px","readonly":true,"formField":"areaName"}, {}, {
						editor: ["wm._TextEditor", {"required":true}, {}]
					}],
					idSyIdIdSyEditor1: ["wm.Editor", {"caption":"Año escolar","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"idSyIdIdSy"}, {}, {
						editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sy","expression":undefined}, {}]
							}]
						}]
					}],
					editPanel2: ["wm.EditPanel", {"liveForm":"areaLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2"}, {}, {
						savePanel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
							saveButton2: ["wm.RoundedButton", {"caption":"Guardar Area","width":"130px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
								}]
							}],
							cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
						}],
						operationPanel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							newButton2: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel2.beginDataInsert"}],
							updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
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
			}],
			areaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"areaLiveVariable1"}, {}]
				}],
				idArea1: ["wm.DataGridColumn", {"caption":" ","field":"idArea","columnWidth":"52px","display":"Number"}, {}, {
					format: ["wm.NumberFormatter", {}, {}]
				}],
				area1: ["wm.DataGridColumn", {"caption":"Area","field":"area","columnWidth":"100%","index":1}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				areaName1: ["wm.DataGridColumn", {"caption":"AreaName","field":"areaName","columnWidth":"100%","index":2}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		docentes: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10","lock":true,"showing":false}, {}, {
			docentes_selection_panels: ["wm.Panel", {"height":"420px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
				aprendizajes_left_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					aprendizajes_sel_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar"}, {}, {
						editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sy","expression":undefined}, {}]
							}]
						}]
					}],
					aprendizajes_sel_grado: ["wm.SelectEditor", {"width":"100%","caption":"Grado"}, {"onchange":"aprendizajes_sel_gradoChange"}, {
						editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grados","expression":undefined}, {}]
							}]
						}]
					}],
					listado_asignaturas: ["wm.List", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","border":"0","dataFields":"id, asignatura","columnWidths":"20%, 80%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"learningsSubjectsByGrade","expression":undefined}, {}]
						}]
					}]
				}],
				spacer2: ["wm.Spacer", {"height":"48px","width":"10px"}, {}],
				aprendizajes_center_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					label4: ["wm.Label", {"height":"48px","width":"100%","border":"0","padding":"4, 4, 4, 10","caption":"Seleccionar un Curso"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					cursosDojoGrid: ["wm.DojoGrid", {"height":"100%","border":"0","structure":"[[{\"field\":\"idcurso\",\"name\":\"Id Curso\",\"width\":\"80px\",\"displayType\":undefined},{\"field\":\"curso\",\"name\":\"Curso\",\"width\":\"auto\",\"displayType\":undefined}]]"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_cursos_by_grade"}, {}]
						}]
					}]
				}],
				spacer1: ["wm.Spacer", {"height":"48px","width":"10px"}, {}],
				aprendizajes_right_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					label5: ["wm.Label", {"height":"48px","width":"100%","border":"0","padding":"4, 4, 4, 10","caption":"Buscar y seleccionar un docente"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					docentesSearch: ["wm.TextEditor", {"width":"100%","caption":"Docente"}, {"onchange":"searchTeacher"}, {
						editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
					}],
					docentesDojoGrid: ["wm.DojoGrid", {"height":"100%","border":"0","structure":"[[{\"field\":\"codigo\",\"name\":\"Código\",\"width\":\"80px\",\"displayType\":undefined,\"type\":\"\",\"typeValue\":\"\",\"editable\":false},{\"field\":\"nombreCompleto\",\"name\":\"Nombre completo\",\"width\":\"auto\",\"displayType\":undefined}]]"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"searchTeacher"}, {}]
						}]
					}]
				}]
			}],
			docentes_details_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				docentes_action_button: ["wm.Panel", {"height":"35px","width":"100%","horizontalAlign":"center","verticalAlign":"top","padding":"2","layoutKind":"left-to-right"}, {}, {
					docentesVer: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"96px","caption":"Ver registros","margin":"0","borderColor":"#FFA500"}, {"onclick":"docentesVerClick"}],
					spacer5: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
					docentesRestablecer: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"96px","caption":"[/] Restablecer","margin":"0","borderColor":"#1225b2"}, {"onclick":"docentesRestablecerClick"}],
					spacer4: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
					docentesAgregar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100px","caption":"[+] Agregar","margin":"0","borderColor":"#56bd14"}, {"onclick":"docentesAgregarClick"}],
					spacer3: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
					docentesRetirar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100px","caption":"[-] Retirar","margin":"0","borderColor":"#c6353a ","disabled":true}, {"onclick":"docentesRetirarClick"}]
				}],
				panel8: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"height":"35px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					perfiles_docentes_total: ["wm.Label", {"height":"100%","width":"100%","border":"0","align":"right","caption":"Existen  #  perfiles de docentes"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				inscripcionesGrid1: ["wm.DojoGrid", {"height":"100%","border":"0","structure":"[[{\"field\":\"id\",\"name\":\" \",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"curso\",\"name\":\"Curso\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"asignatura\",\"name\":\"Asignatura\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"nombre_completo\",\"name\":\"Nombre completo\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"periodo\",\"name\":\"Periodo\",\"width\":\"auto\",\"displayType\":undefined}]]","customFields":"[]","customFieldCounter":1}, {"onCellClick":"inscripcionesGrid1CellClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscCursoAsigSv"}, {}]
					}]
				}],
				inscCursoAsigActionForm: ["wm.LiveForm", {"height":"60px","verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"inscCursoAsigActionFormSuccess"}]
			}]
		}],
		learnings: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			panel6: ["wm.Panel", {"height":"100%","width":"252px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				aprendizajes_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"All Fields"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sy","expression":undefined}, {}]
						}]
					}]
				}],
				aprendizajes_grado: ["wm.SelectEditor", {"width":"100%","caption":"Grado"}, {"onchange":"aprendizajes_gradoChange"}, {
					editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"All Fields"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grados","expression":undefined}, {}]
						}]
					}]
				}],
				aprendizajes_asignaturas: ["wm.DojoGrid", {"height":"704px","border":"0","structure":"[[{\"field\":\"id\",\"name\":\" \",\"width\":\"55px\",\"displayType\":undefined},{\"field\":\"asignatura\",\"name\":\"Asignatura\",\"width\":\"auto\",\"displayType\":undefined}]]"}, {"onClick":"aprendizajes_asignaturasClick","onSelectionChange":"aprendizajes_asignaturasSelectionChange"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"aprendizajes_asignaturas_sv"}, {}]
					}]
				}]
			}],
			aprendizajes_aprendizajes: ["wm.DojoGrid", {"height":"750px","border":"0","structure":"[[{\"field\":\"idAprendizaje\",\"name\":\" \",\"width\":\"50px\",\"displayType\":\"Number\"},{\"field\":\"fechaEsperada\",\"name\":\"Fecha esperada\",\"width\":\"60px\",\"displayType\":\"Date\",\"typeValue\":\"\",\"editable\":false,\"type\":\"\",\"expression\":\"\"},{\"field\":\"aprendizaje\",\"name\":\"Aprendizaje\",\"width\":\"auto\",\"displayType\":\"Text\"},{\"field\":\"peso\",\"name\":\"Peso\",\"width\":\"30px\",\"displayType\":\"Number\"}]]","width":"386px"}, {"onClick":"aprendizajes_aprendizajesClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"aprendizajesAsignaturaLV"}, {}]
				}]
			}],
			panel7: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_BackgroundColor_VeryLightGray"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10"}, {}, {
				aprendizajes_asignaturaLiveForm: ["wm.LiveForm", {"height":"100px","verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"aprendizajes_asignaturaLiveFormSuccess","onInsertData":"aprendizajes_asignaturaLiveFormInsertData","onUpdateData":"aprendizajes_asignaturaLiveFormUpdateData","onDeleteData":"aprendizajes_asignaturaLiveFormDeleteData"}],
				idAprendizajeEditor1: ["wm.Editor", {"caption":"Id aprendizaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
					editor: ["wm._NumberEditor", {"required":true}, {}]
				}],
				fechaEsperadaEditor1: ["wm.Editor", {"caption":"Fecha esperada","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaEsperada","showing":false}, {}, {
					editor: ["wm._DateEditor", {"required":true}, {}]
				}],
				aprendizajeEditor1: ["wm.Editor", {"caption":"Aprendizaje","width":"100%","height":"80px","readonly":true,"formField":"aprendizaje","singleLine":false}, {}, {
					editor: ["wm._TextEditor", {"required":true}, {}]
				}],
				learningEditor1: ["wm.Editor", {"caption":"Learning","width":"100%","height":"80px","readonly":true,"formField":"learning","singleLine":false}, {}, {
					editor: ["wm._TextEditor", {"required":true}, {}]
				}],
				pesoEditor1: ["wm.Editor", {"caption":"Peso","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"peso"}, {}, {
					editor: ["wm._NumberEditor", {"required":true}, {}]
				}],
				ejeIdEjeEditor1: ["wm.Editor", {"caption":"1er. Eje","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"ejeIdEje"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"aprendizajesEje1","expression":undefined}, {}]
						}]
					}]
				}],
				eje2IdEjeEditor1: ["wm.Editor", {"caption":"2do. Eje","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eje2IdEje"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"aprendizajesEje2","expression":undefined}, {}]
						}]
					}]
				}],
				eje3IdEjeEditor1: ["wm.TextEditor", {"width":"100%","caption":"3er. Eje","display":"Select","readonly":true,"formField":"eje3IdEje"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"aprendizajesEje3","expression":undefined}, {}]
						}]
					}]
				}],
				dimensinComprensionEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Dimensión Comprensión","readonly":true}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"dimensionComprension","dataField":"idDimension"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_dimension_comprension","expression":undefined}, {}]
						}]
					}]
				}],
				dimensinCurricularEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Dimensión Currícular","readonly":true}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"dimensionCurricular","dataField":"idDimension"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_dimension_curricular","expression":undefined}, {}]
						}]
					}]
				}],
				inteligenciaEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Inteligencia","readonly":true}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"inteligencia","dataField":"idInteligencia"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inteligencias","expression":undefined}, {}]
						}]
					}]
				}],
				nivelEsperadoEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Nivel esperado","readonly":true}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"nivelEsperado","dataField":"idNivelEsperado"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_nivel_esperado","expression":undefined}, {}]
						}]
					}]
				}],
				editPanel3: ["wm.EditPanel", {"liveForm":"learningsLiveForm1","savePanel":"savePanel3","operationPanel":"operationPanel3","lock":false}, {}, {
					savePanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
						saveButton4: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White","wm_BackgroundColor_White"]},"height":"100%","width":"96px","caption":"Guardar*","border":"0"}, {"onclick":"saveButton4Click"}],
						saveButton3: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White","wm_BackgroundColor_White"]},"height":"100%","width":"100px","caption":"Guardar","border":"0","disabled":undefined}, {"onclick":"saveButton3Click"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formInvalid","expression":undefined}, {}]
							}]
						}],
						cancelButton3: ["wm.Button", {"height":"100%","width":"100px","caption":"Cancelar"}, {"onclick":"cancelButton3Click"}]
					}],
					operationPanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						newButton3: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontColor_White"]},"height":"100%","width":"100px","caption":"Nuevo","border":"0","disabled":true}, {"onclick":"newButton3Click"}],
						updateButton3: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontColor_White"]},"height":"100%","width":"100px","caption":"Actualizar","border":"0","disabled":true}, {"onclick":"updateButton3Click"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
							}]
						}],
						deleteButton3: ["wm.Button", {"height":"100%","width":"100px","caption":"Borrar","disabled":true}, {"onclick":"deleteButton3Click"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
							}]
						}]
					}]
				}],
				insertLogDocentesForm: ["wm.LiveForm", {"height":"49px","verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"insertLogDocentesFormSuccess"}]
			}]
		}]
	}]
}