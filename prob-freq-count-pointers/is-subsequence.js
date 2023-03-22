// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    if (str1.length > str2.length) return false;
    if (!str1) return true;
    let idx1 = 0;
    let idx2 = 0;

    // 'sing' , 'sting'
    while (idx1 < str1.length) {
        if (idx1 >= str1.length && idx2 < str2.length) return false;
        if (idx2 >= str2.length) return false;
        if (str1[idx1] !== str2[idx2]) {
            idx2++;
        } else {
            idx1++;
            idx2++;
        }
    }
    return true;
}
