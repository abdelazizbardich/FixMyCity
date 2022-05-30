package com.abdelaziz.fixmycity.Models;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "specialisations")
public class Specialisation implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "icon")
    private String icon;
    @OneToMany
    private List<Problem> problems;
    @Column(name = "created_at")
    private Timestamp createdAt;

    public Specialisation() {
    }

    public Specialisation(Long id, String name, String icon, List<Problem> problems, Timestamp createdAt) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.problems = problems;
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

    public List<Problem> getProblems() {
        return problems;
    }

    public void setProblems(List<Problem> problems) {
        this.problems = problems;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Specialisation{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", icon='" + icon + '\'' +
                ", problems=" + problems +
                ", createdAt=" + createdAt +
                '}';
    }
}
