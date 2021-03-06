
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.Cronograma
 *  09/11/2014 07:30:07
 * 
 */
public class Cronograma {

    private Integer idCronograma;
    private Date fecha;
    private String descripcion;
    private TipoDia tipoDia;
    private Sy sy;

    public Cronograma() {
    }

    public Cronograma(Integer idCronograma, Date fecha, String descripcion) {
        this.idCronograma = idCronograma;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }

    public Cronograma(Integer idCronograma, Date fecha, String descripcion, TipoDia tipoDia, Sy sy) {
        this.idCronograma = idCronograma;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.tipoDia = tipoDia;
        this.sy = sy;
    }

    public Integer getIdCronograma() {
        return idCronograma;
    }

    public void setIdCronograma(Integer idCronograma) {
        this.idCronograma = idCronograma;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public TipoDia getTipoDia() {
        return tipoDia;
    }

    public void setTipoDia(TipoDia tipoDia) {
        this.tipoDia = tipoDia;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

}
