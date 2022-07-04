
public class Solution {

    public int wiggleMaxLength(int[] nums) {
        if (nums.length < 2) {
            return nums.length;
        }

        int up = 1;
        int down = 1;

        for (int i = 1; i < nums.length; ++i) {
            if (nums[i - 1] > nums[i]) {
                down = up + 1;
            } else if (nums[i - 1] < nums[i]) {
                up = down + 1;
            }
        }

        return Math.max(down, up);
    }
}
