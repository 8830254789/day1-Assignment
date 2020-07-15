//var declarations are globally scoped or function scoped while let and const are
 //blockscoped.
 //var variables can be updated and re-declared within its scope;
 //let variables can be updated but not re-declared;
 //const variables can neither be updated nor re-declared.
//  They are all hoisted to the top of their scope.

var name;
    console.log(name);
    name = "xyz";
////////////////////////////////////////////////////////////////////////////////
//let is now preferred for variable declaration. It's no surprise as it
// comes as an improvement to var declarations.
//It also solves the problem with var that we just covered.


let greeting = "say Hi";
greeting = "say Hello instead";
///////////////////////////////////////////////////////////////////////////////
//Variables declared with the const maintain constant values. const declarations
//share some similarities with let declarations.
//This means that the value of a variable declared with const remains the same
 //within its scope. It cannot be updated or re-declared.
 //So if we declare a variable with const, we can neither do this:




const greeting = {
        message: "say Hi",
        times: 4
    }
