// add whatever parameters you deem necessary

function createFrequencyCounter(number) {
    const counter = {};

    for (let num of number) {
        counter[num] = counter[num] + 1 || 1;
    }
    return counter;
}

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) return false;

    const str1Frequency = createFrequencyCounter(str1);
    const str2Frequency = createFrequencyCounter(str2);

    for (let key in str1Frequency) {
        if (str1Frequency[key] !== str2Frequency[key]) return false;
    }

    return true;
}
