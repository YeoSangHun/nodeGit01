var fs = require('fs');

try {
	fs.writeFileSync('node04_05fsfile.txt','Hello World');
	console.log('FILE WRITE COMPLETE');
} catch (e) {
	// TODO: handle exception
	console.log(e);
}

try {
	var data = fs.readFileSync('node04_05fsfile.txt', 'utf8')
	console.log(data);
} catch (e) {
	// TODO: handle exception
	console.log(e);
}