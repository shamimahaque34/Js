function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        let temp = nums[start];
        // console.log(temp);
        nums[start] = nums[end];
        console.log(nums[start]);
        nums[end] = temp;
        console.log(nums[end]);
        
        // Move indices towards the center
        start++;
        console.log(start++);
        end--;
        console.log(end--);
    }
}

reverse([1,2,5,6,7,9],1,3);