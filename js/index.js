document.getElementById('inputClearText').oninput = function(){
	let offset = document.getElementById('offset').value;
    let key = parseInt(offset, 10);
    if(isNaN(key)){
        key = 0;
    }
    //console.log(key);
	let help = document.getElementById('help');
	let str = this.value;
	//console.log(str.charCodeAt(0));
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code + key;
        //console.log(code);
		out += String.fromCharCode(code);
	}
	document.getElementById('outputClearToDirtText').innerHTML = out;

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    var FrequencyClearText = {};
    for (var i=0; i<str.length;i++) {
        var characterClearText = str.charAt(i);
        if (FrequencyClearText[characterClearText]) {
           FrequencyClearText[characterClearText]++;
        } else {
           FrequencyClearText[characterClearText] = 1;
        }
    }

    var numbersClear = Object.values(FrequencyClearText);
    console.log(numbersClear)
    var maxClearFreqSumb = getKeyByValue(FrequencyClearText,Math.max(...numbersClear));
    var maxClearFreqSymbCode = maxClearFreqSumb.charCodeAt();

    var FrequencyDirtText = {};
    for (var i=0; i<out.length;i++) {
        var characterDirtText = out.charAt(i);
        if (FrequencyDirtText[characterDirtText]) {
           FrequencyDirtText[characterDirtText]++;
        } else {
           FrequencyDirtText[characterDirtText] = 1;
        }
    }
}
    var numbersDirt = Object.values(FrequencyDirtText);
    console.log(numbersDirt)
    var maxDirtFreqSumb = getKeyByValue(FrequencyDirtText,Math.max(...numbersDirt));
    var maxDirtFreqSymbCode = maxDirtFreqSumb.charCodeAt();
    var ExpectedKey = Math.abs(maxClearFreqSymbCode - maxDirtFreqSymbCode);
    console.log(ExpectedKey);

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


