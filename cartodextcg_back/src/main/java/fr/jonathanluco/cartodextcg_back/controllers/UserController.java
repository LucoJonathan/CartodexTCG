package fr.jonathanluco.cartodextcg_back.controllers;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.services.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService service;


    @GetMapping(value = "/getUser/{id}", produces = MediaType.APPLICATION_NDJSON_VALUE)
    public ResponseEntity<UserDto> getUserById(@PathVariable long id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, params = {"page", "size"})
    public ResponseEntity<Page<UserDto>> getAllUsersByPage(Pageable pageable) {
        return ResponseEntity.ok(service.findAll(pageable));
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
