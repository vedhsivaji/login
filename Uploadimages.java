import java.io.*;
import java.sql.*;
import java.util.*;
import java.util.stream.Collectors;
import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;

@WebServlet(name = "Uploadimages", urlPatterns = { "/Uploadimages" })
@MultipartConfig
public class Uploadimages extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        // Get form data from request
        String title = request.getParameter("title");
        String description = request.getParameter("description");

        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            // Register JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Open a connection
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");

            // Insert form data
            String insertFormSql = "INSERT INTO form_data (title, description) VALUES (?, ?)";
            stmt = conn.prepareStatement(insertFormSql, Statement.RETURN_GENERATED_KEYS);
            stmt.setString(1, title);
            stmt.setString(2, description);
            stmt.executeUpdate();
            ResultSet rs = stmt.getGeneratedKeys();
            int formId = 0;
            if (rs.next()) {
                formId = rs.getInt(1);
            }

            // Define the base directory for uploaded files
            String baseDir = request.getServletContext().getRealPath("/") + "images" + File.separator;

            // Create directory with form_id as its name
            String dirName = baseDir + formId;
            File dir = new File(dirName);
            if (!dir.exists()) {
                dir.mkdir();
            }

            // Store uploaded files
            List<Part> fileParts = request.getParts().stream().filter(part -> "images".equals(part.getName()))
                    .collect(Collectors.toList());
            for (Part filePart : fileParts) {
                String fileName = filePart.getSubmittedFileName();
                String filePath = dirName + File.separator + fileName;
                File file = new File(filePath);
                filePart.write(filePath);

                // Insert file data
                String insertFileSql = "INSERT INTO image_data (form_id, file_name) VALUES (?, ?)";
                stmt = conn.prepareStatement(insertFileSql);
                stmt.setInt(1, formId);
                stmt.setString(2, fileName);
                stmt.executeUpdate();
            }

            // Redirect to success page
            response.sendRedirect("success.jsp");

        } catch (Exception e) {
            // Handle errors
            e.printStackTrace();
            response.sendRedirect("error.jsp");
        } finally {
            // Clean up resources
            try {
                if (stmt != null)
                    stmt.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
    }
}
