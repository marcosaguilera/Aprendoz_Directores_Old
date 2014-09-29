
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Inteligencia
 *  09/11/2014 07:30:07
 * 
 */
public class Inteligencia {

    private Integer idInteligencia;
    private String inteligencia;
    private Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_test.data.AprendizajesAsignaturas>();
    private Set<com.aprendoz_test.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_test.data.Aprendizaje>();

    public Inteligencia() {
    }

    public Inteligencia(Integer idInteligencia, String inteligencia) {
        this.idInteligencia = idInteligencia;
        this.inteligencia = inteligencia;
    }

    public Inteligencia(Integer idInteligencia, String inteligencia, Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases, Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.idInteligencia = idInteligencia;
        this.inteligencia = inteligencia;
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
        this.aprendizajes = aprendizajes;
    }

    public Integer getIdInteligencia() {
        return idInteligencia;
    }

    public void setIdInteligencia(Integer idInteligencia) {
        this.idInteligencia = idInteligencia;
    }

    public String getInteligencia() {
        return inteligencia;
    }

    public void setInteligencia(String inteligencia) {
        this.inteligencia = inteligencia;
    }

    public Set<com.aprendoz_test.data.AprendizajesAsignaturas> getAprendizajesAsignaturases() {
        return aprendizajesAsignaturases;
    }

    public void setAprendizajesAsignaturases(Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

    public Set<com.aprendoz_test.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
