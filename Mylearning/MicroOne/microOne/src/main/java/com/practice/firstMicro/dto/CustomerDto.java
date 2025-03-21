package com.practice.firstMicro.dto;

public class CustomerDto {
	private Long customerId;
	private String customerName;
	private String phoneNumber;
	//private OrdersDto orders;
	private ProductsDto cartItems;
	
	public ProductsDto getCartItems() {
		return cartItems;
	}
	public void setCartItems(ProductsDto cartItems) {
		this.cartItems = cartItems;
	}
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
//	public OrdersDto getOrders() {
//		return orders;
//	}
//	public void setOrders(OrdersDto orders) {
//		this.orders = orders;
//	}
	
	
}
