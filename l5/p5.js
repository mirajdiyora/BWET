//  Create a new URL object with base, then append pathname and query, also print the final
// URL. 

// const url = require('url');


const Myurl = new URL('https://www.example.com:8080');
Myurl.pathname = '/path/'

Myurl.searchParams.append("id","101");
Myurl.searchParams.append("name","Miraj");

console.log(Myurl);
console.log(Myurl.toString());