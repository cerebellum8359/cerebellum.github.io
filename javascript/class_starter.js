class person {
	constructor (first_name, last_name, address){
    this.first_name = first_name;
	this.last_name = last_name;
	this. address = address;
}
    getFullName(){
	 document.getElementById("myName").innerHTML = this.first_name + this.last_name;
	}
	 	
	getAddress() {
		document.getElementById("myAddress").innerHTML = this.address;

	}

}

var tom = new person ( "Tom ", "Cruise", "Beverly Hills")
tom.getFullName ();
tom.getAddress();
