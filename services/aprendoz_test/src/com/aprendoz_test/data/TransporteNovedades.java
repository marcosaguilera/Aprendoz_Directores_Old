
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.TransporteNovedades
 *  09/29/2014 19:07:35
 * 
 */
public class TransporteNovedades {

    private Integer idNovedades;
    private TransporteRutas transporteRutas;
    private Persona persona;
    private TipoSolicitud tipoSolicitud;
    private Date fechaSolicitudInicio;
    private Date fechaSolicitudFin;
    private Date horaProgramada;
    private Integer numeroPuerta;
    private Boolean aprobacionDirNivel;
    private String comentarioDirNivel;
    private Boolean aprobacionCoordinador;
    private String comentarioCoordinador;
    private Boolean aprobacionTransporte;
    private String comentarioTransporte;
    private Boolean aprobacionEnfermeria;
    private String comentarioEnfermeria;
    private String observaciones;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public TransporteNovedades() {
    }

    public TransporteNovedades(Integer idNovedades, Date fechaSolicitudInicio, Date fechaSolicitudFin, Date horaProgramada, Integer numeroPuerta, Boolean aprobacionDirNivel, String comentarioDirNivel, Boolean aprobacionCoordinador, String comentarioCoordinador, Boolean aprobacionTransporte, String comentarioTransporte, Boolean aprobacionEnfermeria, String comentarioEnfermeria, String observaciones, Date fechaCreacion, Date fechaActualizacion) {
        this.idNovedades = idNovedades;
        this.fechaSolicitudInicio = fechaSolicitudInicio;
        this.fechaSolicitudFin = fechaSolicitudFin;
        this.horaProgramada = horaProgramada;
        this.numeroPuerta = numeroPuerta;
        this.aprobacionDirNivel = aprobacionDirNivel;
        this.comentarioDirNivel = comentarioDirNivel;
        this.aprobacionCoordinador = aprobacionCoordinador;
        this.comentarioCoordinador = comentarioCoordinador;
        this.aprobacionTransporte = aprobacionTransporte;
        this.comentarioTransporte = comentarioTransporte;
        this.aprobacionEnfermeria = aprobacionEnfermeria;
        this.comentarioEnfermeria = comentarioEnfermeria;
        this.observaciones = observaciones;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public TransporteNovedades(Integer idNovedades, TransporteRutas transporteRutas, Persona persona, TipoSolicitud tipoSolicitud, Date fechaSolicitudInicio, Date fechaSolicitudFin, Date horaProgramada, Integer numeroPuerta, Boolean aprobacionDirNivel, String comentarioDirNivel, Boolean aprobacionCoordinador, String comentarioCoordinador, Boolean aprobacionTransporte, String comentarioTransporte, Boolean aprobacionEnfermeria, String comentarioEnfermeria, String observaciones, Date fechaCreacion, Date fechaActualizacion) {
        this.idNovedades = idNovedades;
        this.transporteRutas = transporteRutas;
        this.persona = persona;
        this.tipoSolicitud = tipoSolicitud;
        this.fechaSolicitudInicio = fechaSolicitudInicio;
        this.fechaSolicitudFin = fechaSolicitudFin;
        this.horaProgramada = horaProgramada;
        this.numeroPuerta = numeroPuerta;
        this.aprobacionDirNivel = aprobacionDirNivel;
        this.comentarioDirNivel = comentarioDirNivel;
        this.aprobacionCoordinador = aprobacionCoordinador;
        this.comentarioCoordinador = comentarioCoordinador;
        this.aprobacionTransporte = aprobacionTransporte;
        this.comentarioTransporte = comentarioTransporte;
        this.aprobacionEnfermeria = aprobacionEnfermeria;
        this.comentarioEnfermeria = comentarioEnfermeria;
        this.observaciones = observaciones;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getIdNovedades() {
        return idNovedades;
    }

    public void setIdNovedades(Integer idNovedades) {
        this.idNovedades = idNovedades;
    }

    public TransporteRutas getTransporteRutas() {
        return transporteRutas;
    }

    public void setTransporteRutas(TransporteRutas transporteRutas) {
        this.transporteRutas = transporteRutas;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public TipoSolicitud getTipoSolicitud() {
        return tipoSolicitud;
    }

    public void setTipoSolicitud(TipoSolicitud tipoSolicitud) {
        this.tipoSolicitud = tipoSolicitud;
    }

    public Date getFechaSolicitudInicio() {
        return fechaSolicitudInicio;
    }

    public void setFechaSolicitudInicio(Date fechaSolicitudInicio) {
        this.fechaSolicitudInicio = fechaSolicitudInicio;
    }

    public Date getFechaSolicitudFin() {
        return fechaSolicitudFin;
    }

    public void setFechaSolicitudFin(Date fechaSolicitudFin) {
        this.fechaSolicitudFin = fechaSolicitudFin;
    }

    public Date getHoraProgramada() {
        return horaProgramada;
    }

    public void setHoraProgramada(Date horaProgramada) {
        this.horaProgramada = horaProgramada;
    }

    public Integer getNumeroPuerta() {
        return numeroPuerta;
    }

    public void setNumeroPuerta(Integer numeroPuerta) {
        this.numeroPuerta = numeroPuerta;
    }

    public Boolean getAprobacionDirNivel() {
        return aprobacionDirNivel;
    }

    public void setAprobacionDirNivel(Boolean aprobacionDirNivel) {
        this.aprobacionDirNivel = aprobacionDirNivel;
    }

    public String getComentarioDirNivel() {
        return comentarioDirNivel;
    }

    public void setComentarioDirNivel(String comentarioDirNivel) {
        this.comentarioDirNivel = comentarioDirNivel;
    }

    public Boolean getAprobacionCoordinador() {
        return aprobacionCoordinador;
    }

    public void setAprobacionCoordinador(Boolean aprobacionCoordinador) {
        this.aprobacionCoordinador = aprobacionCoordinador;
    }

    public String getComentarioCoordinador() {
        return comentarioCoordinador;
    }

    public void setComentarioCoordinador(String comentarioCoordinador) {
        this.comentarioCoordinador = comentarioCoordinador;
    }

    public Boolean getAprobacionTransporte() {
        return aprobacionTransporte;
    }

    public void setAprobacionTransporte(Boolean aprobacionTransporte) {
        this.aprobacionTransporte = aprobacionTransporte;
    }

    public String getComentarioTransporte() {
        return comentarioTransporte;
    }

    public void setComentarioTransporte(String comentarioTransporte) {
        this.comentarioTransporte = comentarioTransporte;
    }

    public Boolean getAprobacionEnfermeria() {
        return aprobacionEnfermeria;
    }

    public void setAprobacionEnfermeria(Boolean aprobacionEnfermeria) {
        this.aprobacionEnfermeria = aprobacionEnfermeria;
    }

    public String getComentarioEnfermeria() {
        return comentarioEnfermeria;
    }

    public void setComentarioEnfermeria(String comentarioEnfermeria) {
        this.comentarioEnfermeria = comentarioEnfermeria;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
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

}
