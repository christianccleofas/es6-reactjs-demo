
export function run() {
  // code here
  
  //statement
  

  (function executor() {
    //function expression = cannot be hoisted
    // console.log("Statement: ", variableCall);
    // console.log("Expression: ", expressionFunc(4, 6));
  })();


  //function statement = can be hoisted
  const variableCall = statementFunc(6, 5);
  console.log("Statement: ", variableCall);

  function statementFunc(a, b) {
    //execute something...
    return a+b;
  };

  
  

  //hoisting is javascript principle wherin the value/function is being called even before it is initalized/declared...

  
}
