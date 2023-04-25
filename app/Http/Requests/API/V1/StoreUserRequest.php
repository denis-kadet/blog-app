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
            'firstname' => 'nullable|max:20|bail',
            'lastname' => 'nullable|max:30|bail',
            'avatar' => 'nullable|file|mimes:png,jpg,webp,svg|max:2048|bail', // TODO! size:512 перестал работать
            'email' => 'required|unique:users|max:50|bail',//разобраться spoof and dns
            'telephone' => 'nullable|max:15|bail',
            'description' => 'nullable|max:500|bail',
            'location' => 'nullable|max:255|bail',
            'password' => 'required|max:255|bail',
            'password_confirm' => 'required|same:password'
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

            'password.max' => 'Название не может быть более 255 символов',
            'password_confirm.same' => 'Пароли не совпадают',
            

            'avatar.mimes' => 'Тип изображения должен быть png,jpg,webp,svg',
            'avatar.size' => 'Размер изображения не должне привышать больше 2 Мб',
            'avatar.max' => 'Название изображения больше 2048 символов',

            'nickname.unique' => 'Данный никнейм существует',
            'email.unique' => 'Данный Email зарегистрированный',
            
            'nickname.required' => 'Обязательное поле',
            'email.required' => 'Обязательное поле',
            'password.required' => 'Обязательное поле',
        ];
    }
}
