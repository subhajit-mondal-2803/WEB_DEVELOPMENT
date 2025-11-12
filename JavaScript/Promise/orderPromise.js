// const id = Math.trunc(Math.random() * 100000000);

const orderDetails = {
  orderId: "1AC400012CV",
  foodItems: ["Hakka Noddels", "Mushroom chilly", "Ice-cream"],
  amount: 634,
  userName: "Subhajit Mondal",
  deliveryLocation: "Benachity",
};

function placeOrder(orderDetails) {
  console.log(`Payment in progress amount to be paid : ${orderDetails.amount}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Payment is done `);
      orderDetails.status = true;
      resolve(orderDetails);
    }, 4000);
  });
}

function prepareFood(orderDetails) {
  console.log(`Food is prepareing wait for sometime ${orderDetails.foodItems}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Food prepared!!!`);
      orderDetails.token = "1487AJ";
      resolve(orderDetails);
    }, 3000);
  });
}

function foodPickup(orderDetails) {
  console.log(`Food is to be picked up delivery boy on his way`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `Order is picked ${orderDetails.foodItems} and to be deliver to ${orderDetails.userName}`
      );
      orderDetails.ready = true;
      resolve(orderDetails);
    }, 3000);
  });
}

function delivered(orderDetails) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `order is delivered at ${orderDetails.deliveryLocation} to ${orderDetails.userName}`
      );
      orderDetails.delivered = true;
    }, 3000);
  });
}

placeOrder(orderDetails)
  .then((res) => {
    return prepareFood(res);
  })
  .then((res) => {
    return foodPickup(res);
  })
  .then((res) => {
    return delivered(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
