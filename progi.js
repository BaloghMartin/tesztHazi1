function Greeter(input, ...args) {
  
  if(!input){
    return "Hello, my friend.";
  }
 
  const myArr = input.split(" ");

  if(myArr.length==1){
    return 'Hello, '+input +".";}
  
  if(args.length==0){
  if(myArr.length>1){
  myArr.splice(myArr.length-1, 0, "and");
  return "Hello, " + myArr.join(' ') + "."; }}

 

}
module.exports = Greeter;