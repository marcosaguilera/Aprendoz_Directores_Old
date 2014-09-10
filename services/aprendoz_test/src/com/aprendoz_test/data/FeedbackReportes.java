
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.FeedbackReportes
 *  09/10/2014 12:43:02
 * 
 */
public class FeedbackReportes {

    private Integer idfeedbackReportes;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private String usuario;
    private String titulo;
    private String comentario;
    private String tipoFeedback;

    public FeedbackReportes() {
    }

    public FeedbackReportes(Integer idfeedbackReportes, Date fechaCreacion, Date fechaActualizacion, String usuario, String titulo, String comentario, String tipoFeedback) {
        this.idfeedbackReportes = idfeedbackReportes;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.usuario = usuario;
        this.titulo = titulo;
        this.comentario = comentario;
        this.tipoFeedback = tipoFeedback;
    }

    public Integer getIdfeedbackReportes() {
        return idfeedbackReportes;
    }

    public void setIdfeedbackReportes(Integer idfeedbackReportes) {
        this.idfeedbackReportes = idfeedbackReportes;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public String getTipoFeedback() {
        return tipoFeedback;
    }

    public void setTipoFeedback(String tipoFeedback) {
        this.tipoFeedback = tipoFeedback;
    }

}
