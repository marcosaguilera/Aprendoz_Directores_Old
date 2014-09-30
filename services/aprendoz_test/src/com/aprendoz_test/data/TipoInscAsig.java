
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoInscAsig
 *  09/29/2014 19:07:35
 * 
 */
public class TipoInscAsig {

    private Integer idTipoInscAsig;
    private String tipo;
    private Set<com.aprendoz_test.data.AsignaturaCopy> asignaturaCopies = new HashSet<com.aprendoz_test.data.AsignaturaCopy>();
    private Set<com.aprendoz_test.data.Asignatura> asignaturas = new HashSet<com.aprendoz_test.data.Asignatura>();

    public TipoInscAsig() {
    }

    public TipoInscAsig(Integer idTipoInscAsig, String tipo) {
        this.idTipoInscAsig = idTipoInscAsig;
        this.tipo = tipo;
    }

    public TipoInscAsig(Integer idTipoInscAsig, String tipo, Set<com.aprendoz_test.data.AsignaturaCopy> asignaturaCopies, Set<com.aprendoz_test.data.Asignatura> asignaturas) {
        this.idTipoInscAsig = idTipoInscAsig;
        this.tipo = tipo;
        this.asignaturaCopies = asignaturaCopies;
        this.asignaturas = asignaturas;
    }

    public Integer getIdTipoInscAsig() {
        return idTipoInscAsig;
    }

    public void setIdTipoInscAsig(Integer idTipoInscAsig) {
        this.idTipoInscAsig = idTipoInscAsig;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Set<com.aprendoz_test.data.AsignaturaCopy> getAsignaturaCopies() {
        return asignaturaCopies;
    }

    public void setAsignaturaCopies(Set<com.aprendoz_test.data.AsignaturaCopy> asignaturaCopies) {
        this.asignaturaCopies = asignaturaCopies;
    }

    public Set<com.aprendoz_test.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_test.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

}
