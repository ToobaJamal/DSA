/*
This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. 
Do not use indexOf to solve this! This function should use recursion. Make sure that your algorithm runs in O(log(n)) and not O(n).
*/

function binarySearchRecursive(arr, value, start = 0, end = arr.length -1) {
    if(start > end) {
        return -1
    }
    
    const midIndex = Math.floor((start + end) / 2)
    
    if(arr[midIndex] === value) {
        return midIndex
    }
    else if (arr[midIndex] > value) {
        return binarySearchRecursive(arr, value, start, end = midIndex - 1)
    }
    else {
         return binarySearchRecursive(arr, value, start = midIndex + 1, end)
    }
}
