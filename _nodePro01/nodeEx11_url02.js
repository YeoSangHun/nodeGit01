var url = require('url');

var addr = url.parse('https://search.naver.com/search.naver?where=nexearch&query=html&sm=top_hty&fbm=2&ie=utf8');
var parseUrl = url.parse(addr, true);

console.log(parseUrl);