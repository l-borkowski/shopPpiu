<?php

    require_once '../credentials.php';

    function fetch_paypal_bearer() {
        $fetched_bearer;

        $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
        $statement = mysqli_prepare($connection, 'SELECT token FROM paypal_cache WHERE expiration > CURRENT_TIMESTAMP()');
    
        mysqli_stmt_execute($statement);
        mysqli_stmt_store_result($statement);
        mysqli_stmt_bind_result($statement, $fetched_bearer);
        mysqli_stmt_fetch($statement);
        mysqli_stmt_close($statement);
    
        if ($fetched_bearer) {
            mysqli_close($connection);

            return $fetched_bearer;
        }
    
        $request = curl_init();
    
        curl_setopt($request, CURLOPT_URL,'https://api-m.sandbox.paypal.com/v1/oauth2/token');
        curl_setopt($request, CURLOPT_POSTFIELDS, 'grant_type=client_credentials');
        curl_setopt($request, CURLOPT_USERPWD, PAYPAL_CLIENT_ID . ':' . PAYPAL_CLIENT_SECRET);
        curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($request, CURLOPT_POST, true);
    
        $response = curl_exec($request);
        $parsed = json_decode($response);
    
        curl_close($request);
    
        if (!property_exists($parsed, 'access_token')) {
            mysqli_close($connection);
            
            return null;
        }

        $statement = mysqli_prepare($connection, 'INSERT INTO paypal_cache VALUES (?, DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL ? SECOND))');

        $fetched_bearer = $parsed->access_token;
        $fetched_expiration = $parsed->expires_in;
    
        mysqli_stmt_bind_param($statement, 'si', $fetched_bearer, $fetched_expiration);
        mysqli_stmt_execute($statement);
        mysqli_stmt_close($statement);
        mysqli_close($connection);
    
        return $fetched_bearer;
    }


    
    function fetch_paypal_paynament_token($price) {
        $request = curl_init();
        $bearer = fetch_paypal_bearer();

        $headers = [
            'Content-Type: application/json', 
            'Authorization: Bearer ' . $bearer
        ];

        $data = [
            'intent' => 'CAPTURE',
            'purchase_units' => [[
                'amount' => [
                    'currency_code' => 'PLN',
                    'value' => $price
                ],
                'payee' => [
                    'email_address' => PAYPAL_EMAIL_ADDRESS
                ]
            ]],
            'application_context' => [
                'brand_name' => 'Projekt stundetów UKW',
                'landing_page' => 'NO_PREFERENCE',
                'user_action' => 'PAY_NOW',
                'return_url' => 'http://146.59.44.209/api/purchase/capture.php',
                'cancel_url' => 'http://146.59.44.209/cancel-payment'
            ]
        ];

        curl_setopt($request, CURLOPT_URL,'https://api-m.sandbox.paypal.com/v2/checkout/orders');
        curl_setopt($request, CURLOPT_POST, true);
        curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($request, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($request, CURLOPT_POSTFIELDS, json_encode($data));

        $response = curl_exec($request);
        $parsed = json_decode($response);

        curl_close($request);

        return $parsed->id;
    }


    function get_paypal_paynement_link($token) {
        return 'https://www.sandbox.paypal.com/checkoutnow?token=' . $token;
    }

    function fetch_paypal_paynament_status($token) {
        $request = curl_init();
        $bearer = fetch_paypal_bearer();

        curl_setopt($request, CURLOPT_URL, 'https://api.sandbox.paypal.com/v2/checkout/orders/' . $token . '/capture');
        curl_setopt($request, CURLOPT_POST, true);
        curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($request, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json', 
            'Authorization: Bearer ' . $bearer
        ]);

        $response = curl_exec($request);
        $parsed = json_decode($response);

        curl_close($request);

        return $parsed->status;
    }