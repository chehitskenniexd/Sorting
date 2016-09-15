describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });

});

describe('Merge Sort', function(){
  it('return sorted array in same order', function(){
     expect(mergeSort([1,2,3,4])).toEqual([1,2,3,4]);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
     expect(mergeSort([4,3,2,1])).toEqual([1,2,3,4]);
  });

    it('empty', function(){
     expect(mergeSort([])).toEqual([]);
  });

    it('correctly sorts array with odd number of elements', function(){
     expect(mergeSort([50,25,14,8,12,5,0])).toEqual([0,5,8,12,14,25,50]);
  });


});