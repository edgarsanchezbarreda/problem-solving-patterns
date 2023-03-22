// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    let obj = {};

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] && vals[i]) {
            obj[keys[i]] = vals[i];
        } else {
            obj[keys[i]] = null;
        }
    }
    return obj;
}
