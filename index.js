for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  const names = ["Alice", "Bob", "Charlie"];
const messages = writeCards(names);
console.log(messages);

function writeCards(names, giftType) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${giftType} gift!`);
  }
