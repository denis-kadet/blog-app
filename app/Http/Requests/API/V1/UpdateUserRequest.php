<?php

namespace App\Http\Requests\API\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'present|max:20|bail',
            'lastname' => 'present|max:30|bail',
            'email' => 'required|unique:users|max:50|bail',//разобраться spoof and dns
            'telephone' => 'present|max:15|bail',
            'description' => 'present|max:500|bail',
            'location' => 'present|max:255|bail',
            'password' => 'required|max:255|bail',
        ];
    }
    
    /**
     * messages
     *
     * @return void
     */
    public function messages()
    {
        return[
            'firstname.max' => 'Название не может быть более 20 символов',
            'lastname.max' => 'Название не может быть более 30 символов',
            'telephone.max' => 'Название не может быть более 15 символов',
            'description.max' => 'Название не может быть более 500 символов',
            'location.max' => 'Название не может быть более 255 символов',
            'password.max' => 'Название не может быть более 255 символов',

            'email.unique' => 'Данный Email зарегистрированный',
            
            'email.required' => 'Обязательное поле',
            'password.required' => 'Обязательное поле',
        ];
    }
}
