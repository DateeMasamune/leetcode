"use strict";
const arr = [1, 2, 3, 4, 5, 6];
const te = arr[Symbol.iterator]();
console.log('=====>te', te.next());
console.log('=====>te', te.next());
console.log('=====>te', te.next());
console.log('=====>te', te.next());
console.log('=====>te', te.next());
