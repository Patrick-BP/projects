
const express = require('express')
const app = express()

app.use(expressFileupload({
limits: { fileSize: 50 * 1024 * 1024 },
abortOnLimit: true,
}))

app.post('/uploadFile', async (req, res) => {
console.log(req.files.file)
await req.files.file.mv(`${__dirname}/uploads/${req.files.file.name}`)
res.send('Uploaded')
})


let busboy = require('connect-busboy')

app.use(busboy());


app.post('/uploadFile', (req, res) => {
 req.busboy.on('file', function (fieldname, file, filename) {
   console.log("received file")
   var fstream = fs.createWriteStream('./uploads/' + filename);
   file.pipe(fstream);
   fstream.on('close', function () {
     res.send('upload succeeded!');
   });
 });
 req.pipe(req.busboy);
})