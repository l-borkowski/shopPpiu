<?php

    require_once '../credentials.php';
    require_once '../application.php';

    if (empty($_SESSION['user_id'])) {
        redirect('../user/login.php');
        return;
    }

    $user_id = $_SESSION['user_id'];

    $fetched_name;
    $fetched_email;
    $fetched_phone;
    $fetched_birthday;
    $fetched_password;

    $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
    $statement = mysqli_prepare($connection, 'SELECT name, email, phone, birthday, password FROM users WHERE user_id = ?');

    mysqli_stmt_bind_param($statement, 's', $user_id);
    mysqli_stmt_execute($statement);
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $fetched_name, $fetched_email, $fetched_phone, $fetched_birthday, $fetched_password);
    mysqli_stmt_fetch($statement);
    mysqli_stmt_close($statement);

    resolve([
        'name' => $fetched_name,
        'email' => $fetched_email,
        'phone' => $fetched_phone,
        'birthday' => $fetched_birthday
    ]);

    if (empty($_POST)) {
        render('update');
        return;
    }

    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['birthday'])) {
        render('update', 'Nie podano danych do aktualizacji!');
        return;
    }

    if (empty($_POST['verification'])) {
        render('update', 'Nie podano aktualnego hasła!');
        return;
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $birthday = $_POST['birthday'];

    if (strlen($name) < 3 || strlen($name) > 64) {
        render('update', 'Nazwa użytkownika musi posiadać od 3 do 64 znaków!');
        return;
    }

    if (strlen($email) < 6 || strlen($email) > 64) {
        render('update', 'Adres email musi posiadać od 6 do 64 znaków!');
        return;
    }

    if (strlen($password) < 8 || strlen($password) > 128) {
        render('update', 'Hasło musi posiadać od 8 do 128 znaków!');
        return;
    }

    if (!ctype_alnum($name)) {
        render('update', 'Nazwa użytkonika może zawierać tylko litery i cyfry!');
        return;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        render('update', 'Podany adres email jest nieprawidłowy!');
        return;
    }