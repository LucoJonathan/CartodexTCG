package fr.jonathanluco.cartodextcg_back.configuration;

import fr.jonathanluco.cartodextcg_back.filters.JwtAuthorizationFilter;
import fr.jonathanluco.cartodextcg_back.repositories.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfiguration {

   private final UserRepository userRepository;
   private final JwtAuthorizationFilter jwtAuthorizationFilter;

   public SecurityConfig(UserRepository userRepository, JwtAuthorizationFilter jwtAuthorizationFilter) {
       this.userRepository = userRepository;
       this.jwtAuthorizationFilter = jwtAuthorizationFilter;
   }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
       http = http.cors().and().csrf().disable();

       ht
    }


    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:5173")); // Autoriser React
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Méthodes autorisées
        configuration.setAllowedHeaders(List.of("*")); // Headers autorisés
        configuration.setAllowCredentials(true); // Autoriser les cookies / tokens d'authentification

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // Appliquer à toutes les routes
        return source;
    }
}