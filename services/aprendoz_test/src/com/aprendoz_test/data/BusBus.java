
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.BusBus
 *  09/11/2014 07:30:06
 * 
 */
public class BusBus {

    private Integer id;
    private String plate;
    private Set<com.aprendoz_test.data.BusRoute> busRoutes = new HashSet<com.aprendoz_test.data.BusRoute>();

    public BusBus() {
    }

    public BusBus(Integer id, String plate) {
        this.id = id;
        this.plate = plate;
    }

    public BusBus(Integer id, String plate, Set<com.aprendoz_test.data.BusRoute> busRoutes) {
        this.id = id;
        this.plate = plate;
        this.busRoutes = busRoutes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public Set<com.aprendoz_test.data.BusRoute> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(Set<com.aprendoz_test.data.BusRoute> busRoutes) {
        this.busRoutes = busRoutes;
    }

}
