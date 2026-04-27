<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'type_id',
        'category_id',
        'slug',
        'price',
        'is_popular',
        'rating',
        'description',
        'image',
    ];

    protected $casts = [
        'price' => 'decimal:0',
        'is_popular' => 'boolean',
        'rating' => 'decimal:1',
    ];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function additionalItems()
    {
        return $this->belongsToMany(AdditionalItem::class);
    }
}
