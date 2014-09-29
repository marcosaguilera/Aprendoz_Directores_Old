
package com.aprendoz_test.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.AccStudentCard
 *  09/11/2014 07:30:07
 * 
 */
public class AccStudentCard {

    private Integer id;
    private String cardCodeData;
    private String cardNumber;
    private Date created;
    private Date updated;
    private Persona persona;
    private Set<com.aprendoz_test.data.AccStudentCardAuthorization> accStudentCardAuthorizations = new HashSet<com.aprendoz_test.data.AccStudentCardAuthorization>();

    public AccStudentCard() {
    }

    public AccStudentCard(Integer id, String cardCodeData, String cardNumber, Date created, Date updated) {
        this.id = id;
        this.cardCodeData = cardCodeData;
        this.cardNumber = cardNumber;
        this.created = created;
        this.updated = updated;
    }

    public AccStudentCard(Integer id, String cardCodeData, String cardNumber, Date created, Date updated, Persona persona, Set<com.aprendoz_test.data.AccStudentCardAuthorization> accStudentCardAuthorizations) {
        this.id = id;
        this.cardCodeData = cardCodeData;
        this.cardNumber = cardNumber;
        this.created = created;
        this.updated = updated;
        this.persona = persona;
        this.accStudentCardAuthorizations = accStudentCardAuthorizations;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCardCodeData() {
        return cardCodeData;
    }

    public void setCardCodeData(String cardCodeData) {
        this.cardCodeData = cardCodeData;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Set<com.aprendoz_test.data.AccStudentCardAuthorization> getAccStudentCardAuthorizations() {
        return accStudentCardAuthorizations;
    }

    public void setAccStudentCardAuthorizations(Set<com.aprendoz_test.data.AccStudentCardAuthorization> accStudentCardAuthorizations) {
        this.accStudentCardAuthorizations = accStudentCardAuthorizations;
    }

}
