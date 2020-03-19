EX_7

function getprod(arr){
let result=[];
let maxminus;
for(let i=0; i<arr.length; i++){
  if(!Array.isArray(arr[i])){
    return "Invalid argument";
  }
maxminus=arr[i].filter(num=>num<0);
maxminus=Math.max.apply(null, maxminus.sort((a,b)=>{return (b-a);}));
result.push(maxminus);
  if(result.indexOf(-Infinity)!==-1){
    result.splice(result.indexOf(-Infinity),1);
  }
}
  if(result.length==0){
    return "No negatives";
  }
  return result.reduce((a,b)=>{return(a*b);});
}
console.log(getprod([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]])); 
                   //[[3, 4], [11, 0], [5, 6, 7, 8]] 
                   //[1, 2, 3]
