
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Curso
 *  09/11/2014 07:30:06
 * 
 */
public class Curso {

    private Integer idCurso;
    private String curso;
    private Grado grado;
    private Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_test.data.InscCursoAsig>();
    private Set<com.aprendoz_test.data.Horario> horarios = new HashSet<com.aprendoz_test.data.Horario>();
    private Set<com.aprendoz_test.data.CoordinacionDeGrupo> coordinacionDeGrupos = new HashSet<com.aprendoz_test.data.CoordinacionDeGrupo>();
    private Set<com.aprendoz_test.data.Coordinadores> coordinadoreses = new HashSet<com.aprendoz_test.data.Coordinadores>();
    private Set<com.aprendoz_test.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_test.data.InscAlumCurso>();
    private Set<com.aprendoz_test.data.Sesion> sesions = new HashSet<com.aprendoz_test.data.Sesion>();
    private Set<com.aprendoz_test.data.Matricula> matriculas = new HashSet<com.aprendoz_test.data.Matricula>();
    private Set<com.aprendoz_test.data.Coordinacion> coordinacions = new HashSet<com.aprendoz_test.data.Coordinacion>();
    private Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies = new HashSet<com.aprendoz_test.data.InscCursoAsigCopy>();
    private Set<com.aprendoz_test.data.InscCoordinadoresCurso> inscCoordinadoresCursos = new HashSet<com.aprendoz_test.data.InscCoordinadoresCurso>();

    public Curso() {
    }

    public Curso(Integer idCurso, String curso) {
        this.idCurso = idCurso;
        this.curso = curso;
    }

    public Curso(Integer idCurso, String curso, Grado grado, Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs, Set<com.aprendoz_test.data.Horario> horarios, Set<com.aprendoz_test.data.CoordinacionDeGrupo> coordinacionDeGrupos, Set<com.aprendoz_test.data.Coordinadores> coordinadoreses, Set<com.aprendoz_test.data.InscAlumCurso> inscAlumCursos, Set<com.aprendoz_test.data.Sesion> sesions, Set<com.aprendoz_test.data.Matricula> matriculas, Set<com.aprendoz_test.data.Coordinacion> coordinacions, Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies, Set<com.aprendoz_test.data.InscCoordinadoresCurso> inscCoordinadoresCursos) {
        this.idCurso = idCurso;
        this.curso = curso;
        this.grado = grado;
        this.inscCursoAsigs = inscCursoAsigs;
        this.horarios = horarios;
        this.coordinacionDeGrupos = coordinacionDeGrupos;
        this.coordinadoreses = coordinadoreses;
        this.inscAlumCursos = inscAlumCursos;
        this.sesions = sesions;
        this.matriculas = matriculas;
        this.coordinacions = coordinacions;
        this.inscCursoAsigCopies = inscCursoAsigCopies;
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
    }

    public Integer getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Integer idCurso) {
        this.idCurso = idCurso;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
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

    public Set<com.aprendoz_test.data.CoordinacionDeGrupo> getCoordinacionDeGrupos() {
        return coordinacionDeGrupos;
    }

    public void setCoordinacionDeGrupos(Set<com.aprendoz_test.data.CoordinacionDeGrupo> coordinacionDeGrupos) {
        this.coordinacionDeGrupos = coordinacionDeGrupos;
    }

    public Set<com.aprendoz_test.data.Coordinadores> getCoordinadoreses() {
        return coordinadoreses;
    }

    public void setCoordinadoreses(Set<com.aprendoz_test.data.Coordinadores> coordinadoreses) {
        this.coordinadoreses = coordinadoreses;
    }

    public Set<com.aprendoz_test.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_test.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_test.data.Sesion> getSesions() {
        return sesions;
    }

    public void setSesions(Set<com.aprendoz_test.data.Sesion> sesions) {
        this.sesions = sesions;
    }

    public Set<com.aprendoz_test.data.Matricula> getMatriculas() {
        return matriculas;
    }

    public void setMatriculas(Set<com.aprendoz_test.data.Matricula> matriculas) {
        this.matriculas = matriculas;
    }

    public Set<com.aprendoz_test.data.Coordinacion> getCoordinacions() {
        return coordinacions;
    }

    public void setCoordinacions(Set<com.aprendoz_test.data.Coordinacion> coordinacions) {
        this.coordinacions = coordinacions;
    }

    public Set<com.aprendoz_test.data.InscCursoAsigCopy> getInscCursoAsigCopies() {
        return inscCursoAsigCopies;
    }

    public void setInscCursoAsigCopies(Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies) {
        this.inscCursoAsigCopies = inscCursoAsigCopies;
    }

    public Set<com.aprendoz_test.data.InscCoordinadoresCurso> getInscCoordinadoresCursos() {
        return inscCoordinadoresCursos;
    }

    public void setInscCoordinadoresCursos(Set<com.aprendoz_test.data.InscCoordinadoresCurso> inscCoordinadoresCursos) {
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
    }

}
