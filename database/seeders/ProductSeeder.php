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
        ]);

        $product2 = Product::create([
            'name' => 'Produk 2',
            'type_id' => 2,
            'category_id' => 2,
        ]);

        // attach additional items
        $product1->additionalItems()->attach([1, 2]);
        $product2->additionalItems()->attach([1]);
    }
}
