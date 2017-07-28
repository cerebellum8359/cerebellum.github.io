class BlogEntry {
//name, blogText
constructor (name, blogText) {
this.name = name;
this.blogText = blogText;
  }
}
function addEntryToBlog() {
var blogEntry = new BlogEntry("","");
//Create blog entry here
blogEntry.name = document.getElementById("blogEntryName").value;
blogEntry.blogText = document.getElementById("blogEntryText").value ;
console.log(blogEntry.blogText );


//Add the new entry, name and date to the blog
createBlogEntryElement(blogEntry);
createFooterElement(blogEntry);

  //Clear the inputsss

}

function createBlogEntryElement(blogEntry) {
	var text = blogEntry.blogText;
	var newDiv = document.createElement("div");
	newDiv.innerHTML = text;
	blogDetails.appendChild(newDiv);
}
//document.createElement
//Create a div with the class "blogEntry" and add your text to it
//appendChild

function createFooterElement(blogEntry) {
	var name = blogEntry.name;
	var anotherDiv = document.createElement("div");
	anotherDiv.innerHTML = "by" + name "on" + Date();
	blogDetails.appendChild(anotherDiv);
	Date()
}
// document.createElement
//Create a div with the class "blogDate" and add your name and date it
//appendChild


//pass in name and blog text as parameters*/

//Create blog entry here