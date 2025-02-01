package fr.jonathanluco.cartodextcg_back.mappers.user;

import fr.jonathanluco.cartodextcg_back.dtos.UserDetailsDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.generic.base.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface UserDetailsDtoMapper extends GenericMapper<UserDetailsDto, User> {
}
