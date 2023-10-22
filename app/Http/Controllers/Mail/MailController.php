<?php

namespace App\Http\Controllers\Mail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;

class MailController extends Controller
{
    public function send() {
        Mail::send(['text' => 'email/email'], ['name', 'sdfasdf'], function($message){
            $message->to('test@mail.ru', 'Тамара иди в магазин')->subject('to');
            $message->from('test@mail.ru', 'asdfasdf')->subject('from');
        });
    }
}
