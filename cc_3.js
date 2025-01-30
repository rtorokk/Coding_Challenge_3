// Task 1 - Product Price Management

let prices = [10, 20, 30, 40, 50]; // array of prices
prices.push(60);//add new price to array
prices.pop();//remove last price from array
console.log("Updated Prices:", prices);//print array

// Task 2 - Modifying Customer Orders

let orders = [2, 5, 9, 12, 15]; // array of quantities
orders [2] += 5; // add 5 to the third element
let calculateTotal = orders.reduce((total, order) => total + order, 0); // calculate total
console.log("Updated Orders:", orders); // print array
console.log("Total Orders:", calculateTotal); // print total
