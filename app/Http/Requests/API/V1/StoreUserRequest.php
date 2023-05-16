<?php

namespace App\Http\Requests\API\V1;

use App\Rules\Phone;
use App\Rules\FileSizeAvatar;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

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
    public function rules(Request $request)
    {
        // dump($request->telephone);
        return [
            'nickname' => 'required|regex:/^[a-zA-Z]+$/u|string|unique:users|max:50|bail',
            'firstname' => 'nullable|regex:/^[a-zA-Zа-яА-Я]+$/u|string|max:20|bail',
            'lastname' => 'nullable|regex:/^[a-zA-Zа-яА-Я]+$/u|string|max:30|bail',

            'gender' => 'nullable|in:F,M,N|bail',
            'birtday' => 'nullable|date|bail',
            
            'avatar' => ['nullable', 'file', new FileSizeAvatar,'mimes:png,jpg,webp,svg', 'max:2048','bail'],
            'email' => 'required|email|string|unique:users|max:50|bail',//TODO разобраться spoof and dns
            'telephone' => ['nullable',new Phone ,Rule::unique('users', 'telephone'),'string','max:15','bail'],
            'description' => 'nullable|string|max:500|bail',
            'location' => 'nullable|string|max:255|bail',

            'password' => ['required','string','max:255',Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised(),'bail'],
            'password_confirm' => 'required|string|same:password'
        ];
    }

    public function messages()
    {
        return[
            'nickname.max' => 'Никнейм не может быть более 50 символов',
            'firstname.max' => 'Название не может быть более 20 символов',
            'lastname.max' => 'Название не может быть более 30 символов',
            'lastname.regex' => 'Только буквы',
            'firstname.regex' => 'Только буквы',
            'nickname.regex' => 'Только латинские буквы',

            'birtday.date' => 'Не верный формат даты рождения',

            'telephone.unique' => 'Данный номер телефона уже используется. Введите другой номер',
            'telephone.max' => 'Название не может быть более 15 символов',

            'description.max' => 'Название не может быть более 500 символов',
            'location.max' => 'Название не может быть более 255 символов',

            'password.max' => 'Пароль должен быть не более 255 символов',
            'password.min' => 'Пароль должен быть не менее 8 символов',
            'password_confirm.same' => 'Пароли не совпадают',
            'password_confirm.required' => 'Обязательное поле',

            'avatar.mimes' => 'Тип изображения должен быть png,jpg,webp,svg',
            'avatar.max' => 'Название изображения больше 2048 символов',
            'avatar.file' => ':Attribute должен быть файл',

            'nickname.unique' => 'Данный никнейм существует',
            'email.unique' => 'Данный Email уже зарегистрирован',
            
            'nickname.required' => 'Обязательное поле',
            'email.required' => 'Обязательное поле',
            'email.max' => 'Email не больше 50 символов',
            'email' => 'Введите корректный адрес Email',
            'password.required' => 'Обязательное поле',
        ];
    }
}
