<%@page import="org.comstudy.myapp.saram.model.SaramDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>NewFile.jsp</title>
</head>
<body>
<h1>webapp/NewFile.jsp 입니다.</h1>
<p>WEB-INF 폴더의 내용은 외부에서 접근 불가능 하다.<br/>
webapp은 root 디렉토리이므로 현재 프로젝트의 홈디렉토리가 된다. (외부에서 내용 접근 가능)
</p>

<p>
Project Lombok 은 빈을 생성 하거나 할때 자동으로 멤버를 만들어주는 어노테이션 제공
</p>

<%
// 스크립트 릿 - JAVA 문법 사용
// JSP 파일을 Tomcat에서 실행 화면 Servlet 클래스로 만들어진다.
// 스크립트 릿 안에 있는 내용들은 _service() 메소드 내용에 포함된다.

SaramDTO dto = new SaramDTO();
dto.setIdx(100);
dto.setId("Hong");
dto.setName("홍길동");
dto.setAge(26);


out.println(dto);
%>
</body>
</html>