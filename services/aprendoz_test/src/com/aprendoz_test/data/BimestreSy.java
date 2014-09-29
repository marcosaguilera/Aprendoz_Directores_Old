
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.BimestreSy
 *  09/11/2014 07:30:07
 * 
 */
public class BimestreSy {

    private Integer idBimSy;
    private Integer bimestre;
    private Date fechaInicio;
    private Date fechaFin;
    private Sy sy;

    public BimestreSy() {
    }

    public BimestreSy(Integer idBimSy, Integer bimestre, Date fechaInicio, Date fechaFin) {
        this.idBimSy = idBimSy;
        this.bimestre = bimestre;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    public BimestreSy(Integer idBimSy, Integer bimestre, Date fechaInicio, Date fechaFin, Sy sy) {
        this.idBimSy = idBimSy;
        this.bimestre = bimestre;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.sy = sy;
    }

    public Integer getIdBimSy() {
        return idBimSy;
    }

    public void setIdBimSy(Integer idBimSy) {
        this.idBimSy = idBimSy;
    }

    public Integer getBimestre() {
        return bimestre;
    }

    public void setBimestre(Integer bimestre) {
        this.bimestre = bimestre;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

}
