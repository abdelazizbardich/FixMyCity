package com.abdelaziz.fixmycity.Models;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "problems")
public class Problem implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "icon")
    private String icon;
    @ManyToOne
    private Specialisation specialisation;
    @OneToMany
    private List<Report> reports;
    @Column(name = "created_at")
    private Timestamp createdAt;

    public Problem() {
    }

    public Problem(Long id, String name, String icon, Specialisation specialisation, List<Report> reports, Timestamp createdAt) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.specialisation = specialisation;
        this.reports = reports;
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

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Specialisation getSpecialisation() {
        return specialisation;
    }

    public void setSpecialisation(Specialisation specialisation) {
        this.specialisation = specialisation;
    }

    public List<Report> getReports() {
        return reports;
    }

    public void setReports(List<Report> reports) {
        this.reports = reports;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Problem{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", icon='" + icon + '\'' +
                ", specialisation=" + specialisation +
                ", reports=" + reports +
                ", createdAt=" + createdAt +
                '}';
    }
}
