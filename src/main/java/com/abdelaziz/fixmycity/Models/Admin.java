package com.abdelaziz.fixmycity.Models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@PrimaryKeyJoinColumn(name = "user_id")
public class Admin extends User{

    public Admin() {
    }

    public Admin(Long id, String firstName, String lastName, String email, String username, String password, String rememberToken, Boolean isActive, Role role, Timestamp createdAt) {
        super(id, firstName, lastName, email, username, password, rememberToken, isActive, role, createdAt);
    }


}
