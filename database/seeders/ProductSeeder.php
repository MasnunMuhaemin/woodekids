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
                'price' => 150000, 
            ]);

            $product2 = Product::create([
                'name' => 'Produk 2',
                'type_id' => 2,
                'category_id' => 2,
                'slug' => 'produk-2',
                'description' => 'Deskripsi produk 2',
                'price' => 250000, 
            ]);

            $product1->additionalItems()->attach([1, 2]);
            $product2->additionalItems()->attach([1]);
        }
}
