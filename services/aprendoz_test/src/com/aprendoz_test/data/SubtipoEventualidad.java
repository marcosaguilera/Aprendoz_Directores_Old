
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.SubtipoEventualidad
 *  06/13/2014 12:51:22
 * 
 */
public class SubtipoEventualidad {

    private Integer idSubtipoEventualidad;
    private TipoEventualidad tipoEventualidad;
    private String subtipoEventualidad;
    private Set<com.aprendoz_test.data.EventualidadPersonas> eventualidadPersonases = new HashSet<com.aprendoz_test.data.EventualidadPersonas>();

    public SubtipoEventualidad() {
    }

    public SubtipoEventualidad(Integer idSubtipoEventualidad, String subtipoEventualidad) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public SubtipoEventualidad(Integer idSubtipoEventualidad, TipoEventualidad tipoEventualidad, String subtipoEventualidad, Set<com.aprendoz_test.data.EventualidadPersonas> eventualidadPersonases) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
        this.tipoEventualidad = tipoEventualidad;
        this.subtipoEventualidad = subtipoEventualidad;
        this.eventualidadPersonases = eventualidadPersonases;
    }

    public Integer getIdSubtipoEventualidad() {
        return idSubtipoEventualidad;
    }

    public void setIdSubtipoEventualidad(Integer idSubtipoEventualidad) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
    }

    public TipoEventualidad getTipoEventualidad() {
        return tipoEventualidad;
    }

    public void setTipoEventualidad(TipoEventualidad tipoEventualidad) {
        this.tipoEventualidad = tipoEventualidad;
    }

    public String getSubtipoEventualidad() {
        return subtipoEventualidad;
    }

    public void setSubtipoEventualidad(String subtipoEventualidad) {
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public Set<com.aprendoz_test.data.EventualidadPersonas> getEventualidadPersonases() {
        return eventualidadPersonases;
    }

    public void setEventualidadPersonases(Set<com.aprendoz_test.data.EventualidadPersonas> eventualidadPersonases) {
        this.eventualidadPersonases = eventualidadPersonases;
    }

}
