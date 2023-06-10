<?php

namespace App\Http\Controllers\Swagger\API_V1;

use App\Http\Controllers\Controller;


/**
 * @OA\Tag(
 *      name="Auth",
 *      description="Регистрация, авторизация и выход"
 * ),
 * @OA\Post(
 *      path = "/signup",
 *      operationId="singup",
 *      tags={"Auth"},
 *      summary="Регистрация",
 *      @OA\RequestBody(
 *          @OA\JsonContent(
 *              allOf={
 *                  @OA\Schema(
 *                      @OA\Property(property="nickname", type="string", maxLength=50, pattern="/^[a-zA-Z][a-zA-Z0-9]{5,50}$/u" ,description="unique:users|required", example="Maxnesh"),
 *                      @OA\Property(property="firstname", type="string", maxLength=20, pattern="/^[a-zA-Zа-яА-Я]+$/u",example="Max", description="nullable"),
 *                      @OA\Property(property="lastname", type="string", maxLength=30, pattern="/^[a-zA-Zа-яА-Я]+$/u",example="Nesh", description="nullable"),
 *                      @OA\Property(property="gender", type="string",description="M(Male), F(Female), N(None)", example="N"),
 *                      @OA\Property(property="birtday", type="date", example="10.05.2001"),
 *                      @OA\Property(property="email", type="email", format="email", maxLength=50, example="example@email.com", description="unique:users|required"),
 *                      @OA\Property(property="telephone", type="string", maxLength=15, pattern="/^[0-9]{10,11}$/", example="79998887766", description="unique:users, telephone"), 
 *                      @OA\Property(property="description", type="string", maxLength=500, example="Some description"),
 *                      @OA\Property(property="location", type="string", maxLength=255, example="Moscow"),
 *                      @OA\Property(property="password", type="string", minLength=8, maxLength=255, example="Vlad210(SD)", description="required|mixedCase|symbols"),
 *                      @OA\Property(property="password_confirm", type="string", maxLength=255, example="Vlad210(SD)"),
 *                  ),
 *              }
 *          ),
 *      ),
 *     @OA\Response(
 *         response=201,
 *         description="Ok",
 *         @OA\JsonContent(
 *             @OA\Property(property="status", type="integer", example=201),
 *             @OA\Property(property="created", type="string", example="success"),
 *             @OA\Property(property="data", type="object",
 *                 @OA\Property(property="id", type="integer", example=1), 
 *                 @OA\Property(property="nickname", type="string", maxLength=50, example="Maxnesh"),
 *                 @OA\Property(property="firstname", type="string", maxLength=20, example="Max"),
 *                 @OA\Property(property="lastname", type="string", maxLength=30, example="Nesh"),
 *                 @OA\Property(property="gender", type="string", example="N"),
 *                 @OA\Property(property="birtday", type="date", example="2001-02-01T00:00:00.000000Z"),
 *                 @OA\Property(property="email", type="email", format="email", maxLength=50, example="example@email.com"),
 *                 @OA\Property(property="telephone", type="string", maxLength=15, example="79998887766"), 
 *                 @OA\Property(property="description", type="string", maxLength=500, example="Some description"),
 *                 @OA\Property(property="location", type="string", maxLength=255, example="Moscow"),
 *                 @OA\Property(property="password", type="string", maxLength=255, example="Vlad210(SD)"),
 *                 @OA\Property(property="password_confirm", type="string", maxLength=255, example="Vlad210(SD)"),
 *                 @OA\Property(property="created_at", type="date-time", example="2023-05-27T16:59:30.000000Z"),     
 *             ),
 *             @OA\Property(property="token", type="string", example="190|HxcJNdv9aMY7HCyLLAHIBDhcJBajuwLpY9fl4mZ5"),
 *         ),
 *     )
 * )
 *
 * @OA\Post(
 *      path = "/login",
 *      operationId="login",
 *      tags={"Auth"},
 *      summary="Авторизация",
 *      @OA\RequestBody(
 *          @OA\JsonContent(
 *              allOf={
 *                  @OA\Schema(
 *                      @OA\Property(property="email", type="email", format="email", maxLength=50, example="example@email.com", description="unique:users|required"),
 *                      @OA\Property(property="password", type="string", minLength=8, maxLength=255, example="Vlad210(SD)", description="required|mixedCase|symbols"),
 *                  ),
 *              }
 *          ),
 *      ),
 *     @OA\Response(
 *         response=201,
 *         description="Ok",
 *         @OA\JsonContent(
 *             @OA\Property(property="status", type="integer", example=201),
 *             @OA\Property(property="success", type="string", example="success"),
 *             @OA\Property(property="data", type="object",
 *                 @OA\Property(property="user_id", type="integer", example=1), 
 *                 @OA\Property(property="nickname", type="string", maxLength=50, example="Maxnesh"),
 *                 @OA\Property(property="email", type="email", format="email", maxLength=50, example="example@email.com"),   
 *             ),
 *             @OA\Property(property="token", type="string", example="190|HxcJNdv9aMY7HCyLLAHIBDhcJBajuwLpY9fl4mZ5"),
 *         ),
 *     )
 * )
 * 
 * @OA\Post(
 *      path = "/logout",
 *      operationId="logout",
 *      tags={"Auth"},
 *      summary="Выход",
 *      security={{ "bearerAuth": {} }},
 *     @OA\Response(
 *         response=205,
 *         description="Ok",
 *         @OA\JsonContent(
 *             @OA\Property(property="status", type="integer", example=205),
 *             @OA\Property(property="success", type="string", example="true"),
 *             @OA\Property(property="message", type="string", example="Токен отозван"),
 *         ),
 *     )
 * )
 *
 */
class AuthController extends Controller
{
}
