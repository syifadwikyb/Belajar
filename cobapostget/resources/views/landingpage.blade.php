<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Campus Link</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    @vite('resources/css/app.css')
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
</head>
<body class="bg-white font-montserrat dark:bg-slate-900">
    <x-header></x-header>
    <x-layout></x-layout>
    <x-darkmode></x-darkmode>
    <x-footer class="absolute bottom-0"></x-footer>
</body>
</html>
