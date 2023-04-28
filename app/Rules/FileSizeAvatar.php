<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class FileSizeAvatar implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        //размер файла не должен превышать 2МБ
        $file_size = filesize($value) <= 2097152 ;
        return $file_size;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Размер изображения не должен превышать больше 2 МБ.';
    }
}
