
package com.aprendoz_test.data.output;

import java.util.Date;


/**
 * Generated for query "sendMailHQL" on 09/10/2014 12:43:16
 * 
 */
public class SendMailHQLRtnType {

    private Integer idalumno;
    private String nombreAlumno;
    private Integer ide;
    private String registrante;
    private String curso;
    private String cor_user;
    private String cor_mail;
    private Date fecha;
    private Date hora;
    private String lugar;
    private String tipo;
    private String subtipo;
    private String dir_mail;

    public SendMailHQLRtnType() {
    }

    public SendMailHQLRtnType(Integer idalumno, String nombreAlumno, Integer ide, String registrante, String curso, String cor_user, String cor_mail, Date fecha, Date hora, String lugar, String tipo, String subtipo, String dir_mail) {
        this.idalumno = idalumno;
        this.nombreAlumno = nombreAlumno;
        this.ide = ide;
        this.registrante = registrante;
        this.curso = curso;
        this.cor_user = cor_user;
        this.cor_mail = cor_mail;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.tipo = tipo;
        this.subtipo = subtipo;
        this.dir_mail = dir_mail;
    }

    public Integer getIdalumno() {
        return idalumno;
    }

    public void setIdalumno(Integer idalumno) {
        this.idalumno = idalumno;
    }

    public String getNombreAlumno() {
        return nombreAlumno;
    }

    public void setNombreAlumno(String nombreAlumno) {
        this.nombreAlumno = nombreAlumno;
    }

    public Integer getIde() {
        return ide;
    }

    public void setIde(Integer ide) {
        this.ide = ide;
    }

    public String getRegistrante() {
        return registrante;
    }

    public void setRegistrante(String registrante) {
        this.registrante = registrante;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getCor_user() {
        return cor_user;
    }

    public void setCor_user(String cor_user) {
        this.cor_user = cor_user;
    }

    public String getCor_mail() {
        return cor_mail;
    }

    public void setCor_mail(String cor_mail) {
        this.cor_mail = cor_mail;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getSubtipo() {
        return subtipo;
    }

    public void setSubtipo(String subtipo) {
        this.subtipo = subtipo;
    }

    public String getDir_mail() {
        return dir_mail;
    }

    public void setDir_mail(String dir_mail) {
        this.dir_mail = dir_mail;
    }

}
