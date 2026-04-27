<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::with(['category', 'images'])
            ->select(
                'id',
                'name',
                'slug',
                'price',
                'description',
                'rating',
                'category_id'
            )
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', '%' . $request->search . '%');
            })
            ->when($request->category, function ($query) use ($request) {
                $query->whereHas('category', function ($q) use ($request) {
                    $q->where('slug', $request->category);
                });
            })
            ->when($request->sort, function ($query) use ($request) {
                switch ($request->sort) {
                    case 'price_low':
                        $query->orderBy('price', 'asc');
                        break;
                    case 'price_high':
                        $query->orderBy('price', 'desc');
                        break;
                    case 'rating':
                        $query->orderBy('rating', 'desc');
                        break;
                    default:
                        $query->latest();
                        break;
                }
            }, function ($query) {
                $query->latest();
            })
            ->orderBy('id', 'desc')
            ->paginate(12)
            ->withQueryString();

        $categories = Category::select('id', 'name', 'slug')->get();

        return Inertia::render('ListProduct', [
            'products' => $products,
            'categories' => $categories,
            'filters' => [
                'search' => $request->search,
                'category' => $request->category,
                'sort' => $request->sort,
            ],
        ]);
    }

    public function show($slug)
    {
        $product = Product::with(['category', 'type', 'additionalItems', 'images'])
            ->where('slug', $slug)
            ->firstOrFail();

        $relatedProducts = Product::with('images')
            ->where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->limit(4)
            ->get();

        return Inertia::render('ProductDetail', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}