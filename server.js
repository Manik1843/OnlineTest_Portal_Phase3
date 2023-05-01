const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


const api = require('./server/routes/app');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);

app.use(express.static(path.join(__dirname, 'dist/my-quiz-app')))

app.get('*', function(req,res){
   res.sendFile(path.join(__dirname,'dist/my-quiz-app/index.html'));
});


app.listen(process.env.PORT || 8080,function(){
    console.log("listening on port 8080")
});
