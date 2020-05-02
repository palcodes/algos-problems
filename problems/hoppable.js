class Solution {
    solve() {
				let nums = [1,3,1,6,7]
        let max = 0;
        for (let i = 0, n = nums.length; i < n; i++) {
            if (i > max) return false;
            max = Math.max(i + nums[i], max);
        }
        return true;
    }
}
