function bubbleSort(arr){
    if(arr.length > 1){
        var numIterated = 1;
        // Keep sorting, if a swap happens
        do{
            var swapped = false;
            for(let i = 0; i < arr.length - numIterated; ++i){
                if(arr[i] > arr[i+1]){
                    var greater = arr[i+1];
                    arr[i+1] = arr[i];
                    arr[i] = greater;
                    swapped = true;
                }
            }
            ++numIterated;
        } while (swapped);
    } 
    return arr;
}