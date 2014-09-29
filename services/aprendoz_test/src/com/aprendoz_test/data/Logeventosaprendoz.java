
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.Logeventosaprendoz
 *  09/11/2014 07:30:07
 * 
 */
public class Logeventosaprendoz {

    private Integer idLogEventos;
    private Date hora;
    private Date fecha;
    private String accion;
    private String tabla;
    private Persona persona;

    public Logeventosaprendoz() {
    }

    public Logeventosaprendoz(Integer idLogEventos, Date hora, Date fecha, String accion, String tabla) {
        this.idLogEventos = idLogEventos;
        this.hora = hora;
        this.fecha = fecha;
        this.accion = accion;
        this.tabla = tabla;
    }

    public Logeventosaprendoz(Integer idLogEventos, Date hora, Date fecha, String accion, String tabla, Persona persona) {
        this.idLogEventos = idLogEventos;
        this.hora = hora;
        this.fecha = fecha;
        this.accion = accion;
        this.tabla = tabla;
        this.persona = persona;
    }

    public Integer getIdLogEventos() {
        return idLogEventos;
    }

    public void setIdLogEventos(Integer idLogEventos) {
        this.idLogEventos = idLogEventos;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }

    public String getTabla() {
        return tabla;
    }

    public void setTabla(String tabla) {
        this.tabla = tabla;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
