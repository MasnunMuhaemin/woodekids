<?php

use Inertia\Inertia;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index']);

Route::get('/products', function () {
    return Inertia::render('ListProduct');
});

Route::get('/product-detail', function () {
    return Inertia::render('ProductDetail');
});