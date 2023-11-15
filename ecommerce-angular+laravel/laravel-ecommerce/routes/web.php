<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Home\RegisterController;
use App\Http\Controllers\Home\LoginController;
use App\Http\Controllers\Customers\CustomerManagementController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
// |
// */



//USERS
Route::get('/register/getRegisters', [RegisterController::class, 'getRegisters']);
Route::get('/register/saveRegister', [RegisterController::class, 'saveRegister']);
Route::get('/Login/getUser', [LoginController::class, 'getUser']);

//CUSTOMERS
Route::get('Customer/CustomersRegister', [CustomerManagementController::class, 'registerView']);
Route::get('Customer/customerRegister/register', [CustomerManagementController::class, 'register']);
Route::get('/customerRegister/countCostumers', [CustomerManagementController::class, 'countCostumers']);
Route::get('/customers/customerRegister/listCustomers', [CustomerManagementController::class, 'listCustomers']);
Route::post('/customers/customerRegister/updateCustomer', [CustomerManagementController::class, 'updateCustomer']);
Route::post('/customers/customerRegister/deleteCustomer', [CustomerManagementController::class, 'deleteCustomer']);
