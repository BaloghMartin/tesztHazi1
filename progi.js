function Greeter(...args) {
  //üres hívás lekezelése:
  if(args.length==0){
    return "Hello, my friend.";
  }
    //ha van legalabb 1 nev, akkor innen indul a mandula:
    let solutionArr = [];
    let nonCaps = [];
    let allCaps = [];
    //nevek szetszedese kulon tombindexekre:
      for (var i = 0; i < args.length; i++) {
        const tempArr = args[i].split(", ");
        solutionArr=solutionArr.concat(tempArr);
    }
    //tomb szetbontasa csak kicsi es csak nagy betus tombokre
    for (var i = 0; i < solutionArr.length; i++) {
      if(solutionArr[i]==solutionArr[i].toUpperCase()){
        allCaps=allCaps.concat(solutionArr[i]);
      }
      else{
        nonCaps=nonCaps.concat(solutionArr[i]);
      }}
    //vesszok es "and" beletetele a kisbetus tombbe
    if(nonCaps.length!=0){
      for (var i = 0; i < nonCaps.length-1; i++) {
          nonCaps[i]=nonCaps[i]+","; }
        if(nonCaps.length>1){
        nonCaps.splice(nonCaps.length-1, 0, "and");}
        }
   //vesszok es "and" beletetele a nagybetus tombbe
    if(allCaps.length!=0){
      for (var i = 0; i < allCaps.length-1; i++) {
          allCaps[i]=allCaps[i]+","; }          
          if(allCaps.length>1){
        allCaps.splice(allCaps.length-1, 0, "AND");}
          }
    //return ha csak kisbetusok voltak
    if(nonCaps.length!=0 && allCaps.length==0){return "Hello, " + nonCaps.join(' ') + ".";}
    //return ha csak nagybetusok voltak
    if(allCaps.length!=0 && nonCaps.length==0){return  "HELLO " + allCaps.join(' ') + "!";}
    //return ha vegyesen voltak
    if(allCaps.length!=0 && nonCaps.length!=0){return "Hello, " + nonCaps.join(' ') + "." + " AND HELLO " + allCaps.join(' ') + "!";}
}
module.exports = Greeter;