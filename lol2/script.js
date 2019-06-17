$(document).ready(function(){
  $(".btn-outline-secondary").click(function(){
	  let searchText = $("input").val();
    var xhr = $.get("http://api.giphy.com/v1/gifs/random?tag="+ searchText +"&api_key=yJspXO0cdlYjEVqEGdLCUCxhgU7WJGpv");
	
    
		xhr.done(function(data) { 		
			console.log("success got data", data);
			let str = "";
			//for (i=0; i<10; i++) {
				let obj =((data.data.images.original.url));	
				 str = '<div class="gif"><img class = "d-block w-100 " src= "'+ obj +'" ></div>' + str;
			  $(".gifcontent").html(str);
			  $(".alert-warning").addClass("show");
			  $(".btn-outline-info").removeClass("invisible");
			  $("#gifURLinfo").html(obj);
			  
			//}
		});
	  
		
	  
	  
	});
	 $(".btn-outline-info").click(function(){
		$(".alert-info").removeClass("invisible");
	  });
		  
	 $(".close").click(function(){
		$(".alert-info").addClass("invisible");
	  });
	  
	// $(".carousel-control-next-icon").click((event) => {
	//	console.log(event)
	//	let activeGif = $(".active").first();
	//	$(activeGif).removeClass("active");
	//	$(activeGif).next().addClass("active");
	//});
});
