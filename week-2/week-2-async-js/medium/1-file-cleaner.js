// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

let content = fs.readFileSync("magic.txt","UTF-8");

content = content.replace(/\s+/g," ");

fs.writeFileSync("magic.txt",content);

