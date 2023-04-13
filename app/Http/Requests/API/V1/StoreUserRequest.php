<?php

namespace App\Http\Requests\API\V1;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'nickname' => 'required|unique:users|max:50|bail',
            'firstname' => 'present|max:20|bail',
            'lastname' => 'present|max:30|bail',
            'email' => 'required|unique:users|max:50|bail',
            'telephone' => 'present|max:15|bail',
            'description' => 'present|max:500|bail',
            'location' => 'present|max:255|bail',
            'password' => 'required|max:255|bail',
        ];
    }

    public function messages()
    {
        return[
            'nickname.max' => 'Название не может быть более 50 символов',
            'firstname.max' => 'Название не может быть более 20 символов',
            'lastname.max' => 'Название не может быть более 30 символов',
            'telephone.max' => 'Название не может быть более 15 символов',
            'description.max' => 'Название не может быть более 500 символов',
            'location.max' => 'Название не может быть более 255 символов',
            'telephone.max' => 'Название не может быть более 15 символов',

            'nickname.unique' => 'Данный никнейм существует',
            'email.unique' => 'Данный Email зарегистрированный',
            
            'nickname.required' => 'Обязательное поле',
            'email.required' => 'Обязательное поле',
        ];
    }
}
