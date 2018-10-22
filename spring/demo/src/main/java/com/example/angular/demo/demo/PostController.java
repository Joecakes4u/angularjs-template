package com.example.angular.demo.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public ResponseEntity<Post> postPost(@RequestBody Post post) {
        return new ResponseEntity<Post>(post, HttpStatus.OK);
    }
}