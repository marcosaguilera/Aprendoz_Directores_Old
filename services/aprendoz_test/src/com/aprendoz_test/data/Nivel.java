
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Nivel
 *  09/11/2014 07:30:06
 * 
 */
public class Nivel {

    private Integer idNivel;
    private String nivel;
    private String levelName;
    private Set<com.aprendoz_test.data.Grado> grados = new HashSet<com.aprendoz_test.data.Grado>();
    private Set<com.aprendoz_test.data.SesionNivel> sesionNivels = new HashSet<com.aprendoz_test.data.SesionNivel>();
    private Set<com.aprendoz_test.data.InscDirectorNivel> inscDirectorNivels = new HashSet<com.aprendoz_test.data.InscDirectorNivel>();

    public Nivel() {
    }

    public Nivel(Integer idNivel, String nivel, String levelName) {
        this.idNivel = idNivel;
        this.nivel = nivel;
        this.levelName = levelName;
    }

    public Nivel(Integer idNivel, String nivel, String levelName, Set<com.aprendoz_test.data.Grado> grados, Set<com.aprendoz_test.data.SesionNivel> sesionNivels, Set<com.aprendoz_test.data.InscDirectorNivel> inscDirectorNivels) {
        this.idNivel = idNivel;
        this.nivel = nivel;
        this.levelName = levelName;
        this.grados = grados;
        this.sesionNivels = sesionNivels;
        this.inscDirectorNivels = inscDirectorNivels;
    }

    public Integer getIdNivel() {
        return idNivel;
    }

    public void setIdNivel(Integer idNivel) {
        this.idNivel = idNivel;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getLevelName() {
        return levelName;
    }

    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    public Set<com.aprendoz_test.data.Grado> getGrados() {
        return grados;
    }

    public void setGrados(Set<com.aprendoz_test.data.Grado> grados) {
        this.grados = grados;
    }

    public Set<com.aprendoz_test.data.SesionNivel> getSesionNivels() {
        return sesionNivels;
    }

    public void setSesionNivels(Set<com.aprendoz_test.data.SesionNivel> sesionNivels) {
        this.sesionNivels = sesionNivels;
    }

    public Set<com.aprendoz_test.data.InscDirectorNivel> getInscDirectorNivels() {
        return inscDirectorNivels;
    }

    public void setInscDirectorNivels(Set<com.aprendoz_test.data.InscDirectorNivel> inscDirectorNivels) {
        this.inscDirectorNivels = inscDirectorNivels;
    }

}
