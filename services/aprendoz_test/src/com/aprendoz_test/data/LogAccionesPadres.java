
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogAccionesPadres
 *  09/29/2014 19:07:35
 * 
 */
public class LogAccionesPadres {

    private Integer idLogAccionesPadres;
    private Date fechaCreacion;
    private String tablaAfectada;
    private String usuario;
    private String accionRealizada;

    public LogAccionesPadres() {
    }

    public LogAccionesPadres(Integer idLogAccionesPadres, Date fechaCreacion, String tablaAfectada, String usuario, String accionRealizada) {
        this.idLogAccionesPadres = idLogAccionesPadres;
        this.fechaCreacion = fechaCreacion;
        this.tablaAfectada = tablaAfectada;
        this.usuario = usuario;
        this.accionRealizada = accionRealizada;
    }

    public Integer getIdLogAccionesPadres() {
        return idLogAccionesPadres;
    }

    public void setIdLogAccionesPadres(Integer idLogAccionesPadres) {
        this.idLogAccionesPadres = idLogAccionesPadres;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getTablaAfectada() {
        return tablaAfectada;
    }

    public void setTablaAfectada(String tablaAfectada) {
        this.tablaAfectada = tablaAfectada;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getAccionRealizada() {
        return accionRealizada;
    }

    public void setAccionRealizada(String accionRealizada) {
        this.accionRealizada = accionRealizada;
    }

}
