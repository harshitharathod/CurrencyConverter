package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CurrencyHistory")
public class CurrencyHistory {
	
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;

	private String conversion_from;

	private String conversion_to;
	private String date;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getConversion_from() {
		return conversion_from;
	}
	public void setConversion_from(String conversion_from) {
		this.conversion_from = conversion_from;
	}
	

	public String getConversion_to() {
		return conversion_to;
	}
	public void setConversion_to(String conversion_to) {
		this.conversion_to = conversion_to;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

	

}
