
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.SubtipoEventualidad
 *  09/29/2014 19:07:35
 * 
 */
public class SubtipoEventualidad {

    private Integer idSubtipoEventualidad;
    private TipoEventualidad tipoEventualidad;
    private String subtipoEventualidad;
    private Integer syIdSy;
    private Set<com.aprendoz_test.data.EventualidadPersonas> eventualidadPersonases = new HashSet<com.aprendoz_test.data.EventualidadPersonas>();

    public SubtipoEventualidad() {
    }

    public SubtipoEventualidad(Integer idSubtipoEventualidad, String subtipoEventualidad, Integer syIdSy) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
        this.subtipoEventualidad = subtipoEventualidad;
        this.syIdSy = syIdSy;
    }

    public SubtipoEventualidad(Integer idSubtipoEventualidad, TipoEventualidad tipoEventualidad, String subtipoEventualidad, Integer syIdSy, Set<com.aprendoz_test.data.EventualidadPersonas> eventualidadPersonases) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
        this.tipoEventualidad = tipoEventualidad;
        this.subtipoEventualidad = subtipoEventualidad;
        this.syIdSy = syIdSy;
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

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public Set<com.aprendoz_test.data.EventualidadPersonas> getEventualidadPersonases() {
        return eventualidadPersonases;
    }

    public void setEventualidadPersonases(Set<com.aprendoz_test.data.EventualidadPersonas> eventualidadPersonases) {
        this.eventualidadPersonases = eventualidadPersonases;
    }

}
