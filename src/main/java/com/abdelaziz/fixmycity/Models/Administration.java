package com.abdelaziz.fixmycity.Models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;

@Entity
@Table(name = "administrations")
public class Administration{

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "phones")
    private ArrayList<String> phones;
    @Column(name = "lat")
    private String lat;
    @Column(name = "lan")
    private String lan;
    @Column(name = "login")
    private String login;
    @Column(name = "password")
    private String password;
    @ManyToOne
    private Specialisation specialisation;
    @Column(name = "created_at")
    private Timestamp createdAt;

    public Administration() {
    }

    public Administration(Long id, String name, ArrayList<String> phones, String lat, String lan, String login, String password, Specialisation specialisation, Timestamp createdAt) {
        this.id = id;
        this.name = name;
        this.phones = phones;
        this.lat = lat;
        this.lan = lan;
        this.login = login;
        this.password = password;
        this.specialisation = specialisation;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Specialisation getSpecialisation() {
        return specialisation;
    }

    public void setSpecialisation(Specialisation specialisation) {
        this.specialisation = specialisation;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Administration{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phones='" + phones + '\'' +
                ", lat='" + lat + '\'' +
                ", lan='" + lan + '\'' +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", specialisation=" + specialisation +
                ", createdAt=" + createdAt +
                '}';
    }
}
