<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Category::insert([
            ['name' => 'Series A', 'slug' => 'series-a'],
            ['name' => 'Series B', 'slug' => 'series-b'],
            ['name' => 'Series C', 'slug' => 'series-c'],
        ]);
    }
}
