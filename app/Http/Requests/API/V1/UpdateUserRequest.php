<?php

namespace App\Http\Requests\API\V1;

use App\Rules\Phone;
use Illuminate\Http\Request;
use App\Rules\FileSizeAvatar;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
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
    public function rules(Request $request)
    {
        $user = $request->user();
        return [
            'firstname' => 'nullable|string|max:20|bail',
            'lastname' => 'nullable|string|max:30|bail',

            'email' => ['nullable','max:50','bail', Rule::unique('users', 'email')->ignore($user->id)],//TODO разобраться spoof and dns
            'telephone' => ['nullable',new Phone ,Rule::unique('users', 'telephone')->ignore($user->id),'string','max:15','bail'],

            'gender' => 'nullable|in:F,M,N|bail',
            'birtday' => 'nullable|date_format:m/d/Y|bail',
            
            'avatar' => ['nullable', 'file', new FileSizeAvatar,'mimes:png,jpg,webp,svg', 'max:2048','bail'],

            'description' => 'nullable|string|max:500|bail',
            'location' => 'nullable|string|max:255|bail',

            'password' => ['nullable','string','max:255',Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised(),'bail'],
            'password_confirm' => 'nullable|string|same:password'
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
            'nickname.max' => 'Название не может быть более 50 символов',
            'firstname.max' => 'Название не может быть более 20 символов',
            'lastname.max' => 'Название не может быть более 30 символов',

            'telephone.unique' => 'Данный номер телефона уже используется. Введите другой номер',
            'telephone.max' => 'Название не может быть более 15 символов',

            'description.max' => 'Название не может быть более 500 символов',
            'location.max' => 'Название не может быть более 255 символов',

            'password.max' => 'Название не может быть более 255 символов',
            'password_confirm.same' => 'Пароли не совпадают',
            'password_confirm.required' => 'Обязательное поле',

            'avatar.mimes' => 'Тип изображения должен быть png,jpg,webp,svg',
            'avatar.max' => 'Название изображения больше 2048 символов',
            'avatar.file' => ':Attribute должен быть файл',

            'nickname.unique' => 'Данный никнейм существует',
            'email.unique' => 'Данный Email зарегистрированный',
            
            'nickname.required' => 'Обязательное поле',
            'email.required' => 'Обязательное поле',
            'email.max' => 'Email не больше 50 символов',
            'password.required' => 'Обязательное поле',

            'birtday.date_format' => ':Attribute не соответствует формату :format.'
        ];
    }
}