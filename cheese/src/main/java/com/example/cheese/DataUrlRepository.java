package com.example.cheese;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataUrlRepository extends CrudRepository<UrlData, Integer> {
	
	boolean existsById(long id);
	
	Iterable<UrlData> findAll();
	Optional<UrlData> findById(long id);
	
	void delete(UrlData data);
	 
	
}
