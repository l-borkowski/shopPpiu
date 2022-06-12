<?php

    session_start();

    function redirect($location) {
        header('Location: ' . $location);
    }

    require_once '../Mustache/Autoloader.php';
    Mustache_Autoloader::register();

    $vars = [];

    function render($message = null) {
        $mustache = new Mustache_Engine([
            'loader' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__))
        ]);
        //$template = $mustache->loadTemplate('template/' . $page);
        global $vars;
        $page =  'views/' . str_replace('.php', '', basename($_SERVER['SCRIPT_FILENAME']));
        if (empty($message)) {
            echo $mustache->render($page, $vars);
            return;
        }
        if (is_string($message)) {
            $vars = array_merge($vars, ['message' => $message]);
            echo $mustache->render($page, $vars);
            return;
        }
        if (is_array($message)) {
            echo $mustache->render($page, $message);
            return;
        }
    }

    function resolve($key, $value = null) {
        global $vars;
        if (empty($value)) {
            $vars = array_merge($vars, $key);
        } else {
            $vars = array_merge($vars, [$key => $value]);
        }
    }