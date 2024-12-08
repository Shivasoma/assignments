/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    function main(resolve){
        let startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliseconds);
        resolve();
        }
    return new Promise(main);

}

function callBack() {
    console.log("Done");
}
sleep(3000).then(callBack)

module.exports = sleep;
