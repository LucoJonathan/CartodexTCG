package fr.jonathanluco.cartodextcg_back.dtos;

import fr.jonathanluco.generic.base.dto.BaseDto;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class UserDetailsDto extends BaseDto {
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
}
