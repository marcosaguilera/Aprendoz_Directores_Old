
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Salon
 *  09/11/2014 07:30:06
 * 
 */
public class Salon {

    private Integer idSalon;
    private String numeroSalon;

    public Salon() {
    }

    public Salon(Integer idSalon, String numeroSalon) {
        this.idSalon = idSalon;
        this.numeroSalon = numeroSalon;
    }

    public Integer getIdSalon() {
        return idSalon;
    }

    public void setIdSalon(Integer idSalon) {
        this.idSalon = idSalon;
    }

    public String getNumeroSalon() {
        return numeroSalon;
    }

    public void setNumeroSalon(String numeroSalon) {
        this.numeroSalon = numeroSalon;
    }

}
