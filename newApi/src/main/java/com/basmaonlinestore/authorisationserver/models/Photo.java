package com.basmaonlinestore.authorisationserver.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "photos")
@Getter
@Setter
@RequiredArgsConstructor
public class Photo implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "path")
    private String path;
    @Column(name = "type")
    private String type;
    @Column(name = "size")
    private Long size;
    @Column(name = "created_at")
    private Timestamp createdAt;
}
