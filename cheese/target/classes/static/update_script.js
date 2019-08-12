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
	
	function removeUrlData(item) {
		var tr = item.parentNode.parentNode;
		console.log(tr.childNodes);
		if (tr.childNodes[1] = "td.id1") {
			console.log(tr.childNodes[1]);
		    $.ajax({
				   url: "http://localhost:8080/cheese/deleteData?id="+ tr.childNodes[1].innerHTML,
				   type: 'DELETE',
				   success: function(response) {
					   
				   }
			});
		    $('#table-body').empty();
			getAllData();
		}
	}

function updateUrlData(item) {
	var tr = item.parentNode.parentNode;
	console.log("kek");
		dataUrl = tr.childNodes[3].innerHTML;
		dataUrl_mp4 = tr.childNodes[5].innerHTML; 
		dataTag = tr.childNodes[7].innerHTML;
		dataUserName = tr.childNodes[9].innerHTML;
		
		var m = tr.ChildNodes;
		tr.childNodes[3].innerHTML = " <input type='text' placeholder='URL'>";
		tr.childNodes[5].innerHTML = " <input type='text' placeholder='URL_MP4'>";
		tr.childNodes[7].innerHTML = " <input type='text' class='small-input' placeholder='SEARCH_TAG'>";
		tr.childNodes[9].innerHTML = " <input type='text' class='small-input' placeholder='USER_NAME'>";
		tr.childNodes[13].innerHTML =  `
			<td><button type='button' onclick='saveUrlData(this)' class='btn btn-success'>YES</button></td>
			<td><button type='button' onclick='cancelUpdatingUrlData(this)' class='btn btn-warning'>NO</button></td>
		`;
		
	}

function cancelUpdatingUrlData(data) {
		var tr = data.parentNode.parentNode;
		tr.childNodes[3].innerHTML = dataUrl;
		tr.childNodes[5].innerHTML = dataUrl_mp4;
		tr.childNodes[7].innerHTML = dataTag;
		tr.childNodes[9].innerHTML = dataUserName;
		
		tr.childNodes[13].innerHTML = "<button type='button' onclick='updateUrlData(this)' class='btn btn-primary'>UPDATE</button>";
	}

function saveUrlData(data) {
	var tr = data.parentNode.parentNode;
	console.log(tr.childNodes[3].childNodes[0].nextSibling.value);
	tr.childNodes[3].innerHTML = tr.childNodes[3].childNodes[0].nextSibling.value;
	tr.childNodes[5].innerHTML = tr.childNodes[5].childNodes[0].nextSibling.value;
	tr.childNodes[7].innerHTML = tr.childNodes[7].childNodes[0].nextSibling.value;
	tr.childNodes[9].innerHTML = tr.childNodes[9].childNodes[0].nextSibling.value;
	
	tr.childNodes[13].innerHTML = "<button type='button' onclick='updateUrlData(this)' class='btn btn-primary'>UPDATE</button>";
	
	var lol = "http://localhost:8080/cheese/updateData?id="+ tr.childNodes[1].innerHTML +"&url="+ tr.childNodes[3].innerHTML +"&url_mp4="+ tr.childNodes[5].innerHTML +"&searchTag="+ tr.childNodes[7].innerHTML+ "&userName="+ tr.childNodes[9].innerHTML;
	$.ajax({
		   url: lol,
		   type: 'PUT',
		   success: function(response) {
		     console.log(response);
		   }
	});
}

function getAllData(){
		var xhr = $.get("http://localhost:8080/cheese/allData");
		var str = "";
		xhr.done(function(data) { 
			$('#dataTable').empty();
			for (var i = 0; i < data.length; i++) {
			    str += (`
		   				<tr>
				    		<td class="id1">${data[i].id}</td>
				            <td class="url1">${data[i].url}</td>
				            <td class="url_mp41">${data[i].url_mp4}</td>
				            <td class="searchTag1">${data[i].searchTag}</td>
				            <td class="userName1">${data[i].userName}</td>
				            <td><button type='button' onclick='removeUrlData(this)' class='btn btn-danger'>DELETE</button></td>
				            <td style='display: flex;'><button type='button' onclick='updateUrlData(this)' class='btn btn-primary'>UPDATE</button></td>
				    	</tr>
			    `);
			  }
			$('#table-body').append(str);
		});	
}



$( document ).ready(function() {
	getAllData();
});
