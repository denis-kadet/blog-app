<?php

namespace App\Console\Commands;

use File;
use Illuminate\Console\Command;
use Illuminate\Routing\Router;

class GenerateRoutesJson extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'route:json';

  protected $json_file_path = 'resources/js/routes.json';
  
  protected $router;

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Export Laravel routes to JSON file';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct(Router $router)
  {
    parent::__construct();
    
    $this->router = $router;
  }

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    $routes = [];

    foreach($this->router->getRoutes() as $route){
      $routes[$route->getName()] = $route->uri();
    }

    File::put($this->json_file_path, json_encode($routes, JSON_PRETTY_PRINT));
    echo "Routes exported to ".$this->json_file_path;
  }
}
