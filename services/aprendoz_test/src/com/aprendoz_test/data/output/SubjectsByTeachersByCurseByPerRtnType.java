
package com.aprendoz_test.data.output;



/**
 * Generated for query "subjectsByTeachersByCurseByPer" on 05/21/2014 13:04:39
 * 
 */
public class SubjectsByTeachersByCurseByPerRtnType {

    private String nombre_completo;
    private String asignatura;
    private String periodo;
    private Long id;

    public SubjectsByTeachersByCurseByPerRtnType() {
    }

    public SubjectsByTeachersByCurseByPerRtnType(String nombre_completo, String asignatura, String periodo, Long id) {
        this.nombre_completo = nombre_completo;
        this.asignatura = asignatura;
        this.periodo = periodo;
        this.id = id;
    }

    public String getNombre_completo() {
        return nombre_completo;
    }

    public void setNombre_completo(String nombre_completo) {
        this.nombre_completo = nombre_completo;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
