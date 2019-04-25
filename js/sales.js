'use strict';

function CookieData(storeName,minCust,maxCust,avgCookieSale){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
}

var firstandpike = new CookieData('1st and Pike',23,65,6.3);
var seatac = new CookieData('SeaTac Airport',3,24,1.2);
var seattlecenter = new CookieData('Seattle Center',11,38,3.7);
var capitolhill = new CookieData('Capitol Hill',20,38,2.3);
var alki = new CookieData('Alki',2,16,4.6);

var stores = [firstandpike, seatac, seattlecenter, capitolhill, alki];

var StoreList = document.getElementById('store-list');
var storetime;
var numCust;
var numCookies;
var storeCount =0;

while (storeCount < stores.length) {

  var totCookies = 0;

  var liEl = document.createElement('li');

  liEl.textContent = 'Store Name : ' + stores[storeCount].storeName;
  StoreList.appendChild(liEl);

  for (var i = 6; i <= 21; i++) {
    if (i < 12) {
      storetime = i + ' AM'; }
    else if (i===12) {
      storetime = i + ' PM';
    }
    else if (i > 12) {
      storetime = (i-12) + ' PM';
    }


    liEl = document.createElement('li');

    numCust = getCustCount(stores[storeCount].minCust,stores[storeCount].maxCust);
    console.log('numCust:' + numCust);
    numCookies = Math.ceil(numCust * stores[storeCount].avgCookieSale);
    console.log('numCookies:' + numCookies);
    liEl.textContent = storetime + ': ' + numCookies + ' Cookies' ;


    StoreList.appendChild(liEl);
    console.log('numCookies:' + numCookies);
    totCookies = totCookies + numCookies;
    console.log('totCookies:' + totCookies);
  }

  liEl.textContent = 'Total : ' + totCookies + ' Cookies';
  StoreList.appendChild(liEl);

  storeCount = storeCount + 1;
}

function getCustCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log('test:' + Math.floor(Math.random() * (max - min)) + min);
  return Math.floor(Math.random() * (max - min)) + min;
}
