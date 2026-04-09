<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $product1 = Product::create([
            'name' => 'Produk 1',
            'type_id' => 1,
            'category_id' => 1,
            'slug' => 'produk-1',
            'description' => 'Deskripsi produk 1',
            'image' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        ]);

        $product2 = Product::create([
            'name' => 'Produk 2',
            'type_id' => 2,
            'category_id' => 2,
            'slug' => 'produk-2',
            'description' => 'Deskripsi produk 2',
            'image' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        ]);

        // attach additional items
        $product1->additionalItems()->attach([1, 2]);
        $product2->additionalItems()->attach([1]);
    }
}
