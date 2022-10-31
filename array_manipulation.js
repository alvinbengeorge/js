let arr = [];

function create_array(number) {
    for (i=1; i<number+1; i++) {
        arr.push(Math.floor(Math.random()*10))
    }
}

create_array(10)
console.log(arr)

function bubble_sort(ar) {
    let temp = 0;
    for (i=0; i<ar.length; i++) {
        for (j=0; j<ar.length; j++) {
            if (ar[j+1] < ar[j]) {
                temp = ar[j+1];
                ar[j+1] = ar[j];
                ar[j] = temp;                
            }
        }
    }
    return ar
}
console.log("\n\nBubble Sort:")
console.log(bubble_sort(arr))