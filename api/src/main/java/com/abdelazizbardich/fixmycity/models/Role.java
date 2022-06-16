package com.abdelazizbardich.fixmycity.models;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "roles")
@RequiredArgsConstructor
@Getter
@Setter
public class Role implements Serializable {

    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long roleId;

    @Column(name = "name")
    private String name;

}
