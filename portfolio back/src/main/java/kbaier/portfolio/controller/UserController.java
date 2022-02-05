package kbaier.portfolio.controller;

import kbaier.portfolio.models.User;
import kbaier.portfolio.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    //get User by id
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/getUser/{id}")
    @ResponseBody
    public User getUserById(@PathVariable("id") int id) {
        return  userService.getUserById(id);
    }
}
