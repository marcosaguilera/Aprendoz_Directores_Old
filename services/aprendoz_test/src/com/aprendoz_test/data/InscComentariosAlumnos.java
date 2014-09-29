
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.InscComentariosAlumnos
 *  09/11/2014 07:30:07
 * 
 */
public class InscComentariosAlumnos {

    private Integer idComentarioEstudiante;
    private Integer numeroBimestre;
    private String comentario;
    private Date fechaActual;
    private Sy sy;
    private Persona persona;

    public InscComentariosAlumnos() {
    }

    public InscComentariosAlumnos(Integer idComentarioEstudiante, Integer numeroBimestre, String comentario, Date fechaActual) {
        this.idComentarioEstudiante = idComentarioEstudiante;
        this.numeroBimestre = numeroBimestre;
        this.comentario = comentario;
        this.fechaActual = fechaActual;
    }

    public InscComentariosAlumnos(Integer idComentarioEstudiante, Integer numeroBimestre, String comentario, Date fechaActual, Sy sy, Persona persona) {
        this.idComentarioEstudiante = idComentarioEstudiante;
        this.numeroBimestre = numeroBimestre;
        this.comentario = comentario;
        this.fechaActual = fechaActual;
        this.sy = sy;
        this.persona = persona;
    }

    public Integer getIdComentarioEstudiante() {
        return idComentarioEstudiante;
    }

    public void setIdComentarioEstudiante(Integer idComentarioEstudiante) {
        this.idComentarioEstudiante = idComentarioEstudiante;
    }

    public Integer getNumeroBimestre() {
        return numeroBimestre;
    }

    public void setNumeroBimestre(Integer numeroBimestre) {
        this.numeroBimestre = numeroBimestre;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Date getFechaActual() {
        return fechaActual;
    }

    public void setFechaActual(Date fechaActual) {
        this.fechaActual = fechaActual;
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
