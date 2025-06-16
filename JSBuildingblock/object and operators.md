**********OBJECTS*******


contents of an object appear in key value pairs enclosed in a curly bracket. Example. 
let people = {
    name:Henry,
     age:20, 
     School:IBT,
     isAdult: true,
}

There are 2 ways to access values in an object
1. The square bracket []; we use the [] after the keys to access items in an object. eg: access the name in the above illustration. people['name']. Note: always remember that keys are interpreted as strings.

2. The dot notation "." we call keypairs in an object by applying period and the key of the objects.eg: access the age in the above illustration. people.age


*** Unlike strings and arrays, Objects can not be accessed using the index of keys.

Items can be deleted from object


**********OPERATORS********
Operators in Javascript
=     Assignment Operator
==    Equal to Operator
===   Equal to a datatype for comparison
+     Addition or Concatenation of strings
-     Subtraction
/     Division
*     Multiplication
**    Exponential
%     Modulus (Division Remainder)
++    Increment
--    Decrement


Math Methods
1. Math.round() helps to round up 
2. Math.ceil() rounds up numbers
3. Math.floor() rounds down numbers
4. Math.trunc()---

***************LOGICAL OPERATORS********
the truthy and falsy value in an && Operator
1. when an instruction involving a logical && statement is passed. it checks for the truthy and the falsy value in the instruction. if the first value is truthy, it will return the second value; if the second value is truthy it will return the first value.

The truthy and falsy value in || operator
1. when an instruction involving a logical || statement is passed. it checks for the truthy and the falsy value in the instruction. if the first value is truthy, it doesn't proceed to check the second statement, instead the first value is returned; likewise, if the first value is falsy, it returns ti goes a step further to verify the Bolean of the second argument. if truthy, it passes it. 