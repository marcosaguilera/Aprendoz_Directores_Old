
package com.aprendoz_test.data;



/**
 *  aprendoz_test.InscCoordinadoresCurso
 *  09/11/2014 07:30:07
 * 
 */
public class InscCoordinadoresCurso {

    private Integer idInscCoordinadoresCurso;
    private String grupo;
    private Curso curso;
    private Sy sy;
    private Persona persona;

    public InscCoordinadoresCurso() {
    }

    public InscCoordinadoresCurso(Integer idInscCoordinadoresCurso, String grupo) {
        this.idInscCoordinadoresCurso = idInscCoordinadoresCurso;
        this.grupo = grupo;
    }

    public InscCoordinadoresCurso(Integer idInscCoordinadoresCurso, String grupo, Curso curso, Sy sy, Persona persona) {
        this.idInscCoordinadoresCurso = idInscCoordinadoresCurso;
        this.grupo = grupo;
        this.curso = curso;
        this.sy = sy;
        this.persona = persona;
    }

    public Integer getIdInscCoordinadoresCurso() {
        return idInscCoordinadoresCurso;
    }

    public void setIdInscCoordinadoresCurso(Integer idInscCoordinadoresCurso) {
        this.idInscCoordinadoresCurso = idInscCoordinadoresCurso;
    }

    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
