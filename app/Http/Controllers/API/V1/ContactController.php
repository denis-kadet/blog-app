<?php

namespace App\Http\Controllers\API\V1;

use Exception;
use App\Models\Contact;
use App\Http\Controllers\Controller;
use App\Notifications\ContactNotification;
use Illuminate\Support\Facades\Notification;
use App\Http\Requests\API\V1\ContactFeedBackRequest;

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
            //отправляем уведомление на почту, кто оставил данные в форме отбратной свзяи
            Notification::send($store, new ContactNotification($store));
            return response()->json(['status' => 201, 'created' => 'success', 'data' => $store], 201);
        }catch(Exception $e){
            return response()->json(['status' => 404, 'errors' => $e->getMessage()], 404);
        }
    }
}
