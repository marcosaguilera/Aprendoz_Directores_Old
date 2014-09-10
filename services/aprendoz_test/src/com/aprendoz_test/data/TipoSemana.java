
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoSemana
 *  09/10/2014 12:59:41
 * 
 */
public class TipoSemana {

    private Integer idTipoSemana;
    private String tipoSemana;
    private String descripcion;
    private Set<com.aprendoz_test.data.Horario> horarios = new HashSet<com.aprendoz_test.data.Horario>();
    private Set<com.aprendoz_test.data.Semana> semanas = new HashSet<com.aprendoz_test.data.Semana>();

    public TipoSemana() {
    }

    public TipoSemana(Integer idTipoSemana, String tipoSemana, String descripcion) {
        this.idTipoSemana = idTipoSemana;
        this.tipoSemana = tipoSemana;
        this.descripcion = descripcion;
    }

    public TipoSemana(Integer idTipoSemana, String tipoSemana, String descripcion, Set<com.aprendoz_test.data.Horario> horarios, Set<com.aprendoz_test.data.Semana> semanas) {
        this.idTipoSemana = idTipoSemana;
        this.tipoSemana = tipoSemana;
        this.descripcion = descripcion;
        this.horarios = horarios;
        this.semanas = semanas;
    }

    public Integer getIdTipoSemana() {
        return idTipoSemana;
    }

    public void setIdTipoSemana(Integer idTipoSemana) {
        this.idTipoSemana = idTipoSemana;
    }

    public String getTipoSemana() {
        return tipoSemana;
    }

    public void setTipoSemana(String tipoSemana) {
        this.tipoSemana = tipoSemana;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_test.data.Horario> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<com.aprendoz_test.data.Horario> horarios) {
        this.horarios = horarios;
    }

    public Set<com.aprendoz_test.data.Semana> getSemanas() {
        return semanas;
    }

    public void setSemanas(Set<com.aprendoz_test.data.Semana> semanas) {
        this.semanas = semanas;
    }

}
