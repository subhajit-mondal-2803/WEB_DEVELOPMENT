const orderDetails = {
  orderId: "1AC400012CV",
  foodItems: ["Hakka Noddels", "Mushroom chilly", "Ice-cream"],
  amount: 634,
  userName: "Subhajit Mondal",
  deliveryLocation: "Benachity",
};

function confirmOrder(orderDetails, callBack) {
  console.log(`Make the payment of rupees ${orderDetails.amount}`);
  console.log(`Waiting......`);
  setTimeout(() => {
    console.log(`Payment is done !!!`);
    orderDetails.status = true;
    callBack(orderDetails);
  }, 3000);
}

function prepareFood(orderDetails, callBack) {
  console.log(`Food preparing in process .....`);
  setTimeout(() => {
    console.log(`Food is ready !!`);
    orderDetails.tokenId = "14A90";
    callBack(orderDetails);
  }, 3000);
}

function delivery(orderDetails) {
  console.log(`Order in its way to deliver ${orderDetails.deliveryLocation}`);

  setTimeout(() => {
    console.log(`Delivery is done !!!! Enjoy the meal !!!`);
  }, 3000);
}

confirmOrder(orderDetails, (orderDetails) => {
  prepareFood(orderDetails, (orderDetails) => {
    delivery(orderDetails);
  });
});
