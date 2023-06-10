<?php

namespace App\Http\Controllers\Swagger\API_V1;

use App\Http\Controllers\Controller;

/**
 * @OA\Info(title="Blog API", 
 * version="1.0",
 *      @OA\Contact(
 *          email="denis-kadet@mail.ru"
 *      ),
 *      @OA\License(
 *          name="Apache 2.0",
 *          url="https://www.apache.org/"
 *      )
 * )
 * @OA\PathItem(path="localhost:8000/api_v1")
 * @OA\Server(
 *      description="Laravel Swagger API server",
 *      url="/api_v1/"
 * )
 * @OA\Compontents(
 *     @OA\SecurityScheme(
 *         type="http",
 *         securityScheme="bearerAuth",
 *         scheme="bearer"
 *     )
 * )
 * 
 */
class MainController extends Controller
{
    //
}
