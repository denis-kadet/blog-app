<?php

namespace App\Jobs\Email;

use App\Models\User;
use Illuminate\Bus\Queueable;
use App\Mail\User\RegSendEmal;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redis;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        
        $this->user = $user;
        //dd($this->user['email']);die;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Redis::throttle('my-mailtrap')->allow(2)->every(1)->then(function (){
            $recipient = $this->user['email'];
            Mail::to($recipient)->send(new RegSendEmal($this->user));
            Log::info('Emailed order ' . $recipient);
        }, function () {
            return $this->release(2);
        });
    }
}
