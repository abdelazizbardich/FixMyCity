//package com.abdelaziz.fixmycity.Services;
//
//import com.abdelaziz.fixmycity.Models.Admin;
//import com.abdelaziz.fixmycity.Models.Role;
//import com.abdelaziz.fixmycity.Models.User;
//import com.abdelaziz.fixmycity.Repositories.AdminRepository;
//import com.abdelaziz.fixmycity.Repositories.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//@RequiredArgsConstructor
//public class UserService implements UserDetailsService {
//
////    private final UserRepository userRepository;
////    private final PasswordEncoder passwordEncoder;
////    @Override
////    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
////        System.err.println("Username: "+username);
////        User user = userRepository.findOneByUsername(username);
////        System.out.println(user);
////        if(user == null){
////            System.err.println("User Not Found!");
////            throw new UsernameNotFoundException("User not found");
////        }else {
////            System.out.println("User found: "+ username);
////        }
////        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
////        authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));
////        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(), authorities);
////    }
////
////    public User findByUsername(String username){
////        return userRepository.findOneByUsername(username);
////    }
////
////    public List<User> getAll(){
////        return userRepository.findAll();
////    }
////
////    public Optional<User> findById(Long id){
////        return userRepository.findById(id);
////    }
////
////    public User addOrUpdate(User user){
////        user.setPassword(passwordEncoder.encode(user.getPassword()));
////        return userRepository.save(user);
////    }
////
////    public Boolean delete(User user){
////        try{
////            userRepository.delete(user);
////            return true;
////        }catch (Exception e){
////            return false;
////        }
////    }
//}
