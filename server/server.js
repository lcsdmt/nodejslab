let path = require('path');
let fs = require('fs');


let chirp = [{user: 'Riley',text:'Ferda'},{user:'Jonesy',text:'Snipes'},{user:'Shorsey',text:'Lets get a bubble teeeeea'},{user:'Wayne',text:'Pitter Patter'},{user:'Dan',text:'Sushimis'}];

let chirpsPath = path.join(__dirname, '../chirp.json');

// fs.writeFile(chirpsPath, JSON.stringify(chirp),err=>{
//     if (err) {
//         return console.log(err)
//     }
// });

fs.readFile(chirpsPath,{encoding: "utf-8"}, (err,chirp)=>{
    console.log(JSON.parse(chirp));
    // let chirpys = JSON.parse(chirp); - forgot how to get each indiviual logged
    // console.log(chirpys.text); - undefined
});

// let readChirps = fs.readFileSync(chirpsPath);
// console.log(JSON.parse(readChirps));