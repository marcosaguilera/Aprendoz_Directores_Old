
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.GestionEncuestasGrupoFamiliar
 *  09/11/2014 07:30:06
 * 
 */
public class GestionEncuestasGrupoFamiliar {

    private Integer idGestionEncuestaGrupoFamiliar;
    private Byte encuestaTerminada;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private GrupoFamiliar grupoFamiliar;

    public GestionEncuestasGrupoFamiliar() {
    }

    public GestionEncuestasGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar, Byte encuestaTerminada, Date fechaCreacion, Date fechaActualizacion) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
        this.encuestaTerminada = encuestaTerminada;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public GestionEncuestasGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar, Byte encuestaTerminada, Date fechaCreacion, Date fechaActualizacion, GrupoFamiliar grupoFamiliar) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
        this.encuestaTerminada = encuestaTerminada;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.grupoFamiliar = grupoFamiliar;
    }

    public Integer getIdGestionEncuestaGrupoFamiliar() {
        return idGestionEncuestaGrupoFamiliar;
    }

    public void setIdGestionEncuestaGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
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

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
