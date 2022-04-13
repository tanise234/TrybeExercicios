const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = (matrix) => {
    matrix.reduce((acc,element,index) => acc.push(element[index]),[]);
    return acc;
  }
  console.log(flatten(arrays));