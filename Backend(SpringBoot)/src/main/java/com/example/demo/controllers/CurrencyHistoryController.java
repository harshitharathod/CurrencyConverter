package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.CurrencyHistory;
import com.example.demo.repositories.CurrencyHistoryRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Controller
@RequestMapping("/api")
public class CurrencyHistoryController {

	@Autowired
	private CurrencyHistoryRepository currencyHistoryRepository;

	@GetMapping("/getHistories")
	public List<CurrencyHistory> getAllProxies() {
		return currencyHistoryRepository.findAll();
	}


	@PostMapping("/postHistory")
	public CurrencyHistory createHistory(@RequestBody CurrencyHistory history) {
		return currencyHistoryRepository.save(history);
	}

}
