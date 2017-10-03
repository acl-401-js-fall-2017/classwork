
class CoolStringifier {
    constructor(sentence) {
        this.sentence = sentence;        
    }

    reverseWords() {
        const words = this.sentence.split(' ');
        const reversedWords = words.map(word => {
            return word.split('').reverse().join('');
        });
        this.sentence = reversedWords.join(' ');
    }

    reverseWordOrder() {
        this.sentence = this.sentence
            .split(' ')
            .reverse()
            .join(' ');
    }
}

module.exports = CoolStringifier;