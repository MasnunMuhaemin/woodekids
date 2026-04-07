<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AdditionalItem;

class AdditionalItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        AdditionalItem::insert([
            ['name' => 'Water Color'],
            ['name' => 'Key Chain'],
        ]);
    }
}
