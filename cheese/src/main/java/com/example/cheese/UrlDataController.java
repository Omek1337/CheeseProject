package com.example.cheese;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@RequestMapping(path="/cheese", method = RequestMethod.POST)
public class UrlDataController {
	@Autowired
	private DataUrlRepository dataUrlRepository;
	
	@GetMapping(path="/addData")
	public @ResponseBody String  getAllData (@RequestParam String url,
											@RequestParam String url_mp4,
											@RequestParam String searchTag) {
		UrlData d = new UrlData(0, url, url_mp4, searchTag);
		
		d.setUrl(url);
		d.setUrl_mp4(url_mp4);
		d.setSearchTag(searchTag);
		
		dataUrlRepository.save(d);
		return "{}";
	}
	@GetMapping(path="/allData")
	public @ResponseBody Object getAllData() {
		Object a  = dataUrlRepository.findAll();
		return a;
	}
	
	@RequestMapping(path="/getDataById")
	public @ResponseBody Object findById(@RequestParam long id) {
		Object b = dataUrlRepository.findById(id);		
		return b;
	}
	
	@RequestMapping(path="/deleteData", method = RequestMethod.DELETE)	
	public void deleteData(@RequestParam long id) {
		Optional<UrlData> data = dataUrlRepository.findById(id);	
		dataUrlRepository.delete(data.get());
		
	}
	
	@RequestMapping(path="/updateData", method = RequestMethod.PUT)
	public void updateData( @RequestParam long id,
							@RequestParam String url,
							@RequestParam String url_mp4,
							@RequestParam String searchTag) {
		
		UrlData d = new UrlData(id, url, url_mp4, searchTag);
		
		d.setUrl(url);
		d.setUrl_mp4(url_mp4);
		d.setSearchTag(searchTag);
		
		dataUrlRepository.save(d);
	}
	
}
