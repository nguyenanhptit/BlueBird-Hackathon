package com.security.demospringsecurity.repository;

import com.security.demospringsecurity.model.Question;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionRepository extends PagingAndSortingRepository<Question, Long> {
}

