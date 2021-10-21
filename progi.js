function Greeter(...args) {
  
  if(args.length==0){
    return "Hello, my friend.";
  }
 
  //const myArr = input.split(" ");
 
  //if(args.length==1){
    //return 'Hello, '+args[0] +".";}
  /*
  if(args.length==1){
  const myArr = args[0].split(" ");
  if(myArr.length==1){
  return 'Hello, '+args[0] +".";}
  if(myArr.length>1){
  myArr.splice(myArr.length-1, 0, "and");
  return "Hello, " + myArr.join(' ') + "."; }}


 */
  //if(args.length>0){
    let solutionArr = [];
      for (var i = 0; i < args.length; i++) {
        const tempArr = args[i].split(", ");
        solutionArr=solutionArr.concat(tempArr);
    }
    for (var i = 0; i < solutionArr.length-1; i++) {
      solutionArr[i]=solutionArr[i]+","; }
  if(solutionArr.length!=1){
    solutionArr.splice(solutionArr.length-1, 0, "and");}
    //minden szó szét van szedve majd csak ezeket kéne két csoportba szétdobni de nagyon jól vannak szétszedve
    return "Hello, " + solutionArr.join(' ') + ".";
  // }

 

}
module.exports = Greeter;