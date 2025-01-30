package fr.jonathanluco.cartodextcg_back.dtos;

import fr.jonathanluco.generic.base.dto.BaseDto;
import lombok.*;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class UserDto extends BaseDto{
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Set<String> roles;
}
