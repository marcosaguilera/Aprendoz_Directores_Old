
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogDocentes
 *  06/13/2014 12:51:21
 * 
 */
public class LogDocentes {

    private Integer idLogDocentes;
    private Persona persona;
    private Date fechaIngreso;
    private Date horaIngreso;

    public LogDocentes() {
    }

    public LogDocentes(Integer idLogDocentes, Date fechaIngreso, Date horaIngreso) {
        this.idLogDocentes = idLogDocentes;
        this.fechaIngreso = fechaIngreso;
        this.horaIngreso = horaIngreso;
    }

    public LogDocentes(Integer idLogDocentes, Persona persona, Date fechaIngreso, Date horaIngreso) {
        this.idLogDocentes = idLogDocentes;
        this.persona = persona;
        this.fechaIngreso = fechaIngreso;
        this.horaIngreso = horaIngreso;
    }

    public Integer getIdLogDocentes() {
        return idLogDocentes;
    }

    public void setIdLogDocentes(Integer idLogDocentes) {
        this.idLogDocentes = idLogDocentes;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public Date getHoraIngreso() {
        return horaIngreso;
    }

    public void setHoraIngreso(Date horaIngreso) {
        this.horaIngreso = horaIngreso;
    }

}
