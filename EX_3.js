EX_3

function getnumstr(arr){
let sumofnum=0;
let sumofstr=0;
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i]==="number"){
      sumofnum+=1;
    }
    else{
      sumofstr+=1;
    }
  }
  return `Numbers: ${sumofnum} , Strings: ${sumofstr}`;
}
console.log(getnumstr([1, 4, "i am a string", "456"])); 
                   // [1, "10", "hi", 2, 3]
