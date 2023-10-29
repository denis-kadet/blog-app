<?php

namespace App\Http\Requests\API\V1;

use App\Rules\Phone;
use Illuminate\Foundation\Http\FormRequest;

class ContactFeedBackRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'firstname' => 'required|string|max:20|bail',
            'lastname' => 'nullable|string|max:30|bail',

            'email' => ['required','max:50','bail'],//TODO разобраться spoof and dns
            'telephone' => ['required',new Phone ,'string','max:15','bail'],

            'descr' => 'nullable|string|max:500|bail',
            'services' => 'json|bail'
        ];
    }
    
    /**
     * messages
     *
     * @return void
     */
    public function messages()
    {
        return [
            'firstname.max' => 'Название не может быть более 20 символов',
            'firstname.required' => 'Обязательное поле',

            'lastname.max' => 'Название не может быть более 30 символов',

            'telephone.max' => 'Название не может быть более 15 символов',
            'telephone.required' => 'Обязательное поле',

            'descr.max' => 'Название не может быть более 500 символов',
            
            'email.required' => 'Обязательное поле',
            'email.max' => 'Email не больше 50 символов',

        ];
    }
}
