<?php

namespace App\Http\Controllers\API\V1;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\V1\ContactFeedBackRequest;
use Exception;

class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ContactFeedBackRequest $request)
    {    
        try{
            $store = Contact::create($request->all());
            return response()->json(['status' => 201, 'created' => 'success', 'data' => $store], 201);
        }catch(Exception $e){
            return response()->json(['status' => 404, 'errors' => $e->getMessage()], 404);
        }
    }
}
