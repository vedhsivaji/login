<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Image Slideshow</title>
  <!-- Link to Swiper CSS -->
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <style>
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <% 
        try {
          // Load the MySQL JDBC driver
          Class.forName("com.mysql.jdbc.Driver");
          
          // Establish a connection to the database
          Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/database_name", "username", "password");
          
          // Create a PreparedStatement to execute the SELECT statement
          PreparedStatement stmt = conn.prepareStatement("SELECT filename, form_id FROM image_data WHERE form_id = ?");
          stmt.setInt(1, form_id); // replace form_id with the actual form ID
          
          // Execute the SELECT statement and get the results
          ResultSet rs = stmt.executeQuery();
          
          // Loop through the results and print the image tags
          while (rs.next()) {
            String filename = rs.getString("filename");
      %>
            <div class="swiper-slide"><img src="images/<%= form_id %>/<%= filename %>" alt="image"></div>
      <%
          }
          
          // Close the resources
          rs.close();
          stmt.close();
          conn.close();
        } catch (Exception e) {
          e.printStackTrace();
        }
      %>
    </div>
    <!-- Add pagination bullets -->
    <div class="swiper-pagination"></div>
  </div>

  <!-- Link to Swiper JS -->
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script>
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  </script>
</body>
</html>
