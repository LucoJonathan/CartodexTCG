package fr.jonathanluco.cartodextcg_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "fr.jonathanluco.cartodextcg_back")
public class CartodextcgBackApplication {
	public static void main(String[] args) {
		SpringApplication.run(CartodextcgBackApplication.class, args);
	}
}
