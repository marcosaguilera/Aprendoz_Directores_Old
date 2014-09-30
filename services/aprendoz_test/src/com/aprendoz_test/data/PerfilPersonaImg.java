
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.PerfilPersonaImg
 *  09/29/2014 19:07:34
 * 
 */
public class PerfilPersonaImg {

    private Integer idPersonaImg;
    private Persona persona;
    private String imgName;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public PerfilPersonaImg() {
    }

    public PerfilPersonaImg(Integer idPersonaImg, String imgName, Date fechaCreacion, Date fechaActualizacion) {
        this.idPersonaImg = idPersonaImg;
        this.imgName = imgName;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public PerfilPersonaImg(Integer idPersonaImg, Persona persona, String imgName, Date fechaCreacion, Date fechaActualizacion) {
        this.idPersonaImg = idPersonaImg;
        this.persona = persona;
        this.imgName = imgName;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getIdPersonaImg() {
        return idPersonaImg;
    }

    public void setIdPersonaImg(Integer idPersonaImg) {
        this.idPersonaImg = idPersonaImg;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public String getImgName() {
        return imgName;
    }

    public void setImgName(String imgName) {
        this.imgName = imgName;
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
