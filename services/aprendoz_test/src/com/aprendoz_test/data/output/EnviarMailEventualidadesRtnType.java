
package com.aprendoz_test.data.output;

import java.util.Date;


/**
 * Generated for query "enviarMailEventualidades" on 09/29/2014 19:07:56
 * 
 */
public class EnviarMailEventualidadesRtnType {

    private Integer alumnoid;
    private String nombreAlumno;
    private Integer c2;
    private String c3;
    private String curso;
    private String coordinador;
    private String correoCoordinador;
    private Date fecha;
    private Date hora;
    private String lugar;
    private String tipoeventualidad;
    private String subtipo;
    private String correodirector;
    private String docenteReg;

    public EnviarMailEventualidadesRtnType() {
    }

    public EnviarMailEventualidadesRtnType(Integer alumnoid, String nombreAlumno, Integer c2, String c3, String curso, String coordinador, String correoCoordinador, Date fecha, Date hora, String lugar, String tipoeventualidad, String subtipo, String correodirector, String docenteReg) {
        this.alumnoid = alumnoid;
        this.nombreAlumno = nombreAlumno;
        this.c2 = c2;
        this.c3 = c3;
        this.curso = curso;
        this.coordinador = coordinador;
        this.correoCoordinador = correoCoordinador;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.tipoeventualidad = tipoeventualidad;
        this.subtipo = subtipo;
        this.correodirector = correodirector;
        this.docenteReg = docenteReg;
    }

    public Integer getAlumnoid() {
        return alumnoid;
    }

    public void setAlumnoid(Integer alumnoid) {
        this.alumnoid = alumnoid;
    }

    public String getNombreAlumno() {
        return nombreAlumno;
    }

    public void setNombreAlumno(String nombreAlumno) {
        this.nombreAlumno = nombreAlumno;
    }

    public Integer getC2() {
        return c2;
    }

    public void setC2(Integer c2) {
        this.c2 = c2;
    }

    public String getC3() {
        return c3;
    }

    public void setC3(String c3) {
        this.c3 = c3;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getCoordinador() {
        return coordinador;
    }

    public void setCoordinador(String coordinador) {
        this.coordinador = coordinador;
    }

    public String getCorreoCoordinador() {
        return correoCoordinador;
    }

    public void setCorreoCoordinador(String correoCoordinador) {
        this.correoCoordinador = correoCoordinador;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public String getTipoeventualidad() {
        return tipoeventualidad;
    }

    public void setTipoeventualidad(String tipoeventualidad) {
        this.tipoeventualidad = tipoeventualidad;
    }

    public String getSubtipo() {
        return subtipo;
    }

    public void setSubtipo(String subtipo) {
        this.subtipo = subtipo;
    }

    public String getCorreodirector() {
        return correodirector;
    }

    public void setCorreodirector(String correodirector) {
        this.correodirector = correodirector;
    }

    public String getDocenteReg() {
        return docenteReg;
    }

    public void setDocenteReg(String docenteReg) {
        this.docenteReg = docenteReg;
    }

}
