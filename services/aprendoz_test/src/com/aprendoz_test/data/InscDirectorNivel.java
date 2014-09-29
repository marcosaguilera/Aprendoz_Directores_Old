
package com.aprendoz_test.data;



/**
 *  aprendoz_test.InscDirectorNivel
 *  09/11/2014 07:30:07
 * 
 */
public class InscDirectorNivel {

    private Integer idInscDirectorNivel;
    private Persona persona;
    private Nivel nivel;

    public InscDirectorNivel() {
    }

    public InscDirectorNivel(Integer idInscDirectorNivel) {
        this.idInscDirectorNivel = idInscDirectorNivel;
    }

    public InscDirectorNivel(Integer idInscDirectorNivel, Persona persona, Nivel nivel) {
        this.idInscDirectorNivel = idInscDirectorNivel;
        this.persona = persona;
        this.nivel = nivel;
    }

    public Integer getIdInscDirectorNivel() {
        return idInscDirectorNivel;
    }

    public void setIdInscDirectorNivel(Integer idInscDirectorNivel) {
        this.idInscDirectorNivel = idInscDirectorNivel;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

}
