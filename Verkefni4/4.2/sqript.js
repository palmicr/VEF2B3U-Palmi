let Geymskip = {
	name: 'SpaceRacer',
	life: 10,
	showname: function(){
		alert(this.name);
	}	
}

let geymskip1 = Object.create(Geymskip);
let geymskip2 = Object.create(Geymskip);
let geymskip3 = Object.create(Geymskip);

geymskip1.name = "SpeedRacer";
geymskip1.showname()

Geymskip.prototype.speed = 5;
Geymskip.prototype.fly = function(){
	return 1 + this.speed;
}

let geymskip4 = Object.create(Geymskip);
geymskip4.prototype.shoot = function() {
    return this.life - 1;
};


}

