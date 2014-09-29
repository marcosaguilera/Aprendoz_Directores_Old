
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.SesionNivel
 *  09/11/2014 07:30:07
 * 
 */
public class SesionNivel {

    private Integer idSesionNivel;
    private Integer numeroSesion;
    private Date horaInicio;
    private Date horaFin;
    private Integer dia;
    private Nivel nivel;
    private Sy sy;

    public SesionNivel() {
    }

    public SesionNivel(Integer idSesionNivel, Integer numeroSesion, Date horaInicio, Date horaFin, Integer dia) {
        this.idSesionNivel = idSesionNivel;
        this.numeroSesion = numeroSesion;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.dia = dia;
    }

    public SesionNivel(Integer idSesionNivel, Integer numeroSesion, Date horaInicio, Date horaFin, Integer dia, Nivel nivel, Sy sy) {
        this.idSesionNivel = idSesionNivel;
        this.numeroSesion = numeroSesion;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.dia = dia;
        this.nivel = nivel;
        this.sy = sy;
    }

    public Integer getIdSesionNivel() {
        return idSesionNivel;
    }

    public void setIdSesionNivel(Integer idSesionNivel) {
        this.idSesionNivel = idSesionNivel;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
    }

    public Date getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(Date horaInicio) {
        this.horaInicio = horaInicio;
    }

    public Date getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(Date horaFin) {
        this.horaFin = horaFin;
    }

    public Integer getDia() {
        return dia;
    }

    public void setDia(Integer dia) {
        this.dia = dia;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

}
