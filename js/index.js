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

    var FrequencyClearText = {};
    for (var i=0; i<str.length;i++) {
        var characterClearText = str.charAt(i);
        if (FrequencyClearText[characterClearText]) {
           FrequencyClearText[characterClearText]++;
        } else {
           FrequencyClearText[characterClearText] = 1;
        }
    }
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

/*
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: characterClearText,
        datasets: [{
            label: 'Частотний аналіз',
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(255, 255, 255)',
            data: FrequencyClearText[characterClearText]
        }]
    },
    // Configuration options go here
    options: {}
});*/