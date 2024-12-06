/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) 
{
  result = []
  categorys = []
  prices = []
  l = transactions.length;
  for (i = 0; i<l; i++){
    if (categorys.includes(transactions[i].category)){
      prices[categorys.indexOf(transactions[i].category)] += transactions[i].price
    }
    else{
      categorys.push(transactions[i].category)
      prices.push(transactions[i].price)
    }

  }
  //console.log(categorys,prices)
  n = categorys.length;
  for (j=0; j<n; j++){
    a = {}
    a["category"] = categorys[j];
    a["totalSpent"] = prices[j];
    result.push(a);

  }

  return result;
}



module.exports = calculateTotalSpentByCategory;
