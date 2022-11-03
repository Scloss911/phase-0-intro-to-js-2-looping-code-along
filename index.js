const names = ["Giadalupe", "Ollie", "Aki"];
const event = 'surprise';

function writeCards(names, event) {
    let newGreeting = [];
    for (let x = 0; x < names.length; x++) {
        newGreeting.push (`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return newGreeting;
}
console.log(writeCards(names, event));

function countDown(positiveNumber){
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;

    }
}
console.log(countDown(10))

