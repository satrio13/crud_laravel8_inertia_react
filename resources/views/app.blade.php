<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel + Inertia + React</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
    @inertia
    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>