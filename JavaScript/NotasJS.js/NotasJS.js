const num = 123;

num.toString();  //Return --> "123"

(100 + 23) .toString();  // return --> "123"

num.valueOf();  //return --> 123

const num1 = 9.654

num1.toExponential(2);  //return-->  "9.66e+0"

num1.toFixed(0);  //return--> 10
num1.toFixed(2);  //return--> "9.66"

num1.toPrecision(2);  //return --> "9.7"
num1.toFixed(4);  //return --> "9.654"

Number(true);  //return --> 1
Number(false);  //return --> 0
Number("10");  //return --> 10
Number("10.33");  //return --> 10.33
Number("10,33");  //return --> NaN

parseInt ("10");  //return --> 10
parseInt("10.33"); //return --> 10
parseInt(" 10 20 30");  //return --> 10
parseInt("10 years");  //returns --> 10
parseInt("years 10"); //return --> NaN

parseFloat("10");//returns --> 10
parseFloat("10.33");//returns --> 10.33
parseFloat("10 20 30");//returns --> 10
parseFloat("10 YEARS");//returns --> 10
parseFloat("years 10"); //return --> NaN

typeof "Tom"    //return --> "string"
typeof 55   //return --> "number"
typeof NaN      //return --> "number"
typeof true   //return --> "boolea"
typeof ["a","b","c"]    //return -->   "object"
typeof {name: 'Tom', age:38}      //return -->  "object" 
typeof new Date()     //return -->  "object"
typeof function () {}    //return --> "function"
typeof variable     //return --> "undefined"
typeof null         //return --> "object"
