// const id = Math.trunc(Math.random() * 100000000);

function placeOrder(callBack) {
  const orderDetails = {
    orderId: "1AC400012CV",
    foodItems: ["Hakka Noddels", "Mushroom chilly", "Ice-cream"],
    amount: 634,
    userName: "Subhajit Mondal",
    deliveryLocation: "Benachity",
  };
  console.log(`Payment in progress amount to be paid : ${orderDetails.amount}`);

  setTimeout(() => {
    console.log(`Payment is done `);
    callBack(orderDetails);
  }, 4000);
}

function prepareFood(orderDetails, callBack) {
  console.log(`Food is prepareing wait for sometime ${orderDetails.foodItems}`);

  setTimeout(() => {
    console.log(`Food prepared!!!`);
    callBack(orderDetails);
  }, 3000);
}

function foodPickup(orderDetails, callBack) {
  console.log(`Food is to be picked up delivery boy on his way`);

  setTimeout(() => {
    console.log(
      `Order is picked ${orderDetails.foodItems} and to be deliver to ${orderDetails.userName}`
    );
    callBack(orderDetails);
  }, 3000);
}

function delivered(orderDetails) {
  setTimeout(() => {
    console.log(
      `order is delivered at ${orderDetails.deliveryLocation} to ${orderDetails.userName}`
    );
  }, 3000);
}

placeOrder((order) => {
  prepareFood(order, (order) => {
    foodPickup(order, (order) => {
      delivered(order);
    });
  });
});
