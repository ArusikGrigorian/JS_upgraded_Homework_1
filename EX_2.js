EX_2

function getfreq(arr){
let count=1;
let length=arr.length;
let newArr=[];
  arr=arr.sort((a,b)=>{return a-b;});
  for (let i=0; i<arr.length; i=i+count){
   count=1;
    for (let j=i+1; j<arr.length; j++){
      if (arr[i]===arr[j]){
        count++;
      }
    }
   newArr.push(arr[i]+":"+count/length);
  }
  return newArr;
}    
console.log(getfreq([1, 1, 2, 2, 3]));
                  //[4,4]
                  //[1,2,3]