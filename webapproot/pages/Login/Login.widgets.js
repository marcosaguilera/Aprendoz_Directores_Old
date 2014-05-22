Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%","width":"649px"}, {}, {
		spacer2: ["wm.Spacer", {"height":"160px","width":"96px"}, {}],
		loginMainPanel: ["wm.Panel", {"height":"336px","layoutKind":"left-to-right"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_BackgroundColor_White"]},"height":"273px","width":"369px","border":"1","padding":"10,20,10,20","borderColor":"#bbb"}, {}, {
				picture1: ["wm.Picture", {"height":"83px","border":"0","width":"100%","source":"http://aprendoz.rochester.edu.co/recursos/logo_aprendoz_nuevo.png","aspect":"v"}, {}],
				label2: ["wm.Label", {"height":"48px","width":"96px","border":"0","align":"center","caption":"Aprendoz Directores"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				usernameInput: ["wm.Editor", {"caption":"Usuario","height":"40px","captionSize":"100px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña","height":"40px","captionSize":"100px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"44px","horizontalAlign":"right","padding":"4","layoutKind":"left-to-right"}, {}, {
					passObject1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"32px","width":"100%","border":"0","align":"center","caption":"¿No puedes acceder a tu cuenta?","link":"http://aprendoz.rochester.edu.co/forgot-password"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"height":"100%","width":"110px","borderColor":"#aaa","iconUrl":"resources/images/buttons/login.png","iconMargin":"0 -20px 0 0","margin":"0","caption":"Acceder","iconHeight":"20px"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"11px"}, {}],
				loginErrorMsg: ["wm.Label", {"height":"58px","border":"0","align":"center","caption":" "}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}],
		spacer1: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
		panel2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"42px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"48px","width":"513px","border":"0","align":"center","caption":"Colegio Rochester  - Aprendoz © Versión  - 2013 - 2014"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}