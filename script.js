let orderPrice = [];
let deliveryPrice = 2.0;

let orderNames = [];
let orderSum = [];
let orderAmounts = [];

let orderItems = document.getElementById("order-items");
let subSum = document.getElementById("sub-sum");
let deliverySum = document.getElementById("delivery-sum");
let totalSum = document.getElementById("total-sum");

let msubSum = document.getElementById("m-sub-sum");
let mdeliverySum = document.getElementById("m-delivery-sum");
let mtotalSum = document.getElementById("m-total-sum");

orderItems.innerHTML = `
<div style="text-align: center;">
<img src="img/bag.png">
<br>
Wähle leckere Gerichte aus der Karte
<br>
und bestelle Dein Menu
</div>
`;

function addItem(orderName, newPrice) {
  if (orderNames.includes(orderName)) {
    let orderNameIndex = orderNames.indexOf(orderName);
    orderAmounts[orderNameIndex]++;
    orderSum[orderNameIndex] =
      orderPrice[orderNameIndex] * orderAmounts[orderNameIndex];
  } else {
    orderAmounts.push(1);
    orderNames.push(orderName);
    orderPrice.push(newPrice);
    orderSum.push(newPrice);
  }

  showShoppingCart(orderNames, orderSum, orderAmounts);
  showTotalSum();
}

function showShoppingCart(orderNames, orderSum, orderAmounts) {
  orderItems.innerHTML = "";
  for (let i = 0; i < orderNames.length; i++) {
    orderItems.innerHTML += `
  <div class="order-item">
    <p>${orderAmounts[i]}x</p>
    <p>${orderNames[i]}</p>
    <p>${orderSum[i].toFixed(2).replace(".", ",")} €</p>
  </div>
  <div class="amount-buttons">
    <a class="btn-amount" onclick="addItem(${orderNames[i]})">-</a>
    <a class="btn-amount" onclick="amountUp(${i})">+</a>
  </div>
  `;
  }
}

function showTotalSum() {
  let sum = 0;
  for (let item of orderSum) {
    sum += item;
  }
  subSum.innerHTML = `
  <b>Zwischensumme ${sum.toFixed(2).replace(".", ",")} €</b>
  `;
  deliverySum.innerHTML = `
  <b>Lieferkosten ${deliveryPrice.toFixed(2)} €</b>
  `;
  msubSum.innerHTML = `
  <b>Zwischensumme ${sum.toFixed(2).replace(".", ",")} €</b>
  `;
  mdeliverySum.innerHTML = `
  <b>Lieferkosten ${deliveryPrice.toFixed(2)} €</b>
  `;

  sum += deliveryPrice;

  totalSum.innerHTML = `
  <b>Gesamt ${sum.toFixed(2).replace(".", ",")} €</b>
  `;
  mtotalSum.innerHTML = `
  <b>Gesamt ${sum.toFixed(2).replace(".", ",")} €</b>
  `;
}

function amountDown(index) {
  orderAmounts[index]--;
  showShoppingCart(orderNames, orderSum, orderAmounts);
  showTotalSum();
}

function amountUp(index) {
  orderAmounts[index]++;
  showShoppingCart(orderNames, orderSum, orderAmounts);
  showTotalSum();
}
