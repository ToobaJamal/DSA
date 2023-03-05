/*
This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found. 
Do not use indexOf to solve this! 
This function should use iteration not recursion.
*/

function linearSearch(array, value) {
    let index = -1
    for(let i in array) {
        if (array[i] === value) {
            index = i
        }
    }
    return index
}
