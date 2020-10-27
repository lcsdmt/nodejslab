let path = require('path');
let fs = require('fs');
let request = require('request-promise');

let dataPath = path.join(__dirname, 'popular-articles.json');
let articlesDataArr = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err)

    JSON.parse(body).data.children.map(item => {
        return (
            articlesDataArr.push({ URL: item.data.url, title: item.data.title, author: item.data.author })
        );
    });
    fs.appendFileSync(dataPath, JSON.stringify(articlesDataArr));
});