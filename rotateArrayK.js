/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k>nums.length){
    k = k % nums.length;
    } // In case k is greater than the length of the array

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
};

// Helper function to reverse elements in the array between start and end indices
function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        
        // Move indices towards the center
        start++;
        end--;
    }
}


//second approach
function rotate (nums,k){
    let size = nums.length;

    if(k>size){
        k = k%size;
    }

    const rotatted =nums.splice(size-k,size);
    nums.unshift(...rotatted);
    return nums;
}
