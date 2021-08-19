const http = require('http')
const fs = require('fs')
const path =  require('path')

http.createServer((req,res) => {
    
    if(req.url === '/')
        fs.readFile(
            path.join(__dirname, '..' ,'pages', 'index.html'),
            (err, content) => {
                if(err) throw err
                
                res.end(content)
            }
        )
    if(req.url === '/contato'){
        fs.readFile(
            path.join(__dirname, '..' ,'pages', 'contato.html'),
            (err,content) => {
                if (err) throw err

                res.end(content)
            }
        )
    }
    if(req.url === '/projetos'){
        fs.readFile(
            path.join(__dirname, '..', 'pages', 'projetos.html'),
            (err, content) => {
                if(err) throw err

                res.end(content)
            }
        )
    }


}).listen(5000, () => console.log('server ok'))