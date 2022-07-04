
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {

    if (nums.length < 2) {
        return nums.length;
    }

    let up = 1;
    let down = 1;

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i - 1] > nums[i]) {
            down = up + 1;
        } else if (nums[i - 1] < nums[i]) {
            up = down + 1;
        }
    }

    return Math.max(down, up);
};
