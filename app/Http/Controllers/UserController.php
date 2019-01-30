<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Validation\Rule;
use Validator;


class UserController extends Controller
{
    public function getAuth () {
        return \Auth::user();
    }

    private function _validate (Request $request) {
        $this->validate($request, [
            'name' => 'required|between:2,100',
            'email' => 'required|email'
        ]);
    }
}
