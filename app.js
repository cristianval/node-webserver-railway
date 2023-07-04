import express from 'express';
//import { url } from 'inspector';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
const app = express();
import 'dotenv/config'

const port = process.env.PORT;
//const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const hbs = require('hbs');



//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso Node'
  });
});

// app.get('/', (req, res) => {
//   res.send('Hello World')
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
//   });

  app.get('/elements', (req, res) => {
    res.render('elements',{
      nombre: 'Fernando Herrera',
      titulo: 'Curso Node'
    })
  });

  // app.get('/generic', (req, res) => {
  //   res.sendFile(__dirname + '/public/generic.html')
  // });

    app.get('/generic', (req, res) => {
    res.render('generic',{
      nombre: 'Fernando Herrera',
      titulo: 'Curso Node'
    })
  });

app.get('*', (req, res) => {
    res.send('404 | page no found')
  });

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
})