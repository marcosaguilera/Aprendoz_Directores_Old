
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.NivelEsperado
 *  09/10/2014 12:59:40
 * 
 */
public class NivelEsperado {

    private Integer idNivelEsperado;
    private String nivelEsperado;
    private Set<com.aprendoz_test.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_test.data.Aprendizaje>();
    private Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_test.data.AprendizajesAsignaturas>();

    public NivelEsperado() {
    }

    public NivelEsperado(Integer idNivelEsperado, String nivelEsperado) {
        this.idNivelEsperado = idNivelEsperado;
        this.nivelEsperado = nivelEsperado;
    }

    public NivelEsperado(Integer idNivelEsperado, String nivelEsperado, Set<com.aprendoz_test.data.Aprendizaje> aprendizajes, Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.idNivelEsperado = idNivelEsperado;
        this.nivelEsperado = nivelEsperado;
        this.aprendizajes = aprendizajes;
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

    public Integer getIdNivelEsperado() {
        return idNivelEsperado;
    }

    public void setIdNivelEsperado(Integer idNivelEsperado) {
        this.idNivelEsperado = idNivelEsperado;
    }

    public String getNivelEsperado() {
        return nivelEsperado;
    }

    public void setNivelEsperado(String nivelEsperado) {
        this.nivelEsperado = nivelEsperado;
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
