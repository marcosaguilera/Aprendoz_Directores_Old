
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.BusStudentRoute
 *  09/11/2014 07:30:07
 * 
 */
public class BusStudentRoute {

    private Integer id;
    private String code;
    private String name;
    private Date date;
    private String status;
    private Date morningTime;
    private String morningAction;
    private String morningRoute;
    private Date afternoonTime;
    private String afternoonAction;
    private String afternoonRoute;
    private Date created;

    public BusStudentRoute() {
    }

    public BusStudentRoute(Integer id, String code, String name, Date date, String status, Date morningTime, String morningAction, String morningRoute, Date afternoonTime, String afternoonAction, String afternoonRoute, Date created) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.date = date;
        this.status = status;
        this.morningTime = morningTime;
        this.morningAction = morningAction;
        this.morningRoute = morningRoute;
        this.afternoonTime = afternoonTime;
        this.afternoonAction = afternoonAction;
        this.afternoonRoute = afternoonRoute;
        this.created = created;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getMorningTime() {
        return morningTime;
    }

    public void setMorningTime(Date morningTime) {
        this.morningTime = morningTime;
    }

    public String getMorningAction() {
        return morningAction;
    }

    public void setMorningAction(String morningAction) {
        this.morningAction = morningAction;
    }

    public String getMorningRoute() {
        return morningRoute;
    }

    public void setMorningRoute(String morningRoute) {
        this.morningRoute = morningRoute;
    }

    public Date getAfternoonTime() {
        return afternoonTime;
    }

    public void setAfternoonTime(Date afternoonTime) {
        this.afternoonTime = afternoonTime;
    }

    public String getAfternoonAction() {
        return afternoonAction;
    }

    public void setAfternoonAction(String afternoonAction) {
        this.afternoonAction = afternoonAction;
    }

    public String getAfternoonRoute() {
        return afternoonRoute;
    }

    public void setAfternoonRoute(String afternoonRoute) {
        this.afternoonRoute = afternoonRoute;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

}
