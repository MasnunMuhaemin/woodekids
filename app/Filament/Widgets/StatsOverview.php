<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;  
use App\Models\Product;
use App\Models\Category;
use App\Models\Type;
use App\Models\AdditionalItem;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Produk', Product::count())
                ->description('Semua produk tersedia')
                ->descriptionIcon('heroicon-m-shopping-bag')
                ->chart([7, 2, 10, 3, 15, 4, 17])
                ->color('success'),

            Stat::make('Total Kategori', Category::count())
                ->description('Kategori produk')
                ->descriptionIcon('heroicon-m-tag')
                ->color('warning'),

            Stat::make('Total Type', Type::count())
                ->description('Varian tipe produk')
                ->descriptionIcon('heroicon-m-list-bullet')
                ->color('info'),

            Stat::make('Item Tambahan', AdditionalItem::count())
                ->description('Pelengkap produk')
                ->descriptionIcon('heroicon-m-puzzle-piece')
                ->color('primary'),
        ];
    }
}