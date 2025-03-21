package com.sample.cart.CartRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.cart.CartEntity.CartEntity;

public interface ICartRepo extends JpaRepository<CartEntity, Integer>{
	

}
