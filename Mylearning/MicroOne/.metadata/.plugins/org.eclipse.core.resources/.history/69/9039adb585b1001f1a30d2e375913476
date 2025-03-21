package com.practice.firstMicro.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.firstMicro.entity.CustomerEntity;

@Repository
public interface ICustomerRepository extends JpaRepository<CustomerEntity, Long> {
	public Optional<CustomerEntity>  findByCustomerId(Long id);
	

}
