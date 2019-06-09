package com.security.demospringsecurity.controller;

import com.security.demospringsecurity.model.Question;
import com.security.demospringsecurity.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class RestQuestionController {
    @Autowired
    QuestionService questionService;


    @GetMapping("/api/questions/")
    public ResponseEntity<List<Question>> getAllQuestion() {
        List<Question> questions = (List<Question>) questionService.findAll();
        if (questions.isEmpty()) {
            return new ResponseEntity<List<Question>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Question>>(questions, HttpStatus.OK);
    }


    @GetMapping("/api/questions/{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable("id") Long id) {
        Question question = questionService.findById(id);
        if (question == null) {
            return new ResponseEntity<Question>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Question>(question, HttpStatus.OK);
    }
}
