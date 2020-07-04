package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.CurrencyHistory;

@Repository
public interface CurrencyHistoryRepository extends JpaRepository<CurrencyHistory, Long > {

}
