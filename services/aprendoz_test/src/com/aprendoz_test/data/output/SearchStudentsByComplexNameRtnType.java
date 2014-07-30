
package com.aprendoz_test.data.output;



/**
 * Generated for query "searchStudentsByComplexName" on 07/30/2014 13:28:39
 * 
 */
public class SearchStudentsByComplexNameRtnType {

    private String codigo;
    private String nombreCompleto;
    private Integer idgf;
    private String grupoFamiliar;
    private Integer idpersona;

    public SearchStudentsByComplexNameRtnType() {
    }

    public SearchStudentsByComplexNameRtnType(String codigo, String nombreCompleto, Integer idgf, String grupoFamiliar, Integer idpersona) {
        this.codigo = codigo;
        this.nombreCompleto = nombreCompleto;
        this.idgf = idgf;
        this.grupoFamiliar = grupoFamiliar;
        this.idpersona = idpersona;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public Integer getIdgf() {
        return idgf;
    }

    public void setIdgf(Integer idgf) {
        this.idgf = idgf;
    }

    public String getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(String grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

}
