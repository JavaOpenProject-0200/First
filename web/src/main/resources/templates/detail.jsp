<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<jsp:include page="/WEB-INF/views/include/header.jsp" />
<div id="content">
	<h3>[ ${vo.name } ]고객 정보</h3>
	<table class='w-pct60'>
		<tr>
			<th class='w-px160'>성별</th>
			<td>${vo.gender }</td>
		</tr>
		<tr>
			<th>이메일</th>
			<td>${vo.email }</td>
		</tr>
		<tr>
			<th>전화번호</th>
			<td>${vo.phone }</td>
		</tr>
	</table>
	<div class='btnSet'>
		<a class='btn-fill' href="list.cu">고객 목록</a>
		<a class='btn-fill' href="new.cu">신규 고객</a>
		<a class='btn-fill'>수정</a>
		<a class='btn-fill'>삭제</a>
	</div>
</div>
<jsp:include page="/WEB-INF/views/include/footer.jsp" />
</body>
</html>