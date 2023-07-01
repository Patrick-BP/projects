package com.patrick.recipes;

import com.patrick.recipes.domain.*;
import com.patrick.recipes.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.util.ArrayList;

@SpringBootApplication
public class RecipesApplication implements CommandLineRunner {
	@Autowired
	UserRepository userRepository;


	public static void main(String[] args) {
		System.out.println("===Start===");
		SpringApplication.run(RecipesApplication.class, args);

		System.out.println("===End===");
	}




	@Override
	public void run(String... args) throws Exception {
		//populateDb();
	}
	private void populateDb() {
		var user1 = User.builder()
				.firstName("Biseng")
				.lastName("Patrick")
				.email("pappybp@gmail.com")
				.password("123")
				.role(Role.ADMIN)
				.isApproved(true)
				.properties(new ArrayList<>())
				.build();

		var user2 = User.builder()
				.firstName("Damas")
				.lastName("Romeo")
				.email("dams@gmail.com")
				.password("123")
				.role(Role.OWNER)
				.isApproved(true)
				.properties(new ArrayList<>())
				.build();

		var user3 = User.builder()
				.firstName("Kaboss")
				.lastName("Chadia")
				.email("kaboss@gmail.com")
				.password("123")
				.role(Role.CUSTOMER)
				.isApproved(true)
				.properties(new ArrayList<>())
				.build();

		var address = Address.builder()
				.street("1000 N. 4th Street")
				.city("Fairfield")
				.state(State.valueOf("IA"))
				.zipCode("52557")
				.build();

		var property1 = Property.builder()
				.address(address)
				.description("Good house here")
				.price(400000)
				.numberOfBathrooms(2)
				.numberOfBeds(4)
				.builtYear(1990)
				.size(500)
				.createdAt(LocalDateTime.now())
				.build();

//		user2.setProperties(List.of(property1));
		user2.addProperty(property1);
		property1.setOwner(user2);

		userRepository.save(user1);
		userRepository.save(user2);
		userRepository.save(user3);


	}
}
