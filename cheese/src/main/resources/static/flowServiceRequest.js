$(document).ready(function(){

	$("#btn-send-flow-request").click(function(){
		var name = $("#name-input").val();
		$('#greeting').html("Thanks "+ name +" for presing the button, I appreciate it <3")
		console.log(name);
		var xhr = $.get("http://localhost:8080/cheese/getWmData?name=" + name);
		xhr.done(function(data) { 
			console.log(data);
			
			let chuckNorrisAPI = "<div class='col'><h2>ChuckNorrisAPI</h2><p class='cool-text'>"+ data.wMResponse.ChuckNorrisAPI.joke +"</p></div>";
			let dogsAPI = "<div class='col'><h2>DogAPI</h2><img src='"+ data.wMResponse.DogAPI.imgUrl +"' class='img-thumbnail'></div>";
			let weatherAPI ="<div class='col'><h2>WeatherAPI</h2>\
								<div class='card text-white bg-secondary mb-3' style='max-width: 18rem;'>\
								  <div class='card-header'>Weather for today</div>\
								  <div class='card-body'>\
								  	<table>\
								  		<thead>\
										    <tr>\
											    <th scope='col'>Parameter</th>\
											    <th scope='col'>Value</th>\
										    </tr>\
									    </thead>\
									    <tbody>\
										    <tr>\
										      <th scope='row'>Temp</th>\
										      <td>"+ data.wMResponse.WeatherAPI.temp +" &#8451;</td>\
										    </tr>\
										    <tr>\
										      <th scope='row'>Min-Temp</th>\
										      <td>"+ data.wMResponse.WeatherAPI.min_temp +" &#8451;</td>\
										    </tr>\
										    <tr>\
										      <th scope='row'>Max-Temp</th>\
										      <td>"+data.wMResponse.WeatherAPI.max_temp  +" &#8451;</td>\
										    </tr>\
										    <tr>\
										      <th scope='row'>Pressure</th>\
										      <td>"+ data.wMResponse.WeatherAPI.pressure +" hPa</td>\
										    </tr>\
										    <tr>\
										      <th scope='row'>Wind-Speed</th>\
										      <td>"+ data.wMResponse.WeatherAPI.wind_speed +" km/h</td>\
										    </tr>\
										</tbody>\
									</table>\
								  </div>\
								</div>\
							</div>";
			console.log(data.wMResponse.WeatherAPI.temp);
			console.log(weatherAPI);
			$('.content').html(chuckNorrisAPI + dogsAPI + weatherAPI);
		});

	});
});