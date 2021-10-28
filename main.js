class Weapon {
  constructor(name, price) {
    this.name = name,
      this.price = price
  };
};

class Cart {
  constructor(counter) {
    this.prices = [];
    this.names = [];
    this.counter = counter;
  };

  addToCart(weapon) {
    this.prices.push(weapon.price);
    this.names.push(weapon.name);
  };

  remove() {
    this.prices.pop();
    this.names.pop();
  }

  releaseLast() {
    this.prices.pop();
  }

  getSum() {
    let sum = 0;
    for (let i = 0; i < this.prices.length; i++) {
      sum = sum + this.prices[i];
      this.counter = sum
    }

    if (this.counter < 2000) {
      if (this.prices.length == 0) {
        this.counter = 0
      }
    }
  }
}

let sword = new Weapon("Twin Lance", 1000);
let gun = new Weapon("Exter", 1500);
let bigSword = new Weapon("Zantetsuken", 1200);
let mainCart = new Cart(0);
const buttonSword = document.getElementById("first");
const buttonGun = document.getElementById("second");
const buttonBigSword = document.getElementById("third");
const list = document.getElementById("lista");
const price = document.getElementById("counter");
const buttonRelease = document.getElementById("remove");


function addWeapon(weapon) {
  mainCart.addToCart(weapon);
  mainCart.getSum();
};

function removeWeapon() {
  mainCart.remove();
  mainCart.getSum();

  console.log(mainCart)
};


buttonSword.addEventListener('click', () => {
  addWeapon(sword);
  var snd = new Audio("suoni/sword.wav");
  snd.play();
  let element = document.createElement("li");
  element.innerHTML = "You purchased 1 Twin Lance";
  list.appendChild(element);
  price.innerHTML = "Total purchase is " + mainCart.counter + " Guil";
  console.log(mainCart)
});

buttonGun.addEventListener('click', () => {
  addWeapon(gun);
  var snd = new Audio("suoni/fucile.mp3");
  snd.play();
  let element = document.createElement("li");
  element.innerHTML = "You purchased 1 Exter";
  list.appendChild(element);
  price.innerHTML = "Total purchase is " + mainCart.counter + " Guil";
  console.log(mainCart)
});

buttonBigSword.addEventListener('click', () => {
  addWeapon(bigSword);
  var snd = new Audio("suoni/alabarda.wav");
  snd.play();
  let element = document.createElement("li");
  element.innerHTML = "You purchased 1 Zantetsuken";
  list.appendChild(element);
  price.innerHTML = "Total purchase is " + mainCart.counter + " Guil";
  console.log(mainCart)
});

buttonRelease.addEventListener('click', () => {
  removeWeapon();
  list.removeChild(list.lastChild);
  price.innerHTML = "Total purchase is " + mainCart.counter + " Guil";
})


















