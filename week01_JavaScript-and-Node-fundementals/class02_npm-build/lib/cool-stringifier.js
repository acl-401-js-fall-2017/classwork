
class CoolStringifier {
    constructor(sentence) {
        this.sentence = sentence;        
    }

    getWords() {
        return this.sentence.split(' ');
    }

    reverseWords() {
        const words = this.getWords();
        const reversedWords = words.map(word => {
            return word.split('').reverse().join('');
        });
        this.sentence = reversedWords.join(' ');
        return this;
    }

    reverseWordOrder() {
        this.sentence = this.getWords()
            .reverse()
            .join(' ');
        return this;
    }

    shout() {
        this.sentence = this.sentence.toUpperCase();
        return this;
    }
}

module.exports = CoolStringifier;