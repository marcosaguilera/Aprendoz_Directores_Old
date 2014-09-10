
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.ActualizacionDatosPersona
 *  09/10/2014 12:59:40
 * 
 */
public class ActualizacionDatosPersona {

    private Integer idActualizacionDatosPersona;
    private Persona persona;
    private Date fechaCreacion;
    private Date fecha;
    private Byte actualizado;

    public ActualizacionDatosPersona() {
    }

    public ActualizacionDatosPersona(Integer idActualizacionDatosPersona, Date fechaCreacion, Date fecha, Byte actualizado) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public ActualizacionDatosPersona(Integer idActualizacionDatosPersona, Persona persona, Date fechaCreacion, Date fecha, Byte actualizado) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
        this.persona = persona;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public Integer getIdActualizacionDatosPersona() {
        return idActualizacionDatosPersona;
    }

    public void setIdActualizacionDatosPersona(Integer idActualizacionDatosPersona) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Byte getActualizado() {
        return actualizado;
    }

    public void setActualizado(Byte actualizado) {
        this.actualizado = actualizado;
    }

}
