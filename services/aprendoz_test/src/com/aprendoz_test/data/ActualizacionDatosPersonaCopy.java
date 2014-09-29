
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.ActualizacionDatosPersonaCopy
 *  09/11/2014 07:30:06
 * 
 */
public class ActualizacionDatosPersonaCopy {

    private Integer idActualizacionDatosPersona;
    private Date fechaCreacion;
    private Date fecha;
    private Byte actualizado;
    private Persona persona;

    public ActualizacionDatosPersonaCopy() {
    }

    public ActualizacionDatosPersonaCopy(Integer idActualizacionDatosPersona, Date fechaCreacion, Date fecha, Byte actualizado) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public ActualizacionDatosPersonaCopy(Integer idActualizacionDatosPersona, Date fechaCreacion, Date fecha, Byte actualizado, Persona persona) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
        this.persona = persona;
    }

    public Integer getIdActualizacionDatosPersona() {
        return idActualizacionDatosPersona;
    }

    public void setIdActualizacionDatosPersona(Integer idActualizacionDatosPersona) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
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

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
