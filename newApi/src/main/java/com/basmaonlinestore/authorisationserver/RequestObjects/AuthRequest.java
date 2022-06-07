package com.basmaonlinestore.authorisationserver.RequestObjects;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@RequiredArgsConstructor
@ToString
public class AuthRequest {
    private String firstName;
    private String lastName;
    private String login;
    private String password;
}
