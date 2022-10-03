import app from './src/app.js'

const port = process.env.PORT || 5000;

/*const server = http.createServer((req, res) => {
    res.writeHead(200, {'Context-Type': 'text/plain'});
    res.end(routes[req.url]);
})*/

app.listen(port, () => {
    console.log(`Servidor atendendo a porta: ${port}`);
});
