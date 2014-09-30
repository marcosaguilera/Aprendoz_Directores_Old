
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoRecurso
 *  09/29/2014 19:07:34
 * 
 */
public class TipoRecurso {

    private Integer idTipoRecurso;
    private String tipoRecurso;
    private Set<com.aprendoz_test.data.Recurso> recursos = new HashSet<com.aprendoz_test.data.Recurso>();

    public TipoRecurso() {
    }

    public TipoRecurso(Integer idTipoRecurso, String tipoRecurso) {
        this.idTipoRecurso = idTipoRecurso;
        this.tipoRecurso = tipoRecurso;
    }

    public TipoRecurso(Integer idTipoRecurso, String tipoRecurso, Set<com.aprendoz_test.data.Recurso> recursos) {
        this.idTipoRecurso = idTipoRecurso;
        this.tipoRecurso = tipoRecurso;
        this.recursos = recursos;
    }

    public Integer getIdTipoRecurso() {
        return idTipoRecurso;
    }

    public void setIdTipoRecurso(Integer idTipoRecurso) {
        this.idTipoRecurso = idTipoRecurso;
    }

    public String getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(String tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

    public Set<com.aprendoz_test.data.Recurso> getRecursos() {
        return recursos;
    }

    public void setRecursos(Set<com.aprendoz_test.data.Recurso> recursos) {
        this.recursos = recursos;
    }

}
