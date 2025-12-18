// Write a program that parses the given URL, Print protocol, hostname, pathname, and query
// parameters separately

const url = require('url')

const MyURL ='https://www.example.com:8080/path/?name=miraj&id=101';

const pathUrl = url.parse(MyURL,true);

console.log('Path Url:',pathUrl);
console.log('Host Name:',pathUrl.hostname);
console.log('Path Name:',pathUrl.pathname);
console.log('Query String:',pathUrl.query);
console.log('port:',pathUrl.port);

