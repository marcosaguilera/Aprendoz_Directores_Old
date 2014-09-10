
package com.aprendoz_test.data;



/**
 *  aprendoz_test.CafeteriaSopas
 *  09/10/2014 12:43:02
 * 
 */
public class CafeteriaSopas {

    private Integer idSopas;
    private String sopas;
    private String descripcion;
    private String image;

    public CafeteriaSopas() {
    }

    public CafeteriaSopas(Integer idSopas, String sopas, String descripcion, String image) {
        this.idSopas = idSopas;
        this.sopas = sopas;
        this.descripcion = descripcion;
        this.image = image;
    }

    public Integer getIdSopas() {
        return idSopas;
    }

    public void setIdSopas(Integer idSopas) {
        this.idSopas = idSopas;
    }

    public String getSopas() {
        return sopas;
    }

    public void setSopas(String sopas) {
        this.sopas = sopas;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
