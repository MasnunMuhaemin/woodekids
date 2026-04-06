<?php

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/products', function () {
    return Inertia::render('ListProduct');
});