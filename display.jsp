<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Display Images</title>
<link rel="stylesheet" type="text/css" href="display_images.css">
</head>
<body>
    <h1>Image Gallery</h1>
    <c:forEach var="row" items="${form_data}">
        <div class="row">
            <div class="column">
                <table>
                    <tr>
                        <td>Title:</td>
                        <td>${row.title}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>${row.description}</td>
                    </tr>
                </table>
            </div>
            <div class="column">
                <div class="slideshow-container">
                    <c:forEach var="image" items="${image_data[row.id]}">
                        <div class="mySlides">
                            <div class="numbertext">${image.index} / ${image_count[row.id]}</div>
                            <img src="${image_path}${row.id}/${image.filename}" style="width:100%">
                        </div>
                    </c:forEach>
                    <div style="text-align:center">
                        <c:forEach var="image" items="${image_data[row.id]}">
                            <span class="dot"></span>
                        </c:forEach>
                    </div>
                    <a class="prev">&#10094;</a>
                    <a class="next">&#10095;</a>
                </div>
            </div>
        </div>
    </c:forEach>
    <script src="display_images.js"></script>
</body>
</html>
