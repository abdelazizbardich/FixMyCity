package com.abdelazizbardich.fixmycity.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

//@MappedSuperclass
@Entity @Table(name = "users")
@Inheritance(strategy = InheritanceType.JOINED)
@Getter @Setter
@RequiredArgsConstructor
public class User implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "user_id")
    private Long userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "login", unique = true, updatable = false)
    private String login;

    @Column(name = "email", unique = true)
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "password")
    private String password;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "role_id")
    private Role role;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "remember_token")
    private String rememberToken;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "is_active")
    private Boolean isActive;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "created_at")
    private Timestamp createdAt;





}