
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Personal
 *  09/29/2014 19:07:34
 * 
 */
public class Personal {

    private String codigo;
    private String noDocumento;
    private String rh;
    private String eps;
    private String afp;
    private String arp;
    private String ccosto;

    public Personal() {
    }

    public Personal(String codigo, String noDocumento, String rh, String eps, String afp, String arp, String ccosto) {
        this.codigo = codigo;
        this.noDocumento = noDocumento;
        this.rh = rh;
        this.eps = eps;
        this.afp = afp;
        this.arp = arp;
        this.ccosto = ccosto;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNoDocumento() {
        return noDocumento;
    }

    public void setNoDocumento(String noDocumento) {
        this.noDocumento = noDocumento;
    }

    public String getRh() {
        return rh;
    }

    public void setRh(String rh) {
        this.rh = rh;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public String getAfp() {
        return afp;
    }

    public void setAfp(String afp) {
        this.afp = afp;
    }

    public String getArp() {
        return arp;
    }

    public void setArp(String arp) {
        this.arp = arp;
    }

    public String getCcosto() {
        return ccosto;
    }

    public void setCcosto(String ccosto) {
        this.ccosto = ccosto;
    }

}
