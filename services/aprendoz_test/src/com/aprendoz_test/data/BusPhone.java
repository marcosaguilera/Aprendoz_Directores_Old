
package com.aprendoz_test.data;



/**
 *  aprendoz_test.BusPhone
 *  09/11/2014 07:30:06
 * 
 */
public class BusPhone {

    private Integer id;
    private String phone;
    private BusDriver busDriver;

    public BusPhone() {
    }

    public BusPhone(Integer id, String phone) {
        this.id = id;
        this.phone = phone;
    }

    public BusPhone(Integer id, String phone, BusDriver busDriver) {
        this.id = id;
        this.phone = phone;
        this.busDriver = busDriver;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public BusDriver getBusDriver() {
        return busDriver;
    }

    public void setBusDriver(BusDriver busDriver) {
        this.busDriver = busDriver;
    }

}
