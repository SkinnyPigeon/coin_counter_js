var cash = 100

var pounds = Math.floor( cash / 100 )
var fifties = Math.floor( cash % 100 / 50 ) 
var twenties = Math.floor( cash % 100 % 50 / 20 ) 
var tens = Math.floor( cash % 100 % 50 % 20 / 10 ) 
var fives = Math.floor( cash % 100 % 50 % 20 % 10 / 5 ) 
var twos = Math.floor( cash % 100 % 50 % 20 % 10 % 5 / 2) 
var ones = Math.floor( cash % 100 % 50 % 20 % 10 % 5 % 2 / 1 ) 

console.log( "Total(p): " + cash )
console.log( "£1: " + pounds )
console.log( "50p: " + fifties )
console.log( "20p: " + twenties )
console.log( "10p: " + tens )
console.log( "5p: " + fives )
console.log( "2p: " + twos )
console.log( "1p: " + ones )
