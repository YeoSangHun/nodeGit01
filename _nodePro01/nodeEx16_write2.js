var fs = require('fs');

	fs.writeFile('node04_05fsfile.txt','Hello World',function(err,data){
		if(err) throw err;
		console.log('saved!.Update~!!!');
	});


	var text = fs.readFile('node04_05fsfile.txt', 'utf8',function(err,data){
		if(data)
			text = data;
		else{
			text="파일이름을확인하세요!!!";
		}
		console.log(text);
	});