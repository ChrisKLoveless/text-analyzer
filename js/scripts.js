//Utility Logic
function isEmpty(testString){
    return (testString.trim().length === 0);
}

// Business Logic
function wordCounter(text) {
    if (isEmpty(text)) {
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

function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(' ');
    let count = 0;
    textArray.forEach(function (element) {
        if (isEmpty(word)) {
            return count;
        }
        else if (element.toLowerCase().includes(word.toLowerCase())) {
            count++;
        }
    });
    return count;
}

function removeBadWords(text) {
    let textArray = text.split(" ");
    let badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];

    textArray.forEach(function (element, i) {
        if (badWords.includes(element)) {
            textArray.splice(i, 10);
        } else {
            return text;
        }
    });
    return textArray.join(' ');
}

function boldPassage(word, text) {
    if ((isEmpty(text)) || (isEmpty(word))) {
        return null;
    }
    const p = document.createElement('p');
    let textArray = text.split(' ');
    textArray.forEach(function (element, index) {
        if (word === element) {
            const bold = document.createElement('strong');
            bold.append(element);
            p.append(bold);
        } else {
            p.append(element);
        }
        if(index !== (textArray.length -1)){
            p.append(' ');
        }
    });
 
    return p;
}

function boldLetters(letters, text) {
    if (isEmpty(letters) || (isEmpty(text))) {
        return null;
    }
    const p = document.createElement('p');
    let letterArray = text.split('');
    letterArray.forEach(function (element, index) {
        letterArray [index + 1];
    })

}

/*function commonWords(text) {
    if (isEmpty(text)) {
        return null;
    }
    let textArray = text.split(' ');
    let count = 0;
    textArray.forEach(function (element, index) {
        if (isEmpty(element)) {
            return count;
        }
    })
}*/

// UI Logic

function handleFormSubmission(event) {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
   
    let boldedPassage = boldPassage(word, passage);
    if(boldPassage){
        document.querySelector('div#bolded-passage').append(boldedPassage);
    }else{
        document.querySelector('div#bolded-passage').innerText = null;
    }
}

window.addEventListener("load", function () {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});