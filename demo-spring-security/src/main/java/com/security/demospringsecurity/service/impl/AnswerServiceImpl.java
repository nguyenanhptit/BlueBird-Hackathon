package com.security.demospringsecurity.service.impl;

import com.security.demospringsecurity.model.Answer;
import com.security.demospringsecurity.repository.AnswerRepository;
import com.security.demospringsecurity.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    AnswerRepository answerRepository;

    @Override
    public Iterable<Answer> findAll() {
        return answerRepository.findAll();
    }

    @Override
    public Answer findById(Long id) {
        return answerRepository.findById(id).get();
    }
}