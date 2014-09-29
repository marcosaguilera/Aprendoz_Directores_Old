
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogIngresoCarne
 *  09/11/2014 07:30:06
 * 
 */
public class LogIngresoCarne {

    private Integer idLogIngresoCarne;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private TipoFalla tipoFalla;
    private Persona persona;

    public LogIngresoCarne() {
    }

    public LogIngresoCarne(Integer idLogIngresoCarne, Date fechaCreacion, Date fechaActualizacion) {
        this.idLogIngresoCarne = idLogIngresoCarne;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public LogIngresoCarne(Integer idLogIngresoCarne, Date fechaCreacion, Date fechaActualizacion, TipoFalla tipoFalla, Persona persona) {
        this.idLogIngresoCarne = idLogIngresoCarne;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.tipoFalla = tipoFalla;
        this.persona = persona;
    }

    public Integer getIdLogIngresoCarne() {
        return idLogIngresoCarne;
    }

    public void setIdLogIngresoCarne(Integer idLogIngresoCarne) {
        this.idLogIngresoCarne = idLogIngresoCarne;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public TipoFalla getTipoFalla() {
        return tipoFalla;
    }

    public void setTipoFalla(TipoFalla tipoFalla) {
        this.tipoFalla = tipoFalla;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
