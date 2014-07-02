
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoLugar
 *  06/13/2014 12:51:22
 * 
 */
public class TipoLugar {

    private Integer idLugar;
    private String lugar;
    private Set<com.aprendoz_test.data.Eventualidades> eventualidadeses = new HashSet<com.aprendoz_test.data.Eventualidades>();

    public TipoLugar() {
    }

    public TipoLugar(Integer idLugar, String lugar) {
        this.idLugar = idLugar;
        this.lugar = lugar;
    }

    public TipoLugar(Integer idLugar, String lugar, Set<com.aprendoz_test.data.Eventualidades> eventualidadeses) {
        this.idLugar = idLugar;
        this.lugar = lugar;
        this.eventualidadeses = eventualidadeses;
    }

    public Integer getIdLugar() {
        return idLugar;
    }

    public void setIdLugar(Integer idLugar) {
        this.idLugar = idLugar;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public Set<com.aprendoz_test.data.Eventualidades> getEventualidadeses() {
        return eventualidadeses;
    }

    public void setEventualidadeses(Set<com.aprendoz_test.data.Eventualidades> eventualidadeses) {
        this.eventualidadeses = eventualidadeses;
    }

}
