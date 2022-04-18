<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php edit</title>
</head>
<body>
    <section>
        <h1>Welcome</h1><br>
        <?php
            $username = $_GET["reg_un"];
            $password = $_GET["reg_pass"];

            if ($username == "ilai" && $password == "111")
            {
                echo"<h2><br>Your password changed succesfuly</h2>";
            }
            else
            {
                echo "<h2>Wrong username or password</h2>";
            }
        ?>
    </section>
    
</body>
</html>