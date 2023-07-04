import * as http from 'http';


http.createServer((req, res) =>{

    console.log(req);

    res.write('Hola mundo')

    res.end();
  
}).listen(8080);

console.log('escucnado en el puerto', 8080);