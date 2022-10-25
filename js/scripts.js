// Business Logic
function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    } else {
        let count = 0;
        const textArray = text.trim().split(" ");
        textArray.forEach(function (element) {
            if (!Number(element)) {
                count++;
            }
        });
        return count;
    }
}

function numberOfOccurencesInText(word, text) {
    const textArray = text.split(' ');
    let count = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            count++;
        }
    });
    return count;
}

function removeBadWords(text) {
    let textArray = text.split(" ");
    let badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
    //console.log(textArray);
    textArray.forEach(function (element, i) {
        if (badWords.includes(element)) {
            console.log(textArray.splice(i, 10));
        } else {
            console.log(text);
        }
    });
    console.log(textArray)
    return textArray.join(' ');

}


//console.log(numberOfOccurencesInText("red", "I like RED, don't you?"));
console.log(removeBadWords('You are a muppeteer zoinks muppeteer'));