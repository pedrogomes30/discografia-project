<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\v1\AlbumController;
use App\Http\Controllers\API\v1\TrackController;
// use App\Http\Controllers\API\v1\ArtistController;

Route::prefix('v1')->group(function(){
    // album routes
    Route::get('/albums',        [AlbumController::class,'index']);
    Route::get('/albums/{id}',   [AlbumController::class,'show']);
    Route::post('/albums',       [AlbumController::class,'store']);
    Route::post('/albums/{id}',  [AlbumController::class,'update']);
    Route::delete('/albums/{id}',[AlbumController::class,'delete']);

    // track routes
    Route::get('/tracks',        [TrackController::class,'index']);
    Route::get('/tracks/{id}',   [TrackController::class,'show']);
    Route::post('/tracks',        [TrackController::class,'store']);
    Route::post('/tracks/{id}',   [TrackController::class,'update']);
    Route::delete('/tracks/{id}', [TrackController::class,'delete']);

    // for artists, this chalange only suport one artist albums and tracks
    // artist routes
    // Route::get('artists',       [TrackController::class,'index']);
    // Route::post('artist/{id}',  [TrackController::class,'update']);
    // Route::delete('artist',     [TrackController::class,'delete']);
});