package fr.cartodexTCG.cartodexTCG.controllers;

import fr.cartodexTCG.cartodexTCG.dtos.UserDto;
import fr.cartodexTCG.cartodexTCG.services.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_NDJSON_VALUE)
    public ResponseEntity<UserDto> getUserById(@PathVariable int id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @DeleteMapping(value = "/{id}")
    public void deleteUserById(@PathVariable int id) {
        service.deleteById(id);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<UserDto> saveUser(@ModelAttribute UserDto userDto) {
        return ResponseEntity.ok(service.save(userDto));
    }

    @PutMapping(value = "/update")
    public ResponseEntity<UserDto> updateUser(@ModelAttribute UserDto userDto) {
        return ResponseEntity.ok(service.update(userDto));
    }
}
