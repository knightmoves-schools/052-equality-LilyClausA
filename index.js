function priceCheck(price){
    if ('price' === 1.50){
        return "match";
        document.getElementById("result").innerHTML = priceCheck;
    }
}




//function validateAge(oldEnough){
//  let logic = true;
//  if (logic){
//    document.getElementById("result").innerHTML = 'old enough';
//function validateAge(oldEnough) {
//  if (oldEnough === true) {
//    return "old enough";


//the index.js file
  //    ✕ should create a function named `priceCheck` that takes a price and returns `match` if the price is equivalent to `1.50` (340 ms)
  //    ✕ should return `match` when the string `1.50` is passed in as an argument to `priceCheck` (124 ms)
  //    ✓ should not return `match` when `1.00` is passed in as an argument to `priceCheck` (127 ms)
  //    ✕ should create a function named `strictPriceCheck` that takes a price and returns `match` only if the price is a number that is strictly equivalent to `1.50` (128 ms)
  //    ✕ should not return `match` when the string `1.50` is passed in as an argument to `strictPriceCheck` (129 ms)
  //    ✕ should not return `match` when `1.00` is passed in as an argument to `strictPriceCheck` (131 ms)
  //
//● the index.js file › should create a function named `priceCheck` that takes a price and returns `match` if the price is equivalent to `1.50`
  
  //    expect(received).toBe(expected) // Object.is equality
  
  //    Expected: "match"
  //    Received: undefined
  
  //      46 |       });
  //      47 |
  //    > 48 |       expect(result).toBe('match');
  //         |                      ^
  //      49 |   });
  //      50 |
  //      51 |   it('should return `match` when the string `1.50` is passed in as an argument to `priceCheck`', async function() {
  //
  //      at Object.toBe (test/verify.test.js:48:22)
  
//● the index.js file › should return `match` when the string `1.50` is passed in as an argument to `priceCheck`
  
  //    expect(received).toBe(expected) // Object.is equality
  
  //    Expected: "match"
  //    Received: undefined
  //
  //      54 |       });
  //      55 |
  //    > 56 |       expect(result).toBe('match');        
  //         |                      ^
  //      57 |   });
  //      58 |
  //      59 |   it('should not return `match` when `1.00` is passed in as an argument to `priceCheck`', async function() {
  //
  //      at Object.toBe (test/verify.test.js:56:22)
  //
 


//should create a function named priceCheck 
// that takes a price and returns the 
// string match if the price is equivalent 
// to 1.50

//should return match when the string 1.50
//  is passed in as an argument to
//  priceCheck

//should not return match when 1.00 is
//  passed in as an argument to priceCheck

//should create a function named 
// strictPriceCheck that takes a price and 
// returns the string match only if the 
// price is a number that is strictly 
// equivalent to 1.50

//should not return match when the string 
// 1.50 is passed in as an argument to
//  strictPriceCheck

//should not return match when 1.00 is 
// passed in as an argument to 
// strictPriceCheck