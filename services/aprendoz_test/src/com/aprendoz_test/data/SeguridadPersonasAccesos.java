
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.SeguridadPersonasAccesos
 *  09/11/2014 07:30:06
 * 
 */
public class SeguridadPersonasAccesos {

    private Integer idSeguridadPersonasAccesos;
    private Byte accesoTemp;
    private Date createdDate;
    private Date updatedDate;
    private String asignadoPor;
    private Persona persona;

    public SeguridadPersonasAccesos() {
    }

    public SeguridadPersonasAccesos(Integer idSeguridadPersonasAccesos, Byte accesoTemp, Date createdDate, Date updatedDate, String asignadoPor) {
        this.idSeguridadPersonasAccesos = idSeguridadPersonasAccesos;
        this.accesoTemp = accesoTemp;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.asignadoPor = asignadoPor;
    }

    public SeguridadPersonasAccesos(Integer idSeguridadPersonasAccesos, Byte accesoTemp, Date createdDate, Date updatedDate, String asignadoPor, Persona persona) {
        this.idSeguridadPersonasAccesos = idSeguridadPersonasAccesos;
        this.accesoTemp = accesoTemp;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.asignadoPor = asignadoPor;
        this.persona = persona;
    }

    public Integer getIdSeguridadPersonasAccesos() {
        return idSeguridadPersonasAccesos;
    }

    public void setIdSeguridadPersonasAccesos(Integer idSeguridadPersonasAccesos) {
        this.idSeguridadPersonasAccesos = idSeguridadPersonasAccesos;
    }

    public Byte getAccesoTemp() {
        return accesoTemp;
    }

    public void setAccesoTemp(Byte accesoTemp) {
        this.accesoTemp = accesoTemp;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getAsignadoPor() {
        return asignadoPor;
    }

    public void setAsignadoPor(String asignadoPor) {
        this.asignadoPor = asignadoPor;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
