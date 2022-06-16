package com.abdelazizbardich.fixmycity.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@PrimaryKeyJoinColumn(name = "user_id")
@Getter
@Setter
@RequiredArgsConstructor
public class Administration extends User{

    @Column(name = "phones")
    private ArrayList<String> phones;
    @Column(name = "lat")
    private String lat;
    @Column(name = "lan")
    private String lan;
    @ManyToOne
    private Specialisation specialisation;
}
