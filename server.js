var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = 
{
    'article-one':{
        title:'ARITCLE ONE',
        heading:`This is article one data`,
        date :'Sep 22, 2016',
        content:`Geeta
                 BTech : Sasi
                 MTech : VISIT`
    },
    'article-two':{
        title:'ARITCLE TWO',
        heading:`This is article two data`,
        date :'Sep 21, 2016',
        content:`Saikiran
                 <br>
                 BTech : GRIET
                 <br>
                 MTech : IITM`
    }
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var templateObj = 
    `<html>
        <div class="center text-big bold">
            ${title};
        </div>
        <br>
        <div class="center text-big bold">
            ${heading};
        </div>
        <br>
        <head>
            ${date};
        </head>
        <br>
        <body>
            ${content};
        </body>
    </html>`;
    
    return templateObj;
}

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;    
  res.send(createTemplate(articles[articleName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
