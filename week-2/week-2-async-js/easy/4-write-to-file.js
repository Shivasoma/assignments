// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

function print(err,data){
    
    if(err){
        console.log(err);
    }

}

// const contents = fs.readFileSync("week-2-async-js/easy/a.txt","utf-8",print);

fs.writeFile("week-2-async-js/easy/b.txt","contents","utf-8",print);






