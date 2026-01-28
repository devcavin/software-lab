package io.github.devcavin.sbdatajpa;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SbDataJpaApplication {

    public static void main(String[] args) {
        SpringApplication.run(SbDataJpaApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository studentRepository) {

        Student student = new Student(
                "John",
                "Doe",
                "john.doe@email.domain",
                25
        );
        studentRepository.save(student);
        return args -> {};
    }

}
