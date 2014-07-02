
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoEventualidad
 *  06/13/2014 12:51:22
 * 
 */
public class TipoEventualidad {

    private Integer idTipoEventualidad;
    private String tipoEventualidad;
    private Set<com.aprendoz_test.data.SubtipoEventualidad> subtipoEventualidads = new HashSet<com.aprendoz_test.data.SubtipoEventualidad>();

    public TipoEventualidad() {
    }

    public TipoEventualidad(Integer idTipoEventualidad, String tipoEventualidad) {
        this.idTipoEventualidad = idTipoEventualidad;
        this.tipoEventualidad = tipoEventualidad;
    }

    public TipoEventualidad(Integer idTipoEventualidad, String tipoEventualidad, Set<com.aprendoz_test.data.SubtipoEventualidad> subtipoEventualidads) {
        this.idTipoEventualidad = idTipoEventualidad;
        this.tipoEventualidad = tipoEventualidad;
        this.subtipoEventualidads = subtipoEventualidads;
    }

    public Integer getIdTipoEventualidad() {
        return idTipoEventualidad;
    }

    public void setIdTipoEventualidad(Integer idTipoEventualidad) {
        this.idTipoEventualidad = idTipoEventualidad;
    }

    public String getTipoEventualidad() {
        return tipoEventualidad;
    }

    public void setTipoEventualidad(String tipoEventualidad) {
        this.tipoEventualidad = tipoEventualidad;
    }

    public Set<com.aprendoz_test.data.SubtipoEventualidad> getSubtipoEventualidads() {
        return subtipoEventualidads;
    }

    public void setSubtipoEventualidads(Set<com.aprendoz_test.data.SubtipoEventualidad> subtipoEventualidads) {
        this.subtipoEventualidads = subtipoEventualidads;
    }

}
