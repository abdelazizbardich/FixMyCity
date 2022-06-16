package com.abdelazizbardich.fixmycity.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "specialisations")
@Getter
@Setter
@RequiredArgsConstructor
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

}
