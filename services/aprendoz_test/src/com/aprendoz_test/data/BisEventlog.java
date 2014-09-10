
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.BisEventlog
 *  09/10/2014 12:43:02
 * 
 */
public class BisEventlog {

    private String id;
    private Date eventCreationTime;
    private String addressTag;
    private String stateName;
    private String stringValue;
    private String eventValueName;

    public BisEventlog() {
    }

    public BisEventlog(String id, Date eventCreationTime, String addressTag, String stateName, String stringValue, String eventValueName) {
        this.id = id;
        this.eventCreationTime = eventCreationTime;
        this.addressTag = addressTag;
        this.stateName = stateName;
        this.stringValue = stringValue;
        this.eventValueName = eventValueName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getEventCreationTime() {
        return eventCreationTime;
    }

    public void setEventCreationTime(Date eventCreationTime) {
        this.eventCreationTime = eventCreationTime;
    }

    public String getAddressTag() {
        return addressTag;
    }

    public void setAddressTag(String addressTag) {
        this.addressTag = addressTag;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public String getStringValue() {
        return stringValue;
    }

    public void setStringValue(String stringValue) {
        this.stringValue = stringValue;
    }

    public String getEventValueName() {
        return eventValueName;
    }

    public void setEventValueName(String eventValueName) {
        this.eventValueName = eventValueName;
    }

}
