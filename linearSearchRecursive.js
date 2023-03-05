/*
If you have not yet implemented this (it is a bonus in the recursion exercise). 
This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. 
Do not use indexOf to solve this! This function should use recursion.
*/

function linearSearchRecursive(array, value, index=0) {
    if(array.length <= index) {
        return -1
    }
    else if (array[index] === value) {
        return index
    }
    else {
        return linearSearchRecursive(array, value, index+1)
    }
}
