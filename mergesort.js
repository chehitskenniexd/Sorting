
function split(wholeArray) {
  
var firstHalf = wholeArray.slice(0, wholeArray.length/2)
var secondHalf = wholeArray.slice(wholeArray.length/2)
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
    var sorted = [];
     while(arr1.length > 0 && arr2.length > 0) {
         arr1[0] < arr2[0] ? sorted.push(arr1.shift()) 
            : sorted.push(arr2.shift());
     }
     if(arr1.length > 0) {
         sorted = sorted.concat(arr1);
     }
     if(arr2.length > 0) {
        sorted = sorted.concat(arr2);
     }
     return sorted;
}

function mergeSort(array) {;
     if(array.length === 1 || array.length === 0 ) {return array};
     
     var first;
     var second;
     if(array.length > 2) {
        var splits =  split(array);
        first = mergeSort(splits[0]);
        second = mergeSort(splits[1]);
     } else {
         // Since array.length is 2, that means, 2 number values
         return merge([array[0]], [array[1]]);
     }

     return merge(first, second);
}

// Integrated solution
/*
function mergeSort(array) {
     if(array.length === 1 || array.length === 0 ) {return array};

     var sortedFirst;
     var sortedSecond;
     
     if(array.length > 2) {
        var splits =  split(array);
        sortedFirst = mergeSort(splits[0]);
        sortedSecond = mergeSort(splits[1]);
     } else {
         return array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]];
     }

     var sorted = [];
     while(sortedFirst.length > 0 && sortedSecond.length > 0) {
         sortedFirst[0] < sortedSecond[0] ? sorted.push(sortedFirst.shift()) 
            : sorted.push(sortedSecond.shift());
     }
     if(sortedFirst.length > 0) {
         sorted = sorted.concat(sortedFirst);
     }

     if(sortedSecond.length > 0) {
        sorted = sorted.concat(sortedSecond);
     }
     return sorted;
}
*/