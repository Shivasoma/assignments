// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function print(err,data){
    
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
}

console.log("start of reading file  \n");
const contents = fs.readFile("week-2-async-js/easy/a.txt","utf-8",print);

console.log('start of expensive op');

c = 0
for (i=0;i<999999999;i++){
    c+=i;
}

console.log(`end of expensive op ${c}\n`)

