<?php

    require_once '../application.php';

    if (isset($_SESSION['user_id'])) {
        resolve('user', $_SESSION['user_id']);
    }