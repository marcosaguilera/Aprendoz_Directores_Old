
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Costos
 *  09/11/2014 07:30:06
 * 
 */
public class Costos {

    private Integer idCosto;
    private String codigo;
    private String nombreProducto;
    private String descripcion;
    private Double valor;
    private Boolean nuevo;
    private Boolean obligatorio;
    private Boolean positivo;
    private Boolean anual;
    private Integer tipoCosto;
    private Grado grado;
    private Sy sy;
    private Set<com.aprendoz_test.data.InscAlumCosto> inscAlumCostos = new HashSet<com.aprendoz_test.data.InscAlumCosto>();
    private Set<com.aprendoz_test.data.Educom> educoms = new HashSet<com.aprendoz_test.data.Educom>();

    public Costos() {
    }

    public Costos(Integer idCosto, String codigo, String nombreProducto, String descripcion, Double valor, Boolean nuevo, Boolean obligatorio, Boolean positivo, Boolean anual, Integer tipoCosto) {
        this.idCosto = idCosto;
        this.codigo = codigo;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.valor = valor;
        this.nuevo = nuevo;
        this.obligatorio = obligatorio;
        this.positivo = positivo;
        this.anual = anual;
        this.tipoCosto = tipoCosto;
    }

    public Costos(Integer idCosto, String codigo, String nombreProducto, String descripcion, Double valor, Boolean nuevo, Boolean obligatorio, Boolean positivo, Boolean anual, Integer tipoCosto, Grado grado, Sy sy, Set<com.aprendoz_test.data.InscAlumCosto> inscAlumCostos, Set<com.aprendoz_test.data.Educom> educoms) {
        this.idCosto = idCosto;
        this.codigo = codigo;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.valor = valor;
        this.nuevo = nuevo;
        this.obligatorio = obligatorio;
        this.positivo = positivo;
        this.anual = anual;
        this.tipoCosto = tipoCosto;
        this.grado = grado;
        this.sy = sy;
        this.inscAlumCostos = inscAlumCostos;
        this.educoms = educoms;
    }

    public Integer getIdCosto() {
        return idCosto;
    }

    public void setIdCosto(Integer idCosto) {
        this.idCosto = idCosto;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Boolean getNuevo() {
        return nuevo;
    }

    public void setNuevo(Boolean nuevo) {
        this.nuevo = nuevo;
    }

    public Boolean getObligatorio() {
        return obligatorio;
    }

    public void setObligatorio(Boolean obligatorio) {
        this.obligatorio = obligatorio;
    }

    public Boolean getPositivo() {
        return positivo;
    }

    public void setPositivo(Boolean positivo) {
        this.positivo = positivo;
    }

    public Boolean getAnual() {
        return anual;
    }

    public void setAnual(Boolean anual) {
        this.anual = anual;
    }

    public Integer getTipoCosto() {
        return tipoCosto;
    }

    public void setTipoCosto(Integer tipoCosto) {
        this.tipoCosto = tipoCosto;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Set<com.aprendoz_test.data.InscAlumCosto> getInscAlumCostos() {
        return inscAlumCostos;
    }

    public void setInscAlumCostos(Set<com.aprendoz_test.data.InscAlumCosto> inscAlumCostos) {
        this.inscAlumCostos = inscAlumCostos;
    }

    public Set<com.aprendoz_test.data.Educom> getEducoms() {
        return educoms;
    }

    public void setEducoms(Set<com.aprendoz_test.data.Educom> educoms) {
        this.educoms = educoms;
    }

}
