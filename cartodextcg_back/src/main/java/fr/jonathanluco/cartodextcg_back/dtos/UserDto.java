package fr.jonathanluco.cartodextcg_back.dtos;

import fr.jonathanluco.cartodextcg_back.generic.dto.DtoGeneric;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class UserDto extends DtoGeneric {
    private String username;
    private String firstName;
    private String lastName;
    private String email;
}
