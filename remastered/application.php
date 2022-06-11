<?php

    error_reporting(E_ALL); ini_set('display_errors', '1');
    session_start();

    function redirect($location) {
        header('Location: ' . $location);
    }


    $vars;

    function render($page, $data = []) {
        global $vars;
        if (is_array($data)) {
            $data = array_merge($data, $vars);
            $data = (object) $data;
        } else if (is_string($data)) {
            $data = array_merge($vars, ['message' => $data]);
            $data = (object) $data;
        }
        include 'template/' . $page;
    }
    $vars = [];

    function resolve($name, $value) {
        global $vars;
        $vars = array_merge($vars, [$name => $value]);
    }


    /*
    require_once('Mustache/Autoloader.php');
    Mustache_Autoloader::register();
    function render($page, $data = []) {
        $mustache = new Mustache_Engine([
            'loader' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__))
        ]);
        //$template = $mustache->loadTemplate('template/' . $page);
        if (empty($data)) {
            echo $mustache->render('template/' . $page);
            return;
        }
        echo $mustache->render('template/' . $page, ['message' => $data]);
    }
    */