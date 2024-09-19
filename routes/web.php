<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'appName' => config('app.name'),
    ]);
});

Route::prefix('blog')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Blog/Blog', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'appName' => config('app.name'),
        ]);
    })->name('blog.index');
    Route::get('/{slug}', function ($slug) {
        return Inertia::render('Blog/BlogPost/Post', [
            'slug' => $slug,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'appName' => config('app.name'),
        ]);
    })->name('blog.post');
});

Route::prefix('beverages')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Beverages/Beverages', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'appName' => config('app.name'),
        ]);
    })->name('beverages.index');
});

Route::prefix('venues')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Venues/Venues', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'appName' => config('app.name'),
        ]);
    })->name('venues.index');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
