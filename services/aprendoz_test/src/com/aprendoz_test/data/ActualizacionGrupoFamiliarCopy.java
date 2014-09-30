
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.ActualizacionGrupoFamiliarCopy
 *  09/29/2014 19:07:34
 * 
 */
public class ActualizacionGrupoFamiliarCopy {

    private Integer idActualizacionGrupoFamiliar;
    private GrupoFamiliar grupoFamiliar;
    private Date fechaCreacion;
    private Date fecha;
    private Byte actualizado;

    public ActualizacionGrupoFamiliarCopy() {
    }

    public ActualizacionGrupoFamiliarCopy(Integer idActualizacionGrupoFamiliar, Date fechaCreacion, Date fecha, Byte actualizado) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public ActualizacionGrupoFamiliarCopy(Integer idActualizacionGrupoFamiliar, GrupoFamiliar grupoFamiliar, Date fechaCreacion, Date fecha, Byte actualizado) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public Integer getIdActualizacionGrupoFamiliar() {
        return idActualizacionGrupoFamiliar;
    }

    public void setIdActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
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
