<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Portfolio @franpax95</title>
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
        <!-- Styles -->
        
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap" rel="stylesheet">
        <!-- Icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <div id="app"></div>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>