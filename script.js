// ====================================================== Person
function Person(fName, age, gender, married, location) {
  this.fName = fName;
  this.age = age;
  this.gender = gender;
  this.married = married;
  this.location = location;
}

Person.prototype.fullInfo = function () {
  console.log(`Ismi: ${this.fName}
Yoshi: ${this.age}
Jinsi: ${this.gender}
Oylaviy holat: ${this.married}
Manzil: ${this.location}`);
};

Person.prototype.greeting = function () {
  console.log(`Salom men ${this.fName}man. Yoshim ${this.age} da`);
};

Person.prototype.changeName = function (name) {
  this.fName = name;
};

Person.prototype.changeAge = function (age) {
  this.age = age;
};

Person.prototype.changeMarried = function (info) {
  this.married = info;
};

let person1 = new Person(
  "Eshmat",
  38,
  "female",
  "Oylali",
  "Toshkent, Mirzo Ulug'bek"
);

// person1.fullInfo();
// person1.changeAge(39);
// person1.fullInfo();

// ====================================================== Fruit
function Fruit(name, color, mazasi) {
  this.name = name;
  this.color = color;
  this.mazasi = mazasi;
}

Fruit.prototype.fullInfo = function () {
  console.log(`Nomi: ${this.name}
Rangi: ${this.color}
Mazasi: ${this.mazasi}`);
};

Fruit.prototype.changeName = function (name) {
  this.fName = name;
};

Fruit.prototype.changeColor = function (color) {
  this.color = color;
};

Fruit.prototype.changeMazasi = function (info) {
  this.mazasi = info;
};

let fruit1 = new Fruit("Olma", "Ko'k", "Nordon");

// fruit1.fullInfo();
// fruit1.changeColor("Qizil");
// fruit1.changeMazasi("Shirin");
// fruit1.fullInfo();

// ====================================================== Food
function Food(name, ingredients) {
  this.name = name;
  this.ingredients = ingredients;
}

Food.prototype.fullInfo = function () {
  console.log(`Name: ${this.name}
Ingredients:  ${this.ingredients.join(", ")}`);
};

Food.prototype.addIngredient = function (ingredient) {
  this.ingredients.push(ingredient);
  console.log("Added ingredient");
};

let food1 = new Food("Lag'mon", ["go'sht", "piyoz"]);
food1.fullInfo();
food1.addIngredient("kartoshka");
food1.fullInfo();

// ====================================================== Car
function Car(Brand, carName, speed, price) {
  this.Brand = Brand;
  this.carName = carName;
  this.speed = speed;
  this.price = price;
}

Car.prototype.fullInfo = function () {
  console.log(`Brandi: ${this.Brand}
Nomi: ${this.carName}
Tezligii: ${this.speed} km/s
Narhi: ${this.price}`);
};

Car.prototype.zavat = function () {
  console.log(`${this.carName} harakatlanishni boshladi`);
};

Car.prototype.stop = function () {
  console.log(`${this.carName} harakatdan to'xtadi`);
};

Car.prototype.GetPrice = function () {
  return this.price;
};

Car.prototype.updatePrice = function (newPrice) {
  this.price = newPrice;
};

Car.prototype.updateSpeed = function (newSpeed) {
  this.speed = newSpeed;
};

let car1 = new Car(
  "Bugatti",
  "Chiron Profilée (2022)",
  380,
  "$10.8 million / €9,792,500"
);

// car1.fullInfo();
// // car1.zavat();
// // car1.stop();
// car1.updatePrice("$12.3 million");
// car1.updateSpeed(410);
// // console.log(car1.GetPrice());
// car1.fullInfo();

// ====================================================== Animal
function Animal(turi, turkumi, nomi, yoshi) {
  this.turi = turi;
  this.turkumi = turkumi;
  this.nomi = nomi;
  this.yoshi = yoshi;
}

Animal.prototype.fullInfo = function () {
  console.log(`Turi: ${this.turi}
Turkumi: ${this.turkumi}  
Nomi: ${this.nomi}
Yoshi: ${this.yoshi}`);
};

let animal1 = new Animal("Sut emizuvchi", "Quyon", "Shalpang quloq", 3);
let animal2 = new Animal("Yirtqich", "Bo'ri", "Oq panja", 2);

// animal1.fullInfo();
// animal2.fullInfo();
