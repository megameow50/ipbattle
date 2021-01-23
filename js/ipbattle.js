"use strict"
"use strict"
class Fighter {
	constructor(n, c) {
		this.name = n;	//Name
		this.cat = c;	//Category
	}

toString() {
return this.name;

}

}

var bigList = [];
bigList.push(new Fighter("Darth Vader", "Star Wars"));
bigList.push(new Fighter("Darth Maul", "Star Wars"));
bigList.push(new Fighter("Dumbledore", "Harry Potter"));
bigList.push(new Fighter("Grindelwald", "Harry Potter"));
bigList.push(new Fighter("Zuko", "Avatar"));
bigList.push(new Fighter("Gandalf", "Lord Of The Rings"));