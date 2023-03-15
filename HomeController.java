import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomeController {

    @GetMapping("/")
    public String welcomeHome() {
        return "welcomeHome";
    }

    @PostMapping("/api/welcome")
    @ResponseBody
    public String welcomeName(@RequestParam("name") String name) {
        return "Welcome Home, " + name + "!";
    }

}

/*

dependancies
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.6.3</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>



  welcomeHome.html
 <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome Home</title>
</head>
<body>
    <h1>Welcome Home!</h1>
    <form method="post" action="/api/welcome">
        <label for="name">Enter your name:</label><br>
        <input type="text" id="name" name="name"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>

*/

