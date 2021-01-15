export const bubbleSort = async (arr, speed) => {
    for ( let i = 0; i < arr.length - 1; i++) {
        for ( let j = 0; j < arr.length - i - 1; j++) {
                const barOne = document.getElementById(j)
                const barTwo = document.getElementById(j+1)
                barOne.style.backgroundColor = barTwo.style.backgroundColor = 'white'
                await timeout(speed*150/100) // 150 ms
                if ( arr[j] > arr[j+1] ) {
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    barOne.style.backgroundColor = barTwo.style.backgroundColor = 'red'
                    await timeout(speed*250/100) // 250 ms
                    let tempHeight = barOne.style.height
                    barOne.style.height = barTwo.style.height
                    barTwo.style.height = tempHeight
                await timeout(speed*250/100)  // 250 ms
            }
                barOne.style.backgroundColor = 'rgba(0,136,169, 1)'
                barTwo.style.backgroundColor = 'rgba(0,136,169, 1)'
        }
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}