let PersonAge = {
	year: 0,
	bornYear: 0,
	age: function(){
		return this.year - this.bornYear;
	}
}
let d = new Date();
let person1 = Object.create(PersonAge);
person1.year = d.getFullYear();
person1.bornYear = 1998;
alert(person1.age());