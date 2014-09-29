
package com.aprendoz_test.data.output;

import java.util.Date;


/**
 * Generated for query "getSyByCurDateFull" on 09/11/2014 08:33:54
 * 
 */
public class GetSyByCurDateFullRtnType {

    private Integer idsy;
    private String sy;
    private Date c2;
    private Date c3;
    private Integer idperiodo;

    public GetSyByCurDateFullRtnType() {
    }

    public GetSyByCurDateFullRtnType(Integer idsy, String sy, Date c2, Date c3, Integer idperiodo) {
        this.idsy = idsy;
        this.sy = sy;
        this.c2 = c2;
        this.c3 = c3;
        this.idperiodo = idperiodo;
    }

    public Integer getIdsy() {
        return idsy;
    }

    public void setIdsy(Integer idsy) {
        this.idsy = idsy;
    }

    public String getSy() {
        return sy;
    }

    public void setSy(String sy) {
        this.sy = sy;
    }

    public Date getC2() {
        return c2;
    }

    public void setC2(Date c2) {
        this.c2 = c2;
    }

    public Date getC3() {
        return c3;
    }

    public void setC3(Date c3) {
        this.c3 = c3;
    }

    public Integer getIdperiodo() {
        return idperiodo;
    }

    public void setIdperiodo(Integer idperiodo) {
        this.idperiodo = idperiodo;
    }

}
