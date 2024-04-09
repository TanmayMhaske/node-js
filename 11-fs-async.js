const {readFile, writeFile} = require('fs');
console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
    
        writeFile('./content/result-async-attempt2.txt',`Here is the combine result of ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log('starting with new task')

//pat on back