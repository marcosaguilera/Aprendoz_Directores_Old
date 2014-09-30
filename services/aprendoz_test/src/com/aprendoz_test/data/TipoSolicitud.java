
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoSolicitud
 *  09/29/2014 19:07:35
 * 
 */
public class TipoSolicitud {

    private Integer idTipoSolicitud;
    private String solicitud;
    private Integer disponiblePadres;
    private Integer disponibleAdmon;
    private Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses = new HashSet<com.aprendoz_test.data.TransporteNovedades>();

    public TipoSolicitud() {
    }

    public TipoSolicitud(Integer idTipoSolicitud, String solicitud, Integer disponiblePadres, Integer disponibleAdmon) {
        this.idTipoSolicitud = idTipoSolicitud;
        this.solicitud = solicitud;
        this.disponiblePadres = disponiblePadres;
        this.disponibleAdmon = disponibleAdmon;
    }

    public TipoSolicitud(Integer idTipoSolicitud, String solicitud, Integer disponiblePadres, Integer disponibleAdmon, Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses) {
        this.idTipoSolicitud = idTipoSolicitud;
        this.solicitud = solicitud;
        this.disponiblePadres = disponiblePadres;
        this.disponibleAdmon = disponibleAdmon;
        this.transporteNovedadeses = transporteNovedadeses;
    }

    public Integer getIdTipoSolicitud() {
        return idTipoSolicitud;
    }

    public void setIdTipoSolicitud(Integer idTipoSolicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
    }

    public String getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(String solicitud) {
        this.solicitud = solicitud;
    }

    public Integer getDisponiblePadres() {
        return disponiblePadres;
    }

    public void setDisponiblePadres(Integer disponiblePadres) {
        this.disponiblePadres = disponiblePadres;
    }

    public Integer getDisponibleAdmon() {
        return disponibleAdmon;
    }

    public void setDisponibleAdmon(Integer disponibleAdmon) {
        this.disponibleAdmon = disponibleAdmon;
    }

    public Set<com.aprendoz_test.data.TransporteNovedades> getTransporteNovedadeses() {
        return transporteNovedadeses;
    }

    public void setTransporteNovedadeses(Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses) {
        this.transporteNovedadeses = transporteNovedadeses;
    }

}
