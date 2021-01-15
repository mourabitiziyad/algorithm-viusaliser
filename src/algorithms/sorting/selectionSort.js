export const selectionSort = (arr, {animation}) => {
    let min_index = 0
    for (let i = 0; i < arr.length - 1; i++ ) {
        min_index = i
        for (let j = i + 1; j < arr.length; j++ ) {
            if (arr[j] < arr[min_index]) {
                min_index = j
            }
        }
        let temp = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = temp
    }
    console.log("Selection Sort:", arr)
}