
package com.aprendoz_test.data;



/**
 *  aprendoz_test.CertificadosFirmas
 *  09/10/2014 12:43:02
 * 
 */
public class CertificadosFirmas {

    private Integer idCertificadosFirmas;
    private Integer syIdSy;
    private String firmaDirector;
    private String firmaSecretario;

    public CertificadosFirmas() {
    }

    public CertificadosFirmas(Integer idCertificadosFirmas, Integer syIdSy, String firmaDirector, String firmaSecretario) {
        this.idCertificadosFirmas = idCertificadosFirmas;
        this.syIdSy = syIdSy;
        this.firmaDirector = firmaDirector;
        this.firmaSecretario = firmaSecretario;
    }

    public Integer getIdCertificadosFirmas() {
        return idCertificadosFirmas;
    }

    public void setIdCertificadosFirmas(Integer idCertificadosFirmas) {
        this.idCertificadosFirmas = idCertificadosFirmas;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public String getFirmaDirector() {
        return firmaDirector;
    }

    public void setFirmaDirector(String firmaDirector) {
        this.firmaDirector = firmaDirector;
    }

    public String getFirmaSecretario() {
        return firmaSecretario;
    }

    public void setFirmaSecretario(String firmaSecretario) {
        this.firmaSecretario = firmaSecretario;
    }

}
