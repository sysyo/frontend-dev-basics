<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
// DOM Load Event
// 1. load : 모두 다(DOM - element html 태그들, CSSOM, Image) 로딩
// 2. DOMContentLoaded : DOM만 로딩 되었을 때 (CSSOM x, Image x)
window.addEventListener("DOMContentLoaded", function(){
// 	console.log("!!!!!");
	document
		.getElementsByTagName("button")[0] // 배열로 가져올 것 한 개만
		.addEventListener('click', function(){
// 			console.log("click 했다했다아와아앙");
			var xhr = null;
			// ActiveX를 화면에 만드는 방법
			if(window.ActiveXObject) { // <= IE8
				xhr = new ActiveXObject('Microsoft.XMLHTTP');
			} else if(window.XMLHttpRequest) {  // Other Standart Browser
												// window에 내장되어 있는가 ? / 내장객체의 존재여부 (window.Fucntion)
				xhr = new XMLHttpRequest(); 
			} else {
				console.log("Ajax 기능을 사용할 수 없습니다.");
				return;
			}
			
			xhr.addEventListener('readystatechange', function(){
				if(this.readyState == XMLHttpRequest.UNSENT) { // readyState0 // this는 xhr 
					// request 요청이 초기화되기 전
					console.log("State:UNSENT");
				
				} else if(this.readyState == XMLHttpRequest.OPENED) { // readyState1
					// 서버와 연결이 성공
					console.log("State:OPENED");
				
				} else if(this.readyState == XMLHttpRequest.HEADERS_RECEIVED) { // readyState2
					// 서버가 request를 받음
					console.log("State:HEADERS_RECEIVED");

				} else if(this.readyState == XMLHttpRequest.LOADING) { // readyState3
					// response 처리 중
					console.log("State:LOADING");

				} else if(this.readyState == XMLHttpRequest.DONE) { // readyState4 // 통신 끝, 처리해주기 
					// response 처리가 끝남
					console.log("State:DONE");

				// url이 잘못 되었을 수도 있을 때 - 404나...
				if(this.status != 200){ // 200에러 (404같은 것)
					console.error(this.state);
					return;
				}

// 				console.log(this.responseText, typeof(this.responseText));
				var response = JSON.parse(this.responseText);
// 				console.log(response, typeof(response));
				
				var html = "";
				html += ("<h2>" + response.data.no + "</h2>");
				html += ("<h3>" + response.data.name + "</h3>");
				html += ("<h4>" + response.data.message + "</h4>");
				
				document
					.getElementById("data")
					.innerHTML = html;
				
				}
			});
			
// 			console.log(xhr);
			xhr.open("get", '${pageContext.request.contextPath }/api/json', true); // (get방식 // url // 동기/비동기)
			xhr.send();
		});
}); 
</script>
</head>
<body>
	<h1>AJAX Test - JSON Format Data</h1>

	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>

<!-- readystate =4 모든 통신이 끝난 상태 -->
<!-- status =200 통신이 성공한 상태 -->