var cash = 12.58

var multiply = 100 * cash

var tenPounds = Math.floor( multiply / 1000 )
var fivePounds = Math.floor( multiply % 1000 / 500 )
var twoPounds = Math.floor( multiply % 1000 % 500 / 200 )
var pounds = Math.floor( multiply % 1000 % 500 % 200 / 100 )
var fifties = Math.floor( multiply % 1000 % 500 % 200 % 100 / 50 ) 
var twenties = Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 / 20 ) 
var tens = Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 % 20 / 10 ) 
var fives = Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 % 20 % 10 / 5 ) 
var twos = Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 % 20 % 10 % 5 / 2) 
var ones = Math.floor( multiply % 1000 % 500 % 200 % 100 % 50 % 20 % 10 % 5 % 2 / 1 ) 

console.log( "Total: £" + cash )
console.log( "£10: " + tenPounds )
console.log( "£5: " + fivePounds )
console.log( "£2: " + twoPounds )
console.log( "£1: " + pounds )
console.log( "50p: " + fifties )
console.log( "20p: " + twenties )
console.log( "10p: " + tens )
console.log( "5p: " + fives )
console.log( "2p: " + twos )
console.log( "1p: " + ones )
