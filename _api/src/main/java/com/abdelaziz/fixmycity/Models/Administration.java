package com.abdelaziz.fixmycity.Models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;

@Entity
//@Table(name = "administrations")
@PrimaryKeyJoinColumn(name = "user_id")
public class Administration extends User{

    @Column(name = "phones")
    private ArrayList<String> phones;
    @Column(name = "lat")
    private String lat;
    @Column(name = "lan")
    private String lan;
    @ManyToOne
    private Specialisation specialisation;

    public Administration() {
    }

    public Administration(Long id, String firstName, String lastName, String email, String username, String password, String rememberToken, Boolean isActive, Role role, Timestamp createdAt, ArrayList<String> phones, String lat, String lan, Specialisation specialisation) {
        super(id, firstName, lastName, email, username, password, rememberToken, isActive, role, createdAt);
        this.phones = phones;
        this.lat = lat;
        this.lan = lan;
        this.specialisation = specialisation;
    }

    public ArrayList<String> getPhones() {
        return phones;
    }

    public void setPhones(ArrayList<String> phones) {
        this.phones = phones;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLan() {
        return lan;
    }

    public void setLan(String lan) {
        this.lan = lan;
    }

    public Specialisation getSpecialisation() {
        return specialisation;
    }

    public void setSpecialisation(Specialisation specialisation) {
        this.specialisation = specialisation;
    }

    @Override
    public String toString() {
        return super.toString()+"Administration{" +
                "phones=" + phones +
                ", lat='" + lat + '\'' +
                ", lan='" + lan + '\'' +
                ", specialisation=" + specialisation +
                '}';
    }
}
