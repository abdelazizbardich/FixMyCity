package com.basmaonlinestore.authorisationserver.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "reports")
@Getter
@Setter
@RequiredArgsConstructor
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

}
