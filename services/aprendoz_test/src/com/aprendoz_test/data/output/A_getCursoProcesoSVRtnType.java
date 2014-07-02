
package com.aprendoz_test.data.output;



/**
 * Generated for query "a_getCursoProcesoSV" on 06/24/2014 11:04:55
 * 
 */
public class A_getCursoProcesoSVRtnType {

    private Integer idpersona;
    private String codigo;
    private String nombre;
    private Integer idcurso;
    private Integer idsy;
    private String schoolyear;

    public A_getCursoProcesoSVRtnType() {
    }

    public A_getCursoProcesoSVRtnType(Integer idpersona, String codigo, String nombre, Integer idcurso, Integer idsy, String schoolyear) {
        this.idpersona = idpersona;
        this.codigo = codigo;
        this.nombre = nombre;
        this.idcurso = idcurso;
        this.idsy = idsy;
        this.schoolyear = schoolyear;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getIdcurso() {
        return idcurso;
    }

    public void setIdcurso(Integer idcurso) {
        this.idcurso = idcurso;
    }

    public Integer getIdsy() {
        return idsy;
    }

    public void setIdsy(Integer idsy) {
        this.idsy = idsy;
    }

    public String getSchoolyear() {
        return schoolyear;
    }

    public void setSchoolyear(String schoolyear) {
        this.schoolyear = schoolyear;
    }

}
