
package com.aprendoz_test.data.output;

import java.util.Date;


/**
 * Generated for query "SeachEventualidadHQL" on 08/08/2014 16:11:37
 * 
 */
public class SeachEventualidadHQLRtnType {

    private Integer id;
    private String codigo;
    private String complex;
    private Date fecha;
    private Date hora;
    private String estado;
    private String descripcion;
    private String lugar;
    private Integer ideventualidad;
    private String confidencial;
    private String subtipo;
    private String usuario;

    public SeachEventualidadHQLRtnType() {
    }

    public SeachEventualidadHQLRtnType(Integer id, String codigo, String complex, Date fecha, Date hora, String estado, String descripcion, String lugar, Integer ideventualidad, String confidencial, String subtipo, String usuario) {
        this.id = id;
        this.codigo = codigo;
        this.complex = complex;
        this.fecha = fecha;
        this.hora = hora;
        this.estado = estado;
        this.descripcion = descripcion;
        this.lugar = lugar;
        this.ideventualidad = ideventualidad;
        this.confidencial = confidencial;
        this.subtipo = subtipo;
        this.usuario = usuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getComplex() {
        return complex;
    }

    public void setComplex(String complex) {
        this.complex = complex;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public Integer getIdeventualidad() {
        return ideventualidad;
    }

    public void setIdeventualidad(Integer ideventualidad) {
        this.ideventualidad = ideventualidad;
    }

    public String getConfidencial() {
        return confidencial;
    }

    public void setConfidencial(String confidencial) {
        this.confidencial = confidencial;
    }

    public String getSubtipo() {
        return subtipo;
    }

    public void setSubtipo(String subtipo) {
        this.subtipo = subtipo;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

}
