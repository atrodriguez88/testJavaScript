//Ajax con Javascript (requests )
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myJSON = this.responseText;
            var myObj = JSON.parse(myJSON);
            document.getElementById("test").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "json.txt", true);
    xhttp.send();}

//Ajax con Javascript (requests )
function ajax () {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			for(var k = 0, length3 = json.length; k < length3; k++){
				$("#tbody").append("<tr><td>"+json[k].id+"</td>" + "<td>"+json[k].name+"</td>"+ "<td>"+
					json[k].price+"</td>"+"<td>"+json[k].tags[0]+"</td>"+"<td>"+json[k].tags[1]+"</td>"+ "<td>"+
					json[k].address[0].home +"</td>"+"<td>"+json[k].address[1].work +"</td>"+ "<td>"+
					json[k].sex.mujer.ojos +"</td>"+"</tr>");
			}
		}
	}
	xhttp.open("GET", "json.txt",true);	
	xhttp.send();
}

//Ajax con Jquery (requests )
jQuery(document).ready(function($) {
    $("#jbutton").click(function(event) {
    	$.ajax({
            url: 'json.txt',
            type: 'GET',
            dataType: 'JSON',
        })
        .done(function(json) {
            console.log("success");
            for(var k = 0, length3 = json.length; k < length3; k++){
				$("#tbody").append("<tr><td>"+json[k].id+"</td>" + "<td>"+json[k].name+"</td>"+ "<td>"+
					json[k].price+"</td>"+"<td>"+json[k].tags+"</td>"+"</tr>");
			}
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
    });
    $("#sjbutton").click(function(event) {
    	var order = {
    	    			id:3,
    	    			name: 'Larisa',
    	    			price:30.5,
    	    			tags:["bed","pink"],
    	    			address: [{"home":"17 Rto September 5"}, {"work":"Sol 25 %12 and"}]
    	    		}
    	$.ajax({
    	    		url: 'http://rest.learncode.academy/api/learncode/friends',
    	    		type: 'POST',
    	    		dataType: 'JSON',    	    		
    	    		data: order,
    	    	})
    	    	.done(function(data) {
    	    		console.log("success");
    	    		$("#tbody").append("<tr><td>"+ data.id +"</td>" + "<td>" +  data.name + "</td>"+ "<td>"+
    	    			 data.price + "</td>" + "<td>" +  data.tags + "</td>" + "</tr>");
    	    		/*$("#respuesta").html(data); // Mostrar la respuestas del script PHP.*/
    	    	})
    	    	.fail(function() {
    	    		console.log("error");
    	    	})
    	    	.always(function() {
    	    		console.log("complete");
    	    	});
    	    	    	
    });
});
