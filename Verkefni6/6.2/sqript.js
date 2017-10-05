"use strict";
var main1 = document.createElement("main");
main1.setAttribute("id","mainThing");
window.console.log(main1);
document.body.appendChild(main1);

var pizzaDiv = document.createElement("div");
pizzaDiv.className = "pizza";
document.getElementById("mainThing").appendChild(pizzaDiv);

var PizzaName = document.createElement("div");
PizzaName.className = "pizzaName";
var t1 = document.createTextNode("Pizza with tons of pepperoni");
PizzaName.appendChild(t1);
pizzaDiv.appendChild(PizzaName);

var PizzaSize = document.createElement("div");
PizzaSize.className = "size";
var t2 = document.createTextNode("L");
PizzaSize.appendChild(t2);
pizzaDiv.appendChild(PizzaSize);

var PizzaPrice = document.createElement("div");
PizzaPrice.className = "price";
var t3 = document.createTextNode("2000");
PizzaPrice.appendChild(t3);
pizzaDiv.appendChild(PizzaPrice);

var PizzaTopping = document.createElement("div");
PizzaTopping.className = "toppingContainer";
pizzaDiv.appendChild(PizzaTopping);

var Pizzatopping1 = document.createElement("span");
Pizzatopping1.className = "topping";
var t4 = document.createTextNode("Pepperoni & ");
Pizzatopping1.appendChild(t4);
PizzaTopping.appendChild(Pizzatopping1);

var Pizzatopping2 = document.createElement("span");
Pizzatopping2.className = "topping";
var t5 = document.createTextNode("Pepperoni & ");
Pizzatopping2.appendChild(t5);
PizzaTopping.appendChild(Pizzatopping2);

var Pizzatopping3 = document.createElement("span");
Pizzatopping3.className = "topping";
var t6 = document.createTextNode("Cheddar");
Pizzatopping3.appendChild(t6);
PizzaTopping.appendChild(Pizzatopping3);