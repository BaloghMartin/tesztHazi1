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
    let nonCaps = [];
    let allCaps = [];
      for (var i = 0; i < args.length; i++) {
        const tempArr = args[i].split(", ");
        solutionArr=solutionArr.concat(tempArr);
    }
    for (var i = 0; i < solutionArr.length; i++) {
      if(solutionArr[i]==solutionArr[i].toUpperCase()){
        allCaps=allCaps.concat(solutionArr[i]);
      }
      else{
        nonCaps=nonCaps.concat(solutionArr[i]);
      }}

    //for (var i = 0; i < solutionArr.length-1; i++) {
      //solutionArr[i]=solutionArr[i]+","; }
    if(nonCaps.length!=0){
      for (var i = 0; i < nonCaps.length-1; i++) {
          nonCaps[i]=nonCaps[i]+","; }
        if(nonCaps.length>1){
        nonCaps.splice(nonCaps.length-1, 0, "and");}
        }
   
    if(allCaps.length!=0){
      for (var i = 0; i < allCaps.length-1; i++) {
          allCaps[i]=allCaps[i]+","; }          
          if(allCaps.length>1){
        allCaps.splice(allCaps.length-1, 0, "AND");}
          }
    
    if(nonCaps.length!=0 && allCaps.length==0){return "Hello, " + nonCaps.join(' ') + ".";}
    if(allCaps.length!=0 && nonCaps.length==0){return  "HELLO " + allCaps.join(' ') + "!";}
    if(allCaps.length!=0 && nonCaps.length!=0){return "Hello, " + nonCaps.join(' ') + "." + " AND HELLO " + allCaps.join(' ') + "!";}
}
  // }
    
    


module.exports = Greeter;