package com.abdelazizbardich.fixmycity.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@PrimaryKeyJoinColumn(name = "user_id")
@Getter
@Setter
@RequiredArgsConstructor
public class Admin extends User{



}
