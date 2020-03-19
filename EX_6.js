EX_6

function getchar(str){
let newArr=[];
let result;
let length=str.length;
  for(let i=0; i<length; i++){
    if(str.length>=3){
      newArr.push(Array.from(str.substr(0,3)));
      str=str.slice(3);
    }
  }
  for(let j=0; j<newArr.length; j++){
    newArr[j].push(newArr[j].shift());
  }
  newArr=newArr.concat(str);
  result=Array.prototype.concat.apply([],newArr).join("");
  return result;
}
console.log(getchar("dfgjkloyp"));
                  //"aweyoolp"
