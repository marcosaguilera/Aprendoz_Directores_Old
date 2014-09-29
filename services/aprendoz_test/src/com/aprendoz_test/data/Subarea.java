
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Subarea
 *  09/11/2014 07:31:45
 * 
 */
public class Subarea {

    private Integer idSubarea;
    private String subarea;
    private Integer idSyIdIdSy;
    private Area area;
    private Set<com.aprendoz_test.data.Eje> ejes = new HashSet<com.aprendoz_test.data.Eje>();
    private Set<com.aprendoz_test.data.InscCoordinadoresSubarea> insccoordinadoressubareas = new HashSet<com.aprendoz_test.data.InscCoordinadoresSubarea>();

    public Subarea() {
    }

    public Subarea(Integer idSubarea, String subarea, Integer idSyIdIdSy) {
        this.idSubarea = idSubarea;
        this.subarea = subarea;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Subarea(Integer idSubarea, String subarea, Integer idSyIdIdSy, Area area, Set<com.aprendoz_test.data.Eje> ejes, Set<com.aprendoz_test.data.InscCoordinadoresSubarea> insccoordinadoressubareas) {
        this.idSubarea = idSubarea;
        this.subarea = subarea;
        this.idSyIdIdSy = idSyIdIdSy;
        this.area = area;
        this.ejes = ejes;
        this.insccoordinadoressubareas = insccoordinadoressubareas;
    }

    public Integer getIdSubarea() {
        return idSubarea;
    }

    public void setIdSubarea(Integer idSubarea) {
        this.idSubarea = idSubarea;
    }

    public String getSubarea() {
        return subarea;
    }

    public void setSubarea(String subarea) {
        this.subarea = subarea;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public Set<com.aprendoz_test.data.Eje> getEjes() {
        return ejes;
    }

    public void setEjes(Set<com.aprendoz_test.data.Eje> ejes) {
        this.ejes = ejes;
    }

    public Set<com.aprendoz_test.data.InscCoordinadoresSubarea> getInsccoordinadoressubareas() {
        return insccoordinadoressubareas;
    }

    public void setInsccoordinadoressubareas(Set<com.aprendoz_test.data.InscCoordinadoresSubarea> insccoordinadoressubareas) {
        this.insccoordinadoressubareas = insccoordinadoressubareas;
    }

}
