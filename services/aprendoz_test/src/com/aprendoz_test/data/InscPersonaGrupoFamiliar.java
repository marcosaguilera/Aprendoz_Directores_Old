
package com.aprendoz_test.data;



/**
 *  aprendoz_test.InscPersonaGrupoFamiliar
 *  09/11/2014 07:30:06
 * 
 */
public class InscPersonaGrupoFamiliar {

    private Integer idInscPersonaGrupoFamiliar;
    private Boolean responsable;
    private Persona persona;
    private TipoPersona tipoPersona;
    private GrupoFamiliar grupoFamiliar;

    public InscPersonaGrupoFamiliar() {
    }

    public InscPersonaGrupoFamiliar(Integer idInscPersonaGrupoFamiliar, Boolean responsable) {
        this.idInscPersonaGrupoFamiliar = idInscPersonaGrupoFamiliar;
        this.responsable = responsable;
    }

    public InscPersonaGrupoFamiliar(Integer idInscPersonaGrupoFamiliar, Boolean responsable, Persona persona, TipoPersona tipoPersona, GrupoFamiliar grupoFamiliar) {
        this.idInscPersonaGrupoFamiliar = idInscPersonaGrupoFamiliar;
        this.responsable = responsable;
        this.persona = persona;
        this.tipoPersona = tipoPersona;
        this.grupoFamiliar = grupoFamiliar;
    }

    public Integer getIdInscPersonaGrupoFamiliar() {
        return idInscPersonaGrupoFamiliar;
    }

    public void setIdInscPersonaGrupoFamiliar(Integer idInscPersonaGrupoFamiliar) {
        this.idInscPersonaGrupoFamiliar = idInscPersonaGrupoFamiliar;
    }

    public Boolean getResponsable() {
        return responsable;
    }

    public void setResponsable(Boolean responsable) {
        this.responsable = responsable;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public TipoPersona getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(TipoPersona tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
