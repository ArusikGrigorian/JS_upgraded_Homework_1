EX_8

function getsbsts(arr){
let newArr=[]; 
  if(arr.length<=3){
    return arr;
  }
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      for(let n=j+1; n<arr.length; n++){
        newArr.push(new Array(arr[i], arr[j], arr[n]));
      }
    }
  }
  return newArr;
}
console.log(getsbsts([5, 9, 23, 0, -2, -1]));
                    //[19, 6]
                    //[4]
