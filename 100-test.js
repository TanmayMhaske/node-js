// console.log('first');
// setImmediate(()=>{
//     console.log('third')
// });

// console.log('second')

console.log("first");
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");