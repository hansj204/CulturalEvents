window.onload = function() {
    handleRefresh();

}
var url;
var start = 1;
var end = 3;
var num = 3;
var jenrename="";
function handleRefresh() {
	console.log("here");
    url = "http://openapi.seoul.go.kr:8088/4a554a737277616e38326b57565269/json/" +
					"culturalEventInfo/"+start+"/"+end+"/"+jenrename;
			$.getJSON(url, updateCulture);
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
function updateCulture(cultures) {
	var culturesDiv = document.getElementById("cultures");
    var cultures = cultures.culturalEventInfo.row;

    
    for (var i = 0; i < cultures.length; i++) {
		var div = document.createElement("div");
		div.setAttribute("class", "cultureItem");

                div.innerHTML = "분야: " + cultures[i].CODENAME
        		+"<br>제목 : " + cultures[i].TITLE
        		+"<br>기간 : " + cultures[i].DATE
        		+"<br>장소 : " + cultures[i].PLACE
        		+"<br>기관명 : " + cultures[i].ORG_NAME
        		+"<br>이용대상 : " + cultures[i].USE_TRGT
        		+"<br>이용요금 : " + cultures[i].USE_FEE
        		;
        if (culturesDiv.childElementCount == 0) {
			culturesDiv.appendChild(div);
		}
		else {
			culturesDiv.insertBefore(div, culturesDiv.firstChild);
		}
    }

}