// add whatever parameters you deem necessary

function makeFrequencyCounter(str) {
    const frequencyCounter = {};

    for (let char of str) {
        frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
    }
    return frequencyCounter;
}

function constructNote(str1, str2) {
    if (!str1.length) return true;
    if (!str2.length) return false;

    const str1FreqCounter = makeFrequencyCounter(str1);
    const str2FreqCounter = makeFrequencyCounter(str2);
    console.log(str1FreqCounter, str2FreqCounter);

    for (let key in str1FreqCounter) {
        if (str1FreqCounter[key] > str2FreqCounter[key]) return false;
    }

    return true;
}
