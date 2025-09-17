// [Approach] Fixed-Size Group Reversal

const reverse_groups_fixed_size = (arr, k) => {
    let n = arr.length
    for(let i = 0; i<n; i+=k){
        let left = i // i = 0, left = 0
        // i = 0, right = 2
        // i = 3, right = 5
        // i = 6, right = 8 -> out of bounds => so that's why we need Math.min => right = 7
        // why right = Math.min(i + k - 1, n - 1) ?
        // because if the last group has less than k elements, we need to adjust the right pointer to not go out of bounds
        let right = Math.min(i + k - 1, n - 1)
        // Math.min(0 + 3 - 1, 8 - 1) = Math.min(2, 7) = 2
        // Math.min(3 + 3 - 1, 8 - 1) = Math.min(5, 7) = 5
        // Math.min(6 + 3 - 1, 8 - 1) = Math.min(8, 7) = 7
        console.log(`Reversing group from index ${left} to ${right}`)
        while(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return arr
}
console.log(reverse_groups_fixed_size([1, 2, 3, 4, 5, 6, 7, 8],3).join(" ")) // expected output: [3, 2, 1, 6, 5, 4, 8, 7]