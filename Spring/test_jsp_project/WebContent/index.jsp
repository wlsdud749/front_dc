<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Hello JSP world</h1>
<%
for(int i=0; i<10; i++) {
	out.println("<h3>안녕하세요 JSP입니다.</h3>");
}
%>
<h3>안녕하세요 JSP입니다.</h3>
</body>
</html>