// Problem Solving Process

// 1. Understand the Problem

function charCount(str) {
    // create an empty object to store character counts
    const obj = {};
    // Loop over each character in str
    for (let char of str) {
        // Check if each character is either a string or number
        if (/[A-Z0-9]/i.test(char)) {
            char = char.toLowerCase();
            if (obj[char]) {
                obj[char] += 1;
            } else {
                obj[char] = 1;
            }
        }
    }

    return obj;
    // return object containing character counts
}

function charCountLessLines(str) {
    return str.split('').reduce((obj, char) => {
        if (/[A-Z0-9]/i.test(char)) {
            char = char.toLowerCase();
            obj[char] = obj[char] + 1 || 1;
        }
        return obj;
    }, {});
}

// is the above approach better?
// No, there are two loops instead of one, and it is for me at least harder to read.
// It does have less lines, but it does not mean that it is better

// ___________________________

// Common problem solving patters

// Frequency Counters

// Naive Approach
function squares(nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        const foundIdx = nums2.indexOf(nums1[i] ** 2);
        if (foundIdx === -1) return false;
        nums2.splice(foundIdx, 1);
    }
    return true;
}

// _________________________________

// function makeFrequencyCounter(arr) {
//     // Create an empty frequency counter
//     const freqCounter = {};

//     // loop over the array, and check if the element exists in the frequency counter.
//     // If the element does not exist in frequency counter, set its value to one.
//     // If the element does exist in the counter, than add 1 to whatever its value is.
//     for (let el of arr) {
//         freqCounter[el] = freqCounter[el] + 1 || 1;
//     }

//     // return the freqCounter
//     return freqCounter;
// }

// The above function workds, but remember that when you store the numbers as keys in the object, they really are stored as string.
// This still workds because JS allows it, but with other languages it may not work and is just good to know if asked during an interview

// To correct the above problem, use a map instead of an object
function makeFrequencyCounterMap(arr) {
    const freqCounter = new Map();

    for (let el of arr) {
        // store the value of each key
        // if the key already exists in the map, store the count to whatever it already is
        // Otherwise, store its value as 0
        let elCount = freqCounter.get(el) || 0;

        // Set the current element as a key in the map, with its current value + 1
        freqCounter.set(el, elCount + 1);
    }

    return freqCounter;
}

// function squaresBetter(nums1, nums2) {
//     if (nums1.length !== nums1.length) return false;

//     const nums1Freq = makeFrequencyCounterMap(nums1);
//     const nums2Freq = makeFrequencyCounterMap(nums2);

//     for (let key in nums1Freq) {
//         if (!nums2Freq[key ** 2]) return false;
//         if (nums1Freq[key] !== nums2Freq[key ** 2]) return false;
//     }
//     return true;
// }
function squaresBetterMap(nums1, nums2) {
    if (nums1.length !== nums1.length) return false;

    const nums1Freq = makeFrequencyCounterMap(nums1);
    const nums2Freq = makeFrequencyCounterMap(nums2);

    for (let key in nums1Freq.keys()) {
        if (nums2Freq.has(key ** 2) === false) {
            return false;
        }
        if (nums1.get(key) !== nums2.get(key ** 2)) {
            return false;
        }
    }
    return true;
}

// The above solution has a runtime of O(3n) because it has loops
// This is a significant improvement from the first solution which contained a nested loop, which would have been O(n^2)

// Given two strings, write a function called validAnagram, which determines if the second strin gis an anagram of the first

// An anagram is a word, phrase, or name formed by rearranging the letters of anotherm such as cinema and iceman

// __________________

// Questions:
// Are the two strings composed of only letters? Should I ignore spaces, numbers, or special characters?
// 			-> In this case, lets assume the strings that are passed are only letters or empty strings
// Should I count lower and uppercase as different values?? Or store them all as lower case??
// 			-> For this example, assume all strings are composed of only lowercase
// How should I handle if there is only one string that is passed and not two? Or no strings at all
// 			-> Assume both strings are passed in

// Process:
// First, I know that I want to store each character in each string in a frequency counter.
// I can store them in a frequency counter by creating a helper function to do so.
// In this function, I will use a object, because they are strings already and not numbers like the previous example so a map is not necessary.
// This will be done by looping through the string that is passed in, and checking if the character is in the obj or not.

// Next I want to create the validAnagram function, where I will check if the two strings are of the same length, if they are not, then quickly return false.
// Next, store the frequency counter for each string as a variable;
// Next, loop over the keys in the first frequency counter, str1, and do some more conditional checks
// Check if the character in the first freqcounter exists in the second, if not, return false
// Then, check if the character count of the first freqCounter match the second, if not return false

// If these all pass return true!

function freqCounter(str) {
    const frequencyCounter = {};

    for (let char of str) {
        frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
    }

    return frequencyCounter;
}

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const str1FreqCounter = freqCounter(str1);
    const str2FreqCounter = freqCounter(str2);

    for (let key in str1FreqCounter) {
        if (str1FreqCounter[key] !== str2FreqCounter[key]) return false;
    }
    return true;
}

// ______________________________________________________________________

// Multiple Pointers Pattern

// sumZero Naive Approach

// This is the brute force approach and is O(n^2)
function sumZeroBad(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return [nums[i], nums[j]];
            }
        }
    }
}

// Multiple Pointer Approach

// Run time is O(n)
function sumZero(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === 0) {
            return [nums[left], nums[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
