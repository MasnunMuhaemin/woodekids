<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

use Illuminate\Support\Str;
use Filament\Forms\Get;
use Filament\Forms\Set;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
            TextInput::make('name')
                ->label('Nama Produk')
                ->required()
                ->live(onBlur: true)
                ->afterStateUpdated(fn (Set $set, ?string $state) => $set('slug', Str::slug($state)))
                ->helperText('Masukkan nama produk yang lengkap.'),

            TextInput::make('slug')
                ->label('Slug')
                ->required()
                ->unique(Product::class, 'slug', ignoreRecord: true)
                ->helperText('Slug akan otomatis terisi dari nama produk.'),

            Select::make('type_id')
                ->relationship('type', 'name')
                ->label('Tipe')
                ->searchable()
                ->preload()
                ->required()
                ->helperText('Pilih tipe produk ini.'),

            Select::make('category_id')
                ->relationship('category', 'name')
                ->label('Kategori')
                ->searchable()
                ->preload()
                ->required()
                ->helperText('Pilih kategori produk ini.'),

            Select::make('additionalItems')
                ->relationship('additionalItems', 'name')
                ->multiple()
                ->label('Item Tambahan')
                ->searchable()
                ->preload()
                ->helperText('Pilih item tambahan jika produk menyediakannya.'),

            FileUpload::make('image')
                ->label('Foto Produk')
                ->image()
                ->imageEditor()
                ->directory('products')
                ->disk('public')
                ->visibility('public')
                ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp'])
                ->maxSize(2048)
                ->required()
                ->helperText('Unggah foto produk (Maksimal 2MB, format: jpg, png, webp).'),

            Textarea::make('description')
                ->label('Deskripsi')
                ->rows(3)
                ->helperText('Berikan deskripsi detail tentang keunggulan produk ini.'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Foto'),

                TextColumn::make('name')
                    ->label('Nama')
                    ->searchable(),

                TextColumn::make('type.name')
                    ->label('Tipe'),

                TextColumn::make('category.name')
                    ->label('Kategori'),

                TextColumn::make('created_at')
                    ->label('Dibuat Pada')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->label('Diperbaharui Pada')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
