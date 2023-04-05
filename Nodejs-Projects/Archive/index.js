const express =require('express');
const cheerio = require('cheerio');
const axios = require('axios');


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URL = "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge";


const movieArray  = [];

async function getMovies(url){
    const response = await axios.get(url)
    .then(res=>{
        const $ = cheerio.load(res.data);
    
        $('div[class="item"]' , res.data).each(function(){
            const quality = $(this).find('div[class="quality"]').text()
            const image = $(this).find('a img').attr('src')
            const title = $(this).find('a[class="title"]').text()
            const year = $(this).find('div[class="meta"]').text().slice(0, 5).trim()
            const url = "https://bflix.io" + $(this).find('a[class="title"]').attr('href')
           
            movieArray.push({
                string
            })
            
        });
       
        
    })
    .catch(error=>console.log(error.message))
    

};
getMovies(URL)
app.get('/', (req, res)=>{
    res.json("welcome to Bflix scraper")
});
app.get('/movies',  (req, res)=>{
    
    res.json(movieArray)
})

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))