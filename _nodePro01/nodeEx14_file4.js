var fs = require('fs');

try {
	var text = fs.readFileSync('fsfile02.txt','utf8');
	console.log(text);
} catch (e) {
	console.log("Exception!! Check file!!");
}
