
package com.aprendoz_test.data;



/**
 *  aprendoz_test.CafeteriaPostres
 *  09/10/2014 12:59:40
 * 
 */
public class CafeteriaPostres {

    private Integer idPostres;
    private String postre;
    private String descripcion;
    private String imageLink;

    public CafeteriaPostres() {
    }

    public CafeteriaPostres(Integer idPostres, String postre, String descripcion, String imageLink) {
        this.idPostres = idPostres;
        this.postre = postre;
        this.descripcion = descripcion;
        this.imageLink = imageLink;
    }

    public Integer getIdPostres() {
        return idPostres;
    }

    public void setIdPostres(Integer idPostres) {
        this.idPostres = idPostres;
    }

    public String getPostre() {
        return postre;
    }

    public void setPostre(String postre) {
        this.postre = postre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

}
