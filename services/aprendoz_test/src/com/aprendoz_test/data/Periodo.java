
package com.aprendoz_test.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Periodo
 *  09/11/2014 07:30:07
 * 
 */
public class Periodo {

    private Integer idPeriodo;
    private String periodo;
    private Date fechaInicio;
    private Date fechaFin;
    private TipoPeriodo tipoPeriodo;
    private Sy sy;
    private Set<com.aprendoz_test.data.InscAlumAsigCopy> inscAlumAsigCopies = new HashSet<com.aprendoz_test.data.InscAlumAsigCopy>();
    private Set<com.aprendoz_test.data.InscAlumAsigCopy2> inscAlumAsigCopy2s = new HashSet<com.aprendoz_test.data.InscAlumAsigCopy2>();
    private Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_test.data.InscCursoAsig>();
    private Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_test.data.InscAlumAsig>();
    private Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies = new HashSet<com.aprendoz_test.data.InscCursoAsigCopy>();
    private Set<com.aprendoz_test.data.InscAlumAsigCopy3> inscAlumAsigCopy3s = new HashSet<com.aprendoz_test.data.InscAlumAsigCopy3>();

    public Periodo() {
    }

    public Periodo(Integer idPeriodo, String periodo, Date fechaInicio, Date fechaFin) {
        this.idPeriodo = idPeriodo;
        this.periodo = periodo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    public Periodo(Integer idPeriodo, String periodo, Date fechaInicio, Date fechaFin, TipoPeriodo tipoPeriodo, Sy sy, Set<com.aprendoz_test.data.InscAlumAsigCopy> inscAlumAsigCopies, Set<com.aprendoz_test.data.InscAlumAsigCopy2> inscAlumAsigCopy2s, Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs, Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs, Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies, Set<com.aprendoz_test.data.InscAlumAsigCopy3> inscAlumAsigCopy3s) {
        this.idPeriodo = idPeriodo;
        this.periodo = periodo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.tipoPeriodo = tipoPeriodo;
        this.sy = sy;
        this.inscAlumAsigCopies = inscAlumAsigCopies;
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
        this.inscCursoAsigs = inscCursoAsigs;
        this.inscAlumAsigs = inscAlumAsigs;
        this.inscCursoAsigCopies = inscCursoAsigCopies;
        this.inscAlumAsigCopy3s = inscAlumAsigCopy3s;
    }

    public Integer getIdPeriodo() {
        return idPeriodo;
    }

    public void setIdPeriodo(Integer idPeriodo) {
        this.idPeriodo = idPeriodo;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
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

    public TipoPeriodo getTipoPeriodo() {
        return tipoPeriodo;
    }

    public void setTipoPeriodo(TipoPeriodo tipoPeriodo) {
        this.tipoPeriodo = tipoPeriodo;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Set<com.aprendoz_test.data.InscAlumAsigCopy> getInscAlumAsigCopies() {
        return inscAlumAsigCopies;
    }

    public void setInscAlumAsigCopies(Set<com.aprendoz_test.data.InscAlumAsigCopy> inscAlumAsigCopies) {
        this.inscAlumAsigCopies = inscAlumAsigCopies;
    }

    public Set<com.aprendoz_test.data.InscAlumAsigCopy2> getInscAlumAsigCopy2s() {
        return inscAlumAsigCopy2s;
    }

    public void setInscAlumAsigCopy2s(Set<com.aprendoz_test.data.InscAlumAsigCopy2> inscAlumAsigCopy2s) {
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
    }

    public Set<com.aprendoz_test.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_test.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

    public Set<com.aprendoz_test.data.InscCursoAsigCopy> getInscCursoAsigCopies() {
        return inscCursoAsigCopies;
    }

    public void setInscCursoAsigCopies(Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies) {
        this.inscCursoAsigCopies = inscCursoAsigCopies;
    }

    public Set<com.aprendoz_test.data.InscAlumAsigCopy3> getInscAlumAsigCopy3s() {
        return inscAlumAsigCopy3s;
    }

    public void setInscAlumAsigCopy3s(Set<com.aprendoz_test.data.InscAlumAsigCopy3> inscAlumAsigCopy3s) {
        this.inscAlumAsigCopy3s = inscAlumAsigCopy3s;
    }

}
