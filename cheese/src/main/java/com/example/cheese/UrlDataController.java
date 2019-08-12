package com.example.cheese;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResponseExtractor;
import org.springframework.web.client.RestTemplate;

@RestController 
@RequestMapping(path="/cheese", method = RequestMethod.POST)
public class UrlDataController {
	@Autowired
	private DataUrlRepository dataUrlRepository;
	
	@GetMapping(path="/addData")
	public @ResponseBody String  getAllData (@RequestParam String url,
											@RequestParam String url_mp4,
											@RequestParam String searchTag,
											@RequestParam String userName) {
		UrlData d = new UrlData(0, url, url_mp4, searchTag, userName);
		
		d.setUrl(url);
		d.setUrl_mp4(url_mp4);
		d.setSearchTag(searchTag);
		d.setUserName(userName);
		
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
							@RequestParam String searchTag,
							@RequestParam String userName) {
		
		UrlData d = new UrlData(id, url, url_mp4, searchTag, userName);
		d.setUrl(url);
		d.setUrl_mp4(url_mp4);
		d.setSearchTag(searchTag);
		d.setUserName(userName);
		
		dataUrlRepository.save(d);
	}
	
	@RequestMapping(path="/getWmData", method = RequestMethod.GET)
	public @ResponseBody Object getDataFromWebMethods(@RequestParam String name) {
		System.out.println("name:" + name);
		final String url = "http://dev.tip.corp.tele2.com:3402/rest/T2_Sandbox/_2019/andrejs_lipskis/InternshipProject/services?name="+ name;
		RestTemplate restTemplate = new RestTemplate();
		
		HttpHeaders headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");
		headers.set("Authorization", "Basic YW5kcmxpcHM6Mjk0MTEyMzVTZVJnITE=");

		HttpEntity entity = new HttpEntity(headers);

		ResponseEntity<String> response = restTemplate.exchange(
		    url, HttpMethod.GET, entity, String.class);
		System.out.println(response);
		return response;
	}
	
}
