
package com.aprendoz_test.data.output;



/**
 * Generated for query "getTipoEventualidadByIdSubTipo" on 07/30/2014 13:28:39
 * 
 */
public class GetTipoEventualidadByIdSubTipoRtnType {

    private Integer id;
    private String subtipo;
    private Integer idTipo;
    private String eventualidad;

    public GetTipoEventualidadByIdSubTipoRtnType() {
    }

    public GetTipoEventualidadByIdSubTipoRtnType(Integer id, String subtipo, Integer idTipo, String eventualidad) {
        this.id = id;
        this.subtipo = subtipo;
        this.idTipo = idTipo;
        this.eventualidad = eventualidad;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSubtipo() {
        return subtipo;
    }

    public void setSubtipo(String subtipo) {
        this.subtipo = subtipo;
    }

    public Integer getIdTipo() {
        return idTipo;
    }

    public void setIdTipo(Integer idTipo) {
        this.idTipo = idTipo;
    }

    public String getEventualidad() {
        return eventualidad;
    }

    public void setEventualidad(String eventualidad) {
        this.eventualidad = eventualidad;
    }

}
