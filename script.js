let items = ["Cheeseburger"];
let prices = [5.6];

let orderPrices = [];

let orderItems = document.getElementById("order-items");
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

function addItem() {
  orderPrices.push(prices[0]);

  orderItems.innerHTML += `
  <div class="order-item">
    <p>1x</p>
    <p>${items[0]}</p>
    <p>${prices[0].toFixed(2)} €</p>
  </div>
  `;

  showTotalSum();
}

function showTotalSum() {
  let sum = 0;
  for (let item of orderPrices) {
    sum += item;
  }

  totalSum.innerHTML = `
  <b>Gesamt ${sum.toFixed(2)} €</b>
  `;
}
