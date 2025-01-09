package fr.jonathanluco.cartodextcg_back.dtos;

import fr.jonathanluco.cartodextcg_back.generic.dto.DtoGeneric;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto extends DtoGeneric {
    private String username;
    private String firstName;
    private String lastName;
    private String email;
}
