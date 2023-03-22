// add whatever parameters you deem necessary
function countPairs(nums, target) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);

    let start = 0;
    let end = nums.length - 1;
    let sumCount = 0;

    while (start < end) {
        let sum = nums[start] + nums[end];
        if (nums[start] > target) return 0;

        if (sum === target) {
            sumCount++;
            start++;
            end--;
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }

    return sumCount;
}
