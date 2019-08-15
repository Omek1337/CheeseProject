$(document).ready(function(){
	var dataId = "";
	var dataUrl = "";
	var dataUrl_mp4 = ""; 
	var dataTag = "";
	var dataUserName = "";
	
	
	$(".btn-put").click(function(){
		 dataId = $("#dataId").val();
		 dataUserName = $("#dataUserName").val();
		 dataUrl = $("#dataUrl").val();
		 dataUrl_mp4 = $("#dataUrl_mp4").val();
		 dataTag = $("#dataTag").val();
		var lol = "http://localhost:8080/cheese/updateData?id="+ dataId +"&url="+ dataUrl +"&url_mp4="+ dataUrl_mp4 +"&searchTag="+ dataTag+ "&userName="+ dataUserName;
		$.ajax({
			   url: lol,
			   type: 'PUT',
			   success: function(response) {
			     console.log(response);
			   }
		});
	});
	
	$(".btn-table").click(function(){
		var xhr = $.get("http://localhost:8080/cheese/allData");	    
		xhr.done(function(data) { 
			console.log(data);
			$('tbody').empty();
			for (var i = 0; i < data.length; i++) {
			    var tr = $('<tr/>');
			    
			    // Indexing into data.report for each td element
			    $(tr).append("<td>" + data[i].id + "</td>");
			    $(tr).append("<td>" + data[i].url + "</td>");
			    $(tr).append("<td>" + data[i].url_mp4 + "</td>");
			    $(tr).append("<td>" + data[i].searchTag + "</td>");
			    $(tr).append("<td>" + data[i].userName + "</td>");
			    $('tbody').append(tr);
			  }
		});	

	});
	var dataLength = "";
	$(".btn-outline-danger").click(function(){
		let dataId = $("#inputIdDelete").val();
		console.log(dataId);
		var lol = "http://localhost:8080/cheese/deleteData?id="+dataId;
		$.ajax({
			   url: lol,
			   type: 'DELETE',
			   success: function(response) {
				   
			   }
		});
	});
});