describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a reversed array', function(){
    expect( bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
    expect( bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]).length ).toEqual(10);
  });

  it('handles an array with one element', function(){
      expect(bubbleSort([1])).toEqual([1]);
      expect(bubbleSort([1]).length).toEqual(1);
  })

  it('correctly handles an array with repeating elements', function(){
      expect(bubbleSort([1, 1, 1])).toEqual([1, 1, 1]);
      expect(bubbleSort([1, 3, 3, 2, 3])).toEqual([1, 2, 3, 3, 3]);
  })

  it('correctly sorts strings', function(){
      expect(bubbleSort(['c', 'b', 'a'])).toEqual(['a', 'b', 'c']);
  })
});