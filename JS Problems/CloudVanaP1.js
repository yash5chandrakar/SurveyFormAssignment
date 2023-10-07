// CloudVana JS P-1

let inputString = "This is a sunny day"

function getReversedSentence(str){
    if(str?.length==0 || str?.length==1){
        return str
    }

    let wordArr  = str?.split(" ")

    for(let i=0;i<wordArr.length;i++){
        wordArr[i] = getReversedWord(wordArr[i]);
    }

    wordArr = wordArr.join(" ");
    return wordArr
}

function getReversedWord(str){
    if(str?.length==0 || str?.length==1){
        return str
    }

    let charArr = str.split("")

    for(let i=0;i<charArr.length/2;i++){
        let temp = charArr[i];
        charArr[i] = charArr[charArr.length-i-1];
        charArr[charArr.length-i-1] = temp;
    }

    return charArr.join("")
}

console.log(getReversedSentence(inputString))