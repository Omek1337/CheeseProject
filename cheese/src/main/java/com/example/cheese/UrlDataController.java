package com.example.cheese;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
	public @ResponseBody String getAllData (@RequestParam String url,
											@RequestParam String url_mp4,
											@RequestParam String searchTag) {
		UrlData d = new UrlData();
		
		d.setUrl(url);
		d.setUrl_mp4(url_mp4);
		d.setSearchTag(searchTag);
		
		dataUrlRepository.save(d);
		
		return "All done b*tch!";
	}
	@GetMapping(path="/allData")
	public @ResponseBody Iterable<UrlData> getAllData() {
		return dataUrlRepository.findAll();
	}
}
