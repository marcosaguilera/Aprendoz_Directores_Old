Distribucion.widgets = {
	p_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {}],
	p_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	p_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"sel_grado.dataValue"}, {}]
		}]
	}],
	inscalumcursoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumcursoLiveView5","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","maxResults":100}, {"onSuccess":"inscalumcursoLiveVariable1Success"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.sexo","source":"sel_gender.dataValue"}, {}]
		}]
	}],
	l_lista_distribucion_curso_alumnos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaDristribucionAlumnosCursos","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2","maxResults":80}, {"onSuccess":"l_lista_distribucion_curso_alumnosSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"num_aux.dataValue"}, {}]
		}]
	}],
	genderList: ["wm.Variable", {"type":"EntryData","json":"[\n{name: \"Masculino\", value: \"Masculino\"},\n{name: \"Femenino\", value: \"Femenino\"}\n]"}, {}],
	countMale: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCountGenderMale"}, {"onSuccess":"countMaleSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getCountGenderMaleInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"curso","source":"sel_curso.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"sy","source":"sel_sy.dataValue"}, {}]
			}]
		}]
	}],
	countFemale: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCountGenderFemale"}, {"onSuccess":"countFemaleSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getCountGenderFemaleInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"curso","source":"sel_curso.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"sy","source":"sel_sy.dataValue"}, {}]
			}]
		}]
	}],
	countMaleRight: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCountGenderMale"}, {"onSuccess":"countMaleRightSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getCountGenderMaleInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"sy","source":"sel_sy.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"curso","source":"num_aux.dataValue"}, {}]
			}]
		}]
	}],
	countFemaleRight: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCountGenderFemale"}, {"onSuccess":"countFemaleRightSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getCountGenderFemaleInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"curso","source":"num_aux.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"sy","source":"sel_sy.dataValue"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel_header: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_FontSizePx_12px"]},"height":"35px","horizontalAlign":"left","verticalAlign":"middle","width":"100%","layoutKind":"left-to-right"}, {}, {
			sel_sy: ["wm.SelectEditor", {"width":"180px","caption":"Año Escolar","captionSize":"100%"}, {}, {
				editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","startUpdate":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"p_sy","expression":undefined}, {}]
					}]
				}]
			}],
			sel_grado: ["wm.SelectEditor", {"caption":"Grado"}, {"onchange":"sel_gradoChange"}, {
				editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"p_grado","expression":undefined}, {}]
					}]
				}]
			}],
			sel_curso: ["wm.SelectEditor", {"caption":"Curso"}, {"onchange":"inscalumcursoLiveVariable1"}, {
				editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"p_curso","expression":undefined}, {}]
					}]
				}]
			}]
		}],
		panel_content: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
			inscalumcursoGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Tabla Estudiantes","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","border":"3,3,3,3"}, {}, {
				panel_counter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"37px","horizontalAlign":"left","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
					label_total_estudiantes: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"❯❯","height":"100%","width":"100%","border":"0","align":"right"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_FontColor_Black"]},"height":"34px","horizontalAlign":"right","verticalAlign":"middle","width":"100%","layoutKind":"left-to-right"}, {}, {
					male: ["wm.Picture", {"source":"resources/images/ico/male0.png","height":"100%","border":"0","width":"40px"}, {}],
					getCountMale: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px"]},"height":"100%","width":"40px","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					picture1: ["wm.Picture", {"source":"resources/images/ico/female0.png","height":"100%","border":"0","width":"40px"}, {}],
					getCountFemale: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px"]},"height":"100%","width":"40px","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				inscalumcursoDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {"onSetColumns":"inscalumcursoDataGrid1SetColumns"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoLiveVariable1","expression":undefined}, {}]
					}],
					column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","columnWidth":"100%","index":3,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					column2: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"100%","index":2,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					column3: ["wm.DataGridColumn", {"caption":"Codigo","field":"persona.codigo","columnWidth":"60px","index":1}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					column4: ["wm.DataGridColumn", {"caption":"Curso","field":"curso.curso","columnWidth":"75px","index":4}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					column5: ["wm.DataGridColumn", {"caption":"●","columnWidth":"50px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					column6: ["wm.DataGridColumn", {"caption":"⤣","field":"persona.sexo","columnWidth":"60px","index":5}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}],
			layers1: ["wm.Layers", {}, {}, {
				layer1: ["wm.Layer", {"caption":"layer_forms_objects","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					inscalumcursoDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"185px"}, {}, {
						inscalumcursoLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumcursoLiveForm1Success","onCancelEdit":"inscalumcursoLiveForm1CancelEdit"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem","expression":undefined}, {}],
								wire1: ["wm.Wire", {"targetProperty":"dataOutput.curso","source":"cursoRelatedEditor1.dataOutput","expression":undefined}, {}],
								wire2: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor1.dataOutput","expression":undefined}, {}],
								wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}]
							}],
							idInscAlumCursoEditor1: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumCurso"}, {}, {
								editor: ["wm._NumberEditor", {"required":true}, {}]
							}],
							calificacionEditor1: ["wm.Editor", {"caption":"Calificacion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacion","disabled":true,"showing":false}, {}, {
								editor: ["wm._NumberEditor", {}, {}]
							}],
							califCharEditor1: ["wm.Editor", {"caption":"Calificación Char","width":"100%","height":"26px","readonly":true,"formField":"califChar","disabled":true,"showing":false}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							fechaMatriculaEditor1: ["wm.Editor", {"caption":"Fecha Matricula","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaMatricula","disabled":true,"showing":false}, {}, {
								editor: ["wm._DateEditor", {"required":true}, {}]
							}],
							panel3: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","lock":true}, {}, {
								cursoRelatedEditor1: ["wm.RelatedEditor", {"formField":"curso"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.curso","expression":undefined}, {}],
										wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"cursoLookup1.selectedItem","expression":undefined}, {}]
									}],
									cursoLookup1: ["wm.Editor", {"caption":"Curso a Distribuir","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {"onchange":"cursoLookup1Change"}, {
										editor: ["wm._LookupEditor", {"required":true,"displayField":"curso","autoDataSet":false,"startUpdate":false}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"p_curso","expression":undefined}, {}]
											}]
										}]
									}]
								}]
							}],
							panel1: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
								syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.sy","expression":undefined}, {}],
										wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup3.selectedItem","expression":undefined}, {}]
									}],
									syLookup2: ["wm.Editor", {"caption":"Año Escolar","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSy"}, {}, {
										editor: ["wm._NumberEditor", {"required":true}, {}]
									}]
								}],
								num_aux: ["wm.NumberEditor", {"caption":"aux","disabled":true,"showing":false}, {"onchange":"l_lista_distribucion_curso_alumnos"}, {
									editor: ["wm._NumberEditor", {}, {}]
								}]
							}],
							panel2: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","lock":true}, {}, {
								personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.persona","expression":undefined}, {}],
										wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup3.selectedItem","expression":undefined}, {}]
									}],
									personaLookup2: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
										editor: ["wm._NumberEditor", {"required":true}, {}]
									}]
								}]
							}],
							editPanel1: ["wm.EditPanel", {"liveForm":"inscalumcursoLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1"}, {}, {
								savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","showing":false}, {}, {
									saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
										}]
									}],
									cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
								}],
								operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
									newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataInsert"}],
									updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
										}]
									}],
									deleteButton1: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true,"showing":false}, {"onclick":"editPanel1.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
										}]
									}]
								}]
							}]
						}]
					}],
					panel_informativo: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"35px","horizontalAlign":"left","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
						label_total_estudiantes2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"❯❯","height":"100%","width":"100%","border":"0","align":"right"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					panel4: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_FontColor_Black"]},"height":"34px","horizontalAlign":"right","verticalAlign":"middle","width":"100%","layoutKind":"left-to-right"}, {}, {
						male1: ["wm.Picture", {"source":"resources/images/ico/male0.png","height":"100%","border":"0","width":"40px"}, {}],
						getCountMale1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px"]},"height":"100%","width":"40px","border":"0"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						picture2: ["wm.Picture", {"source":"resources/images/ico/female0.png","height":"100%","border":"0","width":"40px"}, {}],
						getCountFemale1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px"]},"height":"100%","width":"40px","border":"0"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					lista_distribucion_curso_dataGrid: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {"onSetColumns":"lista_distribucion_curso_dataGridSetColumns"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_lista_distribucion_curso_alumnos","expression":undefined}, {}]
						}],
						column2: ["wm.DataGridColumn", {"caption":"Codigo","field":"id.codigo","columnWidth":"65px","index":1}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column3: ["wm.DataGridColumn", {"caption":"•","columnWidth":"43px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column4: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":2,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column5: ["wm.DataGridColumn", {"caption":"Curso","field":"id.curso","columnWidth":"75px","index":4}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}