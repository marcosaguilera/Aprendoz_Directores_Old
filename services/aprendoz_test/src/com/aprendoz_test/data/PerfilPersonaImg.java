
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.PerfilPersonaImg
 *  09/11/2014 07:30:06
 * 
 */
public class PerfilPersonaImg {

    private Integer idPersonaImg;
    private String imgName;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Persona persona;

    public PerfilPersonaImg() {
    }

    public PerfilPersonaImg(Integer idPersonaImg, String imgName, Date fechaCreacion, Date fechaActualizacion) {
        this.idPersonaImg = idPersonaImg;
        this.imgName = imgName;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public PerfilPersonaImg(Integer idPersonaImg, String imgName, Date fechaCreacion, Date fechaActualizacion, Persona persona) {
        this.idPersonaImg = idPersonaImg;
        this.imgName = imgName;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.persona = persona;
    }

    public Integer getIdPersonaImg() {
        return idPersonaImg;
    }

    public void setIdPersonaImg(Integer idPersonaImg) {
        this.idPersonaImg = idPersonaImg;
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

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
