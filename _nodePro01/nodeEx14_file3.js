var fs = require('fs');

var text = fs.readFile('fsFile02.txt', 'utf8',function(err,data){
	if(data)
		text = data;
	else{
		text="파일이름을확인하세요!!!";
	}
});

//console.log(text);

setTimeout(function(){
	console.log(text);
},3000);
