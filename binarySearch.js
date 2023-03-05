/*
This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. 
Do not use indexOf to solve this! This function should use iteration not recursion. Make sure that your algorithm runs in O(log(n)) and not O(n).
*/

function binarySearch(array, value) {
    let midIndex 
    let index = -1
    const nums = array.sort((a, b) => a - b)
    midIndex = Math.floor(nums.length / 2)
    if(array[midIndex] === value) {
        index = midIndex
    }
    else if(array[midIndex] > value) {
        for(let i=0; i<midIndex; i++) {
            if(array[i] === value) {
                index = i
            }
        }
    }
    else if (array[midIndex] < value) {
        for(let i=midIndex; i<array.length; i++) {
            if(array[i] === value) {
                index = i
            }
        } 
    }
    return index
}
