var random_numbers = [22, 17, 1, 8, 10, 2, 3, 16, 17, 90, 10 ];function displayArray () {
	document.getElementById("random numbers").innerHTML = random_numbers.toString();
	for (var i = 1; i < random_numbers.length; i++) {
		var element = random_numbers[i];
		var j = i;
		while (j > 0 && random_numbers[j -1] > element ) {
			var temp = random_numbers[j -1];
			random_numbers[j-1]=element;
			random_numbers[j] = temp;
			j = j -1;

		}
	}
}
displayArray();
document.getElementById("numbers").innerHTML = random_numbers.toString();

















































