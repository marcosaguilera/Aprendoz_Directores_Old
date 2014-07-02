
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.GestionEncuestasGrupoFamiliar
 *  06/13/2014 12:51:22
 * 
 */
public class GestionEncuestasGrupoFamiliar {

    private Integer idGestionEncuestaGrupoFamiliar;
    private GrupoFamiliar grupoFamiliar;
    private Byte encuestaTerminada;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public GestionEncuestasGrupoFamiliar() {
    }

    public GestionEncuestasGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar, Byte encuestaTerminada, Date fechaCreacion, Date fechaActualizacion) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
        this.encuestaTerminada = encuestaTerminada;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public GestionEncuestasGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar, GrupoFamiliar grupoFamiliar, Byte encuestaTerminada, Date fechaCreacion, Date fechaActualizacion) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.encuestaTerminada = encuestaTerminada;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getIdGestionEncuestaGrupoFamiliar() {
        return idGestionEncuestaGrupoFamiliar;
    }

    public void setIdGestionEncuestaGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public Byte getEncuestaTerminada() {
        return encuestaTerminada;
    }

    public void setEncuestaTerminada(Byte encuestaTerminada) {
        this.encuestaTerminada = encuestaTerminada;
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

}
