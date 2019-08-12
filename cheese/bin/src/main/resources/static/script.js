$(document).ready(function(){
	$(".tabledata").css({"display": "block"});	
var lol = "";
	$(".btn-outline-secondary").click(function(){
	  let searchText = $(".input-tag").val();
	  var xhr = $.get("http://api.giphy.com/v1/gifs/random?tag="+ searchText +"&api_key=yJspXO0cdlYjEVqEGdLCUCxhgU7WJGpv");
	
    
		xhr.done(function(data) { 		
			console.log("success got data", data);
			let str = "";
			//for (i=0; i<10; i++) {
				let obj =(data.data.images.original.url);	
				
				var mp4obj = (data.data.image_mp4_url); 
				
				let pos1 = mp4obj.indexOf("media");
				let pos2 = mp4obj.indexOf(".giphy.");
				var res1 = mp4obj.slice(0, pos1);
				var res2 = mp4obj.slice(pos2,mp4obj.length);
				
				let mp4new= res1 + "i" + res2;
				
				$("#lol").attr("href",mp4new);
				
				
				 str = '<div class="gif"><img class = "d-block w-100 " src= "'+ obj +'" ></div>' + str;
			  $(".gifcontent").html(str);
			  $(".alert-warning").addClass("show");
			  $(".btn-outline-info").removeClass("invisible");
			  $("#gifURLinfo").html(obj);
			  
			  let userName = $(".input-name").val();
			  
			 lol = "http://localhost:8080/cheese/addData?url="+ obj +"&url_mp4="+ mp4new +"&searchTag="+ searchText+ "&userName=" + userName;
			 
			 return lol;
		});
	  	  
	  
	});
	 $(".btn-giveURL").click(function(){
		$(".alert-info").removeClass("invisible");
	  });
		  
	 $(".close").click(function(){
		$(".alert-info").addClass("invisible");
	  });
	  
	 $(".getmp4").click(function () {
		 
	  });
	 
	 $(".saveInDB").click(function () {
		 console.log(lol);
		 var xhr = $.get(lol);
		  xhr.done(function(data){
			  console.log(data);
		  })
	  });
	 
});
