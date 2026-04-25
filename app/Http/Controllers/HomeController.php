<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $categorySlug = $request->category;
        $popularProducts = Product::select(
                'id',
                'name',
                'slug',
                'price',
                'description',
                'image',
                'rating'
            )
            ->where('is_popular', true)
            ->latest()
            ->take(4)
            ->get();
        $categories = Category::select('id', 'name', 'slug')->get();
        $dealProducts = Product::select(
                'id',
                'name',
                'slug',
                'price',
                'description',
                'image',
                'rating'
            )
            ->when($categorySlug, function ($query) use ($categorySlug) {
                $query->whereHas('category', function ($q) use ($categorySlug) {
                    $q->where('slug', $categorySlug);
                });
            })
            ->latest()
            ->take(8)
            ->get();

        return Inertia::render('Home', [
            'popularProducts' => $popularProducts,
            'dealProducts' => $dealProducts,
            'categories' => $categories,
            'activeCategory' => $categorySlug, 
        ]);
    }
}