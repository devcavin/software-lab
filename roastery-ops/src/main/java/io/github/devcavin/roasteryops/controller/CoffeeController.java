package io.github.devcavin.roasteryops.controller;

import io.github.devcavin.roasteryops.dto.CoffeeRequest;
import io.github.devcavin.roasteryops.dto.CoffeeResponse;
import io.github.devcavin.roasteryops.service.CoffeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/coffees")
public class CoffeeController {

    private final CoffeeService coffeeService;

    public CoffeeController(CoffeeService coffeeService) {
        this.coffeeService = coffeeService;
    }

    // Create - POST /api/coffees
    @PostMapping
    public ResponseEntity<CoffeeResponse> createCoffee(@RequestBody CoffeeRequest request) {
        try {
            CoffeeResponse createdCoffee = coffeeService.saveCoffee(request);
            return new ResponseEntity<>(createdCoffee, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    // Get all - GET /api/coffees
    @GetMapping
    public ResponseEntity<List<CoffeeResponse>> getAllCoffees() {
        List<CoffeeResponse> coffees = coffeeService.findAllCoffee();
        return ResponseEntity.ok(coffees);
    }

    // Get by ID - GET /api/coffees/{id}
    @GetMapping("/{id}")
    public ResponseEntity<CoffeeResponse> getCoffeeById(@PathVariable UUID id) {
        return coffeeService.coffeeById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Update - PUT /api/coffees/{id}
    @PutMapping("/{id}")
    public ResponseEntity<CoffeeResponse> updateCoffee(@PathVariable UUID id,
                                                       @RequestBody CoffeeRequest request) {
        try {
            CoffeeResponse updatedCoffee = coffeeService.updateCoffee(id, request);
            return ResponseEntity.ok(updatedCoffee);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete - DELETE /api/coffees/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCoffee(@PathVariable UUID id) {
        try {
            coffeeService.deleteCoffee(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Optional: Partial update - PATCH /api/coffees/{id}
    @PatchMapping("/{id}")
    public ResponseEntity<CoffeeResponse> partialUpdateCoffee(@PathVariable UUID id,
                                                              @RequestBody CoffeeRequest request) {
        // For now, same as PUT since we only have one field
        // In a real app, you might want to only update provided fields
        try {
            CoffeeResponse updatedCoffee = coffeeService.updateCoffee(id, request);
            return ResponseEntity.ok(updatedCoffee);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }
}