/*
INSTRUCTIONS   

1. Create a list of 5 names of girls
2. Store 3 friends for each of these 5 girls
3. When the user enters the name of a girl from the list,
   and clicks "Get Friends" display friends of that girl
*/

/*ENTER CODE HERE*/
    Barbara = ["Diane", "Dani", "Diana"];
 	Kate= ["Ronni", "Lisa", "Katherine"];
 	Abigail = [" Alise", "Emily", "Elizabeth"];
 	Jenny = ["Maggie", "Manny", "Moddy"];
 	Karen = ["Ryan", "Noah", "Nonny"];


 var girls_names= {
	"Barbara": Barbara,
	"Kate": Kate,
	"Abigail": Abigail,
	"Jenny": Jenny,
	"Karen": Karen
}
function getFriends() {
	var names = document.getElementById("nameInput").value; 
	document.getElementById("friends").innerHTML = girls_names[names];
}



// /*EXTENSION*/
function addFriend() {
	var new_names = document.getElementById("nameOfGirl").value;
	var friends = document.getElementById("nameOfFriend").value;
    girls_names[new_names].push(friends);
    console.log (girls_names[new_names]);


  
}
