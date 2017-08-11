
var Numbers = [
	1,
	2,
	3,
	6,
	8,
	9,
	11,
	12,
	15,
	16,
	17,
	20,
	22,
];

function displayArray() {
	document.getElementById("Numbers").innerHTML = Numbers.toString();
}

function binary_search() {
	var Low =0;
    var High = Numbers.length-1;
    var target = document.getElementById("numberInput").value;
    var result = -1;
		while (High >= Low) {
			var mid = Math.floor((High + Low)/ 2);
			if (Numbers[mid] == target) {
	 			result =  mid;
				break;
			}
			else if (Numbers[mid] < target) {
				Low = mid + 1;
			}
			else {
				High = mid -1;
			}
		}
	if (result != -1) {
		document.getElementById("index").innerHTML = "Your desired number has been found at index" + " " + result + ".";	
	}
	else {
		document.getElementById("index").innerHTML ="Your desired number has not been found";
	}
}




	
