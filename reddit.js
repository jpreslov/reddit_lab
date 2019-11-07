const rp = require("request-promise");
const fs = require('fs')

var options = {
    uri: 'https://www.reddit.com/r/popular.json',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
 
rp(options)
    .then(function yes (res) {
        let article = []

        // console.log(res.data.children);
        for(let i = 0; i < 24; i++){
            let obj = {
            title: res.data.children[i].data.title,
            url: res.data.children[i].data.url,
            author: res.data.children[i].data.author
            }
            article.push(obj)
        }
        fs.writeFile('popular-articles.json', JSON.stringify(article), (err) => {
            if (err) {
                console.log("File read failed:", err)
            }        
        })
    })
    .catch(function (err) {
        // API call failed...
    });


// console.log(article.obj)


    // let titles = [];
// let urls = [];
// let authors = [];


