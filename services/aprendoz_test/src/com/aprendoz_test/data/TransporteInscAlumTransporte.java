
package com.aprendoz_test.data;



/**
 *  aprendoz_test.TransporteInscAlumTransporte
 *  09/10/2014 12:59:41
 * 
 */
public class TransporteInscAlumTransporte {

    private Integer idInscAlumTransporte;
    private com.aprendoz_test.data.TransporteRutas transporteRutasByDomingoRuta;
    private com.aprendoz_test.data.TransporteRutas transporteRutasByMiercolesRuta;
    private com.aprendoz_test.data.TransporteRutas transporteRutasByViernesRuta;
    private Persona persona;
    private com.aprendoz_test.data.TransporteRutas transporteRutasByMartesRuta;
    private com.aprendoz_test.data.TransporteRutas transporteRutasByJuevesRuta;
    private com.aprendoz_test.data.TransporteRutas transporteRutasByLunesRuta;
    private com.aprendoz_test.data.TransporteRutas transporteRutasBySabadoRuta;
    private String amPm;

    public TransporteInscAlumTransporte() {
    }

    public TransporteInscAlumTransporte(Integer idInscAlumTransporte, String amPm) {
        this.idInscAlumTransporte = idInscAlumTransporte;
        this.amPm = amPm;
    }

    public TransporteInscAlumTransporte(Integer idInscAlumTransporte, com.aprendoz_test.data.TransporteRutas transporteRutasByDomingoRuta, com.aprendoz_test.data.TransporteRutas transporteRutasByMiercolesRuta, com.aprendoz_test.data.TransporteRutas transporteRutasByViernesRuta, Persona persona, com.aprendoz_test.data.TransporteRutas transporteRutasByMartesRuta, com.aprendoz_test.data.TransporteRutas transporteRutasByJuevesRuta, com.aprendoz_test.data.TransporteRutas transporteRutasByLunesRuta, com.aprendoz_test.data.TransporteRutas transporteRutasBySabadoRuta, String amPm) {
        this.idInscAlumTransporte = idInscAlumTransporte;
        this.transporteRutasByDomingoRuta = transporteRutasByDomingoRuta;
        this.transporteRutasByMiercolesRuta = transporteRutasByMiercolesRuta;
        this.transporteRutasByViernesRuta = transporteRutasByViernesRuta;
        this.persona = persona;
        this.transporteRutasByMartesRuta = transporteRutasByMartesRuta;
        this.transporteRutasByJuevesRuta = transporteRutasByJuevesRuta;
        this.transporteRutasByLunesRuta = transporteRutasByLunesRuta;
        this.transporteRutasBySabadoRuta = transporteRutasBySabadoRuta;
        this.amPm = amPm;
    }

    public Integer getIdInscAlumTransporte() {
        return idInscAlumTransporte;
    }

    public void setIdInscAlumTransporte(Integer idInscAlumTransporte) {
        this.idInscAlumTransporte = idInscAlumTransporte;
    }

    public com.aprendoz_test.data.TransporteRutas getTransporteRutasByDomingoRuta() {
        return transporteRutasByDomingoRuta;
    }

    public void setTransporteRutasByDomingoRuta(com.aprendoz_test.data.TransporteRutas transporteRutasByDomingoRuta) {
        this.transporteRutasByDomingoRuta = transporteRutasByDomingoRuta;
    }

    public com.aprendoz_test.data.TransporteRutas getTransporteRutasByMiercolesRuta() {
        return transporteRutasByMiercolesRuta;
    }

    public void setTransporteRutasByMiercolesRuta(com.aprendoz_test.data.TransporteRutas transporteRutasByMiercolesRuta) {
        this.transporteRutasByMiercolesRuta = transporteRutasByMiercolesRuta;
    }

    public com.aprendoz_test.data.TransporteRutas getTransporteRutasByViernesRuta() {
        return transporteRutasByViernesRuta;
    }

    public void setTransporteRutasByViernesRuta(com.aprendoz_test.data.TransporteRutas transporteRutasByViernesRuta) {
        this.transporteRutasByViernesRuta = transporteRutasByViernesRuta;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public com.aprendoz_test.data.TransporteRutas getTransporteRutasByMartesRuta() {
        return transporteRutasByMartesRuta;
    }

    public void setTransporteRutasByMartesRuta(com.aprendoz_test.data.TransporteRutas transporteRutasByMartesRuta) {
        this.transporteRutasByMartesRuta = transporteRutasByMartesRuta;
    }

    public com.aprendoz_test.data.TransporteRutas getTransporteRutasByJuevesRuta() {
        return transporteRutasByJuevesRuta;
    }

    public void setTransporteRutasByJuevesRuta(com.aprendoz_test.data.TransporteRutas transporteRutasByJuevesRuta) {
        this.transporteRutasByJuevesRuta = transporteRutasByJuevesRuta;
    }

    public com.aprendoz_test.data.TransporteRutas getTransporteRutasByLunesRuta() {
        return transporteRutasByLunesRuta;
    }

    public void setTransporteRutasByLunesRuta(com.aprendoz_test.data.TransporteRutas transporteRutasByLunesRuta) {
        this.transporteRutasByLunesRuta = transporteRutasByLunesRuta;
    }

    public com.aprendoz_test.data.TransporteRutas getTransporteRutasBySabadoRuta() {
        return transporteRutasBySabadoRuta;
    }

    public void setTransporteRutasBySabadoRuta(com.aprendoz_test.data.TransporteRutas transporteRutasBySabadoRuta) {
        this.transporteRutasBySabadoRuta = transporteRutasBySabadoRuta;
    }

    public String getAmPm() {
        return amPm;
    }

    public void setAmPm(String amPm) {
        this.amPm = amPm;
    }

}
