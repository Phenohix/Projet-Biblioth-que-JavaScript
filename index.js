const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const { contentType } = require('express/lib/response');
const options = {
    key: fs.readFileSync('server.key'),  // Chemin vers votre clé privée
    cert: fs.readFileSync('server.cert') // Chemin vers votre certificat
};
const server = https.createServer(options,app);
const io = new require("socket.io")(server);
server.listen(8888, () => {console.log('Le serveur écoute sur le port 8888');});

app.use(express.static('src',{
    setHeaders: (res, path) => {  
    if (path.endsWith('.js')) {  
      res.setHeader('Content-Type', 'application/javascript');  
    } else if (path.endsWith('.css')) {  
      res.setHeader('Content-Type', 'text/css');  
    } else if (path.endsWith('.svg')) {
      res.setHeader('Content-Type', "image/svg+xml")
    }
  } 
}));

app.get('/', (request, response) => {
    response.sendFile('/index.html', {root: __dirname});
});

/*
app.get('/:fld/:fd', (req, res) => {
    res.sendFile(`src/${req.params["fld"]}/${req.params['fd']}`, {root: __dirname})
})

*/