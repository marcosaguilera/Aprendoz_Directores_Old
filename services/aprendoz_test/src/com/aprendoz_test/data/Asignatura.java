
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Asignatura
 *  09/11/2014 07:30:06
 * 
 */
public class Asignatura {

    private Integer idAsignatura;
    private String asignatura;
    private String subject;
    private Boolean electiva;
    private Integer idArea1;
    private Integer idArea2;
    private Integer idArea3;
    private Integer idSubarea1;
    private Integer idSubarea2;
    private Integer idSubarea3;
    private Integer salonIdSalon;
    private Float intensidadHoraria;
    private Float peso;
    private String descripAsigEspaniol;
    private String descripAsigIngles;
    private Float ihA1;
    private Float ihA2;
    private Float ihA3;
    private Float meses;
    private Integer esperadostotal;
    private Grado grado;
    private TipoInscAsig tipoInscAsig;
    private Sy sy;
    private Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_test.data.InscCursoAsig>();
    private Set<com.aprendoz_test.data.Horario> horarios = new HashSet<com.aprendoz_test.data.Horario>();
    private Set<com.aprendoz_test.data.InscAlumAsigCopy> inscAlumAsigCopies = new HashSet<com.aprendoz_test.data.InscAlumAsigCopy>();
    private Set<com.aprendoz_test.data.InscAlumAsigCopy3> inscAlumAsigCopy3s = new HashSet<com.aprendoz_test.data.InscAlumAsigCopy3>();
    private Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_test.data.InscAlumAsig>();
    private Set<com.aprendoz_test.data.Sesion> sesions = new HashSet<com.aprendoz_test.data.Sesion>();
    private Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies = new HashSet<com.aprendoz_test.data.InscCursoAsigCopy>();
    private Set<com.aprendoz_test.data.Unidad> unidads = new HashSet<com.aprendoz_test.data.Unidad>();
    private Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_test.data.AprendizajesAsignaturas>();
    private Set<com.aprendoz_test.data.InscAlumAsigCopy2> inscAlumAsigCopy2s = new HashSet<com.aprendoz_test.data.InscAlumAsigCopy2>();

    public Asignatura() {
    }

    public Asignatura(Integer idAsignatura, String asignatura, String subject, Boolean electiva, Integer idArea1, Integer idArea2, Integer idArea3, Integer idSubarea1, Integer idSubarea2, Integer idSubarea3, Integer salonIdSalon, Float intensidadHoraria, Float peso, String descripAsigEspaniol, String descripAsigIngles, Float ihA1, Float ihA2, Float ihA3, Float meses, Integer esperadostotal) {
        this.idAsignatura = idAsignatura;
        this.asignatura = asignatura;
        this.subject = subject;
        this.electiva = electiva;
        this.idArea1 = idArea1;
        this.idArea2 = idArea2;
        this.idArea3 = idArea3;
        this.idSubarea1 = idSubarea1;
        this.idSubarea2 = idSubarea2;
        this.idSubarea3 = idSubarea3;
        this.salonIdSalon = salonIdSalon;
        this.intensidadHoraria = intensidadHoraria;
        this.peso = peso;
        this.descripAsigEspaniol = descripAsigEspaniol;
        this.descripAsigIngles = descripAsigIngles;
        this.ihA1 = ihA1;
        this.ihA2 = ihA2;
        this.ihA3 = ihA3;
        this.meses = meses;
        this.esperadostotal = esperadostotal;
    }

    public Asignatura(Integer idAsignatura, String asignatura, String subject, Boolean electiva, Integer idArea1, Integer idArea2, Integer idArea3, Integer idSubarea1, Integer idSubarea2, Integer idSubarea3, Integer salonIdSalon, Float intensidadHoraria, Float peso, String descripAsigEspaniol, String descripAsigIngles, Float ihA1, Float ihA2, Float ihA3, Float meses, Integer esperadostotal, Grado grado, TipoInscAsig tipoInscAsig, Sy sy, Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs, Set<com.aprendoz_test.data.Horario> horarios, Set<com.aprendoz_test.data.InscAlumAsigCopy> inscAlumAsigCopies, Set<com.aprendoz_test.data.InscAlumAsigCopy3> inscAlumAsigCopy3s, Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs, Set<com.aprendoz_test.data.Sesion> sesions, Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies, Set<com.aprendoz_test.data.Unidad> unidads, Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases, Set<com.aprendoz_test.data.InscAlumAsigCopy2> inscAlumAsigCopy2s) {
        this.idAsignatura = idAsignatura;
        this.asignatura = asignatura;
        this.subject = subject;
        this.electiva = electiva;
        this.idArea1 = idArea1;
        this.idArea2 = idArea2;
        this.idArea3 = idArea3;
        this.idSubarea1 = idSubarea1;
        this.idSubarea2 = idSubarea2;
        this.idSubarea3 = idSubarea3;
        this.salonIdSalon = salonIdSalon;
        this.intensidadHoraria = intensidadHoraria;
        this.peso = peso;
        this.descripAsigEspaniol = descripAsigEspaniol;
        this.descripAsigIngles = descripAsigIngles;
        this.ihA1 = ihA1;
        this.ihA2 = ihA2;
        this.ihA3 = ihA3;
        this.meses = meses;
        this.esperadostotal = esperadostotal;
        this.grado = grado;
        this.tipoInscAsig = tipoInscAsig;
        this.sy = sy;
        this.inscCursoAsigs = inscCursoAsigs;
        this.horarios = horarios;
        this.inscAlumAsigCopies = inscAlumAsigCopies;
        this.inscAlumAsigCopy3s = inscAlumAsigCopy3s;
        this.inscAlumAsigs = inscAlumAsigs;
        this.sesions = sesions;
        this.inscCursoAsigCopies = inscCursoAsigCopies;
        this.unidads = unidads;
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Boolean getElectiva() {
        return electiva;
    }

    public void setElectiva(Boolean electiva) {
        this.electiva = electiva;
    }

    public Integer getIdArea1() {
        return idArea1;
    }

    public void setIdArea1(Integer idArea1) {
        this.idArea1 = idArea1;
    }

    public Integer getIdArea2() {
        return idArea2;
    }

    public void setIdArea2(Integer idArea2) {
        this.idArea2 = idArea2;
    }

    public Integer getIdArea3() {
        return idArea3;
    }

    public void setIdArea3(Integer idArea3) {
        this.idArea3 = idArea3;
    }

    public Integer getIdSubarea1() {
        return idSubarea1;
    }

    public void setIdSubarea1(Integer idSubarea1) {
        this.idSubarea1 = idSubarea1;
    }

    public Integer getIdSubarea2() {
        return idSubarea2;
    }

    public void setIdSubarea2(Integer idSubarea2) {
        this.idSubarea2 = idSubarea2;
    }

    public Integer getIdSubarea3() {
        return idSubarea3;
    }

    public void setIdSubarea3(Integer idSubarea3) {
        this.idSubarea3 = idSubarea3;
    }

    public Integer getSalonIdSalon() {
        return salonIdSalon;
    }

    public void setSalonIdSalon(Integer salonIdSalon) {
        this.salonIdSalon = salonIdSalon;
    }

    public Float getIntensidadHoraria() {
        return intensidadHoraria;
    }

    public void setIntensidadHoraria(Float intensidadHoraria) {
        this.intensidadHoraria = intensidadHoraria;
    }

    public Float getPeso() {
        return peso;
    }

    public void setPeso(Float peso) {
        this.peso = peso;
    }

    public String getDescripAsigEspaniol() {
        return descripAsigEspaniol;
    }

    public void setDescripAsigEspaniol(String descripAsigEspaniol) {
        this.descripAsigEspaniol = descripAsigEspaniol;
    }

    public String getDescripAsigIngles() {
        return descripAsigIngles;
    }

    public void setDescripAsigIngles(String descripAsigIngles) {
        this.descripAsigIngles = descripAsigIngles;
    }

    public Float getIhA1() {
        return ihA1;
    }

    public void setIhA1(Float ihA1) {
        this.ihA1 = ihA1;
    }

    public Float getIhA2() {
        return ihA2;
    }

    public void setIhA2(Float ihA2) {
        this.ihA2 = ihA2;
    }

    public Float getIhA3() {
        return ihA3;
    }

    public void setIhA3(Float ihA3) {
        this.ihA3 = ihA3;
    }

    public Float getMeses() {
        return meses;
    }

    public void setMeses(Float meses) {
        this.meses = meses;
    }

    public Integer getEsperadostotal() {
        return esperadostotal;
    }

    public void setEsperadostotal(Integer esperadostotal) {
        this.esperadostotal = esperadostotal;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public TipoInscAsig getTipoInscAsig() {
        return tipoInscAsig;
    }

    public void setTipoInscAsig(TipoInscAsig tipoInscAsig) {
        this.tipoInscAsig = tipoInscAsig;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Set<com.aprendoz_test.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_test.data.Horario> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<com.aprendoz_test.data.Horario> horarios) {
        this.horarios = horarios;
    }

    public Set<com.aprendoz_test.data.InscAlumAsigCopy> getInscAlumAsigCopies() {
        return inscAlumAsigCopies;
    }

    public void setInscAlumAsigCopies(Set<com.aprendoz_test.data.InscAlumAsigCopy> inscAlumAsigCopies) {
        this.inscAlumAsigCopies = inscAlumAsigCopies;
    }

    public Set<com.aprendoz_test.data.InscAlumAsigCopy3> getInscAlumAsigCopy3s() {
        return inscAlumAsigCopy3s;
    }

    public void setInscAlumAsigCopy3s(Set<com.aprendoz_test.data.InscAlumAsigCopy3> inscAlumAsigCopy3s) {
        this.inscAlumAsigCopy3s = inscAlumAsigCopy3s;
    }

    public Set<com.aprendoz_test.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

    public Set<com.aprendoz_test.data.Sesion> getSesions() {
        return sesions;
    }

    public void setSesions(Set<com.aprendoz_test.data.Sesion> sesions) {
        this.sesions = sesions;
    }

    public Set<com.aprendoz_test.data.InscCursoAsigCopy> getInscCursoAsigCopies() {
        return inscCursoAsigCopies;
    }

    public void setInscCursoAsigCopies(Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies) {
        this.inscCursoAsigCopies = inscCursoAsigCopies;
    }

    public Set<com.aprendoz_test.data.Unidad> getUnidads() {
        return unidads;
    }

    public void setUnidads(Set<com.aprendoz_test.data.Unidad> unidads) {
        this.unidads = unidads;
    }

    public Set<com.aprendoz_test.data.AprendizajesAsignaturas> getAprendizajesAsignaturases() {
        return aprendizajesAsignaturases;
    }

    public void setAprendizajesAsignaturases(Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

    public Set<com.aprendoz_test.data.InscAlumAsigCopy2> getInscAlumAsigCopy2s() {
        return inscAlumAsigCopy2s;
    }

    public void setInscAlumAsigCopy2s(Set<com.aprendoz_test.data.InscAlumAsigCopy2> inscAlumAsigCopy2s) {
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
    }

}
