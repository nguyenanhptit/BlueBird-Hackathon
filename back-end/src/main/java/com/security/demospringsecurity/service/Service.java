package com.security.demospringsecurity.service;


public interface Service<T> {
    Iterable<T> findAll();
    T findById(Long id);
}
