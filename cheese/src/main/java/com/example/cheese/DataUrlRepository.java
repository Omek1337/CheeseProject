package com.example.cheese;

import org.springframework.data.repository.CrudRepository;

public interface DataUrlRepository extends CrudRepository<UrlData, Integer> {

	Iterable<UrlData> findAll();

}
