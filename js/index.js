document.getElementById('inputClearText').oninput = function(){
	let offset = document.getElementById('offset').value;
    let key = parseInt(offset, 10);
    console.log(offset);
	let help = document.getElementById('help');
	let str = this.value;
	console.log(str.charCodeAt(0));
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code + key;
        console.log(code);
		out += String.fromCharCode(code);
	}
	document.getElementById('outputClearToDirtText').innerHTML = out;
}

document.getElementById('inputDirtText').oninput = function(){
	let offset = document.getElementById('offset').value;
    console.log(offset);
	let str = this.value;
    console.log(str.charCodeAt(0));
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code - offset;
        console.log(code);
		out += String.fromCharCode(code);
	}
	document.getElementById('outputDirtToClearText').innerHTML = out;
}