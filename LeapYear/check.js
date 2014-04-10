function check(){
	var year = document.getElementById("toshi").value;
	console.log(year);

	if(!year){
		document.getElementById("output").innerHTML = '調べたい西暦を入れてね(ﾊﾝｶｸ';
	} else if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
		document.getElementById("output").innerHTML = year + '年は閏年です！';
	} else {
		document.getElementById("output").innerHTML = year + '年は閏年ではありません！';
	}
}
