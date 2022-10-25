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

function removeBadWords(word, text) {
    let textArray = text.split(" ");
    //console.log(textArray);
    textArray.forEach(function (element) {
        if (element === word) {
        textArray.remove(word);
        }
    });
return textArray;
}


console.log(numberOfOccurencesInText("red", "I like RED, don't you?"));
console.log(removeBadWords('zoinks', 'go zoinks yourself'));