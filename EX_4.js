EX_4

function getlngstwrd(str){
let newString=str.replace(/[-,.?]/g, " ").split(" ");
let lengths=newString.map(item=>item.length);
let maxlengths=Math.max.apply(null,lengths);
let maxindex=lengths.lastIndexOf(maxlengths);
  
  return newString[maxindex];
}
console.log(getlngstwrd("A revolution without dancing is a revolution not worth having."));
                      //"Which would be worse - to live as a monster, or to die as a good man?"
