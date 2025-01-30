package fr.jonathanluco.cartodextcg_back.dtos;

import lombok.Data;

@Data
public class AuthRequest {
    private String email;
    private String password;
}
