package com.security.demospringsecurity.repository;


import com.security.demospringsecurity.model.Answer;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AnswerRepository extends PagingAndSortingRepository<Answer, Long> {
}
