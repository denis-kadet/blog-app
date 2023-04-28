<?php

namespace App\Http\Requests\API\V1;

use App\Rules\Phone;
use Illuminate\Http\Request;
use App\Rules\FileSizeAvatar;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
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
    public function rules(Request $request)
    {
        $user = $request->user();
        return [
            'nickname' => 'required|string|unique:users|max:50|bail',
            'firstname' => 'nullable|string|max:20|bail',
            'lastname' => 'nullable|string|max:30|bail',

            'gender' => 'nullable|in:F,M,N|bail',
            'birtday' => 'nullable|date|bail',
            
            'avatar' => ['nullable', 'file', new FileSizeAvatar,'mimes:png,jpg,webp,svg', 'max:2048','bail'],
            'email' => 'required|string|unique:users|max:50|bail',//TODO разобраться spoof and dns
            'telephone' => ['nullable',new Phone ,Rule::unique('users', 'telephone')->ignore($user),'string','max:15','bail'],//TODO!!! нужен ли игнор при добавлении номера телефона???
            'description' => 'nullable|string|max:500|bail',
            'location' => 'nullable|string|max:255|bail',

            'password' => ['required','string','max:255',Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised(),'bail'],
            'password_confirm' => 'required|string|same:password'
        ];
    }

    public function messages()
    {
        return[
            'nickname.max' => 'Название не может быть более 50 символов',
            'firstname.max' => 'Название не может быть более 20 символов',
            'lastname.max' => 'Название не может быть более 30 символов',

            'telephone.unique' => 'Данный номер телефона уже используется. Введите другой номер',
            'telephone.max' => 'Название не может быть более 15 символов',

            'description.max' => 'Название не может быть более 500 символов',
            'location.max' => 'Название не может быть более 255 символов',

            'password.max' => 'Название не может быть более 255 символов',
            'password_confirm.same' => 'Пароли не совпадают',

            'avatar.mimes' => 'Тип изображения должен быть png,jpg,webp,svg',
            'avatar.max' => 'Название изображения больше 2048 символов',

            'nickname.unique' => 'Данный никнейм существует',
            'email.unique' => 'Данный Email зарегистрированный',
            
            'nickname.required' => 'Обязательное поле',
            'email.required' => 'Обязательное поле',
            'password.required' => 'Обязательное поле',
        ];
    }
}
