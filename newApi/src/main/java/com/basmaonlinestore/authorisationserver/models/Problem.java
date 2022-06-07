package com.basmaonlinestore.authorisationserver.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "problems")
@Getter
@Setter
@RequiredArgsConstructor
public class Problem implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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

}
