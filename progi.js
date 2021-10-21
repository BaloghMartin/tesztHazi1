function Greeter(input) {
  //return "HELLO";
  const myArr = input.split(" ");
  myArr.splice(myArr.length-1, 0, "and");
  return "Hello, " + myArr.join(' ') + "."; 

  if(!input){
    return "Hello, my friend.";

  }
  else{
  return 'Hello, '+input;}


}
module.exports = Greeter;