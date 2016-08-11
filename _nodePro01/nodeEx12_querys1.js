var url = require('url');
var querystring = require('querystring');
var addr = 'https://search.naver.com/search.naver?where=nexearch&query=html&sm=top_hty&fbm=2&ie=utf8';
var parseUrl = url.parse(addr);

console.log(querystring.parse(parseUrl.query));