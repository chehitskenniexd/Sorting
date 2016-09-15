
function split(wholeArray) {
  
var firstHalf = wholeArray.slice(0, wholeArray.length/2)
var secondHalf = wholeArray.slice(wholeArray.length/2)
  return [firstHalf, secondHalf];
}

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