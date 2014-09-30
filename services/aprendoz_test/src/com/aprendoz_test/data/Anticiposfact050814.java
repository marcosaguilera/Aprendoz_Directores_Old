
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Anticiposfact050814
 *  09/29/2014 19:07:34
 * 
 */
public class Anticiposfact050814 {

    private String codigo;
    private Double pension;
    private Double alimentacion;
    private Double transporte;
    private Double totalAnticipos;

    public Anticiposfact050814() {
    }

    public Anticiposfact050814(String codigo, Double pension, Double alimentacion, Double transporte, Double totalAnticipos) {
        this.codigo = codigo;
        this.pension = pension;
        this.alimentacion = alimentacion;
        this.transporte = transporte;
        this.totalAnticipos = totalAnticipos;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Double getPension() {
        return pension;
    }

    public void setPension(Double pension) {
        this.pension = pension;
    }

    public Double getAlimentacion() {
        return alimentacion;
    }

    public void setAlimentacion(Double alimentacion) {
        this.alimentacion = alimentacion;
    }

    public Double getTransporte() {
        return transporte;
    }

    public void setTransporte(Double transporte) {
        this.transporte = transporte;
    }

    public Double getTotalAnticipos() {
        return totalAnticipos;
    }

    public void setTotalAnticipos(Double totalAnticipos) {
        this.totalAnticipos = totalAnticipos;
    }

}
