package com.abdelazizbardich.fixmycity.services;

import com.abdelazizbardich.fixmycity.repositories.UserRepository;
import com.abdelazizbardich.fixmycity.models.User;
import com.abdelazizbardich.fixmycity.security.UserSecurity;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
@Transactional
public class UDService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByLogin(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new UserSecurity(user);
    }
}
