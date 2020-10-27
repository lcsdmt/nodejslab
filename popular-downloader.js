let path = require('path');
let fs = require('fs');
let request = require('request-promise');
const { writeFile } = require('fs/promises');
let options = {
    encoding: 'binary'
};

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err)
    // path.extname(path)
    JSON.parse(body).data.children.forEach(article => {
        const imgThumbnail = article.data.url;
        const dataTrail = `./downloads/${article.data.id}${path.extname(imgThumbnail)}`
        // const dataPath = path.join(__dirname, ); - relavtive vs absolute path
        if (path.extname(imgThumbnail) == ".jpg" || path.extname(imgThumbnail) == ".gif" || path.extname(imgThumbnail) == ".png") {
            request(imgThumbnail, options)
                .then(image => {
                    fs.writeFile(dataTrail, image, options, (err) => {
                        console.log(`There was an error: ${err}`);
                    })
                })
                .catch(err => console.log(err))
        }
    });
});

// download = writeFile  ?