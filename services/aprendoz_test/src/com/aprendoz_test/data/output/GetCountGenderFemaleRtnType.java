
package com.aprendoz_test.data.output;



/**
 * Generated for query "getCountGenderFemale" on 09/11/2014 08:33:54
 * 
 */
public class GetCountGenderFemaleRtnType {

    private Long total;
    private String sexo;
    private String tipito;
    private Integer idCurso;
    private String curso;
    private Integer idSY;
    private String anio_escolar;

    public GetCountGenderFemaleRtnType() {
    }

    public GetCountGenderFemaleRtnType(Long total, String sexo, String tipito, Integer idCurso, String curso, Integer idSY, String anio_escolar) {
        this.total = total;
        this.sexo = sexo;
        this.tipito = tipito;
        this.idCurso = idCurso;
        this.curso = curso;
        this.idSY = idSY;
        this.anio_escolar = anio_escolar;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getTipito() {
        return tipito;
    }

    public void setTipito(String tipito) {
        this.tipito = tipito;
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

    public Integer getIdSY() {
        return idSY;
    }

    public void setIdSY(Integer idSY) {
        this.idSY = idSY;
    }

    public String getAnio_escolar() {
        return anio_escolar;
    }

    public void setAnio_escolar(String anio_escolar) {
        this.anio_escolar = anio_escolar;
    }

}
