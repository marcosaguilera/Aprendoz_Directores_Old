
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.InscCoordinadoresSubarea
 *  09/11/2014 07:31:45
 * 
 */
public class InscCoordinadoresSubarea {

    private Integer idCoordinadorSubarea;
    private Integer activo;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Persona persona;
    private Sy sy;
    private Subarea subareas;

    public InscCoordinadoresSubarea() {
    }

    public InscCoordinadoresSubarea(Integer idCoordinadorSubarea, Integer activo, Date fechaCreacion, Date fechaActualizacion) {
        this.idCoordinadorSubarea = idCoordinadorSubarea;
        this.activo = activo;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public InscCoordinadoresSubarea(Integer idCoordinadorSubarea, Integer activo, Date fechaCreacion, Date fechaActualizacion, Persona persona, Sy sy, Subarea subareas) {
        this.idCoordinadorSubarea = idCoordinadorSubarea;
        this.activo = activo;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.persona = persona;
        this.sy = sy;
        this.subareas = subareas;
    }

    public Integer getIdCoordinadorSubarea() {
        return idCoordinadorSubarea;
    }

    public void setIdCoordinadorSubarea(Integer idCoordinadorSubarea) {
        this.idCoordinadorSubarea = idCoordinadorSubarea;
    }

    public Integer getActivo() {
        return activo;
    }

    public void setActivo(Integer activo) {
        this.activo = activo;
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

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Subarea getSubareas() {
        return subareas;
    }

    public void setSubareas(Subarea subareas) {
        this.subareas = subareas;
    }

}
