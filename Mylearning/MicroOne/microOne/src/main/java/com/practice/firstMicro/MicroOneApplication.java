package com.practice.firstMicro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class MicroOneApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroOneApplication.class, args);
		System.out.println("ABCD");
	}
	@Bean
	public RestTemplate restTemplate()
	{
		return new RestTemplate();
	}

}
