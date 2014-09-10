
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.SecretariaRetiroEstudiantes
 *  09/10/2014 12:59:41
 * 
 */
public class SecretariaRetiroEstudiantes {

    private Integer idSecretariaRetirosAlumnos;
    private Integer personaIdPersona;
    private Integer checkDocencia;
    private String comentarioDocencia;
    private String usuarioDocencia;
    private Boolean checkFinanciera;
    private String comentarioFinanciera;
    private String usuarioFinanciera;
    private Boolean checkSecretaria;
    private String comentarioSecretaria;
    private String usuarioSecretaria;
    private Date fechaRetiro;
    private String causaRetiro;
    private Boolean checkRetiro;
    private String usuarioRetiro;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public SecretariaRetiroEstudiantes() {
    }

    public SecretariaRetiroEstudiantes(Integer idSecretariaRetirosAlumnos, Integer personaIdPersona, Integer checkDocencia, String comentarioDocencia, String usuarioDocencia, Boolean checkFinanciera, String comentarioFinanciera, String usuarioFinanciera, Boolean checkSecretaria, String comentarioSecretaria, String usuarioSecretaria, Date fechaRetiro, String causaRetiro, Boolean checkRetiro, String usuarioRetiro, Date fechaCreacion, Date fechaActualizacion) {
        this.idSecretariaRetirosAlumnos = idSecretariaRetirosAlumnos;
        this.personaIdPersona = personaIdPersona;
        this.checkDocencia = checkDocencia;
        this.comentarioDocencia = comentarioDocencia;
        this.usuarioDocencia = usuarioDocencia;
        this.checkFinanciera = checkFinanciera;
        this.comentarioFinanciera = comentarioFinanciera;
        this.usuarioFinanciera = usuarioFinanciera;
        this.checkSecretaria = checkSecretaria;
        this.comentarioSecretaria = comentarioSecretaria;
        this.usuarioSecretaria = usuarioSecretaria;
        this.fechaRetiro = fechaRetiro;
        this.causaRetiro = causaRetiro;
        this.checkRetiro = checkRetiro;
        this.usuarioRetiro = usuarioRetiro;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getIdSecretariaRetirosAlumnos() {
        return idSecretariaRetirosAlumnos;
    }

    public void setIdSecretariaRetirosAlumnos(Integer idSecretariaRetirosAlumnos) {
        this.idSecretariaRetirosAlumnos = idSecretariaRetirosAlumnos;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Integer getCheckDocencia() {
        return checkDocencia;
    }

    public void setCheckDocencia(Integer checkDocencia) {
        this.checkDocencia = checkDocencia;
    }

    public String getComentarioDocencia() {
        return comentarioDocencia;
    }

    public void setComentarioDocencia(String comentarioDocencia) {
        this.comentarioDocencia = comentarioDocencia;
    }

    public String getUsuarioDocencia() {
        return usuarioDocencia;
    }

    public void setUsuarioDocencia(String usuarioDocencia) {
        this.usuarioDocencia = usuarioDocencia;
    }

    public Boolean getCheckFinanciera() {
        return checkFinanciera;
    }

    public void setCheckFinanciera(Boolean checkFinanciera) {
        this.checkFinanciera = checkFinanciera;
    }

    public String getComentarioFinanciera() {
        return comentarioFinanciera;
    }

    public void setComentarioFinanciera(String comentarioFinanciera) {
        this.comentarioFinanciera = comentarioFinanciera;
    }

    public String getUsuarioFinanciera() {
        return usuarioFinanciera;
    }

    public void setUsuarioFinanciera(String usuarioFinanciera) {
        this.usuarioFinanciera = usuarioFinanciera;
    }

    public Boolean getCheckSecretaria() {
        return checkSecretaria;
    }

    public void setCheckSecretaria(Boolean checkSecretaria) {
        this.checkSecretaria = checkSecretaria;
    }

    public String getComentarioSecretaria() {
        return comentarioSecretaria;
    }

    public void setComentarioSecretaria(String comentarioSecretaria) {
        this.comentarioSecretaria = comentarioSecretaria;
    }

    public String getUsuarioSecretaria() {
        return usuarioSecretaria;
    }

    public void setUsuarioSecretaria(String usuarioSecretaria) {
        this.usuarioSecretaria = usuarioSecretaria;
    }

    public Date getFechaRetiro() {
        return fechaRetiro;
    }

    public void setFechaRetiro(Date fechaRetiro) {
        this.fechaRetiro = fechaRetiro;
    }

    public String getCausaRetiro() {
        return causaRetiro;
    }

    public void setCausaRetiro(String causaRetiro) {
        this.causaRetiro = causaRetiro;
    }

    public Boolean getCheckRetiro() {
        return checkRetiro;
    }

    public void setCheckRetiro(Boolean checkRetiro) {
        this.checkRetiro = checkRetiro;
    }

    public String getUsuarioRetiro() {
        return usuarioRetiro;
    }

    public void setUsuarioRetiro(String usuarioRetiro) {
        this.usuarioRetiro = usuarioRetiro;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

}
