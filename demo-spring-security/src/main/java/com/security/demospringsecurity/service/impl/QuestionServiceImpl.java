package com.security.demospringsecurity.service.impl;


import com.security.demospringsecurity.model.Question;
import com.security.demospringsecurity.repository.QuestionRepository;
import com.security.demospringsecurity.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    QuestionRepository questionRepository;

    @Override
    public Iterable<Question> findAll() {
        return questionRepository.findAll();
    }

    @Override
    public Question findById(Long id) {
        return questionRepository.findById(id).get();
    }
}