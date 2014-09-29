
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.DimensionCurricular
 *  09/11/2014 07:30:07
 * 
 */
public class DimensionCurricular {

    private Integer idDimension;
    private String dimensionCurricular;
    private Set<com.aprendoz_test.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_test.data.Aprendizaje>();
    private Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_test.data.AprendizajesAsignaturas>();

    public DimensionCurricular() {
    }

    public DimensionCurricular(Integer idDimension, String dimensionCurricular) {
        this.idDimension = idDimension;
        this.dimensionCurricular = dimensionCurricular;
    }

    public DimensionCurricular(Integer idDimension, String dimensionCurricular, Set<com.aprendoz_test.data.Aprendizaje> aprendizajes, Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.idDimension = idDimension;
        this.dimensionCurricular = dimensionCurricular;
        this.aprendizajes = aprendizajes;
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionCurricular() {
        return dimensionCurricular;
    }

    public void setDimensionCurricular(String dimensionCurricular) {
        this.dimensionCurricular = dimensionCurricular;
    }

    public Set<com.aprendoz_test.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

    public Set<com.aprendoz_test.data.AprendizajesAsignaturas> getAprendizajesAsignaturases() {
        return aprendizajesAsignaturases;
    }

    public void setAprendizajesAsignaturases(Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

}
