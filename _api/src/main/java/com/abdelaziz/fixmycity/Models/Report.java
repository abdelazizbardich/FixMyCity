package com.abdelaziz.fixmycity.Models;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "reports")
public class Report implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "lat")
    private String lat;
    @Column(name = "lan")
    private String lan;
    @Column(name = "status")
    private Boolean status;
    @Column(name = "note")
    private String note;
    @ManyToOne
    private Problem problem;
    @OneToMany
    private List<Photo> photos;
    @Column(name = "created_at")
    private Timestamp createdAt;

    public Report() {
    }

    public Report(Long id, String lat, String lan, Boolean status, String note, Problem problem, List<Photo> photos, Timestamp createdAt) {
        this.id = id;
        this.lat = lat;
        this.lan = lan;
        this.status = status;
        this.note = note;
        this.problem = problem;
        this.photos = photos;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Problem getProblem() {
        return problem;
    }

    public void setProblem(Problem problem) {
        this.problem = problem;
    }

    public List<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(List<Photo> photos) {
        this.photos = photos;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Report{" +
                "id=" + id +
                ", lat='" + lat + '\'' +
                ", lan='" + lan + '\'' +
                ", status=" + status +
                ", note='" + note + '\'' +
                ", problem=" + problem +
                ", photos=" + photos +
                ", createdAt=" + createdAt +
                '}';
    }
}
