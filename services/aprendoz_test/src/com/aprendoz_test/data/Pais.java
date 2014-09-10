
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Pais
 *  09/10/2014 12:59:41
 * 
 */
public class Pais {

    private Integer idPais;
    private String pais;
    private Set<com.aprendoz_test.data.EstadoDepartamento> estadoDepartamentos = new HashSet<com.aprendoz_test.data.EstadoDepartamento>();
    private Set<com.aprendoz_test.data.Persona> personas = new HashSet<com.aprendoz_test.data.Persona>();
    private Set<com.aprendoz_test.data.PersonaCopy> personaCopies = new HashSet<com.aprendoz_test.data.PersonaCopy>();

    public Pais() {
    }

    public Pais(Integer idPais, String pais) {
        this.idPais = idPais;
        this.pais = pais;
    }

    public Pais(Integer idPais, String pais, Set<com.aprendoz_test.data.EstadoDepartamento> estadoDepartamentos, Set<com.aprendoz_test.data.Persona> personas, Set<com.aprendoz_test.data.PersonaCopy> personaCopies) {
        this.idPais = idPais;
        this.pais = pais;
        this.estadoDepartamentos = estadoDepartamentos;
        this.personas = personas;
        this.personaCopies = personaCopies;
    }

    public Integer getIdPais() {
        return idPais;
    }

    public void setIdPais(Integer idPais) {
        this.idPais = idPais;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Set<com.aprendoz_test.data.EstadoDepartamento> getEstadoDepartamentos() {
        return estadoDepartamentos;
    }

    public void setEstadoDepartamentos(Set<com.aprendoz_test.data.EstadoDepartamento> estadoDepartamentos) {
        this.estadoDepartamentos = estadoDepartamentos;
    }

    public Set<com.aprendoz_test.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_test.data.Persona> personas) {
        this.personas = personas;
    }

    public Set<com.aprendoz_test.data.PersonaCopy> getPersonaCopies() {
        return personaCopies;
    }

    public void setPersonaCopies(Set<com.aprendoz_test.data.PersonaCopy> personaCopies) {
        this.personaCopies = personaCopies;
    }

}
