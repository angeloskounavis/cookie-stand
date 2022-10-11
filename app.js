'use strict';

let seattleList = document.getElementById('seattleList');
console.log(seattleList);

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 a.m', '7 p.m'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(seattle.getRandomCustomers());
let h2 = document.createElement('h2');
h2.textContent = 'Seattle';
seattleList.appendChild(h2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(seattle.getRandomCustomers() * seattle.avg);
  seattle.cookiesSoldPerHourArray.push(cookiesThisHour);
  seattle.dailyTotal = seattle.dailyTotal + cookiesThisHour;
  console.log(cookiesThisHour, seattle.dailyTotal);
}


for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hours[i]}: ${seattle.cookiesSoldPerHourArray[i]} cookies`;
  seattleList.appendChild(li);
}

let seattleTotalLi = document.createElement('li');
seattleTotalLi.textContent = `Total ${seattle.dailyTotal} cookies`;
seattleList.appendChild(seattleTotalLi);

console.log(seattle);


let tokyoList = document.getElementById('tokyoList');
console.log(tokyoList);

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(tokyo.getRandomCustomers());
let tokyoh2 = document.createElement('h2');
tokyoh2.textContent = 'Tokyo';
tokyoList.appendChild(tokyoh2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(tokyo.getRandomCustomers() * tokyo.avg);
  tokyo.cookiesSoldPerHourArray.push(cookiesThisHour);
  tokyo.dailyTotal = tokyo.dailyTotal + cookiesThisHour;
  console.log(cookiesThisHour, tokyo.dailyTotal);
}


for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hours[i]}: ${tokyo.cookiesSoldPerHourArray[i]} cookies`;
  tokyoList.appendChild(li);
}

let tokyoTotalLi = document.createElement('li');
tokyoTotalLi.textContent = `Total ${tokyo.dailyTotal} cookies`;
tokyoList.appendChild(tokyoTotalLi);

console.log(tokyo);

let dubaiList = document.getElementById('dubaiList');
console.log(dubaiList);

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}

console.log(dubai.getRandomCustomers());
let dubaih2 = document.createElement('h2');
dubaih2.textContent = 'Dubai';
dubaiList.appendChild(dubaih2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(dubai.getRandomCustomers() * dubai.avg);
  dubai.cookiesSoldPerHourArray.push(cookiesThisHour);
  dubai.dailyTotal = dubai.dailyTotal + cookiesThisHour;
  console.log(cookiesThisHour, dubai.dailyTotal);
}


for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hours[i]}: ${dubai.cookiesSoldPerHourArray[i]} cookies`;
  dubaiList.appendChild(li);
}
let dubaiTotalLi = document.createElement('li');
dubaiTotalLi.textContent = `Total ${dubai.dailyTotal} cookies`;
dubaiList.appendChild(dubaiTotalLi);

console.log(dubai);

let parisList = document.getElementById('parisList');
console.log(parisList);

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}

console.log(paris.getRandomCustomers());
let parish2 = document.createElement('h2');
parish2.textContent = 'Paris';
parisList.appendChild(parish2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(paris.getRandomCustomers() * paris.avg);
  paris.cookiesSoldPerHourArray.push(cookiesThisHour);
  paris.dailyTotal = paris.dailyTotal + cookiesThisHour;
  console.log(cookiesThisHour, paris.dailyTotal);
}


for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hours[i]}: ${paris.cookiesSoldPerHourArray[i]} cookies`;
  parisList.appendChild(li);
}
let parisTotalLi = document.createElement('li');
parisTotalLi.textContent = `Total ${paris.dailyTotal} cookies`;
parisList.appendChild(parisTotalLi);

console.log(paris);

let limaList = document.getElementById('limaList');
console.log(limaList);

let lima = {
  name: 'Lima',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(lima.getRandomCustomers());
let limah2 = document.createElement('h2');
limah2.textContent = 'Lima';
limaList.appendChild(limah2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(lima.getRandomCustomers() * lima.avg);
  lima.cookiesSoldPerHourArray.push(cookiesThisHour);
  lima.dailyTotal = lima.dailyTotal + cookiesThisHour;
  console.log(cookiesThisHour, lima.dailyTotal);
}


for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hours[i]}: ${lima.cookiesSoldPerHourArray[i]} cookies`;
  limaList.appendChild(li);
}
let limaTotalLi = document.createElement('li');
limaTotalLi.textContent = `Total ${lima.dailyTotal} cookies`;
limaList.appendChild(limaTotalLi);
console.log(lima);

// const kittenTable = document.querySelector('table');
// console.log(kittenTable);
