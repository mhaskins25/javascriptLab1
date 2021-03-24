const name = 'Morgan';
const age = 23;
const birthday = 'March 25';
let detroitGC = false;
const lifeEvents = ["I was born in Brighton, MI", "I went to Western Michigan", "I moved to Grand Rapids last year", "I'm not a Grand Circus graduate yet"];


if (detroitGC === true){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true){
    let randomNumber = Math.floor(10*(Math.random()));
    if (randomNumber != 5){
        counter++;
        console.log(`${randomNumber} !==5`);
    } else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}