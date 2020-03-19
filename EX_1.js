EX_1

var n = 9;
var x="";
for(var i = 0; i<n; i++){
      x="";
  for(var j=0; j<n; j++){
    if(i===0 && j===0 || i===j || i+j===n-1){
      x+=" * ";
    }
    else {
      x+="   ";
    }
  }
  console.log(x);
}