<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Base URL
    |--------------------------------------------------------------------------
    |
    | The base URL for all of your endpoints.
    |
    */

    'base_url' => 'http://localhost:8000',

    /*
    |--------------------------------------------------------------------------
    | Collection Filename
    |--------------------------------------------------------------------------
    |
    | The name for the collection file to be saved.
    |
    */

    'filename' => '{timestamp}_{app}_collection.json',

    /*
    |--------------------------------------------------------------------------
    | Structured
    |--------------------------------------------------------------------------
    |
    | If you want folders to be generated based on namespace.
    |
    | Set "crud_folders" to "false" if you don't want the api, index, store, show etc. folders.
    |
    */

    'structured' => false,
    'crud_folders' => true,

    /*
    |--------------------------------------------------------------------------
    | Auth Middleware
    |--------------------------------------------------------------------------
    |
    | The middleware which wraps your authenticated API routes.
    |
    | E.g. auth:api, auth:sanctum
    |
    */

    'auth_middleware' => 'auth:sanctum',

    /*
    |--------------------------------------------------------------------------
    | Headers
    |--------------------------------------------------------------------------
    |
    | The headers applied to all routes within the collection.
    |
    */

    'headers' => [
        [
            'key' => 'Accept',
            'value' => 'application/json',
        ],
        [
            'key' => 'Content-Type',
            'value' => 'application/json',
        ],
        [//данное значение нужно для работа с АПИ без логина и пароля
            'key' => 'Referer',
            'value' => '127.0.0.1:8000',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Events
    |--------------------------------------------------------------------------
    |
    | If you want to configure the prequest and test scripts for the collection,
    | then please provide paths to the JavaScript files.
    |
    */

    'prerequest_script' => '', // This script will execute before every request in the collection.
    'test_script' => '', // This script will execute after every request in the collection.

    /*
    |--------------------------------------------------------------------------
    | Enable Form Data
    |--------------------------------------------------------------------------
    |
    | Determines whether or not form data should be handled.
    |
    */

    'enable_formdata' => true,

    /*
    |--------------------------------------------------------------------------
    | Parse Form Request Rules
    |--------------------------------------------------------------------------
    |
    | If you want form requests to be printed in the field description field,
    | and if so, whether they will be in a human readable form.
    |
    */

    'print_rules' => true, // @requires: 'enable_formdata' ===  true
    'rules_to_human_readable' => true, // @requires: 'parse_rules' ===  true

    /*
    |--------------------------------------------------------------------------
    | Form Data
    |--------------------------------------------------------------------------
    |
    | The key/values to requests for form data dummy information.
    |
    */

    'formdata' => [
        'email' => 'max@mail.ru',
        'password' => 'Pnrusvyhodcev(93)',
        'password_confirm' => 'Pnrusvyhodcev(93)',
        'firstname' => 'Test',
        'lastname' => 'Test',
        'nickname' => 'Test1',
        'gender' => 'M',
        'birtday' => '10 апреля 1987',
        'telephone' => '79998887766',
        'description' => 'jin kdd ndkdk dn sasdasdns sdsd sad dflks',
        'location' => 'Moscow',

    ],

    /*
    |--------------------------------------------------------------------------
    | Include Middleware
    |--------------------------------------------------------------------------
    |
    | The routes of the included middleware are included in the export.
    |   api, web and e.c.
    */

    'include_middleware' => ['api', 'web'],

    /*
    |--------------------------------------------------------------------------
    | Disk Driver
    |--------------------------------------------------------------------------
    |
    | Specify the configured disk for storing the postman collection file.
    |
    */

    'disk' => 'local',

];
