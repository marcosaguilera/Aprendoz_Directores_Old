
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Meses
 *  09/29/2014 19:07:35
 * 
 */
public class Meses {

    private Integer id;
    private String mes;
    private String mesnumero;

    public Meses() {
    }

    public Meses(Integer id, String mes, String mesnumero) {
        this.id = id;
        this.mes = mes;
        this.mesnumero = mesnumero;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public String getMesnumero() {
        return mesnumero;
    }

    public void setMesnumero(String mesnumero) {
        this.mesnumero = mesnumero;
    }

}
