'use strict';

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 a.m', '7 p.m'];

let allStores = [];

let tableData = document.getElementById('tableData');
function renderHeader () {
  let emptyTd =  document.createElement('td');
  let testRow = document.createElement('tr');
  testRow.appendChild(emptyTd);
  for (let i = 0; i < hours.length; i++) {
    let td1 = document.createElement('td');
    td1.textContent = hours[i];
    testRow.appendChild(td1);
  }
  let tdLast = document.createElement('td');
  tdLast.textContent = 'Daily Location Total';
  testRow.appendChild(tdLast);

  tableData.appendChild(testRow);
  tableData.appendChild(testRow);
}

// function renderFooter(){
//   let tr = document.createElement('tr');
//   cookieFoot.appendChild(tr);
//   let tdName = document.createElement('td');
//   tdName.textContent = 'Totals';
//   tr.appendChild(tdName);
//   let totalTotals = 0;
//   for (let j = 0; j < allLocations.length; j++) {
//     let hourlyTotals += (allLocations[j].cookiesSoldPerHourArray[i]);
//     totalTotals += (allLocations[j]).cookiesSoldPerHourArray[i]);
//   }
// }
// renderHeader();

// let testtd1 = document.createElement('td');
// testtd1.textContent = 'hello';
// let testtd2 = document.createElement('td');
// testtd2.textContent = 'Hi there';
// let testtd3 = document.createElement('td');
// testtd3.textContent = 'hello again';

// testRow.appendChild(testtd1);
// testRow.appendChild(testtd2);
// testRow.appendChild(testtd3);
// tableData.appendChild(testRow);

// for (let i = 0; i < hours.length; i++) {
//   let td1 = document.createElement('td');
//   td1.textContent = hours[i];
//   testRow.appendChild(td1);

// }
// tableData.appendChild(testRow);

let seattleList = document.getElementById('seattleList');
console.log(seattleList);

// let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 a.m', '7 p.m'];

// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   cookiesSoldPerHourArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max= max;
  this.avg= avg;
  this.dailyTotal = 0;
  this.cookiesSoldPerHourArray= [];
  allStores.push(this);
}
Store.prototype.getRandomCustomers= function() {
  return Math.floor(Math.random()* (this.max - this.min +1) + this.min);
};
Store.prototype.getCookieNumbers= function() {
  for (let i = 0; i < hours.length; i++) {
    let cookiesThisHour = Math.ceil(this.getRandomCustomers() * this.avg);
    this.cookiesSoldPerHourArray.push(cookiesThisHour);
    this.dailyTotal = this.dailyTotal + cookiesThisHour;
    console.log(cookiesThisHour, this.dailyTotal);
  }
};
Store.prototype.render = function() {
  let cityRow = document.createElement('tr');
  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  cityRow.appendChild(tdName);
  for (let i = 0; i < hours.length; i++) {
    let tdHour = document.createElement('td');
    tdHour.textContent = this.cookiesSoldPerHourArray[i];
    cityRow.appendChild(tdHour);
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.dailyTotal;
  cityRow.appendChild(tdTotal);
  tableData.appendChild(cityRow);
};

Store.prototype.createElements= function() {
  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  seattleList.appendChild(h2);
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
    seattleList.appendChild(li);
  }

  let seattleTotalLi = document.createElement('li');
  seattleTotalLi.textContent = `Total ${this.dailyTotal} cookies`;
  seattleList.appendChild(seattleTotalLi);
};
function renderFooter() {
  let footerRow = document.createElement('tr');
  let label = document.createElement('td');
  label.textContent = 'Totals';
  footerRow.appendChild(label);
  let totalOfTotals = 0;
  for (let i =0; i <hours.length; i++) {
    let hourTotalEl = document.createElement('td');
    let hourlyTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j]. cookiesSoldPerHourArray[i];
      totalOfTotals += allStores[j]. cookiesSoldPerHourArray[i];
    }
    hourTotalEl.textContent = hourlyTotal;
    footerRow.appendChild(hourTotalEl);
  }
  let finalTotalEl = document.createElement('td');
  finalTotalEl.textContent = totalOfTotals;
  footerRow.appendChild(finalTotalEl);
  tableData.appendChild(footerRow);
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3 );
let lima = new Store('Lima', 2, 16, 4.6 );

renderHeader();
seattle.getCookieNumbers();
seattle.render();
tokyo.getCookieNumbers();
tokyo.render();
dubai.getCookieNumbers();
dubai.render();
paris.getCookieNumbers();
paris.render();
lima.getCookieNumbers();
lima.render();
renderFooter();

// let h2 = document.createElement('h2');
// h2.textContent = 'Seattle';
// seattleList.appendChild(h2);

// for (let i = 0; i < hours.length; i++) {
//   let cookiesThisHour = Math.ceil(seattle.getRandomCustomers() * seattle.avg);
//   seattle.cookiesSoldPerHourArray.push(cookiesThisHour);
//   seattle.dailyTotal = seattle.dailyTotal + cookiesThisHour;
//   console.log(cookiesThisHour, seattle.dailyTotal);
// }

// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${seattle.cookiesSoldPerHourArray[i]} cookies`;
//   seattleList.appendChild(li);
// }

// let seattleTotalLi = document.createElement('li');
// seattleTotalLi.textContent = `Total ${seattle.dailyTotal} cookies`;
// seattleList.appendChild(seattleTotalLi);

// console.log(seattle);


// let tokyoList = document.getElementById('tokyoList');
// console.log(tokyoList);

// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   dailyTotal: 0,
//   cookiesSoldPerHourArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// console.log(tokyo.getRandomCustomers());
// let tokyoh2 = document.createElement('h2');
// tokyoh2.textContent = 'Tokyo';
// tokyoList.appendChild(tokyoh2);

// for (let i = 0; i < hours.length; i++) {
//   let cookiesThisHour = Math.ceil(tokyo.getRandomCustomers() * tokyo.avg);
//   tokyo.cookiesSoldPerHourArray.push(cookiesThisHour);
//   tokyo.dailyTotal = tokyo.dailyTotal + cookiesThisHour;
//   console.log(cookiesThisHour, tokyo.dailyTotal);
// }


// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${tokyo.cookiesSoldPerHourArray[i]} cookies`;
//   tokyoList.appendChild(li);
// }

// let tokyoTotalLi = document.createElement('li');
// tokyoTotalLi.textContent = `Total ${tokyo.dailyTotal} cookies`;
// tokyoList.appendChild(tokyoTotalLi);

// console.log(tokyo);

// let dubaiList = document.getElementById('dubaiList');
// console.log(dubaiList);

// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   dailyTotal: 0,
//   cookiesSoldPerHourArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// console.log(dubai.getRandomCustomers());
// let dubaih2 = document.createElement('h2');
// dubaih2.textContent = 'Dubai';
// dubaiList.appendChild(dubaih2);

// for (let i = 0; i < hours.length; i++) {
//   let cookiesThisHour = Math.ceil(dubai.getRandomCustomers() * dubai.avg);
//   dubai.cookiesSoldPerHourArray.push(cookiesThisHour);
//   dubai.dailyTotal = dubai.dailyTotal + cookiesThisHour;
//   console.log(cookiesThisHour, dubai.dailyTotal);
// }


// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${dubai.cookiesSoldPerHourArray[i]} cookies`;
//   dubaiList.appendChild(li);
// }
// let dubaiTotalLi = document.createElement('li');
// dubaiTotalLi.textContent = `Total ${dubai.dailyTotal} cookies`;
// dubaiList.appendChild(dubaiTotalLi);

// console.log(dubai);

// let parisList = document.getElementById('parisList');
// console.log(parisList);

// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   dailyTotal: 0,
//   cookiesSoldPerHourArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// console.log(paris.getRandomCustomers());
// let parish2 = document.createElement('h2');
// parish2.textContent = 'Paris';
// parisList.appendChild(parish2);

// for (let i = 0; i < hours.length; i++) {
//   let cookiesThisHour = Math.ceil(paris.getRandomCustomers() * paris.avg);
//   paris.cookiesSoldPerHourArray.push(cookiesThisHour);
//   paris.dailyTotal = paris.dailyTotal + cookiesThisHour;
//   console.log(cookiesThisHour, paris.dailyTotal);
// }


// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${paris.cookiesSoldPerHourArray[i]} cookies`;
//   parisList.appendChild(li);
// }
// let parisTotalLi = document.createElement('li');
// parisTotalLi.textContent = `Total ${paris.dailyTotal} cookies`;
// parisList.appendChild(parisTotalLi);

// console.log(paris);

// let limaList = document.getElementById('limaList');
// console.log(limaList);

// let lima = {
//   name: 'Lima',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   dailyTotal: 0,
//   cookiesSoldPerHourArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// console.log(lima.getRandomCustomers());
// let limah2 = document.createElement('h2');
// limah2.textContent = 'Lima';
// limaList.appendChild(limah2);

// for (let i = 0; i < hours.length; i++) {
//   let cookiesThisHour = Math.ceil(lima.getRandomCustomers() * lima.avg);
//   lima.cookiesSoldPerHourArray.push(cookiesThisHour);
//   lima.dailyTotal = lima.dailyTotal + cookiesThisHour;
//   console.log(cookiesThisHour, lima.dailyTotal);
// }


// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${lima.cookiesSoldPerHourArray[i]} cookies`;
//   limaList.appendChild(li);
// }
// let limaTotalLi = document.createElement('li');
// limaTotalLi.textContent = `Total ${lima.dailyTotal} cookies`;
// limaList.appendChild(limaTotalLi);
// console.log(lima);

// const kittenTable = document.querySelector('table');
// console.log(kittenTable);
