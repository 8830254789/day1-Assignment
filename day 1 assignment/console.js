//In javascript ,the console is an object which provides access to the browser
//ḍebugging console
//console.log method
//used to log(print) the output to console.we can put any type inside the log()
console.log('abc');
console.log(true);


//console.error() method

//used to log error message to the console.useful in testing code.
console.error('this is error method');

//console.warn() method
//used to log warning message to the console.by default the warning message
//is yellow color.
console.warn('this is warning method');
//console.clear method
//used to clear console
console.clear();
//console.time(); and console.timeEnd();
//whe we want to know the amount of time spend by a block or a function ,we can use these //function

console.time('abc');

console.timeEnd('abc');

//console.table();
//rgis method allows to generate table inside a console.the input must be array or an //////object
console.table({'a':1,'b':2});
