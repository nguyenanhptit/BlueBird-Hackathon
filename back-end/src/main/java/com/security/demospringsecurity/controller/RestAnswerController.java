package com.security.demospringsecurity.controller;

import com.security.demospringsecurity.model.Answer;
import com.security.demospringsecurity.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@RestController
@CrossOrigin
public class RestAnswerController {
    @Autowired
    AnswerService answerService;


    @GetMapping("/api/answers/")
    public ResponseEntity<List<Answer>> getAllQuestion() {
        List<Answer> answers = (List<Answer>) answerService.findAll();
        if (answers.isEmpty()) {
            return new ResponseEntity<List<Answer>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Answer>>(answers, HttpStatus.OK);
    }


    @GetMapping("/api/answers/{id}")
    public ResponseEntity<List<Answer>> getQuestionById(@PathVariable("id") Long id) {
        Answer answer = answerService.findById(id);

        if (answer == null) {
            return new ResponseEntity<List<Answer>>(HttpStatus.NOT_FOUND);
        } else {
            ArrayList<Answer> answers = (ArrayList<Answer>) answerService.findAll();
            System.out.println("list = " + answers);
            ArrayList<Answer> answersResult = new ArrayList<>();
            HashSet hs = new HashSet();
            while (hs.size() < 3) {

                int num = (int) (Math.random() * 10) ;
                if (num == id+1 && num == id-1 ) {
                    continue;
                } else {
                    hs.add(num);
                    System.out.println("num = " + num);
                }

            }
            System.out.println("My hs" + hs);
            for (Object number : hs) {
                answersResult.add(answers.get((Integer) number ));
            }
            answersResult.add(answer);
            return new ResponseEntity<List<Answer>>(answersResult, HttpStatus.OK);
        }
    }
}
