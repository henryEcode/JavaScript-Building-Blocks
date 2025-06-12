Type          Examples
Sting         "Hello"
Number        42,3,14
Bolean        True, False
Null          Null
Undefined     Undefined
Object        {name:"Alice"}
Array         [1,2,3]

to identify a datatype of the value of a variable, we use typeof keyword


String Methods
1. toUpperCase()
2. toLowerCase()
3. charAt()
4. slice()
5. length()

Notes : strings are immutable meaning once declared, they can not be replaced.


ARRAYS IN JAVASCRIPT
array is a collection of differnt values for a variables, objects, or even arrays. we use the literal type Square Bracket [] to declare an array.

How to access items in an Array.

Arrays just like string can be accessed using their index numbers. the first value of an array usually starts with the index of 0. the formular will be size of (array - 1)

Ways to modify arrays

Modifying and accessing an array is done with javascript methods.

for instance, we can know the length of an array ny using the method using".length" by attaching to the suffix of the array. eg: let students = ['Jonas','Sophia','Florence']; let studentSize = students.length.

Also, we can add items in an array by using the method ".push" by attaching ".push" to suffix of the variable eg  students.push = ['Henry']

Last value can also be deleted from an array we use the method ".pop()".

first value can also be deleted from an array we use the method ".shift()"