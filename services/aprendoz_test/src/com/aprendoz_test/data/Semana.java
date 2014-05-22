
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Semana
 *  05/19/2014 15:25:27
 * 
 */
public class Semana {

    private Integer idSemana;
    private Sy sy;
    private TipoSemana tipoSemana;
    private Integer numeroSemana;

    public Semana() {
    }

    public Semana(Integer idSemana, Integer numeroSemana) {
        this.idSemana = idSemana;
        this.numeroSemana = numeroSemana;
    }

    public Semana(Integer idSemana, Sy sy, TipoSemana tipoSemana, Integer numeroSemana) {
        this.idSemana = idSemana;
        this.sy = sy;
        this.tipoSemana = tipoSemana;
        this.numeroSemana = numeroSemana;
    }

    public Integer getIdSemana() {
        return idSemana;
    }

    public void setIdSemana(Integer idSemana) {
        this.idSemana = idSemana;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public TipoSemana getTipoSemana() {
        return tipoSemana;
    }

    public void setTipoSemana(TipoSemana tipoSemana) {
        this.tipoSemana = tipoSemana;
    }

    public Integer getNumeroSemana() {
        return numeroSemana;
    }

    public void setNumeroSemana(Integer numeroSemana) {
        this.numeroSemana = numeroSemana;
    }

}
