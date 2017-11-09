class Pet {
    constructor(name) {
        this.name = name;
    }

    speak(intro = 'blah') {
        return `${intro} ${this ? this.name : 'no this!'}`;
    }

    feed() {
        const fn = () => {
            console.log(this.name, 'was feed');
        };
        setTimeout(fn, 1000);
    }
}

const pet1 = new Pet('janky');
const pet2 = new Pet('echo');
console.log('same speak function?', pet1.speak === pet2.speak);
console.log(pet1.speak());
console.log(pet2.speak());

const speak = pet1.speak;
console.log(speak('look out'));

console.log(speak.call({ name: 'out of the blue' }, 'hello'));
console.log(speak.apply({ name: 'out of the blue' }, ['hello']));

const boundSpeak = speak.bind({ name: 'no escape' });
console.log(boundSpeak('guess what'));
console.log(boundSpeak.call({ name: 'can you hear me?'}, 'call on top of bind'));

console.log(pet1.feed());


const feed = pet1.feed;

feed.call({ name: 'sneaky feed' });