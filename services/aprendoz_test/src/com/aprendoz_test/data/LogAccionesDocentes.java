
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogAccionesDocentes
 *  09/10/2014 12:43:02
 * 
 */
public class LogAccionesDocentes {

    private Integer idLogAccionesDocentes;
    private Date fechaCreacion;
    private String tablaAfectada;
    private String usuario;
    private String accionRealizada;

    public LogAccionesDocentes() {
    }

    public LogAccionesDocentes(Integer idLogAccionesDocentes, Date fechaCreacion, String tablaAfectada, String usuario, String accionRealizada) {
        this.idLogAccionesDocentes = idLogAccionesDocentes;
        this.fechaCreacion = fechaCreacion;
        this.tablaAfectada = tablaAfectada;
        this.usuario = usuario;
        this.accionRealizada = accionRealizada;
    }

    public Integer getIdLogAccionesDocentes() {
        return idLogAccionesDocentes;
    }

    public void setIdLogAccionesDocentes(Integer idLogAccionesDocentes) {
        this.idLogAccionesDocentes = idLogAccionesDocentes;
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
