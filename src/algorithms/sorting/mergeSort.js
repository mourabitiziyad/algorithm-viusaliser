export const mergeSort = async (arr, speed) => {
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

    const merge = async (left, right) => {
        let arr = [];

      
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                let l = left.shift()
                const barOne = document.getElementById(l)
                if (barOne !== null) barOne.style.backgroundColor = 'white'
                await timeout(speed)
                arr.push(l);
            } else {
                let r = right.shift()
                const barTwo = document.getElementById(r)
                if (barTwo !== null) barTwo.style.backgroundColor = 'white'
                await timeout(speed)
                arr.push(r);
          }
        }
        console.log("right:", right)
        let arr2 = left.slice().concat(right.slice())
        return arr.concat(arr2);
      }
      
      function mergeSort(arr) {
        if (arr.length < 2) {
          return arr;
        }
      
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
      
        return merge(mergeSort(left), mergeSort(right));
      }

      const am = mergeSort(arr)
      console.log(am)
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}







// top-down implementation
