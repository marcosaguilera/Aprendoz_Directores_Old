
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Anticipos
 *  09/10/2014 12:43:01
 * 
 */
public class Anticipos {

    private Integer idAnticipos;
    private String codigo;

    public Anticipos() {
    }

    public Anticipos(Integer idAnticipos, String codigo) {
        this.idAnticipos = idAnticipos;
        this.codigo = codigo;
    }

    public Integer getIdAnticipos() {
        return idAnticipos;
    }

    public void setIdAnticipos(Integer idAnticipos) {
        this.idAnticipos = idAnticipos;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

}
