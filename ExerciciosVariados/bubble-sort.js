const prompt = require('readline-sync')

let nums = []
while(nums.length < 5) {
    const num = Number(prompt.question("Insira um número: "))
    nums.push(num)
}



function bubbleSort(nums) {
    let length = nums.length
    for(let i = 0; i < length; i++) {
        console.log(nums)
        for(let j = 0; j < length - 1; j++) {
            if(nums[j] > nums[j + 1]) {
                let aux = nums[j + 1]
                nums[j + 1] = nums[j]
                nums[j] = aux
        }
    }
}
            
    return nums
}
    

console.log(bubbleSort(nums))