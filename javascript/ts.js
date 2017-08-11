class todolist {
	constructor(activity) {
		this.activity= activity;//activity is accessing itself.
	}
}


function addEntrytodolist() {
  var activity = document.getElementById("todolist").value;//Gets the input from the textbox.
  var list_item = new todolist(activity);// created a new variable in order to store the information that is coming from the class.
  createtodoEntryElement(activity);//
  document.getElementById("todolist").value = "";//
}
var id = 0;// Each new entry has its own checkbox.
function createtodoEntryElement(todoEntry) {
  var activity = todolist.activity;//
  var span = document.createElement("span");//A span is created in order to make sure the checkboxses and the entries are in the same line.
  //Probably have to use document.createElement for span because the element probably does not exist in javascript.

  var newDiv = document.createElement("div");// A new div needs to created in order for each statement to be displayed on seperate lines.
  newDiv.id=id;

  span.className="list";//span is inside a div,giving the span a html class.
  span.innerText = todoEntry;//Putting the text on the line next to the box.

  var activity = document.getElementById("todolistDetails");//
  
  activity.appendChild(createcheckbox(id));//This adds a new checkbox each time a entry is entered with its own id.
  activity.appendChild(span);//adds another checkbox with the entry on a next line.
  activity.appendChild(newDiv);//adding the new div each time an entry is entered.
  id++;
  // adds a new checkbox for a single activity added.
}

function createcheckbox(id) {
	var checkbox = document.createElement("input");//
	checkbox.type = "checkbox";//The previous line does not recognize the variable checkbox as an actual checkbox, so this line is identifying the variable as an actual checkbox.
	checkbox.id = id;//Now the checkbox is an actual checkbox, this makes it so that a new checkbox is created each time.
	checkbox.className="checkbox";//Giving the checkbox a class
	return checkbox;//this stops the function and returns the value of the function, in this case the checkbox 
}
function deleteToDoList() {
	var check = document.getElementsByClassName("checkbox");//
	var list = document.getElementsByClassName("list");//
	for(var i= 0;i<check.length;i++) { //create a for loop. The variable is the counter, goes on as long as the counter is less than the lenght of the list. Moves up one.
		var check =check[i];//calling each new checkbox.
		var list = list[i];//calling each text.
		if (check.checked){ //Is the checkbox checked?
			check.parentNode.removeChild(list);//Deleting text
			check.parentNode.removeChild(check);//Deleting checkbox
			
		}

	}


}
  
