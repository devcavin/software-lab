package io.github.devcavin.roasteryops.service;

import io.github.devcavin.roasteryops.dto.CoffeeRequest;
import io.github.devcavin.roasteryops.dto.CoffeeResponse;
import io.github.devcavin.roasteryops.entity.Coffee;
import io.github.devcavin.roasteryops.repository.CoffeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CoffeeService {
    private final CoffeeRepository coffeeRepository;

    public CoffeeService(CoffeeRepository coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
    }

    // find coffee by id
    public Optional<CoffeeResponse> coffeeById(UUID coffeeId) {
        Coffee coffee = coffeeRepository.findById(coffeeId).orElse(null);

        return Optional.ofNullable(coffee).map(CoffeeResponse::from);
    }

    // save coffee
    public CoffeeResponse saveCoffee(CoffeeRequest request) throws IllegalArgumentException {
        Coffee entity = Coffee.toEntity(request);

        if (coffeeRepository.existsById(entity.getId())) {
            throw new IllegalArgumentException("Coffee already exists");
        }

        Coffee newCoffee = coffeeRepository.save(entity);
        return CoffeeResponse.from(newCoffee);
    }

    // fetch all
    public List<CoffeeResponse> findAllCoffee() {
        return coffeeRepository.findAll().stream().map(CoffeeResponse::from).toList();
    }

    // update
    public CoffeeResponse updateCoffee(UUID id, CoffeeRequest request) {
        Coffee existingCoffee = coffeeRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("Coffee not found")
        );

        existingCoffee.setName(request.name());
        return CoffeeResponse.from(coffeeRepository.save(existingCoffee));
    }

    // delete
    public void deleteCoffee(UUID id) {
        Coffee coffeeExists = coffeeRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("Coffee not found")
        );
        coffeeRepository.delete(coffeeExists);
    }
}
