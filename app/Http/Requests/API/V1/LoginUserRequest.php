<?php

namespace App\Http\Requests\API\V1;

use Illuminate\Foundation\Http\FormRequest;

class LoginUserRequest extends FormRequest
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
            'email' => 'required|string|max:50|bail',
            'password' => ['required', 'string', 'max:255', 'bail'],
        ];
    }

    public function messages()
    {
        return[
            'email.required' => 'Обязательное поле',
            'password.required' => 'Обязательное поле',
        ];
    }
}
