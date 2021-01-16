export const selectionSort = async (arr, speed) => {

    

    if(JSON.stringify(arr.slice().sort(function(a, b){return a - b})) === JSON.stringify(arr)) {

        for (let i=0; i< arr.length; i++) document.getElementById(i).style.backgroundColor = 'white'
        await timeout(150) // 150 ms
        for (let i=0; i< arr.length; i++) document.getElementById(i).style.backgroundColor = 'rgba(0,136,169, 1)'
        await timeout(150) // 150 ms
        for (let i=0; i< arr.length; i++) document.getElementById(i).style.backgroundColor = 'white'
        await timeout(150) // 150 ms
        for (let i=0; i< arr.length; i++) document.getElementById(i).style.backgroundColor = 'rgba(0,136,169, 1)'

        return
    }

    let min_index = 0
    for (let i = 0; i < arr.length - 1; i++ ) {
        min_index = i

        const barOne = document.getElementById(i)
        var barMin = document.getElementById(min_index)
        barOne.style.backgroundColor = 'white' 
        barMin.style.backgroundColor = 'blue' 
        await timeout(speed) // 150 ms

        for (let j = i + 1; j < arr.length; j++ ) {
            // const barMin = document.getElementById(min_index)
            const barTwo = document.getElementById(j)
            barTwo.style.backgroundColor = 'white'
            await timeout(speed)
            if (arr[j] < arr[min_index]) {
                barMin.style.backgroundColor = barTwo.style.backgroundColor = 'red'
                await timeout(1.5*speed)
                min_index = j
                barMin.style.backgroundColor = 'rgba(0,136,169, 1)' 
                barMin = document.getElementById(min_index)
                barMin.style.backgroundColor = 'blue'
                await timeout(1.5*speed)
            }
            if (barTwo.style.backgroundColor === 'white') {
                barTwo.style.backgroundColor = 'rgba(0,136,169, 1)'
            }
            await timeout(speed)
        }
        let temp = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = temp

        let tempHeight = barMin.style.height
        barMin.style.height = barOne.style.height
        barOne.style.height = tempHeight
        barMin.style.backgroundColor = barOne.style.backgroundColor = 'blue'
        await timeout(speed)
        barMin.style.backgroundColor = 'rgba(0,136,169, 1)'

        barOne.style.backgroundColor = 'gray'
        await timeout(speed)
    }
    for (let i=0; i< arr.length; i++) {
        document.getElementById(i).style.backgroundColor = 'rgba(0,136,169, 1)'
        await timeout(20) // 150 ms
    }
    console.log("Selection Sort:", arr)
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}