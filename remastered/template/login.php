<!DOCTYPE html>
<html lang="pl">
    <head>
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../assets/style.css" />
        <link rel="stylesheet" type="text/css" href="../assets/style_log_rej.css" />
        <title>Sklep</title>
    </head>
    <body>
        <header>
            <div id="header_logo">
                <img src ="../assets/images/game-boy_white.png" width="160px" height="60px"/>
            </div>
            <div id="header_searchbar">
                <input type="text" placeholder=" Search" id="header_searchbar_input"/>
            </div>
            <div id="header_login">
                <p><a href="login.php">Zaloguj się</a> | <a href="register.php">Zarejestruj</a> | <a href="#"><img src="../assets/images/cart_icon.png" width="20px" height="20px" style="vertical-align:middle"/></a></p>
            </div>
        </header>
        <div style="clear: both;"></div>
        <nav>
            <div id="nav_bar">
                <ul>
                    <li><a href="index.html"><img src="../assets/images/glowna.png" width="20px" height="20px" style="vertical-align:middle"/>&nbsp;&nbsp;&nbsp;home</a></li>
                    <li><a href="#"><img src="../assets/images/kategorie.png" width="20px" height="20px" style="vertical-align:middle"/>&nbsp;&nbsp;&nbsp;kategorie&nbsp;</a></li>
                    <li><a href="#"><img src="../assets/images/promocje.png" width="20px" height="20px" style="vertical-align:middle"/>&nbsp;&nbsp;&nbsp;promocje</a></li>
                    <li><a href="#"><img src="../assets/images/nowosci.png" width="20px" height="20px" style="vertical-align:middle"/>&nbsp;&nbsp;&nbsp;nowości</a></li>
                    <li><a href="#"><img src="../assets/images/onas.png" width="20px" height="20px" style="vertical-align:middle"/>&nbsp;&nbsp;&nbsp;o nas</a></li>
                </ul>
            </div>
        </nav>
        <main>
            <div id="main_sliderbox" >
                <div id="main_sliderbox_slider" >
                    <div id="topic_label">Logowanie użytkownika </div>
                    <br><br><br>
                    <form id="logowanie" method="post" action="login.php">
                        <div id="form">
                            <input type="text" class="form_el" id="email" placeholder="ADRES EMAIL" name="email" value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>" ><br>
                            <input type="password" class="form_el" id="password" placeholder="HASŁO" name="password" value="<?php if (isset($_POST['password'])) echo $_POST['password']; ?>" >
                            <button type="button" id="btnToggle" class="toggle">
                            <i id="togglePassword" class="fa fa-eye fa-lg" ></i>
                            </button><br>
                            <?php
                                if (isset($data->message)) {
                                    echo '<p id="demo">' . $data->message . '</p>';
                                }
                            ?>
                        </div>
                        <div id="main_button">
                            <a href="#" id="przycisk">
                                <div id="button">
                                    ZALOGUJ
                                </div>
                            </a>
                        </div>
                        <div id="my-signin2"></div>
                        <div id="main_accounts">
                            <p id="account"><a>Nie masz konta?</a> <a href="register.php" id="registration">Zarejestruj się</a></p>
                            <p id="fPassword">
                                <a href="#">Nie pamiętam hasła</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        <div style="clear: both;"></div>
        <script>
            const togglePassword = document.querySelector('#togglePassword');
            const password = document.querySelector('#password');
            
            togglePassword.addEventListener('click', function (e) {
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
            });
            
            document.getElementById("button").addEventListener("click", function()
            { 
                logowanie.submit();
            });
        </script>
    </body>
</html>