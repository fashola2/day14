// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it




// 1: Show me how to calculate the average price of all items.
let sum = 0
let average
function question1 () {
  // Answer:


  for (var i = 0; i < data.length; i++) {
    sum += data[i].price
  }

average = sum/data.length

console.log(average);
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
let money = []

function question2 () {
  // Answer:

  let items = []

  for (var i = 0; i < data.length; i++) {

  if (data[i].price >= 14.00 && data[i].price <= 18.00) {

      let item = data[i]
      items.push(item)
  }

  }

  console.log(items)




}



// 3: Which item has a "GBP" currency code? Display it's name and price.


function question3 () {
  // Answer:
    let currency = []
    let price = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
    let codes = data[i]
    let duck = data[i].price
    currency.push(codes)
    price.push(duck)
  }

  }


  console.log(currency, price);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:

    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].materials.length; j++) {
          if (data[i].materials[j] === "wood") {
            console.log(data[i].title);
    }
  }
}

}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].materials.length; j++){
      if (data[i].materials[j] <= [8]) {
        console.log(data[i].title);

      }
  }
}
}

// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let selfMade = []
  let counter = 0
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
    counter += 1

    }

  }
  console.log(counter);
}
