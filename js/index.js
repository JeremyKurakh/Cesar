document.getElementById('inputClearText').oninput = function(){
	let offset = document.getElementById('offset').value;
    let key = parseInt(offset, 10);
    if(isNaN(key)){
        key = 0;
    }
    console.log(key);
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
	let key = document.getElementById('key').value;
    let step = parseInt(key,10);
    if(isNaN(step)){
        step = 0;
    }
    console.log(step);
	let str = this.value;
    console.log(str.charCodeAt(0));
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code - step;
        console.log(code);
		out += String.fromCharCode(code);
	}
	document.getElementById('outputDirtToClearText').innerHTML = out;
}