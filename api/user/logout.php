<?php

    require_once '../credentials.php';
    require_once '../application.php';

    if (!is_get()) {
        error('Użyto złej metody HTTP! Użyj metody GET!');
        return;
    }

    if (empty($_SESSION['user_id'])) {
        error('Nie jesteś zalogowany!');
        return;
    }

    unset($_SESSION['user_id']);
    
    success('Użytkownik został wylogowany pomyślnie!');