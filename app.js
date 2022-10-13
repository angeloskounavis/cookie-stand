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

let seattleList = document.getElementById('seattleList');
console.log(seattleList);

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
  footerRow.id = 'footerRow';
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



let form = document.querySelector('form');
console.log(form);


let handleSubmit = function(event) {
  event.preventDefault();
  document.getElementById('footerRow').remove();
  let name = event.target.location.value;
  let max = parseInt(event.target.max.value);
  let min = parseInt(event.target.avg.value);
  let avg = parseInt(event.target.avg.value);
  let newStore = new Store(name, min, max, avg);
  newStore.getCookieNumbers();
  newStore.render();
  renderFooter();
};



form.addEventListener('submit', handleSubmit);
