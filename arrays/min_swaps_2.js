const minSwaps = (arr) => {
    let swaps = 0
    for ( let i = 0; i < arr.length; i++) {
        if(arr[i] != (i+1)) {
            let t = i;
            while(arr[t] != (i+1)){
                t++
            }
            [arr[t], arr[i]] = [arr[i], arr[t]]
            swaps++
        }
    }
    return swaps 
}

console.log(`[7, 1, 3, 2, 4, 5, 6]: ${minSwaps([7, 1, 3, 2, 4, 5, 6])}`)