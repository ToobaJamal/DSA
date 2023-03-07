function selectionSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let minElem = i
        
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minElem]) {
                minElem = j
            }
        }
        if(minElem !== i) {
            const temp = arr[i]
            arr[i] = arr[minElem]
            arr[minElem] = temp
        }
    }
    return arr
}
