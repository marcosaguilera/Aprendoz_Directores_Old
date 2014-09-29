
package com.aprendoz_test.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  aprendoz_test.InscAlumCosto
 *  09/11/2014 07:30:07
 * 
 */
public class InscAlumCosto {

    private Integer idInscAlumCosto;
    private Boolean inscrito;
    private BigDecimal descuentoPorcentaje;
    private Double descuentoValor;
    private Double valorFinalDescuento;
    private Date fechaInicio;
    private Date fechaFin;
    private String observacion;
    private Sy sy;
    private Persona persona;
    private Costos costos;

    public InscAlumCosto() {
    }

    public InscAlumCosto(Integer idInscAlumCosto, Boolean inscrito, BigDecimal descuentoPorcentaje, Double descuentoValor, Double valorFinalDescuento, Date fechaInicio, Date fechaFin, String observacion) {
        this.idInscAlumCosto = idInscAlumCosto;
        this.inscrito = inscrito;
        this.descuentoPorcentaje = descuentoPorcentaje;
        this.descuentoValor = descuentoValor;
        this.valorFinalDescuento = valorFinalDescuento;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.observacion = observacion;
    }

    public InscAlumCosto(Integer idInscAlumCosto, Boolean inscrito, BigDecimal descuentoPorcentaje, Double descuentoValor, Double valorFinalDescuento, Date fechaInicio, Date fechaFin, String observacion, Sy sy, Persona persona, Costos costos) {
        this.idInscAlumCosto = idInscAlumCosto;
        this.inscrito = inscrito;
        this.descuentoPorcentaje = descuentoPorcentaje;
        this.descuentoValor = descuentoValor;
        this.valorFinalDescuento = valorFinalDescuento;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.observacion = observacion;
        this.sy = sy;
        this.persona = persona;
        this.costos = costos;
    }

    public Integer getIdInscAlumCosto() {
        return idInscAlumCosto;
    }

    public void setIdInscAlumCosto(Integer idInscAlumCosto) {
        this.idInscAlumCosto = idInscAlumCosto;
    }

    public Boolean getInscrito() {
        return inscrito;
    }

    public void setInscrito(Boolean inscrito) {
        this.inscrito = inscrito;
    }

    public BigDecimal getDescuentoPorcentaje() {
        return descuentoPorcentaje;
    }

    public void setDescuentoPorcentaje(BigDecimal descuentoPorcentaje) {
        this.descuentoPorcentaje = descuentoPorcentaje;
    }

    public Double getDescuentoValor() {
        return descuentoValor;
    }

    public void setDescuentoValor(Double descuentoValor) {
        this.descuentoValor = descuentoValor;
    }

    public Double getValorFinalDescuento() {
        return valorFinalDescuento;
    }

    public void setValorFinalDescuento(Double valorFinalDescuento) {
        this.valorFinalDescuento = valorFinalDescuento;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Costos getCostos() {
        return costos;
    }

    public void setCostos(Costos costos) {
        this.costos = costos;
    }

}
