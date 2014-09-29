
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoPersona
 *  09/11/2014 07:30:07
 * 
 */
public class TipoPersona {

    private Integer idTipoPersona;
    private String tipoPersona;
    private Set<com.aprendoz_test.data.AccAuthorization> accAuthorizations = new HashSet<com.aprendoz_test.data.AccAuthorization>();
    private Set<com.aprendoz_test.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars = new HashSet<com.aprendoz_test.data.InscPersonaGrupoFamiliar>();
    private Set<com.aprendoz_test.data.PersonaCopy> personaCopies = new HashSet<com.aprendoz_test.data.PersonaCopy>();
    private Set<com.aprendoz_test.data.Persona> personas = new HashSet<com.aprendoz_test.data.Persona>();
    private Set<com.aprendoz_test.data.ReportesTipoPersona> reportesTipoPersonas = new HashSet<com.aprendoz_test.data.ReportesTipoPersona>();

    public TipoPersona() {
    }

    public TipoPersona(Integer idTipoPersona, String tipoPersona) {
        this.idTipoPersona = idTipoPersona;
        this.tipoPersona = tipoPersona;
    }

    public TipoPersona(Integer idTipoPersona, String tipoPersona, Set<com.aprendoz_test.data.AccAuthorization> accAuthorizations, Set<com.aprendoz_test.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars, Set<com.aprendoz_test.data.PersonaCopy> personaCopies, Set<com.aprendoz_test.data.Persona> personas, Set<com.aprendoz_test.data.ReportesTipoPersona> reportesTipoPersonas) {
        this.idTipoPersona = idTipoPersona;
        this.tipoPersona = tipoPersona;
        this.accAuthorizations = accAuthorizations;
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
        this.personaCopies = personaCopies;
        this.personas = personas;
        this.reportesTipoPersonas = reportesTipoPersonas;
    }

    public Integer getIdTipoPersona() {
        return idTipoPersona;
    }

    public void setIdTipoPersona(Integer idTipoPersona) {
        this.idTipoPersona = idTipoPersona;
    }

    public String getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(String tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public Set<com.aprendoz_test.data.AccAuthorization> getAccAuthorizations() {
        return accAuthorizations;
    }

    public void setAccAuthorizations(Set<com.aprendoz_test.data.AccAuthorization> accAuthorizations) {
        this.accAuthorizations = accAuthorizations;
    }

    public Set<com.aprendoz_test.data.InscPersonaGrupoFamiliar> getInscPersonaGrupoFamiliars() {
        return inscPersonaGrupoFamiliars;
    }

    public void setInscPersonaGrupoFamiliars(Set<com.aprendoz_test.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars) {
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
    }

    public Set<com.aprendoz_test.data.PersonaCopy> getPersonaCopies() {
        return personaCopies;
    }

    public void setPersonaCopies(Set<com.aprendoz_test.data.PersonaCopy> personaCopies) {
        this.personaCopies = personaCopies;
    }

    public Set<com.aprendoz_test.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_test.data.Persona> personas) {
        this.personas = personas;
    }

    public Set<com.aprendoz_test.data.ReportesTipoPersona> getReportesTipoPersonas() {
        return reportesTipoPersonas;
    }

    public void setReportesTipoPersonas(Set<com.aprendoz_test.data.ReportesTipoPersona> reportesTipoPersonas) {
        this.reportesTipoPersonas = reportesTipoPersonas;
    }

}
