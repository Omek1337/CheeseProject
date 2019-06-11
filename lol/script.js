$(document).ready(function(){
  
  $('button').click(function(){
    
	let number = $("#number").val();
	let type = $("#type").val();
    
     $.ajax({  
       type: "GET",  
       url: "http://numbersapi.com/" + number + "/" + type,
       dataType : "text",
	   //data : ajaxRequest,
       success: function(data) {
		   console.log(data);
         $("#content").text(data);
         
       }
     });
    
  });
});