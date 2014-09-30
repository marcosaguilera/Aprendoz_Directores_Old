
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoActividad
 *  09/29/2014 19:07:35
 * 
 */
public class TipoActividad {

    private Integer idTipoActividad;
    private String tipoActividad;
    private Set<com.aprendoz_test.data.Actividad> actividads = new HashSet<com.aprendoz_test.data.Actividad>();

    public TipoActividad() {
    }

    public TipoActividad(Integer idTipoActividad, String tipoActividad) {
        this.idTipoActividad = idTipoActividad;
        this.tipoActividad = tipoActividad;
    }

    public TipoActividad(Integer idTipoActividad, String tipoActividad, Set<com.aprendoz_test.data.Actividad> actividads) {
        this.idTipoActividad = idTipoActividad;
        this.tipoActividad = tipoActividad;
        this.actividads = actividads;
    }

    public Integer getIdTipoActividad() {
        return idTipoActividad;
    }

    public void setIdTipoActividad(Integer idTipoActividad) {
        this.idTipoActividad = idTipoActividad;
    }

    public String getTipoActividad() {
        return tipoActividad;
    }

    public void setTipoActividad(String tipoActividad) {
        this.tipoActividad = tipoActividad;
    }

    public Set<com.aprendoz_test.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_test.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
