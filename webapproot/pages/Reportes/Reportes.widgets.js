Reportes.widgets = {
	a_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {}],
	a_periodo: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Periodo"}, {}],
	formatos: ["wm.Variable", {"type":"EntryData","json":"[\n{name:\"PDF\", value:\"PDF\"},\n{name:\"XLS\", value:\"XLS\"},\n{name:\"CSV\", value:\"CSV\"}\n]"}, {}],
	a_nivel: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Nivel"}, {}],
	searchUser: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"searchReportesAlumnos"}, {}, {
		input: ["wm.ServiceInput", {"type":"searchReportesAlumnosInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"search","source":"search_user_complex_box.dataValue"}, {}]
			}]
		}]
	}],
	a_grado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	ls_periodos_hql: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hQLlsPeriodo","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hQLlsPeriodoInputs"}, {}]
	}],
	ls_cursos_hql: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hQLlsCursos","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hQLlsCursosInputs"}, {}]
	}],
	ls_grados_hql: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hQLlsGrado","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hQLlsGradoInputs"}, {}]
	}],
	ls_semanas: ["wm.Variable", {"type":"EntryData","json":"[\n{name:\"Semana A\", dataValue:1},\n{name:\"Semana B\", dataValue:2}\n]"}, {}],
	meses: ["wm.Variable", {"type":"EntryData","json":"[\n{name:\"Septiembre\", dataValue: 1},\n{name:\"Octubre\", dataValue: 2},\n{name:\"Noviembre\", dataValue: 3},\n{name:\"Diciembre\", dataValue: 4},\n{name:\"Enero\", dataValue: 5},\n{name:\"Febrero\", dataValue: 6},\n{name:\"Marzo\", dataValue: 7},\n{name:\"Abril\", dataValue: 8},\n{name:\"Mayo\", dataValue: 9},\n{name:\"Junio\", dataValue: 10},\n{name:\"Julio\", dataValue: 11}\n]"}, {}],
	a_area: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_tipo_eventualidades: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hql_tipo_eventualidad","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hql_tipo_eventualidadInputs"}, {}]
	}],
	reportes_main_layer: ["wm.Layout", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","padding":"10"}, {}, {
		top_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px"]},"height":"55px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			reporte_descrip_general: ["wm.Label", {"height":"100%","width":"100%","border":"0","singleLine":false}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		layers7: ["wm.Layers", {"border":"1","borderColor":"#CAE1FF"}, {}, {
			layer7: ["wm.Layer", {"caption":"layer7","horizontalAlign":"right","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"height":"174px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					layers2: ["wm.Layers", {}, {}, {
						layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"right","verticalAlign":"bottom"}, {}, {
							sy_box: ["wm.SelectEditor", {"width":"230px","caption":"Año Escolar","captionSize":"70%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
									}]
								}]
							}],
							nivel_box: ["wm.SelectEditor", {"width":"230px","caption":"Nivel","captionSize":"70%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"nivel","dataField":"idNivel","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_nivel","expression":undefined}, {}]
									}]
								}]
							}],
							periodo_box: ["wm.SelectEditor", {"width":"230px","caption":"Periodo","captionSize":"70%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"periodo","dataField":"id","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_periodos_hql","expression":undefined}, {}]
									}]
								}]
							}],
							grado_box: ["wm.SelectEditor", {"width":"230px","caption":"Grado inicial","captionSize":"70%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"id","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_grados_hql","expression":undefined}, {}]
									}]
								}]
							}],
							grado_box2: ["wm.SelectEditor", {"width":"230px","caption":"Grado final","captionSize":"70%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"id","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_grados_hql","expression":undefined}, {}]
									}]
								}]
							}],
							curso_box: ["wm.SelectEditor", {"width":"230px","caption":"Curso","captionSize":"70%"}, {}, {
								editor: ["wm._SelectEditor", {"required":true}, {}]
							}]
						}]
					}],
					layers1: ["wm.Layers", {}, {}, {
						layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"right","verticalAlign":"bottom"}, {}, {
							p1: ["wm.Panel", {"height":"36px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
								f1_label: ["wm.Label", {"height":"31px","width":"150%","border":"0","align":"right","singleLine":false}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								fecha1_dt: ["wm.DateEditor", {"width":"123px","captionSize":"90%"}, {}, {
									editor: ["wm._DateEditor", {"required":true}, {}]
								}]
							}],
							p2: ["wm.Panel", {"height":"36px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
								f2_label: ["wm.Label", {"height":"30px","width":"150%","border":"0","align":"right"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								fecha2_dt: ["wm.DateEditor", {"width":"123px","captionSize":"90%"}, {}, {
									editor: ["wm._DateEditor", {"required":true}, {}]
								}]
							}],
							nivel_esperado: ["wm.SelectEditor", {"width":"230px","caption":"Grado deseado","captionSize":"90%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
									}]
								}]
							}],
							desde_curso_box: ["wm.SelectEditor", {"width":"230px","caption":"Curso inicial","captionSize":"90%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"id","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_cursos_hql","expression":undefined}, {}]
									}]
								}]
							}],
							hasta_curso_box: ["wm.SelectEditor", {"width":"230px","caption":"Curso final","captionSize":"90%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"id","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_cursos_hql","expression":undefined}, {}]
									}]
								}]
							}],
							semana_box: ["wm.SelectEditor", {"width":"230px","caption":"Semana","captionSize":"90%"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_semanas","expression":undefined}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				panel2: ["wm.Panel", {"height":"92px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					layers4: ["wm.Layers", {}, {}, {
						layer4: ["wm.Layer", {"caption":"layer4","horizontalAlign":"right","verticalAlign":"middle"}, {}, {
							num_asig_bajo: ["wm.TextEditor", {"width":"270px","caption":"Número de asignaturas","captionSize":"260%"}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							peso_aprendizaje: ["wm.NumberEditor", {"width":"100%","caption":"Aprendizajes con peso mayor o igual a","captionSize":"600%"}, {}, {
								editor: ["wm._NumberEditor", {}, {}]
							}],
							numero_mes: ["wm.NumberEditor", {"display":"Select","width":"228px","caption":"Mes"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","startUpdate":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"meses","expression":undefined}, {}]
									}]
								}]
							}],
							puntaje: ["wm.NumberEditor", {"width":"281px","caption":"Puntaje minimo","captionSize":"85%"}, {}, {
								editor: ["wm._NumberEditor", {}, {}]
							}],
							puntaje_max: ["wm.NumberEditor", {"width":"281px","caption":"Puntaje maximo","captionSize":"85%"}, {}, {
								editor: ["wm._NumberEditor", {}, {}]
							}]
						}]
					}],
					layers3: ["wm.Layers", {}, {}, {
						layer3: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","verticalAlign":"middle"}, {}, {
							idp_box: ["wm.TextEditor", {"width":"230px","caption":"Codigo persona","captionSize":"120%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {"required":true}, {}]
							}],
							search_user_complex_box: ["wm.TextEditor", {"width":"100%","caption":"Nombre completo","captionSize":"60%"}, {"onchange":"search_user_complex_boxChange"}, {
								editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
							}],
							buscar_butt: ["wm.Button", {"height":"32px","width":"96px","caption":"Buscar","showing":false}, {"onclick":"buscar_buttClick"}]
						}]
					}]
				}],
				panel3: ["wm.Panel", {"height":"176px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					dojolayers5: ["wm.Layers", {}, {}, {
						layer5: ["wm.Layer", {"caption":"layer5","horizontalAlign":"right","verticalAlign":"top"}, {}, {
							area_box: ["wm.SelectEditor", {"width":"300px","caption":"Area deseada","height":"28px"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_area","expression":undefined}, {}]
									}]
								}]
							}],
							tipoeventualidad: ["wm.SelectEditor", {"width":"300px","caption":"Tipo eventualidad","captionSize":"75%","height":"28px"}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"tipo","dataField":"id","startUpdate":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_tipo_eventualidades","expression":undefined}, {}]
									}]
								}]
							}],
							numero_eventualidades: ["wm.NumberEditor", {"height":"28px","width":"300px","caption":"No. eventualidades","captionSize":"75%"}, {}, {
								editor: ["wm._NumberEditor", {}, {}]
							}]
						}]
					}],
					layers6: ["wm.Layers", {}, {}, {
						layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							alumnosDataGrid: ["wm.DataGrid", {"border":"0"}, {"onSelected":"alumnosDataGridSelected","onCellClick":"alumnosDataGridCellClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"searchUser","expression":undefined}, {}]
								}],
								n1: ["wm.DataGridColumn", {"caption":"Nombre completo","field":"n1","columnWidth":"100%","index":1,"dataExpression":"${a1}+\" \"+${a2}+\" \"+${n1}+\" \"+${n2}"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								id1: ["wm.DataGridColumn", {"caption":"ID Unico","field":"id","columnWidth":"80px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}],
		panel4: ["wm.Panel", {"height":"29px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			formato_box: ["wm.SelectEditor", {"width":"230px","caption":"Seleccione Formato","captionSize":"160%","displayValue":"PDF"}, {}, {
				editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true}, {}, {
					optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"formatos","expression":undefined}, {}]
					}]
				}]
			}]
		}],
		panel_acciones: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_BackgroundColor_VeryLightGray"]},"height":"48px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			generar_butt: ["wm.Button", {"height":"100%","width":"96px","caption":"Generar"}, {"onclick":"generar_buttClick"}],
			limpiar_butt: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#bbb","caption":"Limpiar"}, {"onclick":"limpiar_buttClick"}]
		}]
	}]
}