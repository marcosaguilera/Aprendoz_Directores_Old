
package com.aprendoz_test.data;



/**
 *  aprendoz_test.TipoCosto
 *  09/29/2014 19:07:34
 * 
 */
public class TipoCosto {

    private Integer idTipoCosto;
    private String tipoCosto;

    public TipoCosto() {
    }

    public TipoCosto(Integer idTipoCosto, String tipoCosto) {
        this.idTipoCosto = idTipoCosto;
        this.tipoCosto = tipoCosto;
    }

    public Integer getIdTipoCosto() {
        return idTipoCosto;
    }

    public void setIdTipoCosto(Integer idTipoCosto) {
        this.idTipoCosto = idTipoCosto;
    }

    public String getTipoCosto() {
        return tipoCosto;
    }

    public void setTipoCosto(String tipoCosto) {
        this.tipoCosto = tipoCosto;
    }

}
