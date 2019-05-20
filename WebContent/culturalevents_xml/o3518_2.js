var start = 1;
var end = 3;
var num = 3;
window.onload = function() {
	handleRefresh();
}
var jenrename="";
var urlString = location.href;
/*
 * var start = 1; var end = 3;
 */

function handleRefresh() {
	console.log("here");

	url = "http://openapi.seoul.go.kr:8088/4a554a737277616e38326b57565269/xml/culturalEventInfo/"
			+ start + "/" + end + "/"+jenrename;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			updateCulture(this);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function first() {
	$(document).ready(function() {
		$("#cultures").empty();
	});
	start = 1;
	end = 3;
	handleRefresh();
}

function finish() {
	var checkvalue = $("#jenre option:selected").val();
    $(document).ready(function() {
		$("#cultures").empty();
	});
    
    if(checkvalue == 0){
		start = 176; end = 178;
	}else if(checkvalue == 1){
		start = 11; end = 13;
	}else if(checkvalue == 2){
		start = 55; end = 57;
	}else if(checkvalue == 3){
		start = 20; end = 21;
	}else if(checkvalue == 4){
		start = 6; end = 8;
	}else if(checkvalue == 5){
		start = 44; end = 46;
	}
	handleRefresh();
}


function next(){
	var checkvalue = $("#jenre option:selected").val();
    $(document).ready(function() {
		$("#cultures").empty();
	});
    
    if(checkvalue == 0){
    	if(end < 176){
    		start += num;
    		end += num;
	}}else if(checkvalue == 1){
		if(end < 11){
    		start += num;
    		end += num;
		}}else if(checkvalue == 2){
		if(end < 55){
    		start += num;
    		end += num;
		}}else if(checkvalue == 3){
		if(end < 20){
    		start += num;
    		end += num;
		}}else if(checkvalue == 4){
		if(end < 6){
    		start += num;
    		end += num;
		}}else if(checkvalue == 5){
		if(end < 44){
    		start += num;
    		end += num;
		}}
	handleRefresh();
}

function previous(){
	if(start > 0){
		$(document).ready(function() {
			$("#cultures").empty();
		});
		start -= num;
		end -= num;
		handleRefresh();
	}
}

function search(){
	var checkvalue = $("#jenre option:selected").val();
	    console.log("ㅇㄹㄴㅇ"+checkvalue);
	    $(document).ready(function() {
			$("#cultures").empty();
		});
		start = 1;
		end = 3;
	if(checkvalue == 0){
		jenrename= "";
	}else if(checkvalue == 1){
		jenrename= "국악";
	}else if(checkvalue == 2){
		jenrename= "콘서트";
	}else if(checkvalue == 3){
		jenrename= "연극";
	}else if(checkvalue == 4){
		jenrename= "무용";
	}else if(checkvalue == 5){
		jenrename= "클래식";
	}

		console.log(url);
		handleRefresh();
}

function updateCulture(xml) {
	var culturesDiv = document.getElementById("cultures");
	var xmlDoc = xml.responseXML;
	cultures = xmlDoc.getElementsByTagName("row");


	for (var i = 0; i < num; i++) {

		var culture = cultures[i];
		var div = document.createElement("div");
		div.setAttribute("class", "culture");

		/*
		 * div.innerHTML = "<table><tr><td>"+culture.getElementsByTagName("CODENAME")[0].childNodes[0].nodeValue +"</td><td>"+culture.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +"</td><td>"+culture.getElementsByTagName("DATE")[0].childNodes[0].nodeValue +"</td><td>"+culture.getElementsByTagName("PLACE")[0].childNodes[0].nodeValue +"</td><td>"+culture.getElementsByTagName("ORG_NAME")[0].childNodes[0].nodeValue +"</td><td>"+culture.getElementsByTagName("USE_TRGT")[0].childNodes[0].nodeValue +"</td><td>"+culture.getElementsByTagName("USE_FEE")[0].childNodes[0].nodeValue +"</td></tr></table>"; }
		 */

		div.innerHTML = "분야: "
				+ culture.getElementsByTagName("CODENAME")[0].childNodes[0].nodeValue
				+ "<br>제목 : "
				+ culture.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
				+ "<br>기간 : "
				+ culture.getElementsByTagName("DATE")[0].childNodes[0].nodeValue
				+ "<br>장소 : "
				+ culture.getElementsByTagName("PLACE")[0].childNodes[0].nodeValue
				+ "<br>기관명 : "
				+ culture.getElementsByTagName("ORG_NAME")[0].childNodes[0].nodeValue
				+ "<br>이용대상 : "
				+ culture.getElementsByTagName("USE_TRGT")[0].childNodes[0].nodeValue
				+ "<br>이용요금 : "
				+ culture.getElementsByTagName("USE_FEE")[0].childNodes[0].nodeValue;

		if (culturesDiv.childElementCount == 0) {
			culturesDiv.appendChild(div);
		} else {
			culturesDiv.insertBefore(div, culturesDiv.firstChild);
		}
	}
}

