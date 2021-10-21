function Greeter(...args) {
  
  if(args.length==0){
    return "Hello, my friend.";
  }
 
  //const myArr = input.split(" ");
 
  //if(args.length==1){
    //return 'Hello, '+args[0] +".";}
  
  if(args.length==1){
  const myArr = args[0].split(" ");
  if(myArr.length==1){
  return 'Hello, '+args[0] +".";}
  if(myArr.length>1){
  myArr.splice(myArr.length-1, 0, "and");
  return "Hello, " + myArr.join(' ') + "."; }}



  if(args.length>0){
      for (var i = 0; i < args.length; i++) {
        const tempArr = args[i].split(" ");
        myArr=myArr.concat(tempArr);
    }
    myArr.splice(myArr.length-1, 0, "and");
    return "Hello, " + myArr.join(' ') + "."; }

 

}
module.exports = Greeter;