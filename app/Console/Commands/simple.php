<?php

namespace App\Console\Commands;

use File;
use Illuminate\Support\Str;
use Illuminate\Console\Command;

class SimpleCreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:simple {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new service class';
    /**
     * The filesystem instance.
     *
     * @var \Illuminate\Filesystem\Filesystem
     */
    protected $files;
    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Service';


    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name_arg = $this->argument('name');

        $pattern = "/^[a-zA-Z][a-zA-Z0-9]$/u";
        //проверить сторку на запрещенные символы
        if ($name_arg) {
            $rex = preg_match($pattern, $name_arg);
          dd($rex);
        }

      //получаем путь до проекта
        $path = base_path();

        $dir_name = 'Services';
        //если нет папки Service то создаем
        if (!is_dir($dir_name)) {
            $dir_services = mkdir($dir_name, 0777);
            if (!$dir_services) {
                return 0;
            }
        }
       //ищем папку и в нее переходим
        $glob = glob($path . "/Services", GLOB_ONLYDIR);
        chdir($glob[0]);

        //проверяем есть в названии Service, если не то добавляем
        $result = Str::endsWith($name_arg, 'Service');
        if (!$result) {
            $name_arg = $name_arg . "Service";
        }

        //Если значение не существует в строке, то будет возвращена вся строка
        $nameClass = Str::afterLast($name_arg, '/');
        $path_class = Str::beforeLast($name_arg, '/');

       //надо проверять путь на сущестования, то есть если уже создана директива, то пропускаем
        if (!is_dir($path_class)) {
           //Если создаем класс без вложенности, то пропускаем создание вложенных директив
            if ($nameClass != $path_class) {
                $dir_path = mkdir($path_class, 0777, true);
                if (!$dir_path) {
                    return 0;
                }
            }
        }

      //надо как-то брать stub и передовать туда значения с создавать файл
        File::put($this->json_file_path);
        dd($this->getStub());
        //успешно создал файл
        $this->info($this->type . 'success ' . $nameClass);
    }
    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return $this->resolveStubPath('/stubs/service.stub');
    }
    /**
     * Resolve the fully-qualified path to the stub.
     *
     * @param  string  $stub
     * @return string
     */
    protected function resolveStubPath($stub)
    {
        return file_exists($customPath = $this->laravel->basePath(trim($stub, '/')))
            ? $customPath
            : __DIR__ . $stub;
    }
    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace . '\Services';
    }
        /**
    * Get the console command options.
    *
    * @return array
    */
    protected function getOptions()
    {
        return [];
    }
}
