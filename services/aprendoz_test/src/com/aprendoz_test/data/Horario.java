
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Horario
 *  09/11/2014 07:30:07
 * 
 */
public class Horario {

    private Integer idHorario;
    private Integer numeroSesion;
    private String dia;
    private Curso curso;
    private Asignatura asignatura;
    private Sy sy;
    private TipoSemana tipoSemana;

    public Horario() {
    }

    public Horario(Integer idHorario, Integer numeroSesion, String dia) {
        this.idHorario = idHorario;
        this.numeroSesion = numeroSesion;
        this.dia = dia;
    }

    public Horario(Integer idHorario, Integer numeroSesion, String dia, Curso curso, Asignatura asignatura, Sy sy, TipoSemana tipoSemana) {
        this.idHorario = idHorario;
        this.numeroSesion = numeroSesion;
        this.dia = dia;
        this.curso = curso;
        this.asignatura = asignatura;
        this.sy = sy;
        this.tipoSemana = tipoSemana;
    }

    public Integer getIdHorario() {
        return idHorario;
    }

    public void setIdHorario(Integer idHorario) {
        this.idHorario = idHorario;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
    }

    public String getDia() {
        return dia;
    }

    public void setDia(String dia) {
        this.dia = dia;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public TipoSemana getTipoSemana() {
        return tipoSemana;
    }

    public void setTipoSemana(TipoSemana tipoSemana) {
        this.tipoSemana = tipoSemana;
    }

}
