<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductImage;

class ProductImageSeeder extends Seeder
{
    public function run(): void
    {
        $products = Product::all();

        foreach ($products as $product) {
            ProductImage::create([
                'product_id' => $product->id,
                'image_path' => 'products/sample1.jpg',
            ]);

            ProductImage::create([
                'product_id' => $product->id,
                'image_path' => 'products/sample2.jpg',
            ]);

            ProductImage::create([
                'product_id' => $product->id,
                'image_path' => 'products/sample3.jpg',
            ]);
        }
    }
}
