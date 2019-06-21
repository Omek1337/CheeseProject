package com.example.cheese;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataUrlRepository extends CrudRepository<UrlData, Integer> {

	Iterable<UrlData> findAll();

}
