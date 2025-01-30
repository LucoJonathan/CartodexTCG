package fr.jonathanluco.cartodextcg_back.controllers;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.services.UserService;
import fr.jonathanluco.generic.base.controller.GenericController;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserController extends GenericController<UserDto, UserService> {
    protected UserController(UserService service){
        super(service);
    }

    @Autowired
    private UserService service;

    @PostMapping(value = "/register" , consumes = "multipart/form-data", produces = "application/json")
    public ResponseEntity<UserDto> register(@ModelAttribute UserDto userDto){
        service.registerUser(userDto);
        return ResponseEntity.ok(userDto);
    }
}
