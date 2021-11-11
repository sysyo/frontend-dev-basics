<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){

	$("button").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/post02",
			async: true, 
			type: 'post',			// 요청 method
			dataType: 'json',		// 받을 포맷
			contentType: 'application/json',
			data: JSON.stringify(vo), 
			success: function(response) {
				console.log(response);
				
				var html = "";
				html += ("<h2>" + response.data.no + "</h2>");
				html += ("<h3>" + response.data.name + "</h3>");
				html += ("<h4>" + response.data.message + "</h4>");
				
				$("#data").append(html);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test - Restful API</h1>
	
	<button id = "create">Create(post)</button>
	<br /><br />
	
	<button id = "read">Read(get)</button>
	<br /><br />
	
	<button id = "update">Update(put)</button> 
	<br /><br />
	
	<button id = "delete">Delete(delete)</button>

</body>
</html>