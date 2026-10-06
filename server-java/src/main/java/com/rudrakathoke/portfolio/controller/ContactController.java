package com.rudrakathoke.portfolio.controller;

import com.rudrakathoke.portfolio.model.ContactMessage;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/java/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @PostMapping
    public ResponseEntity<Map<String, Object>> handleContactSubmission(@Valid @RequestBody ContactMessage message) {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "SUCCESS");
        response.put("service", "SPRING_BOOT_3_JAVA_17");
        response.put("message", "Contact message validated and logged successfully for Rudra Kathoke.");
        response.put("sender", message.getName());
        response.put("email", message.getEmail());
        response.put("timestamp", message.getCreatedAt());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> status = new HashMap<>();
        status.put("status", "UP");
        status.put("microservice", "Java Spring Boot Guestbook & Contact");
        status.put("validation", "Jakarta Bean Validation Active");
        status.put("developer", "Rudra Kathoke (RBU CGPA 9.2)");
        return ResponseEntity.ok(status);
    }
}
