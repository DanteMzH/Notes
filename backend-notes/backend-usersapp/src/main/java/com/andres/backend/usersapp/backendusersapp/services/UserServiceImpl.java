package com.andres.backend.usersapp.backendusersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.andres.backend.usersapp.backendusersapp.models.IUser;
import com.andres.backend.usersapp.backendusersapp.models.dto.UserDto;
import com.andres.backend.usersapp.backendusersapp.models.dto.mapper.DtoMapperUser;
import com.andres.backend.usersapp.backendusersapp.models.entities.User;
import com.andres.backend.usersapp.backendusersapp.models.request.UserRequest;
import com.andres.backend.usersapp.backendusersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;



    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public List<UserDto> findAll() {
        List<User> users = (List<User>) repository.findAll();
        return users
                .stream()
                .map(u -> DtoMapperUser.builder().setUser(u).build())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserDto> findById(Long id) {
        return repository.findById(id).map(u -> DtoMapperUser
                .builder()
                .setUser(u)
                .build());

    }

    @Override
    @Transactional
    public UserDto save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return DtoMapperUser.builder().setUser(repository.save(user)).build();
    }

    @Override
    @Transactional
    public Optional<UserDto> update(UserRequest user, Long id) {
        Optional<User> o = repository.findById(id);
        User userOptional = null;
        if (o.isPresent()) {
            User userDb = o.orElseThrow();
            userDb.setUsername(user.getUsername());
            userDb.setEmail(user.getEmail());
            userOptional = repository.save(userDb);
        }
        return Optional.ofNullable(DtoMapperUser.builder().setUser(userOptional).build());
    }

    @Override
    @Transactional
    public void remove(Long id) {
        repository.deleteById(id);
    }


}
