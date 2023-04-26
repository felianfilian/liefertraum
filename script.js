let items = ["Cheeseburger"];
let prices = [5.6];

let orderNames = [];
let orderPrices = [];
let orderAmounts = [];

let orderItems = document.getElementById("order-items");
let subSum = document.getElementById("sub-sum");
let deliverySum = document.getElementById("delivery-sum");
let totalSum = document.getElementById("total-sum");

orderItems.innerHTML = `
<div style="text-align: center;">
<img src="img/bag.png">
<br>
Wähle leckere Gerichte aus der Karte
<br>
und bestelle Dein Menu
</div>
`;

function addItem(orderName, orderPrice) {
  if (orderNames.includes(orderName)) {
    let orderNameIndex = orderNames.indexOf(orderName);
    orderAmounts[orderNameIndex]++;
    orderPrices[orderNameIndex] = orderPrice * orderAmounts[orderNameIndex];
  } else {
    orderAmounts.push(1);
    orderNames.push(orderName);
    orderPrices.push(orderPrice);
  }

  showShoppingCart(orderNames, orderPrices, orderAmounts);
  showTotalSum();
}

function showShoppingCart(orderNames, orderPrices, orderAmounts) {
  orderItems.innerHTML = "";
  for (let i = 0; i < orderNames.length; i++) {
    orderItems.innerHTML += `
  <div class="order-item">
    <p>${orderAmounts[i]}x</p>
    <p>${orderNames[i]}</p>
    <p>${orderPrices[i].toFixed(2).replace(".", ",")} €</p>
    <img class="btn-bucket" src="img/bucket-red.png" alt="">
  </div>
  `;
  }
}

function showTotalSum() {
  let sum = 0;
  for (let item of orderPrices) {
    sum += item;
  }

  totalSum.innerHTML = `
  <b>Gesamt ${sum.toFixed(2).replace(".", ",")} €</b>
  `;
}
