<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => 'api'], function () {
    Route::post('login',  'AuthenticateController@authenticate');
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/getCurrentUser', 'AuthenticateController@getCurrentUser');
    Route::post('/logout', 'AuthenticateController@logout');

    Route::get('user/getAuth', 'UserController@getAuth');
});