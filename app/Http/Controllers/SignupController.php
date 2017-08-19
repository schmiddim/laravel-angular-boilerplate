<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use IlluminateHttpRequest;

use AppHttpRequests;

use \App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;
use \App\User;
use Hash;
class SignupController extends Controller
{


	/**
	 * Create Email and Password Account.
	 */
	public function signup(Request $request)
	{

		$validator = Validator::make($request->all(), [
			'displayName' => 'required',
			'email' => 'required|email|unique:users,email',
			'password' => 'required'
		]);

		if ($validator->fails()) {
			return response()->json(['message' => $validator->messages()], 400);
		}

		$user = new User;
		$user->name = $request->input('displayName');
		$user->email = $request->input('email');
		$user->password = Hash::make($request->input('password'));
		$user->save();
		JWTAuth::attempt($request->only('email', 'password'));
		return response()->json(compact('token'));

	//	return response()->json(['token' => $this->createToken($user)]);
	}
}