<?php

namespace App\Filament\Resources\AdditionalItemResource\Pages;

use App\Filament\Resources\AdditionalItemResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAdditionalItems extends ListRecords
{
    protected static string $resource = AdditionalItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
