package com.example.cheese;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity  // This tells Hibernate to make a table out of this class
public class UrlData {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String url;
	private String url_mp4;
	private String searchTag;
	
	
	
	
	public UrlData(long id, String url, String url_mp4, String searchTag) {
		super();
		this.id = id;
		this.url = url;
		this.url_mp4 = url_mp4;
		this.searchTag = searchTag;
	}

	public UrlData() {
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getUrl_mp4() {
		return url_mp4;
	}
	
	public void setUrl_mp4(String url_mp4) {
		this.url_mp4 = url_mp4;
	}
	
	public String getSearchTag() {
		return searchTag;
	}
	
	public void setSearchTag(String searchTag) {
		this.searchTag = searchTag;
	}
	
	
	
	
	
}