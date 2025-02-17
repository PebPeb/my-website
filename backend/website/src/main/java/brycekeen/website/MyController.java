package brycekeen.website;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  // Marks this class as a controller for RESTful APIs
@RequestMapping("/api")  // Prefix for all mappings in this class
public class MyController {

    // Handles GET requests to "/api/data"
    @GetMapping("/data")
    public ResponseEntity<String> getData() {
        // Return a simple message as a response with HTTP status 200 (OK)
        return ResponseEntity.ok("This is some data from the backend!");
    }
}