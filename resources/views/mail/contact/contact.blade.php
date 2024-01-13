<x-mail::message>
# Introduction

Отправляем данные сообщение пользователю, кто отправил заявку в форме обратной связи

<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
