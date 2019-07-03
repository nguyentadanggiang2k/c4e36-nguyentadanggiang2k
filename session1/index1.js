
inventory = {
          gold : 500,
        pouch : ['flint', 'twine', 'gemstone'],
        backpack : ['xylophone','dagger', 'bedroll','bread loaf'],
     };

     inventory['pocket']=['seashell', 'strange berry', 'lint'];
     
     inventory['backpack'].sort();

      inventory['backpack'].splice(2,1);
     
     inventory['gold']=inventory['gold']+50;
    
 console.log(inventory);



 stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}

prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

const keys = Object.keys(prices);
for(let i = 0; i < keys.length; i++){
console.log(keys[i]);
console.log('price' + prices[keys[i]]);
console.log('stock' + stock[keys[i]]);
}    
total = 0;
for(let i = 0; i < keys.length; i++){
     money = prices[keys[i]] * stock[keys[i]];
     total = total + money ;
}
console.log("The total money is", total);