// const url = require('url');


const Myurl = new URL('https://www.example.com:8080');
Myurl.pathname = '/path/'

Myurl.searchParams.append("id","101");
Myurl.searchParams.append("name","Tej");

console.log(Myurl);
console.log(Myurl.toString());

// https://www.example.com:8080/path/?name=Tej&id=101 