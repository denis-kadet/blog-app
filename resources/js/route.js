var routes = require('./routes.json');

export default function(){
  var args = Array.prototype.slice.call(arguments); // arguments - аргументы, переданные в функцию
  var name = args.shift();
  if(routes[name] === undefined){
    console.log('Error: route "'+name+'" does not exist');
  }else{
    return '/' +
      routes[name]
      .split('/')
      .map(function(str){
        if(str[0] == '{'){
          return args.shift();
        }else{
          return str;
        }
      })
      .join('/');
  }
}