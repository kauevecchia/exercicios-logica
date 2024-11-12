function binarySearch (nums, n) {
    let low = 0
    let high = nums.length
    steps = 0

    while (low < high) {
        steps += 1
        mid = Math.floor((low + high) / 2)

        if (nums[mid] == n) {
            console.log(`Steps: ${steps}.`)
            return mid
        } else if (nums[mid] < n) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return -1
}


let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let d = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
];


binarySearch(d, 3)
